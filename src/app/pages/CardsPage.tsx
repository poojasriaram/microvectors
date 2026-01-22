import React from 'react';
import {
    Rocket,
    TrendingUp,
    BarChart3,
    Brain,
    ListChecks,
    LineChart,
    ArrowRight,
    Target,
    Users,
    PieChart,
    Activity,
    ShieldCheck,
    Zap,
    CheckCircle2
} from 'lucide-react';

export default function CardsPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-16">

                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">Component Showcase</h1>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">High-impact card designs for various use cases across the TrustFlow AI platform.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* 1. Velocity Revenue Card */}
                    <div className="group relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-blue-900/20 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative p-8 h-full flex flex-col">
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
                                    <Rocket className="w-8 h-8 text-blue-400" />
                                </div>
                                <div className="px-4 py-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full backdrop-blur-md">
                                    <span className="text-emerald-400 text-sm font-bold flex items-center gap-1">
                                        <TrendingUp className="w-3 h-3" /> +32% Win Rate
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <h3 className="text-3xl font-bold text-white leading-tight">
                                    Accelerate <span className="text-blue-400">Sales Velocity</span>
                                </h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Automate low-value tasks and focus on closing deals. Crush your quotas with AI-driven precision.
                                </p>
                            </div>

                            <div className="mt-auto">
                                <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-900/50 flex items-center justify-center gap-2 group-hover:gap-3">
                                    Start Acceleration <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 2. Pipeline Growth Card */}
                    <div className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:border-blue-200 hover:-translate-y-1">
                        <div className="h-32 bg-blue-50 relative overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
                            <Target className="w-16 h-16 text-blue-200 absolute -bottom-4 -right-4 rotate-12" />
                            <div className="bg-white p-4 rounded-full shadow-sm z-10">
                                <Users className="w-8 h-8 text-blue-600" />
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Demand Generation</h3>
                                <p className="text-slate-500 text-sm">Scale your pipeline effortlessly</p>
                            </div>

                            <div className="space-y-3 mb-8">
                                {['Qualified Leads on Autopilot', 'Smart Audience Segmentation', 'Multi-channel Sequencing'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                        <span className="text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center justify-center gap-2 mb-6 p-2 bg-slate-50 rounded-lg border border-slate-100">
                                <ShieldCheck className="w-4 h-4 text-slate-400" />
                                <span className="text-xs font-semibold text-slate-500">iso27001 Certified & GDPR Ready</span>
                            </div>

                            <button className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2">
                                Generate Pipeline
                            </button>
                        </div>
                    </div>

                    {/* 3. Revenue Command Card */}
                    <div className="group bg-slate-50 rounded-3xl overflow-hidden shadow-lg border border-slate-200 transition-all duration-300 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1">
                        <div className="p-6 border-b border-slate-200 bg-white flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-slate-100 rounded-lg">
                                    <Activity className="w-6 h-6 text-slate-600" />
                                </div>
                                <h3 className="font-bold text-slate-900">Revenue Ops</h3>
                            </div>
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        </div>

                        <div className="p-6 grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-xl border border-slate-200">
                                <p className="text-xs text-slate-500 font-semibold uppercase mb-1">Pipeline</p>
                                <p className="text-lg font-bold text-slate-900">$4.2M</p>
                                <span className="text-xs text-emerald-600 font-medium">+12% vs last mo</span>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-slate-200">
                                <p className="text-xs text-slate-500 font-semibold uppercase mb-1">Forecast</p>
                                <p className="text-lg font-bold text-slate-900">89%</p>
                                <span className="text-xs text-emerald-600 font-medium">Confidence</span>
                            </div>
                            <div className="col-span-2 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                                <div className="flex justify-between items-end mb-2">
                                    <div>
                                        <p className="text-xs text-blue-600 font-semibold uppercase">Conversion Rate</p>
                                        <p className="text-2xl font-bold text-blue-900">18.4%</p>
                                    </div>
                                    <BarChart3 className="w-6 h-6 text-blue-300" />
                                </div>
                                <div className="w-full h-1.5 bg-blue-100 rounded-full overflow-hidden">
                                    <div className="h-full w-[65%] bg-blue-600 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 pt-2">
                            <button className="w-full py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition-all">
                                View Full Dashboard
                            </button>
                        </div>
                    </div>

                    {/* 4. Insight Engine Card */}
                    <div className="group relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-indigo-900/20 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-white"></div>
                        {/* Gradient Border/Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative p-8 h-full flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-0.5 mb-6 shadow-lg shadow-violet-500/30">
                                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                                    <Brain className="w-8 h-8 text-transparent bg-clip-text bg-gradient-to-br from-violet-600 to-fuchsia-600 py-0.5" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Growth Intelligence</h3>
                            <p className="text-slate-500 mb-8 text-sm max-w-xs">AI-powered insights connecting hidden data points.</p>

                            <div className="w-full relative h-32 mb-8">
                                {/* Abstract Data Viz */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative w-full max-w-[200px] h-full">
                                        {/* Nodes */}
                                        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-violet-500 rounded-full -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
                                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-fuchsia-400 rounded-full animate-pulse"></div>
                                        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-75"></div>
                                        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150"></div>
                                        {/* Lines */}
                                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                            <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#ddd" strokeWidth="1" />
                                            <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#ddd" strokeWidth="1" />
                                            <line x1="50%" y1="50%" x2="66%" y2="33%" stroke="#ddd" strokeWidth="1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <button className="mt-auto px-8 py-3 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:shadow-violet-900/10">
                                Unlock Insights
                            </button>
                        </div>
                    </div>

                    {/* 5. Performance Playbook Card */}
                    <div className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 transition-all duration-300 hover:border-emerald-300 hover:-translate-y-1">
                        <div className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                                    <ListChecks className="w-6 h-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">Sales Optimization</h3>
                                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Playbook Active</p>
                                </div>
                            </div>

                            <div className="space-y-6 relative pl-3 border-l-2 border-slate-100 ml-3">
                                {/* Step 1 */}
                                <div className="relative pl-6">
                                    <div className="absolute -left-[21px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-sm ring-1 ring-emerald-100"></div>
                                    <h4 className="text-sm font-bold text-slate-900">Lead Scoring</h4>
                                    <p className="text-xs text-slate-500 mt-1">AI prioritization completed</p>
                                </div>
                                {/* Step 2 */}
                                <div className="relative pl-6">
                                    <div className="absolute -left-[21px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-sm ring-1 ring-emerald-100"></div>
                                    <h4 className="text-sm font-bold text-slate-900">Outreach Sequence</h4>
                                    <p className="text-xs text-slate-500 mt-1">Email & LinkedIn Queued</p>
                                </div>
                                {/* Step 3 */}
                                <div className="relative pl-6 opacity-60">
                                    <div className="absolute -left-[21px] top-1 w-4 h-4 rounded-full bg-slate-200 border-2 border-white"></div>
                                    <h4 className="text-sm font-bold text-slate-900">Meeting Prep</h4>
                                    <p className="text-xs text-slate-500 mt-1">Pending Confirmation</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20">
                                    Execute Playbook
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 6. Predictive Growth Card */}
                    <div className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:border-indigo-200 hover:-translate-y-1">
                        <div className="bg-slate-900 p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <PieChart className="w-24 h-24 text-white" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-white font-bold text-xl mb-1">Revenue Forecast</h3>
                                <div className="flex items-center gap-2">
                                    <span className="px-2 py-0.5 rounded-md bg-white/20 text-white text-xs font-medium backdrop-blur-sm border border-white/10">Q3 Projection</span>
                                    <span className="text-emerald-400 text-xs font-bold flex items-center gap-0.5">
                                        <Zap className="w-3 h-3" /> 95% Accuracy
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6">
                            {/* Chart Placeholder */}
                            <div className="h-40 w-full mb-6 flex items-end gap-2 px-2 border-b border-slate-100 pb-2">
                                {[35, 45, 30, 60, 75, 50, 85].map((h, i) => (
                                    <div key={i} className="flex-1 bg-indigo-50 hover:bg-indigo-100 rounded-t-sm transition-all group-hover:bg-indigo-200 relative group/bar">
                                        <div style={{ height: `${h}%` }} className="absolute bottom-0 w-full bg-indigo-500 rounded-t-sm transition-all duration-1000 group-hover:bg-indigo-600"></div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <p className="text-slate-500 text-xs font-semibold uppercase">Projected</p>
                                    <p className="text-2xl font-bold text-slate-900">$1.8M</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-slate-500 text-xs font-semibold uppercase">Growth</p>
                                    <p className="text-2xl font-bold text-emerald-600">+24%</p>
                                </div>
                            </div>

                            <button className="w-full py-3 bg-white border-2 border-slate-100 hover:border-slate-900 text-slate-700 hover:text-slate-900 font-bold rounded-xl transition-all">
                                View Strategic Report
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
