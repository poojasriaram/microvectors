
import { v4 as uuidv4 } from 'uuid';

export interface AnalyticsEvent {
    // Infrastructure & Geo
    ip_address: string;
    geo_country: string;
    geo_state: string;
    geo_city: string;
    geo_latitude: string;
    geo_longitude: string;

    // User Profile
    user_id: string;
    user_name: string;
    user_email: string;
    user_type: 'new' | 'returning';
    returning_user: boolean;
    first_visit_timestamp: string;
    last_visit_timestamp: string;
    total_sessions: number;
    total_time_spent: number;
    avg_session_duration: number;

    // Session Details
    session_id: string;
    session_number: number;
    session_start_time: string;
    session_end_time: string;
    total_session_duration: number;
    total_pages_visited: number;
    bounce: boolean;

    // Traffic & UTMs
    traffic_source: string;
    referrer_url: string;
    campaign_name: string;
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_term: string;
    utm_content: string;

    // Navigation Details
    page: string;
    page_url: string;
    previous_page: string;
    next_page: string;
    entry_page: string;
    exit_page: string;
    page_title: string;
    time_on_page: number;
    scroll_percentage: number;
    max_scroll_depth: number;

    // Interaction Details
    interaction_count: number;
    inactivity_time: number;
    event_id: string;
    event_name: string;
    event_category: string;
    event_action: string;
    event_label: string;
    section: string;
    element_type: string;
    element_id: string;
    element_class: string;
    element_text: string;
    click_position_x: number;
    click_position_y: number;

    // Form Details
    form_id: string;
    form_field_name: string;
    form_completion_status: string;
    form_abandonment: boolean;

    // Goals & Conversions
    goal_name: string;
    goal_completed: boolean;
    conversion_id: string;
    conversion_value: number;
    funnel_step: string;

    // Device & Tech
    device_type: string;
    device_brand: string;
    device_model: string;
    operating_system: string;
    browser: string;
    browser_version: string;
    screen_width: number;
    screen_height: number;
    viewport_width: number;
    viewport_height: number;
    language: string;
    timezone: string;

    // Network & Performance
    network_type: string;
    connection_speed: string;
    page_load_time: number;
    dom_load_time: number;
    first_contentful_paint: number;
    largest_contentful_paint: number;
    time_to_interactive: number;

    // Error Logging
    js_error_message: string;
    api_error_message: string;
    http_status_code: number;

    // System Specs
    cpu_cores: number;
    memory_size: number;

    // Behavioral Signals
    tab_visibility_status: string;
    back_button_used: boolean;
    copy_event: boolean;
    paste_event: boolean;
    rage_click_detected: boolean;
    user_segment: string;
}

class AnalyticsService {
    private initialized: boolean = false;
    private userId: string = '';
    private sessionId: string = '';
    private sessionStartTime: number = Date.now();
    private pageStartTime: number = Date.now();
    private interactionCount: number = 0;
    private maxScrollDepth: number = 0;
    private lastInteractionTime: number = Date.now();
    private previousPage: string = '';
    private entryPage: string = '';

    // Rage click detection
    private clickHistory: { time: number, x: number, y: number }[] = [];

    // Persistent stats
    private stats = {
        totalSessions: 0,
        firstVisit: '',
        totalTimeSpent: 0,
        lastVisit: ''
    };

    // Geo & IP
    private context = {
        ip: 'detecting...',
        country: '',
        state: '',
        city: '',
        lat: '',
        lon: ''
    };

    private calculateSegment(): string {
        const pagesViewed = parseInt(sessionStorage.getItem('tg_pages_viewed') || '1');
        const timeOnPage = Date.now() - this.pageStartTime;
        const scroll = Math.round((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100);

        // 1. High-Intent Lead (Visible on checkout/demo page)
        if (window.location.pathname.includes('book-consultation') ||
            window.location.pathname.includes('talk-to-expert') ||
            window.location.pathname.includes('partners')) {
            return 'High-Intent Lead';
        }

        // 2. Technical Researcher (Deep scrollers on industry/solutions)
        if ((window.location.pathname.includes('industries') || window.location.pathname.includes('solutions')) &&
            scroll > 60 && timeOnPage > 20000) {
            return 'Technical Researcher';
        }

        // 3. Product Explorer (Many pages viewed)
        if (pagesViewed >= 4) return 'Product Explorer';

        // 4. Returning Fan
        if (this.stats.totalSessions > 2) return 'Returning Fan';

        // 5. Frustrated Visitor (Detected via rage clicking)
        if (this.clickHistory.length > 5) return 'Frustrated Visitor';

        // 6. Quick Skimmer (Quick activity but early scroll)
        if (timeOnPage < 10000 && scroll > 30) return 'Quick Skimmer';

        // 7. Passive Observer (Inactivity)
        if (Date.now() - this.lastInteractionTime > 45000) return 'Passive Observer';

        return 'Casual Browser';
    }

    constructor() {
        if (typeof window !== 'undefined') {
            this.init();
        }
    }

    private async init() {
        if (this.initialized) return;

        // Load Persistent Data
        this.userId = localStorage.getItem('tg_user_id') || uuidv4();
        localStorage.setItem('tg_user_id', this.userId);

        const storedStats = localStorage.getItem('tg_user_stats');
        if (storedStats) {
            this.stats = JSON.parse(storedStats);
        } else {
            this.stats.firstVisit = new Date().toISOString();
        }

        // Session Management
        this.sessionId = sessionStorage.getItem('tg_session_id') || uuidv4();
        if (!sessionStorage.getItem('tg_session_id')) {
            this.stats.totalSessions++;
            sessionStorage.setItem('tg_session_id', this.sessionId);
        }

        this.entryPage = sessionStorage.getItem('tg_entry_page') || window.location.pathname;
        sessionStorage.setItem('tg_entry_page', this.entryPage);

        // Increment pages viewed counter
        const views = parseInt(sessionStorage.getItem('tg_pages_viewed') || '0') + 1;
        sessionStorage.setItem('tg_pages_viewed', views.toString());

        this.updateStats();
        await this.fetchContext();

        this.initialized = true;
        this.setupListeners();
        this.track('session_start', 'lifecycle', 'start');
    }

    private updateStats() {
        this.stats.lastVisit = new Date().toISOString();
        localStorage.setItem('tg_user_stats', JSON.stringify(this.stats));
    }

    private async fetchContext() {
        try {
            const res = await fetch('https://ipapi.co/json/');
            const data = await res.json();
            this.context = {
                ip: data.ip,
                country: data.country_name,
                state: data.region,
                city: data.city,
                lat: data.latitude,
                lon: data.longitude
            };
            // Persist for cross-component use (e.g. Chatbot Lead tracking)
            localStorage.setItem('tg_ip', data.ip || '');
            localStorage.setItem('tg_country', data.country_name || '');
            localStorage.setItem('tg_state', data.region || '');
            localStorage.setItem('tg_city', data.city || '');
        } catch (e) {
            console.warn('Geo fetch failed');
        }
    }

    private getUTM() {
        const params = new URLSearchParams(window.location.search);
        return {
            source: params.get('utm_source') || '',
            medium: params.get('utm_medium') || '',
            campaign: params.get('utm_campaign') || '',
            term: params.get('utm_term') || '',
            content: params.get('utm_content') || ''
        };
    }

    private getPerformance() {
        const nav = performance.getEntriesByType('navigation')[0] as any;
        const paint = performance.getEntriesByType('paint');
        const fcp = paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0;

        return {
            load: nav?.loadEventEnd || 0,
            dom: nav?.domContentLoadedEventEnd || 0,
            fcp: fcp,
            lcp: 0 // Simplified for brevity
        };
    }

    public track(eventName: string, category: string = 'general', action: string = 'view', metadata: any = {}) {
        // EXCLUDE LOCALHOST FROM ANALYTICS
        if (typeof window !== 'undefined' && 
            (window.location.hostname === 'localhost' || 
             window.location.hostname === '127.0.0.1')) {
            console.log(`📊 [Analytics Subsidized] ${eventName}`, { category, action, metadata });
            return;
        }

        const utm = this.getUTM();
        const perf = this.getPerformance();
        const now = Date.now();

        // STRICT ORDERING as requested by user
        const event: AnalyticsEvent = {
            // 1-6 Geo & IP
            ip_address: this.context.ip,
            geo_country: this.context.country,
            geo_state: this.context.state,
            geo_city: this.context.city,
            geo_latitude: this.context.lat.toString(),
            geo_longitude: this.context.lon.toString(),

            // 7-11 User Profile
            user_id: this.userId,
            user_name: localStorage.getItem('user_name') || 'anonymous',
            user_email: localStorage.getItem('user_email') || '',
            user_type: this.stats.totalSessions > 1 ? 'returning' : 'new',
            returning_user: this.stats.totalSessions > 1,

            // 12-16 Persistent Stats
            first_visit_timestamp: this.stats.firstVisit,
            last_visit_timestamp: this.stats.lastVisit,
            total_sessions: this.stats.totalSessions,
            total_time_spent: this.stats.totalTimeSpent,
            avg_session_duration: this.stats.totalTimeSpent / (this.stats.totalSessions || 1),

            // 17-23 Session Details
            session_id: this.sessionId,
            session_number: this.stats.totalSessions,
            session_start_time: new Date(this.sessionStartTime).toISOString(),
            session_end_time: '',
            total_session_duration: now - this.sessionStartTime,
            total_pages_visited: parseInt(sessionStorage.getItem('tg_pages_viewed') || '1'),
            bounce: sessionStorage.getItem('tg_pages_viewed') === '1',

            // 24-31 Traffic & UTMs
            traffic_source: document.referrer ? (document.referrer.includes(window.location.hostname) ? 'internal' : 'referral') : 'direct',
            referrer_url: document.referrer,
            campaign_name: utm.campaign,
            utm_source: utm.source,
            utm_medium: utm.medium,
            utm_campaign: utm.campaign,
            utm_term: utm.term,
            utm_content: utm.content,

            // 32-41 Navigation Details
            page: window.location.pathname,
            page_url: window.location.href,
            previous_page: this.previousPage,
            next_page: '',
            entry_page: this.entryPage,
            exit_page: '',
            page_title: document.title,
            time_on_page: now - this.pageStartTime,
            scroll_percentage: Math.round((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100),
            max_scroll_depth: this.maxScrollDepth,

            // 42-53 Interaction Details
            interaction_count: this.interactionCount,
            inactivity_time: now - this.lastInteractionTime,
            event_id: uuidv4(),
            event_name: eventName,
            event_category: category,
            event_action: action,
            event_label: metadata.label || '',
            section: metadata.section || '',
            element_type: metadata.element_type || '',
            element_id: metadata.element_id || '',
            element_class: metadata.element_class || '',
            element_text: metadata.element_text || '',

            // 54-55 Click Position
            click_position_x: metadata.x || 0,
            click_position_y: metadata.y || 0,

            // 56-59 Form Details
            form_id: metadata.form_id || '',
            form_field_name: metadata.field || '',
            form_completion_status: metadata.status || '',
            form_abandonment: false,

            // 60-64 Goals & Conversions
            goal_name: metadata.goal || '',
            goal_completed: !!metadata.goal,
            conversion_id: '',
            conversion_value: 0,
            funnel_step: metadata.step || '',

            // 65-76 Device & Tech
            device_type: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
            device_brand: '',
            device_model: '',
            operating_system: navigator.platform,
            browser: navigator.userAgent.split(' ')[0],
            browser_version: '',
            screen_width: window.screen.width,
            screen_height: window.screen.height,
            viewport_width: window.innerWidth,
            viewport_height: window.innerHeight,
            language: navigator.language,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

            // 77-83 Network & Performance
            network_type: (navigator as any).connection?.effectiveType || 'unknown',
            connection_speed: (navigator as any).connection?.downlink || 'unknown',
            page_load_time: perf.load,
            dom_load_time: perf.dom,
            first_contentful_paint: perf.fcp,
            largest_contentful_paint: perf.lcp,
            time_to_interactive: 0,

            // 84-86 Error Logging
            js_error_message: metadata.error || '',
            api_error_message: '',
            http_status_code: 200,

            // 87-88 System Specs
            cpu_cores: navigator.hardwareConcurrency || 0,
            memory_size: (navigator as any).deviceMemory || 0,

            // 89-93 Behavioral Signals
            tab_visibility_status: document.visibilityState,
            back_button_used: false,
            copy_event: metadata.copy || false,
            paste_event: metadata.paste || false,
            rage_click_detected: this.detectRageClick(metadata.x, metadata.y),
            user_segment: this.calculateSegment()
        };

        this.sendToSheet(event);
    }

    private detectRageClick(x: number, y: number) {
        if (!x || !y) return false;
        const now = Date.now();
        this.clickHistory.push({ time: now, x, y });
        this.clickHistory = this.clickHistory.filter(c => now - c.time < 2000);

        if (this.clickHistory.length > 5) {
            const first = this.clickHistory[0];
            const dist = Math.sqrt(Math.pow(x - first.x, 2) + Math.pow(y - first.y, 2));
            return dist < 50;
        }
        return false;
    }

    private async sendToSheet(event: AnalyticsEvent) {
        const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

        if (!GOOGLE_SCRIPT_URL) {
            console.warn('Analytics disabled: VITE_GOOGLE_SCRIPT_URL not found in environment.');
            return;
        }

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify({
                    table: 'User Behavior',
                    fields: event
                })
            });
            console.log('Analytics synced:', event.event_name);
        } catch (e) {
            console.warn('Analytics Send Failed:', e);
        }
    }

    private setupListeners() {
        // Track Clicks
        window.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            const btn = target.closest('button, a, input');
            this.interactionCount++;
            this.lastInteractionTime = Date.now();

            this.track('click', 'interaction', 'click', {
                x: e.clientX,
                y: e.clientY,
                element_type: btn?.tagName || target.tagName,
                element_id: target.id || btn?.id,
                element_text: (btn as HTMLElement)?.innerText?.slice(0, 50) || '',
                element_class: target.className
            });
        });

        // Track Scroll
        let scrollTimeout: any;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const depth = Math.round((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100);
                if (depth > this.maxScrollDepth) {
                    this.maxScrollDepth = depth;
                    this.track('scroll_depth', 'interaction', 'scroll', { depth });
                }
            }, 500);
        });

        // Track Copy/Paste
        window.addEventListener('copy', () => this.track('content_copy', 'behavior', 'copy', { copy: true }));
        window.addEventListener('paste', () => this.track('content_paste', 'behavior', 'paste', { paste: true }));

        // Visibility Change
        document.addEventListener('visibilitychange', () => {
            this.track('visibility_change', 'lifecycle', document.visibilityState);
        });

        // Errors
        window.addEventListener('error', (e) => {
            this.track('js_error', 'system', 'error', { error: e.message });
        });
    }

    public setPreviousPage(path: string) {
        this.previousPage = path;
    }
}

export const analytics = new AnalyticsService();
export const track = analytics.track.bind(analytics);
