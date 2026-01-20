import React from 'react';
import { Link } from 'react-router-dom';
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
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section - Compact */}
            <div className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-white border-b border-slate-100">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 pointer-events-none opacity-50"></div>

                <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-slate-900 leading-[1.1]">
                        AI Strategy, Growth, <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                            Sales & Revenue Solutions
                        </span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                        Our solutions are designed as modular, composable AI systems that together
                        form a complete revenue operating architecture.
                    </p>
                </div>
            </div>

            {/* Solutions Grid - Compact & Clean */}
            <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col gap-8">
                    {solutions.map((solution, index) => {
                        const Icon = solution.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <div key={index} className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-lg">
                                    <div className="flex flex-col lg:flex-row gap-8 items-start">

                                        {/* Header & Icon */}
                                        <div className="lg:w-1/3 space-y-4">
                                            <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 group-hover:bg-blue-100 transition-colors">
                                                <Icon className="w-7 h-7 text-blue-600" />
                                            </div>
                                            <div>
                                                <div className="text-blue-600 font-bold text-xs mb-1 uppercase tracking-wider">Solution 0{index + 1}</div>
                                                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                                                    {solution.title}
                                                </h2>
                                                <p className="text-slate-600 text-base font-medium leading-relaxed">
                                                    {solution.description}
                                                </p>
                                            </div>

                                            {solution.details.outcomes && (
                                                <div className="p-5 rounded-xl bg-blue-50 border border-blue-100 mt-4">
                                                    <h4 className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                                                        <Zap className="w-3 h-3" /> Impact
                                                    </h4>
                                                    <div className="space-y-2">
                                                        {solution.details.outcomes.map((outcome, idx) => (
                                                            <div key={idx} className="flex items-center gap-2">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                                <span className="text-slate-700 text-sm font-semibold">{outcome}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Detailed Content Grid */}
                                        <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">

                                            {/* Offerings */}
                                            {solution.details.offerings && (
                                                <div className="space-y-3">
                                                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                                                        <Shield className="w-4 h-4 text-purple-600" />
                                                        Offerings
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        {solution.details.offerings.map((item, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm font-medium">
                                                                <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 mt-0.5 flex-shrink-0" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Situations */}
                                            {solution.details.situations && (
                                                <div className="space-y-3">
                                                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                                                        <AlertCircle className="w-4 h-4 text-amber-500" />
                                                        Situations
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        {solution.details.situations.map((item, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm font-medium">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Pain Points */}
                                            {solution.details.painPoints && (
                                                <div className="space-y-3">
                                                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                                                        <AlertCircle className="w-4 h-4 text-red-500" />
                                                        Pain Points
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        {solution.details.painPoints.map((item, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm font-medium">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Challenges */}
                                            {solution.details.challenges && (
                                                <div className="space-y-3">
                                                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                                                        <Target className="w-4 h-4 text-orange-500" />
                                                        Challenges
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        {solution.details.challenges.map((item, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm font-medium">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Capabilities */}
                                            {solution.details.capabilities && (
                                                <div className="space-y-3">
                                                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                                                        <Workflow className="w-4 h-4 text-emerald-600" />
                                                        Capabilities
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        {solution.details.capabilities.map((item, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm font-medium">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
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

            {/* CTA Section - Compact */}
            <div className="py-20 relative overflow-hidden bg-white border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Ready to Architect Your <br />
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            AI Revenue Engine?
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto font-medium">
                        Transform your growth trajectory with our modular AI solutions.
                        Start building your future today.
                    </p>
                    <Link to="/book-demo" className="inline-block">
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 flex items-center gap-3 mx-auto group">
                            Design Your AI Revenue Architecture
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
