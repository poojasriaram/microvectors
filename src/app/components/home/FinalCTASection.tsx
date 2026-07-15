import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export default function FinalCTASection() {
    return (
        <section className="relative py-32 overflow-hidden bg-slate-900">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 bg-slate-950 overflow-hidden">
                {/* CSS grid overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}></div>
            </div>

            <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-[3rem] p-12 md:p-20 shadow-premium"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-400/30 mb-8 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
                        <span className="text-xs font-bold text-blue-300 tracking-[0.2em] uppercase">Enterprise Ready</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl lg:text-[4.5rem] font-extrabold text-white mb-6 tracking-tight leading-[1.1] drop-shadow-sm">
                        Ready to Automate Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Revenue Engine?</span>
                    </h2>
                    
                    <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
                        Join 50+ enterprise leaders who have replaced fragmented tools with a unified, self-learning AI infrastructure.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
                        <Link to="/book-demo" className="group w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto h-16 px-10 text-lg font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-[0_0_40px_-10px_rgba(37,99,235,0.6)] transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-[0_0_50px_-5px_rgba(37,99,235,0.8)] border border-blue-400/20">
                                <span className="flex items-center">
                                    Book a Live Demo
                                    <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Button>
                        </Link>
                        <Link to="/contact" className="group w-full sm:w-auto">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto h-16 px-10 text-lg font-bold border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 rounded-full transition-all duration-300 transform group-hover:-translate-y-1 bg-transparent backdrop-blur-sm">
                                <span className="flex items-center">
                                    Talk to an Expert
                                </span>
                            </Button>
                        </Link>
                    </div>
                    
                    <p className="text-sm text-slate-400 mb-10 font-medium tracking-wide">
                        Join companies seeing <span className="text-blue-300 font-bold">5x ROI</span> in their first 90 days.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium text-slate-400 border-t border-white/10 pt-8">
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                            </div>
                            No Credit Card Required
                        </div>
                        <div className="hidden sm:block w-1 h-1 bg-slate-600 rounded-full"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                            </div>
                            SOC2 Type II Certified
                        </div>
                        <div className="hidden sm:block w-1 h-1 bg-slate-600 rounded-full"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                            </div>
                            Setup in Minutes
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
