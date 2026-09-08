import { ArrowRight, ShieldCheck, Play, BarChart3, Globe, Zap, CheckCircle2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden bg-slate-50 border-b border-slate-200 flex items-center">
            
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

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
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
                                <span className="text-xs font-bold text-slate-700 tracking-wide uppercase">AI-Powered Revenue OS</span>
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
                                Discover demand, amplify your brand, accelerate reputation, pilot sales autonomously, and capture hidden revenue – all on one AI operating system.
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
                                        Activate Your Autonomous Growth Engine
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </span>
                                </Button>
                            </Link>
                            <Link to="/hidden-revenue-capture">
                                <Button variant="outline" className="w-full sm:w-auto bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 px-8 py-6 text-lg h-auto rounded-full transition-all shadow-sm">
                                    <span className="flex items-center font-bold">
                                        <Play className="mr-2 w-5 h-5 text-blue-600 fill-blue-600" />
                                        Scan for Hidden Revenue Now
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

                    {/* Right Column: Premium Enterprise Platform Preview with Real Image */}
                    <div className="lg:col-span-5 relative w-full lg:h-[580px] perspective-1000">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full h-full relative flex items-center justify-center"
                        >
                            {/* Dashboard Image Frame */}
                            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-700/20 shadow-2xl bg-slate-900 group transition-all duration-500 hover:shadow-blue-500/20">
                                {/* Header bar */}
                                <div className="bg-slate-900/90 backdrop-blur-md px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                    </div>
                                    <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                        profitmachines.ai/revenue-os
                                    </div>
                                    <div className="text-xs text-slate-500 font-semibold">Live System</div>
                                </div>

                                {/* Platform Real Image */}
                                <img 
                                    src="/images/home-hero-dashboard.png" 
                                    alt="ProfitMachines Autonomous AI Revenue Engine Dashboard"
                                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02]" 
                                />

                                {/* Floating Stat Badge 1 */}
                                <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-xl p-3 shadow-xl flex items-center gap-3">
                                    <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400">
                                        <TrendingUp className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-white">5.4× ARR Velocity</div>
                                        <div className="text-[11px] text-slate-400">Real-time pipeline automation</div>
                                    </div>
                                </div>

                                {/* Floating Stat Badge 2 */}
                                <div className="absolute top-16 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-xl p-3 shadow-xl flex items-center gap-3">
                                    <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-white">1,000+ Signals/sec</div>
                                        <div className="text-[11px] text-slate-400">Autonomous Intent Engine</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
