import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export default function WhyChooseSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Operational System Board */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl border border-slate-200 bg-slate-50/80 p-8 shadow-sm">
                            <h3 className="text-sm font-extrabold text-slate-900 mb-6 font-mono tracking-wider">// ENTERPRISE DELIVERY MODEL</h3>
                            <div className="space-y-4">
                                <div className="p-5 bg-white rounded-2xl border border-slate-200/60 shadow-sm flex items-center justify-between">
                                    <div>
                                        <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider font-mono">Global Infrastructure</div>
                                        <div className="text-sm font-bold text-slate-900 mt-1">Multi-Region Deployment</div>
                                    </div>
                                    <span className="text-emerald-600 font-semibold text-xs flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/50">● Scalable</span>
                                </div>
                                <div className="p-5 bg-white rounded-2xl border border-slate-200/60 shadow-sm flex items-center justify-between">
                                    <div>
                                        <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider font-mono">Security & Compliance</div>
                                        <div className="text-sm font-bold text-slate-900 mt-1">ISO & SOC2 Standards</div>
                                    </div>
                                    <span className="text-emerald-600 font-semibold text-xs flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/50">● Verified</span>
                                </div>
                                <div className="p-5 bg-white rounded-2xl border border-slate-200/60 shadow-sm flex items-center justify-between">
                                    <div>
                                        <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider font-mono">AI Models</div>
                                        <div className="text-sm font-bold text-slate-900 mt-1">Custom Enterprise LLMs</div>
                                    </div>
                                    <span className="text-blue-600 font-semibold text-xs flex items-center gap-1 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/50">↑ 99.9%</span>
                                </div>
                            </div>
                        </div>
                        {/* Floating Stat */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 z-20 hidden md:block">
                            <div className="text-4xl font-bold text-blue-600 mb-1">10+</div>
                            <div className="text-sm font-semibold text-slate-700">Years Experience</div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        id="about-us"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                            Pioneering Enterprise AI & Digital Transformation
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            <strong>Our Mission:</strong> To empower global enterprises with scalable AI solutions, secure cloud architectures, and bespoke software that drives continuous growth and operational efficiency.
                        </p>

                        <div className="space-y-5 mb-10">
                            {[
                                "End-to-End Enterprise Delivery Model tailored to complex workflows",
                                "Global Client Network spanning Fortune 500s and rapid-scaling startups",
                                "Proven Track Record of deploying secure, compliant AI systems"
                            ].map((benefit, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                                    <span className="text-slate-700 font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-6 mb-10 border-t border-slate-100 pt-8">
                            <div>
                                <div className="text-3xl font-bold text-slate-900 mb-1">500+</div>
                                <div className="text-sm text-slate-500 font-medium">Global Clients</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-slate-900 mb-1">24/7</div>
                                <div className="text-sm text-slate-500 font-medium">Enterprise Support</div>
                            </div>
                        </div>

                        <Button size="lg" className="h-14 px-8 text-base bg-slate-900 hover:bg-slate-800 text-white rounded-full">
                            <Link to="/#solutions" className="flex items-center">
                                Explore Our Capabilities
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
