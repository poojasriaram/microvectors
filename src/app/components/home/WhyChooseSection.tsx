import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export default function WhyChooseSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
                            <img loading="lazy" decoding="async" 
                                src="/banner_3_ecosystem_1783665456490.webp" 
                                alt="AI Ecosystem" 
                                className="w-full h-auto object-cover relative z-10"
                            />
                        </div>
                        {/* Decorative background shape */}
                        <div className="absolute -inset-6 bg-gradient-to-br from-purple-100 to-blue-50 rounded-[3rem] -z-10 blur-2xl opacity-60"></div>
                        
                        {/* Floating Stat */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 z-20 hidden md:block">
                            <div className="text-4xl font-bold text-blue-600 mb-1">5X</div>
                            <div className="text-sm font-semibold text-slate-700">Revenue Velocity</div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                            Why Enterprise Teams Choose MicroVectors
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            We replace fragmented marketing and sales tools with a unified, autonomous Revenue Operating System that learns, executes, and scales.
                        </p>

                        <div className="space-y-5 mb-10">
                            {[
                                "Predictable pipeline generation without scaling headcount",
                                "Self-healing CRM data and real-time accurate forecasting",
                                "Continuous A/B testing and funnel optimization on autopilot"
                            ].map((benefit, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                                    <span className="text-slate-700 font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-6 mb-10 border-t border-slate-100 pt-8">
                            <div>
                                <div className="text-3xl font-bold text-slate-900 mb-1">50%</div>
                                <div className="text-sm text-slate-500 font-medium">Faster Sales Cycles</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-slate-900 mb-1">3X</div>
                                <div className="text-sm text-slate-500 font-medium">Churn Reduction</div>
                            </div>
                        </div>

                        <Button size="lg" className="h-14 px-8 text-base bg-slate-900 hover:bg-slate-800 text-white rounded-full">
                            <Link to="/company" className="flex items-center">
                                Learn About Our Technology
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
