import HeroSection from '../components/HeroSection';
import RevenueAccelerationSection from '../components/RevenueAccelerationSection';
import VerticalSection from '../components/VerticalSection';
import { homeContent } from '../../data/homeContent';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Home() {
    // Mapping content to sections
    const unifiedOS = homeContent.find(c => c.id === 'revenue-os') || homeContent[0];
    const coreCapabilities = homeContent.find(c => c.id === 'demand-discovery') || homeContent[1];
    const growthEngine = homeContent.find(c => c.id === 'autonomous-sales') || homeContent[3];
    const outcomes = homeContent.find(c => c.id === 'revenue-intelligence') || homeContent[4];

    return (
        <main className="bg-background min-h-screen">
            {/* Section 1: Hero */}
            <HeroSection />

            {/* New Section: AI-Powered Revenue Acceleration */}
            <RevenueAccelerationSection />

            {/* Section 2: Unified AI Revenue Operating System */}
            <VerticalSection data={unifiedOS} index={0} />

            {/* Section 3: Core Capabilities */}
            <VerticalSection data={coreCapabilities} index={1} />

            {/* Section 4: AI Growth Engine */}
            <VerticalSection data={growthEngine} index={2} />

            {/* Section 5: Outcomes */}
            <VerticalSection data={outcomes} index={3} />

            {/* Section 6: Global Call to Action */}
            <section className="py-24 relative overflow-hidden bg-slate-50 border-t border-slate-200">
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
