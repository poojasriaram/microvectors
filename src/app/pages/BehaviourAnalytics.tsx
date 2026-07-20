import { useEffect } from 'react';
import { Button } from '../components/ui/button';
import { 
    TrendingUp, 
    ArrowRight, 
    MessageSquare, 
    MousePointer2, 
    Activity, 
    Globe, 
    Users, 
    FileText, 
    BarChart3 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BehaviourAnalytics() {
    useEffect(() => {
        document.title = "Behaviour Analytics | TrustGrid AI";
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            title: "Chatbot Leads Intelligence",
            icon: MessageSquare,
            description: "Autonomous lead capture with real-time intent detection and lead scoring.",
            points: [
                "Intent Detection (Demo, Pricing, Support)",
                "Lead Scoring (Hot, Warm, Cold)",
                "Conversation Summary Generation",
                "Automated Admin Notifications"
            ],
            color: "blue"
        },
        {
            title: "Engagement Metrics",
            icon: MousePointer2,
            description: "Go beyond page views with granular interaction tracking and depth analysis.",
            points: [
                "Average Scroll Depth Tracking",
                "Interaction Count per Session",
                "Bounce Rate Scrutiny",
                "Form Completion vs Abandonment"
            ],
            color: "purple"
        },
        {
            title: "Behavioural Metrics",
            icon: Activity,
            description: "Map the digital body language of your visitors to identify high-intent segments.",
            points: [
                "Rage Click & Inactivity Detection",
                "User Segment Classification",
                "Device & Browser Performance Mapping",
                "Entry/Exit Page Analysis"
            ],
            color: "indigo"
        },
        {
            title: "Traffic Analytics",
            icon: Globe,
            description: "Holistic view of where your revenue-ready demand is coming from.",
            points: [
                "Traffic Source Attribution",
                "UTM Campaign ROI Tracking",
                "Referring Domain Analysis",
                "Geo-Location (Country/City) Density"
            ],
            color: "cyan"
        },
        {
            title: "User Behaviour Library",
            icon: Users,
            description: "Aggregated user-level behavioral profiles for a 360° view of individual journeys.",
            points: [
                "Historical Event Aggregation",
                "Session Lifecycle Tracking",
                "Segment History Retention",
                "Cross-Device Identity Resolution"
            ],
            color: "blue"
        },
        {
            title: "Automated Reporting System",
            icon: FileText,
            description: "Daily and weekly intelligence summaries delivered straight to your team.",
            points: [
                "Daily Traffic & Session Reports",
                "Weekly Top Page & Conversion Summaries",
                "Full Analytics Dashboard Refresh",
                "Cron Execution & System Logging"
            ],
            color: "purple"
        }
    ];

    const trends = [
        { label: "Daily Traffic Trend", desc: "Line chart visualization of sessions, unique IPs, and page views over time." },
        { label: "Weekly Comparison", desc: "Side-by-side growth analytics comparing session counts across weeks." },
        { label: "Traffic Source Breakdown", desc: "Pie chart distribution of Direct, Organic, Social, and Campaign traffic." },
        { label: "Cron Trigger Execution Log", desc: "Live audit trail of all automated analytics processing tasks." }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
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
                    `}</style>

                    {[
                        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80",
                        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80",
                        "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=1920&q=80"
                    ].map((img, idx) => (
                        <div
                            key={idx}
                            className={`absolute inset-0 bg-cover bg-center opacity-0 animate-slide-${idx + 1}`}
                            
                        />
                    ))}
                    <div className="absolute inset-0 bg-white/30 bg-gradient-to-b from-white/80 via-white/20 to-white/80"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 pt-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100/60 shadow-[0_2px_10px_-4px_rgba(59,130,246,0.3)] text-blue-700 text-sm font-bold mb-8 backdrop-blur-sm">
                        <BarChart3 className="w-4 h-4 text-blue-600" />
                        <span className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent uppercase tracking-wider font-bold">Intelligence Module: Behaviour Analytics</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1] text-slate-900">
                        Decode the <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                            Digital Body Language
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-10 leading-relaxed font-semibold">
                        Don't just track clicks. Understand intent. TrustGrid AI maps every interaction to reveal the hidden patterns of your highest-value users.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <Link to="/book-consultation">
                            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-7 text-xl h-auto rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:-translate-y-1 font-bold">
                                Activate Behaviour Engine
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Main Features Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, idx) => {
                            const Icon = feature.icon;
                            return (
                                <div key={idx} className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-slate-900 border-4 border-slate-50 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:rotate-6 transition-all duration-500">
                                            <Icon className="w-9 h-9" />
                                        </div>
                                        <h4 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h4>
                                        <p className="text-slate-600 font-medium mb-8 leading-relaxed italic">
                                            "{feature.description}"
                                        </p>
                                        <div className="space-y-4">
                                            {feature.points.map((p, i) => (
                                                <div key={i} className="flex gap-4 items-start group/flow">
                                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500" />
                                                    <p className="text-slate-700 font-bold text-sm leading-relaxed">{p}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Reporting & Trends Section */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase mb-4">Reports & Trends</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900">Automated Intelligence Sheets</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {trends.map((trend, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-blue-500/10 transition-all group">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h4 className="font-bold text-xl mb-4 text-slate-900">{trend.label}</h4>
                                <p className="text-slate-500 font-medium text-sm leading-relaxed">{trend.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
                <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">Ready to See Your Data Breathe?</h2>
                    <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">Join the high-growth teams using Behaviour Analytics to transform passive visitors into predictive pipeline.</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/book-consultation">
                            <Button className="bg-white hover:bg-blue-50 text-slate-900 text-xl px-12 py-8 h-auto rounded-full font-bold shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3">
                                Start Your Analysis <ArrowRight className="w-6 h-6" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
