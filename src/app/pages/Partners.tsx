import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Handshake,
    Zap,
    Users,
    CheckCircle2,
    BarChart3
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export default function Partners() {
    useEffect(() => {
        document.title = "Partners | TrustFlow AI";
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            {/* 1. Hero Section */}
            <section className="relative bg-white text-slate-900 pt-32 pb-24 overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-slate-50 via-white to-white pointer-events-none"></div>
                <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[100px] opacity-60 mix-blend-multiply pointer-events-none animate-pulse-slow"></div>
                <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[100px] opacity-60 mix-blend-multiply pointer-events-none"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100/60 shadow-[0_2px_10px_-4px_rgba(59,130,246,0.3)] text-blue-700 text-sm font-bold mb-8 backdrop-blur-sm animate-fade-in-up">
                        <Handshake className="w-4 h-4 text-blue-600" />
                        <span className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">Partner Program</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1] text-slate-900 drop-shadow-sm">
                        Grow with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">TrustFlow AI</span>
                    </h1>

                    <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                        Join our ecosystem of industry-leading partners. Accelerate your growth by delivering the world's most advanced AI revenue platform to your clients.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <Link to="/contact">
                            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-6 text-lg h-auto rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:-translate-y-1">
                                Become a Partner
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. Why Partner Section */}
            <section className="py-24 bg-slate-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">Why Partner with Us?</h2>
                        <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto">Unlock new revenue streams and deliver exceptional value.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
                                title: "New Revenue Streams",
                                description: "Earn attractive commissions and unlock recurring revenue opportunities through our tiered partner program."
                            },
                            {
                                icon: <Zap className="w-8 h-8 text-purple-600" />,
                                title: "Leading Edge AI",
                                description: "Differentiate yourself by offering the most advanced AI-powered revenue acceleration platform in the market."
                            },
                            {
                                icon: <Users className="w-8 h-8 text-indigo-600" />,
                                title: "Co-Marketing & Support",
                                description: "Access dedicated partner support, co-marketing resources, and sales enablement tools to help you win."
                            }
                        ].map((item, idx) => (
                            <Card key={idx} className="border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                                <CardContent className="p-8">
                                    <div className="p-4 bg-slate-50 rounded-2xl w-fit mb-6 border border-slate-100">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Partner Categories */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">Partner Programs tailored to your business</h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium mb-10">
                                Whether you're a consultancy, technology provider, or agency, we have a program designed for your success.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "Solution Partners", desc: "Consultancies and SIs implementation TrustFlow AI." },
                                    { title: "Technology Partners", desc: "ISVs and Tech platforms integrating with our ecosystem." },
                                    { title: "Referral Partners", desc: "Agencies and individuals referring qualified leads." }
                                ].map((prog, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                        <div className="mt-1">
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center border border-green-200">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-green-700" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900">{prog.title}</h4>
                                            <p className="text-slate-600">{prog.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3 blur-sm opacity-20"></div>
                            <div className="relative bg-slate-900 rounded-2xl p-10 text-white overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[80px] -mr-20 -mt-20"></div>
                                <QuoteIcon className="w-12 h-12 text-blue-400 mb-6 opacity-50" />
                                <blockquote className="text-2xl font-medium leading-relaxed mb-8 relative z-10">
                                    "Partnering with TrustFlow AI has been a game-changer for our agency. We've not only increased our revenue but also deepened our client relationships by delivering tangible ROI."
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-xl font-bold">
                                        JD
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">John Doe</div>
                                        <div className="text-slate-400">CEO, GrowthAgency</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CTA */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-10 md:p-12 text-white shadow-xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Ready to grow together?</h2>
                            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto font-medium">
                                Join the TrustFlow AI partner ecosystem today.
                            </p>
                            <Link to="/contact">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg h-auto rounded-full font-bold shadow-lg shadow-blue-900/50">
                                    Apply Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="none"
        >
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
        </svg>
    );
}
