import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    ArrowRight,
    Cloud,
    Landmark,
    Factory,
    Briefcase,
    Rocket,
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

import VerticalBlock from '../components/VerticalBlock';
import { Reveal } from '../components/ui/Reveal';
import IndustriesCarousel from '../components/IndustriesCarousel';
import { verticalsContent } from '../../data/verticalsContent';

export default function Industries() {
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const section = params.get('section');

        if (section) {
            setTimeout(() => {
                const elementId = section.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                const element = document.getElementById(elementId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    }, [location]);

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
                example: "A B2B SaaS firm scaled from $4M to $16M ARR in 14 months using TrustGrid’s AI revenue engine.",
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
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 composition-layer">
            {/* Premium Industries Carousel - First Section */}
            <div className="pt-20">
                <IndustriesCarousel />
            </div>

            {/* 1. Static Intro Section (Replaces old Hero) */}
            <section className="relative py-16 overflow-hidden">
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <Reveal width="100%">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Vertical-Specific Revenue Engineering</h2>
                        <p className="text-xl text-slate-600 leading-relaxed font-medium">
                            TrustGrid AI provides deep industry-specific expertise, integrating autonomous demand engines with vertical growth mechanics. We don't just provide tools; we architect the entire revenue lifecycle for your specific market nuances.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Industries Grid with Tabs */}
            <section className="relative z-10 -mt-20 pb-24">
                <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {industries.map((industry, index) => (
                            <Reveal width="100%" delay={index * 0.1}>
                                <Card id={industry.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="flex flex-col h-full hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 border-slate-200/60 bg-white/80 backdrop-blur-xl group hover:-translate-y-2 overflow-hidden scroll-mt-32 ring-1 ring-slate-200/50 hover:ring-blue-200/50">
                                    <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${industry.color === 'blue' ? 'from-blue-500 to-indigo-500' :
                                        industry.color === 'purple' ? 'from-purple-500 to-pink-500' :
                                            industry.color === 'indigo' ? 'from-indigo-500 to-purple-500' :
                                                industry.color === 'teal' ? 'from-teal-500 to-emerald-500' :
                                                    industry.color === 'amber' ? 'from-amber-500 to-orange-500' :
                                                        industry.color === 'emerald' ? 'from-emerald-500 to-teal-500' :
                                                            industry.color === 'pink' ? 'from-pink-500 to-rose-500' :
                                                                industry.color === 'orange' ? 'from-orange-500 to-red-500' :
                                                                    'from-cyan-500 to-blue-500'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                                    <CardHeader className="pb-4 bg-slate-50/30 border-b border-slate-100/60">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className={`p-3.5 rounded-2xl border ${getColorClass(industry.color)} transition-transform group-hover:scale-110 duration-500 shadow-sm`}>
                                                {industry.icon}
                                            </div>
                                        </div>
                                        <CardTitle className="text-2xl font-bold text-slate-900 mt-5 tracking-tight group-hover:text-blue-700 transition-colors">{industry.title}</CardTitle>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {industry.keyVerticals.map((vertical, i) => (
                                                <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100/80 border border-slate-200 px-2 py-1 rounded-md">
                                                    {vertical}
                                                </span>
                                            ))}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow pt-6 space-y-6">
                                        <p className="text-slate-600 text-base leading-relaxed font-medium">
                                            {industry.offeringDescription}
                                        </p>

                                        <Tabs defaultValue="challenges" className="w-full">
                                            <TabsList className="grid w-full grid-cols-3 mb-6 bg-slate-100/50 p-1 rounded-xl">
                                                <TabsTrigger value="challenges" className="text-xs sm:text-xs font-bold uppercase tracking-wide data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm rounded-lg py-2">Challenges</TabsTrigger>
                                                <TabsTrigger value="solution" className="text-xs sm:text-xs font-bold uppercase tracking-wide data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm rounded-lg py-2">Solution</TabsTrigger>
                                                <TabsTrigger value="impact" className="text-xs sm:text-xs font-bold uppercase tracking-wide data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm rounded-lg py-2">Impact</TabsTrigger>
                                            </TabsList>

                                            {/* Tab: Challenges */}
                                            <TabsContent value="challenges" className="space-y-4 animate-in fade-in-50 duration-300 focus-visible:outline-none">
                                                <div className="space-y-4">
                                                    <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-widest">
                                                        <AlertTriangle className="w-3.5 h-3.5" /> High-Stakes Pain Points
                                                    </div>
                                                    <ul className="space-y-3">
                                                        {industry.details.challenges.map((item, idx) => (
                                                            <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm leading-snug">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-amber-400/80 mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 mt-4">
                                                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Common Situations</span>
                                                    <div className="space-y-1.5">
                                                        {industry.details.situations.slice(0, 2).map((sit, idx) => (
                                                            <p key={idx} className="text-xs text-slate-500 italic">"{sit}"</p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </TabsContent>

                                            {/* Tab: Solution */}
                                            <TabsContent value="solution" className="space-y-4 animate-in fade-in-50 duration-300 focus-visible:outline-none">
                                                <div className="space-y-4">
                                                    <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest">
                                                        <Lightbulb className="w-3.5 h-3.5" /> Intelligence Layer
                                                    </div>
                                                    <p className="text-slate-700 text-sm leading-relaxed font-medium">
                                                        {industry.details.solution}
                                                    </p>
                                                </div>
                                                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-xl border border-indigo-100/50 mt-4 shadow-sm group-hover:shadow-md transition-shadow">
                                                    <div className="flex gap-3 items-start">
                                                        <div className="p-1.5 bg-white rounded-lg shadow-sm">
                                                            <Zap className="w-3.5 h-3.5 text-indigo-600" />
                                                        </div>
                                                        <div>
                                                            <p className="text-[10px] font-bold text-indigo-900 uppercase tracking-widest mb-1.5">Proven Success</p>
                                                            <p className="text-sm text-slate-700 italic border-l-2 border-indigo-200 pl-2 leading-relaxed">"{industry.details.example}"</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabsContent>

                                            {/* Tab: Impact */}
                                            <TabsContent value="impact" className="space-y-4 animate-in fade-in-50 duration-300 focus-visible:outline-none">
                                                <div className="space-y-4">
                                                    <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest">
                                                        <TrendingUp className="w-3.5 h-3.5" /> Measurable Outcomes
                                                    </div>
                                                    <div className="grid grid-cols-1 gap-2">
                                                        {industry.details.outcomes.map((item, idx) => (
                                                            <div key={idx} className="bg-emerald-50/50 p-2.5 rounded-lg flex items-center gap-3 border border-emerald-100/80 hover:bg-emerald-50 transition-colors">
                                                                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                                                <span className="text-emerald-900 text-sm font-bold">{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="space-y-3 mt-4 pt-4 border-t border-slate-100">
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Core Advantages</span>
                                                    <div className="flex flex-wrap gap-2">
                                                        {industry.details.benefits.map((ben, idx) => (
                                                            <span key={idx} className="text-[11px] font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md">{ben}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </TabsContent>
                                        </Tabs>
                                    </CardContent>
                                </Card>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Verticals Content Blocks */}
            <div className="bg-white relative z-10">
                {verticalsContent.map((block, index) => (
                    <Reveal key={index} width="100%" delay={index % 2 === 0 ? 0.1 : 0.2}>
                        <div id={block.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="scroll-mt-32">
                            <VerticalBlock data={block} index={index} />
                        </div>
                    </Reveal>
                ))}
            </div>

            {/* CTA Section */}
            <div className="max-w-5xl mx-auto px-4 pb-24 pt-12 relative z-10">
                <Reveal width="100%" direction="up">
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 border border-slate-800/60 shadow-2xl shadow-blue-900/20 group hover:shadow-blue-900/30 transition-shadow duration-500">
                        {/* Background Effects */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl bg-blue-600/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 blur-[80px] rounded-full pointer-events-none mix-blend-screen" />

                        <div className="relative z-10 px-8 py-16 md:py-24 text-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-700 text-blue-400 text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-md">
                                <Rocket className="w-4 h-4" /> Ready to Scale?
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-white tracking-tight leading-[1.1]">
                                Architect Your <br className="hidden md:block" />
                                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                    Industry-Specific AI Engine
                                </span>
                            </h2>

                            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                                Stop relying on generic tools. Deploy a revenue engine engineered
                                specifically for the <span className="text-blue-300 font-semibold">nuances of your vertical</span>.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                                <Link to="/book-demo">
                                    <Button className="bg-white text-slate-950 hover:bg-blue-50 hover:text-blue-700 px-10 py-7 h-auto text-lg font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-1">
                                        Start Building Now
                                        <ArrowRight className="w-5 h-5" />
                                    </Button>
                                </Link>
                                <div className="flex flex-col items-center gap-2">
                                    <p className="text-slate-500 text-sm font-medium sm:ml-6 flex items-center gap-2">
                                        <span className="text-green-400 relative flex h-2.5 w-2.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                        </span>
                                        Operational in weeks, not months
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}
