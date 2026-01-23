import React from 'react';
import { Target, Users, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function GlobalICPSection() {
    return (
        <section className="py-20 bg-slate-50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-[2rem] p-8 md:p-14 shadow-xl shadow-slate-200/50 border border-slate-100">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold tracking-wide uppercase mb-6 shadow-sm border border-blue-100/50">
                            <Target className="w-4 h-4" />
                            Ideal Customer Profile
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                            Trustflow AI is purpose-built for:
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
                        {/* Column 1: Who it's for */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3 tracking-tight">
                                <div className="p-2 bg-blue-50 rounded-lg">
                                    <Users className="w-6 h-6 text-blue-600" />
                                </div>
                                Target Organizations
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-slate-700 text-lg leading-relaxed font-medium">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                                    <span>B2B SaaS, Technology, AI, and Digital-First Enterprises</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-700 text-lg leading-relaxed font-medium">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                                    <span>Growth-stage to enterprise organizations ($5M–$500M+ ARR)</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-700 text-lg leading-relaxed font-medium">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                                    <span>Revenue-owning leaders responsible for pipeline, growth, and forecasting</span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2: Champions */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3 tracking-tight">
                                <div className="p-2 bg-indigo-50 rounded-lg">
                                    <Users className="w-6 h-6 text-indigo-600" />
                                </div>
                                Primary Buyer & Champions
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Chief Revenue Officer (CRO)",
                                    "VP / Head of Growth",
                                    "VP Sales & Revenue Operations",
                                    "Head of Demand Generation",
                                    "Performance Marketing Leaders"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700 text-lg leading-relaxed font-medium group">
                                        <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2.5 shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Mission Critical */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3 tracking-tight">
                                <div className="p-2 bg-amber-50 rounded-lg">
                                    <AlertTriangle className="w-6 h-6 text-amber-500" />
                                </div>
                                When It Becomes Mission-Critical
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Revenue growth has plateaued despite increased spend",
                                    "Lead volume exists, but quality and conversion are inconsistent",
                                    "Sales cycles are long and forecasting is unreliable",
                                    "Teams rely on manual analysis, disconnected tools, and gut decisions"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700 text-lg leading-relaxed font-medium group">
                                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-2.5 shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
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
