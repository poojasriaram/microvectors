import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal';
import { ArrowRight, Database, Search, Target } from 'lucide-react';

export default function HiddenRevenueCapture() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <Reveal>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            Hidden Revenue <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Capture</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium mb-10">
                            Recover 15-25% of lost revenue hiding in plain sight. Uncover churn risks, drive intelligent cross-sells, and perform continuous leakage audits.
                        </p>
                        <Link to="/book-consultation" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all bg-orange-600 border border-transparent rounded-full hover:bg-orange-700 shadow-lg shadow-orange-500/30 group">
                            Scan for Hidden Revenue Now
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Reveal>
                </div>
            </div>

            <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <Reveal delay={0.1}>
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                                <Search className="w-7 h-7 text-red-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Revenue Leakage Audits</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Our AI continuously scans your contracts, billing data, and usage metrics to surface missed renewals, underpriced legacy contracts, and unclaimed incentives.
                            </p>
                            <div className="text-sm font-bold text-red-600 bg-red-50 px-3 py-2 rounded-lg inline-block">
                                Stop the bleeding instantly
                            </div>
                        </div>
                    </Reveal>
                    
                    <Reveal delay={0.2}>
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Target className="w-32 h-32" />
                            </div>
                            <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 relative z-10">
                                <Target className="w-7 h-7 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Churn Risk Prediction</h3>
                            <p className="text-slate-600 leading-relaxed mb-6 relative z-10">
                                Customer success intelligence detects subtle shifts in product usage, support tickets, and engagement to alert your team of churn risk before it happens.
                            </p>
                            <div className="text-sm font-bold text-orange-600 bg-orange-50 px-3 py-2 rounded-lg inline-block relative z-10">
                                27% Average Churn Reduction
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
                                <Database className="w-7 h-7 text-emerald-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Cross-sell & Upsell Engines</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Autonomous triggers identify the exact moment a customer is ready for expansion based on feature adoption and value realization metrics.
                            </p>
                            <div className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-2 rounded-lg inline-block">
                                Continuous LTV Expansion
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}
