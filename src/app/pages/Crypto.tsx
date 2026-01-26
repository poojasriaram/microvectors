
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight, Sparkles, Zap, ShieldCheck, Globe } from 'lucide-react';
import { cryptoContent } from '../../data/cryptoContent';
import GlobalICPSection from '../components/GlobalICPSection';
import CryptoOutcomeBlock from '../components/CryptoOutcomeBlock';
import CryptoHeroSlides from '../components/CryptoHeroSlides';

export default function Crypto() {
    return (
        <div className="min-h-screen bg-[#020617] text-white relative overflow-hidden font-sans selection:bg-blue-500/30">
            {/* Global Background Noise & Gradients */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay z-0"></div>
            <div className="fixed top-0 left-0 w-full h-[800px] bg-gradient-to-b from-blue-900/10 via-slate-900/0 to-slate-900/0 pointer-events-none z-0" />

            <div className="relative z-10 pt-32 pb-20">
                {/* Hero Section */}
                <div className="relative mb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Background Effects */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen animate-pulse" />

                    <div className="text-center max-w-5xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/40 border border-slate-700/50 backdrop-blur-md mb-8 shadow-lg hover:border-blue-500/30 transition-colors cursor-default">
                            <Sparkles className="w-4 h-4 text-blue-400" />
                            <span className="text-sm font-semibold text-slate-300 tracking-wide">New: AI-Native Revenue Protocol</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[1.05]">
                            AI-Powered Growth & <br />
                            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                                Revenue Stack for Crypto
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-medium text-balance mb-12">
                            Turn Users, Liquidity, and Ecosystems into <span className="text-white font-semibold">Predictable Revenue</span> with AI-Driven Intelligence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                            <Button asChild className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 h-auto text-lg font-bold rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all flex items-center gap-2 group">
                                <Link to="/book-demo">
                                    Start Scaling Now
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button asChild variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/5 px-8 py-6 h-auto text-lg font-medium rounded-full border border-white/10 hover:border-white/20 transition-all">
                                <Link to="/talk-to-expert">Talk to an Expert</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Premium Hero Slides */}
                    <div className="w-full flex justify-center perspective-[2000px]">
                        <CryptoHeroSlides />
                    </div>
                </div>

                {/* Trusted Ecosystem Strip */}
                <div className="border-y border-white/5 bg-slate-950/50 backdrop-blur-sm py-10 mb-20 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8 block">Trusted by Leading Web3 Ecosystems</span>
                        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Placeholder Logos - In a real app these would be SVGs */}
                            {[1, 2, 3, 4, 5].map((_, i) => (
                                <div key={i} className="h-8 w-32 bg-slate-700/30 rounded animate-pulse" />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Global Crypto ICP Section */}
                <GlobalICPSection />

                {/* Crypto Content Blocks */}
                <div className="relative z-20 space-y-32 py-24">
                    {cryptoContent.map((block, index) => (
                        <CryptoOutcomeBlock key={index} data={block} index={index} />
                    ))}
                </div>

                {/* Unified Outcome Section */}
                <div className="relative py-32 mt-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black z-0"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-8 shadow-lg shadow-indigo-500/25">
                            <Zap className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">Unified Crypto Outcome</h2>
                        <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed max-w-4xl mx-auto">
                            Together, these AI-powered engines transform crypto businesses from speculative growth models into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-bold">data-driven, revenue-predictable, and scalable ecosystems</span>.
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="max-w-5xl mx-auto px-4 py-24 text-center relative z-10">
                    <div className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 md:p-24 shadow-2xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500">
                        {/* Background Gradients */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-60"></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-60"></div>

                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white relative z-10 tracking-tight leading-[1.1]">
                            Scale Your Crypto Ecosystem with <br />
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                AI Intelligence
                            </span>
                        </h2>

                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                            Join the fastest growing protocols and exchanges using TrustFlow AI to dominate the market.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                            <Button asChild className="bg-white text-slate-950 hover:bg-blue-50 px-10 py-7 h-auto text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 transform hover:-translate-y-1">
                                <Link to="/book-demo">
                                    Book a Demo
                                    <ArrowRight className="w-6 h-6" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
