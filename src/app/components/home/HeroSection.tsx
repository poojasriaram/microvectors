import { ArrowRight, ShieldCheck, Play, BarChart3, Globe, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 border-b border-slate-200 min-h-[90vh] flex items-center">
            
            {/* Enterprise Architectural Grid Background */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-multiply"></div>
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)',
                    backgroundSize: '4rem 4rem',
                    opacity: 0.3
                }}></div>
                {/* Soft ambient gradients */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    
                    {/* Left Column: Core Value Proposition */}
                    <div className="lg:col-span-7 flex flex-col justify-center relative">
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                                </span>
                                <span className="text-xs font-bold text-slate-700 tracking-wide uppercase">AI Driven Sales & Revenue Acceleration</span>
                            </div>
                            
                            <h1 className="text-5xl lg:text-[4.5rem] font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-8">
                                The Autonomous <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative inline-block">
                                    Revenue Engine
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                                    </svg>
                                </span>
                            </h1>
                            
                            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl font-medium">
                                TrustGrid is an enterprise-grade AI platform designed to automate demand generation, validate MVP markets, and accelerate revenue operations at global scale.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link to="/book-consultation">
                                <Button className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg h-auto rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-0.5 border border-slate-700">
                                    <span className="flex items-center font-bold">
                                        Deploy AI Architecture
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </span>
                                </Button>
                            </Link>
                            <Link to="/talk-to-expert">
                                <Button variant="outline" className="w-full sm:w-auto bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 px-8 py-6 text-lg h-auto rounded-full transition-all shadow-sm">
                                    <span className="flex items-center font-bold">
                                        <Play className="mr-2 w-5 h-5 text-blue-600 fill-blue-600" />
                                        Watch Enterprise Demo
                                    </span>
                                </Button>
                            </Link>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold text-slate-600"
                        >
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                SOC2 Type II Certified
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="w-5 h-5 text-blue-500" />
                                Global Infrastructure
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                                Fortune 500 Trusted
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Premium Enterprise Bento Grid */}
                    <div className="lg:col-span-5 relative w-full lg:h-[600px] perspective-1000">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full h-full relative"
                        >
                            {/* Main Metrics Card */}
                            <div className="absolute top-0 right-0 w-full md:w-[90%] bg-white rounded-3xl border border-slate-200 shadow-xl p-8 z-20 backdrop-blur-xl">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Live Analytics</div>
                                        <div className="text-slate-900 font-bold text-xl">Revenue Acceleration</div>
                                    </div>
                                    <div className="p-2 bg-blue-50 rounded-xl border border-blue-100">
                                        <BarChart3 className="w-5 h-5 text-blue-600" />
                                    </div>
                                </div>
                                <div className="text-5xl font-black text-slate-900 mb-2">
                                    314<span className="text-3xl text-slate-400">%</span>
                                </div>
                                <div className="text-sm font-medium text-emerald-600 flex items-center gap-1 mb-8">
                                    <TrendingUp className="w-4 h-4" />
                                    Avg. Pipeline Growth (YoY)
                                </div>
                                
                                {/* Micro-Chart */}
                                <div className="h-16 w-full flex items-end gap-2">
                                    {[30, 45, 40, 60, 55, 75, 70, 90, 85, 100].map((height, i) => (
                                        <div key={i} className="flex-1 bg-blue-100 rounded-t-sm relative group overflow-hidden">
                                            <div 
                                                className="absolute bottom-0 left-0 right-0 bg-blue-600 rounded-t-sm transition-all duration-1000 ease-out"
                                                style={{ height: `${height}%` }}
                                            ></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating Architecture Card */}
                            <div className="absolute bottom-12 left-0 w-[70%] bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl p-6 z-30 transform -translate-x-4 translate-y-8">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                                        <span className="text-xs font-mono text-slate-300">Neural Sync Active</span>
                                    </div>
                                    <Zap className="w-4 h-4 text-amber-400" />
                                </div>
                                <div className="space-y-3">
                                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-[85%]"></div>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 w-[92%]"></div>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-[78%]"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Security Badge Card */}
                            <div className="absolute top-48 left-0 w-32 h-32 bg-white rounded-3xl border border-slate-200 shadow-lg p-4 z-10 flex flex-col items-center justify-center text-center transform -translate-x-12 -rotate-6">
                                <ShieldCheck className="w-10 h-10 text-blue-600 mb-2" />
                                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider leading-tight">Enterprise<br/>Grade</span>
                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
