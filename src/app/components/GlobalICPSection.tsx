
import React from 'react';
import { Target, Users, AlertTriangle, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function GlobalICPSection() {
    return (
        <section className="py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
            {/* Subtle Pattern Background */}
            <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-slate-200/60 border border-white ring-1 ring-slate-200/50">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-sm border border-blue-100/50">
                            <Target className="w-4 h-4" />
                            Ideal Customer Profile
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-[1.1]">
                            Trustflow AI is purpose-built for:
                        </h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                            Designed for high-velocity revenue teams who need to move faster than the market.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {/* Column 1: Who it's for */}
                        <div className="group p-8 rounded-3xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all duration-500">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                                <Users className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">
                                Target Organizations
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3.5 text-slate-600 text-[17px] leading-relaxed font-medium transition-transform duration-300 hover:translate-x-1">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                                    <span>B2B SaaS, Technology, AI, and Digital-First Enterprises</span>
                                </li>
                                <li className="flex items-start gap-3.5 text-slate-600 text-[17px] leading-relaxed font-medium transition-transform duration-300 hover:translate-x-1">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                                    <span>Growth-stage to enterprise organizations ($5M–$500M+ ARR)</span>
                                </li>
                                <li className="flex items-start gap-3.5 text-slate-600 text-[17px] leading-relaxed font-medium transition-transform duration-300 hover:translate-x-1">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                                    <span>Revenue-owning leaders targeting pipeline velocity</span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2: Champions */}
                        <div className="group p-8 rounded-3xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-indigo-900/5 hover:border-indigo-100 transition-all duration-500">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-8 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-500">
                                <Target className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">
                                Primary Buyer & Champions
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Chief Revenue Officer (CRO)",
                                    "VP / Head of Growth",
                                    "VP Sales & Revenue Ops",
                                    "Head of Demand Gen",
                                    "Performance Marketing Leaders"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3.5 text-slate-600 text-[17px] font-medium p-2 rounded-lg hover:bg-slate-50 transition-all duration-300 group/item hover:pl-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover/item:scale-150 transition-transform"></div>
                                        <span className="group-hover/item:text-slate-900 transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Mission Critical */}
                        <div className="group p-8 rounded-3xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-amber-900/5 hover:border-amber-100 transition-all duration-500">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-8 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-500">
                                <AlertTriangle className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">
                                When It Becomes Critical
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Revenue growth has plateaued despite increased spend",
                                    "Lead volume exists, but quality is inconsistent",
                                    "Sales cycles are long and forecasting is unreliable",
                                    "Teams rely on manual analysis and gut decisions"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3.5 text-slate-600 text-[17px] leading-relaxed font-medium transition-transform duration-300 hover:translate-x-1">
                                        <div className="p-0.5 bg-amber-100 rounded-full mt-1">
                                            <ArrowUpRight className="w-3.5 h-3.5 text-amber-600" />
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
