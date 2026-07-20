import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    ArrowRight,
    Landmark,
    Factory,
    Rocket,
    CheckCircle2,
    ShieldCheck,
    Coins,
    Building2,
    Zap,
    AlertTriangle,
    Lightbulb,
    TrendingUp,
    ShoppingBag,
    Home,
    ShoppingCart,
    Gem,
    Code,
    Film,
    Plane
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

import VerticalBlock from '../components/VerticalBlock';
import { Reveal } from '../components/ui/Reveal';
import IndustriesCarousel from '../components/IndustriesCarousel';
import { verticalsContent } from '../../data/verticalsContent';

export default function Industries() {
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

    const industries = [
        {
            title: "E-commerce",
            icon: <ShoppingBag className="w-6 h-6" />,
            color: "blue",
            offeringDescription: "AI-powered demand engine for retailers and marketplaces that optimizes conversion rates, reduces cart abandonment, and maximizes repeat purchase value.",
            keyVerticals: ["B2C Retail", "Online Marketplaces", "D2C Brands", "Social Commerce"],
            details: {
                situations: ["Cart abandonment is above 70%", "Customer lifetime value is declining", "ROAS is plateauing on Meta/Google"],
                challenges: ["Unable to identify high-intent browsers", "Generic email marketing underperforming", "High cost of manual retargeting"],
                solution: "AI separates browsing from buying intent, personalizes product discovery in real-time, and automates high-conversion recovery loops.",
                example: "A fashion D2C brand increased revenue by 34% using predictive cart recovery.",
                benefits: ["Higher average order value", "Lower dependence on ads", "Increased repeat purchase rate"],
                outcomes: ["25% Higher Conversion", "40% Lower CAC", "30% Growth in Repeat Sales"]
            }
        },
        {
            title: "Consumer Durables",
            icon: <Home className="w-6 h-6" />,
            color: "orange",
            offeringDescription: "Intelligent revenue stack for home appliances, electronics, and durable goods that connects digital demand with distribution networks.",
            keyVerticals: ["Home Appliances", "Consumer Electronics", "Furniture", "Smart Home"],
            details: {
                situations: ["High funnel drop-offs on high-ticket items", "Dealers reporting low quality leads", "No visibility into the research phase"],
                challenges: ["Long and complex buyer journeys", "Attribution gaps between online and offline", "Low post-sale service revenue"],
                solution: "AI captures early research signals, qualifies buyers across the hybrid digital-dealer journey, and automates lifecycle engagement.",
                example: "A premium appliance manufacturer saw a 40% increase in dealer-attributed sales using TrustGrid.",
                benefits: ["Unified buyer view", "Stronger dealer alignment", "Predictable high-ticket pipeline"],
                outcomes: ["2.5× Lead Volume", "35% Faster Sales Cycle", "40% Better Dealer Conversion"]
            }
        },
        {
            title: "Banking",
            icon: <Landmark className="w-6 h-6" />,
            color: "teal",
            offeringDescription: "High-intent demand discovery and automated qualification for retail, corporate, and digital banking services.",
            keyVerticals: ["Retail Banking", "Corporate Banking", "Digital Wallets", "SME Lending"],
            details: {
                situations: ["Accounts opened but inactive", "High friction in lending applications", "Massive marketing spend on low-intent leads"],
                challenges: ["High cost of physical verification", "Fragmented customer data", "Strict regulatory compliance barriers"],
                solution: "AI identifies high-propensity account holders, predicts lending readiness, and automates compliant qualification funnels.",
                example: "A leading digital bank tripled its funded account rate using AI intent scoring.",
                benefits: ["Lower cost per account", "Reduced application drop-outs", "Higher share of wallet"],
                outcomes: ["3× Account Openings", "50% Faster Activation", "2× Cross-Sell Revenue"]
            }
        },
        {
            title: "FMCG",
            icon: <ShoppingCart className="w-6 h-6" />,
            color: "emerald",
            offeringDescription: "Data-driven demand intelligence for fast-moving consumer goods to optimize supply chain alignment and distributor performance.",
            keyVerticals: ["Food & Beverage", "Personal Care", "Household Goods", "Packaged Foods"],
            details: {
                situations: ["Zero visibility into secondary sales demand", "Rising trade promotion costs", "Stock-outs and inventory imbalance"],
                challenges: ["Distributor network inefficiency", "Generic retail pushes", "No direct consumer intent signals"],
                solution: "AI aggregates regional demand signals, predicts retailer stock-out risks, and optimizes distributor sales focus.",
                example: "A snacks brand reduced inventory holding costs by 20% while increasing sales by 15%.",
                benefits: ["Real-time demand visibility", "Optimized trade spend", "Higher distributor ROI"],
                outcomes: ["20% Inventory Optimization", "30% Higher Distributor Yield", "15% Margin Expansion"]
            }
        },
        {
            title: "Financial Services",
            icon: <Coins className="w-6 h-6" />,
            color: "purple",
            offeringDescription: "AI-driven growth for wealth management, investment platforms, and non-banking financial companies.",
            keyVerticals: ["Wealth Management", "Mutual Funds", "Stock Broking", "Lending"],
            details: {
                situations: ["AUM growth is stagnant", "Advisors spend 80% time on cold leads", "Client churn during market volatility"],
                challenges: ["Building trust at scale", "Inconsistent advisory quality", "Poor personalization of investment advice"],
                solution: "AI predicts investment intent from behavioral data, automates advisor outreach prompts, and personalizes wealth journeys.",
                example: "An AMC platform increased SIP registrations by 40% using behavioral triggers.",
                benefits: ["Scalable wealth advisory", "Higher client retention", "Improved advisor productivity"],
                outcomes: ["2.8× AUM Growth", "40% Higher SIP Activation", "3× Advisory Productivity"]
            }
        },
        {
            title: "Electric Vehicles (EV)",
            icon: <Zap className="w-6 h-6" />,
            color: "amber",
            offeringDescription: "Specialized demand engine for the EV ecosystem, from vehicle sales to charging infrastructure and battery tech.",
            keyVerticals: ["EV OEMs", "Charging Networks", "Battery Technology", "Fleet Management"],
            details: {
                situations: ["Test drive requests aren't converting", "High inquiry volume but low network readiness", "Confusion over charging and subsidies"],
                challenges: ["Consumer range and battery anxiety", "Complex hybrid sales models", "High education overhead per lead"],
                solution: "AI identifies 'segment-swappers' early, automates education on EV TCO, and qualifies charger installation readiness.",
                example: "An EV startup doubled its pre-booking conversion using AI-led educational funnels.",
                benefits: ["Higher intent test drives", "Lower education costs", "Faster network expansion"],
                outcomes: ["2.2× Test Drive Bookings", "45% Higher Fleet Conversion", "30% Faster Network Expansion"]
            }
        },
        {
            title: "Gems & Jewellery",
            icon: <Gem className="w-6 h-6" />,
            color: "pink",
            offeringDescription: "High-trust AI revenue engine for luxury goods, focusing on high-ticket demand discovery and personalized boutique experiences.",
            keyVerticals: ["Fine Jewellery", "Luxury Watches", "Gemstones", "Custom Design"],
            details: {
                situations: ["High traffic at boutiques but low conversion", "Difficulty tracking high-net-worth buyers", "Seasonal demand spikes are hard to manage"],
                challenges: ["Building extreme high-ticket trust", "Low frequency of purchase", "Inconsistent clienteling across showrooms"],
                solution: "AI identifies high-net-worth intent signals, optimizes luxury appointment bookings, and automates high-touch clienteling.",
                example: "A luxury jewellery house increased private viewing conversions by 50% using TrustGrid.",
                benefits: ["Elite customer experience", "Higher referral rates", "Efficient high-ticket boutique operations"],
                outcomes: ["35% Higher High-Ticket Closures", "2× Referral Rate", "50% Better Clienteling Efficiency"]
            }
        },
        {
            title: "Insurance",
            icon: <ShieldCheck className="w-6 h-6" />,
            color: "indigo",
            offeringDescription: "Predictive growth stack for life, health, and general insurance that identifies high-intent policy buyers.",
            keyVerticals: ["Life Insurance", "Health", "General", "Reinsurance"],
            details: {
                situations: ["High lead wastage from aggregators", "Agents struggle with cold calling", "Renewals are falling through the cracks"],
                challenges: ["Price-driven buyer behavior", "Complex policy comparisons", "Low customer engagement between renewals"],
                solution: "AI scores leads for multi-policy propensity, automates renewal triggers, and qualifies buyers for upsell.",
                example: "A general insurer reduced policy acquisition cost by 40% using intent modeling.",
                benefits: ["Predictable renewal revenue", "Higher multi-policy density", "Increased agent productivity"],
                outcomes: ["2.6× Policy Sales", "40% Lower Acquisition Cost", "35% Renewal Growth"]
            }
        },
        {
            title: "IT & BPM",
            icon: <Code className="w-6 h-6" />,
            color: "blue",
            offeringDescription: "B2B demand discovery for technology services and business process management at a global scale.",
            keyVerticals: ["Software Services", "BPO", "IT Consulting", "Managed Services"],
            details: {
                situations: ["RFPs are low quality", "Sales team is reactive to referrals", "Pipeline is lumpy and unpredictable"],
                challenges: ["Complex global buying committees", "Difficulty scaling outbound efforts", "Noisy enterprise software market"],
                solution: "AI maps intent across global enterprise accounts, automates account-based qualification, and optimizes deal value.",
                example: "A mid-tier IT services firm grew its global pipeline by 3.2× in 12 months.",
                benefits: ["Repeatable B2B engine", "Higher contract values", "Stronger enterprise positioning"],
                outcomes: ["3.2× Pipeline Growth", "25% Better Deal Win-Rate", "2× Resource Utilization"]
            }
        },
        {
            title: "Manufacturing",
            icon: <Factory className="w-6 h-6" />,
            color: "amber",
            offeringDescription: "Industrial-grade demand intelligence for OEMs and component manufacturers to drive complex B2B sales.",
            keyVerticals: ["Industrial Machinery", "Automotive OEMs", "Chemicals", "Electronics Mfg"],
            details: {
                situations: ["OEM sales cycles exceeding 12 months", "Dealer networks are underperforming", "Marketing is disconnected from shop floor"],
                challenges: ["Limited visibility into capital equipment intent", "Fragmented channel partner data", "Slow quote-to-order transition"],
                solution: "AI identifies replacement cycles, qualify dealer leads automatically, and prioritizes OEM direct sales.",
                example: "A construction equipment group reduced sales cycles by 5 months using AI-led discovery.",
                benefits: ["Shorter inventory cycles", "Stronger dealer loyalty", "Efficient capital allocation"],
                outcomes: ["47% Shorter Sales Cycles", "2× Dealer Productivity", "3× Inbound Quality"]
            }
        },
        {
            title: "Media & Entertainment",
            icon: <Film className="w-6 h-6" />,
            color: "purple",
            offeringDescription: "AI-driven audience growth and monetization engine for streaming, broadcasting, and content platforms.",
            keyVerticals: ["Streaming Services", "Digital Media", "Gaming", "Advertising Tech"],
            details: {
                situations: ["Subscription churn is rising", "Ad inventory is undersold", "Audience engagement is fragmented"],
                challenges: ["High cost of content discovery", "Passive viewer behavior", "Low first-party data utilization"],
                solution: "AI predicts churn risk before it happens, personalizes content discovery, and optimizes ad-yield through intent-mapping.",
                example: "A streaming platform cut subscriber churn by 40% using predictive retention plays.",
                benefits: ["Higher average revenue per user", "Longer audience retention", "Premium ad-inventory yield"],
                outcomes: ["40% Churn Reduction", "2× Ad Yield", "35% Higher Subscription Value"]
            }
        },
        {
            title: "Real Estate",
            icon: <Building2 className="w-6 h-6" />,
            color: "cyan",
            offeringDescription: "High-intent buyer discovery for residential and commercial real estate to accelerate inventory turnover.",
            keyVerticals: ["Residential", "Commercial", "Real Estate Developers", "Brokerages"],
            details: {
                situations: ["Vast inquiry volume but low site visits", "Marketing budget wasted on speculators", "Inventory velocity is slowing down"],
                challenges: ["Difficulty scoring buyer readiness", "Manual and slow broker follow-ups", "Poor attribution for premium projects"],
                solution: "AI identifies high-intent residential and commercial buyers, automates site-visit scheduling, and predicts conversion.",
                example: "A luxury developer sold out its phase-1 inventory 3 months early using AI demand discovery.",
                benefits: ["Lower cost per booking", "Higher broker productivity", "Predictable sell-through rates"],
                outcomes: ["2× Booking Velocity", "40% Faster Inventory Cycle", "50% Higher Broker Efficiency"]
            }
        },
        {
            title: "Tourism & Hospitality",
            icon: <Plane className="w-6 h-6" />,
            color: "teal",
            offeringDescription: "Demand optimization for hotel chains, travel platforms, and destination management companies.",
            keyVerticals: ["Hotels & Resorts", "Travel Agencies", "Airlines", "Cruise Lines"],
            details: {
                situations: ["Direct bookings are low vs OTAs", "High cancellations on peak dates", "Low guest loyalty and repeat stays"],
                challenges: ["Extreme price sensitivity", "Volatility in seasonal demand", "Poor data on guest preferences"],
                solution: "AI captures high-propensity travel intent, personalizes direct-booking offers, and predicts seasonal occupancy peaks.",
                example: "A boutique hotel chain increased direct bookings by 45% while reducing OTA commissions.",
                benefits: ["Stronger guest relationships", "Reduced commission costs", "Optimized room pricing"],
                outcomes: ["45% Higher Direct Bookings", "30% Better Occupancy", "2.5× Guest LTV"]
            }
        }
    ];

    const getColorClass = (color: string) => {
        const colors: { [key: string]: string } = {
            blue: "text-blue-600 bg-blue-50 border-blue-100",
            purple: "text-purple-600 bg-purple-50 border-purple-100",
            indigo: "text-indigo-600 bg-indigo-50 border-indigo-100",
            teal: "text-teal-600 bg-teal-50 border-teal-100",
            amber: "text-amber-600 bg-amber-50 border-amber-100",
            emerald: "text-emerald-600 bg-emerald-50 border-emerald-100",
            pink: "text-pink-600 bg-pink-50 border-pink-100",
            orange: "text-orange-600 bg-orange-50 border-orange-100",
            cyan: "text-cyan-600 bg-cyan-50 border-cyan-100",
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 composition-layer">
            {/* Premium Industries Carousel - First Section */}
            <div>
                <IndustriesCarousel />
            </div>

            {/* 1. Static Intro Section (Replaces old Hero) */}
            <section className="relative pt-24 pb-16 overflow-hidden">
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <Reveal width="100%">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Vertical-Specific Revenue Engineering</h2>
                        <p className="text-xl text-slate-600 leading-relaxed font-medium">
                            TrustGrid AI provides deep industry-specific expertise, integrating autonomous demand engines with vertical growth mechanics. We don't just provide tools; we architect the entire revenue lifecycle for your specific market nuances.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Industries Grid with Tabs */}
            <section className="relative z-10 pb-24 mt-12">
                <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {industries.map((industry, index) => (
                            <Reveal width="100%" delay={index * 0.1} className="h-full">
                                <Card id={industry.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="flex flex-col h-full hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 border-slate-200/60 bg-white/80 backdrop-blur-xl group hover:-translate-y-2 overflow-hidden scroll-mt-32 ring-1 ring-slate-200/50 hover:ring-blue-200/50">
                                    <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${industry.color === 'blue' ? 'from-blue-500 to-indigo-500' :
                                        industry.color === 'purple' ? 'from-purple-500 to-pink-500' :
                                            industry.color === 'indigo' ? 'from-indigo-500 to-purple-500' :
                                                industry.color === 'teal' ? 'from-teal-500 to-emerald-500' :
                                                    industry.color === 'amber' ? 'from-amber-500 to-orange-500' :
                                                        industry.color === 'emerald' ? 'from-emerald-500 to-teal-500' :
                                                            industry.color === 'pink' ? 'from-pink-500 to-rose-500' :
                                                                industry.color === 'orange' ? 'from-orange-500 to-red-500' :
                                                                    'from-cyan-500 to-blue-500'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                                    <CardHeader className="pb-4 bg-slate-50/30 border-b border-slate-100/60">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className={`p-3.5 rounded-2xl border ${getColorClass(industry.color)} transition-transform group-hover:scale-110 duration-500 shadow-sm`}>
                                                {industry.icon}
                                            </div>
                                        </div>
                                        <CardTitle className="text-2xl font-bold text-slate-900 mt-5 tracking-tight group-hover:text-blue-700 transition-colors">{industry.title}</CardTitle>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {industry.keyVerticals.map((vertical, i) => (
                                                <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100/80 border border-slate-200 px-2 py-1 rounded-md">
                                                    {vertical}
                                                </span>
                                            ))}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow pt-6 space-y-6">
                                        <p className="text-slate-600 text-base leading-relaxed font-medium">
                                            {industry.offeringDescription}
                                        </p>

                                        <Tabs defaultValue="challenges" className="w-full">
                                            <TabsList className="grid w-full grid-cols-3 mb-6 bg-slate-100/50 p-1 rounded-xl">
                                                <TabsTrigger value="challenges" className="text-xs sm:text-xs font-bold uppercase tracking-wide data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm rounded-lg py-2">Challenges</TabsTrigger>
                                                <TabsTrigger value="solution" className="text-xs sm:text-xs font-bold uppercase tracking-wide data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm rounded-lg py-2">Solution</TabsTrigger>
                                                <TabsTrigger value="impact" className="text-xs sm:text-xs font-bold uppercase tracking-wide data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm rounded-lg py-2">Impact</TabsTrigger>
                                            </TabsList>

                                            {/* Tab: Challenges */}
                                            <TabsContent value="challenges" className="space-y-4 animate-in fade-in-50 duration-300 focus-visible:outline-none h-full">
                                                <div className="space-y-4 min-h-[160px]">
                                                    <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-widest">
                                                        <AlertTriangle className="w-3.5 h-3.5" /> High-Stakes Pain Points
                                                    </div>
                                                    <ul className="space-y-3">
                                                        {industry.details.challenges.map((item, idx) => (
                                                            <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm leading-snug">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-amber-400/80 mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 mt-4">
                                                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Common Situations</span>
                                                    <div className="space-y-1.5">
                                                        {industry.details.situations.slice(0, 2).map((sit, idx) => (
                                                            <p key={idx} className="text-xs text-slate-500 italic">"{sit}"</p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </TabsContent>

                                            {/* Tab: Solution */}
                                            <TabsContent value="solution" className="space-y-4 animate-in fade-in-50 duration-300 focus-visible:outline-none h-full">
                                                <div className="space-y-4 min-h-[160px]">
                                                    <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest">
                                                        <Lightbulb className="w-3.5 h-3.5" /> Intelligence Layer
                                                    </div>
                                                    <p className="text-slate-700 text-sm leading-relaxed font-medium">
                                                        {industry.details.solution}
                                                    </p>
                                                </div>
                                                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-xl border border-indigo-100/50 mt-4 shadow-sm group-hover:shadow-md transition-shadow">
                                                    <div className="flex gap-3 items-start">
                                                        <div className="p-1.5 bg-white rounded-lg shadow-sm">
                                                            <Zap className="w-3.5 h-3.5 text-indigo-600" />
                                                        </div>
                                                        <div>
                                                            <p className="text-[10px] font-bold text-indigo-900 uppercase tracking-widest mb-1.5">Proven Success</p>
                                                            <p className="text-sm text-slate-700 italic border-l-2 border-indigo-200 pl-2 leading-relaxed">"{industry.details.example}"</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabsContent>

                                            {/* Tab: Impact */}
                                            <TabsContent value="impact" className="space-y-4 animate-in fade-in-50 duration-300 focus-visible:outline-none h-full">
                                                <div className="space-y-4 min-h-[160px]">
                                                    <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest">
                                                        <TrendingUp className="w-3.5 h-3.5" /> Measurable Outcomes
                                                    </div>
                                                    <div className="grid grid-cols-1 gap-2">
                                                        {industry.details.outcomes.map((item, idx) => (
                                                            <div key={idx} className="bg-emerald-50/50 p-2.5 rounded-lg flex items-center gap-3 border border-emerald-100/80 hover:bg-emerald-50 transition-colors">
                                                                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                                                <span className="text-emerald-900 text-sm font-bold">{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="space-y-3 mt-4 pt-4 border-t border-slate-100">
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Core Advantages</span>
                                                    <div className="flex flex-wrap gap-2">
                                                        {industry.details.benefits.map((ben, idx) => (
                                                            <span key={idx} className="text-[11px] font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md">{ben}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </TabsContent>
                                        </Tabs>
                                    </CardContent>
                                </Card>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Verticals Content Blocks */}
            <div className="bg-white relative z-10">
                {verticalsContent.map((block, index) => (
                    <Reveal key={index} width="100%" delay={index % 2 === 0 ? 0.1 : 0.2}>
                        <div id={block.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="scroll-mt-32">
                            <VerticalBlock data={block} index={index} />
                        </div>
                    </Reveal>
                ))}
            </div>

            {/* CTA Section */}
            <div className="max-w-5xl mx-auto px-4 pb-24 pt-12 relative z-10">
                <Reveal width="100%" direction="up">
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-200 shadow-xl shadow-blue-900/5 group hover:shadow-2xl hover:shadow-blue-900/10 transition-shadow duration-500">
                        {/* Background Effects */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl bg-blue-100/50 blur-[100px] rounded-full pointer-events-none mix-blend-multiply" />
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/50 blur-[80px] rounded-full pointer-events-none mix-blend-multiply" />

                        <div className="relative z-10 px-8 py-16 md:py-24 text-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
                                <Rocket className="w-4 h-4" /> Ready to Scale?
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-slate-900 tracking-tight leading-[1.1]">
                                Architect Your <br className="hidden md:block" />
                                <span className="text-blue-700">
                                    Industry-Specific AI Engine
                                </span>
                            </h2>

                            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                                Stop relying on generic tools. Deploy a revenue engine engineered
                                specifically for the <span className="text-blue-600 font-bold">nuances of your vertical</span>.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                                <Link to="/book-consultation">
                                    <Button className="bg-blue-600 text-white hover:bg-blue-700 px-10 py-7 h-auto text-lg font-bold rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-1">
                                        Start Building Now
                                        <ArrowRight className="w-5 h-5" />
                                    </Button>
                                </Link>
                                <div className="flex flex-col items-center gap-2">
                                    <p className="text-slate-500 text-sm font-medium sm:ml-6 flex items-center gap-2">
                                        <span className="text-emerald-500 relative flex h-2.5 w-2.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                        </span>
                                        Operational in weeks, not months
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}
