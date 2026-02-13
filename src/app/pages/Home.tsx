import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import RevenueAccelerationSection from '../components/RevenueAccelerationSection';
import DemandDiscoverySection from '../components/DemandDiscoverySection';
import PerformanceMarketingSection from '../components/PerformanceMarketingSection';
import GrowthAccelerationSection from '../components/GrowthAccelerationSection';
import MarketValidationSection from '../components/MarketValidationSection';
import CustomerJourneySection from '../components/CustomerJourneySection';
import StartupMVPSection from '../components/StartupMVPSection';
import LeadGenerationSection from '../components/LeadGenerationSection';

import GlobalICPSection from '../components/GlobalICPSection';
import HomeCarousel from '../components/HomeCarousel';

import { ArrowRight, MessageCircle } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';


export default function Home() {
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const section = params.get('section');

        if (section) {
            setTimeout(() => {
                const elementId = section.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                const element = document.getElementById(elementId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    }, [location]);

    return (
        <main className="bg-background min-h-screen overflow-x-hidden">
            {/* Premium Home Carousel - First Section */}
            <div>
                <HomeCarousel />
            </div>

            {/* Section 1: Hero */}
            <HeroSection />

            {/* Global ICP Section */}
            <Reveal width="100%" direction="up">
                <GlobalICPSection />
            </Reveal>

            {/* New Section: AI-Powered Revenue Acceleration */}
            <div id="ai-powered-revenue-acceleration" className="scroll-mt-32">
                <Reveal width="100%" delay={0.1}>
                    <RevenueAccelerationSection />
                </Reveal>
            </div>

            {/* New Section: AI-Powered Demand Discovery Engine */}
            <div id="demand-discovery" className="scroll-mt-32">
                <Reveal width="100%" delay={0.1}>
                    <DemandDiscoverySection />
                </Reveal>
            </div>

            {/* New Section: AI-Powered Performance Revenue Engine */}
            <div id="performance-revenue" className="scroll-mt-32">
                <Reveal width="100%" delay={0.1}>
                    <PerformanceMarketingSection />
                </Reveal>
            </div>

            {/* New Section: AI-Powered Growth Acceleration Engine */}
            <div id="growth-acceleration" className="scroll-mt-32">
                <Reveal width="100%" delay={0.1}>
                    <GrowthAccelerationSection />
                </Reveal>
            </div>

            {/* New Section: AI-Powered Market Validation Intelligence Engine */}
            <div id="market-validation" className="scroll-mt-32">
                <Reveal width="100%" delay={0.1}>
                    <MarketValidationSection />
                </Reveal>
            </div>

            {/* New Section: AI-Powered Customer Journey Intelligence Engine */}
            <div id="customer-journey" className="scroll-mt-32">
                <Reveal width="100%" delay={0.1}>
                    <CustomerJourneySection />
                </Reveal>
            </div>

            {/* New Section: AI-Powered Startup MVP Acceleration Engine */}
            <div id="startup-mvp" className="scroll-mt-32">
                <Reveal width="100%" delay={0.1}>
                    <StartupMVPSection />
                </Reveal>
            </div>

            {/* New Section: AI-Driven Lead Generation Acceleration */}
            <div id="lead-generation" className="scroll-mt-32">
                <Reveal width="100%" delay={0.1}>
                    <LeadGenerationSection />
                </Reveal>
            </div>

            {/* Section 6: Global Call to Action */}
            <section className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
                {/* Background Gradients */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-slate-50"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[120px]"></div>

                <Reveal width="100%" direction="up">
                    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                            Ready to Stop Guessing?
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                            Your revenue is leaking. Our AI diagnostic finds the holes and builds the patch.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="px-10 py-5 bg-blue-600 text-white text-lg font-bold rounded-full shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105 transition-all duration-300 flex items-center">
                                Book Free AI Revenue Diagnostic
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </button>
                            <button className="px-10 py-5 bg-white border border-slate-200 text-slate-700 text-lg font-bold rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center shadow-sm">
                                Chat with TrustGrid AI
                                <MessageCircle className="ml-2 w-5 h-5 text-blue-600" />
                            </button>
                        </div>
                    </div>
                </Reveal>
            </section>
        </main>
    );
}
