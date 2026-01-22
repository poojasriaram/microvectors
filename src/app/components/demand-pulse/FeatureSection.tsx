import React from 'react';
import { CheckCircle2, Zap, Brain, TrendingUp, Layers } from 'lucide-react';

interface UseCase {
    sector: string;
    description: string;
}

interface FeatureSectionProps {
    number: string;
    title: string;
    tagline: string;
    successExample: string;
    useCases: UseCase[];
    howAiDeliveredIt: string;
    outcomeKPIs: string[];
}

export default function FeatureSection({
    number,
    title,
    tagline,
    successExample,
    useCases,
    howAiDeliveredIt,
    outcomeKPIs,
}: FeatureSectionProps) {
    return (
        <section className="py-24 relative overflow-hidden border-t border-slate-800/50 bg-[#0B0F19]">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-900/0 to-slate-900/0 pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 opacity-40 font-mono">
                            {number}
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent"></div>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        {title}
                    </h2>
                    <p className="text-xl md:text-2xl text-blue-100/80 font-light max-w-4xl leading-relaxed">
                        {tagline}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Col: Success Story & Use Cases (7 cols) */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* Success Example Card */}
                        <div className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 relative overflow-hidden group hover:border-blue-500/40 transition-all shadow-2xl shadow-blue-900/5">
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <TrendingUp className="w-32 h-32 text-blue-400" />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-blue-500/10 rounded-lg">
                                        <Zap className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-blue-100 uppercase tracking-widest">
                                        Success Example
                                    </h3>
                                </div>
                                <p className="text-lg text-slate-300 leading-relaxed">
                                    {successExample}
                                </p>
                            </div>
                        </div>

                        {/* Use Cases */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                                <Layers className="w-5 h-5 text-indigo-400" />
                                Strategic Use Cases
                            </h3>
                            <div className="grid gap-4">
                                {useCases.map((useCase, idx) => (
                                    <div key={idx} className="group flex gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300 hover:translate-x-1">
                                        <span className="text-blue-400 font-bold whitespace-nowrap min-w-[80px]">{useCase.sector}:</span>
                                        <span className="text-slate-400 group-hover:text-slate-200 transition-colors">{useCase.description}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Col: The AI Tech & KPIs (5 cols) */}
                    <div className="lg:col-span-5 space-y-8 flex flex-col">

                        {/* How AI Delivered It */}
                        <div className="bg-gradient-to-b from-indigo-900/20 to-slate-900/40 border border-indigo-500/20 rounded-2xl p-8 backdrop-blur-md">
                            <h3 className="flex items-center gap-2 text-lg font-bold text-indigo-300 mb-4">
                                <Brain className="w-5 h-5" /> How AI Delivered It
                            </h3>
                            <p className="text-lg text-slate-300 font-medium leading-relaxed">
                                {howAiDeliveredIt}
                            </p>
                        </div>

                        {/* Outcome KPIs */}
                        <div className="flex-1 bg-slate-900/30 border border-emerald-500/10 rounded-2xl p-8">
                            <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4">
                                Outcome KPIs
                            </h3>
                            <div className="space-y-4">
                                {outcomeKPIs.map((kpi, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                                        <span className="text-emerald-100 font-medium text-lg leading-tight">{kpi}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
