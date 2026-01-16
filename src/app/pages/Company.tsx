import React, { useEffect } from 'react';
import {
    Target,
    Zap,
    TrendingUp,
    Users,
    Building2,
    Globe,
    Award,
    ArrowRight,
    MapPin,
    Mail,
    Phone,
    BarChart3,
    PieChart,
    LineChart
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export default function Company() {
    // SEO & Meta Title
    useEffect(() => {
        document.title = "About TrustFlow AI | AI Revenue Acceleration Platform";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Learn about TrustFlow AI — the AI-powered revenue acceleration platform helping enterprises scale pipeline, close deals faster, and grow ARR predictably.');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = 'Learn about TrustFlow AI — the AI-powered revenue acceleration platform helping enterprises scale pipeline, close deals faster, and grow ARR predictably.';
            document.head.appendChild(meta);
        }

        // Schema Markup
        const schema = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "TrustFlow AI",
            "url": "https://trustflow.ai",
            "logo": "https://trustflow.ai/logo.png",
            "description": "AI-powered revenue acceleration platform helping enterprises scale pipeline, close deals faster, and grow ARR predictably.",
            "address": [
                {
                    "@type": "PostalAddress",
                    "streetAddress": "WeWork, Raheja Platinum, Andheri East",
                    "addressLocality": "Mumbai",
                    "addressRegion": "Maharashtra",
                    "postalCode": "400059",
                    "addressCountry": "IN"
                },
                {
                    "@type": "PostalAddress",
                    "streetAddress": "WeWork, Salarpuria Magnificia, Old Madras Road",
                    "addressLocality": "Bengaluru",
                    "addressRegion": "Karnataka",
                    "postalCode": "560016",
                    "addressCountry": "IN"
                }
            ],
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9513088612",
                "contactType": "sales",
                "email": "cs@trustflow.in"
            }
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schema);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#020617] pt-20 font-sans text-white">

            {/* 1. Hero Section */}
            <section className="relative bg-[#020617] text-white py-24 overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
                        <Building2 className="w-4 h-4" />
                        <span>Enterprise Revenue Intelligence</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                        Building the Future of <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                            AI-Driven Revenue Growth
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        TrustFlow AI is an enterprise revenue acceleration platform helping modern organizations build predictable pipeline, close deals faster, and scale ARR using AI intelligence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg h-auto rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all hover:scale-105 border-t border-white/20">
                            Book a Demo
                        </Button>
                        <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800 px-8 py-6 text-lg h-auto rounded-lg transition-all backdrop-blur-sm">
                            Talk to a Revenue Expert
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. Mission & What We Do */}
            <section className="py-24 bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Mission */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                                <Target className="w-8 h-8 text-blue-400" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Mission</h2>
                            <p className="text-xl text-slate-400 leading-relaxed">
                                To help enterprises build predictable, scalable, and compounding revenue engines powered by AI.
                            </p>
                            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        </div>

                        {/* What We Do */}
                        <div className="bg-[#0F172A] p-8 md:p-10 rounded-2xl border border-slate-700/50 shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none"></div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white relative z-10">
                                <Zap className="w-6 h-6 text-yellow-400 fill-current" />
                                What We Do
                            </h3>
                            <ul className="space-y-4 relative z-10">
                                {[
                                    "AI-powered demand generation",
                                    "Sales intelligence & automation",
                                    "Revenue operations optimization",
                                    "ARR acceleration & retention",
                                    "Predictive revenue forecasting"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1 min-w-[20px]">
                                            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                                                <ArrowRight className="w-3 h-3 text-green-400" />
                                            </div>
                                        </div>
                                        <span className="text-slate-300 font-medium text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Impact & Credibility (KPIs) */}
            <section className="py-24 bg-[#0F172A] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Business Impact</h2>
                        <p className="text-slate-400 text-lg">Delivering measurable outcomes for enterprise revenue teams.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            { value: "24×", label: "increase in high-quality leads", icon: <BarChart3 className="w-5 h-5 text-blue-400" /> },
                            { value: "3×", label: "improvement in conversion rate", icon: <TrendingUp className="w-5 h-5 text-green-400" /> },
                            { value: "50%", label: "reduction in sales cycle", icon: <Zap className="w-5 h-5 text-yellow-400" /> },
                            { value: "65%", label: "reduction in cost of sales", icon: <PieChart className="w-5 h-5 text-purple-400" /> },
                            { value: "120%+", label: "net revenue retention", icon: <LineChart className="w-5 h-5 text-indigo-400" /> },
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-[#1E293B]/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-xl text-center hover:bg-[#1E293B] transition-colors group hover:shadow-lg hover:shadow-blue-900/10">
                                <div className="flex justify-center mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                                    {stat.value}
                                </div>
                                <p className="text-sm text-slate-300 font-medium leading-tight">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Leadership & Culture */}
            <section className="py-24 bg-[#020617] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Leadership & Culture</h2>
                        <p className="text-xl text-slate-400 leading-relaxed mb-12">
                            TrustFlow AI is built by revenue, growth, and AI experts passionate about building the next generation of enterprise revenue technology.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            <div className="md:col-span-3 p-8 bg-[#0F172A] rounded-2xl border border-slate-700/50 flex flex-col md:flex-row items-center gap-8 shadow-lg">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-16 h-16 rounded-full bg-slate-800 border-4 border-[#020617] flex items-center justify-center text-slate-400 text-xs font-bold shadow-lg">
                                            Expert
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Built by Experts</h3>
                                    <p className="text-slate-400">
                                        Our team combines decades of experience in B2B sales, machine learning, and enterprise software to solve the revenue puzzle.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Offices & Contact */}
            <section className="py-24 bg-[#0F172A]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Our Offices</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                        {/* Mumbai */}
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-[#1E293B] overflow-hidden group">
                            <div className="h-2 bg-blue-600 w-full"></div>
                            <CardContent className="p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <Building2 className="w-6 h-6 text-blue-400 group-hover:text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Mumbai Office</h3>
                                </div>
                                <div className="space-y-4 text-slate-400 pl-2">
                                    <p className="font-semibold text-white text-lg">WeWork, Raheja Platinum</p>
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                                        <p>Andheri East, Mumbai,<br />Maharashtra 400059</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Bangalore */}
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-[#1E293B] overflow-hidden group">
                            <div className="h-2 bg-purple-600 w-full"></div>
                            <CardContent className="p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                        <Building2 className="w-6 h-6 text-purple-400 group-hover:text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Bangalore Office</h3>
                                </div>
                                <div className="space-y-4 text-slate-400 pl-2">
                                    <p className="font-semibold text-white text-lg">WeWork, Salarpuria Magnificia</p>
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                                        <p>Old Madras Road,<br />Bengaluru 560016</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Details */}
                    <div className="max-w-4xl mx-auto bg-[#1E293B] rounded-2xl p-8 border border-slate-700/50 shadow-sm">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#0F172A] transition-colors">
                                <div className="p-3 bg-green-500/10 text-green-400 rounded-full">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400 font-medium">Email Us</p>
                                    <a href="mailto:cs@trustflow.in" className="text-lg font-bold text-white hover:text-blue-400 transition-colors">cs@trustflow.in</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#0F172A] transition-colors">
                                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-full">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400 font-medium">Call Us</p>
                                    <div className="flex flex-col">
                                        <a href="tel:+919513088612" className="text-lg font-bold text-white hover:text-blue-400 transition-colors">+91 9513088612</a>
                                        <a href="tel:+919513188611" className="text-lg font-bold text-white hover:text-blue-400 transition-colors">+91 9513188611</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 6. Final CTA Section */}
            <section className="py-20 bg-[#020617]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden border border-white/10">
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Build Your Predictable Revenue Engine</h2>
                            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                                Talk to our revenue experts and see how TrustFlow AI can scale your pipeline and ARR.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button className="bg-white text-blue-900 hover:bg-slate-100 text-lg px-8 py-6 h-auto font-bold shadow-lg">
                                    Book a Demo
                                </Button>
                                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 h-auto backdrop-blur-sm">
                                    Talk to a Revenue Expert
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
