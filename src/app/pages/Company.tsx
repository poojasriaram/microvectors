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
        <div className="min-h-screen bg-white font-sans text-slate-900">

            {/* 1. Hero Section - Compact */}
            <section className="relative bg-slate-50 border-b border-slate-200 text-slate-900 pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/50 to-transparent pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-bold mb-4">
                        <Building2 className="w-4 h-4" />
                        <span>Enterprise Revenue Intelligence</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight text-slate-900">
                        Building the Future of <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
                            AI-Driven Revenue Growth
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed font-medium">
                        TrustFlow AI is an enterprise revenue acceleration platform helping modern organizations build predictable pipeline, close deals faster, and scale ARR using AI intelligence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 text-lg h-auto rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all hover:scale-105">
                            Book a Demo
                        </Button>
                        <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-5 text-lg h-auto rounded-full transition-all">
                            Talk to a Revenue Expert
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. Mission & What We Do - Compact */}
            <section className="py-16 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Mission */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-xl border border-blue-100">
                                <Target className="w-6 h-6 text-blue-600" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Our Mission</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                To help enterprises build predictable, scalable, and compounding revenue engines powered by AI.
                            </p>
                            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        </div>

                        {/* What We Do */}
                        <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 shadow-lg relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 pointer-events-none opacity-50"></div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-slate-900 relative z-10">
                                <Zap className="w-5 h-5 text-amber-500 fill-current" />
                                What We Do
                            </h3>
                            <ul className="space-y-3 relative z-10">
                                {[
                                    "AI-powered demand generation",
                                    "Sales intelligence & automation",
                                    "Revenue operations optimization",
                                    "ARR acceleration & retention",
                                    "Predictive revenue forecasting"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1 min-w-[16px]">
                                            <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center border border-green-200">
                                                <ArrowRight className="w-2.5 h-2.5 text-green-600" />
                                            </div>
                                        </div>
                                        <span className="text-slate-700 font-medium text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Impact & Credibility (KPIs) - Compact */}
            <section className="py-16 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight text-slate-900">Real Business Impact</h2>
                        <p className="text-slate-600 text-lg font-medium">Delivering measurable outcomes for enterprise revenue teams.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[
                            { value: "24×", label: "increase in high-quality leads", icon: <BarChart3 className="w-5 h-5 text-blue-600" /> },
                            { value: "3×", label: "improvement in conversion rate", icon: <TrendingUp className="w-5 h-5 text-green-600" /> },
                            { value: "50%", label: "reduction in sales cycle", icon: <Zap className="w-5 h-5 text-amber-500" /> },
                            { value: "65%", label: "reduction in cost of sales", icon: <PieChart className="w-5 h-5 text-purple-600" /> },
                            { value: "120%+", label: "net revenue retention", icon: <LineChart className="w-5 h-5 text-indigo-600" /> },
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 p-5 rounded-xl text-center hover:border-blue-300 hover:shadow-lg transition-all group">
                                <div className="flex justify-center mb-3 opacity-90 group-hover:opacity-100 transition-opacity">
                                    <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                                        {stat.icon}
                                    </div>
                                </div>
                                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-1">
                                    {stat.value}
                                </div>
                                <p className="text-xs text-slate-500 font-bold leading-tight tracking-wide uppercase">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Leadership & Culture - Compact */}
            <section className="py-16 bg-white border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Leadership & Culture</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                            TrustFlow AI is built by revenue, growth, and AI experts passionate about building the next generation of enterprise revenue technology.
                        </p>

                        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center gap-8 shadow-sm justify-center">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-14 h-14 rounded-full bg-slate-200 border-4 border-white flex items-center justify-center text-slate-500 text-[10px] font-bold shadow-sm">
                                        Expert
                                    </div>
                                ))}
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg font-bold text-slate-900 mb-1">Built by Experts</h3>
                                <p className="text-slate-500 text-sm font-medium">
                                    Our team combines decades of experience in B2B sales, machine learning, and enterprise software.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Offices & Contact - Compact */}
            <section className="py-16 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Our Offices</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                        {/* Mumbai */}
                        <Card className="border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group rounded-2xl hover:-translate-y-1">
                            <div className="h-1 bg-blue-600 w-full"></div>
                            <CardContent className="p-8 flex flex-col items-center text-center">
                                <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors mb-6 group-hover:scale-110 duration-300">
                                    <Building2 className="w-8 h-8 text-blue-600 group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Mumbai Office</h3>
                                <div className="space-y-1 text-slate-600">
                                    <p className="font-bold text-slate-900 text-lg">WeWork, Raheja Platinum</p>
                                    <div className="flex items-center justify-center gap-2 text-sm font-medium text-slate-500 pt-1">
                                        <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                        <p>Andheri East, Mumbai 400059</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Bangalore */}
                        <Card className="border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group rounded-2xl hover:-translate-y-1">
                            <div className="h-1 bg-purple-600 w-full"></div>
                            <CardContent className="p-8 flex flex-col items-center text-center">
                                <div className="p-3 bg-purple-50 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-colors mb-6 group-hover:scale-110 duration-300">
                                    <Building2 className="w-8 h-8 text-purple-600 group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Bangalore Office</h3>
                                <div className="space-y-1 text-slate-600">
                                    <p className="font-bold text-slate-900 text-lg">WeWork, Salarpuria Magnificia</p>
                                    <div className="flex items-center justify-center gap-2 text-sm font-medium text-slate-500 pt-1">
                                        <MapPin className="w-4 h-4 text-purple-500 flex-shrink-0" />
                                        <p>Old Madras Road, Bengaluru 560016</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Details */}
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <Card className="border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group rounded-2xl hover:-translate-y-1 cursor-pointer">
                            <CardContent className="p-8 flex flex-col items-center text-center">
                                <div className="p-3 bg-green-50 rounded-xl group-hover:bg-green-600 group-hover:text-white transition-colors mb-6 group-hover:scale-110 duration-300">
                                    <Mail className="w-8 h-8 text-green-600 group-hover:text-white" />
                                </div>
                                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Email Us</h3>
                                <a href="mailto:cs@trustflow.in" className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">cs@trustflow.in</a>
                            </CardContent>
                        </Card>

                        <Card className="border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group rounded-2xl hover:-translate-y-1 cursor-pointer">
                            <CardContent className="p-8 flex flex-col items-center text-center">
                                <div className="p-3 bg-indigo-50 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors mb-6 group-hover:scale-110 duration-300">
                                    <Phone className="w-8 h-8 text-indigo-600 group-hover:text-white" />
                                </div>
                                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Call Us</h3>
                                <div className="flex flex-col gap-1">
                                    <a href="tel:+919513088612" className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">+91 9513088612</a>
                                    <a href="tel:+919513188611" className="text-lg font-medium text-slate-500 hover:text-blue-600 transition-colors">+91 9513188611</a>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </section>

            {/* 6. Final CTA Section - Compact */}
            <section className="py-20 bg-white border-t border-slate-200">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 md:p-12 text-white shadow-xl relative overflow-hidden">
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Build Your Predictable Revenue Engine</h2>
                            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto font-medium">
                                Talk to our revenue experts and see how TrustFlow AI can scale your pipeline and ARR.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-5 h-auto font-bold shadow-lg rounded-full">
                                    Book a Demo
                                </Button>
                                <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-5 h-auto backdrop-blur-sm rounded-full">
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
