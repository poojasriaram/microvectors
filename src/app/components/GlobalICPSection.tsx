
import React from 'react';
import { Target, Users, AlertTriangle, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function GlobalICPSection() {
    return (
        <section className="py-16 bg-slate-950 border-b border-slate-800 relative overflow-hidden">
            {/* Premium Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-slate-950/90 mix-blend-multiply z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2000"
                    alt="Background"
                    className="w-full h-full object-cover opacity-40"
                />
            </div>

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-10 shadow-2xl border border-white/10 ring-1 ring-white/5">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-500/10 text-blue-400 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-blue-500/20">
                            <Target className="w-4 h-4" />
                            Crypto Ideal Customer Profile
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tighter leading-[1.1]">
                            Built for High-Velocity <br />
                            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Web3 & Crypto Ecosystems</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {/* Column 1: Who it's for */}
                        <div className="group p-6 rounded-3xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500/30 transition-all duration-500">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                                    <Users className="w-5 h-5 text-blue-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white tracking-tight">
                                    Target Ecosystems
                                </h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3.5 text-slate-300 text-[14px] leading-relaxed font-medium transition-transform duration-300 hover:translate-x-1">
                                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                    <span>L1 & L2 Protocols scaling their ecosystem</span>
                                </li>
                                <li className="flex items-start gap-3.5 text-slate-300 text-[14px] leading-relaxed font-medium transition-transform duration-300 hover:translate-x-1">
                                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                    <span>DeFi Platforms & DEXs seeking sustainable liquidity</span>
                                </li>
                                <li className="flex items-start gap-3.5 text-slate-300 text-[14px] leading-relaxed font-medium transition-transform duration-300 hover:translate-x-1">
                                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                    <span>Web3 Gaming & Metaverse Projects launching tokens</span>
                                </li>
                                <li className="flex items-start gap-3.5 text-slate-300 text-[14px] leading-relaxed font-medium transition-transform duration-300 hover:translate-x-1">
                                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                    <span>Centralized Exchanges (CEX) driving user adoption</span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2: Champions */}
                        <div className="group p-6 rounded-3xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-indigo-500/30 transition-all duration-500">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                                    <Target className="w-5 h-5 text-indigo-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white tracking-tight">
                                    Core Champions
                                </h3>
                            </div>
                            <ul className="space-y-2.5">
                                {[
                                    "Founders & Protocol Architects",
                                    "Heads of Growth & Marketing",
                                    "Tokenomics & Ecosystem Leads",
                                    "Community Managers",
                                    "DAOs & Governance Councils"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3.5 text-slate-300 text-[14px] font-medium p-1.5 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group/item hover:pl-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover/item:scale-150 transition-transform"></div>
                                        <span className="group-hover/item:text-white transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Mission Critical */}
                        <div className="group p-6 rounded-3xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-amber-500/30 transition-all duration-500">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                                    <AlertTriangle className="w-5 h-5 text-amber-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white tracking-tight">
                                    When It's Mission-Critical
                                </h3>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    "TVL is high, but daily active user count is stagnant",
                                    "Incentive programs are bleeding funds to bots/farmers",
                                    "Token launch is approaching with unclear demand",
                                    "Community sentiment is disconnected from on-chain reality",
                                    "Struggling to convert airdrop hunters into long-term users"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3.5 text-slate-300 text-[14px] leading-relaxed font-medium transition-transform duration-300 hover:translate-x-1">
                                        <div className="p-0.5 bg-amber-500/10 rounded-full mt-1">
                                            <ArrowUpRight className="w-3 h-3 text-amber-400" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
