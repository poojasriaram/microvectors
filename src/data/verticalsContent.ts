import {
    Cloud,
    Landmark,
    Coins,
    ShoppingBag,
    Bitcoin,
    GraduationCap,
    AlertTriangle,
    Target,
    Zap,
    TrendingUp,
    Shield,
    Users,
    Search,
    Globe,
    CheckCircle2
} from 'lucide-react';

export const verticalsContent = [
    {
        title: "SaaS & Enterprise Software",
        icon: Cloud,
        tagline: "Identify Buying Intent Early. Convert Faster. Scale ARR Predictably.",
        description: "Demand in SaaS builds quietly through research, trials, peer validation, and internal alignment. The AI engine surfaces early buying signals, maps buying committees, and converts latent interest into sales-ready pipeline—bridging product-led and sales-led motions.",
        kpis: [
            { label: "Increase in leads", value: "3X" }, // sales-accepted leads
            { label: "Sales cycle reduction", value: "40–55%" },
            { label: "Demo-to-deal conv.", value: "25–40%" },
            { label: "ARR acceleration", value: "30%+" }
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
        description: "BFSI demand is regulated, risk-sensitive, and trust-driven. The AI engine identifies compliant, high-propensity demand early, assessing financial readiness, intent strength, and risk indicators before leads enter the pipeline.",
        kpis: [
            { label: "Reduction in CAC", value: "35–50%" },
            { label: "Approval-ready leads", value: "2.5X" },
            { label: "Lead-to-disbursement", value: "40% Faster" },
            { label: "Lifetime Value", value: "Higher" }
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
        description: "FinTech demand is volatile and trust-dependent. The AI engine identifies high-intent, high-LTV prospects, predicts activation likelihood, and reduces CAC inflation and early churn.",
        kpis: [
            { label: "Activation rates", value: "30–45%" },
            { label: "Early churn reduction", value: "25%" },
            { label: "LTV-qualified leads", value: "2X" },
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
        description: "Traffic does not equal demand. The AI engine separates browsing behavior from buying intent, identifies micro-segments, and converts high-propensity demand into repeatable revenue—reducing dependence on paid ads.",
        kpis: [
            { label: "Conversion rate uplift", value: "20–35%" },
            { label: "Repeat purchases", value: "+30%" },
            { label: "Paid media dependency", value: "-25%" },
            { label: "Customer LTV", value: "Higher" }
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
        description: "Crypto demand is driven by trust, timing, and community sentiment. The AI engine distinguishes speculative traffic from credible intent and maps community behavior into sustainable activation and monetization paths.",
        kpis: [
            { label: "Activation quality", value: "2X" },
            { label: "Retention", value: "Higher" },
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
        tagline: "Enroll the Right Learners — Not Just More Leads.",
        description: "Education demand is seasonal, intent-driven, and decision-heavy. The AI engine identifies learner readiness, motivation, and program fit so counselors focus only on high-conversion opportunities.",
        kpis: [
            { label: "Enrollment increase", value: "30–45%" },
            { label: "Counselor workload", value: "-40%" },
            { label: "Admissions cycles", value: "Faster" },
            { label: "Learner satisfaction", value: "Higher" }
        ],
        verticalTabs: [
            {
                title: "Business Situations",
                icon: AlertTriangle,
                content: "High inquiry volumes, low enrollments; Counselor inefficiency; Poor learner-program fit"
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
    }
];
