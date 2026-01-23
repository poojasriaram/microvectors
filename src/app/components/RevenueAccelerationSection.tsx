import React, { useState } from 'react';
import { revenueAccelerationData } from '../../data/revenueAcceleration';
import { ArrowRight, CheckCircle2, XCircle, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export default function RevenueAccelerationSection() {
    const { title, tagline, description, kpis, portfolio, verticalTabs } = revenueAccelerationData;
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="py-24 bg-white relative border-t border-slate-100 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-20">

                {/* 1. Header Section */}
                <div className="text-center max-w-4xl mx-auto space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                        {title}
                    </h2>
                    <p className="text-xl md:text-2xl text-blue-600 font-medium">
                        {tagline}
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        {description}
                    </p>

                    {/* ICP Subsection: Overview */}
                    <div className="mt-12 p-8 bg-blue-50/50 rounded-2xl border border-blue-100 text-left max-w-4xl mx-auto shadow-sm">
                        <h4 className="font-bold text-slate-900 mb-4 text-lg tracking-tight">Who Benefits Most from This Capability</h4>
                        <ul className="space-y-3 mb-6">
                            {[
                                "Mid-market & enterprise B2B organizations with multi-touch buyer journeys",
                                "Teams struggling to align marketing, sales, and revenue ops",
                                "Leaders seeking one intelligence layer across demand → deal → revenue"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-base text-slate-700 leading-relaxed">
                                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm flex items-start gap-3">
                            <span className="font-bold text-blue-800 text-sm whitespace-nowrap mt-0.5">Typical ICP Challenge:</span>
                            <span className="text-slate-600 text-sm italic">“We have data everywhere, but no unified view of what actually drives revenue.”</span>
                        </div>
                    </div>
                </div>

                {/* 2. KPI Performance Grid */}
                <div className="space-y-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-slate-900">Offering Performance (KPIs)</h3>
                        <p className="text-slate-500 mt-2">Measurable revenue outcomes turning AI insights into impact</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {kpis.map((stat, i) => (
                            <div key={i} className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                        {stat.value}
                                    </span>
                                    <span className="text-lg font-semibold text-slate-700">
                                        {stat.suffix}
                                    </span>
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{stat.label}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* ICP Subsection: KPIs */}
                    <div className="bg-slate-50/80 rounded-2xl p-8 border border-slate-200 shadow-sm">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-slate-900 mb-4 text-lg tracking-tight">Revenue Teams Measured on Outcomes — Not Activity</h4>
                                <ul className="space-y-3">
                                    {[
                                        "Are measured on ARR growth, pipeline velocity, and CAC efficiency",
                                        "Need board-level metrics, not vanity dashboards",
                                        "Require AI to directly impact conversion, sales cycle length, and forecast confidence"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-4 text-lg tracking-tight">Ideal For:</h4>
                                <ul className="space-y-3">
                                    {[
                                        "CROs preparing quarterly and annual forecasts",
                                        "RevOps teams responsible for predictability",
                                        "Growth leaders optimizing ROI across the funnel"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Services Portfolio Grid */}
                <div className="space-y-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-slate-900">Services Portfolio</h3>
                        <p className="text-slate-500 mt-2">Comprehensive AI-driven growth solutions</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {portfolio.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <Card key={i} className="border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                                    <CardContent className="p-6 h-full flex flex-col">
                                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                                            <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                                            {item.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {/* ICP Subsection: Portfolio */}
                    <div className="bg-indigo-50/50 rounded-2xl p-8 border border-indigo-100 shadow-sm">
                        <h4 className="font-bold text-indigo-900 mb-4 text-lg tracking-tight">Who This Portfolio Is Designed For</h4>
                        <div className="grid md:grid-cols-2 gap-8">
                            <ul className="space-y-3">
                                {[
                                    "Have multiple GTM motions (inbound, outbound, ABM, paid)",
                                    "Want AI-orchestrated execution, not point tools",
                                    "Are scaling fast and cannot rely on manual processes"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-indigo-800 leading-relaxed font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="bg-white p-5 rounded-xl border border-indigo-100 flex items-center shadow-sm">
                                <div>
                                    <h5 className="font-bold text-indigo-900 text-sm mb-1 uppercase tracking-wide">Common ICP Signal</h5>
                                    <p className="text-indigo-700 text-sm italic">Rapid growth has outpaced operational maturity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Deep Dive Vertical Tabs */}
                <div className="space-y-10">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-slate-900">Detailed Capabilities</h3>
                        <p className="text-slate-500 mt-2">Explore specific challenges and AI-driven solutions</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Tab List */}
                        <div className="lg:w-1/4 space-y-2">
                            {verticalTabs.map((tab, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveTab(i)}
                                    className={`w-full text-left px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-between group ${activeTab === i
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                                        : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                                        }`}
                                >
                                    {tab.title}
                                    <ArrowRight className={`w-5 h-5 transition-transform ${activeTab === i ? 'translate-x-1' : 'opacity-0 group-hover:opacity-50'}`} />
                                </button>
                            ))}
                        </div>

                        {/* Tab Content Panel */}
                        <div className="lg:w-3/4">
                            <div className="bg-white rounded-3xl p-6 text-slate-900 shadow-xl border border-slate-200 overflow-hidden relative">
                                {/* Glass Effect - Removed for clean white */}
                                {/* <div className="absolute inset-0 bg-white/5 backdrop-blur-sm pointer-events-none" /> */}

                                <div className="relative z-10 grid md:grid-cols-2 gap-8">
                                    {/* Left Column: Challenges */}
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="flex items-center gap-2 text-red-600 font-bold mb-3 uppercase tracking-wider text-sm">
                                                <XCircle className="w-5 h-5" /> Challenges & Pain Points
                                            </h4>

                                            <div className="space-y-4">
                                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                                                    <h5 className="font-semibold text-slate-900 mb-2">Business Situations</h5>
                                                    <ul className="space-y-2">
                                                        {verticalTabs[activeTab].challenges.map((c, idx) => (
                                                            <li key={idx} className="text-slate-600 text-sm flex items-start gap-2">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5" />
                                                                {c}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                                                    <h5 className="font-semibold text-slate-900 mb-2">Specific Pain Points</h5>
                                                    <ul className="space-y-2">
                                                        {verticalTabs[activeTab].painPoints.map((p, idx) => (
                                                            <li key={idx} className="text-slate-600 text-sm flex items-start gap-2">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5" />
                                                                {p}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column: Solutions */}
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="flex items-center gap-2 text-emerald-600 font-bold mb-3 uppercase tracking-wider text-sm">
                                                <CheckCircle2 className="w-5 h-5" /> Solutions & Benefits
                                            </h4>

                                            <div className="space-y-4">
                                                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                                                    <h5 className="font-semibold text-emerald-900 mb-2">Solutions Provided</h5>
                                                    <ul className="space-y-2">
                                                        {verticalTabs[activeTab].solutions.map((s, idx) => (
                                                            <li key={idx} className="text-slate-700 text-sm flex items-start gap-2">
                                                                <Zap className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                                                                {s}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                                                    <h5 className="font-semibold text-emerald-900 mb-2">Key Benefits</h5>
                                                    <ul className="space-y-2">
                                                        {verticalTabs[activeTab].benefits.map((b, idx) => (
                                                            <li key={idx} className="text-slate-700 text-sm flex items-start gap-2">
                                                                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                                                                {b}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
