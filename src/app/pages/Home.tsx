import HeroSection from '../components/HeroSection';
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
        <main className="bg-[#020617] min-h-screen">
            {/* Section 1: Hero */}
            <HeroSection />

            {/* Section 2: Unified AI Revenue Operating System */}
            <VerticalSection data={unifiedOS} index={0} />

            {/* Section 3: Core Capabilities */}
            <VerticalSection data={coreCapabilities} index={1} />

            {/* Section 4: AI Growth Engine */}
            <VerticalSection data={growthEngine} index={2} />

            {/* Section 5: Outcomes */}
            <VerticalSection data={outcomes} index={3} />

            {/* Section 6: Global Call to Action */}
            <section className="py-32 relative overflow-hidden border-t border-white/5">
                {/* Background Gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#020617] to-blue-950/20"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                        Ready to Stop Guessing?
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-light">
                        Your revenue is leaking. Our AI diagnostic finds the holes and builds the patch.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="px-10 py-5 bg-white text-slate-900 text-lg font-bold rounded-full shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 flex items-center">
                            Book Free AI Revenue Diagnostic
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                        <button className="px-10 py-5 bg-transparent border border-slate-700 text-white text-lg font-bold rounded-full hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 flex items-center">
                            Chat with TrustFlow AI
                            <MessageCircle className="ml-2 w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
