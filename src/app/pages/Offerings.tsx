import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Check,
    Brain,
    TrendingUp,
    Zap,
    Target,
    BarChart3,
    ShieldCheck,
    Users,
    Workflow,
    Lightbulb,
    Search,
    Rocket,
    Globe,
    AlertTriangle,
    ArrowRight,
    Sparkles,
    Layout
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export default function Offerings() {
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

    const offerings = [
        {
            title: "AI-Powered Sales Intelligence & Execution",
            subtitle: "Close more deals with predictive precision",
            icon: <Zap className="h-6 w-6 text-indigo-600" />,
            challenges: [
                { title: "Deal Stagnation", desc: "Sales teams waste 65% of their time on low-probability deals" },
                { title: "Pipeline Bloat", desc: "Average sales teams have 40% stalled opportunities that never progress" },
                { title: "Forecast Inaccuracy", desc: "72% of sales forecasts miss by more than 25%" },
                { title: "Manual Sales Processes", desc: "Reps spend only 28% of their time actually selling" }
            ],
            kpiPainPoints: [
                "Low win rates (<30%)",
                "Long sales cycles (>90 days)",
                "High discounting (>20% average)",
                "Poor forecast accuracy (<70%)",
                "Low quota attainment (<60%)"
            ],
            solutions: [
                "Predictive Deal Scoring & Opportunity Prioritization – AI identifies winnable deals",
                "Autonomous Sales Orchestration – Automated workflows that adapt in real-time",
                "Conversational AI for Sales – Intelligent engagement across outbound & inbound channels",
                "Quote-to-Cash Automation – Streamlined CPQ, proposals, and contract management",
                "Account Intelligence & Expansion Insights – Data-driven growth strategies for existing customers",
                "Revenue Forecasting & Risk Intelligence – Real-time predictions with actionable insights"
            ],
            outcomes: [
                "4–6× faster sales velocity",
                "30–45% higher win rates",
                "35–50% shorter sales cycles",
                "85%+ forecast accuracy",
                "15% reduction in discounting"
            ]
        },
        {
            title: "Revenue Operations & Intelligence",
            subtitle: "Predictable growth through unified data",
            icon: <Workflow className="h-6 w-6 text-cyan-600" />,
            challenges: [
                { title: "Data Silos", desc: "63% of companies have revenue data spread across 5+ disconnected systems" },
                { title: "Revenue Leakage", desc: "Average B2B company loses 15-25% of potential revenue to process gaps" },
                { title: "Manual Reporting", desc: "RevOps teams spend 12+ hours weekly on manual KPI aggregation" },
                { title: "Forecast Discrepancies", desc: "58% of executives don't trust their revenue forecasts" }
            ],
            kpiPainPoints: [
                "Revenue leakage (>15% of pipeline)",
                "Poor pipeline coverage (<3x quota)",
                "Manual data entry time (>10 hrs/week/rep)",
                "Board confidence score (<6/10)",
                "Mismatched attribution models"
            ],
            solutions: [
                "Unified Revenue Command Center – Cross-functional visibility across marketing, sales, and success",
                "Pipeline Integrity & Leakage Detection – AI identifies and remedies revenue gaps",
                "Sales Performance Intelligence – Personalized coaching recommendations",
                "Board-Ready Analytics – Standardized KPIs and executive dashboards"
            ],
            outcomes: [
                "95%+ forecast accuracy",
                "20–30% reduction in revenue leakage",
                "Enhanced investor confidence with transparent reporting",
                "40% reduction in manual reporting time",
                "Unified attribution across marketing-sales-success"
            ]
        },
        {
            title: "AI-Driven Digital Marketing & Demand Generation",
            subtitle: "Transform awareness into pipeline with precision",
            icon: <Target className="h-6 w-6 text-blue-600" />,
            challenges: [
                { title: "Lead Quality Issues", desc: "61% of marketers send all leads directly to sales, despite 80% being unqualified" },
                { title: "Channel Fragmentation", desc: "Average marketers use 8+ channels with siloed performance data" },
                { title: "Attribution Blindness", desc: "67% of marketing spend cannot be accurately attributed to revenue" },
                { title: "Content Waste", desc: "70% of marketing content goes unused by sales teams" }
            ],
            kpiPainPoints: [
                "High cost per lead (>$500 enterprise B2B)",
                "Low MQL-to-SQL conversion (<13%)",
                "Unattributed pipeline (>40%)",
                "Content utilization rate (<30%)",
                "Campaign ROI unknown or negative"
            ],
            solutions: [
                "Hyper-Personalized Campaign Execution – Dynamic content and channel optimization",
                "Predictive Audience Intelligence – Look-alike modeling and micro-segmentation",
                "Content & SEO Optimization – AI-generated insights for higher visibility",
                "Conversion Rate Intelligence – Real-time funnel optimization",
                "Multi-Channel Attribution – Clear ROI measurement across touchpoints"
            ],
            outcomes: [
                "2–3× improvement in marketing-to-sales conversion",
                "25–35% lower customer acquisition costs",
                "Maximized channel ROI",
                "90%+ attribution accuracy",
                "50% increase in content utilization"
            ]
        },
        {
            title: "Market & Demand Intelligence",
            subtitle: "Discover hidden opportunities before your competitors",
            icon: <Search className="h-6 w-6 text-indigo-600" />,
            challenges: [
                { title: "Market Blind Spots", desc: "73% of companies miss emerging market opportunities until competitors capture them" },
                { title: "Inefficient Targeting", desc: "42% of sales outreach goes to accounts with no active demand" },
                { title: "Competitive Surprises", desc: "56% of competitive losses come from unanticipated competitor moves" },
                { title: "Territory Imbalance", desc: "40% of territories are either over-saturated or under-penetrated" }
            ],
            kpiPainPoints: [
                "Low account penetration (<20% in target accounts)",
                "High competitive loss rates (>35%)",
                "Inefficient territory allocation",
                "Missed market timing (6+ months late to trends)",
                "Poor ICP matching accuracy"
            ],
            solutions: [
                "Demand Signal Intelligence – AI-driven analysis of search, social, web, and intent data",
                "Market White Space Mapping – Uncover underserved segments and emerging trends",
                "Buying Committee Intelligence – Map decision-makers and influence networks",
                "Competitive Intelligence Suite – Share-of-voice tracking and strategic gap analysis"
            ],
            outcomes: [
                "Accelerated entry into high-growth markets (3-6 months faster)",
                "Reduced go-to-market trial-and-error",
                "Precision positioning based on real-time signals",
                "40% higher target account engagement",
                "30% reduction in competitive surprises"
            ]
        },
        {
            title: "Market Validation & Research",
            subtitle: "Launch with confidence using data-driven validation",
            icon: <Lightbulb className="h-6 w-6 text-amber-500" />,
            challenges: [
                { title: "Failed Launches", desc: "75% of new product launches fail to meet revenue expectations" },
                { title: "Pricing Misalignment", desc: "60% of pricing decisions are based on gut feel, not data" },
                { title: "Resource Misdirection", desc: "Companies waste $2.3M annually on products markets don't want" },
                { title: "Feature Waste", desc: "80% of product features are rarely or never used" }
            ],
            kpiPainPoints: [
                "Low launch success rate (<25%)",
                "Pricing optimization cycles (>6 months)",
                "High R&D waste (>30% of budget)",
                "Poor feature adoption rates (<20%)",
                "Slow market insight turnaround (weeks/months)"
            ],
            solutions: [
                "AI-Powered Market Sizing – Dynamic TAM/SAM/SOM analysis",
                "Pricing Intelligence & Elasticity Modeling – Optimal price point identification",
                "Customer Problem & JTBD Analysis – Deep insight into unmet needs",
                "Competitive Benchmarking – Feature, pricing, and positioning comparisons",
                "Automated Research Synthesis – Rapid insight generation from multiple data sources"
            ],
            outcomes: [
                "Reduced launch risk (50% higher success rates)",
                "Higher market entry success rates",
                "Investment decisions backed by predictive analytics",
                "60% faster pricing optimization cycles",
                "40% reduction in R&D waste"
            ]
        },
        {
            title: "Product-Market Fit Validation",
            subtitle: "Validate product viability before scaling resources",
            icon: <Rocket className="h-6 w-6 text-orange-600" />,
            challenges: [
                { title: "Premature Scaling", desc: "70% of startups scale before achieving true PMF, burning cash" },
                { title: "Feedback Overload", desc: "Product teams drown in 1000s of feedback points without prioritization" },
                { title: "Experiment Inefficiency", desc: "60% of A/B tests fail due to poor hypothesis design" },
                { title: "Roadmap Whiplash", desc: "Constant pivots without data-driven decision making" }
            ],
            kpiPainPoints: [
                "High customer acquisition cost (>3x LTV)",
                "Low retention (<30% month 3)",
                "Poor NPS scores (<30)",
                "Slow feature validation cycles (>2 months)",
                "High product rework (>25% of dev time)"
            ],
            solutions: [
                "MVP Experimentation Framework – Structured hypothesis testing with AI analysis",
                "User Behavior & Adoption Analytics – Early signal detection for feature validation",
                "PMF Scoring Models – Quantified product-market fit metrics",
                "Automated Feedback Synthesis – Insights from reviews, support tickets, and user interviews"
            ],
            outcomes: [
                "Faster validation cycles (weeks vs months)",
                "Reduced product rework costs (40% reduction)",
                "Data-informed roadmap prioritization",
                "50% improvement in early retention metrics",
                "Clear go/no-go investment signals"
            ]
        },
        {
            title: "Product Scaling & Growth Intelligence",
            subtitle: "Scale what works, optimize what doesn't",
            icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
            challenges: [
                { title: "Adoption Plateaus", desc: "85% of features see less than 20% adoption after 90 days" },
                { title: "Monetization Gaps", desc: "Companies leave 30-40% of potential revenue on the table" },
                { title: "Retention Leaks", desc: "65% of churn is preventable with early intervention signals" },
                { title: "Roadmap Politics", desc: "Prioritization driven by HiPPOs (Highest Paid Person's Opinion), not data" }
            ],
            kpiPainPoints: [
                "Low feature adoption rates (<20%)",
                "Poor expansion revenue (<15% of ARR)",
                "High churn rates (>10% annual)",
                "Long time-to-value (>90 days)",
                "Low product-led growth contribution"
            ],
            solutions: [
                "Product Usage Intelligence – Deep analytics on feature adoption and engagement",
                "Roadmap Optimization Engine – AI-driven feature prioritization",
                "Monetization & Expansion Signals – Identify upsell and expansion opportunities",
                "Cohort Retention Modeling – Predict and improve customer lifetime value",
                "Product-Led Growth Acceleration – Automated in-product guidance and optimization"
            ],
            outcomes: [
                "25–40% increase in product-led revenue",
                "Higher feature adoption rates (2-3x improvement)",
                "Improved retention and expansion metrics",
                "30% reduction in preventable churn",
                "Data-driven roadmap prioritization"
            ]
        },
        {
            title: "Customer Success & Retention Intelligence",
            subtitle: "Transform customers into growth assets",
            icon: <Users className="h-6 w-6 text-teal-600" />,
            challenges: [
                { title: "Surprise Churn", desc: "80% of customers show clear churn signals 90+ days before leaving" },
                { title: "Renewal Uncertainty", desc: "CSMs spend 40% of their time on manual renewal forecasting" },
                { title: "Expansion Blindness", desc: "60% of expansion opportunities are identified too late" },
                { title: "Voice-of-Customer Noise", desc: "Thousands of feedback points without actionable insights" }
            ],
            kpiPainPoints: [
                "High churn rates (>10% gross)",
                "Low NRR (<100%)",
                "Manual health scoring (subjective/inconsistent)",
                "Slow risk detection (>30 days after signals appear)",
                "Poor expansion forecasting accuracy"
            ],
            solutions: [
                "Predictive Health Scoring – Early churn risk identification",
                "Renewal & Expansion Forecasting – Accurate prediction of growth opportunities",
                "CSM Intelligence Platform – AI-guided playbooks and next-best actions",
                "Integrated Support-Success Signals – Unified view of customer experience",
                "Voice-of-Customer Intelligence – Sentiment analysis and trend detection"
            ],
            outcomes: [
                "Reduced churn through proactive intervention (30-50% reduction)",
                "Higher net revenue retention (115%+ NRR)",
                "Expansion-driven growth acceleration",
                "70% reduction in manual forecasting time",
                "40% faster risk detection and intervention"
            ]
        },
        {
            title: "Enterprise GTM Transformation",
            subtitle: "Modernize and scale your go-to-market engine",
            icon: <Globe className="h-6 w-6 text-blue-700" />,
            challenges: [
                { title: "GTM Inconsistency", desc: "70% of transformation initiatives fail due to poor change management" },
                { title: "Territory Imbalance", desc: "35% of reps are under-quota due to poor territory design" },
                { title: "Channel Conflict", desc: "Multi-channel GTM creates 40% more internal friction and competition" },
                { title: "Adoption Resistance", desc: "65% of sales teams revert to old processes within 90 days" }
            ],
            kpiPainPoints: [
                "Low transformation success rate (<30%)",
                "High sales turnover (>30% annually)",
                "Poor quota attainment distribution",
                "Long transformation ROI (>18 months)",
                "Low new process adoption (<40%)"
            ],
            solutions: [
                "GTM Maturity Assessment – AI-powered evaluation of current capabilities",
                "Sales Process Re-engineering – Optimization based on data patterns",
                "Territory & Capacity Optimization – Intelligent resource allocation",
                "Multi-Product GTM Design – Coordinated launch and scaling frameworks",
                "Change Management & Adoption – Accelerated implementation programs"
            ],
            outcomes: [
                "Scalable enterprise growth architecture",
                "Faster transformation ROI (6-9 months)",
                "Consistent execution across products and regions",
                "50% improvement in quota attainment distribution",
                "80%+ new process adoption rates"
            ]
        },
        {
            title: "AI Governance & Enterprise Enablement",
            subtitle: "Enterprise-grade trust and compliance",
            icon: <ShieldCheck className="h-6 w-6 text-slate-600" />,
            challenges: [
                { title: "AI Black Box", desc: "78% of executives can't explain how AI decisions are made" },
                { title: "Compliance Risk", desc: "62% of AI projects face regulatory or compliance delays" },
                { title: "Bias Blindness", desc: "Unchecked algorithmic bias creates legal and reputational risk" },
                { title: "Adoption Paralysis", desc: "45% of AI initiatives stall in pilot due to governance concerns" }
            ],
            kpiPainPoints: [
                "Long AI approval cycles (>6 months)",
                "High compliance audit findings",
                "Poor model transparency scores",
                "Low executive AI confidence (<5/10)",
                "High risk of regulatory penalties"
            ],
            solutions: [
                "Explainable AI & Decision Traceability – Transparent algorithmic insights",
                "Security & Compliance Frameworks – Built-in privacy and regulatory adherence",
                "Bias Detection & Model Monitoring – Continuous fairness and accuracy validation",
                "AI Governance Operating Models – Structured oversight and control frameworks",
                "Executive AI Enablement – Board-level education and strategic guidance"
            ],
            outcomes: [
                "Accelerated enterprise adoption and approval (60% faster)",
                "Reduced regulatory and reputational risk",
                "Confident AI integration across organizations",
                "95%+ model audit compliance rates",
                "Executive confidence scores of 8+/10"
            ]
        }
    ];

    return (
        <div className="pt-24 lg:pt-32 pb-16 min-h-screen bg-slate-50 text-slate-900 overflow-hidden relative selection:bg-indigo-100">
            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-indigo-50/50 rounded-full blur-[150px] mix-blend-multiply opacity-60"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[150px] mix-blend-multiply opacity-60"></div>
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-sm font-semibold mb-8 shadow-sm">
                            <Sparkles className="w-4 h-4 text-indigo-500" />
                            <span>Enterprise-Grade AI Solutions</span>
                        </div>
                        <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
                            AI-Powered Revenue Acceleration <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600">for Modern Enterprises</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-slate-600 mb-10 font-medium leading-relaxed max-w-3xl mx-auto">
                            TrustFlow AI delivers a full-stack AI revenue platform designed to help enterprises build predictable pipeline, accelerate deal velocity, and scale ARR.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-10 py-7 h-auto shadow-[0_10px_30px_rgba(79,70,229,0.3)] transition-all hover:-translate-y-1 rounded-full font-bold">
                                <Link to="/book-demo">Book a Demo</Link>
                            </Button>
                            <Button asChild variant="outline" className="text-lg px-10 py-7 h-auto border-slate-200 text-slate-700 hover:bg-white hover:text-indigo-600 bg-white/50 backdrop-blur-sm rounded-full font-medium hover:shadow-lg transition-all">
                                <Link to="/talk-to-expert">Talk to an Expert</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Platform Overview */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                    <div className="bg-white/80 border border-slate-200/60 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl shadow-indigo-100/50 backdrop-blur-xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-transparent to-blue-50/30 opacity-100 pointer-events-none"></div>
                        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">One Intelligence Platform. <br /> <span className="text-indigo-600">Infinite Growth.</span></h2>
                                <p className="text-lg text-slate-600 mb-8 font-medium leading-relaxed">
                                    TrustFlow AI unifies marketing, sales, and customer success into a single intelligent revenue engine, replacing siloed tools with a unified nervous system.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                                    {[
                                        "Predictable demand generation",
                                        "Faster deal cycles",
                                        "Higher win rates",
                                        "Lower CAC",
                                        "Stronger retention & expansion",
                                        "Real-time revenue visibility"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 group/item">
                                            <div className="min-w-[24px] min-h-[24px] rounded-full bg-indigo-50 flex items-center justify-center border border-indigo-100 group-hover/item:border-indigo-200 transition-colors">
                                                <Check className="w-3.5 h-3.5 text-indigo-600" />
                                            </div>
                                            <span className="text-slate-700 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                {/* Abstract Icons Visual */}
                                <div className="grid gap-5">
                                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(79,70,229,0.1)] transition-all hover:-translate-y-1 flex items-center gap-5 group/card">
                                        <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center group-hover/card:bg-indigo-100 transition-colors">
                                            <Brain className="w-6 h-6 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg">AI Intelligence Layer</h4>
                                            <p className="text-sm text-slate-500 font-medium">Predictive Modeling & Insights</p>
                                        </div>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(79,70,229,0.1)] transition-all hover:-translate-y-1 ml-10 flex items-center gap-5 group/card">
                                        <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center group-hover/card:bg-violet-100 transition-colors">
                                            <Workflow className="w-6 h-6 text-violet-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg">Unified Workflow</h4>
                                            <p className="text-sm text-slate-500 font-medium">Orchestration & Automation</p>
                                        </div>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(79,70,229,0.1)] transition-all hover:-translate-y-1 flex items-center gap-5 group/card">
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover/card:bg-blue-100 transition-colors">
                                            <BarChart3 className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg">Revenue Growth</h4>
                                            <p className="text-sm text-slate-500 font-medium">Predictable Scale</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Offerings */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Core Offerings</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                            Comprehensive solutions powered by AI to transform every stage of your revenue cycle.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {offerings.map((offering, index) => (
                            <div key={index} id={offering.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="scroll-mt-32">
                                <Card className="overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-900/10 transition-all duration-500 group ring-1 ring-slate-100 rounded-[2rem]">
                                    <div className="grid lg:grid-cols-12 gap-0 overflow-hidden rounded-[2rem]">
                                        {/* Header & Main Info */}
                                        <div className="lg:col-span-4 bg-slate-50/50 p-6 border-r border-slate-100 flex flex-col justify-between relative group-hover:bg-slate-50/80 transition-colors">
                                            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div>
                                                <div className="flex items-center gap-4 mb-8">
                                                    <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                                                        {offering.icon}
                                                    </div>
                                                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider border border-slate-200">
                                                        Module {index + 1}
                                                    </span>
                                                </div>
                                                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-indigo-900 transition-colors">{offering.title}</h3>
                                                <p className="text-indigo-600 font-medium mb-8 text-lg">{offering.subtitle}</p>

                                                <div className="space-y-6">
                                                    {/* Styled like Crypto ICP Section */}
                                                    <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm relative overflow-hidden group/challenges">
                                                        <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-50"></div>
                                                        <h4 className="font-bold text-slate-800 text-xs uppercase tracking-[0.1em] mb-4 flex items-center gap-2">
                                                            <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                                                            Business Challenges
                                                        </h4>
                                                        <ul className="space-y-3 relative z-10">
                                                            {offering.challenges.slice(0, 3).map((challenge, idx) => ( // limit to 3 for design balance
                                                                <li key={idx} className="text-sm">
                                                                    <span className="font-bold text-slate-700 block mb-0.5">{challenge.title}</span>
                                                                    <span className="text-slate-500 leading-snug">{challenge.desc}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Solutions & Outcomes (Right Side) */}
                                        <div className="lg:col-span-8 p-6 bg-white">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                {/* Column 1: Solutions & KPIs */}
                                                <div className="space-y-10">
                                                    <div>
                                                        <h4 className="font-bold text-slate-400 text-xs uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
                                                            <Target className="w-4 h-4 text-indigo-500" />
                                                            Our Solutions
                                                        </h4>
                                                        <ul className="space-y-3">
                                                            {offering.solutions.map((item, idx) => (
                                                                <li key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all group/sol">
                                                                    <div className="w-2 h-2 rounded-full bg-indigo-400 group-hover/sol:scale-125 transition-transform"></div>
                                                                    <span className="text-sm font-medium text-slate-700">{item.split('–')[0].trim()}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <div>
                                                        <h4 className="font-bold text-slate-400 text-xs uppercase tracking-[0.2em] mb-4">KPI Pain Points</h4>
                                                        <div className="grid grid-cols-2 gap-3">
                                                            {offering.kpiPainPoints.map((kpi, idx) => (
                                                                <div key={idx} className="bg-red-50/50 p-2.5 rounded-md border border-red-50 hover:border-red-100 transition-colors">
                                                                    <span className="text-red-700 text-xs font-bold block">
                                                                        {kpi}
                                                                    </span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Column 2: Business Impact */}
                                                <div className="flex flex-col">
                                                    <div className="bg-gradient-to-b from-blue-50/50 to-indigo-50/50 rounded-xl p-6 border border-blue-100/50 relative overflow-hidden group/impact">
                                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-[60px] pointer-events-none opacity-0 group-hover/impact:opacity-100 transition-opacity duration-500"></div>

                                                        <h4 className="font-bold text-indigo-900 text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-2 relative z-10">
                                                            <TrendingUp className="w-4 h-4 text-indigo-600" />
                                                            Business Impact
                                                        </h4>

                                                        <div className="space-y-4 relative z-10">
                                                            {offering.outcomes.map((outcome, idx) => (
                                                                <div key={idx} className="bg-white p-3 rounded-lg shadow-sm border border-slate-100/50 flex items-start gap-3 hover:scale-105 transition-transform duration-300 cursor-default">
                                                                    <div className="bg-green-100 p-1.5 rounded-lg mt-0.5">
                                                                        <Check className="w-3.5 h-3.5 text-green-700" />
                                                                    </div>
                                                                    <span className="text-slate-800 font-semibold text-sm leading-snug">{outcome}</span>
                                                                </div>
                                                            ))}
                                                        </div>

                                                        <div className="mt-8 pt-6 border-t border-indigo-100/50 flex items-center gap-2 text-indigo-600/70 text-sm font-medium">
                                                            <Zap className="w-4 h-4" />
                                                            <span>ROI Verified</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Strategic Value Proposition (Dark Contrast) */}
                <div className="bg-slate-900 py-32 relative overflow-hidden text-white">
                    {/* Background Elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-[20%] left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]"></div>
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="mb-20 text-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-8">
                                Unlock Growth
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">From Pain to Performance</h2>
                            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">
                                We help you connect the dots between isolated challenges and unified revenue intelligence.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-24">
                            {/* Connected Pain Resolution */}
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-indigo-500/30 hover:bg-white/10 transition-all group">
                                <h3 className="text-xl font-bold mb-6 text-white group-hover:text-indigo-400 transition-colors">Connected Pain Resolution</h3>
                                <p className="text-slate-400 text-sm mb-6 leading-relaxed">Most companies experience these challenges as isolated pains, but they're actually interconnected symptoms:</p>
                                <ul className="space-y-4">
                                    {[
                                        "Market Blindness → Wasted R&D → Failed Launches",
                                        "Poor Targeting → Low Win Rates → High CAC",
                                        "Data Silos → Forecast Inaccuracy → Investor Distrust"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-300">
                                            <div className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(244,63,94,0.6)]"></div>
                                            <span className="leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* The TrustFlow.ai Difference */}
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-violet-500/30 hover:bg-white/10 transition-all group">
                                <h3 className="text-xl font-bold mb-6 text-white group-hover:text-violet-400 transition-colors">The TrustFlow.ai Difference</h3>
                                <p className="text-slate-400 text-sm mb-6 leading-relaxed">Transforming your organization from reactive to proactive:</p>
                                <ul className="space-y-4">
                                    {[
                                        { from: "Guesswork", to: "Predictive Intelligence" },
                                        { from: "Silos", to: "Unified Insights" },
                                        { from: "Reactive Operations", to: "Proactive Strategy" }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                                            <ArrowRight className="w-4 h-4 text-violet-500 flex-shrink-0" />
                                            <span className="flex items-center gap-2 flex-wrap">
                                                <span className="text-slate-500 line-through decoration-slate-600/50">{item.from}</span>
                                                <span className="text-violet-400">→ {item.to}</span>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Measurable Transformation Impact */}
                            <div className="bg-gradient-to-br from-indigo-900/40 to-blue-900/40 border border-indigo-500/20 rounded-3xl p-8 hover:border-indigo-500/40 transition-colors shadow-lg shadow-indigo-900/20">
                                <h3 className="text-xl font-bold mb-6 text-white">Measurable Impact</h3>
                                <p className="text-slate-300 text-sm mb-6 leading-relaxed">Companies using TrustFlow.ai achieve:</p>
                                <ul className="space-y-4">
                                    {[
                                        "40-60% faster revenue growth",
                                        "25-35% lower operational costs",
                                        "50% higher forecast accuracy",
                                        "3-5x ROI within first 12 months"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="bg-emerald-500/20 p-1 rounded-full">
                                                <Check className="w-3 h-3 text-emerald-400" />
                                            </div>
                                            <span className="text-base font-bold text-white">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="text-center">
                            <Button asChild className="bg-white text-slate-900 hover:bg-slate-200 text-lg px-10 py-7 h-auto shadow-[0_0_30px_rgba(255,255,255,0.2)] rounded-full transition-all hover:scale-105 font-bold">
                                <Link to="/book-demo">Start Your Transformation Today</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="text-center max-w-3xl mx-auto px-4 pb-32 pt-10">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Scale?</h2>
                    <p className="text-xl text-slate-600 mb-10 font-medium">
                        Join the forward-thinking enterprises building their predictable revenue engine with TrustFlow AI.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 h-auto text-lg shadow-xl shadow-indigo-200 rounded-xl font-bold">
                            <Link to="/book-demo">Book a Demo</Link>
                        </Button>
                        <Button asChild variant="outline" className="border-slate-300 text-slate-700 hover:bg-white px-8 py-6 h-auto text-lg rounded-xl bg-slate-50 font-medium">
                            <Link to="/talk-to-expert">Talk to a Revenue Expert</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
