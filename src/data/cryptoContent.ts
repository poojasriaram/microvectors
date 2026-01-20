import {
    Bitcoin,
    Wallet,
    TrendingUp,
    Search,
    BarChart3,
    Rocket,
    CheckCircle2,
    Map,
    Zap,
    Users,
    Activity,
    Target,
    Shield,
    Globe,
    Grid,
    Cpu,
    Briefcase,
    DollarSign,
    Gift,
    Clock
} from 'lucide-react';

export const cryptoContent = [
    {
        title: "AI-Powered Revenue Acceleration for Crypto",
        tagline: "Turn Users, Liquidity, and Ecosystems into Predictable Revenue.",
        description: "Crypto businesses struggle to translate users, volume, and community into sustainable revenue. This engine connects demand, activation, monetization, and retention into a single AI-driven revenue layer—optimizing token economics, transaction flows, subscriptions, and protocol fees.",
        icon: Bitcoin,
        metrics: [
            { label: "Improvement in revenue velocity", value: "30–50%" },
            { label: "Monetization per active wallet", value: "Higher" },
            { label: "Revenue leakage", value: "Reduced" },
            { label: "Income predictability", value: "High" }
        ],
        portfolioCards: [
            { title: "Revenue Flow Intelligence", icon: Activity },
            { title: "Token & Fee Monetization", icon: TrendingUp },
            { title: "Expansion & Retention Signals", icon: Users },
            { title: "Revenue Forecasting", icon: BarChart3 }
        ],
        verticalTabs: [
            { title: "Business Situation", content: "High activity, weak monetization", icon: Activity },
            { title: "Pain Points", content: "Volatile revenue, poor predictability", icon: Grid },
            { title: "AI Outcome", content: "Revenue intelligence across wallets, users, and transactions", icon: Cpu },
            { title: "Business Impact", content: "Sustainable, forecastable crypto revenue", icon: TrendingUp }
        ]
    },
    {
        title: "AI-Powered Crypto Demand Discovery Engine",
        tagline: "Identify Real Intent Before the Market Speculates.",
        description: "Crypto demand is noisy and speculative. This engine separates real adoption intent from hype by analyzing on-chain signals, off-chain behavior, community sentiment, and ecosystem activity—surfacing demand before it becomes obvious.",
        icon: Search,
        metrics: [
            { label: "Increase in high-intent signals", value: "15X–25X" },
            { label: "Acquisition quality", value: "Higher" },
            { label: "Go-to-market alignment", value: "Faster" },
            { label: "Wasted acquisition spend", value: "Reduced" }
        ],
        portfolioCards: [
            { title: "On-Chain Intent Intelligence", icon: Globe },
            { title: "Community Signal Analysis", icon: Users },
            { title: "Wallet-Level Demand Scoring", icon: Wallet },
            { title: "Market Timing Intelligence", icon: Activity }
        ],
        verticalTabs: [
            { title: "Business Situation", content: "High traffic, unclear demand", icon: Globe },
            { title: "Pain Points", content: "Speculative users, poor conversion", icon: Target },
            { title: "AI Outcome", content: "Early intent detection and demand scoring", icon: Search },
            { title: "Business Impact", content: "First-mover advantage, higher adoption", icon: Rocket }
        ]
    },
    {
        title: "AI-Powered Performance Revenue Engine",
        tagline: "Optimize Every Dollar, Token, and Transaction.",
        description: "Performance in crypto is not about clicks—it’s about activation, liquidity, and monetization. This engine continuously optimizes campaigns, incentives, and channels based on revenue contribution, not vanity metrics.",
        icon: BarChart3,
        metrics: [
            { label: "Improvement in ROAS", value: "25–45%" },
            { label: "Cost per activated user", value: "Lower" },
            { label: "Transaction conversion", value: "Higher" },
            { label: "Incentive wastage", value: "Reduced" }
        ],
        portfolioCards: [
            { title: "Channel-to-Revenue Attribution", icon: Grid },
            { title: "Incentive & Reward Optimization", icon: Gift }, // Gift might need import or substitution
            { title: "Conversion Path Intelligence", icon: Map },
            { title: "ROI-Based Spend Allocation", icon: DollarSign } // DollarSign needed
        ],
        verticalTabs: [
            { title: "Business Situation", content: "Spend grows, revenue doesn’t", icon: TrendingUp },
            { title: "Pain Points", content: "Incentive abuse, poor attribution", icon: Shield },
            { title: "AI Outcome", content: "Revenue-linked performance optimization", icon: Cpu },
            { title: "Business Impact", content: "Profitable growth, efficient spend", icon: CheckCircle2 }
        ]
    },
    {
        title: "AI Growth Acceleration Engine",
        tagline: "Discover What Scales—Eliminate What Doesn’t.",
        description: "Crypto growth is often driven by intuition and rapid experiments. This engine replaces guesswork with AI-led experimentation, identifying scalable growth levers across acquisition, activation, liquidity, and retention.",
        icon: Rocket,
        metrics: [
            { label: "Faster experimentation cycles", value: "5X–10X" },
            { label: "Activation-to-retention conv.", value: "Higher" },
            { label: "Cost of failed experiments", value: "Lower" },
            { label: "Scaling winning strategies", value: "Faster" }
        ],
        portfolioCards: [
            { title: "Growth Experiment Intelligence", icon: Activity },
            { title: "Funnel Breakpoint Detection", icon: Target },
            { title: "Liquidity & Adoption Levers", icon: TrendingUp },
            { title: "Scale Readiness Scoring", icon: CheckCircle2 }
        ],
        verticalTabs: [
            { title: "Business Situation", content: "Growth stalls after launch", icon: Activity },
            { title: "Pain Points", content: "Random experiments, no learning loop", icon: Target },
            { title: "AI Outcome", content: "AI-validated growth playbooks", icon: Rocket },
            { title: "Business Impact", content: "Repeatable, scalable growth", icon: TrendingUp }
        ]
    },
    {
        title: "AI Market Validation Intelligence",
        tagline: "Validate Demand Before You Ship Tokens or Code.",
        description: "Many crypto products fail due to weak market validation. This engine validates problem–solution fit, demand readiness, and pricing logic before major investments in protocol development or token launches.",
        icon: CheckCircle2,
        metrics: [
            { label: "Faster validation cycles", value: "Yes" },
            { label: "Go-to-market risk", value: "Reduced" },
            { label: "Launch success rates", value: "Higher" },
            { label: "Product–market fit", value: "Better" }
        ],
        portfolioCards: [
            { title: "Market Signal Intelligence", icon: Activity },
            { title: "Demand Readiness Scoring", icon: Target },
            { title: "Competitive Analysis", icon: Search },
            { title: "Launch Timing Prediction", icon: Clock } // Clock needed
        ],
        verticalTabs: [
            { title: "Business Situation", content: "Unclear product-market fit", icon: Search },
            { title: "Pain Points", content: "Costly failed launches", icon: Shield },
            { title: "AI Outcome", content: "Evidence-based validation", icon: CheckCircle2 },
            { title: "Business Impact", content: "Lower risk, higher launch success", icon: Rocket }
        ]
    },
    {
        title: "AI Customer Journey Intelligence",
        tagline: "Understand Every Wallet’s Path to Value.",
        description: "Crypto journeys span discovery, onboarding, activation, usage, governance, and expansion. This engine maps end-to-end wallet and user journeys, identifying friction, churn risk, and monetization opportunities.",
        icon: Map,
        metrics: [
            { label: "Activation and retention", value: "Higher" },
            { label: "Churn after onboarding", value: "Reduced" },
            { label: "Lifetime value per wallet", value: "Increased" },
            { label: "Ecosystem engagement", value: "Improved" }
        ],
        portfolioCards: [
            { title: "Wallet Journey Mapping", icon: Map },
            { title: "Churn & Retention Prediction", icon: Users },
            { title: "Expansion Opportunity Detection", icon: TrendingUp },
            { title: "Lifecycle Intelligence", icon: Activity }
        ],
        verticalTabs: [
            { title: "Business Situation", content: "Users drop off post-onboarding", icon: Users },
            { title: "Pain Points", content: "Poor journey visibility", icon: Search },
            { title: "AI Outcome", content: "Predictive journey intelligence", icon: Map },
            { title: "Business Impact", content: "Stronger ecosystems, higher LTV", icon: TrendingUp }
        ]
    },
    {
        title: "AI Startup MVP Acceleration Engine",
        tagline: "From Idea to Market-Validated MVP—Fast.",
        description: "Crypto startups must validate fast without burning capital. This engine accelerates idea validation, MVP design, early traction, and GTM readiness, ensuring founders build what the market will adopt.",
        icon: Zap,
        metrics: [
            { label: "Reduction in MVP time-to-market", value: "40–60%" },
            { label: "User and partner validation", value: "Faster" },
            { label: "Burn rate pre-launch", value: "Lower" },
            { label: "Investor readiness", value: "Higher" }
        ],
        portfolioCards: [
            { title: "Idea-to-MVP Intelligence", icon: Zap },
            { title: "Early Demand Signals", icon: Activity },
            { title: "GTM Readiness Scoring", icon: CheckCircle2 },
            { title: "Investor Narrative Validation", icon: Briefcase }
        ],
        verticalTabs: [
            { title: "Business Situation", content: "Early-stage uncertainty", icon: Search },
            { title: "Pain Points", content: "Slow builds, weak validation", icon: Shield },
            { title: "AI Outcome", content: "Accelerated, evidence-based MVPs", icon: Rocket },
            { title: "Business Impact", content: "Faster traction, lower risk", icon: TrendingUp }
        ]
    }
];


