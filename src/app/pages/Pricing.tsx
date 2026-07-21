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
        <div className="bg-slate-50 min-h-screen pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Reveal>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                            Pricing Aligned to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Revenue Growth</span>
                        </h1>
                        <p className="text-xl text-slate-600">
                            Estimate your hidden revenue and brand amplification potential in 30 seconds.
                        </p>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tiers.map((tier, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className={`h-full rounded-2xl bg-white border ${tier.highlight ? 'border-blue-500 shadow-xl shadow-blue-500/10' : 'border-slate-200 shadow-lg'} p-8 relative flex flex-col`}>
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

                <div className="mt-24 max-w-3xl mx-auto bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
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
        </div>
    );
}
