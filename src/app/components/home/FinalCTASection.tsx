import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export default function FinalCTASection() {
    return (
        <section className="relative py-20 md:py-24 lg:py-32 overflow-hidden bg-white border-t border-slate-200">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 bg-slate-50 overflow-hidden">
                {/* CSS grid overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}></div>
            </div>

            <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-[3rem] p-12 md:p-20 shadow-xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                        <span className="text-xs font-bold text-blue-700 tracking-[0.2em] uppercase">Enterprise Ready</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl lg:text-[4.5rem] font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1] drop-shadow-sm">
                        Ready to Automate Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Revenue Engine?</span>
                    </h2>
                    
                    <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
                        Join 50+ enterprise leaders who have replaced fragmented tools with a unified, self-learning AI infrastructure.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
                        <Link to="/book-consultation" className="btn-cta-primary w-full sm:w-auto !min-h-[64px] !px-10 text-lg group shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)] group-hover:shadow-[0_0_50px_-5px_rgba(37,99,235,0.5)]">
                            <span className="flex items-center">
                                Build Your AI Solution
                                <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" />
                            </span>
                        </Link>
                        <Link to="/contact" className="btn-cta-secondary w-full sm:w-auto !min-h-[64px] !px-10 text-lg group text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300">
                            <span className="flex items-center">
                                Talk to an AI Expert
                            </span>
                        </Link>
                    </div>
                    
                    <p className="text-sm text-slate-500 mb-10 font-medium tracking-wide">
                        Join companies seeing <span className="text-blue-600 font-bold">5x ROI</span> in their first 90 days.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium text-slate-600 border-t border-slate-200 pt-8">
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                                <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                            </div>
                            No Credit Card Required
                        </div>
                        <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                                <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                            </div>
                            SOC2 Type II Certified
                        </div>
                        <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                                <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                            </div>
                            Setup in Minutes
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
