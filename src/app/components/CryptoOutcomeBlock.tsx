
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Zap, TrendingUp, Target, CheckCircle2 } from 'lucide-react';

interface OutcomeBlockProps {
    data: {
        title: string;
        tagline: string;
        description: string;
        icon: any;
        metrics: { label: string; value: string }[];
        portfolioCards: { title: string; icon: any }[];
        verticalTabs: { title: string; content: string; icon: any }[];
        icp: {
            title: string;
            audience: string[];
            outcome: string;
        };
    };
    index: number;
}

export default function CryptoOutcomeBlock({ data, index }: OutcomeBlockProps) {
    const [activeTab, setActiveTab] = useState(0);
    const Icon = data.icon;

    return (
        <div className="py-24 border-b border-slate-800 last:border-0 relative overflow-hidden">
            {/* Background Gradients */}
            <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${index % 2 === 0 ? 'from-blue-900/30 to-purple-900/30' : 'from-purple-900/30 to-indigo-900/30'} rounded-full blur-[100px] opacity-40 -translate-y-1/2 translate-x-1/2 pointer-events-none`}></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Column: Content & Metrics */}
                    <div className="lg:w-1/2 space-y-10">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 font-bold text-xs uppercase tracking-wider mb-6 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                                <Icon className="w-4 h-4" />
                                <span>Outcome Engine {index + 1}</span>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
                                {data.title}
                            </h3>
                            <p className="text-xl font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                                {data.tagline}
                            </p>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                {data.description}
                            </p>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 gap-5">
                            {data.metrics.map((metric, idx) => (
                                <div key={idx} className="bg-slate-800/40 backdrop-blur-sm p-5 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 hover:bg-slate-800/60 transition-all duration-300 group">
                                    <div className="text-3xl font-bold text-white mb-1 group-hover:scale-105 transition-transform origin-left">{metric.value}</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{metric.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* ICP Subsection */}
                        <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 shadow-lg relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <h4 className="flex items-center gap-2.5 font-bold text-white mb-6 text-sm uppercase tracking-widest">
                                <Target className="w-4 h-4 text-blue-400" />
                                {data.icp.title}
                            </h4>
                            <ul className="space-y-4 mb-6">
                                {data.icp.audience.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-sm text-slate-300 leading-relaxed font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-6 border-t border-slate-700/50">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                                    <p className="text-sm font-semibold text-slate-200">
                                        Outcome: <span className="text-slate-400 font-normal">{data.icp.outcome}</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Portfolio Cards */}
                        <div>
                            <h4 className="font-bold text-slate-200 mb-5 flex items-center gap-3 text-sm uppercase tracking-wider">
                                <span className="w-1 h-5 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></span>
                                Outcome Portfolio
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {data.portfolioCards.map((card, idx) => {
                                    const CardIcon = card.icon;
                                    return (
                                        <div key={idx} className="flex items-center gap-4 p-4 bg-slate-800/40 rounded-xl border border-slate-700/50 group hover:border-blue-500/40 hover:bg-slate-800/60 transition-all duration-300">
                                            <div className="bg-slate-900 p-2.5 rounded-lg shadow-inner group-hover:bg-blue-900/20 transition-colors border border-slate-800">
                                                <CardIcon className="w-4 h-4 text-blue-400" />
                                            </div>
                                            <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">{card.title}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Vertical Tabs (Interactive) */}
                    <div className="lg:w-1/2 w-full bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 overflow-hidden flex flex-col md:flex-row h-full min-h-[550px] ring-1 ring-white/5">
                        {/* Tab List */}
                        <div className="md:w-1/3 bg-slate-950/50 border-r border-slate-800 flex flex-col">
                            {data.verticalTabs.map((tab, idx) => {
                                const TabIcon = tab.icon;
                                const isActive = activeTab === idx;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveTab(idx)}
                                        className={`flex items-center gap-3 p-6 text-left transition-all duration-300 relative border-b border-slate-800 last:border-0 group ${isActive
                                            ? 'bg-slate-800/50 text-white shadow-[inset_3px_0_0_0_#3b82f6]'
                                            : 'text-slate-500 hover:bg-slate-900 hover:text-slate-300'
                                            }`}
                                    >
                                        <TabIcon className={`w-5 h-5 flex-shrink-0 transition-colors ${isActive ? 'text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]' : 'text-slate-600 group-hover:text-slate-400'}`} />
                                        <span className={`font-semibold text-sm transition-colors ${isActive ? 'text-white' : ''}`}>{tab.title}</span>
                                        {isActive && (
                                            <ChevronRight className="w-4 h-4 ml-auto text-blue-400" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Tab Content */}
                        <div className="md:w-2/3 p-10 flex flex-col justify-center relative bg-slate-900">
                            {/* Content Background Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-8 relative z-10"
                                >
                                    <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 shadow-xl mb-6 group">
                                        {/* Render the icon relative to the active tab */}
                                        {React.createElement(data.verticalTabs[activeTab].icon, { className: "w-7 h-7 text-blue-400 group-hover:scale-110 transition-transform duration-300" })}
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-3">
                                            {data.verticalTabs[activeTab].title}
                                        </h4>
                                        <p className="text-xl md:text-3xl font-bold text-white leading-tight">
                                            {data.verticalTabs[activeTab].content}
                                        </p>
                                    </div>

                                    {/* Contextual dynamic footer based on tab */}
                                    <div className="pt-8 border-t border-slate-800 mt-auto">
                                        {activeTab === 0 && (
                                            <p className="text-sm text-slate-500 italic font-medium">"Recognizing the situation is the first step to transformation."</p>
                                        )}
                                        {activeTab === 1 && (
                                            <p className="text-sm text-slate-500 italic font-medium">"Pain points are just opportunities for AI intervention."</p>
                                        )}
                                        {activeTab === 2 && (
                                            <div className="flex items-center gap-3 text-blue-400 font-bold text-sm uppercase tracking-wide">
                                                <Zap className="w-4 h-4 text-blue-400 fill-current" />
                                                <span className="drop-shadow-[0_0_5px_rgba(96,165,250,0.8)]">AI Engine Active</span>
                                            </div>
                                        )}
                                        {activeTab === 3 && (
                                            <div className="flex items-center gap-3 text-emerald-400 font-bold text-sm uppercase tracking-wide">
                                                <TrendingUp className="w-4 h-4" />
                                                <span>Revenue Impact Verified</span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
