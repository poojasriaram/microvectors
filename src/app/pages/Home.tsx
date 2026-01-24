import HeroSection from '../components/HeroSection';
import RevenueAccelerationSection from '../components/RevenueAccelerationSection';
import DemandDiscoverySection from '../components/DemandDiscoverySection';
import PerformanceMarketingSection from '../components/PerformanceMarketingSection';
import GrowthAccelerationSection from '../components/GrowthAccelerationSection';
import MarketValidationSection from '../components/MarketValidationSection';
import CustomerJourneySection from '../components/CustomerJourneySection';
import StartupMVPSection from '../components/StartupMVPSection';
import LeadGenerationSection from '../components/LeadGenerationSection';
import LeadershipSection from '../components/LeadershipSection';

import GlobalICPSection from '../components/GlobalICPSection';
import HomeCarousel from '../components/HomeCarousel';

import { ArrowRight, MessageCircle } from 'lucide-react';


export default function Home() {


    return (
        <main className="bg-background min-h-screen">
            {/* Premium Home Carousel - First Section */}
            <div className="pt-20">
                <HomeCarousel />
            </div>

            {/* Section 1: Hero */}
            <HeroSection />

            {/* Global ICP Section */}
            <GlobalICPSection />

            {/* New Section: AI-Powered Revenue Acceleration */}
            <RevenueAccelerationSection />

            {/* New Section: AI-Powered Demand Discovery Engine */}
            <DemandDiscoverySection />

            {/* New Section: AI-Powered Performance Revenue Engine */}
            <PerformanceMarketingSection />

            {/* New Section: AI-Powered Growth Acceleration Engine */}
            <GrowthAccelerationSection />

            {/* New Section: AI-Powered Market Validation Intelligence Engine */}
            <MarketValidationSection />

            {/* New Section: AI-Powered Customer Journey Intelligence Engine */}
            <CustomerJourneySection />

            {/* New Section: AI-Powered Startup MVP Acceleration Engine */}
            <StartupMVPSection />

            {/* New Section: AI-Driven Lead Generation Acceleration */}
            <LeadGenerationSection />

            {/* Section: Leadership & Teams */}
            <LeadershipSection />

            {/* Section 6: Global Call to Action */}
            <section className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
                {/* Background Gradients */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-slate-50"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[120px]"></div>

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
                            Chat with TrustFlow AI
                            <MessageCircle className="ml-2 w-5 h-5 text-blue-600" />
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
