import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Zap, TrendingUp, AlertTriangle, Target, Shield, Users, Globe, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface VerticalBlockProps {
    data: {
        title: string;
        tagline: string;
        description: string;
        icon: any;
        kpis: { label: string; value: string }[];
        verticalTabs: { title: string; content: string; icon: any }[];
    };
    index: number;
}

export default function VerticalBlock({ data, index }: VerticalBlockProps) {
    const [activeTab, setActiveTab] = useState(0);
    const Icon = data.icon;

    return (
        <div className="py-20 border-b border-slate-200 last:border-0 relative overflow-hidden">
            {/* Background Gradients */}
            <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-[600px] h-[600px] bg-gradient-to-br ${index % 2 === 0 ? 'from-blue-50 to-purple-50' : 'from-indigo-50 to-cyan-50'} rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-0 pointer-events-none`}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className={`flex flex-col lg:flex-row gap-16 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

                    {/* Content Side */}
                    <div className="lg:w-1/2 space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-bold text-xs uppercase tracking-wider mb-4">
                                <Icon className="w-4 h-4" />
                                <span>Vertical {index + 1}</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 leading-tight">
                                {data.title}
                            </h3>
                            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"></div>
                            <p className="text-xl font-medium text-slate-800 mb-4">
                                {data.tagline}
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                {data.description}
                            </p>
                        </div>

                        {/* KPIs Grid */}
                        <div>
                            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                                <TrendingUp className="w-4 h-4 text-green-600" />
                                Offering Performance
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                                {data.kpis.map((kpi, idx) => (
                                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
                                        <div className="text-2xl font-bold text-slate-900 mb-1">{kpi.value}</div>
                                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide leading-snug">{kpi.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Interactive Side: Vertical Tabs */}
                    <div className="lg:w-1/2 w-full bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col h-full min-h-[500px]">
                        {/* Header for Tabs Context */}
                        <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center gap-2">
                            <Users className="w-5 h-5 text-slate-500" />
                            <span className="font-bold text-slate-700 text-sm uppercase tracking-wide">Industry Context & Solution</span>
                        </div>

                        <div className="flex flex-col md:flex-row flex-grow">
                            {/* Tab List */}
                            <div className="md:w-1/3 border-r border-slate-100 flex flex-col bg-slate-50/50">
                                {data.verticalTabs.map((tab, idx) => {
                                    const TabIcon = tab.icon;
                                    const isActive = activeTab === idx;
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveTab(idx)}
                                            className={`flex items-center gap-3 p-4 text-left transition-all duration-300 relative border-b border-slate-100 last:border-0 hover:bg-white ${isActive
                                                    ? 'bg-white text-blue-600 shadow-[inset_3px_0_0_0_#2563eb] z-10'
                                                    : 'text-slate-500'
                                                }`}
                                        >
                                            <TabIcon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                                            <span className={`font-semibold text-sm ${isActive ? 'text-slate-900' : ''}`}>{tab.title}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Tab Content */}
                            <div className="md:w-2/3 p-8 flex flex-col justify-center relative bg-white">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-4"
                                    >
                                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100 mb-4">
                                            {React.createElement(data.verticalTabs[activeTab].icon, { className: "w-6 h-6 text-blue-600" })}
                                        </div>

                                        <h4 className="text-lg font-bold text-slate-900 mb-2">
                                            {data.verticalTabs[activeTab].title}
                                        </h4>
                                        <div className="space-y-3">
                                            {data.verticalTabs[activeTab].content.split(';').map((point, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                                    <p className="text-slate-600 text-lg leading-relaxed">
                                                        {point.trim()}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
