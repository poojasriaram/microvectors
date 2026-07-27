import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Pricing() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const tiers = [
        {
            name: "Starter",
            description: "Demand Discovery & Brand Insights",
            price: "Custom",
            features: [
                "Dynamic ICP Modeling",
                "Demand Pulse Engine",
                "Predictive Lead Scoring",
                "Basic Brand Analytics"
            ]
        },
        {
            name: "Growth",
            description: "Full Autonomous Sales Pilot + Reputation Acceleration",
            price: "Custom",
            features: [
                "All Starter Features",
                "AI Sales Agents (Inbound & Outbound)",
                "Review Sentiment Monitoring",
                "Automated Trust-Signal Generation",
                "Workflow Automation"
            ],
            highlight: true
        },
        {
            name: "Enterprise",
            description: "All Engines + Custom AI Agents for Hidden Revenue Capture",
            price: "Custom",
            features: [
                "All Growth Features",
                "Churn Risk Modeling",
                "Cross-sell/Upsell Engines",
                "Revenue Leakage Audits",
                "Custom AI Agent Development",
                "Dedicated RevOps Architect"
            ]
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-multiply" />
                </div>
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-bold text-slate-700 uppercase tracking-widest mb-8">
                            Pricing Plans
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.05]">
                            Pricing Aligned to{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Revenue Growth</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
                            Estimate your hidden revenue and brand amplification potential in 30 seconds.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-20 lg:py-28 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {tiers.map((tier, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className={`h-full rounded-[20px] bg-white border ${tier.highlight ? 'border-blue-500 shadow-xl shadow-blue-500/10' : 'border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1'} p-7 relative flex flex-col transition-all duration-300`}>
                                {tier.highlight && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                                <p className="text-slate-600 mb-6 h-12">{tier.description}</p>
                                <div className="text-4xl font-black text-slate-900 mb-8">{tier.price}</div>
                                <div className="flex-grow space-y-4 mb-8">
                                    {tier.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                            <span className="text-slate-700 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link to="/book-consultation" className={`w-full py-3 px-4 rounded-xl font-bold text-center transition-all ${tier.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                                    Get Started
                                </Link>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <div className="mt-20 max-w-3xl mx-auto bg-slate-50 rounded-[20px] p-8 border border-slate-200">
                    <Reveal>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Frequently Asked Questions</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-slate-900 mb-2">What kind of ROI can I expect?</h4>
                                <p className="text-slate-600">Our AI typically shortens time-to-pipeline by 60% and lifts win rates by 34% through reputation-boosted engagement.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-2">Do I need to replace my existing CRM?</h4>
                                <p className="text-slate-600">No. MicroVectors integrates seamlessly with Salesforce, HubSpot, and other major platforms to act as an intelligence layer on top of your existing data.</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #3b82f6 0%, transparent 60%), radial-gradient(circle at 70% 50%, #6366f1 0%, transparent 60%)' }} />
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="text-xs font-extrabold text-blue-400 uppercase tracking-widest mb-4">Get Started</div>
                    <h2 className="text-3xl md:text-4xl font-extrabold font-heading mb-6">Ready to Accelerate Revenue?</h2>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">Let's discuss the right plan for your growth stage. No obligation, just clarity.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/book-consultation" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-900/50 hover:-translate-y-0.5 group">
                            Book Consultation
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/talk-to-expert" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200">
                            Talk to an Expert
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
