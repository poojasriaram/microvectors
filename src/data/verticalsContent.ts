import {
    Cloud,
    Landmark,
    Coins,
    ShoppingBag,
    Bitcoin,
    GraduationCap,
    Factory,
    Stethoscope,
    AlertTriangle,
    Target,
    Zap,
    TrendingUp,
    Shield,
    Users,
    RefreshCw,
    Search,
    Globe,
    CheckCircle2
} from 'lucide-react';

export const verticalsContent = [
    {
        title: "SaaS & Enterprise Software",
        icon: Cloud,
        tagline: "Identify Buying Intent Early. Convert Faster. Scale ARR Predictably.",
        description: "For SaaS and enterprise software companies, demand is rarely obvious—it builds quietly through research, trials, peer validation, and internal alignment. The SaaS Demand Discovery Engine uses AI to surface early buying signals, map buying committees, and convert latent interest into sales-ready pipeline. It bridges product-led and sales-led motions by aligning intent, usage, and GTM execution.",
        kpis: [
            { label: "Increase in sales-accepted leads", value: "3X" },
            { label: "Reduction in sales cycle length", value: "40–55%" },
            { label: "Improvement in demo-to-deal conversion", value: "25–40%" },
            { label: "ARR acceleration (6–9 months)", value: "30%+" }
        ],
        verticalTabs: [
            {
                title: "Business Situations",
                icon: AlertTriangle,
                content: "High inbound noise, low intent clarity; PLG signals not translating into revenue; Multi-stakeholder buying complexity"
            },
            {
                title: "Pain Points",
                icon: Target,
                content: "Weak ICP fit; Delayed sales engagement; Low expansion visibility"
            },
            {
                title: "Solutions",
                icon: Zap,
                content: "AI-based intent + product usage correlation; Buying committee mapping; Predictive opportunity scoring"
            },
            {
                title: "Benefits",
                icon: TrendingUp,
                content: "Faster pipeline creation; Higher win rates; Predictable ARR growth"
            }
        ]
    },
    {
        title: "BFSI – Banking, Lending & Insurance",
        icon: Landmark,
        tagline: "Qualified Demand. Compliant Growth. Faster Monetization.",
        description: "BFSI demand is highly regulated, risk-sensitive, and trust-driven. This engine identifies eligible, compliant, and high-propensity demand early—before costly manual verification. AI models assess financial readiness, intent strength, and risk indicators to ensure only high-value demand enters sales pipelines.",
        kpis: [
            { label: "Reduction in acquisition cost", value: "35–50%" },
            { label: "Improvement in approval-ready leads", value: "2.5X" },
            { label: "Faster lead-to-disbursement", value: "40%" },
            { label: "Lifetime value", value: "Higher" }
        ],
        verticalTabs: [
            {
                title: "Business Situations",
                icon: AlertTriangle,
                content: "High lead volumes, low approval rates; Drop-offs during verification; Regulatory complexity"
            },
            {
                title: "Pain Points",
                icon: Target,
                content: "Manual eligibility checks; Low trust signals; Slow closures"
            },
            {
                title: "Solutions",
                icon: Shield,
                content: "AI-based financial intent & eligibility scoring; Pre-qualification before sales engagement; Risk-aware lead prioritization"
            },
            {
                title: "Benefits",
                icon: TrendingUp,
                content: "Higher conversion and approval rates; Lower compliance risk; Faster revenue realization"
            }
        ]
    },
    {
        title: "FinTech",
        icon: Coins,
        tagline: "Acquire Smarter. Activate Faster. Retain Longer.",
        description: "FinTech demand is volatile and trust-dependent. This engine identifies high-intent, high-LTV prospects, predicts activation likelihood, and orchestrates demand into sustained usage and revenue—reducing CAC inflation and early churn.",
        kpis: [
            { label: "Improvement in activation rates", value: "30–45%" },
            { label: "Reduction in early churn", value: "25%" },
            { label: "Increase in LTV-qualified leads", value: "2X" },
            { label: "Time-to-value", value: "Faster" }
        ],
        verticalTabs: [
            {
                title: "Business Situations",
                icon: AlertTriangle,
                content: "High CAC; Low post-signup activation; Short customer lifecycles"
            },
            {
                title: "Pain Points",
                icon: Target,
                content: "Speculative leads; Weak onboarding engagement; Poor churn predictability"
            },
            {
                title: "Solutions",
                icon: Zap,
                content: "AI-driven intent + financial behavior modeling; Predictive activation scoring; Personalized onboarding journeys"
            },
            {
                title: "Benefits",
                icon: TrendingUp,
                content: "Higher activation & retention; Sustainable growth; Better CAC:LTV economics"
            }
        ]
    },
    {
        title: "D2C & Consumer Brands",
        icon: ShoppingBag,
        tagline: "Turn Attention into Demand. Demand into Revenue.",
        description: "In D2C, traffic does not equal demand. This engine separates browsing behavior from buying intent, identifies micro-segments, and converts high-propensity demand into repeatable revenue—reducing dependence on paid ads.",
        kpis: [
            { label: "Uplift in conversion rates", value: "20–35%" },
            { label: "Increase in repeat purchases", value: "30%" },
            { label: "Lower paid media dependency", value: "25%" },
            { label: "Customer lifetime value", value: "Higher" }
        ],
        verticalTabs: [
            {
                title: "Business Situations",
                icon: AlertTriangle,
                content: "Rising ad costs; Low repeat purchase rates; Funnel leakage"
            },
            {
                title: "Pain Points",
                icon: Target,
                content: "Poor personalization; Generic targeting; Low engagement"
            },
            {
                title: "Solutions",
                icon: Users,
                content: "AI micro-segmentation; Intent-based retargeting; Predictive repeat-buy modeling"
            },
            {
                title: "Benefits",
                icon: TrendingUp,
                content: "Higher ROAS; Stronger brand loyalty; Compounding revenue growth"
            }
        ]
    },
    {
        title: "Crypto, Web3 & Digital Assets",
        icon: Bitcoin,
        tagline: "Identify Real Believers. Convert Communities into Value.",
        description: "Crypto demand is driven by trust, timing, and community sentiment. This engine distinguishes speculative traffic from credible intent, mapping community behavior into sustainable activation, retention, and monetization paths.",
        kpis: [
            { label: "Improvement in activation quality", value: "2X" },
            { label: "Retention beyond onboarding", value: "Higher" },
            { label: "Speculative churn", value: "Reduced" },
            { label: "Ecosystem engagement", value: "Stronger" }
        ],
        verticalTabs: [
            {
                title: "Business Situations",
                icon: AlertTriangle,
                content: "High traffic, low trust; Volatile engagement; Monetization uncertainty"
            },
            {
                title: "Pain Points",
                icon: Target,
                content: "Speculative users; Low retention; Regulatory ambiguity"
            },
            {
                title: "Solutions",
                icon: Search,
                content: "AI-based credibility & intent scoring; Community-to-conversion mapping; Predictive retention analytics"
            },
            {
                title: "Benefits",
                icon: Globe,
                content: "Higher-quality growth; Sustainable ecosystems; Improved long-term value"
            }
        ]
    },
    {
        title: "Education & EdTech",
        icon: GraduationCap,
        tagline: "Enroll the Right Learners—Not Just More Leads.",
        description: "Education demand is seasonal, intent-driven, and decision-heavy. This engine identifies learner readiness, motivation, and program fit, ensuring counselors focus only on high-conversion opportunities.",
        kpis: [
            { label: "Increase in enrollment rates", value: "30–45%" },
            { label: "Reduction in counselor workload", value: "40%" },
            { label: "Admissions cycles", value: "Faster" },
            { label: "Learner satisfaction", value: "Higher" }
        ],
        verticalTabs: [
            {
                title: "Business Situations",
                icon: AlertTriangle,
                content: "High inquiries, low enrollment; Manual counseling overload; Poor program fit"
            },
            {
                title: "Pain Points",
                icon: Target,
                content: "Low follow-up efficiency; Drop-offs post inquiry; Resource constraints"
            },
            {
                title: "Solutions",
                icon: CheckCircle2,
                content: "AI-based learner intent scoring; Automated prioritization; Personalized nurture journeys"
            },
            {
                title: "Benefits",
                icon: TrendingUp,
                content: "Higher enrollment yield; Faster decisions; Better student outcomes"
            }
        ]
    },
    {
        title: "Manufacturing & Industrial",
        icon: Factory,
        tagline: "Surface Project Demand Early. Win Complex Deals Faster.",
        description: "Industrial demand emerges through RFQs, projects, and capital planning cycles. This engine detects early project signals, predicts deal viability, and helps sales teams engage before formal procurement begins.",
        kpis: [
            { label: "Faster deal progression", value: "25–40%" },
            { label: "RFQ win rates", value: "Higher" },
            { label: "Channel ROI", value: "Improved" },
            { label: "Average deal size", value: "Larger" }
        ],
        verticalTabs: [
            {
                title: "Business Situations",
                icon: AlertTriangle,
                content: "Long buying cycles; Low inbound visibility; Channel dependency"
            },
            {
                title: "Pain Points",
                icon: Target,
                content: "Missed early signals; Manual qualification; Low forecast accuracy"
            },
            {
                title: "Solutions",
                icon: Zap,
                content: "AI-based project & account intent detection; Deal probability modeling; Channel intelligence"
            },
            {
                title: "Benefits",
                icon: TrendingUp,
                content: "Predictable pipeline; Faster closures; Higher deal confidence"
            }
        ]
    },
    {
        title: "Healthcare & HealthTech",
        icon: Stethoscope,
        tagline: "Navigate Complexity. Engage Decision-Makers. Accelerate Adoption.",
        description: "Healthcare demand is institutional, compliance-heavy, and consensus-driven. This engine identifies adoption readiness, maps stakeholder intent, and accelerates GTM without compromising trust or compliance.",
        kpis: [
            { label: "Evaluation cycles", value: "Faster" },
            { label: "Stakeholder engagement", value: "Higher" },
            { label: "GTM efficiency", value: "Improved" },
            { label: "Acquisition risk", value: "Lower" }
        ],
        verticalTabs: [
            {
                title: "Business Situations",
                icon: AlertTriangle,
                content: "Long approval cycles; Multiple stakeholders; Compliance sensitivity"
            },
            {
                title: "Pain Points",
                icon: Target,
                content: "Low engagement; Generic outreach; Slow conversions"
            },
            {
                title: "Solutions",
                icon: Shield,
                content: "Institution-level intent mapping; Persona-aware engagement; Predictive adoption readiness"
            },
            {
                title: "Benefits",
                icon: TrendingUp,
                content: "Faster adoption; Stronger trust; Better market penetration"
            }
        ]
    }
];
