import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export default function WhyChooseSection() {
    return (
        <section id="company" className="py-20 md:py-24 lg:py-32 bg-white overflow-hidden relative border-t border-slate-200">
            <div className="absolute inset-0 bg-grid-slate-100 opacity-60 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
                    
                    {/* Left: Operational System Board */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl border border-slate-200 bg-slate-50/80 backdrop-blur-2xl p-8 shadow-xl">
                            <h3 className="text-[10px] font-extrabold text-blue-600 mb-8 font-mono tracking-widest uppercase flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                                // Enterprise Delivery Model
                            </h3>
                            <div className="space-y-4">
                                <div className="p-5 bg-white rounded-2xl border border-slate-100 hover:border-blue-100 transition-colors shadow-sm flex items-center justify-between">
                                    <div>
                                        <div className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider font-mono">Global Infrastructure</div>
                                        <div className="text-sm font-bold text-slate-900 mt-1">Multi-Region Deployment</div>
                                    </div>
                                    <span className="text-emerald-600 font-mono text-[10px] uppercase font-bold flex items-center gap-1 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">● Scalable</span>
                                </div>
                                <div className="p-5 bg-white rounded-2xl border border-slate-100 hover:border-blue-100 transition-colors shadow-sm flex items-center justify-between">
                                    <div>
                                        <div className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider font-mono">Security & Compliance</div>
                                        <div className="text-sm font-bold text-slate-900 mt-1">ISO & SOC2 Standards</div>
                                    </div>
                                    <span className="text-emerald-600 font-mono text-[10px] uppercase font-bold flex items-center gap-1 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">● Verified</span>
                                </div>
                                <div className="p-5 bg-white rounded-2xl border border-slate-100 hover:border-blue-100 transition-colors shadow-sm flex items-center justify-between">
                                    <div>
                                        <div className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider font-mono">AI Models</div>
                                        <div className="text-sm font-bold text-slate-900 mt-1">Custom Enterprise LLMs</div>
                                    </div>
                                    <span className="text-blue-600 font-mono text-[10px] uppercase font-bold flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">↑ 99.9%</span>
                                </div>
                            </div>
                        </div>
                        {/* Floating Stat */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-200 z-20 hidden md:block">
                            <div className="text-4xl font-black text-blue-600 mb-1">10<span className="text-blue-400">+</span></div>
                            <div className="text-[11px] font-bold tracking-widest text-slate-500 uppercase">Years Experience</div>
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
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                            Pioneering Enterprise AI & Digital Transformation
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                            <strong className="text-slate-900 font-bold">Our Mission:</strong> To empower global enterprises with scalable AI solutions, secure cloud architectures, and bespoke software that drives continuous growth and operational efficiency.
                        </p>

                        <div className="space-y-6 mb-12">
                            {[
                                "End-to-End Enterprise Delivery Model tailored to complex workflows",
                                "Global Client Network spanning Fortune 500s and rapid-scaling startups",
                                "Proven Track Record of deploying secure, compliant AI systems"
                            ].map((benefit, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <span className="text-slate-700 font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-8 mb-12 border-t border-slate-200 pt-10">
                            <div>
                                <div className="text-4xl font-black text-slate-900 mb-2">500<span className="text-blue-600">+</span></div>
                                <div className="text-[11px] uppercase tracking-widest text-slate-500 font-bold">Global Clients</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black text-slate-900 mb-2">24<span className="text-blue-600">/</span>7</div>
                                <div className="text-[11px] uppercase tracking-widest text-slate-500 font-bold">Enterprise Support</div>
                            </div>
                        </div>

                        <Button size="lg" className="h-14 px-8 text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-full uppercase tracking-wide shadow-md">
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
