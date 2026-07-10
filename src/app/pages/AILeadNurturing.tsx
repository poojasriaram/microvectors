
import { useEffect } from 'react';
import { Button } from '../components/ui/button';
import { HeartHandshake, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AILeadNurturing() {
    useEffect(() => {
        document.title = "AI Lead Nurturing | TrustGrid AI";
        window.scrollTo(0, 0);
    }, []);

    const features = [
        "Automated Follow-ups",
        "Personalized Content Delivery",
        "Behavior-Based Triggers",
        "Lead Scoring & Prioritization",
        "Omnichannel Engagement",
        "Sentiment Analysis"
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            {/* Hero Section */}
            <section className="relative min-h-[800px] flex items-center justify-center overflow-hidden bg-slate-900">
                {/* Background Slideshow */}
                <div className="absolute inset-0 z-0">
                    <style>{`
                        @keyframes fadeZoom {
                            0% { opacity: 0; transform: scale(1); }
                            5% { opacity: 1; transform: scale(1.05); }
                            20% { opacity: 1; transform: scale(1.1); }
                            25% { opacity: 0; transform: scale(1.15); }
                            100% { opacity: 0; transform: scale(1); }
                        }
                        .animate-slide-1 { animation: fadeZoom 25s infinite 0s; }
                        .animate-slide-2 { animation: fadeZoom 25s infinite 5s; }
                        .animate-slide-3 { animation: fadeZoom 25s infinite 10s; }
                        .animate-slide-4 { animation: fadeZoom 25s infinite 15s; }
                        .animate-slide-5 { animation: fadeZoom 25s infinite 20s; }
                    `}</style>

                    {[
                        "/banner_1_hero_1783665435895.webp",
                        "/banner_2_team_1783665445984.webp",
                        "/banner_3_ecosystem_1783665456490.webp",
                        "/banner_4_platform_1783665466764.webp",
                        "/banner_1_hero_1783665435895.webp"
                    ].map((img, idx) => (
                        <div
                            key={idx}
                            className={`absolute inset-0 bg-cover bg-center opacity-0 animate-slide-${idx + 1}`}
                            style={{ backgroundImage: `url(${img})` }}
                        />
                    ))}

                    <div className="absolute inset-0 bg-white/30 bg-gradient-to-b from-white/80 via-white/20 to-white/80"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 pt-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100/60 shadow-[0_2px_10px_-4px_rgba(59,130,246,0.3)] text-blue-700 text-sm font-bold mb-8 backdrop-blur-sm animate-fade-in-up">
                        <HeartHandshake className="w-4 h-4 text-blue-600" />
                        <span className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">Relationship Intelligence</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1] text-slate-900 drop-shadow-sm">
                        Turn Cold Prospects into <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                            Updates & Loyal Advocates
                        </span>
                    </h1>

                    <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                        Keep your brand top-of-mind with intelligent, automated nurturing sequences. Build trust and guide prospects through their buying journey effortlessly.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <Link to="/book-consultation">
                            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-6 text-lg h-auto rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:-translate-y-1">
                                Start Nurturing
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Always On, Always Relevant</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Our AI ensures you never miss a touchpoint, delivering the right message at the right time.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature}</h3>
                                <p className="text-slate-600">Engage your audience with hyper-personalized content strategies that drive conversion and retention.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl font-bold mb-6">Build Lasting Relationships</h2>
                    <p className="text-xl text-blue-100 mb-10">Transform transactional interactions into long-term partnerships. Let AI manage the journey from awareness to advocacy.</p>
                    <Link to="/book-consultation">
                        <Button className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-4 h-auto rounded-full font-bold">
                            Book for Consultation
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
