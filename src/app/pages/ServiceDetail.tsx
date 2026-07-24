import { useParams, Navigate, Link } from 'react-router-dom';
import { servicesData } from '../../data/navigationContent';
import { ArrowRight, CheckCircle, ChevronRight, Zap, Shield, Rocket } from 'lucide-react';
import { useEffect } from 'react';

function generateFallbackData(slug: string) {
    let category = "Capabilities";
    const path = window.location.pathname;
    if (path.includes('/solutions/')) category = "Solutions";
    else if (path.includes('/partners/')) category = "Partners";
    else if (path.includes('/company/')) category = "Company";
    else if (path.includes('/crypto/')) category = "Crypto";

    const title = slug
        .split('-')
        .map(word => {
            if (word === 'ai') return 'AI';
            if (word === 'mvp') return 'MVP';
            if (word === 'gtm') return 'GTM';
            if (word === 'sdr') return 'SDR';
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');

    return {
        title,
        category,
        heroDescription: `${title} provides enterprise-grade strategic intelligence and execution systems. Designed for accelerated outcomes and seamless operations.`,
        features: [
            {
                title: "Strategic Design & Optimization",
                description: `Architecting robust systems tailored for ${title} needs, ensuring high performance, zero downtime, and standard compliance.`,
                desc: "High-performance custom design architectures."
            },
            {
                title: "Autonomous Execution",
                description: `Deploying state-of-the-art automated pipelines and intelligent decision loops to scale ${title} without operational overhead.`,
                desc: "Self-correcting workflow execution engines."
            },
            {
                title: "Enterprise Grade Security",
                description: "Protected by end-to-end data encryption, real-time threat intelligence, and continuous compliance guardrails.",
                desc: "Bank-level secure data boundaries."
            }
        ],
        benefits: [
            "Up to 3.5x improvement in end-to-end process speed.",
            "70% reduction in manual errors and execution bottlenecks.",
            "Seamless compatibility with your existing tech stack.",
            "Fully automated tracking and comprehensive report logs."
        ],
        useCases: [
            {
                title: `Automated ${title} Intelligence`,
                description: `Identify patterns and run predictive model simulations to forecast outcomes and mitigate risks proactively.`
            },
            {
                title: "Scale Optimization",
                description: "Dynamically allocate resources based on load spikes and workflow priority queues."
            }
        ],
        spinFramework: {
            situation: `Your teams are using manual coordination and legacy tools to operate ${title} pipelines.`,
            problem: "Siloed data and human errors degrade throughput quality, resulting in margin leaks.",
            implication: "Competitors deploying automated decision layers scale faster and offer lower price-points, threatening your market share.",
            needPayoff: `Implementing an autonomous ${title} platform eliminates bottlenecks and increases operational velocity immediately.`
        },
        projectLifecycle: [
            { step: "Audit & Analysis", desc: "Map and benchmark your current operational flows." },
            { step: "Integration Setup", desc: `Connect our AI agents to your existing ${title} systems.` },
            { step: "Data Validation", desc: "Run parallel simulation models to verify data integrity." },
            { step: "Scale & Monitor", desc: "Full automation activation with real-time analytics." }
        ],
        faqs: [
            {
                question: `How long does it take to integrate ${title}?`,
                answer: "Most enterprise integrations are fully operational within 2 to 4 weeks, depending on legacy system complexity."
            },
            {
                question: "Is our business data securely handled?",
                answer: "Yes, we adhere to GDPR and SOC2 compliance. All business telemetry is encrypted in transit and at rest."
            }
        ]
    };
}

export default function ServiceDetail() {
    const { slug } = useParams<{ slug: string }>();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!slug) {
        return <Navigate to="/" replace />;
    }

    const data = servicesData[slug] || generateFallbackData(slug);

    return (
        <div className="pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
            {/* Breadcrumbs */}
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 mb-8">
                <div className="flex items-center text-sm text-slate-500 font-medium">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="text-slate-400">{data.category}</span>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="text-blue-600 font-bold">{data.title}</span>
                </div>
            </div>

            {/* Hero Section */}
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 mb-20 lg:mb-32">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            {data.category}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 font-heading leading-[1.1]">
                            {data.title}
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 font-medium mb-8 leading-relaxed max-w-2xl">
                            {data.heroDescription}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/book-consultation" className="btn-cta-primary min-h-[56px] text-base group inline-flex items-center justify-center gap-2">
                                Discuss Your Project
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
                        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-premium h-full min-h-[400px] flex flex-col justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-grid-slate-100/[0.2] bg-[size:20px_20px]"></div>
                            
                            <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 mix-blend-multiply group-hover:bg-blue-100 transition-colors duration-700"></div>
                            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-60 mix-blend-multiply group-hover:bg-indigo-100 transition-colors duration-700"></div>

                            <div className="relative z-10 w-full">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8">
                                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30 flex-shrink-0">
                                        <Rocket className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">{data.title}</h3>
                                        <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mt-1">Enterprise Grade Architecture</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {data.features?.slice(0, 4).map((feature: any, i: number) => (
                                        <div key={i} className="bg-white/80 backdrop-blur-md border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-blue-100 transition-all duration-300">
                                            <div className="flex items-start gap-3">
                                                <div className="mt-0.5 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                                                    <CheckCircle className="w-4 h-4 animate-in fade-in zoom-in duration-300" />
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-bold text-slate-900 mb-1 leading-tight">{feature.title}</h4>
                                                    <p className="text-xs text-slate-500 font-medium line-clamp-2 leading-relaxed">{feature.desc || feature.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features & Benefits */}
            <div className="bg-slate-50 border-y border-slate-100 py-20 lg:py-32">
                <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 font-heading">Key Capabilities</h2>
                        <p className="text-lg text-slate-600 font-medium">Discover how our targeted approach to {data.title} can transform your operations.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-24">
                        {data.features.map((feature, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-premium transition-all duration-300 group">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    {idx === 0 ? <Zap className="w-6 h-6" /> : idx === 1 ? <Rocket className="w-6 h-6" /> : <Shield className="w-6 h-6" />}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Benefits Grid */}
                    <div className="bg-white rounded-3xl border border-slate-200 p-8 lg:p-12 shadow-sm">
                        <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Business Benefits</h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {data.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="mt-1">
                                        <CheckCircle className="w-6 h-6 text-green-500" />
                                    </div>
                                    <p className="text-slate-700 font-bold text-lg">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* SPIN Framework Section */}
            {data.spinFramework && (
                <div className="bg-slate-900 text-white py-20 lg:py-32 border-y border-slate-800">
                    <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading">The SPIN Framework</h2>
                            <p className="text-lg text-slate-400 font-medium">How we diagnose and resolve operational constraints.</p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-750">
                                <div className="text-blue-500 font-bold text-lg mb-3 uppercase tracking-wider">Situation</div>
                                <p className="text-slate-300 font-medium text-sm leading-relaxed">{data.spinFramework.situation}</p>
                            </div>
                            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-750">
                                <div className="text-amber-500 font-bold text-lg mb-3 uppercase tracking-wider">Problem</div>
                                <p className="text-slate-300 font-medium text-sm leading-relaxed">{data.spinFramework.problem}</p>
                            </div>
                            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-750">
                                <div className="text-red-500 font-bold text-lg mb-3 uppercase tracking-wider">Implication</div>
                                <p className="text-slate-300 font-medium text-sm leading-relaxed">{data.spinFramework.implication}</p>
                            </div>
                            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-750">
                                <div className="text-emerald-500 font-bold text-lg mb-3 uppercase tracking-wider">Need-Payoff</div>
                                <p className="text-slate-300 font-medium text-sm leading-relaxed">{data.spinFramework.needPayoff}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Conditional: Use Cases */}
            {data.useCases && (
                <div className="py-20 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
                    <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center font-heading">Key Use Cases</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {data.useCases.map((uc, i) => (
                            <div key={i} className="p-8 border border-slate-200 rounded-2xl bg-white shadow-sm hover:border-blue-300 transition-colors">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{uc.title}</h3>
                                <p className="text-slate-600 font-medium">{uc.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Conditional: Service Models & Project Lifecycle (Process Flow) */}
            {(data.serviceModels || data.projectLifecycle) && (
                <div className="py-20 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 bg-slate-50/50 border-y border-slate-100">
                    {data.serviceModels && (
                        <div className="mb-24">
                            <h2 className="text-3xl font-bold mb-12 text-slate-900 text-center font-heading">Engagement Models</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {data.serviceModels.map((model: any, i: number) => (
                                    <div key={i} className="p-8 border-2 border-slate-100 hover:border-blue-500 rounded-2xl transition-colors bg-white">
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">{model.title}</h3>
                                        <p className="text-slate-600 font-medium">{model.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {data.projectLifecycle && (
                        <div>
                            <h2 className="text-3xl font-bold mb-12 text-slate-900 text-center font-heading">Our Delivery Methodology</h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {data.projectLifecycle.map((step: any, i: number) => (
                                    <div key={i} className="relative p-6 bg-white rounded-2xl border border-slate-200">
                                        <div className="text-4xl font-black text-slate-200 mb-4 font-heading">0{i+1}</div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{step.step}</h3>
                                        <p className="text-slate-600 text-sm font-medium">{step.desc || step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* FAQs */}
            <div className="py-20 lg:py-32 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center font-heading">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {data.faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 hover:border-blue-200 transition-colors">
                                <h4 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h4>
                                <p className="text-slate-600 font-medium leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 text-white py-20 lg:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
                <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 font-heading">Ready to Accelerate Your GTM Operations?</h2>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 font-medium">
                        Speak with our enterprise architects to run diagnostic models and map your revenue leakages.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/book-consultation" className="bg-white hover:bg-slate-50 text-blue-600 px-8 py-4 rounded-xl font-bold transition-all text-base shadow-lg">
                            Get Started Now
                        </Link>
                        <Link to="/talk-to-expert" className="bg-blue-700 hover:bg-blue-800 text-white border border-blue-500 px-8 py-4 rounded-xl font-bold transition-all text-base">
                            Speak with an Expert
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
