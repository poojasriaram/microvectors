import { useState, useEffect } from 'react';
import { ArrowRight, Play, ShieldCheck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        id: 1,
        image: "/banner_1_hero_1783665435895.webp",
        badge: "Next-Generation AI Platform",
        title: <>Transform Your Business with <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Autonomous AI</span></>,
        subtitle: "Empower your enterprise with scalable, secure, and intelligent automation. MicroVectors drives predictable revenue growth through advanced AI infrastructure.",
        accuracy: "99%",
        statLabel: "Accuracy",
        statSub: "AI Models"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
        badge: "The Autopilot Wealth Loop",
        title: <>Set the System. Watch It Grow. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Reinvest. Repeat.</span></>,
        subtitle: "AI-Driven Revenue That Compounds Like Capital — 24/7, Zero Friction.",
        accuracy: "5x",
        statLabel: "Velocity",
        statSub: "Sales Growth"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2668&auto=format&fit=crop",
        badge: "The Self-Reinforcing Engine",
        title: <>One Closed Deal Feeds Ten More. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">The Compounding Effect.</span></>,
        subtitle: "From Demand Discovery to Revenue Management — Autopilot Does the Heavy Lifting.",
        accuracy: "24/7",
        statLabel: "Active",
        statSub: "Optimization"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop",
        badge: "The Crypto Money Multiplier",
        title: <>TVL + AI Autopilot = <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Exponential Value</span></>,
        subtitle: "Built for Web3 & DeFi — Where Every Incentive Compounds Community Growth.",
        accuracy: "10x",
        statLabel: "Scaling",
        statSub: "Multiplier"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        badge: "The CRO's Compound Interest",
        title: <>Your Pipeline Is a Bank Account. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI Is the Interest.</span></>,
        subtitle: "Predictable Growth That Stacks. Month Over Month. Quarter Over Quarter.",
        accuracy: "100%",
        statLabel: "Predictable",
        statSub: "Revenue"
    }
];

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const slide = slides[currentIndex];

    return (
        <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-white">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] opacity-70 -z-10"></div>
            
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
                            <Link to="/book-consultation" className="group">
                                <Button size="lg" className="h-12 px-8 text-base bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-premium-hover transition-all duration-300 transform group-hover:-translate-y-1 w-full sm:w-auto">
                                    <span className="flex items-center">
                                        Start Your Transformation
                                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </Button>
                            </Link>
                            <Link to="/solutions" className="group">
                                <Button size="lg" variant="outline" className="h-12 px-8 text-base border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 rounded-full shadow-sm transition-all duration-300 transform group-hover:-translate-y-1 w-full sm:w-auto bg-white">
                                    <span className="flex items-center">
                                        <Play className="mr-2 w-5 h-5 text-blue-600 fill-blue-600 transition-transform group-hover:scale-110" />
                                        See How It Works
                                    </span>
                                </Button>
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
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-slate-200 hover:bg-blue-300'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Illustration */}
                    <div className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`image-${currentIndex}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                {/* Floating elements */}
                                <motion.div 
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-4 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">{slide.accuracy}</div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-900">{slide.statLabel}</div>
                                            <div className="text-xs text-slate-500">{slide.statSub}</div>
                                        </div>
                                    </div>
                                </motion.div>

                                <div className="relative rounded-3xl overflow-hidden shadow-premium border border-slate-100 bg-white w-full h-full max-h-[450px]">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
                                    <img loading="lazy" decoding="async" 
                                        src={slide.image} 
                                        alt={slide.statSub}
                                        className="w-full h-full object-cover relative z-0"
                                    />
                                </div>
                                
                                {/* Decorative background shape */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-[2.5rem] -z-10 blur-xl opacity-50"></div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
