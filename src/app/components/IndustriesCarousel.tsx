
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
        title: "AI Growth Architectures By Industry",
        subtitle: "Tailored AI solution stacks designed to address the unique revenue challenges of your specific sector."
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        title: "SaaS & Digital Platform Acceleration",
        subtitle: "Optimize CAC and maximize LTV with AI-driven demand discovery and retention intelligence."
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
        title: "FinTech & BFSI Revenue Protocols",
        subtitle: "Compliance-aware AI engines for high-intent lead generation and automated qualification."
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop",
        title: "Manufacturing & Industrial Growth Levers",
        subtitle: "Accelerate complex sales cycles and dealer network performance with AI deal intelligence."
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2670&auto=format&fit=crop",
        title: "Professional Services Pipeline Mastery",
        subtitle: "Transforming expertise into a predictable scaling engine for agencies and consulting firms."
    }
];

export default function IndustriesCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

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
                    <motion.div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
                        animate={{ scale: [1, 1.1] }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                    />

                    {/* Premium Unified Overlay - Matched with AI Lead Gen Visibility */}
                    <div className="absolute inset-0 bg-white/30 bg-gradient-to-b from-white/80 via-white/20 to-white/80" />

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
                                    TrustGrid Vertical OS
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
        </section>
    );
}
