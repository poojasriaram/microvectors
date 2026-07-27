import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Target,
    BarChart3,
    Zap,
    Users,
    Workflow,
    Database,
    LineChart,
    ArrowRight,
    CheckCircle2,
    AlertCircle,
    Brain,
    Rocket,
    Shield,
    X,
    
    AlertTriangle,
    TrendingUp
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Reveal } from '../components/ui/Reveal';

export default function Solutions() {
    const location = useLocation();
    
    const [selectedModalSolution, setSelectedModalSolution] = useState<any | null>(null);


    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const sectionParam = params.get('section');
        const hashParam = location.hash ? location.hash.substring(1) : '';
        const rawTarget = sectionParam || hashParam;

        if (rawTarget) {
            const aliasMap: Record<string, string> = {
                'strategy': 'strategy-anchor',
                'sales-ops': 'sales-ops-anchor',
                'intelligence': 'intelligence-anchor',
                'brand-reputation': 'brand-reputation-anchor',
                'ai-business-strategy': 'ai-business-growth-strategy',
                'ai-market-strategy': 'ai-market-strategy-demand-intelligence',
                'growth-hacking': 'ai-driven-growth-hacking-engine',
                'performance-marketing': 'ai-driven-performance-marketing',
                'ai-auto-sales-pilot': 'ai-auto-sales-pilot-autonomous-sales-agents',
                'sales-optimization': 'ai-sales-process-optimization',
                'ai-revenue-operations': 'ai-revenue-operations-ai-revops',
                'ai-revenue-acceleration': 'ai-revenue-acceleration-expansion',
                'revenue-acceleration': 'ai-revenue-acceleration-expansion',
                'ai-demand-discovery': 'ai-market-strategy-demand-intelligence',
                'hidden-revenue-capture': 'ai-revenue-acceleration-expansion',
                'ai-brand-acceleration': 'ai-business-growth-strategy',
                'ai-reputation-acceleration': 'ai-sales-process-optimization'
            };

            const targetId = aliasMap[rawTarget.toLowerCase()] || rawTarget.toLowerCase().replace(/[^a-z0-9]+/g, '-');

            if (['strategy', 'sales-ops', 'intelligence', 'brand-reputation'].includes(rawTarget.toLowerCase())) {
                // Category setting removed
            }

            setTimeout(() => {
                const element = document.getElementById(targetId) || document.getElementById(rawTarget);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, [location.search, location.hash]);

    const solutions = [
        {
            title: "AI Business Growth Strategy",
            tagline: "Design a predictable, scalable, AI-powered revenue engine for your entire organization.",
            icon: Target,
            details: {
                situations: ["Growth depends on founders or a few key leaders", "Revenue targets are consistently missed", "Expansion into new markets feels risky", "No clarity on which segment to prioritize"],
                challenges: ["No unified growth narrative", "Fragmented leadership execution", "No market prioritization framework", "Siloed KPIs and reporting"],
                offerings: ["AI models ICPs, market demand, product-market fit, competitive positioning, and revenue performance to design a complete growth operating system."],
                outcomes: ["Revenue predictability ↑", "Execution velocity ↑", "CAC ↓ 30–50%", "LTV ↑ 2–4×", "Expansion success rate ↑", "Market penetration ↑"],
                benefits: ["Executive growth clarity", "AI-backed expansion decisions", "Predictable revenue planning", "Unified GTM execution"],
                problemKpis: ["Revenue volatility & missed targets", "Founder-dependent growth execution", "High CAC and declining margins", "Disconnected GTM motions", "Failed market expansions", "No scalable growth blueprint"]
            }
        },
        {
            title: "AI Market Strategy & Demand Intelligence",
            tagline: "Turn real market demand into revenue certainty.",
            icon: Brain,
            details: {
                situations: ["Inbound demand is weak", "No clarity on where real demand exists", "GTM decisions are based on assumptions", "Pricing is guesswork"],
                challenges: ["No visibility into buyer intent", "Poor ICP definition", "Inaccurate TAM/SAM/SOM", "No competitive demand mapping"],
                offerings: ["AI demand intelligence platform that decodes buyer intent, competitive traction, and market signals to drive smarter GTM decisions, pricing, positioning, and acquisition strategy."],
                outcomes: ["Lead velocity ↑ 247%", "SQL quality ↑ 3×", "Cost per lead ↓ 45%", "Time-to-PMF ↓ 60%", "Win rate ↑"],
                benefits: ["Demand clarity", "Market-backed ICP definition", "Predictive GTM strategy", "Confident pricing decisions"],
                problemKpis: ["Weak inbound pipeline", "Poor ICP targeting", "Low MQL → SQL conversion", "Slow product-market fit", "Ineffective positioning"]
            }
        },
        {
            title: "AI-Driven Growth Hacking Engine",
            tagline: "Launch faster. Learn faster. Scale smarter.",
            icon: Rocket,
            details: {
                situations: ["Growth has plateaued", "Marketing channels are saturated", "Acquisition costs are rising"],
                challenges: ["Manual experimentation", "No learning system", "No repeatable playbooks"],
                offerings: ["Self-learning AI growth engine that continuously generates growth hypotheses, runs experiments, optimizes funnels, and scales winning growth loops."],
                outcomes: ["Experiment velocity ↑ 5×", "Funnel conversion ↑ 2–4×", "Viral coefficient ↑", "Time-to-scale ↓"],
                benefits: ["Always-on experimentation", "Rapid learning cycles", "Compounding growth loops"],
                problemKpis: ["Growth stagnation", "Slow experimentation cycles", "Poor funnel conversion", "No viral or referral loops"]
            }
        },
        {
            title: "AI-Driven Performance Marketing",
            tagline: "Turn every marketing dollar into measurable growth.",
            icon: BarChart3,
            details: {
                situations: ["Paid marketing costs are rising", "ROI is unclear", "Attribution is broken"],
                challenges: ["Channel inefficiencies", "Creative fatigue", "Poor targeting"],
                offerings: ["Predictive AI marketing engine that reallocates spend in real time, optimizes creatives, and maximizes ROI across channels."],
                outcomes: ["CAC ↓ 35–60%", "ROAS ↑ 2–5×", "Conversion rate ↑", "Spend efficiency ↑"],
                benefits: ["Smart budget allocation", "High-performing creatives", "Predictable CAC"],
                problemKpis: ["Rising CAC", "Low ROAS", "Poor attribution", "Inefficient spend"]
            }
        },
        {
            title: "AI Auto Sales Pilot (Autonomous Sales Agents)",
            tagline: "Your best SDR, working 24/7.",
            icon: Users,
            details: {
                situations: ["Leads arrive outside business hours", "Reps are overloaded", "High inbound volume"],
                challenges: ["Manual qualification", "Delayed response", "Missed opportunities"],
                offerings: ["Autonomous AI sales agents that qualify, engage, book meetings, and route leads automatically."],
                outcomes: ["Response time < 60 seconds", "Meeting rate ↑ 3×", "Pipeline velocity ↑", "Conversion rate ↑"],
                benefits: ["24/7 selling", "Zero lead leakage", "Higher conversion"],
                problemKpis: ["Slow lead response", "Lead leakage", "Rep burnout", "Low inbound conversion"]
            }
        },
        {
            title: "AI Sales Process Optimization",
            tagline: "Remove friction. Close faster.",
            icon: Workflow,
            details: {
                situations: ["Deals get stuck", "Reps waste time", "Forecasts are unreliable"],
                challenges: ["Manual pipeline management", "No deal intelligence", "Inconsistent execution"],
                offerings: ["AI-powered sales optimization engine that improves every stage of the sales funnel."],
                outcomes: ["Cycle time ↓ 50%", "Win rate ↑ 2–3×", "Forecast accuracy ↑", "Rep productivity ↑"],
                benefits: ["Faster deals", "Higher rep productivity", "Predictable revenue"],
                problemKpis: ["Long sales cycles", "Low close rates", "Poor pipeline hygiene"]
            }
        },
        {
            title: "AI Revenue Operations (AI RevOps)",
            tagline: "One command center for total revenue.",
            icon: Database,
            details: {
                situations: ["No revenue visibility", "Missed forecasts", "Tool sprawl"],
                challenges: ["No single source of truth", "Manual reporting", "Data chaos"],
                offerings: ["Unified AI RevOps platform that consolidates all revenue data into a single intelligence layer."],
                outcomes: ["Forecast accuracy ↑ 95%+", "Revenue leakage ↓ 40%", "ARR predictability ↑"],
                benefits: ["Revenue control", "Executive dashboards", "Predictive insights"],
                problemKpis: ["Revenue leakage", "Poor forecasting", "Siloed data"]
            }
        },
        {
            title: "AI Revenue Acceleration & Expansion",
            tagline: "Grow faster from the customers you already have.",
            icon: LineChart,
            details: {
                situations: ["Customers disengage", "Expansion is reactive"],
                challenges: ["No churn prediction", "No expansion intelligence"],
                offerings: ["AI-powered expansion and retention engine that maximizes customer lifetime value."],
                outcomes: ["Net Revenue Retention ↑ 130%+", "Expansion ARR ↑ 3×", "Churn ↓ 40–60%"],
                benefits: ["Proactive retention", "Smart upsell"],
                problemKpis: ["High churn", "Low expansion revenue", "Poor customer health visibility"]
            }
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section - Compact */}
            <div className="relative pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24 overflow-hidden bg-slate-50 text-slate-900 border-b border-slate-200">
                {/* Background Slideshow */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    {/* Premium Unified Overlay - Matched with AI Lead Gen Visibility */}
                    <div className="absolute inset-0 bg-white/30 bg-gradient-to-b from-white/80 via-white/20 to-white/80" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Reveal width="100%">
                        {(() => {
                            const hash = location.hash.substring(1) || '';
                            const solutionTitleMap: Record<string, { title: string; subtitle: string }> = {
                                'strategy': {
                                    title: "Strategy & Growth Solutions",
                                    subtitle: "Predictive ICP modeling, demand forecasting, growth hacking, and market prioritization engineered for enterprise scaling."
                                },
                                'sales-ops': {
                                    title: "Sales & Operations Solutions",
                                    subtitle: "Autonomous sales pilot execution, RevOps data orchestration, process optimization, and sales velocity acceleration."
                                },
                                'intelligence': {
                                    title: "Demand & Intelligence Solutions",
                                    subtitle: "Intent signal discovery, hidden revenue capture, pre-RFP sensing, and predictive deal intelligence."
                                },
                                'brand-reputation': {
                                    title: "Brand & Reputation Solutions",
                                    subtitle: "AI-driven brand positioning, continuous trust audit acceleration, and automated reputation defense systems."
                                }
                            };

                            const info = solutionTitleMap[hash] || {
                                title: "AI Strategy, Growth & Revenue Solutions",
                                subtitle: "Modular, composable AI revenue systems engineered to automate growth execution across the entire enterprise revenue lifecycle."
                            };

                            return (
                                <>
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                                        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                                        {hash ? `Solution Suite: ${info.title}` : "Enterprise Revenue Architecture"}
                                    </div>
                                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-slate-900 leading-[1.1] font-heading">
                                        {info.title}
                                    </h1>
                                    <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                                        {info.subtitle}
                                    </p>
                                </>
                            );
                        })()}
                    </Reveal>
                </div>
            </div>

            {/* Solutions Grid - Compact & Clean */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
                <div className="flex flex-col gap-8">
                    {solutions.map((solution, index) => {
                        const Icon = solution.icon;
                        const mainId = solution.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                        const aliasMap: Record<number, string[]> = {
                            0: ['strategy', 'strategy-anchor', 'ai-business-strategy', 'ai-brand-acceleration'],
                            1: ['intelligence', 'intelligence-anchor', 'ai-market-strategy', 'ai-demand-discovery'],
                            2: ['growth-hacking'],
                            3: ['performance-marketing'],
                            4: ['sales-ops', 'sales-ops-anchor', 'ai-auto-sales-pilot'],
                            5: ['sales-optimization', 'ai-reputation-acceleration'],
                            6: ['ai-revenue-operations'],
                            7: ['brand-reputation', 'brand-reputation-anchor', 'ai-revenue-acceleration', 'revenue-acceleration', 'hidden-revenue-capture']
                        };
                        const aliases = aliasMap[index] || [];

                        return (
                            <Reveal key={index} width="100%" delay={index * 0.1}>
                                {aliases.map(a => (
                                    <div key={a} id={a} className="scroll-mt-32" />
                                ))}
                                <div id={mainId} className="group relative scroll-mt-32">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-lg">
                                        <div className="flex flex-col lg:flex-row gap-8 items-start">

                                            {/* Header & Icon */}
                                            <div className="lg:w-1/3 space-y-4">
                                                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 group-hover:bg-blue-100 transition-colors">
                                                    <Icon className="w-7 h-7 text-blue-600" />
                                                </div>
                                                <div>
                                                    <div className="text-blue-600 font-bold text-xs mb-1 uppercase tracking-wider">Solution 0{index + 1}</div>
                                                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                                                        {solution.title}
                                                    </h2>
                                                    <p className="text-slate-600 text-base font-medium leading-relaxed italic">
                                                        "{solution.tagline}"
                                                    </p>
                                                </div>

                                                {/* Outcome KPIs */}
                                                {solution.details.outcomes && (
                                                    <div className="p-5 rounded-xl bg-blue-50 border border-blue-100 mt-4">
                                                        <h4 className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                                                            <Zap className="w-3 h-3" /> Outcome KPIs
                                                        </h4>
                                                        <div className="space-y-2">
                                                            {solution.details.outcomes.map((outcome, idx) => (
                                                                <div key={idx} className="flex items-center gap-2">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                                    <span className="text-slate-700 text-sm font-semibold">{outcome}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Detailed Content Grid */}
                                            <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">

                                                {/* Offerings */}
                                                {solution.details.offerings && (
                                                    <div className="space-y-3">
                                                        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                                                            <Shield className="w-4 h-4 text-purple-600" />
                                                            Offering
                                                        </h3>
                                                        <ul className="space-y-2">
                                                            {solution.details.offerings.map((item, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm font-medium leading-relaxed">
                                                                    <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Situations */}
                                                {solution.details.situations && (
                                                    <div className="space-y-3">
                                                        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                                                            <AlertCircle className="w-4 h-4 text-amber-500" />
                                                            Situations
                                                        </h3>
                                                        <ul className="space-y-2">
                                                            {solution.details.situations.map((item, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm font-medium">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Challenges */}
                                                {solution.details.challenges && (
                                                    <div className="space-y-3">
                                                        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                                                            <Target className="w-4 h-4 text-orange-500" />
                                                            Challenges
                                                        </h3>
                                                        <ul className="space-y-2">
                                                            {solution.details.challenges.map((item, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm font-medium">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Benefits */}
                                                {solution.details.benefits && (
                                                    <div className="space-y-3">
                                                        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                                                            <Rocket className="w-4 h-4 text-emerald-600" />
                                                            Benefits
                                                        </h3>
                                                        <ul className="space-y-2">
                                                            {solution.details.benefits.map((item, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm font-medium">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Problem KPIs */}
                                                {solution.details.problemKpis && (
                                                    <div className="space-y-3 md:col-span-2 bg-red-50/50 p-4 rounded-xl border border-red-100">
                                                        <h3 className="text-base font-bold text-red-900 flex items-center gap-2 mb-2">
                                                            <LineChart className="w-4 h-4 text-red-600" />
                                                            KPIs at Risk (Without This Solution)
                                                        </h3>
                                                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                                                            {solution.details.problemKpis.map((item, idx) => (
                                                                <div key={idx} className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                                                    <span>{item}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                                    <button
                                                        onClick={() => setSelectedModalSolution(solution)}
                                                        className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                                                    >
                                                        <span>Explore Solution Specification</span>
                                                        <ArrowRight className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>

            {/* Detailed Solution Specification Modal (Like Offerings) */}
            {selectedModalSolution && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
                    <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
                        <button
                            onClick={() => setSelectedModalSolution(null)}
                            className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex items-center gap-3">
                            <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600">
                                <selectedModalSolution.icon className="w-7 h-7" />
                            </div>
                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Solution Architecture Spec</span>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{selectedModalSolution.title}</h3>
                            </div>
                        </div>

                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                            {selectedModalSolution.tagline}
                        </p>

                        {selectedModalSolution.details.offerings && (
                            <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-100">
                                <h4 className="text-sm font-bold uppercase tracking-wider text-blue-900 mb-2 flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-blue-600" />
                                    Core System Capabilities
                                </h4>
                                <p className="text-sm text-slate-700 font-medium leading-relaxed">
                                    {selectedModalSolution.details.offerings[0]}
                                </p>
                            </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-6">
                            {selectedModalSolution.details.situations && (
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-amber-700 mb-3 flex items-center gap-2">
                                        <AlertTriangle className="w-4 h-4 text-amber-600" />
                                        Common Operational Triggers
                                    </h4>
                                    <ul className="space-y-2">
                                        {selectedModalSolution.details.situations.map((sit: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                                                <span>{sit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {selectedModalSolution.details.outcomes && (
                                <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-200">
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-2">
                                        <TrendingUp className="w-4 h-4 text-emerald-600" />
                                        Verified Target Outcomes
                                    </h4>
                                    <ul className="space-y-2">
                                        {selectedModalSolution.details.outcomes.map((o: string, idx: number) => (
                                            <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-emerald-900">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                                <span>{o}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100">
                            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full flex-1">
                                <Link to="/book-consultation">Deploy {selectedModalSolution.title}</Link>
                            </Button>
                            <Button asChild variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 font-bold px-6 py-3 rounded-full flex-1">
                                <Link to="/talk-to-expert">Talk to Solution Architect</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Section - Compact */}
            <div className="py-20 relative overflow-hidden bg-white border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <Reveal width="100%" direction="up">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                            Ready to Architect Your <br />
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                AI Revenue Engine?
                            </span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto font-medium">
                            Transform your growth trajectory with our modular AI solutions.
                            Start building your future today.
                        </p>
                        <Link to="/book-consultation" className="inline-block">
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 flex items-center gap-3 mx-auto group">
                                Design Your AI Revenue Architecture
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}
