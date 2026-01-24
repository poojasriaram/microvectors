
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { cryptoContent } from '../../data/cryptoContent';
import CryptoGlobalICPSection from '../components/CryptoGlobalICPSection';
import CryptoOutcomeBlock from '../components/CryptoOutcomeBlock';

export default function Crypto() {
    return (
        <div className="pt-24 lg:pt-32 pb-16 min-h-screen bg-slate-950 text-white relative overflow-hidden">
            {/* Global Background Noise */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

            {/* Hero Section */}
            <div className="relative mb-24">
                {/* Hero Background Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen" />
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-5xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-md mb-8 shadow-lg">
                            <Sparkles className="w-4 h-4 text-blue-400" />
                            <span className="text-sm font-semibold text-slate-300">New: AI-Native Revenue Protocol</span>
                        </div>
                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[1.05]">
                            AI-Powered Growth & <br />
                            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                                Revenue Stack for Crypto
                            </span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-medium text-balance">
                            Turn Users, Liquidity, and Ecosystems into <span className="text-white font-semibold">Predictable Revenue</span> with AI-Driven Intelligence.
                        </p>
                    </div>
                </div>
            </div>

            {/* Global Crypto ICP Section */}
            <CryptoGlobalICPSection />

            {/* Crypto Content Blocks - Dark Mode Premium */}
            <div className="bg-slate-950 relative z-20">
                {/* Section Divider Gradient */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-900/50 to-transparent"></div>

                {cryptoContent.map((block, index) => (
                    <CryptoOutcomeBlock key={index} data={block} index={index} />
                ))}
            </div>

            {/* Unified Outcome Section */}
            <div className="relative py-32 mt-10 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">Unified Crypto Outcome</h2>
                    <p className="text-xl md:text-3xl text-slate-300 font-medium leading-relaxed max-w-4xl mx-auto">
                        Together, these AI-powered engines transform crypto businesses from speculative growth models into <span className="text-blue-400">data-driven, revenue-predictable, and scalable ecosystems</span>—across exchanges, protocols, Web3 startups, and digital asset platforms.
                    </p>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-5xl mx-auto px-4 py-24 text-center relative z-10">
                <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-12 md:p-20 shadow-2xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500">
                    {/* Background Gradients */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-600/20 to-blue-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white relative z-10 tracking-tight leading-tight">
                        Scale Your Crypto Ecosystem with <br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            AI Intelligence
                        </span>
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10 pt-4">
                        <Link to="/book-demo">
                            <Button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-7 h-auto text-xl font-bold rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all flex items-center gap-3 transform hover:-translate-y-1">
                                Book a Demo
                                <ArrowRight className="w-6 h-6" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
