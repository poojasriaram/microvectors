
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



    return (
        <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-white overflow-hidden group">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={{
                        enter: { opacity: 0, scale: 1.05 },
                        center: { opacity: 1, scale: 1 },
                        exit: { opacity: 0 }
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
                    />

                    {/* White Overlay for Premium Feel (Matches Company Page) */}
                    <div className="absolute inset-0 bg-white/30 bg-gradient-to-b from-white/90 via-white/40 to-white/90" />

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 text-center pt-10">
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="max-w-5xl mx-auto"
                            >
                                <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-600 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
                                    TrustFlow Intelligence
                                </div>
                                <h2 className="text-4xl md:text-6xl lg:text-[4.5rem] font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1] drop-shadow-sm">
                                    {slides[currentIndex].title}
                                </h2>
                                <p className="text-lg md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto tracking-wide">
                                    {slides[currentIndex].subtitle}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons - Dark for Light Theme */}
            <button
                onClick={() => paginate(-1)}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-slate-900 hover:bg-white transition-all opacity-0 group-hover:opacity-100 z-20 hover:scale-110 shadow-lg"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={() => paginate(1)}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-slate-900 hover:bg-white transition-all opacity-0 group-hover:opacity-100 z-20 hover:scale-110 shadow-lg"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20 bg-white/50 backdrop-blur-xl px-4 py-2 rounded-full border border-white/40 shadow-sm">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1);
                            setCurrentIndex(idx);
                        }}
                        className={`transition-all duration-300 rounded-full ${currentIndex === idx
                            ? 'w-8 h-1.5 bg-blue-600'
                            : 'w-1.5 h-1.5 bg-slate-400 hover:bg-slate-600'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
