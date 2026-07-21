import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AIBrandAcceleration() {
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
                            AI Brand <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Acceleration</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium mb-10">
                            Turn unknown demand into recognised preference. Watch how AI tunes brand messaging, content, and presence based on demand pulse and buyer intent.
                        </p>
                        <Link to="/book-consultation" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all bg-blue-600 border border-transparent rounded-full hover:bg-blue-700 shadow-lg shadow-blue-500/30 group">
                            Reveal Your Brand Acceleration Potential
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Reveal>
                </div>
            </div>

            <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <Reveal direction="right">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm">
                                <Sparkles className="w-4 h-4" /> Autonomous Content Personalisation
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">Intent-Based Brand Exposure</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Our AI constantly monitors market signals and buyer intent to dynamically adjust your brand messaging. By presenting the right content to the right audience at the perfect time, we transform passive demand into active brand preference before a sales conversation even begins.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {[
                                    "Dynamic messaging based on real-time market pulse",
                                    "Automated content distribution at peak engagement times",
                                    "Expanded market presence without linear headcount growth"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                    <Reveal direction="left">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-8">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50/50 -z-10"></div>
                            <div className="space-y-8">
                                <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Outcome</h3>
                                    <p className="text-2xl font-bold text-blue-600">3x Brand Recognition Lift</p>
                                </div>
                                <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Market Expansion</h3>
                                    <p className="text-2xl font-bold text-indigo-600">45% Wider Reach in Target ICP</p>
                                </div>
                                <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Cost Efficiency</h3>
                                    <p className="text-2xl font-bold text-emerald-600">Reduced CPA by 30%</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}
