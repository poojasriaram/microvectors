import React from 'react';
import {
    Target,
    BarChart3,
    Zap,
    Users,
    MessageSquare,
    Workflow,
    Database,
    LineChart,
    ArrowRight,
    CheckCircle2,
    AlertCircle,
    Brain,
    Rocket,
    Shield
} from 'lucide-react';

export default function Solutions() {
    const solutions = [
        {
            title: "AI Business Growth Strategy",
            description: "Align your entire organization around a unified, AI-driven growth engine.",
            icon: Target,
            details: {
                situations: ["Growth is inconsistent or founder-dependent", "Strategy does not translate into execution"],
                painPoints: ["No single growth narrative", "Fragmented data and KPIs"],
                challenges: ["Aligning AI with revenue outcomes", "Prioritizing markets and investments"],
                offerings: ["AI-led growth diagnostics", "Market & ICP intelligence", "Revenue-aligned GTM roadmap", "Governance & KPI frameworks"],
                outcomes: ["Predictable growth execution", "Lower CAC, higher LTV"],
                capabilities: ["Growth modeling", "Scenario simulation", "Executive dashboards"]
            }
        },
        {
            title: "AI Market Strategy & Demand Intelligence",
            description: "Decode market signals and buyer intent with precision.",
            icon: Brain,
            details: {
                situations: ["Weak inbound demand", "Poor visibility into real demand"],
                offerings: ["AI demand discovery", "Competitive demand tracing", "Behavioral micro-segmentation", "Offer & pricing optimization"],
                outcomes: ["+247% lead velocity", "Faster product-market fit"]
            }
        },
        {
            title: "AI-Driven Growth Hacking Engine",
            description: "Rapidly experiment and scale what works.",
            icon: Rocket,
            details: {
                offerings: ["AI hypothesis generation", "Automated A/B/n experiments", "Funnel elasticity analysis", "Viral & referral intelligence"],
                outcomes: ["Faster breakout growth", "Scalable growth playbooks"]
            }
        },
        {
            title: "AI-Driven Performance Marketing",
            description: "Maximize ROAS with predictive allocation and optimization.",
            icon: BarChart3,
            details: {
                offerings: ["Predictive CAC & ROI modeling", "Cross-channel attribution", "Creative & spend optimization"],
                outcomes: ["Lower CAC", "Higher ROAS"]
            }
        },
        {
            title: "AI Auto Sales Pilot (Autonomous Sales Agents)",
            description: "Scale your sales reach with intelligent 24/7 agents.",
            icon: Users,
            details: {
                offerings: ["24/7 AI sales agents", "Lead qualification & routing", "Meeting scheduling & escalation"],
                outcomes: ["Near-zero response time", "Higher inbound conversion"]
            }
        },
        {
            title: "AI Sales Process Optimization",
            description: "Streamline workflows and remove friction from the sales cycle.",
            icon: Workflow,
            details: {
                offerings: ["AI lead scoring", "Funnel velocity analytics", "Objection intelligence", "Sales workflow automation"],
                outcomes: ["24X conversion improvement", "~50% cycle-time reduction"]
            }
        },
        {
            title: "AI Revenue Operations (AI RevOps)",
            description: "Unify data and forecasts for total revenue command.",
            icon: Database,
            details: {
                offerings: ["Unified RevOps data layer", "Predictive revenue forecasting", "Revenue leakage detection", "Executive command center"],
                outcomes: ["CFO-grade predictability", "Reduced revenue leakage"]
            }
        },
        {
            title: "AI Revenue Acceleration & Expansion",
            description: "Maximize customer value and lifetime revenue.",
            icon: LineChart,
            details: {
                offerings: ["Upsell & cross-sell intelligence", "Churn prediction", "Customer health scoring"],
                outcomes: ["Faster ARR realization", "Higher LTV"]
            }
        }
    ];

    return (
        <div className="bg-[#020617] text-white min-h-screen">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 to-purple-950/20 pointer-events-none"></div>
                <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
                        AI Strategy, Growth, <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Sales & Revenue Solutions
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Our solutions are designed as modular, composable AI systems that together
                        form a complete revenue operating architecture.
                    </p>
                </div>
            </div>

            {/* Solutions Grid */}
            <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                <div className="flex flex-col gap-24">
                    {solutions.map((solution, index) => {
                        const Icon = solution.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <div key={index} className="group relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative bg-[#0F172A]/50 border border-slate-800 backdrop-blur-sm rounded-3xl p-8 lg:p-12 hover:border-blue-500/30 transition-all duration-300">
                                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                                        {/* Header & Icon */}
                                        <div className="lg:w-1/3 space-y-6">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10">
                                                <Icon className="w-8 h-8 text-blue-400" />
                                            </div>
                                            <div>
                                                <div className="text-blue-500 font-mono text-sm mb-2">SOLUTION 0{index + 1}</div>
                                                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-4">
                                                    {solution.title}
                                                </h2>
                                                <p className="text-slate-400 text-lg">
                                                    {solution.description}
                                                </p>
                                            </div>

                                            {solution.details.outcomes && (
                                                <div className="p-6 rounded-xl bg-blue-950/20 border border-blue-500/20 mt-8">
                                                    <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                                        <Zap className="w-4 h-4" /> Impact
                                                    </h4>
                                                    <div className="space-y-3">
                                                        {solution.details.outcomes.map((outcome, idx) => (
                                                            <div key={idx} className="flex items-center gap-3">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
                                                                <span className="text-slate-200 font-medium">{outcome}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Detailed Content Grid */}
                                        <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">

                                            {/* Offerings - Present in all */}
                                            {solution.details.offerings && (
                                                <div className="space-y-4">
                                                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                                                        <Shield className="w-5 h-5 text-purple-400" />
                                                        Offerings
                                                    </h3>
                                                    <ul className="space-y-3">
                                                        {solution.details.offerings.map((item, idx) => (
                                                            <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm">
                                                                <CheckCircle2 className="w-4 h-4 text-purple-500/50 mt-0.5 flex-shrink-0" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Situations */}
                                            {solution.details.situations && (
                                                <div className="space-y-4">
                                                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                                                        <AlertCircle className="w-5 h-5 text-amber-400" />
                                                        Situations
                                                    </h3>
                                                    <ul className="space-y-3">
                                                        {solution.details.situations.map((item, idx) => (
                                                            <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm">
                                                                <div className="w-1 h-1 rounded-full bg-amber-500/50 mt-2 flex-shrink-0" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Pain Points */}
                                            {solution.details.painPoints && (
                                                <div className="space-y-4">
                                                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                                                        <AlertCircle className="w-5 h-5 text-red-400" />
                                                        Pain Points
                                                    </h3>
                                                    <ul className="space-y-3">
                                                        {solution.details.painPoints.map((item, idx) => (
                                                            <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm">
                                                                <div className="w-1 h-1 rounded-full bg-red-500/50 mt-2 flex-shrink-0" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Challenges */}
                                            {solution.details.challenges && (
                                                <div className="space-y-4">
                                                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                                                        <Target className="w-5 h-5 text-orange-400" />
                                                        Challenges
                                                    </h3>
                                                    <ul className="space-y-3">
                                                        {solution.details.challenges.map((item, idx) => (
                                                            <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm">
                                                                <div className="w-1 h-1 rounded-full bg-orange-500/50 mt-2 flex-shrink-0" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Capabilities */}
                                            {solution.details.capabilities && (
                                                <div className="space-y-4">
                                                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                                                        <Workflow className="w-5 h-5 text-emerald-400" />
                                                        Capabilities
                                                    </h3>
                                                    <ul className="space-y-3">
                                                        {solution.details.capabilities.map((item, idx) => (
                                                            <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm">
                                                                <div className="w-1 h-1 rounded-full bg-emerald-500/50 mt-2 flex-shrink-0" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-blue-950/20 to-[#020617] pointer-events-none" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                        Ready to Architect Your <br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            AI Revenue Engine?
                        </span>
                    </h2>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                        Transform your growth trajectory with our modular AI solutions.
                        Start building your future today.
                    </p>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-lg font-semibold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] transition-all duration-300 flex items-center gap-3 mx-auto group">
                        Design Your AI Revenue Architecture
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
}
