import React from 'react';
import {
    Cloud,
    Landmark,
    Factory,
    Briefcase,
    Rocket,
    ArrowRight,
    Target,
    Layers,
    CheckCircle2
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

export default function Industries() {
    const industries = [
        {
            title: "SaaS & Digital Platforms",
            icon: <Cloud className="w-8 h-8 text-blue-400" />,
            focus: ["ARR growth", "Churn reduction", "Expansion revenue"],
            stack: ["AI growth hacking", "Performance marketing AI", "Auto sales pilots", "RevOps & revenue acceleration"]
        },
        {
            title: "BFSI & FinTech",
            icon: <Landmark className="w-8 h-8 text-purple-400" />,
            focus: ["High-intent demand", "Compliance-aware sales", "Lifetime value maximization"],
            stack: ["Demand intelligence", "AI sales qualification", "Predictive revenue & retention"]
        },
        {
            title: "Manufacturing & Industrial",
            icon: <Factory className="w-8 h-8 text-amber-400" />,
            focus: ["Long sales cycles", "Dealer & channel efficiency"],
            stack: ["Demand discovery", "Sales funnel intelligence", "Revenue forecasting"]
        },
        {
            title: "Professional Services & Consulting",
            icon: <Briefcase className="w-8 h-8 text-emerald-400" />,
            focus: ["Pipeline predictability", "Utilization & margins"],
            stack: ["AI sales ops", "RevOps dashboards", "Expansion intelligence"]
        },
        {
            title: "Startups & Scaleups",
            icon: <Rocket className="w-8 h-8 text-pink-400" />,
            focus: ["PMF discovery", "Capital efficiency", "Hypergrowth readiness"],
            stack: ["AI growth hacking", "Autonomous GTM", "Revenue acceleration"]
        }
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen bg-[#020617] text-white">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        AI Growth Architectures <br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            by Industry
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        Tailored AI solution stacks designed to address the unique revenue challenges
                        and growth mechanics of your specific sector.
                    </p>
                </div>
            </div>

            {/* Industries Grid */}
            <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => (
                        <Card key={index} className="flex flex-col h-full hover:shadow-2xl transition-all duration-300 border-slate-800 bg-[#0F172A]/80 backdrop-blur-sm group hover:-translate-y-1">
                            <CardHeader className="pb-4">
                                <div className="mb-6 p-4 bg-[#1E293B] w-fit rounded-xl border border-slate-700 group-hover:border-blue-500/30 transition-colors shadow-lg">
                                    {industry.icon}
                                </div>
                                <CardTitle className="text-2xl font-bold text-white">{industry.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow space-y-8">
                                {/* Focus Section */}
                                <div>
                                    <h4 className="flex items-center gap-2 font-semibold text-slate-200 mb-4 text-sm uppercase tracking-wider bg-slate-800/50 w-fit px-3 py-1 rounded-full border border-slate-700/50">
                                        <Target className="w-4 h-4 text-blue-400" />
                                        Focus
                                    </h4>
                                    <ul className="space-y-3">
                                        {industry.focus.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                                                <span className="text-slate-400 text-sm leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* AI Stack Section */}
                                <div>
                                    <h4 className="flex items-center gap-2 font-semibold text-slate-200 mb-4 text-sm uppercase tracking-wider bg-slate-800/50 w-fit px-3 py-1 rounded-full border border-slate-700/50">
                                        <Layers className="w-4 h-4 text-purple-400" />
                                        AI Stack
                                    </h4>
                                    <div className="space-y-3">
                                        {industry.stack.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                                                <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                                                <span className="text-slate-300 font-medium text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-4xl mx-auto px-4 pb-20 text-center relative z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-3xl -z-10 rounded-full" />
                <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-12 shadow-2xl overflow-hidden relative group hover:border-blue-500/30 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white relative z-10">
                        Build Your Industry-Specific <br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            AI Growth Stack
                        </span>
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                        <Button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 h-auto text-lg font-bold rounded-full shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 transition-all flex items-center gap-2">
                            Book a Demo
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
