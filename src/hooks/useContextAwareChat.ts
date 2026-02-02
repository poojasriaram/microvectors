import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface ContextTrigger {
    id: string; // The ID of the section/block
    name: string; // Readable name for the user
    triggerCount: number; // To track if we've already triggered for this session
}

// Global state to avoid re-triggering the same context multiple times per session
const triggeredContexts = new Set<string>();

export const useContextAwareChat = () => {
    const location = useLocation();
    const observerRef = useRef<IntersectionObserver | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Define which sections trigger a chatbot prompt
        const triggers: ContextTrigger[] = [
            // --- Global/Common ---
            { id: 'pricing', name: 'Pricing', triggerCount: 0 },
            { id: 'global-icp', name: 'ICP', triggerCount: 0 },
            { id: 'all-features', name: 'Offerings', triggerCount: 0 },
            { id: 'industries', name: 'Verticals', triggerCount: 0 },

            // --- Home Page ---
            { id: 'ai-powered-revenue-acceleration', name: 'Revenue Acceleration', triggerCount: 0 },
            { id: 'demand-discovery', name: 'Demand Discovery', triggerCount: 0 },
            { id: 'performance-revenue', name: 'Performance Revenue', triggerCount: 0 },
            { id: 'growth-acceleration', name: 'Growth Acceleration', triggerCount: 0 },
            { id: 'market-validation', name: 'Market Validation', triggerCount: 0 },
            { id: 'customer-journey', name: 'Customer Journey', triggerCount: 0 },
            { id: 'startup-mvp', name: 'Startup MVP', triggerCount: 0 },
            { id: 'lead-generation', name: 'Lead Generation', triggerCount: 0 },

            // --- Company Page ---
            { id: 'about-us', name: 'About Us', triggerCount: 0 },
            { id: 'mission', name: 'our Mission', triggerCount: 0 },
            { id: 'leadership-culture', name: 'Leadership', triggerCount: 0 },
            { id: 'our-offices', name: 'Global Offices', triggerCount: 0 },
            { id: 'contact-us', name: 'Contacting Us', triggerCount: 0 },

            // --- Solutions Page ---
            { id: 'ai-business-growth-strategy', name: 'Business Growth Strategy', triggerCount: 0 },
            { id: 'ai-market-strategy-demand-intelligence', name: 'Market Strategy', triggerCount: 0 },
            { id: 'ai-driven-growth-hacking-engine', name: 'Growth Hacking', triggerCount: 0 },
            { id: 'ai-driven-performance-marketing', name: 'Performance Marketing', triggerCount: 0 },
            { id: 'ai-auto-sales-pilot-autonomous-sales-agents', name: 'AI Sales Agents', triggerCount: 0 },
            { id: 'ai-sales-process-optimization', name: 'Sales Process Optimization', triggerCount: 0 },
            { id: 'ai-revenue-operations-ai-revops', name: 'RevOps', triggerCount: 0 },
            { id: 'ai-revenue-acceleration-expansion', name: 'Revenue Expansion', triggerCount: 0 },

            // --- Industries Page ---
            { id: 'saas-digital-platforms', name: 'SaaS Solutions', triggerCount: 0 },
            { id: 'bfsi-fintech', name: 'FinTech Solutions', triggerCount: 0 },
            { id: 'insurance', name: 'Insurance Solutions', triggerCount: 0 },
            { id: 'banking-mutual-funds', name: 'Banking Solutions', triggerCount: 0 },
            { id: 'manufacturing-industrial', name: 'Manufacturing Solutions', triggerCount: 0 },
            { id: 'professional-services', name: 'Professional Services', triggerCount: 0 },
            { id: 'startups-scaleups', name: 'Startup Solutions', triggerCount: 0 },
            { id: 'education-edtech', name: 'EdTech Solutions', triggerCount: 0 },
            { id: 'real-estate-proptech', name: 'Real Estate Solutions', triggerCount: 0 },

            // --- Offerings Page (New) ---
            { id: 'ai-powered-sales-intelligence-execution', name: 'Sales Intelligence', triggerCount: 0 },
            { id: 'revenue-operations-intelligence', name: 'RevOps Intelligence', triggerCount: 0 },
            { id: 'ai-driven-digital-marketing-demand-generation', name: 'AI Marketing', triggerCount: 0 },
            { id: 'market-demand-intelligence', name: 'Demand Intelligence', triggerCount: 0 },
            { id: 'market-validation-research', name: 'Market Validation', triggerCount: 0 },
            { id: 'product-market-fit-validation', name: 'PMF Validation', triggerCount: 0 },
            { id: 'product-scaling-growth-intelligence', name: 'Product Scaling', triggerCount: 0 },
            { id: 'customer-success-retention-intelligence', name: 'Customer Success', triggerCount: 0 },
            { id: 'enterprise-gtm-transformation', name: 'GTM Transformation', triggerCount: 0 },
            { id: 'ai-governance-enterprise-enablement', name: 'AI Governance', triggerCount: 0 },

            // --- Demand Pulse Page (New) ---
            { id: 'feature-demand-discovery', name: 'Demand Pulse Discovery', triggerCount: 0 },
            { id: 'feature-demand-generation', name: 'Demand Pulse Generation', triggerCount: 0 },
            { id: 'feature-competitive-tracing', name: 'Competitive Tracing', triggerCount: 0 },
            { id: 'feature-micro-segmentation', name: 'Micro-Segmentation', triggerCount: 0 },
            { id: 'feature-offer-optimization', name: 'Offer Optimization', triggerCount: 0 },
            { id: 'feature-multi-channel-automation', name: 'Multi-Channel Automation', triggerCount: 0 },
            { id: 'feature-pmf-acceleration', name: 'PMF Acceleration', triggerCount: 0 },
            { id: 'feature-behavioral-targeting', name: 'Behavioral Targeting', triggerCount: 0 },
            { id: 'feature-campaign-optimization', name: 'Campaign Optimization', triggerCount: 0 },
            { id: 'feature-conversational-marketing', name: 'Conversational Marketing', triggerCount: 0 },


            // --- Career Page ---
            { id: 'open-roles', name: 'Open Roles', triggerCount: 0 },
        ];

        // 1. Intersection Observer for Specific Blocks
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const triggerId = entry.target.id;
                const config = triggers.find(t => t.id === triggerId);

                if (entry.isIntersecting && config) {
                    // Start Timer
                    if (!timeoutRef.current) {
                        const uniqueKey = `${location.pathname}-${triggerId}`;

                        // Check if already triggered for this session
                        if (triggeredContexts.has(uniqueKey)) return;

                        timeoutRef.current = setTimeout(() => {
                            // Trigger Chatbot
                            const message = `Interested in ${config.name}? I see that you'd like to know more about our ${config.name}. Can we schedule a call with you, or can I have my consultant call you?`;

                            window.dispatchEvent(new CustomEvent('open_chat_with_context', {
                                detail: { message, contextName: config.name }
                            }));

                            // Mark as triggered
                            triggeredContexts.add(uniqueKey);
                            timeoutRef.current = null;
                        }, 3500); // > 3.5 Seconds
                    }
                } else {
                    // Left the section before timer finished
                    if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                        timeoutRef.current = null;
                    }
                }
            });
        }, { threshold: 0.1 }); // 10% visibility for long sections

        // Observe elements
        // We use a small timeout to allow React to render the DOM elements first
        const observeTimeout = setTimeout(() => {
            triggers.forEach(t => {
                const el = document.getElementById(t.id);
                if (el) observerRef.current?.observe(el);
            });
        }, 1500); // Slightly longer wait for heavy pages like Offerings

        // 2. Click Listener for Immediate Trigger
        const handleGlobalClick = (event: MouseEvent) => {
            let target = event.target as HTMLElement | null;

            // Helper to dispatch the event
            const triggerChat = (name: string) => {
                const message = `I noticed you clicked on ${name}. Would you like to deep dive into our ${name} solutions?`;
                window.dispatchEvent(new CustomEvent('open_chat_with_context', {
                    detail: { message, contextName: name }
                }));
            };

            // Heuristic to clean up IDs "my-section-name" -> "My Section Name"
            const prettyPrintId = (id: string) => {
                return id.replace(/[-_]/g, ' ')
                    .replace(/\b\w/g, c => c.toUpperCase())
                    .trim();
            };

            while (target && target !== document.body) {
                const tagName = target.tagName.toLowerCase();

                // 1. Priority: Defined Triggers (Curated List)
                if (target.id) {
                    const config = triggers.find(t => t.id === target.id);
                    if (config) {
                        triggerChat(config.name);
                        return;
                    }
                }

                // 2. Priority: Heading Tags (H1-H6) - If user clicked directly on a title
                if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tagName)) {
                    const text = target.innerText?.trim();
                    if (text && text.length > 2 && text.length < 50) {
                        triggerChat(text);
                        return;
                    }
                }

                // 3. Priority: Semantic Sections with ANY ID
                // If it's a <section> or a major container with an ID that looks meaningful
                if (target.id && (tagName === 'section' || target.id.includes('section') || target.id.includes('container'))) {
                    // Filter out auto-generated IDs if possible (simple heuristic)
                    if (!target.id.startsWith('radix-') && target.id.length > 3) {
                        const name = prettyPrintId(target.id);
                        triggerChat(name);
                        return;
                    }
                }

                target = target.parentElement;
            }
        };

        window.addEventListener('click', handleGlobalClick);

        // 3. Page Level Triggers (Fallback if no specific section is focused but user lingers on page)
        const pageTimer = setTimeout(() => {
            const path = location.pathname;
            let pageName = '';

            if (path.includes('book-demo')) pageName = 'Booking a Demo';
            else if (path.includes('career')) pageName = 'Careers';
            else if (path.includes('partners')) pageName = 'Partnerships';
            else if (path.includes('crypto')) pageName = 'Crypto Solutions';
            else if (path.includes('privacy')) pageName = 'Privacy Policy';
            else if (path.includes('terms')) pageName = 'Terms of Service';
            else if (path.includes('demand-pulse') && !triggeredContexts.has(path)) pageName = 'DemandPulse AI';


            if (pageName && !triggeredContexts.has(path)) {
                const message = `Interested in ${pageName}? I see that you'd like to know more about ${pageName}. Can we schedule a call with you, or can I have my consultant call you?`;

                window.dispatchEvent(new CustomEvent('open_chat_with_context', {
                    detail: { message, contextName: pageName }
                }));
                triggeredContexts.add(path);
            }

        }, 5000); // 5 seconds on page

        return () => {
            observerRef.current?.disconnect();
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            clearTimeout(pageTimer);
            clearTimeout(observeTimeout);
            window.removeEventListener('click', handleGlobalClick); // Clean up click listener
        };
    }, [location.pathname]);
};
