import React from 'react';
import {
    BookOpen,
    FileText,
    PlayCircle,
    BarChart,
    Users,
    Briefcase,
    ArrowRight
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export default function Resources() {
    const categories = [
        { icon: <BookOpen className="w-8 h-8 text-blue-600" />, title: "AI Revenue Playbooks" },
        { icon: <TargetIcon className="w-8 h-8 text-purple-600" />, title: "Demand Generation Frameworks" },
        { icon: <Briefcase className="w-8 h-8 text-indigo-600" />, title: "Sales Transformation Guides" },
        { icon: <BarChart className="w-8 h-8 text-green-600" />, title: "Revenue Operations Best Practices" },
        { icon: <TrendingUpIcon className="w-8 h-8 text-pink-600" />, title: "ARR Growth Strategies" },
        { icon: <Users className="w-8 h-8 text-yellow-600" />, title: "Case Studies & Success Stories" },
        { icon: <FileText className="w-8 h-8 text-orange-600" />, title: "Whitepapers & Research Reports" },
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen bg-[#020617] text-white">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Revenue Intelligence & Growth Insights</h1>
                    <p className="text-xl font-semibold text-blue-400 mb-6">
                        AI-Powered Playbooks for Modern Revenue Leaders
                    </p>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
                        TrustFlow AI is building a comprehensive knowledge hub for modern revenue leaders. Our resources are designed to help founders, CROs, and revenue teams build predictable, scalable growth engines.
                    </p>
                </div>
            </div>

            {/* Resources Categories Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">What You’ll Find Here</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((item, index) => (
                        <Card key={index} className="hover:shadow-xl hover:shadow-blue-900/10 transition-all hover:-translate-y-1 cursor-pointer border-slate-700/50 bg-[#0F172A] hover:bg-[#1E293B] group">
                            <CardContent className="p-6 flex flex-col items-center text-center h-full justify-center min-h-[200px]">
                                <div className="mb-4 p-4 bg-slate-800 rounded-full group-hover:bg-slate-700 transition-colors">
                                    {React.cloneElement(item.icon, { className: 'w-8 h-8 text-blue-400' })}
                                </div>
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Designed For Section */}
            <div className="bg-[#0F172A] py-20 mb-20 border-y border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Built For</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            "Founders & CEOs",
                            "CROs & Revenue Leaders",
                            "Sales & Marketing Teams",
                            "Growth & RevOps Leaders"
                        ].map((role, index) => (
                            <div key={index} className="flex items-center gap-3 p-4 bg-[#1E293B] rounded-lg border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                                <div className="bg-blue-500/10 p-2 rounded-full">
                                    <Users className="w-5 h-5 text-blue-400" />
                                </div>
                                <span className="font-semibold text-white">{role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-4xl mx-auto px-4 pb-20 text-center">
                <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 rounded-2xl p-12 text-white shadow-2xl border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-8">Start Building Your Revenue Engine</h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-white text-blue-900 hover:bg-slate-100 px-8 py-6 h-auto text-lg font-bold">
                                Explore Resources
                            </Button>
                            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-6 h-auto text-lg backdrop-blur-sm">
                                Book a Demo
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper components for missing icons within this file context if needed, 
// though lucide-react generally exports them. 
// I'll import them properly above.
// Re-checking imports: Target is imported as TargetIcon to avoid conflict if I used Target before.
// Standard Lucide "Target" is fine.
import { Target as TargetIcon, TrendingUp as TrendingUpIcon } from 'lucide-react';
