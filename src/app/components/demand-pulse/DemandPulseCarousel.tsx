
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        title: "Real-Time Demand Intelligence",
        subtitle: "Visualize buying intent across global markets instantly."
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop",
        title: "Predictive Analytics Dashboard",
        subtitle: "Forecast revenue pipelines with 98% accuracy powered by AI."
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        title: "Automated Campaign Orchestration",
        subtitle: "Launch multi-channel campaigns that self-optimize 24/7."
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2670&auto=format&fit=crop",
        title: "Competitive Intelligence Recon",
        subtitle: "Track competitor movements and intercept deals in real-time."
    }
];

export default function DemandPulseCarousel() {
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
        <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-slate-900 border-b border-slate-200 overflow-hidden group">
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
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex justify-center">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-[2rem] max-w-2xl shadow-2xl"
                            >
                                <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-blue-500/30">
                                    DemandPulse OS
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
                                    {slides[currentIndex].title}
                                </h2>
                                <p className="text-lg md:text-xl text-slate-200 font-medium leading-relaxed">
                                    {slides[currentIndex].subtitle}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
                onClick={() => paginate(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 z-20"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={() => paginate(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 z-20"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1);
                            setCurrentIndex(idx);
                        }}
                        className={`transition-all duration-300 rounded-full ${currentIndex === idx ? 'w-10 h-1.5 bg-blue-500' : 'w-2 h-1.5 bg-white/50 hover:bg-white/80'}`}
                    />
                ))}
            </div>
        </section>
    );
}
