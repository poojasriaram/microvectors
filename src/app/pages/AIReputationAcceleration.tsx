import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function AIReputationAcceleration() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <Reveal>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                            AI Reputation <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Acceleration</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto font-medium mb-10">
                            Build a reputation that converts before a call is made. Deploy automated review generation, sentiment analysis, and trust-signal deployment to lower cost-per-lead and speed up pipeline.
                        </p>
                        <Link to="/book-consultation" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-900 transition-all bg-emerald-400 border border-transparent rounded-full hover:bg-emerald-500 shadow-lg shadow-emerald-500/20 group">
                            Run a Free Reputation Scan
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Reveal>
                </div>
            </div>

            <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <Reveal direction="right">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-8">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Trust Signals Deployed</h4>
                                        <p className="text-sm text-slate-500">Across 14 key buyer touchpoints</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Sentiment Analysis Active</h4>
                                        <p className="text-sm text-slate-500">Real-time monitoring of brand perception</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Automated Review Gen</h4>
                                        <p className="text-sm text-slate-500">Triggered at peak customer satisfaction</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal direction="left">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900">Shorten Buyer Consideration Cycles</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                In today's market, reputation is revenue. Our AI agents monitor customer sentiment across the web, identifying the perfect moments to request reviews and capturing positive feedback automatically.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                By strategically placing these AI-verified trust signals in front of high-intent prospects, we drastically reduce friction in the buying journey.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {[
                                    "Lower Cost-Per-Acquisition through higher trust",
                                    "Accelerated sales velocity by overcoming objections proactively",
                                    "Automated curation of case studies and testimonials"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}
