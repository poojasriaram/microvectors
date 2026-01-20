import React from 'react';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';
import OutcomeBlock from '../components/OutcomeBlock';
import { cryptoContent } from '../../data/cryptoContent';

export default function Crypto() {
    return (
        <div className="pt-24 lg:pt-32 pb-16 min-h-screen bg-slate-900 text-white">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                        AI-Powered Growth & <br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Revenue Stack for Crypto
                        </span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-medium">
                        Turn Users, Liquidity, and Ecosystems into Predictable Revenue with AI-Driven Intelligence.
                    </p>
                </div>
            </div>

            {/* Crypto Content Blocks */}
            <div className="bg-slate-50">
                {cryptoContent.map((block, index) => (
                    <OutcomeBlock key={index} data={block} index={index} />
                ))}
            </div>

            {/* Unified Outcome Section */}
            <div className="bg-slate-900 py-20 text-white border-y border-slate-800 mt-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-white">Unified Crypto Outcome</h2>
                    <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
                        Together, these AI-powered engines transform crypto businesses from speculative growth models into data-driven, revenue-predictable, and scalable ecosystems—across exchanges, protocols, Web3 startups, and digital asset platforms.
                    </p>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-4xl mx-auto px-4 py-20 text-center relative z-10">
                <div className="bg-gradient-to-br from-blue-900 to-purple-900 border border-slate-700 rounded-2xl p-12 shadow-2xl overflow-hidden relative group hover:border-blue-500 transition-colors">
                    <div className="absolute inset-0 bg-white/5 opacity-50 pointer-events-none" />

                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white relative z-10">
                        Scale Your Crypto Ecosystem with <br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            AI Intelligence
                        </span>
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 h-auto text-lg font-bold rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all flex items-center gap-2">
                            Book a Demo
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
