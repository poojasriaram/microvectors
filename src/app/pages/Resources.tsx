import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    BookOpen,
    FileText,
    BarChart,
    Users,
    Briefcase,
    Target,
    TrendingUp
} from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export default function Resources() {
    const categories = [
        { icon: <BookOpen className="w-8 h-8 text-blue-600" />, title: "AI Revenue Playbooks" },
        { icon: <Target className="w-8 h-8 text-purple-600" />, title: "Demand Generation Frameworks" },
        { icon: <Briefcase className="w-8 h-8 text-indigo-600" />, title: "Sales Transformation Guides" },
        { icon: <BarChart className="w-8 h-8 text-green-600" />, title: "Revenue Operations Best Practices" },
        { icon: <TrendingUp className="w-8 h-8 text-pink-600" />, title: "ARR Growth Strategies" },
        { icon: <Users className="w-8 h-8 text-yellow-600" />, title: "Case Studies & Success Stories" },
        { icon: <FileText className="w-8 h-8 text-orange-600" />, title: "Whitepapers & Research Reports" },
    ];

    return (
        <div className="bg-white text-slate-900 font-sans min-h-screen">
            {/* Hero Section */}
            <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                {/* Background Slideshow */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-white/90" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Reveal width="100%">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-bold text-slate-700 uppercase tracking-widest mb-8">
                            <BookOpen className="w-4 h-4 text-blue-600" />
                            Resources Hub
                        </div>

                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
                            Revenue Intelligence & <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                                Growth Insights
                            </span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium mb-10">
                            MicroVectors is building a comprehensive knowledge hub for modern revenue leaders. Our resources are designed to help founders, CROs, and revenue teams build predictable, scalable growth engines.
                        </p>
                    </Reveal>
                </div>
            </div>

            {/* Resources Categories Section */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <Reveal width="100%">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">What You’ll Find Here</h2>
                </Reveal>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((item, index) => (
                        <Reveal key={index} width="100%" delay={index * 0.1}>
                            <Card className="hover:shadow-xl hover:shadow-blue-900/5 transition-all hover:-translate-y-1 cursor-pointer border-slate-200 bg-white hover:border-blue-300 group">
                                <CardContent className="p-6 flex flex-col items-center text-center h-full justify-center min-h-[200px]">
                                    <div className="mb-4 p-4 bg-slate-50 rounded-full group-hover:bg-blue-50 transition-colors border border-slate-100">
                                        {React.cloneElement(item.icon, { className: 'w-8 h-8 text-blue-600' })}
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                                </CardContent>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Designed For Section */}
            <div className="bg-slate-50 py-20 lg:py-28 border-y border-slate-200">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal width="100%">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Built For</h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                "Founders & CEOs",
                                "CROs & Revenue Leaders",
                                "Sales & Marketing Teams",
                                "Growth & RevOps Leaders"
                            ].map((role, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-400 transition-colors shadow-sm">
                                    <div className="bg-blue-50 p-2 rounded-full border border-blue-100">
                                        <Users className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <span className="font-bold text-slate-900">{role}</span>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28 text-center">
                <Reveal width="100%">
                    <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-[20px] p-12 text-white shadow-2xl border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-8">Start Building Your Revenue Engine</h2>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/offerings" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-900/50 hover:-translate-y-0.5">
                                    Explore Offerings
                                </Link>
                                <Link to="/book-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200">
                                    Book Consultation
                                </Link>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}
