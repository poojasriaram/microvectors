
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
        title: "Increase 5× Sales Velocity in 12 Months with TRUSTFLOW.AI",
        subtitle: "AI-Powered Sales Operations for High-Growth B2B Teams"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2674&auto=format&fit=crop",
        title: "Boost Win Rates by 4X Using Predictive Deal Intelligence & Deal Dynamics",
        subtitle: "AI-Driven Opportunity Scoring, Deal Prioritization, Deal Navigation & Nurturing"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2668&auto=format&fit=crop",
        title: "Reduce Sales Cycle Time by 3X with AI Driven Lead Nurturing",
        subtitle: "Real-Time Intent Detection & Smart Engagement Automation"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop",
        title: "Generate 8× More Qualified Pipeline Without Increasing Headcount",
        subtitle: "AI-Powered Demand Discovery & Lead Qualification Engine"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        title: "Improve Forecast Accuracy to 95% with Revenue Intelligence AI",
        subtitle: "Predictive Forecasting, Risk Alerts & Revenue Confidence"
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
        title: "Increase Revenue per Sales Rep by 2.5× in One Year",
        subtitle: "AI-Optimized Sales Playbooks & Performance Coaching"
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1480694313141-fce5e697ee25?q=80&w=2670&auto=format&fit=crop",
        title: "Cut Customer Acquisition Cost (CAC) by 75% Using AI Sales Ops",
        subtitle: "Funnel Optimization, Outreach Intelligence & Conversion AI"
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2670&auto=format&fit=crop",
        title: "Transform B2B Enterprise & Mid-Market Sales with AI Sales Ops",
        subtitle: "Secure, Explainable AI Built for B2B Revenue Teams"
    }
];

export default function HomeCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => {
            let nextIndex = prev + newDirection;
            if (nextIndex < 0) nextIndex = slides.length - 1;
            if (nextIndex >= slides.length) nextIndex = 0;
            return nextIndex;
        });
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 1.1
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 1.1
        })
    };

    return (
        <section className="relative w-full h-[550px] md:h-[650px] lg:h-[750px] bg-slate-900 border-b border-slate-200 overflow-hidden group">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.5 },
                        scale: { duration: 0.8 }
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] scale-105"
                        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
                    />

                    {/* Overlay Gradient - Stronger for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/30" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950/40 to-slate-950/80" />

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex justify-center">
                            <motion.div
                                initial={{ y: 20, opacity: 0, scale: 0.95 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full max-w-5xl min-h-[400px] md:min-h-[480px] mx-auto bg-white/5 backdrop-blur-3xl border border-white/10 p-10 md:p-16 rounded-[3rem] shadow-[0_0_60px_-15px_rgba(59,130,246,0.25)] relative overflow-hidden flex flex-col justify-center items-center text-center"
                            >
                                {/* Decorative Glow */}
                                <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]" />
                                <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-purple-500/15 rounded-full blur-[100px]" />

                                <div className="z-10 relative">
                                    <div className="inline-block px-5 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-200 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-8 border border-blue-400/20 shadow-lg shadow-blue-500/5 backdrop-blur-md">
                                        TrustFlow Intelligence
                                    </div>
                                    <h2 className="text-4xl md:text-6xl lg:text-[4.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-blue-200 mb-8 tracking-tight leading-[1.1] drop-shadow-lg max-w-4xl mx-auto">
                                        {slides[currentIndex].title}
                                    </h2>
                                    <p className="text-lg md:text-2xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto text-balance tracking-wide">
                                        {slides[currentIndex].subtitle}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
                onClick={() => paginate(-1)}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100 z-20 hover:scale-110 active:scale-95"
            >
                <ChevronLeft className="w-8 h-8 opacity-70 hover:opacity-100" />
            </button>
            <button
                onClick={() => paginate(1)}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100 z-20 hover:scale-110 active:scale-95"
            >
                <ChevronRight className="w-8 h-8 opacity-70 hover:opacity-100" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20 bg-black/20 backdrop-blur-xl px-6 py-3 rounded-full border border-white/5">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1);
                            setCurrentIndex(idx);
                        }}
                        className={`transition-all duration-300 rounded-full ${currentIndex === idx
                            ? 'w-8 h-1.5 bg-gradient-to-r from-blue-500 to-blue-400 shadow-[0_0_10px_1px_rgba(59,130,246,0.5)]'
                            : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
