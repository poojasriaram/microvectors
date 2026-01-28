import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { cryptoContent } from '../../data/cryptoContent';
import GlobalICPSection from '../components/GlobalICPSection';
import CryptoOutcomeBlock from '../components/CryptoOutcomeBlock';
import CryptoHeroSlides from '../components/CryptoHeroSlides';

export default function Crypto() {
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

    return (
        <div className="min-h-screen bg-[#020617] text-white relative overflow-hidden font-sans selection:bg-blue-500/30">
            {/* Global Background Noise & Gradients */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay z-0"></div>
            <div className="fixed top-0 left-0 w-full h-[800px] bg-gradient-to-b from-blue-900/10 via-slate-900/0 to-slate-900/0 pointer-events-none z-0" />

            <div className="relative z-10 pt-32 pb-20">
                {/* Hero Section */}
                <div className="relative mb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Background Effects */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen animate-pulse" />

                    <div className="text-center max-w-5xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/40 border border-slate-700/50 backdrop-blur-md mb-8 shadow-lg hover:border-blue-500/30 transition-colors cursor-default">
                            <Sparkles className="w-4 h-4 text-blue-400" />
                            <span className="text-sm font-semibold text-slate-300 tracking-wide">New: AI-Native Revenue Protocol</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[1.05]">
                            AI-Driven Sales Acceleration <br />
                            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                                for Crypto Ecosystems
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-medium text-balance mb-12">
                            The AI-Native Revenue Protocol that transforms users, liquidity, and ecosystems into <span className="text-white font-semibold">predictable revenue streams</span>. Built for L1/L2s, DeFi, Gaming, and CEXs.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                            <Button asChild className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 h-auto text-lg font-bold rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all flex items-center gap-2 group">
                                <Link to="/book-demo">
                                    Start Scaling Now
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button asChild variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/5 px-8 py-6 h-auto text-lg font-medium rounded-full border border-white/10 hover:border-white/20 transition-all">
                                <Link to="/talk-to-expert">Talk to an Expert</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Premium Hero Slides */}
                    <div className="w-full flex justify-center perspective-[2000px]">
                        <CryptoHeroSlides />
                    </div>
                </div>

                {/* Introduction Section */}
                <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center mb-24">
                    <h2 className="text-2xl font-bold text-white mb-6">Revolutionizing Crypto Business Models</h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        Welcome to TrustFlow AI's integrated platform for revolutionizing crypto business models, ICOs, and spot markets. As an AI-driven sales expert, we've combined our core offerings with deep insights from our crypto-focused solutions to deliver unparalleled acceleration in sales, revenue, and demand generation. Our AI-Native Revenue Protocol transforms users, liquidity, and ecosystems into predictable revenue streams, optimizing token economics, transaction flows, subscriptions, and protocol fees.
                    </p>
                </div>

                {/* Global Crypto ICP Section */}
                <GlobalICPSection />

                {/* Business Models & AI educational Section */}
                <div className="relative z-20 py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 md:text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                            <Sparkles className="w-3.5 h-3.5" /> Intelligence Hub
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">TrustFlow AI for Crypto Business Models</h2>
                        <p className="text-lg text-slate-400 text-balance">
                            Focused benefits and offerings tailored to specific crypto business models, integrating our engines for sales acceleration.
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto">
                        <Tabs defaultValue="cex" className="w-full flex flex-col lg:flex-row gap-10">
                            {/* Sticky Sidebar Navigation */}
                            <TabsList className="w-full lg:w-[25%] flex-col justify-start h-auto gap-3 bg-transparent p-0 border-b-0 sticky top-32 lg:h-fit">
                                {[
                                    { id: "cex", label: "Centralized Exchange (CEX)" },
                                    { id: "dex", label: "Decentralized Exchange (DEX)" },
                                    { id: "wallet", label: "Wallet Services" },
                                    { id: "defi", label: "DeFi Lending/Borrowing" },
                                    { id: "nft", label: "NFT Marketplace" },
                                    { id: "ico", label: "ICO/IDO/IEO" },
                                    { id: "mining", label: "Mining/Staking Operations" },
                                    { id: "payment", label: "Crypto Payment Gateways" },
                                    { id: "yield", label: "Yield Farming/Aggregators" }
                                ].map((tab) => (
                                    <TabsTrigger
                                        key={tab.id}
                                        value={tab.id}
                                        className="w-full justify-start text-left px-5 py-4 h-auto text-sm font-semibold rounded-xl border border-white/5 bg-slate-900/50 text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-blue-500 data-[state=active]:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                                    >
                                        {tab.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            <div className="flex-1 w-full lg:w-[75%] bg-slate-900/20 rounded-3xl p-1 border border-white/5">
                                {/* Tab Content Mapping */}
                                {[
                                    {
                                        id: "cex",
                                        title: "Centralized Exchange (CEX)",
                                        benefits: "30-50% faster revenue from trading fees; 25-45% ROAS on user acquisition; reduced fraud by 40%.",
                                        offerings: "Performance Revenue Engine for channel attribution; Customer Journey Intelligence for retention; integrations with spot market APIs for real-time optimization."
                                    },
                                    {
                                        id: "dex",
                                        title: "Decentralized Exchange (DEX)",
                                        benefits: "15X high-intent liquidity providers; 5X faster growth loops; 20-40% higher monetization per swap.",
                                        offerings: "Demand Discovery Engine for on-chain signals; Growth Acceleration Engine for liquidity levers; Revenue Acceleration for protocol fee tweaks."
                                    },
                                    {
                                        id: "wallet",
                                        title: "Wallet Services",
                                        benefits: "25-45% improved activation/retention; 30% churn reduction; 20-40% LTV boost.",
                                        offerings: "Customer Journey Intelligence for wallet mapping; MVP Acceleration for new features; Market Validation for user fit."
                                    },
                                    {
                                        id: "defi",
                                        title: "DeFi Lending/Borrowing",
                                        benefits: "30-50% revenue velocity from interest spreads; 40-60% faster MVP launches; reduced default risks by 25%.",
                                        offerings: "Revenue Acceleration for monetization; Performance Engine for incentive optimization; Validation Intelligence for pricing."
                                    },
                                    {
                                        id: "nft",
                                        title: "NFT Marketplace",
                                        benefits: "15X demand signals for collections; 25-45% ROAS on sales commissions; 5X experimentation speed.",
                                        offerings: "Demand Discovery for community sentiment; Growth Engine for adoption; Journey Intelligence for buyer retention."
                                    },
                                    {
                                        id: "ico",
                                        title: "ICO/IDO/IEO",
                                        benefits: "50-70% higher launch success; 20X intent investors; 30-40% risk reduction.",
                                        offerings: "Market Validation for pre-launch; Demand Discovery for targeting; Sales & Marketing Automation for hype building."
                                    },
                                    {
                                        id: "mining",
                                        title: "Mining/Staking Operations",
                                        benefits: "20-40% predictable rewards; 30% lower energy/ops costs; faster scaling.",
                                        offerings: "Revenue Engine for forecasting; Growth Acceleration for node optimization; Performance for incentive allocation."
                                    },
                                    {
                                        id: "payment",
                                        title: "Crypto Payment Gateways",
                                        benefits: "25-35% transaction conversion uplift; 40% fraud detection; higher merchant adoption.",
                                        offerings: "Journey Intelligence for seamless flows; Demand Engine for merchant leads; Revenue Ops for fee optimization."
                                    },
                                    {
                                        id: "yield",
                                        title: "Yield Farming/Aggregators",
                                        benefits: "30-50% yield optimization; 15X high-intent farmers; reduced wastage by 40%.",
                                        offerings: "Performance Revenue for ROI allocation; Growth Engine for strategy experimentation; Validation for market timing."
                                    }
                                ].map((model) => (
                                    <TabsContent key={model.id} value={model.id} className="mt-0 animate-in fade-in slide-in-from-right-4 duration-500 outline-none p-6 md:p-8">
                                        <div className="bg-slate-800/40 border border-white/5 rounded-2xl p-8 hover:bg-slate-800/60 transition-colors group">
                                            <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">{model.title}</h3>

                                            <div className="space-y-8">
                                                <div>
                                                    <h4 className="flex items-center gap-2 text-sm font-bold text-blue-400 uppercase tracking-wider mb-3">
                                                        <TrendingUp className="w-4 h-4" /> Key Benefits
                                                    </h4>
                                                    <p className="text-slate-300 leading-relaxed text-lg">{model.benefits}</p>
                                                </div>

                                                <div className="w-full h-px bg-white/5"></div>

                                                <div>
                                                    <h4 className="flex items-center gap-2 text-sm font-bold text-indigo-400 uppercase tracking-wider mb-3">
                                                        <Zap className="w-4 h-4" /> Core Offerings
                                                    </h4>
                                                    <p className="text-slate-400 leading-relaxed">{model.offerings}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </TabsContent>
                                ))}
                            </div>
                        </Tabs>
                    </div>
                </div>

                {/* Crypto Content Blocks */}
                <div className="relative z-20 space-y-32 py-24">
                    {cryptoContent.map((block, index) => (
                        <div key={index} id={block.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="scroll-mt-32">
                            <CryptoOutcomeBlock data={block} index={index} />
                        </div>
                    ))}
                </div>

                {/* TrustFlow AI Case Studies */}
                <div className="relative z-20 py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 md:text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
                            <TrendingUp className="w-3.5 h-3.5" /> Proven Results
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Crypto Success Stories</h2>
                        <p className="text-lg text-slate-400 text-balance">
                            See how leading protocols and exchanges are using TrustFlow AI to accelerate growth.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "DeFi Protocol Revenue Boost",
                                type: "Revenue Acceleration",
                                stats: ["45% Revenue Velocity", "28% Churn Reduction"],
                                desc: "A leading DeFi protocol optimized token fees and retention signals, scaling monthly revenue from $2M to $2.9M and reaching top 10 TVL rankings."
                            },
                            {
                                title: "ICO Launch Triumph",
                                type: "Market Validation",
                                stats: ["$25M Raised (150% Target)", "3.5X ROAS"],
                                desc: "An emerging L2 blockchain ICO identified high-intent investors using Demand Discovery, achieving a 60% launch success rate and 200% post-ICO token value growth."
                            },
                            {
                                title: "Spot Market Exchange Growth",
                                type: "Performance Revenue",
                                stats: ["2.7X ROAS", "120% User Growth"],
                                desc: "A CEX battling low ROAS implemented Performance Revenue engines, cutting wastage by 42% and boosting transaction conversions by 38% QoQ."
                            }
                        ].map((study, i) => (
                            <div key={i} className="bg-slate-900/40 border border-white/5 rounded-2xl p-8 hover:bg-slate-900/60 hover:border-blue-500/30 transition-all group">
                                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-4">{study.type}</div>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{study.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {study.stats.map((stat, idx) => (
                                        <span key={idx} className="bg-blue-500/10 text-blue-300 text-xs font-bold px-2 py-1 rounded border border-blue-500/20">{stat}</span>
                                    ))}
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {study.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Unified Outcome Section */}
                <div className="relative py-32 mt-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black z-0"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-8 shadow-lg shadow-indigo-500/25">
                            <Zap className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">Unified Crypto Outcome</h2>
                        <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed max-w-4xl mx-auto">
                            Together, these AI-powered engines transform crypto businesses from speculative growth models into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-bold">data-driven, revenue-predictable, and scalable ecosystems</span>.
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="max-w-5xl mx-auto px-4 py-24 text-center relative z-10">
                    <div className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 md:p-24 shadow-2xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500">
                        {/* Background Gradients */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-60"></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-60"></div>

                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white relative z-10 tracking-tight leading-[1.1]">
                            Scale Your Crypto Ecosystem with <br />
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                AI Intelligence
                            </span>
                        </h2>

                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                            Join the fastest growing protocols and exchanges using TrustFlow AI to dominate the market.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                            <Button asChild className="bg-white text-slate-950 hover:bg-blue-50 px-10 py-7 h-auto text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 transform hover:-translate-y-1">
                                <Link to="/book-demo">
                                    Book a Demo
                                    <ArrowRight className="w-6 h-6" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
