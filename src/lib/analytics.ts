
import { v4 as uuidv4 } from 'uuid';

export type EventName =
    | 'page_view' | 'page_exit' | 'navigation_path'
    | 'scroll_25' | 'scroll_50' | 'scroll_75' | 'scroll_100'
    | 'time_on_page' | 'idle_time'
    | 'button_click' | 'link_click' | 'cta_click' | 'hover_pricing' | 'search_query'
    | 'form_start' | 'form_abandon' | 'form_submit'
    | 'video_play' | 'video_pause' | 'video_complete'
    | 'rage_click' | 'validation_error' | 'api_error';

export interface AnalyticsEvent {
    event_name: EventName;
    user_id: string;
    session_id: string;
    page_url: string;
    referrer: string;
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
    private batchTimer: any = null;
    private lastClickTime: number = 0;
    private clickCount: number = 0;

    constructor() {
        if (typeof window !== 'undefined') {
            this.init();
        }
    }

    private init() {
        if (this.initialized) return;

        // Extract IDs from localStorage or generate new ones
        this.userId = localStorage.getItem('dt_user_id') || uuidv4();
        this.sessionId = sessionStorage.getItem('dt_session_id') || uuidv4();

        localStorage.setItem('dt_user_id', this.userId);
        sessionStorage.setItem('dt_session_id', this.sessionId);

        this.initialized = true;
        this.setupAutoTrackers();
    }

    private hasConsent(): boolean {
        return localStorage.getItem('trustflow_cookie_consent') === 'accepted';
    }

    public track(eventName: EventName, metadata: Record<string, any> = {}) {
        if (!this.hasConsent()) return;

        const event: AnalyticsEvent = {
            event_name: eventName,
            user_id: this.userId,
            session_id: this.sessionId,
            page_url: window.location.href,
            referrer: document.referrer,
            device: this.getDeviceType(),
            browser: navigator.userAgent,
            timestamp: new Date().toISOString(),
            metadata
        };

        this.queueEvent(event);
    }

    private queueEvent(event: AnalyticsEvent) {
        this.batch.push(event);

        if (this.batch.length >= 5) {
            this.flush();
        } else {
            if (this.batchTimer) clearTimeout(this.batchTimer);
            this.batchTimer = setTimeout(() => this.flush(), 2000);
        }
    }

    private async flush() {
        if (this.batch.length === 0) return;

        const eventsToFlush = [...this.batch];
        this.batch = [];

        try {
            const response = await fetch('/api/analytics', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ events: eventsToFlush })
            });

            if (!response.ok) throw new Error('API route failed');
        } catch (error) {
            console.warn('Bridge failed, attempting direct Airtable sync (Development Mode)...');

            // Fallback: Direct Airtable call (Useful for local dev without Vercel)
            const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
            const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;

            if (AIRTABLE_API_KEY && AIRTABLE_BASE_ID) {
                try {
                    const records = eventsToFlush.map(event => ({
                        fields: {
                            "event_name": event.event_name,
                            "user_id": event.user_id,
                            "session_id": event.session_id,
                            "page_url": event.page_url,
                            "timestamp": event.timestamp,
                            "metadata": JSON.stringify(event.metadata),
                            "device": event.device,
                            "browser": event.browser
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
                } catch (directError) {
                    console.error('Direct Airtable sync failed:', directError);
                }
            }
        }
    }

    private setupAutoTrackers() {
        // Page view on load
        this.track('page_view');

        // Scroll tracking
        let scrollMarks = { s25: false, s50: false, s75: false, s100: false };
        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
            if (scrollPercent >= 25 && !scrollMarks.s25) { this.track('scroll_25'); scrollMarks.s25 = true; }
            if (scrollPercent >= 50 && !scrollMarks.s50) { this.track('scroll_50'); scrollMarks.s50 = true; }
            if (scrollPercent >= 75 && !scrollMarks.s75) { this.track('scroll_75'); scrollMarks.s75 = true; }
            if (scrollPercent >= 99 && !scrollMarks.s100) { this.track('scroll_100'); scrollMarks.s100 = true; }
        });

        // Click tracking
        window.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            const btn = target.closest('button, a') as HTMLElement;
            if (btn) {
                const isCTA = btn.classList.contains('bg-blue-600') || btn.innerText.toLowerCase().includes('demo');
                this.track(isCTA ? 'cta_click' : 'button_click', {
                    text: btn.innerText,
                    id: btn.id,
                    tag: btn.tagName
                });
            }

            // Rage click detection
            const now = Date.now();
            if (now - this.lastClickTime < 300) {
                this.clickCount++;
                if (this.clickCount >= 5) {
                    this.track('rage_click', { x: e.clientX, y: e.clientY });
                    this.clickCount = 0;
                }
            } else {
                this.clickCount = 1;
            }
            this.lastClickTime = now;
        });

        // Exit intent detection
        document.addEventListener('mouseleave', (e) => {
            if (e.clientY <= 0) {
                this.track('page_exit', { trigger: 'exit_intent' });
            }
        });

        // Section / Intersection tracking
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.track('navigation_path', { section: entry.target.id || 'unknown_section' });
                }
            });
        }, { threshold: 0.5 });

        // Observe main sections if they exist
        ['hero', 'global-icp', 'features', 'pricing'].forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        // Form Tracking
        document.addEventListener('focusin', (e) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
                this.track('form_start', { field: (target as HTMLInputElement).name });
            }
        }, true);

        document.addEventListener('submit', (e) => {
            const target = e.target as HTMLFormElement;
            this.track('form_submit', { formId: target.id });
        }, true);

        // Page exit
        window.addEventListener('beforeunload', () => {
            this.track('page_exit');
            this.flush();
        });
    }

    private getDeviceType(): string {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return "tablet";
        if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) return "mobile";
        return "desktop";
    }

    /**
     * Powering real-time personalization for DeepTrust
     * Returns insights about the user's current session behavior
     */
    public getBehavioralSummary() {
        return {
            userId: this.userId,
            isHighIntent: this.batch.some(e => e.event_name === 'cta_click'),
            consentGiven: this.hasConsent(),
            path: window.location.pathname
        };
    }
}

export const analytics = new AnalyticsService();
