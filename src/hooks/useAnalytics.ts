import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEvent } from '../lib/analytics';

export const useAnalytics = () => {
    const location = useLocation();
    const [scrolledDepths, setScrolledDepths] = useState<Set<number>>(new Set());
    const observerRef = useRef<IntersectionObserver | null>(null);

    // 1. Track Page Views (Awareness)
    useEffect(() => {
        trackEvent({
            eventName: 'page_view',
            category: 'Awareness',
            trigger: 'Every route',
            page: location.pathname
        });

        // Reset scroll tracking on page change
        setScrolledDepths(new Set());
    }, [location]);

    // 2. Track Scroll Depth (Engagement)
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;

            const checkDepth = (depth: number) => {
                if (scrollPercent >= depth && !scrolledDepths.has(depth)) {
                    trackEvent({
                        eventName: 'scroll_depth',
                        category: 'Engagement',
                        trigger: `${depth}%`,
                        metadata: { depth: `${depth}%` }
                    });
                    setScrolledDepths(prev => new Set(prev).add(depth));
                }
            };

            checkDepth(25);
            checkDepth(50);
            checkDepth(75);
        };

        // Simple throttle
        let timeout: NodeJS.Timeout;
        const throttledScroll = () => {
            if (timeout) return;
            timeout = setTimeout(() => {
                handleScroll();
                clearTimeout(timeout);
            }, 500);
        };

        window.addEventListener('scroll', throttledScroll);
        return () => window.removeEventListener('scroll', throttledScroll);
    }, [scrolledDepths]);

    // 3. Track Section Views (Engagement) & Intent (pricing_view)
    useEffect(() => {
        const sectionsToTrack = [
            { id: 'all-features', name: 'Offerings' }, // Adjust IDs based on your actual DOM
            { id: 'global-icp', name: 'ICP' },
            { id: 'industries', name: 'Verticals' },
            { id: 'pricing', name: 'Pricing' } // Intent
        ];

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionConfig = sectionsToTrack.find(s => s.id === entry.target.id);
                    if (sectionConfig) {
                        const isIntent = sectionConfig.name === 'Pricing';
                        trackEvent({
                            eventName: isIntent ? 'pricing_view' : 'section_view',
                            category: isIntent ? 'Intent' : 'Engagement',
                            section: sectionConfig.name,
                            trigger: `${sectionConfig.name} section visible`
                        });
                        // Stop observing once tracked (optional, if unique view desired per session/page)
                        // observerRef.current?.unobserve(entry.target);
                    }
                }
            });
        }, { threshold: 0.5 }); // 50% visible

        sectionsToTrack.forEach(section => {
            const el = document.getElementById(section.id);
            if (el) observerRef.current?.observe(el);
        });

        return () => observerRef.current?.disconnect();
    }, [location.pathname]); // Re-run on page change to re-attach observers

    // 4. Track Exit Intent (Exit)
    useEffect(() => {
        const handleExitIntent = (e: MouseEvent) => {
            if (e.clientY <= 0) {
                trackEvent({
                    eventName: 'exit_intent',
                    category: 'Exit',
                    trigger: 'Mouse leave top'
                });
                // Remove listener to prevent spamming
                document.removeEventListener('mouseleave', handleExitIntent);
            }
        };

        document.addEventListener('mouseleave', handleExitIntent);
        return () => document.removeEventListener('mouseleave', handleExitIntent);
    }, [location.pathname]);

    // 5. Track Global Clicks (CTA, Trust, Intent)
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Check for Buttons/Links
            const clickable = target.closest('button, a') as HTMLElement;
            if (!clickable) return;

            const text = clickable.innerText?.toLowerCase() || '';
            const href = (clickable as HTMLAnchorElement).href || '';

            // CTA Clicks
            if (text.includes('book a demo') || text.includes('book demo') || text.includes('get started')) {
                trackEvent({
                    eventName: 'cta_click',
                    category: 'CTA',
                    element: clickable.innerText,
                    trigger: 'Book Demo/Get Started Click'
                });
                return; // Prioritize CTA
            }

            // Trust (Case Study) - Assuming case studies link to /case-studies or have specific class
            if (href.includes('case-study') || text.includes('read story')) {
                trackEvent({
                    eventName: 'case_study_click',
                    category: 'Trust',
                    element: clickable.innerText,
                    trigger: 'Proof interaction'
                });
            }

            // Intent (Vertical Selection) - Assuming navigation or list items
            // This logic might need refinement based on exact DOM structure for "Vertical selection"
            if (text.includes('fintech') || text.includes('saas') || text.includes('manufacturing')) {
                trackEvent({
                    eventName: 'usecase_click',
                    category: 'Intent',
                    element: clickable.innerText,
                    trigger: 'Vertical selection'
                });
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    // 6. Form Tracking (Lead)
    // Note: It's better to attach specific handlers to form components, but we can try global capture
    useEffect(() => {
        const handleFocus = (e: FocusEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
                const form = target.closest('form');
                if (form && !form.dataset.trackingListened) {
                    trackEvent({
                        eventName: 'form_start',
                        category: 'Lead',
                        trigger: 'Demo form focus' // First interaction
                    });
                    form.dataset.trackingListened = 'true';
                }
            }
        };

        const handleSubmit = (e: SubmitEvent) => {
            const target = e.target as HTMLFormElement;
            trackEvent({
                eventName: 'form_submit',
                category: 'Lead',
                trigger: 'Demo submitted',
                element: target.id || target.name || 'Unknown Form'
            });
        };

        document.addEventListener('focus', handleFocus, true); // Capture phase
        document.addEventListener('submit', handleSubmit);

        return () => {
            document.removeEventListener('focus', handleFocus, true);
            document.removeEventListener('submit', handleSubmit);
        };
    }, []);
};
