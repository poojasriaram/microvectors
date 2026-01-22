import React from 'react';
import { Link } from 'react-router-dom';
import {
    Cloud,
    Landmark,
    Factory,
    Briefcase,
    Rocket,
    ArrowRight,
    Target,
    Layers,
    CheckCircle2,
    ShieldCheck,
    Coins,
    GraduationCap,
    Building2,
    Zap,
    AlertTriangle,
    Lightbulb,
    TrendingUp
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';

export default function Industries() {
    const industries = [
        {
            title: "SaaS & Digital Platforms",
            icon: <Cloud className="w-6 h-6" />,
            color: "blue",
            offeringDescription: "An end-to-end AI revenue engine for SaaS and digital platforms that accelerates ARR growth, optimizes acquisition costs, improves funnel conversion, and maximizes expansion revenue.",
            keyVerticals: ["B2B SaaS", "B2C SaaS", "Marketplaces", "Subscription", "API Platforms"],
            details: {
                situations: ["ARR growth is slowing", "CAC is rising across channels", "Pipeline is unpredictable", "Expansion is reactive"],
                challenges: ["Weak demand quality", "Poor funnel visibility", "Low NRR", "Fragmented RevOps"],
                solution: "AI discovers high-intent buyers, optimizes acquisition, automates sales qualification, and predicts expansion opportunities.",
                example: "A B2B SaaS firm scaled from $4M to $16M ARR in 14 months using TrustFlow’s AI revenue engine.",
                benefits: ["Predictable ARR engine", "Lower CAC", "Intelligent expansion"],
                outcomes: ["3× ARR growth", "45% CAC reduction", "NRR above 130%"]
            }
        },
        {
            title: "BFSI & FinTech",
            icon: <Landmark className="w-6 h-6" />,
            color: "purple",
            offeringDescription: "A compliance-aware AI growth stack for financial services that powers high-intent demand, automated qualification, and lifetime value maximization.",
            keyVerticals: ["Digital banks", "Lending", "InsurTech", "WealthTech", "Payments"],
            details: {
                situations: ["Lead volume is high but quality is low", "Activation rates are weak", "Cross-sell is underperforming"],
                challenges: ["Low trust conversion", "Complex onboarding", "Weak financial personalization"],
                solution: "AI identifies high-intent financial buyers, predicts activation probability, and personalizes journeys.",
                example: "A lending platform increased funded accounts by 2.8× using AI demand intelligence.",
                benefits: ["High-quality acquisition", "Faster onboarding", "Higher wallet share"],
                outcomes: ["3× high-intent leads", "2× activation rate", "2.5× LTV growth"]
            }
        },
        {
            title: "Insurance",
            icon: <ShieldCheck className="w-6 h-6" />,
            color: "indigo",
            offeringDescription: "An AI-powered insurance growth stack that drives high-intent policy demand, automates agent selling, and maximizes renewals and cross-sell revenue.",
            keyVerticals: ["Life insurance", "Health", "General", "InsurTech"],
            details: {
                situations: ["Lead volume is high but conversions are low", "Agents are overloaded", "Renewal revenue is declining"],
                challenges: ["Poor buyer intent visibility", "Manual agent selling", "Weak renewal intelligence"],
                solution: "AI scores buyer intent, predicts policy conversion, and automates agent engagement.",
                example: "A health insurer increased policy conversion by 2.6× using AI-based intent scoring.",
                benefits: ["Faster policy closures", "Higher renewal income", "Intelligent cross-sell"],
                outcomes: ["2–3× policy conversion", "40% cost reduction", "35% renewal growth"]
            }
        },
        {
            title: "Banking & Mutual Funds",
            icon: <Coins className="w-6 h-6" />,
            color: "teal",
            offeringDescription: "A compliant AI revenue engine for banks and investment platforms that drives high-intent acquisition, faster activation, and intelligent wealth expansion.",
            keyVerticals: ["Retail banks", "Digital banks", "Mutual Funds", "Wealth Mgmt"],
            details: {
                situations: ["Accounts are opened but not activated", "Customers only hold savings", "AUM growth is slow"],
                challenges: ["Low trust conversion", "Poor personalization", "Reactive advisory"],
                solution: "AI predicts investment intent, personalizes engagement, and triggers advisor actions.",
                example: "A mutual fund platform increased SIP activation by 3.1× using AI intent modeling.",
                benefits: ["Higher activation", "Smarter advisory", "Stronger wallet share"],
                outcomes: ["2× activation rate", "2.5× AUM growth", "3× cross-sell"]
            }
        },
        {
            title: "Manufacturing & Industrial",
            icon: <Factory className="w-6 h-6" />,
            color: "amber",
            offeringDescription: "An AI-powered demand discovery and sales acceleration platform for complex industrial and OEM sales.",
            keyVerticals: ["Heavy mfg", "Industrial automation", "OEMs", "EPC & engineering"],
            details: {
                situations: ["Sales cycles take 6–18 months", "Dealer networks underperform", "Inbound demand is weak"],
                challenges: ["No buyer intent visibility", "Poor funnel intelligence", "Channel inefficiency"],
                solution: "AI maps buying committees, identifies high-intent accounts, and accelerates deal progression.",
                example: "An industrial OEM reduced sales cycles by 47% using AI deal intelligence.",
                benefits: ["Faster deal velocity", "Stronger dealer performance", "Predictable revenue"],
                outcomes: ["45% shorter cycles", "2× win rate", "3× dealer productivity"]
            }
        },
        {
            title: "Professional Services",
            icon: <Briefcase className="w-6 h-6" />,
            color: "emerald",
            offeringDescription: "An AI revenue system that turns expertise into a predictable, scalable pipeline and expansion engine.",
            keyVerticals: ["IT services", "Consulting", "Agencies", "Legal & accounting"],
            details: {
                situations: ["Deals depend on referrals", "Utilization is inconsistent", "Sales is founder-led"],
                challenges: ["No repeatable GTM motion", "Weak expansion strategy", "No demand intelligence"],
                solution: "AI identifies buying intent, automates pipeline generation, and triggers expansion plays.",
                example: "A consulting firm grew pipeline by 3.2× in 6 months using AI demand discovery.",
                benefits: ["Predictable deal flow", "Higher utilization", "Intelligent expansion"],
                outcomes: ["3× pipeline growth", "25% margin improvement", "2× deal size"]
            }
        },
        {
            title: "Startups & Scaleups",
            icon: <Rocket className="w-6 h-6" />,
            color: "pink",
            offeringDescription: "An AI growth engine that accelerates PMF discovery, builds autonomous GTM, and prepares startups for hypergrowth.",
            keyVerticals: ["SaaS startups", "Web3", "FinTech", "Marketplaces"],
            details: {
                situations: ["Growth is inconsistent", "GTM is founder-led", "Burn rate is high"],
                challenges: ["No growth playbook", "No repeatable acquisition", "Weak monetization"],
                solution: "AI discovers demand, runs experiments, and builds scalable acquisition loops.",
                example: "A SaaS startup achieved PMF in 90 days using AI growth intelligence.",
                benefits: ["Faster traction", "Capital efficiency", "Investor-ready metrics"],
                outcomes: ["Faster fundraising", "Stronger growth curves", "Scalable revenue engine"]
            }
        },
        {
            title: "Education & EdTech",
            icon: <GraduationCap className="w-6 h-6" />,
            color: "orange",
            offeringDescription: "An AI-powered enrollment, demand discovery, and performance marketing engine for education providers.",
            keyVerticals: ["Universities", "EdTech", "Coaching", "Corporate training"],
            details: {
                situations: ["High inquiries but low enrollments", "Counselors are overloaded", "Drop-offs after demos"],
                challenges: ["Poor student intent visibility", "Manual counseling", "Weak personalization"],
                solution: "AI qualifies learners, automates counseling journeys, and optimizes enrollment funnels.",
                example: "An EdTech platform increased enrollments by 2.9× using AI-driven qualification.",
                benefits: ["Higher enrollment quality", "Faster conversions", "Lower acquisition cost"],
                outcomes: ["3× enrollment growth", "50% CPL reduction", "Scalable admissions"]
            }
        },
        {
            title: "Real Estate & PropTech",
            icon: <Building2 className="w-6 h-6" />,
            color: "cyan",
            offeringDescription: "An AI-powered real estate growth stack that drives high-intent demand, automates sales qualification, and accelerates deal closures.",
            keyVerticals: ["Residential", "Commercial", "Developers", "Brokerage"],
            details: {
                situations: ["Many inquiries but few bookings", "Brokers handle too many leads", "Site visits don’t convert"],
                challenges: ["Poor buyer intent scoring", "Slow follow-ups", "No deal intelligence"],
                solution: "AI identifies high-intent buyers, automates follow-ups, and predicts deal readiness.",
                example: "A property developer doubled bookings using AI-based buyer intent discovery.",
                benefits: ["Higher site-visit conversion", "Faster deal closure", "Stronger broker"],
                outcomes: ["2× booking velocity", "40% inventory cycle reduction", "Predictable sell-through"]
            }
        }
    ];

    const getColorClass = (color: string) => {
        const colors: { [key: string]: string } = {
            blue: "text-blue-600 bg-blue-50 border-blue-100",
            purple: "text-purple-600 bg-purple-50 border-purple-100",
            indigo: "text-indigo-600 bg-indigo-50 border-indigo-100",
            teal: "text-teal-600 bg-teal-50 border-teal-100",
            amber: "text-amber-600 bg-amber-50 border-amber-100",
            emerald: "text-emerald-600 bg-emerald-50 border-emerald-100",
            pink: "text-pink-600 bg-pink-50 border-pink-100",
            orange: "text-orange-600 bg-orange-50 border-orange-100",
            cyan: "text-cyan-600 bg-cyan-50 border-cyan-100",
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="pt-24 lg:pt-32 pb-16 min-h-screen bg-slate-50 text-slate-900">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                        AI Growth Architectures <br />
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            by Industry
                        </span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
                        Tailored AI solution stacks designed to address the unique revenue challenges
                        and growth mechanics of your specific sector.
                    </p>
                </div>
            </div>

            {/* Industries Grid with Tabs */}
            <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {industries.map((industry, index) => (
                        <Card key={index} className="flex flex-col h-full hover:shadow-2xl transition-all duration-300 border-slate-200 bg-white group hover:-translate-y-1 overflow-hidden">
                            <CardHeader className="pb-4 bg-slate-50/50 border-b border-slate-100">
                                <div className="flex items-start justify-between gap-4">
                                    <div className={`p-3 rounded-xl border ${getColorClass(industry.color)} transition-transform group-hover:scale-110 duration-500`}>
                                        {industry.icon}
                                    </div>
                                </div>
                                <CardTitle className="text-2xl font-bold text-slate-900 mt-4">{industry.title}</CardTitle>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {industry.keyVerticals.map((vertical, i) => (
                                        <Badge key={i} variant="secondary" className="font-normal text-slate-600 bg-white border border-slate-200 hover:border-blue-400 transition-colors">
                                            {vertical}
                                        </Badge>
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow pt-6 space-y-6">
                                <p className="text-slate-600 text-base leading-relaxed font-medium">
                                    {industry.offeringDescription}
                                </p>

                                <Tabs defaultValue="challenges" className="w-full">
                                    <TabsList className="grid w-full grid-cols-3 mb-6 bg-slate-100/80 p-1">
                                        <TabsTrigger value="challenges" className="text-xs sm:text-sm">Challenges</TabsTrigger>
                                        <TabsTrigger value="solution" className="text-xs sm:text-sm">Solution</TabsTrigger>
                                        <TabsTrigger value="impact" className="text-xs sm:text-sm">Impact</TabsTrigger>
                                    </TabsList>

                                    {/* Tab: Challenges */}
                                    <TabsContent value="challenges" className="space-y-4 animate-in fade-in-50 duration-300">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-amber-600 font-bold text-sm uppercase tracking-wider">
                                                <AlertTriangle className="w-4 h-4" /> Pain Points
                                            </div>
                                            <ul className="space-y-2">
                                                {industry.details.challenges.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="space-y-2 mt-4 pt-4 border-t border-slate-100">
                                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Common Situations</span>
                                            {industry.details.situations.slice(0, 2).map((sit, idx) => (
                                                <p key={idx} className="text-xs text-slate-500 italic">"{sit}"</p>
                                            ))}
                                        </div>
                                    </TabsContent>

                                    {/* Tab: Solution */}
                                    <TabsContent value="solution" className="space-y-4 animate-in fade-in-50 duration-300">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider">
                                                <Lightbulb className="w-4 h-4" /> How It Works
                                            </div>
                                            <p className="text-slate-700 text-sm leading-relaxed">
                                                {industry.details.solution}
                                            </p>
                                        </div>
                                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mt-4">
                                            <div className="flex gap-2 items-start">
                                                <Zap className="w-4 h-4 text-purple-600 mt-0.5" />
                                                <div>
                                                    <p className="text-xs font-bold text-slate-900 uppercase mb-1">Success Story</p>
                                                    <p className="text-sm text-slate-600 italic">"{industry.details.example}"</p>
                                                </div>
                                            </div>
                                        </div>
                                    </TabsContent>

                                    {/* Tab: Impact */}
                                    <TabsContent value="impact" className="space-y-4 animate-in fade-in-50 duration-300">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase tracking-wider">
                                                <TrendingUp className="w-4 h-4" /> Outcome KPIs
                                            </div>
                                            <div className="grid grid-cols-1 gap-2">
                                                {industry.details.outcomes.map((item, idx) => (
                                                    <div key={idx} className="bg-emerald-50/50 p-2 rounded flex items-center gap-2 border border-emerald-100/50">
                                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                                        <span className="text-emerald-900 text-sm font-semibold">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="space-y-2 mt-4 pt-4 border-t border-slate-100">
                                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Core Benefits</span>
                                            <div className="flex flex-wrap gap-2">
                                                {industry.details.benefits.map((ben, idx) => (
                                                    <span key={idx} className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-md">{ben}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-5xl mx-auto px-4 pb-20 relative z-10">
                <div className="relative overflow-hidden rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl shadow-blue-900/20 group">
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

                    <div className="relative z-10 px-8 py-16 md:py-20 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight">
                            Ready to Architect Your <br className="hidden md:block" />
                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                Industry-Specific AI Growth Stack?
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Stop relying on generic tools. Deploy a revenue engine engineered
                            specifically for the <span className="text-blue-300 font-medium">nuances of your vertical</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link to="/book-demo">
                                <Button className="bg-white text-slate-950 hover:bg-blue-50 hover:text-blue-700 px-8 py-6 h-auto text-lg font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-1">
                                    Start Building Now
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                            <p className="text-slate-500 text-sm font-medium mt-4 sm:mt-0 sm:ml-6">
                                <span className="text-green-400">●</span> Operational in weeks, not months
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
