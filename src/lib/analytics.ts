import { v4 as uuidv4 } from 'uuid';

export type EventName =
    | 'nav_deep_trace' | 'scroll_granular_stat' | 'click_advanced_event'
    | 'hover_focus_track' | 'form_interaction_flow' | 'input_intel_batch'
    | 'session_behavior_summary' | 'device_context_snapshot' | 'vitals_perf_log'
    | 'friction_error_report' | 'funnel_step_reached' | 'intent_scoring_update'
    | 'content_consumption_log' | 'journey_path_stage' | 'feedback_signal_catch';

export interface AnalyticsEvent {
    ip_address: string;
    geo_location: string;
    user_name: string;
    event_name: EventName;
    user_id: string;
    session_id: string;
    page: string;
    page_url: string;
    section: string;
    element: string;
    device: string;
    browser: string;
    timestamp: string;
    metadata: Record<string, any>;
}

class AnalyticsService {
    private userId: string = '';
    private sessionId: string = '';
    private initialized: boolean = false;
    private batch: AnalyticsEvent[] = [];
    private startTime: number = Date.now();
    private eventSequence: number = 0;

    private ipAddress: string = "detecting_ip...";
    private locationStr: string = "detecting_location...";
    private browserName: string = "detecting_browser...";
    private contextPromise: Promise<void> | null = null;

    constructor() {
        if (typeof window !== 'undefined') {
            this.init();
        }
    }

    private async init() {
        if (this.initialized) return;

        this.userId = localStorage.getItem('dt_user_id') || uuidv4();
        this.sessionId = sessionStorage.getItem('dt_session_id') || uuidv4();
        this.browserName = this.getDetailedBrowser();

        localStorage.setItem('dt_user_id', this.userId);
        sessionStorage.setItem('dt_session_id', this.sessionId);

        this.contextPromise = this.fetchExtendedContext();

        this.initialized = true;
        this.setupAutoTrackers();

        this.track('device_context_snapshot', {
            screen: `${window.screen.width}x${window.screen.height}`,
            userAgent: navigator.userAgent
        });
    }

    private async fetchExtendedContext() {
        if ("geolocation" in navigator) {
            const getPreciseLoc = () => new Promise<string>((resolve) => {
                navigator.geolocation.getCurrentPosition(
                    async (pos) => {
                        try {
                            const { latitude, longitude } = pos.coords;
                            const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
                            const data = await res.json();
                            resolve(`${data.city || data.locality}, ${data.principalSubdivision}, ${data.countryName}`);
                        } catch {
                            resolve("");
                        }
                    },
                    () => resolve(""),
                    { timeout: 5000 }
                );
            });

            const preciseLoc = await getPreciseLoc();
            if (preciseLoc) {
                this.locationStr = preciseLoc;
            }
        }

        try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            this.ipAddress = data.ip || "unknown";

            if (this.locationStr.includes('detecting')) {
                this.locationStr = `${data.city || ''}, ${data.region || ''}, ${data.country_name || ''}`.replace(/^, |, $/g, '');
            }
        } catch (e) {
            this.ipAddress = "VPN/Protected";
            if (this.locationStr.includes('detecting')) {
                this.locationStr = "Location Private";
            }
        }
    }

    private hasConsent(): boolean {
        return localStorage.getItem('trustflow_cookie_consent') !== 'declined';
    }

    private getCurrentUser(): string {
        return localStorage.getItem('user_name') ||
            localStorage.getItem('dt_user_name') ||
            "anonymous";
    }

    public track(eventName: EventName, metadata: Record<string, any> = {}) {
        if (!this.hasConsent()) return;

        const event: AnalyticsEvent = {
            ip_address: this.ipAddress,
            geo_location: this.locationStr,
            user_name: this.getCurrentUser(),
            event_name: eventName,
            user_id: this.userId,
            session_id: this.sessionId,
            page: window.location.pathname,
            page_url: window.location.href, // Capturing full URL
            section: metadata.section || "global",
            element: metadata.element || "none",
            device: this.getDeviceType(),
            browser: this.browserName,
            timestamp: new Date().toISOString(),
            metadata: {
                ...metadata,
                sequence: ++this.eventSequence,
                session_duration_ms: Date.now() - this.startTime
            }
        };

        this.queueEvent(event);
    }

    private queueEvent(event: AnalyticsEvent) {
        this.batch.push(event);
        if (this.batch.length >= 3) {
            this.flush();
        } else {
            setTimeout(() => this.flush(), 3000);
        }
    }

    private async flush() {
        if (this.batch.length === 0) return;

        if (this.contextPromise) await this.contextPromise;

        const eventsToFlush = [...this.batch];
        this.batch = [];

        const finalized = eventsToFlush.map(e => ({
            ...e,
            ip_address: e.ip_address.includes('...') ? this.ipAddress : e.ip_address,
            geo_location: e.geo_location.includes('...') ? this.locationStr : e.geo_location,
            user_name: e.user_name === "anonymous" ? this.getCurrentUser() : e.user_name
        }));

        const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
        const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;

        if (AIRTABLE_API_KEY && AIRTABLE_BASE_ID) {
            try {
                const records = finalized.map(event => ({
                    fields: {
                        "ip_address": event.ip_address,
                        "geo_location": event.geo_location,
                        "user_name": event.user_name,
                        "event_name": event.event_name,
                        "user_id": event.user_id,
                        "session_id": event.session_id,
                        "page": event.page,
                        "page_url": event.page_url, // Added to mapping
                        "browser": event.browser,
                        "timestamp": event.timestamp,
                        "metadata": JSON.stringify(event.metadata),
                        "device": event.device
                    }
                }));

                await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Events`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ records, typecast: true })
                });
            } catch (error) {
                console.warn('Airtable Sync Error:', error);
            }
        }
    }

    private setupAutoTrackers() {
        document.addEventListener('blur', (e) => {
            const target = e.target as HTMLInputElement;
            if (target.name) {
                const key = target.name.toLowerCase();
                if (key.includes('name') || key.includes('first')) {
                    localStorage.setItem('user_name', target.value);
                }
            }
        }, true);

        this.track('nav_deep_trace');

        window.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            const btn = target.closest('button, a') as HTMLElement;
            if (btn) {
                this.track('click_advanced_event', {
                    text: btn.innerText.trim().slice(0, 30),
                    id: btn.id
                });
            }
        });
    }

    private getDetailedBrowser(): string {
        const ua = navigator.userAgent;
        if (ua.includes("Edg/")) return "Microsoft Edge";
        if (ua.includes("Chrome")) return "Google Chrome";
        if (ua.includes("Firefox")) return "Mozilla Firefox";
        if (ua.includes("Safari") && !ua.includes("Chrome")) return "Apple Safari";
        return "Generic Browser";
    }

    private getDeviceType(): string {
        const ua = navigator.userAgent;
        if (/tablet|ipad|playbook|silk/i.test(ua)) return "tablet";
        if (/Mobile|Android|iP(hone|od)|IEMobile/i.test(ua)) return "mobile";
        return "desktop";
    }
}

export const analytics = new AnalyticsService();
export const track = analytics.track.bind(analytics);
