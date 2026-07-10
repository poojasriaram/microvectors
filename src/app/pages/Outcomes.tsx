import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    TrendingUp,
    Zap,
    BarChart3,
    Clock,
    DollarSign,
    CheckCircle2,
    ArrowRight,
    Target,
    Users,
    Rocket
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardFooter } from '../components/ui/card';
import OutcomeBlock from '../components/OutcomeBlock';
import { salesAccelerationContent, growthEnginesContent } from '../../data/outcomesContent';
import { Reveal } from '../components/ui/Reveal';

export default function Outcomes() {
    const location = useLocation();
    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    const backgroundSlides = [
        "/banner_1_hero_1783665435895.png", // Business Architecture
        "/banner_2_team_1783665445984.png", // Team Collaboration
        "/banner_3_ecosystem_1783665456490.png", // Data Analytics
        "/banner_4_platform_1783665466764.png"  // Growth
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBgIndex((prev) => (prev + 1) % backgroundSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

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

    return (
        <div className="min-h-screen bg-white text-slate-900">
            {/* Hero Section with Moving Backgrounds */}
            <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
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

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal width="100%">
                        <div className="text-center max-w-4xl mx-auto">
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
                                Real Business Outcomes <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 drop-shadow-sm">Powered by AI Revenue Acceleration</span>
                            </h1>
                            <p className="text-xl sm:text-2xl text-slate-600 mb-10 font-medium leading-relaxed max-w-3xl mx-auto">
                                See how TrustGrid AI helps enterprises accelerate pipeline, close deals faster, reduce costs, and scale revenue with predictable growth.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-5 justify-center">
                                <Link to="/book-consultation">
                                    <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-7 h-auto shadow-[0_10px_30px_rgba(37,99,235,0.2)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)] transition-all rounded-full font-bold">
                                        Book for Consultation
                                    </Button>
                                </Link>
                                <Link to="/talk-to-expert">
                                    <Button variant="outline" className="text-lg px-8 py-7 h-auto bg-white/50 border-slate-200 text-slate-600 hover:bg-white hover:text-slate-900 hover:border-slate-300 rounded-full font-medium backdrop-blur-sm shadow-sm transition-all">
                                        Talk to a Revenue Expert
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Section 1: Revenue Impact Overview */}
            <div className="bg-slate-50 py-20 border-y border-slate-200 mb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal width="100%">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Proven Revenue Results Across Industries</h2>
                            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium">
                                TrustGrid AI delivers measurable, boardroom-ready outcomes for modern revenue teams. Our AI-powered revenue acceleration platform helps enterprises build predictable pipelines, increase deal velocity, and drive compounding ARR growth.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: "24×", label: "Increase in high-quality leads", icon: <Target className="w-6 h-6 text-blue-600" /> },
                            { value: "3×", label: "Improvement in conversion rates", icon: <TrendingUp className="w-6 h-6 text-green-600" /> },
                            { value: "50%", label: "Reduction in sales cycle", icon: <Clock className="w-6 h-6 text-purple-600" /> },
                            { value: "6×", label: "Increase in startup valuation", icon: <DollarSign className="w-6 h-6 text-yellow-500" /> },
                            { value: "65%", label: "Reduction in cost of sales", icon: <BarChart3 className="w-6 h-6 text-red-500" /> },
                            { value: "80%", label: "Of SQLs auto-generated by AI", icon: <Zap className="w-6 h-6 text-amber-500" /> },
                            { value: "5×", label: "Increase in revenue velocity", icon: <Rocket className="w-6 h-6 text-indigo-600" /> },
                        ].map((stat, index) => (
                            <Reveal key={index} width="100%" delay={index * 0.1}>
                                <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:shadow-blue-500/10 transition-all hover:-translate-y-1 h-full">
                                    <div className="mb-3 p-3 bg-slate-50 rounded-full shadow-sm">{stat.icon}</div>
                                    <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                                    <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">{stat.label}</div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>

            {/* AI-Powered Growth & Revenue Engines Section */}
            <div className="bg-white pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                    <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-sm uppercase tracking-wider border border-blue-100 mb-4 inline-block">
                        AI Growth Architecture
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        AI-Powered Growth & Revenue Engines
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                        A closed-loop growth system transforming fragmented GTM efforts into predictable, scalable revenue engines.
                    </p>
                </div>
                <div>
                    {growthEnginesContent.map((block, index) => (
                        <div key={index} id={block.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="scroll-mt-32">
                            <OutcomeBlock data={block} index={index} />
                        </div>
                    ))}
                </div>
            </div>

            {/* AI-Driven Sales Acceleration Section */}
            <div className="bg-white pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                    <span className="px-4 py-2 rounded-full bg-purple-50 text-purple-700 font-bold text-sm uppercase tracking-wider border border-purple-100 mb-4 inline-block">
                        Sales Acceleration
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        AI-Driven Sales Acceleration
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                        Transforming sales from effort-driven execution into outcome-driven growth across enterprise, digital, and high-velocity models.
                    </p>
                </div>
                <div>
                    {salesAccelerationContent.map((block, index) => (
                        <div key={index} id={block.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="scroll-mt-32">
                            <OutcomeBlock data={block} index={index} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 2: Customer Success Stories */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <Reveal width="100%">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Customer Success Stories</h2>
                </Reveal>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Case Study 1 */}
                    <Reveal width="100%" delay={0.1}>
                        <Card className="flex flex-col h-full border-slate-200 bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all">
                            <CardHeader className="bg-slate-50 border-b border-slate-100 pb-6 rounded-t-xl">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900">TalentVector.AI</h3>
                                        <p className="text-slate-500 font-medium">AI & Talent Intelligence</p>
                                    </div>
                                    <div className="bg-blue-50 p-2 rounded-lg border border-blue-100">
                                        <Users className="w-6 h-6 text-blue-600" />
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-6 flex-grow space-y-6">
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wider">Challenge</h4>
                                    <p className="text-slate-600 font-medium">Scaling lead generation and improving conversion efficiency in a competitive enterprise AI market.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wider">Solution</h4>
                                    <p className="text-slate-600 font-medium">Implemented TrustGrid AI’s AI-driven sales acceleration and demand generation platform.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider">Results</h4>
                                    <ul className="space-y-2">
                                        {[
                                            "24× increase in high-quality leads",
                                            "3× increase in conversion rate",
                                            "50% faster sales cycle",
                                            "6× increase in company valuation",
                                            "Significant growth in revenue and profitability"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                                <span className="text-slate-700 text-sm font-semibold">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                            <CardFooter className="pt-2 pb-6 border-t border-slate-100 bg-slate-50 mt-auto rounded-b-xl">
                                <Button variant="ghost" className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-bold flex items-center justify-center gap-2">
                                    View Case Study <ArrowRight className="w-4 h-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    </Reveal>

                    {/* Case Study 2 */}
                    <Reveal width="100%" delay={0.2}>
                        <Card className="flex flex-col h-full border-slate-200 bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all">
                            <CardHeader className="bg-slate-50 border-b border-slate-100 pb-6 rounded-t-xl">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900">EPSUNSOL</h3>
                                        <p className="text-slate-500 font-medium">Solar & Wind Energy</p>
                                    </div>
                                    <div className="bg-green-50 p-2 rounded-lg border border-green-100">
                                        <Zap className="w-6 h-6 text-green-600" />
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-6 flex-grow space-y-6">
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wider">Challenge</h4>
                                    <p className="text-slate-600 font-medium">High sales cost and inefficient lead qualification.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wider">Solution</h4>
                                    <p className="text-slate-600 font-medium">Implemented TrustGrid AI’s sales automation and AI demand generation engine.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider">Results</h4>
                                    <ul className="space-y-2">
                                        {[
                                            "65% reduction in cost of sales",
                                            "80% of SQLs auto-generated using TrustGrid AI",
                                            "Faster deal velocity and improved sales efficiency"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                                <span className="text-slate-700 text-sm font-semibold">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                            <CardFooter className="pt-2 pb-6 border-t border-slate-100 bg-slate-50 mt-auto rounded-b-xl">
                                <Button variant="ghost" className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-bold flex items-center justify-center gap-2">
                                    View Case Study <ArrowRight className="w-4 h-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    </Reveal>
                </div>
            </div>

            {/* Section 3: Platform-Level Outcomes */}
            <div className="bg-slate-900 py-20 mb-20 text-white border-y border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal width="100%">
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">Platform-Wide Business Impact</h2>
                    </Reveal>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {[
                            { value: "2×–5×", label: "Pipeline Growth" },
                            { value: "40%–120%", label: "Revenue Growth" },
                            { value: "25%–50%", label: "Lower CAC" },
                            { value: "30%–50%", label: "Faster Sales Cycles" },
                            { value: "120%+", label: "Net Revenue Retention" },
                            { value: "90%+", label: "Forecast Accuracy" },
                        ].map((stat, index) => (
                            <Reveal key={index} width="100%" delay={index * 0.1}>
                                <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors text-center group hover:shadow-lg hover:shadow-blue-500/10 h-full">
                                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">{stat.value}</div>
                                    <div className="text-slate-300 font-semibold">{stat.label}</div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section 4: Why Enterprises Choose TrustGrid AI */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
                <Reveal width="100%">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10">Built for Predictable, Scalable Growth</h2>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-left p-8 bg-white rounded-2xl shadow-xl border border-slate-200">
                        {[
                            "Unified AI Revenue Platform",
                            "Enterprise-grade security and scalability",
                            "Plug-and-play with existing CRM and marketing stacks",
                            "Rapid deployment",
                            "Proven enterprise revenue impact"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="bg-green-100 p-1 rounded-full flex-shrink-0">
                                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                                </div>
                                <span className="text-lg text-slate-700 font-semibold">{item}</span>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>


            {/* Section 5: Call To Action */}
            <div className="text-center max-w-4xl mx-auto px-4 pb-20">
                <Reveal width="100%">
                    <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden border border-white/10">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Build Your Predictable Revenue Engine with TrustGrid AI</h2>
                            <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto font-medium">
                                Whether you're scaling from $1M to $100M ARR or optimizing a complex enterprise revenue motion, TrustGrid AI gives you the intelligence, automation, and execution power to win.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Link to="/book-consultation" className="w-full sm:w-auto">
                                    <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 h-auto text-lg w-full sm:w-auto font-bold shadow-lg">
                                        Book for Consultation
                                    </Button>
                                </Link>
                                <Link to="/talk-to-expert" className="w-full sm:w-auto">
                                    <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-6 h-auto text-lg w-full sm:w-auto backdrop-blur-sm">
                                        Talk to a Revenue Expert
                                    </Button>
                                </Link>
                            </div>
                            <div className="mt-8">
                                <a href="#" className="inline-flex items-center text-blue-100 font-semibold hover:text-white transition-colors">
                                    Start Your AI Revenue Journey <ArrowRight className="ml-2 w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}
