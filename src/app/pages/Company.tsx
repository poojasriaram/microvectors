import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Target,
    Zap,
    TrendingUp,
    Building2,
    Globe,
    ArrowRight,
    MapPin,
    Mail,
    Phone,
    BarChart3,
    PieChart,
    LineChart
} from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import LeadershipSection from '../components/LeadershipSection';
import { useState } from 'react';

export default function Company() {
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

    // SEO & Meta Title
    useEffect(() => {
        document.title = "About TrustGrid AI | AI Revenue Acceleration Platform";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Learn about TrustGrid AI — the AI-powered revenue acceleration platform helping enterprises scale pipeline, close deals faster, and grow ARR predictably.');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = 'Learn about TrustGrid AI — the AI-powered revenue acceleration platform helping enterprises scale pipeline, close deals faster, and grow ARR predictably.';
            document.head.appendChild(meta);
        }

        // Schema Markup
        const schema = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "TrustGrid AI",
            "url": "https://trustgrid.ai",
            "logo": "https://trustgrid.ai/logo.png",
            "description": "AI-powered revenue acceleration platform helping enterprises scale pipeline, close deals faster, and grow ARR predictably.",
            "address": [
                {
                    "@type": "PostalAddress",
                    "streetAddress": "501 E Kennedy Blvd Suite 1400",
                    "addressLocality": "Tampa",
                    "addressRegion": "FL",
                    "postalCode": "33602",
                    "addressCountry": "US"
                },
                {
                    "@type": "PostalAddress",
                    "streetAddress": "5 Temasek Boulevard, 17th Floor",
                    "addressLocality": "Singapore",
                    "postalCode": "038985",
                    "addressCountry": "SG"
                },
                {
                    "@type": "PostalAddress",
                    "streetAddress": "Suite : 32 , 235, BINNAMANGALA, 2nd Floor, 13th Cross Road, Indira Nagar 2nd Stage, Hoysala Nagar",
                    "addressLocality": "Bengaluru",
                    "addressRegion": "Karnataka",
                    "postalCode": "560038",
                    "addressCountry": "IN"
                }
            ],
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9513288612",
                "contactType": "sales",
                "email": "connect@trustgrid.ai"
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

    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    const backgroundSlides = [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1553877615-2a33715ce9e2?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBgIndex((prev) => (prev + 1) % backgroundSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">

            {/* 1. Hero Section - Premium (Background Slideshow - Uniform Theme) */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                {/* Background Slideshow */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <style>{`
                        @keyframes fadeZoomCustom {
                            0% { opacity: 0; transform: scale(1); }
                            10% { opacity: 1; }
                            90% { opacity: 1; }
                            100% { opacity: 0; transform: scale(1.1); }
                        }
                    `}</style>
                    {backgroundSlides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentBgIndex ? "opacity-100" : "opacity-0"}`}
                            style={{
                                backgroundImage: `url('${slide}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                animation: index === currentBgIndex ? 'fadeZoomCustom 6s infinite alternate ease-in-out' : 'none'
                            }}
                        />
                    ))}
                    {/* Premium Unified Overlay - Matched with AI Lead Gen Visibility */}
                    <div className="absolute inset-0 bg-white/30 bg-gradient-to-b from-white/80 via-white/20 to-white/80" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-multiply"></div>
                </div>

                {/* Content */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <Reveal width="100%">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100/60 shadow-[0_2px_10px_-4px_rgba(59,130,246,0.3)] text-blue-700 text-sm font-bold mb-8 backdrop-blur-sm animate-fade-in-up">
                            <Building2 className="w-4 h-4 text-blue-600" />
                            <span className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">Enterprise Revenue Intelligence</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1] text-slate-900 drop-shadow-sm">
                            Building the Future of <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                                AI-Driven Revenue Growth
                            </span>
                        </h1>

                        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                            TrustGrid AI is an enterprise revenue acceleration platform helping modern organizations build predictable pipeline, close deals faster, and scale ARR using AI intelligence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Link to="/book-demo">
                                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-6 text-lg h-auto rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:-translate-y-1">
                                    Book a Demo
                                </Button>
                            </Link>
                            <Button variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-blue-700 px-10 py-6 text-lg h-auto rounded-full transition-all hover:border-blue-200 shadow-sm hover:shadow bg-white/50 backdrop-blur-sm">
                                Talk to a Revenue Expert
                            </Button>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 2. About Us - Premium */}
            <section id="about-us" className="py-24 bg-white relative scroll-mt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        {/* Text Content */}
                        <div className="lg:col-span-6 space-y-8">
                            <Reveal width="100%">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider">
                                    About Us
                                </div>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mt-4">
                                    Pioneering the Science of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Revenue Engineering</span>
                                </h2>
                                <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed font-sans mt-6">
                                    <p>
                                        At TrustGrid AI, we believe that revenue growth shouldn't be a guessing game. It's an engineering problem solvable with data, intelligence, and precision.
                                    </p>
                                    <p>
                                        Born from a convergence of enterprise sales expertise and advanced machine learning, we've built the world's most comprehensive Revenue Intelligence Platform. We don't just provide data; we provide the <strong>flow</strong>—the seamless connection between market signals, sales execution, and predictable revenue outcomes.
                                    </p>
                                    <p>
                                        We partner with forward-thinking enterprises to dismantle silos, automate complex revenue workflows, and empower teams to achieve what was previously impossible: <strong>Growth on Autopilot.</strong>
                                    </p>
                                </div>
                            </Reveal>

                            <div className="pt-4 flex flex-wrap gap-4">
                                <div className="flex items-center gap-3 px-5 py-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <div className="bg-blue-100 p-2 rounded-lg">
                                        <Globe className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Global Reach</p>
                                        <p className="text-slate-900 font-bold">20+ Countries</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 px-5 py-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <div className="bg-purple-100 p-2 rounded-lg">
                                        <Zap className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Impact</p>
                                        <p className="text-slate-900 font-bold">$5B+ Generated</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Content */}
                        <div className="lg:col-span-6 relative">
                            <Reveal width="100%" delay={0.2}>
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-900/10 border border-slate-100 group">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"></div>
                                    <img
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                        alt="Team collaboration"
                                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Floating Badge */}
                                    <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 max-w-xs z-20 hidden md:block animate-fade-in-up">
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Our DNA</p>
                                        <p className="text-slate-900 font-bold text-lg leading-tight">
                                            Where Human Ingenuity Meets Artificial Intelligence
                                        </p>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-60 -z-10 mix-blend-multiply"></div>
                                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 -z-10 mix-blend-multiply"></div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Mission & What We Do - Premium */}
            <section id="mission" className="py-24 bg-white relative scroll-mt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Mission */}
                        <div className="space-y-8">
                            <Reveal width="100%">
                                <div className="inline-flex items-center justify-center p-3 bg-blue-50/50 rounded-2xl border border-blue-100 shadow-sm">
                                    <Target className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 mt-4">Our Mission</h2>
                                    <p className="text-xl text-slate-600/90 leading-relaxed font-medium">
                                        To help enterprises build <span className="text-blue-700 font-semibold">predictable</span>, <span className="text-indigo-700 font-semibold">scalable</span>, and <span className="text-purple-700 font-semibold">compounding</span> revenue engines powered by AI.
                                    </p>
                                </div>
                                <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full opacity-80"></div>
                            </Reveal>
                        </div>

                        {/* What We Do */}
                        <Reveal width="100%" delay={0.2}>
                            <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-12px_rgba(59,130,246,0.1)] transition-all duration-500 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none group-hover:bg-blue-100/40 transition-colors"></div>

                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-900 relative z-10">
                                    <div className="p-2 bg-amber-50 rounded-lg border border-amber-100">
                                        <Zap className="w-5 h-5 text-amber-500 fill-current" />
                                    </div>
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
                                        <li key={i} className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-300">
                                            <div className="mt-1 min-w-[20px]">
                                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center border border-green-200">
                                                    <ArrowRight className="w-3 h-3 text-green-700" />
                                                </div>
                                            </div>
                                            <span className="text-slate-700 font-semibold text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* 3. Impact & Credibility (KPIs) - Premium */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">Real Business Impact</h2>
                        <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto">Delivering measurable outcomes for enterprise revenue teams.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            { value: "24×", label: "increase in high-quality leads", icon: <BarChart3 className="w-6 h-6 text-blue-600" /> },
                            { value: "3×", label: "improvement in conversion rate", icon: <TrendingUp className="w-6 h-6 text-green-600" /> },
                            { value: "50%", label: "reduction in sales cycle", icon: <Zap className="w-6 h-6 text-amber-500" /> },
                            { value: "65%", label: "reduction in cost of sales", icon: <PieChart className="w-6 h-6 text-purple-600" /> },
                            { value: "120%+", label: "net revenue retention", icon: <LineChart className="w-6 h-6 text-indigo-600" /> },
                        ].map((stat, idx) => (
                            <Reveal key={idx} width="100%" delay={idx * 0.1}>
                                <div className="bg-white border border-slate-100 p-8 rounded-2xl text-center hover:border-blue-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden h-full">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative z-10">
                                        <div className="flex justify-center mb-5">
                                            <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-white group-hover:shadow-sm transition-all duration-300 border border-slate-100 group-hover:border-blue-100">
                                                {stat.icon}
                                            </div>
                                        </div>
                                        <div className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-br from-slate-900 to-slate-700 group-hover:from-blue-600 group-hover:to-indigo-600 mb-2 transition-all duration-300">
                                            {stat.value}
                                        </div>
                                        <p className="text-xs text-slate-500 font-bold leading-normal tracking-wider uppercase group-hover:text-slate-700 transition-colors">
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Leadership & Culture - Premium */}
            <div id="leadership-culture" className="scroll-mt-32">
                <LeadershipSection />
            </div>

            {/* 5. Offices & Contact - Compact */}
            <section id="our-offices" className="relative py-16 border-t border-slate-200 bg-slate-900 overflow-hidden scroll-mt-32">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Office Building"
                        className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/90"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Our Offices</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
                        {/* US Office */}
                        <Reveal width="100%" delay={0.1}>
                            <Card className="border border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 bg-white/5 backdrop-blur-sm overflow-hidden group rounded-2xl hover:-translate-y-1 h-full">
                                <div className="h-1 bg-blue-600 w-full"></div>
                                <CardContent className="p-5 flex flex-col items-center text-center">
                                    <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors mb-6 group-hover:scale-110 duration-300">
                                        <Building2 className="w-8 h-8 text-blue-400 group-hover:text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 tracking-tight">US Office</h3>
                                    <div className="space-y-3 text-slate-300">
                                        <p className="font-medium text-slate-100 leading-relaxed tracking-wide">501 E Kennedy Blvd Suite 1400<br />Tampa, FL 33602, United States</p>
                                        <div className="flex flex-col gap-1 text-sm">
                                            <a href="mailto:connect@trustgrid.ai" className="hover:text-blue-400 transition-colors tracking-wide">connect@trustgrid.ai</a>
                                            <a href="tel:+919513288612" className="hover:text-blue-400 transition-colors tracking-wide">+91 9513288612</a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Reveal>

                        {/* Singapore Office */}
                        <Reveal width="100%" delay={0.2}>
                            <Card className="border border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 bg-white/5 backdrop-blur-sm overflow-hidden group rounded-2xl hover:-translate-y-1 h-full">
                                <div className="h-1 bg-purple-600 w-full"></div>
                                <CardContent className="p-5 flex flex-col items-center text-center">
                                    <div className="p-3 bg-purple-500/20 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-colors mb-6 group-hover:scale-110 duration-300">
                                        <Globe className="w-8 h-8 text-purple-400 group-hover:text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Singapore Office</h3>
                                    <div className="space-y-3 text-slate-300">
                                        <p className="font-medium text-slate-100 leading-relaxed tracking-wide">5 Temasek Boulevard, 17th Floor<br />Singapore 038985</p>
                                        <div className="flex flex-col gap-1 text-sm">
                                            <a href="mailto:connect@trustgrid.ai" className="hover:text-blue-400 transition-colors tracking-wide">connect@trustgrid.ai</a>
                                            <a href="tel:+6560505235" className="hover:text-blue-400 transition-colors tracking-wide">+65 6050 5235</a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Reveal>

                        {/* India Office */}
                        <Reveal width="100%" delay={0.3}>
                            <Card className="border border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 bg-white/5 backdrop-blur-sm overflow-hidden group rounded-2xl hover:-translate-y-1 h-full">
                                <div className="h-1 bg-green-600 w-full"></div>
                                <CardContent className="p-5 flex flex-col items-center text-center">
                                    <div className="p-3 bg-green-500/20 rounded-xl group-hover:bg-green-600 group-hover:text-white transition-colors mb-6 group-hover:scale-110 duration-300">
                                        <MapPin className="w-8 h-8 text-green-400 group-hover:text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">India Office</h3>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">TRUSTGRID.AI INNNOVATION PVT LTD</p>
                                    <div className="space-y-3 text-slate-300">
                                        <p className="font-medium text-slate-100 text-sm leading-relaxed tracking-wide">
                                            Suite : 32 , 235, BINNAMANGALA,<br />
                                            2nd Floor, 13th Cross Road,<br />
                                            Indira Nagar 2nd Stage, Hoysala Nagar,<br />
                                            Bengaluru – 560038 , India
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Reveal>

                        {/* Mumbai Office */}
                        <Reveal width="100%" delay={0.4}>
                            <Card className="border border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 bg-white/5 backdrop-blur-sm overflow-hidden group rounded-2xl hover:-translate-y-1 h-full">
                                <div className="h-1 bg-orange-600 w-full"></div>
                                <CardContent className="p-5 flex flex-col items-center text-center">
                                    <div className="p-3 bg-orange-500/20 rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-colors mb-6 group-hover:scale-110 duration-300">
                                        <Building2 className="w-8 h-8 text-orange-400 group-hover:text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Mumbai Office</h3>
                                    <div className="space-y-3 text-slate-300">
                                        <p className="font-medium text-slate-100 leading-relaxed tracking-wide">
                                            WeWork, Raheja Platinum,<br />
                                            Road, off Andheri - Kurla Road,<br />
                                            Sag Baug, Marol, Andheri East,<br />
                                            Mumbai, Maharashtra 400059
                                        </p>
                                        <div className="flex flex-col gap-1 text-sm">
                                            <a href="mailto:cs@trustgrid.in" className="hover:text-blue-400 transition-colors tracking-wide">cs@trustgrid.in</a>
                                            <a href="tel:+919513088612" className="hover:text-blue-400 transition-colors tracking-wide">+91 9513088612</a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Reveal>

                        {/* Bangalore Office (WeWork) */}
                        <Reveal width="100%" delay={0.5}>
                            <Card className="border border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 bg-white/5 backdrop-blur-sm overflow-hidden group rounded-2xl hover:-translate-y-1 h-full">
                                <div className="h-1 bg-cyan-600 w-full"></div>
                                <CardContent className="p-5 flex flex-col items-center text-center">
                                    <div className="p-3 bg-cyan-500/20 rounded-xl group-hover:bg-cyan-600 group-hover:text-white transition-colors mb-6 group-hover:scale-110 duration-300">
                                        <Building2 className="w-8 h-8 text-cyan-400 group-hover:text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Bangalore Office</h3>
                                    <div className="space-y-3 text-slate-300">
                                        <p className="font-medium text-slate-100 leading-relaxed tracking-wide">
                                            WeWork, 13th floor, Tin Factory,<br />
                                            Salarpuria Magnificia, 78, Old Madras Rd,<br />
                                            next to KR Puram, Mahadevapura,<br />
                                            Bengaluru, Karnataka 560016
                                        </p>
                                        <div className="flex flex-col gap-1 text-sm">
                                            <a href="mailto:cs@trustgrid.in" className="hover:text-blue-400 transition-colors tracking-wide">cs@trustgrid.in</a>
                                            <a href="tel:+919513088612" className="hover:text-blue-400 transition-colors tracking-wide">+91 9513088612</a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Reveal>
                    </div>

                    {/* Contact Details */}
                    <div id="contact-us" className="max-w-3xl mx-auto scroll-mt-32">
                        <Reveal width="100%" direction="up">
                            <Card className="border border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 bg-white/5 backdrop-blur-sm overflow-hidden group rounded-2xl hover:-translate-y-1">
                                <CardContent className="p-8 flex flex-col md:flex-row items-center justify-around text-center gap-8 md:gap-0">

                                    {/* Email Section */}
                                    <div className="flex flex-col items-center w-full md:w-1/2">
                                        <div className="p-3 bg-green-500/20 rounded-xl mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 group-hover:scale-110">
                                            <Mail className="w-8 h-8 text-green-400 group-hover:text-white" />
                                        </div>
                                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Email Us</h3>
                                        <a href="mailto:connect@trustgrid.ai" className="text-xl font-bold text-white hover:text-blue-400 transition-colors tracking-tight">connect@trustgrid.ai</a>
                                    </div>

                                    {/* Divider */}
                                    <div className="hidden md:block w-px h-24 bg-white/10"></div>

                                    {/* Phone Section */}
                                    <div className="flex flex-col items-center w-full md:w-1/2">
                                        <div className="p-3 bg-indigo-500/20 rounded-xl mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 group-hover:scale-110">
                                            <Phone className="w-8 h-8 text-indigo-400 group-hover:text-white" />
                                        </div>
                                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Call Us</h3>
                                        <div className="flex flex-col gap-1 items-center">
                                            <a href="tel:+919513288612" className="text-xl font-bold text-white hover:text-blue-400 transition-colors tracking-tight">+91 9513288612</a>
                                            <a href="tel:+6560505235" className="text-lg font-medium text-slate-400 hover:text-blue-400 transition-colors tracking-tight">+65 6050 5235</a>
                                        </div>
                                    </div>

                                </CardContent>
                            </Card>
                        </Reveal>
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
                            <Reveal width="100%" direction="up">
                                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Build Your Predictable Revenue Engine</h2>
                                <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto font-medium">
                                    Talk to our revenue experts and see how TrustGrid AI can scale your pipeline and ARR.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link to="/book-demo">
                                        <Button className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-5 h-auto font-bold shadow-lg rounded-full">
                                            Book a Demo
                                        </Button>
                                    </Link>
                                    <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-5 h-auto backdrop-blur-sm rounded-full">
                                        Talk to a Revenue Expert
                                    </Button>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
