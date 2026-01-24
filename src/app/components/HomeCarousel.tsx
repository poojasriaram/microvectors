
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
        title: "The AI Revenue Operating System",
        subtitle: "Unify sales, marketing, and success into one autonomous growth engine."
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
        title: "Predictable Pipeline Architecture",
        subtitle: "Turn unstructured market data into high-converting revenue opportunities."
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop",
        title: "Sales Velocity Acceleration",
        subtitle: "Close deals 5X faster with AI-augmented decision intelligence."
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
        title: " autonomous Revenue Operations",
        subtitle: "Self-correcting strategies that adapt to market changes in real-time."
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
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
                    />

                    {/* Overlay Gradient - Stronger for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />
                    <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply" />

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex justify-center">
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-14 rounded-[2.5rem] max-w-3xl shadow-2xl relative overflow-hidden text-center"
                            >
                                {/* Decorative Glow */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                                <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/30">
                                    TrustFlow Intelligence
                                </div>
                                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                                    {slides[currentIndex].title}
                                </h2>
                                <p className="text-lg md:text-2xl text-slate-200 font-medium leading-relaxed text-balance">
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
                className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-black/40 transition-all opacity-0 group-hover:opacity-100 z-20 hover:scale-110"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={() => paginate(1)}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-black/40 transition-all opacity-0 group-hover:opacity-100 z-20 hover:scale-110"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1);
                            setCurrentIndex(idx);
                        }}
                        className={`transition-all duration-300 rounded-full shadow-sm ${currentIndex === idx ? 'w-12 h-1.5 bg-blue-500' : 'w-2.5 h-1.5 bg-white/40 hover:bg-white/80'}`}
                    />
                ))}
            </div>
        </section>
    );
}
