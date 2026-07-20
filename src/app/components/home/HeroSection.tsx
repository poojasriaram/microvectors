import { useState, useEffect } from 'react';
import { ArrowRight, Play, ShieldCheck, Star, Bot, TrendingUp, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        id: 1,
        image: "/banner_1_hero_1783665435895.webp",
        badge: "AI. Cloud. Automation. Software. Delivered End-to-End.",
        title: <>Building Enterprise <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI Solutions for the Future</span></>,
        subtitle: "We help businesses accelerate growth with AI-driven solutions, cloud infrastructure, automation, and enterprise-grade software.",
        accuracy: "99%",
        statLabel: "Accuracy",
        statSub: "AI Models"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
        badge: "AI. Cloud. Automation. Software. Delivered End-to-End.",
        title: <>Building Enterprise <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI Solutions for the Future</span></>,
        subtitle: "We help businesses accelerate growth with AI-driven solutions, cloud infrastructure, automation, and enterprise-grade software.",
        accuracy: "5x",
        statLabel: "Velocity",
        statSub: "Sales Growth"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2668&auto=format&fit=crop",
        badge: "AI. Cloud. Automation. Software. Delivered End-to-End.",
        title: <>Building Enterprise <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI Solutions for the Future</span></>,
        subtitle: "We help businesses accelerate growth with AI-driven solutions, cloud infrastructure, automation, and enterprise-grade software.",
        accuracy: "24/7",
        statLabel: "Active",
        statSub: "Optimization"
    }
];

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [scale, setScale] = useState(3.5);
    const [activeDashboardTab, setActiveDashboardTab] = useState<'pipeline' | 'agents' | 'activity'>('pipeline');

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const slide = slides[currentIndex];

    return (
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-950 min-h-[90vh] flex items-center">
            
            {/* Dark Enterprise Background with SVG Patterns */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-grid-slate-900 opacity-60"></div>
                <div className="absolute inset-0 mesh-gradient-dark opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                    
                    {/* Left Column: Content */}
                    <div className="max-w-2xl flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`content-${currentIndex}`}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/10 mb-8 backdrop-blur-sm shadow-sm">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                    <span className="text-sm font-semibold text-blue-300 tracking-wide uppercase text-[11px]">{slide.badge}</span>
                                </div>
                                
                                <h1 className="text-4xl lg:text-[4rem] font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                                    {slide.title}
                                </h1>
                                
                                <p className="text-lg lg:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl font-light">
                                    {slide.subtitle}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <Link to="/book-consultation" className="btn-cta-primary group">
                                <span className="flex items-center">
                                    Start Transformation
                                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Link>
                            <Link to="/#solutions" className="btn-cta-secondary group !text-white !border-white/20 hover:!bg-white/10">
                                <span className="flex items-center">
                                    <Play className="mr-2 w-5 h-5 text-blue-400 fill-blue-400 transition-transform group-hover:scale-110" />
                                    Explore Solutions
                                </span>
                            </Link>
                        </div>

                        <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6 text-sm font-medium text-slate-400 border-t border-white/10 pt-8">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                                Enterprise Grade Security
                            </div>
                            <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-600"></div>
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-1">
                                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                </div>
                                Trusted globally
                            </div>
                        </div>
                        
                        {/* Slide Indicators */}
                        <div className="mt-8 flex gap-3">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    aria-label={`Go to slide ${idx + 1}`}
                                    title={`Go to slide ${idx + 1}`}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-12 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'w-4 bg-white/20 hover:bg-white/40'}`}
                                >
                                    <span className="sr-only">Go to slide {idx + 1}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Premium Glass Dashboard */}
                    <div className="relative w-full z-10 lg:pl-8 perspective-1000">
                        {/* Interactive Dashboard Container */}
                        <div className="relative w-full rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-2xl shadow-2xl p-6 flex flex-col justify-between overflow-hidden min-h-[460px] transform hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-700">
                            
                            {/* Ambient internal glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>

                            {/* macOS-style Header */}
                            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 relative z-10">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-slate-600/50 hover:bg-red-400 transition-colors"></span>
                                    <span className="w-3 h-3 rounded-full bg-slate-600/50 hover:bg-amber-400 transition-colors"></span>
                                    <span className="w-3 h-3 rounded-full bg-slate-600/50 hover:bg-emerald-400 transition-colors"></span>
                                </div>
                                <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase flex items-center gap-2 font-mono">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    Enterprise OS Live
                                </div>
                                <div className="w-12"></div>
                            </div>

                            {/* Inner Navigation Tabs */}
                            <div className="flex border-b border-white/5 pb-2 mb-6 gap-6 relative z-10">
                                <button
                                    onClick={() => setActiveDashboardTab('pipeline')}
                                    className={`text-[11px] uppercase tracking-wider font-bold pb-2 border-b-2 transition-all ${activeDashboardTab === 'pipeline' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
                                >
                                    Analytics Core
                                </button>
                                <button
                                    onClick={() => setActiveDashboardTab('agents')}
                                    className={`text-[11px] uppercase tracking-wider font-bold pb-2 border-b-2 transition-all ${activeDashboardTab === 'agents' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
                                >
                                    AI Workloads
                                </button>
                                <button
                                    onClick={() => setActiveDashboardTab('activity')}
                                    className={`text-[11px] uppercase tracking-wider font-bold pb-2 border-b-2 transition-all ${activeDashboardTab === 'activity' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
                                >
                                    Network Log
                                </button>
                            </div>

                            {/* Dashboard Content */}
                            <div className="flex-1 flex flex-col justify-between relative z-10">
                                {activeDashboardTab === 'pipeline' && (
                                    <AnimatePresence mode="wait">
                                    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Processed Data</div>
                                                <div className="text-2xl font-light text-white mt-2">{(120000 * scale / 1000).toLocaleString(undefined, { maximumFractionDigits: 1 })}<span className="text-slate-500 text-lg">TB</span></div>
                                                <div className="text-[10px] text-emerald-400 font-mono mt-2">↑ +{(scale * 15).toFixed(0)}% optimal</div>
                                            </div>
                                            <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">AI Operations</div>
                                                <div className="text-2xl font-light text-white mt-2">{(scale * 3.1).toFixed(1)}<span className="text-slate-500 text-lg">B</span></div>
                                                <div className="text-[10px] text-blue-400 font-mono mt-2">Scale multiplier</div>
                                            </div>
                                        </div>

                                        {/* Interactive Slider */}
                                        <div className="space-y-3 p-4 bg-white/5 border border-white/5 rounded-xl">
                                            <div className="flex justify-between text-xs font-semibold text-slate-300 uppercase tracking-wide">
                                                <span>Allocate Compute</span>
                                                <span className="text-blue-400 font-mono">{scale.toFixed(1)}x Node</span>
                                            </div>
                                            <input 
                                                type="range" 
                                                min="1" 
                                                max="10" 
                                                step="0.5" 
                                                value={scale} 
                                                onChange={(e) => setScale(parseFloat(e.target.value))}
                                                className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                            />
                                        </div>

                                        {/* Simple SVG Chart */}
                                        <div className="h-24 w-full bg-transparent flex items-end relative overflow-hidden">
                                            <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                                                <defs>
                                                    <linearGradient id="chartGradDark" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4"/>
                                                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0"/>
                                                    </linearGradient>
                                                </defs>
                                                {/* Area under curve */}
                                                <path 
                                                    d={`M 0 100 L 0 ${100 - (3 * scale)} L 60 ${100 - (7 * scale)} L 120 ${100 - (10 * scale)} L 180 ${100 - (15 * scale)} L 240 ${100 - (20 * scale)} L 300 ${100 - (8.5 * scale * scale)} L 300 100 Z`}
                                                    fill="url(#chartGradDark)"
                                                    className="transition-all duration-300 ease-out"
                                                />
                                                {/* Line */}
                                                <path 
                                                    d={`M 0 ${100 - (3 * scale)} L 60 ${100 - (7 * scale)} L 120 ${100 - (10 * scale)} L 180 ${100 - (15 * scale)} L 240 ${100 - (20 * scale)} L 300 ${100 - (8.5 * scale * scale)}`}
                                                    fill="none"
                                                    stroke="#60a5fa"
                                                    strokeWidth="2"
                                                    className="transition-all duration-300 ease-out"
                                                    filter="drop-shadow(0 0 8px rgba(96, 165, 250, 0.5))"
                                                />
                                                <line x1="0" y1="50" x2="300" y2="50" stroke="#334155" strokeDasharray="4 4" strokeWidth="0.5" />
                                            </svg>
                                        </div>
                                    </motion.div>
                                    </AnimatePresence>
                                )}

                                {activeDashboardTab === 'agents' && (
                                    <AnimatePresence mode="wait">
                                    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="space-y-4">
                                        {[
                                            {icon: Bot, color: "blue", name: "Data Processing Node", desc: "Ingesting raw analytics"},
                                            {icon: Target, color: "indigo", name: "Security Protocol", desc: "Monitoring threat vectors"},
                                            {icon: Users, color: "purple", name: "Load Balancer", desc: "Distributing user sessions"}
                                        ].map((agent, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-default">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-10 h-10 rounded-xl bg-${agent.color}-500/20 border border-${agent.color}-500/30 flex items-center justify-center text-${agent.color}-400`}>
                                                    <agent.icon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-semibold text-slate-200">{agent.name}</div>
                                                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">{agent.desc}</div>
                                                </div>
                                            </div>
                                            <span className="flex h-2 w-2 relative">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                            </span>
                                        </div>
                                        ))}
                                    </motion.div>
                                    </AnimatePresence>
                                )}

                                {activeDashboardTab === 'activity' && (
                                    <AnimatePresence mode="wait">
                                    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="font-mono text-[11px] bg-[#09090b] text-slate-300 p-5 rounded-xl h-64 overflow-y-auto border border-white/5 space-y-3 shadow-inner">
                                        <div className="text-slate-500">System initialization sequence...</div>
                                        <div className="text-emerald-400 flex gap-2"><span>[OK]</span> <span>Secure connection established</span></div>
                                        <div className="text-blue-300 flex gap-2"><span>[INF]</span> <span>Deploying machine learning models...</span></div>
                                        <div className="text-slate-300 flex gap-2 opacity-70"><span>[PRC]</span> <span>Validating enterprise permissions</span></div>
                                        <div className="text-emerald-400 flex gap-2"><span>[OK]</span> <span>Nodes synchronized at 99.99% uptime</span></div>
                                        <div className="text-amber-300 flex gap-2"><span>[WRN]</span> <span>Traffic spike detected in EU region</span></div>
                                        <div className="text-blue-300 flex gap-2"><span>[ACT]</span> <span>Auto-scaling compute clusters</span></div>
                                        <div className="text-emerald-400 flex gap-2"><span>[OK]</span> <span>Resources allocated successfully</span></div>
                                        <div className="text-slate-500 animate-pulse">Awaiting input...</div>
                                    </motion.div>
                                    </AnimatePresence>
                                )}
                            </div>
                        </div>

                        {/* Floating elements removed as per strict enterprise aesthetic, keeping it clean */}
                    </div>
                </div>
            </div>
        </section>
    );
}
