import React from 'react';
import {
    Check,
    ArrowRight,
    Brain,
    TrendingUp,
    Zap,
    Target,
    BarChart3,
    ShieldCheck,
    Users,
    LineChart,
    PieChart,
    Workflow,
    Lightbulb
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export default function Offerings() {
    const offerings = [
        {
            title: "AI Demand Generation Engine",
            subtitle: "Build a Predictable Pipeline with AI",
            description: "Create an always-on demand engine using AI-powered discovery, intent modeling, and multi-channel activation.",
            icon: <Target className="h-8 w-8 text-blue-600" />,
            included: [
                "AI ICP discovery & micro-segmentation",
                "Buyer intent modeling",
                "AI campaign orchestration",
                "Offer personalization",
                "Multi-channel activation (email, LinkedIn, ads, chatbots)"
            ],
            outcomes: [
                "60%–150% increase in MQLs",
                "30%–50% reduction in CPL",
                "40% improvement in lead-to-MQL conversion",
                "50% increase in pipeline contribution"
            ]
        },
        {
            title: "AI Growth Hacking Engine",
            subtitle: "Convert Leads into Revenue at Scale",
            description: "Automate engagement, nurturing, and conversion using predictive AI models.",
            icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
            included: [
                "AI personalization engine",
                "Predictive engagement scoring",
                "Automated nurture workflows",
                "Dynamic content optimization",
                "CRM and marketing stack integration"
            ],
            outcomes: [
                "35%–70% increase in lead-to-opportunity conversion",
                "2×–4× higher engagement rates",
                "45% faster funnel velocity",
                "25%–40% reduction in CAC"
            ]
        },
        {
            title: "AI Lean Sales & Sales Transformation",
            subtitle: "Close Deals Faster with AI Intelligence",
            description: "Transform sales execution with predictive deal intelligence and intelligent automation.",
            icon: <Zap className="h-8 w-8 text-yellow-500" />,
            included: [
                "Predictive deal scoring",
                "Objection intelligence",
                "Conversation analytics",
                "Automated follow-ups",
                "Intelligent pipeline prioritization"
            ],
            outcomes: [
                "20%–35% higher win rates",
                "30%–50% shorter sales cycles",
                "20% increase in deal size",
                "40% higher rep productivity"
            ]
        },
        {
            title: "AI Revenue Operations (RevOps)",
            subtitle: "Build a Predictable Revenue Engine",
            description: "Unify marketing, sales, and customer success into one intelligent revenue system.",
            icon: <Workflow className="h-8 w-8 text-cyan-600" />,
            included: [
                "AI revenue forecasting",
                "Funnel health diagnostics",
                "Attribution modeling",
                "Churn prediction",
                "Expansion and upsell intelligence"
            ],
            outcomes: [
                "90%+ forecast accuracy",
                "40% reduction in revenue leakage",
                "35% increase in expansion revenue",
                "25%–45% lower churn"
            ]
        },
        {
            title: "ARR Acceleration Program",
            subtitle: "Scale Subscription Revenue with AI",
            description: "A focused program designed for SaaS and subscription businesses to drive retention, expansion, and compounding ARR growth.",
            icon: <BarChart3 className="h-8 w-8 text-green-600" />,
            included: [
                "AI churn prevention",
                "Customer health scoring",
                "Renewal automation",
                "Expansion prediction",
                "CLV optimization"
            ],
            outcomes: [
                "40%–120% ARR growth",
                "120%+ net revenue retention",
                "30%–50% churn reduction",
                "35% increase in expansion revenue"
            ]
        },
        {
            title: "AI Analytics-Driven Sales Transformation",
            subtitle: "Turn Data into Revenue Intelligence",
            description: "Gain 360° visibility into your revenue engine with real-time AI insights and recommendations.",
            icon: <PieChart className="h-8 w-8 text-indigo-600" />,
            included: [
                "Funnel diagnostics",
                "Deal risk prediction",
                "Rep performance analytics",
                "Conversion optimization",
                "Revenue intelligence dashboards"
            ],
            outcomes: [
                "30% improvement in funnel conversion",
                "40% reduction in pipeline slippage",
                "50% faster rep ramp time",
                "35% increase in revenue per rep"
            ]
        },
        {
            title: "Predictive Sales & Objection Intelligence",
            subtitle: "Win More Deals with AI Insights",
            description: "Predict buyer behavior and empower sales teams with real-time objection intelligence.",
            icon: <Brain className="h-8 w-8 text-pink-600" />,
            included: [
                "Buyer intent modeling",
                "Objection pattern analysis",
                "Conversation intelligence",
                "Win/loss analytics",
                "Deal probability scoring"
            ],
            outcomes: [
                "30% higher objection win rate",
                "85%+ deal probability accuracy",
                "40% increase in rep effectiveness",
                "25% more recovered lost deals"
            ]
        },
        {
            title: "AI Sales Process Optimization",
            subtitle: "Remove Bottlenecks. Increase Velocity.",
            description: "Eliminate friction across the entire sales lifecycle with intelligent workflow automation.",
            icon: <ShieldCheck className="h-8 w-8 text-teal-600" />,
            included: [
                "Workflow automation",
                "SLA enforcement",
                "Lead routing intelligence",
                "AI task orchestration",
                "Process optimization"
            ],
            outcomes: [
                "80% faster lead response",
                "50% reduction in admin work",
                "60% fewer process bottlenecks",
                "45% lower lead drop-off"
            ]
        },
        {
            title: "Data-Backed Revenue Recommendations",
            subtitle: "Executive-Grade Revenue Intelligence",
            description: "Continuously optimize your revenue engine with AI-powered recommendations.",
            icon: <Lightbulb className="h-8 w-8 text-amber-500" />,
            included: [
                "Revenue risk alerts",
                "Opportunity scoring",
                "Growth recommendations",
                "Performance benchmarks",
                "Strategic simulations"
            ],
            outcomes: [
                "30%–80% revenue growth acceleration",
                "50% faster GTM execution",
                "90%+ forecast confidence",
                "40% reduction in revenue leakage"
            ]
        }
    ];

    return (
        <div className="pt-24 lg:pt-32 pb-16 min-h-screen bg-slate-50 text-slate-900">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                        AI-Powered Revenue Acceleration <br />
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">for Modern Enterprises</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-slate-600 mb-8 font-medium leading-relaxed max-w-3xl mx-auto">
                        TrustFlow AI delivers a full-stack AI revenue platform designed to help enterprises build predictable pipeline, accelerate deal velocity, and scale ARR.
                    </p>
                    <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                        Each offering is engineered to solve a critical revenue growth challenge — from demand creation and sales execution to revenue operations and expansion.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 h-auto shadow-lg shadow-blue-500/20">
                            Book a Demo
                        </Button>
                        <Button variant="outline" className="text-lg px-8 py-6 h-auto border-slate-300 text-slate-600 hover:bg-slate-100 hover:text-slate-900">
                            Talk to an Expert
                        </Button>
                    </div>
                </div>
            </div>

            {/* Platform Overview */}
            <div className="bg-white py-16 mb-16 border-y border-slate-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our AI Revenue Platform</h2>
                            <p className="text-lg text-slate-600 mb-6 font-medium">
                                TrustFlow AI unifies marketing, sales, and customer success into a single intelligent revenue engine.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Predictable demand generation",
                                    "Faster deal cycles",
                                    "Higher win rates",
                                    "Lower CAC",
                                    "Stronger retention & expansion",
                                    "Real-time revenue visibility"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="bg-green-100 p-1 rounded-full">
                                            <Check className="w-4 h-4 text-green-600" />
                                        </div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl blur-xl opacity-70"></div>
                            <div className="relative bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                                        <Brain className="w-8 h-8 text-blue-600" />
                                        <div>
                                            <h4 className="font-bold text-slate-900">AI Intelligence Layer</h4>
                                            <p className="text-sm text-slate-500">Predictive modeling & insights</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                                        <Workflow className="w-8 h-8 text-purple-600" />
                                        <div>
                                            <h4 className="font-bold text-slate-900">Unified Workflow</h4>
                                            <p className="text-sm text-slate-500">Marketing, Sales, & Success</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                                        <LineChart className="w-8 h-8 text-green-600" />
                                        <div>
                                            <h4 className="font-bold text-slate-900">Revenue Growth</h4>
                                            <p className="text-sm text-slate-500">Predictable scaling</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Offerings */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Offerings</h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                        Comprehensive solutions powered by AI to transform every stage of your revenue cycle.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {offerings.map((offering, index) => (
                        <Card key={index} className="flex flex-col h-full hover:shadow-xl hover:shadow-blue-900/5 transition-all border-slate-200 bg-white hover:border-blue-300 group">
                            <CardHeader>
                                <div className="mb-4 p-3 bg-slate-50 w-fit rounded-lg border border-slate-100 group-hover:bg-blue-50 transition-colors">
                                    {offering.icon}
                                </div>
                                <CardTitle className="text-xl font-bold text-slate-900 mb-2">{offering.title}</CardTitle>
                                <CardDescription className="text-blue-600 font-semibold text-base mb-2">{offering.subtitle}</CardDescription>
                                <p className="text-slate-600 text-sm mt-2 font-medium">
                                    {offering.description}
                                </p>
                            </CardHeader>
                            <CardContent className="flex-grow space-y-6">
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider">What's Included</h4>
                                    <ul className="space-y-2">
                                        {offering.included.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                                                <span className="text-sm text-slate-600">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider">Business Outcomes</h4>
                                    <div className="grid grid-cols-1 gap-2">
                                        {offering.outcomes.map((outcome, idx) => (
                                            <div key={idx} className="bg-slate-50 px-3 py-2 rounded border border-slate-100 text-sm text-slate-700 font-semibold border-l-4 border-l-blue-500">
                                                {outcome}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Who Our Offerings Are Built For */}
            <div className="bg-slate-900 py-20 mb-16 text-white border-y border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">Who Our Offerings Are Built For</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                        {[
                            "SaaS & Subscription Businesses",
                            "Enterprise & Mid-Market B2B",
                            "High-Growth Companies",
                            "Digital-First Organizations",
                            "Revenue-Led Enterprises"
                        ].map((item, index) => (
                            <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-colors group">
                                <Users className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:text-white" />
                                <h3 className="font-semibold text-slate-200">{item}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* The TrustFlow AI Advantage */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white shadow-xl">
                    <h2 className="text-3xl font-bold mb-8 text-center">The TrustFlow AI Advantage</h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            "Unified AI Revenue Platform",
                            "Enterprise-grade security & scalability",
                            "Plug-and-play with your existing stack",
                            "Rapid deployment",
                            "Proven revenue impact"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="bg-white/20 p-1 rounded-full">
                                    <Check className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-lg font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="text-center max-w-3xl mx-auto px-4 pb-20">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Get Started</h2>
                <p className="text-xl text-slate-600 mb-8 font-medium">
                    Ready to scale revenue with AI? Build Your Predictable Revenue Engine with TrustFlow AI today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 h-auto text-lg shadow-lg">
                        Book a Demo
                    </Button>
                    <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-6 h-auto text-lg">
                        Talk to a Revenue Expert
                    </Button>
                </div>
                <div className="mt-8">
                    <a href="#" className="text-blue-600 font-bold hover:text-blue-800 hover:underline">Start Your AI Revenue Journey →</a>
                </div>
            </div>
        </div>
    );
}
