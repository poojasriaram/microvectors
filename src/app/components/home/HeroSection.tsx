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
        <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-white">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    
                    {/* Left Column: Content */}
                    <div className="max-w-2xl min-h-[450px] flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`content-${currentIndex}`}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 border border-blue-200/50 mb-6 backdrop-blur-sm shadow-sm">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                                    </span>
                                    <span className="text-sm font-semibold text-blue-900 tracking-wide uppercase text-[11px]">{slide.badge}</span>
                                </div>
                                
                                <h1 className="text-4xl lg:text-[3.5rem] font-bold text-slate-900 leading-[1.15] tracking-tight mb-5">
                                    {slide.title}
                                </h1>
                                
                                <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                                    {slide.subtitle}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <Link to="/book-consultation" className="btn-cta-primary group">
                                <span className="flex items-center">
                                    Get Free Consultation
                                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Link>
                            <Link to="/solutions" className="btn-cta-secondary group bg-white">
                                <span className="flex items-center">
                                    <Play className="mr-2 w-5 h-5 text-blue-600 fill-blue-600 transition-transform group-hover:scale-110" />
                                    View Solutions
                                </span>
                            </Link>
                        </div>

                        <div className="mt-8 flex items-center gap-6 text-sm font-medium text-slate-500">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                Enterprise Grade Security
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-1">
                                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                </div>
                                Trusted by 50+ Leaders
                            </div>
                        </div>
                        
                        {/* Slide Indicators */}
                        <div className="mt-8 flex gap-2">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    aria-label={`Go to slide ${idx + 1}`}
                                    title={`Go to slide ${idx + 1}`}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-1.5 rounded-full p-3 -m-3 bg-clip-content transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-slate-200 hover:bg-blue-300'}`}
                                >
                                    <span className="sr-only">Go to slide {idx + 1}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Interactive Dashboard */}
                    <div className="relative w-full z-10 lg:pl-4">
                        {/* Interactive Dashboard Container */}
                        <div className="relative w-full rounded-2xl border border-slate-200 bg-white shadow-xl p-6 flex flex-col justify-between overflow-hidden min-h-[440px]">
                            {/* macOS-style Header */}
                            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-3 h-3 rounded-full bg-red-400/80"></span>
                                    <span className="w-3 h-3 rounded-full bg-amber-400/80"></span>
                                    <span className="w-3 h-3 rounded-full bg-emerald-400/80"></span>
                                </div>
                                <div className="text-[11px] font-bold text-slate-500 tracking-wider uppercase flex items-center gap-1.5 font-mono">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                                    </span>
                                    MicroVectors OS
                                </div>
                                <div className="w-12"></div>
                            </div>

                            {/* Inner Navigation Tabs */}
                            <div className="flex border-b border-slate-100 pb-2 mb-4 gap-4">
                                <button
                                    onClick={() => setActiveDashboardTab('pipeline')}
                                    className={`text-xs font-bold pb-2 border-b-2 transition-all ${activeDashboardTab === 'pipeline' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                                >
                                    Pipeline Forecast
                                </button>
                                <button
                                    onClick={() => setActiveDashboardTab('agents')}
                                    className={`text-xs font-bold pb-2 border-b-2 transition-all ${activeDashboardTab === 'agents' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                                >
                                    AI Agent Fleet
                                </button>
                                <button
                                    onClick={() => setActiveDashboardTab('activity')}
                                    className={`text-xs font-bold pb-2 border-b-2 transition-all ${activeDashboardTab === 'activity' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                                >
                                    Live Stream
                                </button>
                            </div>

                            {/* Dashboard Content */}
                            <div className="flex-1 flex flex-col justify-between">
                                {activeDashboardTab === 'pipeline' && (
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                                                <div className="text-[10px] text-slate-500 uppercase font-extrabold tracking-wider">Projected Revenue</div>
                                                <div className="text-2xl font-bold text-slate-900 mt-1">${(120000 * scale).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                                                <div className="text-[10px] text-emerald-600 font-semibold mt-1">↑ +{(scale * 15).toFixed(0)}% vs baseline</div>
                                            </div>
                                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                                                <div className="text-[10px] text-slate-500 uppercase font-extrabold tracking-wider">AI Operations</div>
                                                <div className="text-2xl font-bold text-slate-900 mt-1">{(scale * 3.1).toFixed(1)}x</div>
                                                <div className="text-[10px] text-blue-600 font-semibold mt-1">Efficiency multiplier</div>
                                            </div>
                                        </div>

                                        {/* Interactive Slider */}
                                        <div className="space-y-2 p-3 bg-blue-50/50 border border-blue-100 rounded-xl">
                                            <div className="flex justify-between text-xs font-semibold text-slate-700">
                                                <span>Scale AI Infrastructure</span>
                                                <span className="text-blue-600 font-bold">{scale.toFixed(1)}x Scale</span>
                                            </div>
                                            <input 
                                                type="range" 
                                                min="1" 
                                                max="10" 
                                                step="0.5" 
                                                value={scale} 
                                                onChange={(e) => setScale(parseFloat(e.target.value))}
                                                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                            />
                                        </div>

                                        {/* Simple SVG Chart */}
                                        <div className="h-28 w-full bg-slate-50/30 border border-slate-200/40 rounded-xl flex items-end p-2 relative overflow-hidden">
                                            <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                                                <defs>
                                                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2"/>
                                                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0"/>
                                                    </linearGradient>
                                                </defs>
                                                {/* Area under curve */}
                                                <path 
                                                    d={`M 0 100 L 0 ${100 - (3 * scale)} L 60 ${100 - (7 * scale)} L 120 ${100 - (10 * scale)} L 180 ${100 - (15 * scale)} L 240 ${100 - (20 * scale)} L 300 ${100 - (8.5 * scale * scale)} L 300 100 Z`}
                                                    fill="url(#chartGrad)"
                                                    className="transition-all duration-300 ease-out"
                                                />
                                                {/* Line */}
                                                <path 
                                                    d={`M 0 ${100 - (3 * scale)} L 60 ${100 - (7 * scale)} L 120 ${100 - (10 * scale)} L 180 ${100 - (15 * scale)} L 240 ${100 - (20 * scale)} L 300 ${100 - (8.5 * scale * scale)}`}
                                                    fill="none"
                                                    stroke="#3b82f6"
                                                    strokeWidth="2.5"
                                                    className="transition-all duration-300 ease-out"
                                                />
                                                {/* Grid Lines */}
                                                <line x1="0" y1="25" x2="300" y2="25" stroke="#e2e8f0" strokeDasharray="4 4" strokeWidth="0.5" />
                                                <line x1="0" y1="50" x2="300" y2="50" stroke="#e2e8f0" strokeDasharray="4 4" strokeWidth="0.5" />
                                                <line x1="0" y1="75" x2="300" y2="75" stroke="#e2e8f0" strokeDasharray="4 4" strokeWidth="0.5" />
                                            </svg>
                                        </div>
                                    </div>
                                )}

                                {activeDashboardTab === 'agents' && (
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200/60 rounded-xl">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                                                    <Bot className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="text-xs font-bold text-slate-800">Outreach Agent</div>
                                                    <div className="text-[10px] text-slate-400">Processing custom sequences</div>
                                                </div>
                                            </div>
                                            <span className="flex h-2 w-2 relative">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200/60 rounded-xl">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                                                    <Target className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="text-xs font-bold text-slate-800">Demand Prospector</div>
                                                    <div className="text-[10px] text-slate-400">Scanning buyer intent signals</div>
                                                </div>
                                            </div>
                                            <span className="flex h-2 w-2 relative">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200/60 rounded-xl">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
                                                    <Users className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="text-xs font-bold text-slate-800">Meeting Coordinator</div>
                                                    <div className="text-[10px] text-slate-400">Syncing with Google Calendar</div>
                                                </div>
                                            </div>
                                            <span className="flex h-2 w-2 relative">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {activeDashboardTab === 'activity' && (
                                    <div className="space-y-2 font-mono text-[10px] bg-slate-900 text-slate-300 p-4 rounded-xl h-52 overflow-y-auto">
                                        <div className="text-slate-500">// INITIALIZING AUTO-PILOT PILOT SECTOR</div>
                                        <div className="text-emerald-400">[OK] Connected to CRM via secure API wrapper</div>
                                        <div className="text-blue-300">[INFO] Scanning 4,500 domain intent profiles...</div>
                                        <div className="text-amber-300">[ACTION] Outbound sequence triggered for 12 leads</div>
                                        <div className="text-slate-300">[INFO] AI Agent "Prospector-1" verified 98% confidence rating</div>
                                        <div className="text-emerald-400">[SUCCESS] Demo scheduled with Enterprise Lead (Acme Corp)</div>
                                        <div className="text-blue-300">[INFO] Synchronizing database state...</div>
                                    </div>
                                )}

                                {/* Bottom Info Panel */}
                                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Live Node</span>
                                    <span>System v4.1</span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative floating stats card */}
                        <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-slate-200 z-20 flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                                <TrendingUp className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">Avg. Growth</div>
                                <div className="text-base font-bold text-slate-900">+312% YoY</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
