import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BarChart3, Users, Coins, Brain } from 'lucide-react';

const slides = [
    {
        id: 1,
        title: "Predictable Revenue",
        description: "Transform volatile token models into stable, recurring revenue streams with AI-driven forecasting.",
        icon: BarChart3,
        color: "from-blue-500 to-indigo-500",
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 2,
        title: "Active User Growth",
        description: "Identify and acquire high-LTV users who actually engage with your protocol, not just airdrop farmers.",
        icon: Users,
        color: "from-purple-500 to-pink-500",
        image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 3,
        title: "Token Utility & Velocity",
        description: "Optimize tokenomics in real-time to drive utility, velocity, and long-term ecosystem health.",
        icon: Coins,
        color: "from-amber-400 to-orange-500",
        image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 4,
        title: "On-Chain Market Intelligence",
        description: "Decode on-chain behavior to predict market shifts and position your protocol for dominance.",
        icon: Brain,
        color: "from-emerald-400 to-teal-500",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000"
    }
];

export default function CryptoHeroSlides() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full max-w-6xl mx-auto mt-12 relative h-[500px] sm:h-[450px] flex items-center justify-center px-4">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute w-full h-full"
                >
                    <div className="h-full bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500 flex flex-col md:flex-row">

                        {/* Glow Effect */}
                        <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${slides[currentIndex].color} opacity-10 blur-[100px] rounded-full pointer-events-none transition-opacity duration-1000`}></div>
                        <div className={`absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr ${slides[currentIndex].color} opacity-5 blur-[100px] rounded-full pointer-events-none transition-opacity duration-1000`}></div>

                        {/* Content Side */}
                        <div className="relative z-10 flex flex-col justify-center p-8 sm:p-12 md:w-3/5 h-full">
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3 rounded-2xl bg-gradient-to-br ${slides[currentIndex].color} bg-opacity-10 border border-white/5 shadow-inner`}>
                                    {React.createElement(slides[currentIndex].icon, { className: "w-6 h-6 text-white" })}
                                </div>
                                <span className={`text-sm font-bold uppercase tracking-wider bg-gradient-to-r ${slides[currentIndex].color} bg-clip-text text-transparent`}>
                                    Premium Feature
                                </span>
                            </div>

                            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
                                {slides[currentIndex].title}
                            </h3>
                            <p className="text-slate-400 text-lg leading-relaxed font-medium mb-8">
                                {slides[currentIndex].description}
                            </p>

                            {/* Progress Bar inside content area */}
                            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                <motion.div
                                    key={currentIndex + "progress"}
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 5, ease: "linear" }}
                                    className={`h-full bg-gradient-to-r ${slides[currentIndex].color}`}
                                />
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="hidden md:block md:w-2/5 relative h-full overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-l from-slate-900/90 to-transparent z-10" />
                            <motion.img
                                src={slides[currentIndex].image}
                                alt={slides[currentIndex].title}
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 5 }}
                                className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700"
                            />
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Indicators */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`transition-all duration-300 rounded-full ${idx === currentIndex
                            ? "w-8 h-2 bg-blue-500"
                            : "w-2 h-2 bg-slate-700 hover:bg-slate-600"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
