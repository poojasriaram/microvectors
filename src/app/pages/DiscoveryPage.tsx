import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
    Search, Target, TrendingUp, BarChart3, ShieldCheck, Users, Rocket,
    ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, ChevronRight, HelpCircle, Layers
} from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';

interface DiscoveryData {
    title: string;
    route: string;
    question: string;
    spin: {
        situation: string;
        problem: string;
        implication: string;
        needPayoff: string;
    };
    frameworks: string[];
    profitPool: string[];
    metrics: {
        category: string;
        metric: string;
        baseline: string;
        target: string;
        frequency: string;
    }[];
    impact: string;
    treeOfThoughts: {
        phase: string;
        thought: string;
        deduction: string;
        actionableTakeaway: string;
    }[];
}

export const discoveryPagesData: Record<string, DiscoveryData> = {
    "market-discovery": {
        title: "Market Discovery",
        route: "/offerings/market-discovery",
        question: "Where is the revenue we haven't mapped?",
        spin: {
            Situation: "Your current TAM/SAM analysis is built on annual reports, analyst forecasts, and internal assumptions — refreshed once per planning cycle.",
            Problem: "Markets shift in weeks, not years. By the time your strategy deck is approved, the opportunity has moved or been captured by a faster competitor.",
            Implication: "You enter markets already saturated, miss $300M+ white spaces, and allocate capital to shrinking segments while high-growth adjacencies go unserved.",
            NeedPayoff: "Dynamic market sizing that updates continuously, identifies uncontested spaces, and quantifies entry timing before competitors react."
        },
        frameworks: [
            "Jobs-to-be-Done (JTBD) — What \"job\" is your customer hiring AI to do that no one serves?",
            "Blue Ocean Strategy — Which factors can you eliminate, reduce, raise, or create to open new market space?",
            "Adjacent Market Expansion — Where does your current capability create asymmetric advantage in an untapped vertical?"
        ],
        profitPool: [
            "Unserved market identification with zero direct competition",
            "Vertical prioritization based on readiness-to-buy, not just size",
            "Entry window mapping: 12-18 month head start before competitive response"
        ],
        metrics: [
            { category: "Market Sizing", metric: "TAM Accuracy", baseline: "±25%", target: "±5%", frequency: "Quarterly" },
            { category: "Market Sizing", metric: "SAM Coverage", baseline: "40%", target: "85%", frequency: "Quarterly" },
            { category: "Market Sizing", metric: "SOM Capture Rate", baseline: "8%", target: "18%", frequency: "Annually" },
            { category: "Growth", metric: "Market Entry Speed", baseline: "18 months", target: "3 months", frequency: "Per market" },
            { category: "Growth", metric: "New Market Revenue Contribution", baseline: "5%", target: "25%", frequency: "Annually" },
            { category: "Growth", metric: "Adjacent Market Attach Rate", baseline: "12%", target: "35%", frequency: "Quarterly" },
            { category: "Competitive", metric: "White Space Identification", baseline: "2/year", target: "8/year", frequency: "Annually" },
            { category: "Competitive", metric: "First-Mover Advantage Window", baseline: "6 months", target: "18 months", frequency: "Per opportunity" },
            { category: "Financial", metric: "New Market CAC", baseline: "$45K", target: "$18K", frequency: "Quarterly" },
            { category: "Financial", metric: "New Market LTV:CAC Ratio", baseline: "2.5:1", target: "5:1", frequency: "Annually" },
            { category: "Financial", metric: "New Market Payback Period", baseline: "24 months", target: "9 months", frequency: "Per market" }
        ],
        impact: "$300M unserved market identified",
        treeOfThoughts: [
            {
                phase: "Root Analysis (Premise)",
                thought: "Static annual TAM models create dangerous strategy latency when customer buying shifts happen in real time.",
                deduction: "Capital is allocated to saturated legacy segments while high-growth micro-adjacencies remain unmonitored.",
                actionableTakeaway: "Deploy dynamic signal ingestion across real-time web, regulatory, and purchasing triggers to calculate rolling SAM."
            },
            {
                phase: "Branch Evaluation (Exploration)",
                thought: "Hypothesis A: Deepen penetration in existing TAM. Hypothesis B: Enter unserved adjacent verticals using core capabilities.",
                deduction: "Hypothesis B yields 3.2x higher margin velocity due to zero direct competitor pricing pressure.",
                actionableTakeaway: "Prioritize adjacent market expansion where existing technology stack offers a 12-18 month head start."
            },
            {
                phase: "Terminal Synthesis (Decision)",
                thought: "Combining Jobs-to-be-Done analysis with Blue Ocean elimination rules pinpoints the exact unserved profit pool.",
                deduction: "Entering the unserved micro-segment at Month 3 captures 18% SOM before competitive reaction.",
                actionableTakeaway: "Execute targeted GTM on the top 3 high-readiness micro-verticals immediately."
            }
        ]
    },
    "demand-discovery": {
        title: "Demand Discovery",
        route: "/offerings/demand-discovery",
        question: "What are customers struggling to articulate they need?",
        spin: {
            Situation: "Your demand generation relies on explicit signals — inbound forms, RFPs, sales conversations. These capture only buyers already in-market.",
            Problem: "67% of enterprise AI demand is latent: employees using shadow tools, compliance officers scrambling for governance, operations leaders tolerating inefficiency because \"no solution exists.\"",
            Implication: "Your pipeline is 30% of what it could be. Competitors with better demand sensing capture the \"unarticulated need\" before you know it exists. Sales cycles stretch to 18 months because you're educating, not fulfilling.",
            NeedPayoff: "Surface latent demand before it becomes explicit — engage buyers 6-9 months earlier, when relationship and solution design advantages are still yours to claim."
        },
        frameworks: [
            "Voice of Customer (VoC) Deep Mining — Analyze support tickets, call transcripts, and employee behavior patterns for \"problem statements without solutions\"",
            "Derived Demand Tracking — Map upstream regulatory, supply chain, and technology shifts that create downstream AI demand",
            "FOMO & Competitive Pressure Modeling — Quantify the cost of inaction when peers adopt AI"
        ],
        profitPool: [
            "12,400+ intent signals captured monthly from accounts not yet in your CRM",
            "Shadow AI usage converted to governed, revenue-generating engagements",
            "Regulatory deadline demand spikes captured 6 months pre-deadline"
        ],
        metrics: [
            { category: "Pipeline", metric: "Marketing Qualified Leads (MQLs)", baseline: "200/month", target: "800/month", frequency: "Monthly" },
            { category: "Pipeline", metric: "Sales Qualified Leads (SQLs)", baseline: "40/month", target: "200/month", frequency: "Monthly" },
            { category: "Pipeline", metric: "SQL Conversion Rate", baseline: "15%", target: "35%", frequency: "Monthly" },
            { category: "Pipeline", metric: "Pipeline Velocity", baseline: "$500K/month", target: "$2M/month", frequency: "Monthly" },
            { category: "Pipeline", metric: "Pipeline Coverage Ratio", baseline: "2.5x", target: "4.5x", frequency: "Quarterly" },
            { category: "Demand", metric: "Intent Signal Capture", baseline: "2,000/month", target: "12,400/month", frequency: "Monthly" },
            { category: "Demand", metric: "Latent Demand Surfaced", baseline: "15%", target: "67%", frequency: "Quarterly" },
            { category: "Demand", metric: "Shadow AI-to-Governed Conversion", baseline: "5%", target: "35%", frequency: "Annually" },
            { category: "Sales Cycle", metric: "Average Sales Cycle Length", baseline: "18 months", target: "8 months", frequency: "Quarterly" },
            { category: "Sales Cycle", metric: "Time-to-First-Meeting", baseline: "14 days", target: "3 days", frequency: "Monthly" },
            { category: "Sales Cycle", metric: "Proposal-to-Close Rate", baseline: "18%", target: "42%", frequency: "Quarterly" },
            { category: "Engagement", metric: "Lead Response Time", baseline: "48 hours", target: "4 hours", frequency: "Daily" },
            { category: "Engagement", metric: "Nurture Email Open Rate", baseline: "18%", target: "38%", frequency: "Weekly" },
            { category: "Engagement", metric: "Content Engagement Score", baseline: "25", target: "72", frequency: "Monthly" },
            { category: "Revenue", metric: "Marketing Sourced Revenue", baseline: "20%", target: "55%", frequency: "Quarterly" },
            { category: "Revenue", metric: "Demand Capture Efficiency", baseline: "$0.40", target: "$1.20", frequency: "Quarterly" }
        ],
        impact: "Pipeline: +300%",
        treeOfThoughts: [
            {
                phase: "Root Analysis (Premise)",
                thought: "Relying strictly on inbound forms captures under 33% of active market intent.",
                deduction: "The majority of high-budget buyers experience latent operational pain before formalizing an RFP.",
                actionableTakeaway: "Implement multi-channel intent data ingestion across shadow tool usage, job posts, and search behavior."
            },
            {
                phase: "Branch Evaluation (Exploration)",
                thought: "Option 1: Increase ad spend on explicit keywords. Option 2: Build derived demand models tracking upstream regulatory changes.",
                deduction: "Option 2 reaches decision makers 6-9 months before RFP generation at 60% lower acquisition cost.",
                actionableTakeaway: "Construct automated triggers for upstream industry events to capture pre-RFP buyer conversations."
            },
            {
                phase: "Terminal Synthesis (Decision)",
                thought: "Synthesizing VoC call analytics with competitive pressure modeling converts unarticulated pain into structured pipeline.",
                deduction: "Compressing sales cycles from 18 to 8 months increases pipeline velocity to $2M/month.",
                actionableTakeaway: "Deploy automated nurture playbooks tailored to latent pain points across target enterprise accounts."
            }
        ]
    },
    "value-discovery": {
        title: "Value Discovery",
        route: "/offerings/value-discovery",
        question: "How do we prove ROI before the PO is signed?",
        spin: {
            Situation: "Your AI proposals rely on case studies, benchmarks, and projected savings. Procurement demands customer-specific ROI proof.",
            Problem: "60% of AI deals stall at procurement because value is \"soft\" — efficiency, innovation, strategic positioning. CFOs kill projects without hard numbers tied to their P&L.",
            Implication: "POCs fail to convert. \"Pilot purgatory\" consumes 12-18 months. Sales cycles extend. Win rates drop against vendors who can quantify value in the customer's language.",
            NeedPayoff: "Customer-specific value quantification delivered in the first sales conversation — economic, time, quality, risk, and strategic value modeled to their actual data."
        },
        frameworks: [
            "Economic Value Estimation (EVE) — Build the business case from customer's cost structure, not vendor benchmarks",
            "Time-to-Value Compression — Map process mining insights to 90-day proof points",
            "Total Cost of Ownership (TCO) Reframing — Shift conversation from \"AI costs\" to \"cost of not using AI\""
        ],
        profitPool: [
            "90-day value proof guaranteed before full commitment",
            "Deal velocity acceleration through procurement confidence",
            "POC conversion from industry average 55% to 85%"
        ],
        metrics: [
            { category: "Value Quantification", metric: "ROI Model Accuracy", baseline: "±40%", target: "±8%", frequency: "Per deal" },
            { category: "Value Quantification", metric: "Customer-Specific Value Proof", baseline: "20%", target: "100%", frequency: "Per deal" },
            { category: "Sales Velocity", metric: "Deal Velocity", baseline: "$25K/month", target: "$75K/month", frequency: "Monthly" },
            { category: "Sales Velocity", metric: "Sales Cycle Length", baseline: "9 months", target: "4.5 months", frequency: "Quarterly" },
            { category: "Sales Velocity", metric: "Time-to-Proposal", baseline: "6 weeks", target: "10 days", frequency: "Per deal" },
            { category: "Conversion", metric: "POC Conversion Rate", baseline: "55%", target: "85%", frequency: "Quarterly" },
            { category: "Conversion", metric: "Proposal Win Rate", baseline: "22%", target: "48%", frequency: "Quarterly" },
            { category: "Conversion", metric: "Procurement Pass-Through Rate", baseline: "40%", target: "82%", frequency: "Quarterly" },
            { category: "Deal Size", metric: "Average Contract Value (ACV)", baseline: "$85K", target: "$185K", frequency: "Quarterly" },
            { category: "Deal Size", metric: "Average Deal Size Growth", baseline: "5%", target: "28%", frequency: "Annually" },
            { category: "Deal Size", metric: "Expansion Revenue Rate", baseline: "12%", target: "35%", frequency: "Annually" },
            { category: "Customer Success", metric: "Time-to-First-Value", baseline: "120 days", target: "45 days", frequency: "Per customer" },
            { category: "Customer Success", metric: "90-Day Value Realization", baseline: "30%", target: "90%", frequency: "Per customer" },
            { category: "Customer Success", metric: "Customer Satisfaction (CSAT)", baseline: "72", target: "92%", frequency: "Quarterly" },
            { category: "Customer Success", metric: "Net Promoter Score (NPS)", baseline: "18", target: "52", frequency: "Annually" },
            { category: "Retention", metric: "Gross Revenue Retention", baseline: "85%", target: "95%", frequency: "Annually" },
            { category: "Retention", metric: "Net Revenue Retention", baseline: "105%", target: "125%", frequency: "Annually" }
        ],
        impact: "Deal velocity: +50% · POC conversion: 85%",
        treeOfThoughts: [
            {
                phase: "Root Analysis (Premise)",
                thought: "Generic vendor ROI benchmarks fail CFO scrutiny, causing 60% of enterprise AI pilots to stall in procurement.",
                deduction: "Proposals must incorporate the buyer's granular P&L data and operational metrics directly.",
                actionableTakeaway: "Replace standard slide decks with interactive Economic Value Estimation (EVE) financial models."
            },
            {
                phase: "Branch Evaluation (Exploration)",
                thought: "Approach A: Offer discounts to pass procurement. Approach B: Reframe project around Cost of Inaction (COI) and 90-day milestone value.",
                deduction: "Approach B maintains premium ACV ($185K) and increases procurement pass-through from 40% to 82%.",
                actionableTakeaway: "Deliver customer-specific financial impact models in the initial evaluation meeting."
            },
            {
                phase: "Terminal Synthesis (Decision)",
                thought: "Compressing Time-to-First-Value to 45 days guarantees 85% POC conversion and doubles deal velocity.",
                deduction: "Procurement resistance converts to executive sponsorship when risk is quantified and capped.",
                actionableTakeaway: "Embed 90-day value realization milestones into all enterprise proposal frameworks."
            }
        ]
    },
    "channel-discovery": {
        title: "Channel Discovery",
        route: "/offerings/channel-discovery",
        question: "How do we distribute without platform dependency?",
        spin: {
            Situation: "Your AI services or products rely on partner networks, app stores, or algorithm-dependent platforms. A single algorithm change or partner defection threatens 70% of revenue.",
            Problem: "Platform dependency creates margin compression (8-12% net), unpredictable visibility, and zero customer relationship ownership. You're renting your distribution.",
            Implication: "Competitors with owned channels capture 2-3x margin on equivalent offerings. Your growth ceiling is set by someone else's API or policy team.",
            NeedPayoff: "Algorithm-resilient distribution architecture with owned channels, productized service automation, and partner intelligence that optimizes — not replaces — your go-to-market."
        },
        frameworks: [
            "Channel Mix Optimization — Model owned vs. earned vs. paid vs. partner contribution to margin and control",
            "Productized Service Design — Convert 60% of bespoke delivery to scalable, margin-rich offerings",
            "Partner Ecosystem Intelligence — Score partners by culture fit, co-sell velocity, and strategic alignment, not just revenue"
        ],
        profitPool: [
            "Platform dependency reduced from 70% to 30%",
            "Service margins expanded from 25% to 55% through productization",
            "Partner ROI improved 60% through data-driven selection and enablement"
        ],
        metrics: [
            { category: "Channel Mix", metric: "Owned Channel Revenue %", baseline: "15%", target: "55%", frequency: "Quarterly" },
            { category: "Channel Mix", metric: "Partner Revenue %", baseline: "60%", target: "30%", frequency: "Quarterly" },
            { category: "Channel Mix", metric: "Platform Dependency %", baseline: "70%", target: "30%", frequency: "Quarterly" },
            { category: "Margin", metric: "Gross Margin (Services)", baseline: "25%", target: "55%", frequency: "Quarterly" },
            { category: "Margin", metric: "Gross Margin (Productized)", baseline: "40%", target: "72%", frequency: "Quarterly" },
            { category: "Margin", metric: "Net Margin by Channel", baseline: "8%", target: "22%", frequency: "Quarterly" },
            { category: "Partner", metric: "Partner Activation Rate", baseline: "35%", target: "75%", frequency: "Quarterly" },
            { category: "Partner", metric: "Partner-Sourced Revenue", baseline: "$2M", target: "$8M", frequency: "Annually" },
            { category: "Partner", metric: "Partner CAC", baseline: "$15K", target: "$6K", frequency: "Quarterly" },
            { category: "Partner", metric: "Partner Churn Rate", baseline: "25%", target: "8%", frequency: "Annually" },
            { category: "Partner", metric: "Co-Sell Win Rate", baseline: "18%", target: "45%", frequency: "Quarterly" },
            { category: "Digital", metric: "Organic Traffic %", baseline: "12%", target: "40%", frequency: "Monthly" },
            { category: "Digital", metric: "Direct Traffic Growth", baseline: "5%", target: "35%", frequency: "Monthly" },
            { category: "Digital", metric: "Customer Acquisition Cost (CAC)", baseline: "$45K", target: "$18K", frequency: "Quarterly" },
            { category: "Digital", metric: "Lifetime Value (LTV)", baseline: "$180K", target: "$420K", frequency: "Annually" },
            { category: "Digital", metric: "LTV:CAC Ratio", baseline: "4:1", target: "12:1", frequency: "Annually" },
            { category: "Productization", metric: "Productized Revenue %", baseline: "20%", target: "60%", frequency: "Quarterly" },
            { category: "Productization", metric: "Time-to-Delivery (Productized)", baseline: "12 weeks", target: "2 weeks", frequency: "Per engagement" },
            { category: "Productization", metric: "Delivery Cost Reduction", baseline: "—", target: "45%", frequency: "Annually" }
        ],
        impact: "Margin: +30 points",
        treeOfThoughts: [
            {
                phase: "Root Analysis (Premise)",
                thought: "Over-reliance on third-party ecosystems or single app stores caps net margins at 8-12% and risks revenue extinction on API updates.",
                deduction: "Building owned distribution channels is mandatory to secure customer data ownership and margin control.",
                actionableTakeaway: "Conduct a Channel Mix Audit to map current platform vulnerability and revenue concentration."
            },
            {
                phase: "Branch Evaluation (Exploration)",
                thought: "Path 1: Continue renting traffic via paid partner programs. Path 2: Convert custom services into productized assets sold direct.",
                deduction: "Path 2 expands gross margins from 25% to 55% while reducing delivery time from 12 weeks to 2 weeks.",
                actionableTakeaway: "Productize core service delivery modules into standardized, automated offerings."
            },
            {
                phase: "Terminal Synthesis (Decision)",
                thought: "Rebalancing distribution to 55% owned channels drives LTV:CAC to 12:1 and secures net margins of 22%.",
                deduction: "Partner networks become high-yield force multipliers when scored for strategic alignment rather than sheer volume.",
                actionableTakeaway: "Shift top marketing resources toward owned digital properties and high-converting direct channels."
            }
        ]
    },
    "competitive-discovery": {
        title: "Competitive Discovery",
        route: "/offerings/competitive-discovery",
        question: "How do we win before the RFP is issued?",
        spin: {
            Situation: "Your competitive intelligence is quarterly: win/loss reviews, analyst reports, sales anecdotes. By the time you react, the deal is lost.",
            Problem: "Competitors launch features, drop prices, or shift messaging in days. Your battlecards are outdated before they're printed. Response time averages 2-3 weeks.",
            Implication: "You win on price, not value. Premium positioning erodes. Deals lost to \"surprise\" competitors cost $2M+ annually. Market share shifts before your next board meeting.",
            NeedPayoff: "Real-time competitive sensing with automated response playbooks — detect moves in hours, counter in days, maintain premium pricing through superior positioning intelligence."
        },
        frameworks: [
            "Competitive Early Warning System — Monitor pricing, messaging, hiring, patent filings, and product releases across 50+ signal types",
            "Game Theory Pricing — Model competitor response to your moves before you make them",
            "Win/Loss Pattern Recognition — Identify the 3-4 factors that actually determine wins, not what sales thinks determines wins"
        ],
        profitPool: [
            "Competitive response time compressed from weeks to under 4 hours",
            "Premium pricing maintained through differentiated positioning",
            "Win rate against top 3 competitors improved 25%"
        ],
        metrics: [
            { category: "Competitive Intelligence", metric: "Competitive Response Time", baseline: "14 days", target: "4 hours", frequency: "Per event" },
            { category: "Competitive Intelligence", metric: "Battlecard Refresh Rate", baseline: "Quarterly", target: "Real-time", frequency: "Continuous" },
            { category: "Competitive Intelligence", metric: "Competitive Signal Types Monitored", baseline: "8", target: "50+", frequency: "Monthly" },
            { category: "Win/Loss", metric: "Win Rate (Overall)", baseline: "28%", target: "48%", frequency: "Quarterly" },
            { category: "Win/Loss", metric: "Win Rate vs. Top 3 Competitors", baseline: "22%", target: "47%", frequency: "Quarterly" },
            { category: "Win/Loss", metric: "Win Rate (Premium Priced)", baseline: "15%", target: "38%", frequency: "Quarterly" },
            { category: "Win/Loss", metric: "Loss Rate to Price", baseline: "45%", target: "18%", frequency: "Quarterly" },
            { category: "Win/Loss", metric: "Loss Rate to \"Surprise\" Competitor", baseline: "22%", target: "5%", frequency: "Quarterly" },
            { category: "Pricing", metric: "Average Selling Price (ASP)", baseline: "$75K", target: "$155K", frequency: "Quarterly" },
            { category: "Pricing", metric: "Discount Rate", baseline: "28%", target: "8%", frequency: "Per deal" },
            { category: "Pricing", metric: "Price Premium Maintained", baseline: "0%", target: "35%", frequency: "Quarterly" },
            { category: "Market Share", metric: "Market Share (Addressable)", baseline: "4%", target: "12%", frequency: "Annually" },
            { category: "Market Share", metric: "Market Share Growth Rate", baseline: "1%", target: "5%", frequency: "Annually" },
            { category: "Market Share", metric: "Competitor Share Erosion", baseline: "—", target: "8%", frequency: "Annually" },
            { category: "Deal Protection", metric: "At-Risk Deal Identification", baseline: "60%", target: "95%", frequency: "Weekly" },
            { category: "Deal Protection", metric: "Deal Recovery Rate", baseline: "25%", target: "65%", frequency: "Quarterly" }
        ],
        impact: "Win rate: +25%",
        treeOfThoughts: [
            {
                phase: "Root Analysis (Premise)",
                thought: "Quarterly competitive reviews miss rapid competitor pricing changes, product releases, and executive hires.",
                deduction: "Sales reps discount heavily (28%) because they lack real-time differentiation data during live deal negotiations.",
                actionableTakeaway: "Deploy automated tracking across 50+ competitive signal vectors (hiring, patents, web updates)."
            },
            {
                phase: "Branch Evaluation (Exploration)",
                thought: "Scenario A: Match competitor price cuts. Scenario B: Apply Game Theory Positioning to highlight competitor structural limitations.",
                deduction: "Scenario B preserves a 35% price premium and increases win rates vs. top 3 competitors from 22% to 47%.",
                actionableTakeaway: "Equip sales teams with dynamic, auto-updating battlecards integrated into CRM."
            },
            {
                phase: "Terminal Synthesis (Decision)",
                thought: "Compressing competitive response time to 4 hours allows pre-emptive positioning before RFPs are issued.",
                deduction: "Identifies 95% of at-risk deals early, improving deal recovery rates to 65%.",
                actionableTakeaway: "Institute real-time competitive early warning alerts across active sales opportunities."
            }
        ]
    },
    "customer-discovery": {
        title: "Customer Discovery",
        route: "/offerings/customer-discovery",
        question: "Who is actually ready to buy AI — and who will waste our time?",
        spin: {
            Situation: "Your ICP is defined by firmographics: company size, industry, revenue. Marketing generates MQLs; sales qualifies. The funnel is linear and noisy.",
            Problem: "50% of \"target\" accounts lack AI readiness: no data infrastructure, no executive sponsor, no change appetite. SDRs burn 60% of capacity on accounts that will never convert this year.",
            Implication: "$1.2M+ in wasted sales capacity annually. CAC inflates 3x above benchmark. Marketing ROI is unmeasurable because the targeting is wrong, not the messaging.",
            NeedPayoff: "Segment by AI readiness, behavioral signals, and psychographic alignment — prioritize the 20% of accounts with 80% conversion probability, and personalize engagement to their specific maturity and values."
        },
        frameworks: [
            "Technographic + Digital Maturity Scoring — Assess stack, data quality, and cloud posture as readiness predictors",
            "Psychographic AI Segmentation — Cluster by attitudes toward innovation, risk tolerance, and automation philosophy",
            "Propensity Modeling — Predict 12-month purchase likelihood with 85%+ accuracy"
        ],
        profitPool: [
            "CAC reduced 65% through precision targeting",
            "SDR efficiency improved 80% by disqualifying early",
            "Messaging resonance increased 3x through psychographic alignment"
        ],
        metrics: [
            { category: "Targeting", metric: "ICP Accuracy", baseline: "45%", target: "88%", frequency: "Quarterly" },
            { category: "Targeting", metric: "AI Readiness Score Coverage", baseline: "20%", target: "100%", frequency: "Quarterly" },
            { category: "Targeting", metric: "Propensity Model Accuracy", baseline: "62%", target: "88%", frequency: "Quarterly" },
            { category: "Lead Quality", metric: "MQL-to-SQL Conversion", baseline: "12%", target: "38%", frequency: "Monthly" },
            { category: "Lead Quality", metric: "SQL-to-Opportunity Conversion", baseline: "35%", target: "72%", frequency: "Monthly" },
            { category: "Lead Quality", metric: "Lead Scoring Accuracy", baseline: "55%", target: "90%", frequency: "Monthly" },
            { category: "Efficiency", metric: "SDR Efficiency (Meetings/SDR/Month)", baseline: "8", target: "28", frequency: "Monthly" },
            { category: "Efficiency", metric: "SDR Time on Qualified Accounts", baseline: "40%", target: "85%", frequency: "Monthly" },
            { category: "Efficiency", metric: "Disqualification Speed", baseline: "3 weeks", target: "3 days", frequency: "Per lead" },
            { category: "CAC", metric: "Customer Acquisition Cost (CAC)", baseline: "$85K", target: "$30K", frequency: "Quarterly" },
            { category: "CAC", metric: "CAC Payback Period", baseline: "18 months", target: "7 months", frequency: "Quarterly" },
            { category: "CAC", metric: "CAC Trend (YoY)", baseline: "+15%", target: "-25%", frequency: "Annually" },
            { category: "Engagement", metric: "Email Personalization Rate", baseline: "10%", target: "85%", frequency: "Weekly" },
            { category: "Engagement", metric: "Content Relevance Score", baseline: "32", target: "78", frequency: "Monthly" },
            { category: "Engagement", metric: "Account Engagement Score", baseline: "25", target: "68", frequency: "Monthly" },
            { category: "Conversion", metric: "Opportunity Win Rate (Targeted)", baseline: "22%", target: "52%", frequency: "Quarterly" },
            { category: "Conversion", metric: "Account Penetration Rate", baseline: "15%", target: "45%", frequency: "Annually" },
            { category: "Retention", metric: "Customer Fit Score (Post-Sale)", baseline: "65", target: "90", frequency: "Quarterly" },
            { category: "Retention", metric: "Early Churn Risk Identification", baseline: "40%", target: "90%", frequency: "Monthly" }
        ],
        impact: "CAC: -65%",
        treeOfThoughts: [
            {
                phase: "Root Analysis (Premise)",
                thought: "Traditional firmographic ICPs fail to detect whether an account possesses the technical data maturity or leadership alignment to implement AI.",
                deduction: "SDRs waste over 60% of their outreach bandwidth on unready accounts destined to stall.",
                actionableTakeaway: "Combine technographic stack analysis with psychographic risk profiling to score AI readiness upfront."
            },
            {
                phase: "Branch Evaluation (Exploration)",
                thought: "Option A: Broad outbound volume. Option B: Algorithmic propensity filtering targeting the top 20% highest-readiness accounts.",
                deduction: "Option B lowers CAC from $85K to $30K while increasing SDR booked meetings per month from 8 to 28.",
                actionableTakeaway: "Implement automated early disqualification within 3 days for accounts scoring below readiness thresholds."
            },
            {
                phase: "Terminal Synthesis (Decision)",
                thought: "Aligning outreach messaging with psychographic maturity increases targeted win rates to 52%.",
                deduction: "Disqualifying unready leads early optimizes sales capacity and shortens CAC payback to 7 months.",
                actionableTakeaway: "Focus reps exclusively on high-propensity, high-readiness target account clusters."
            }
        ]
    },
    "product-market-fit-discovery": {
        title: "Product-Market Fit Discovery",
        route: "/offerings/product-market-fit-discovery",
        question: "How do we stop building features no one uses?",
        spin: {
            Situation: "Your product roadmap is built on customer requests, competitive parity, and engineering capability. Features ship; adoption is assumed.",
            Problem: "70% of AI features are never used. $3M+ in annual R&D waste. Feature bloat confuses users. Engineering velocity slows maintaining unused code.",
            Implication: "Churn rises 30% above benchmark as users fail to find value. Competitors with leaner, validated offerings win on simplicity. Your roadmap becomes a graveyard of good intentions.",
            NeedPayoff: "Validate features before build with simulated user behavior, cohort retention prediction, and rapid prototyping — ship only what users will adopt, pay for, and expand."
        },
        frameworks: [
            "Wizard of Oz Testing — Simulate AI features with human backend to validate demand before model training",
            "Cohort Retention Prediction — Model which features drive 90-day retention before development",
            "Feature Adoption Path Analysis — Map the sequence of features that leads from trial to expansion, not just activation"
        ],
        profitPool: [
            "Feature success rate improved from 30% to 70%",
            "$2M annual R&D waste eliminated",
            "Time-to-PMF accelerated through validated learning"
        ],
        metrics: [
            { category: "Product Development", metric: "Feature Success Rate", baseline: "30%", target: "70%", frequency: "Per release" },
            { category: "Product Development", metric: "R&D Waste (Unused Features)", baseline: "$3M/year", target: "$500K/year", frequency: "Annually" },
            { category: "Product Development", metric: "Time-to-Validate (Pre-Build)", baseline: "0 days", target: "14 days", frequency: "Per feature" },
            { category: "Product Development", metric: "Build-vs-Buy Decision Accuracy", baseline: "55%", target: "88%", frequency: "Quarterly" },
            { category: "Adoption", metric: "Feature Adoption Rate (30 days)", baseline: "15%", target: "65%", frequency: "Per feature" },
            { category: "Adoption", metric: "Feature Adoption Rate (90 days)", baseline: "25%", target: "78%", frequency: "Per feature" },
            { category: "Adoption", metric: "Power User Feature Utilization", baseline: "8 features", target: "22 features", frequency: "Monthly" },
            { category: "Retention", metric: "30-Day Retention (New Feature)", baseline: "40%", target: "82%", frequency: "Per feature" },
            { category: "Retention", metric: "90-Day Retention (Cohort)", baseline: "55%", target: "85%", frequency: "Per cohort" },
            { category: "Retention", metric: "Feature-Driven Churn Reduction", baseline: "—", target: "25%", frequency: "Annually" },
            { category: "Expansion", metric: "Feature Expansion Revenue", baseline: "8%", target: "32%", frequency: "Annually" },
            { category: "Expansion", metric: "Upsell Rate (Feature-Driven)", baseline: "12%", target: "38%", frequency: "Quarterly" },
            { category: "Expansion", metric: "Net Revenue Retention", baseline: "105%", target: "128%", frequency: "Annually" },
            { category: "Efficiency", metric: "Time-to-PMF", baseline: "18 months", target: "8 months", frequency: "Per product" },
            { category: "Efficiency", metric: "Engineering Velocity (Story Points)", baseline: "120/sprint", target: "200/sprint", frequency: "Per sprint" },
            { category: "Efficiency", metric: "Technical Debt Ratio", baseline: "35%", target: "12%", frequency: "Quarterly" },
            { category: "Customer Success", metric: "Time-to-First-Value", baseline: "90 days", target: "21 days", frequency: "Per customer" },
            { category: "Customer Success", metric: "Product-Market Fit Score", baseline: "35", target: "72", frequency: "Quarterly" },
            { category: "Customer Success", metric: "Customer Effort Score (CES)", baseline: "5.2", target: "2.1", frequency: "Quarterly" }
        ],
        impact: "R&D waste: -$2M/year",
        treeOfThoughts: [
            {
                phase: "Root Analysis (Premise)",
                thought: "Building roadmap features based solely on customer requests leads to 70% feature non-adoption and $3M+ in R&D waste.",
                deduction: "Stated customer preferences rarely equal actual post-build product usage.",
                actionableTakeaway: "Mandate pre-build demand validation using Wizard of Oz prototypes and behavioral intent testing."
            },
            {
                phase: "Branch Evaluation (Exploration)",
                thought: "Hypothesis 1: Build full custom feature set requested by top accounts. Hypothesis 2: Run 14-day pre-build simulation to model retention impact.",
                deduction: "Hypothesis 2 cuts R&D waste to under $500K/year and increases feature adoption from 15% to 65%.",
                actionableTakeaway: "Establish a strict 14-day validation gate before allocating engineering sprints."
            },
            {
                phase: "Terminal Synthesis (Decision)",
                thought: "Validating feature adoption paths prior to deployment increases engineering velocity to 200 story points/sprint.",
                deduction: "Reduces technical debt ratio from 35% to 12% while boosting Net Revenue Retention to 128%.",
                actionableTakeaway: "Focus product teams exclusively on high-retention, revenue-expanding feature vectors."
            }
        ]
    }
};

export default function DiscoveryPage() {
    const { slug } = useParams<{ slug: string }>();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const pageSlug = slug || 'market-discovery';
    const data = discoveryPagesData[pageSlug];

    if (!data) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center pt-32">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Discovery Layer Not Found</h2>
                <Link to="/offerings" className="text-blue-600 font-semibold hover:underline">Back to Offerings</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 pt-24 lg:pt-32 pb-24">
            {/* Breadcrumb Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <nav className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link to="/offerings" className="hover:text-blue-600 transition-colors">Offerings</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-blue-600 font-bold">{data.title}</span>
                </nav>
            </div>

            {/* Hero Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <Reveal width="100%">
                    <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
                            <Layers className="w-4 h-4 text-blue-400" />
                            Discovery Layer
                        </div>
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 font-heading leading-tight text-white drop-shadow-md">
                            {data.title}
                        </h1>
                        <p className="text-xl sm:text-2xl text-blue-200 font-medium italic mb-8 max-w-3xl">
                            "{data.question}"
                        </p>
                        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20">
                            <span className="text-sm text-slate-300 font-medium">Quantified Business Impact:</span>
                            <span className="text-lg font-bold text-amber-300">{data.impact}</span>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* SPIN Element Matrix */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <Reveal width="100%">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 font-heading flex items-center gap-3">
                        <Target className="w-7 h-7 text-blue-600" />
                        SPIN Discovery Matrix
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">SPIN Element</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Situation
                            </h3>
                            <p className="text-slate-600 text-sm font-medium leading-relaxed">{data.spin.Situation || data.spin.situation}</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">SPIN Element</div>
                            <h3 className="text-xl font-bold text-rose-600 mb-3 flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> Problem
                            </h3>
                            <p className="text-slate-600 text-sm font-medium leading-relaxed">{data.spin.Problem || data.spin.problem}</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">SPIN Element</div>
                            <h3 className="text-xl font-bold text-amber-600 mb-3 flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Implication
                            </h3>
                            <p className="text-slate-600 text-sm font-medium leading-relaxed">{data.spin.Implication || data.spin.implication}</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">SPIN Element</div>
                            <h3 className="text-xl font-bold text-emerald-600 mb-3 flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Need-Payoff
                            </h3>
                            <p className="text-slate-600 text-sm font-medium leading-relaxed">{data.spin.NeedPayoff || data.spin.needPayoff}</p>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Discovery Frameworks & Profit Pool Capture */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="grid lg:grid-cols-2 gap-8">
                    <Reveal width="100%">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm h-full">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 font-heading flex items-center gap-3">
                                <Lightbulb className="w-6 h-6 text-amber-500" />
                                Discovery Frameworks Applied
                            </h2>
                            <ul className="space-y-4">
                                {data.frameworks.map((fw, idx) => (
                                    <li key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                                        <span className="text-slate-700 font-semibold text-sm leading-snug">{fw}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal width="100%">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm h-full">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 font-heading flex items-center gap-3">
                                <TrendingUp className="w-6 h-6 text-emerald-500" />
                                Profit Pool Capture
                            </h2>
                            <ul className="space-y-4">
                                {data.profitPool.map((pp, idx) => (
                                    <li key={idx} className="flex items-start gap-3 p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                                        <Rocket className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                                        <span className="text-slate-800 font-bold text-sm leading-snug">{pp}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Sales Acceleration Intelligence System */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <Reveal width="100%">
                    <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                            <div>
                                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">
                                    Autonomous Revenue Architecture
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading flex items-center gap-3">
                                    <HelpCircle className="w-7 h-7 text-indigo-400" />
                                    Sales Acceleration Intelligence Matrix
                                </h2>
                            </div>
                            <span className="px-4 py-2 bg-indigo-500/20 border border-indigo-400/30 rounded-xl text-indigo-300 font-bold text-xs">
                                Executive Strategic Framework
                            </span>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {data.treeOfThoughts.map((tot, idx) => (
                                <div key={idx} className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-400 bg-indigo-950 px-3 py-1 rounded-full border border-indigo-800">
                                                Stage 0{idx + 1}
                                            </span>
                                            <span className="text-xs text-slate-400 font-medium">{tot.phase}</span>
                                        </div>
                                        <div className="mb-4">
                                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Thought Hypothesis</h4>
                                            <p className="text-sm text-slate-200 font-medium leading-relaxed">{tot.thought}</p>
                                        </div>
                                        <div className="mb-4">
                                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Logical Deduction</h4>
                                            <p className="text-sm text-indigo-200 font-medium leading-relaxed">{tot.deduction}</p>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-slate-700/60 mt-2">
                                        <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">Actionable Takeaway</h4>
                                        <p className="text-xs text-emerald-300 font-semibold leading-normal">{tot.actionableTakeaway}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Standard Marketing, Sales & KPI Metrics Table */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <Reveal width="100%">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 font-heading flex items-center gap-3">
                        <BarChart3 className="w-7 h-7 text-blue-600" />
                        Standard Marketing, Sales & KPI Metrics
                    </h2>
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase text-slate-500 tracking-wider">
                                        <th className="py-4 px-6">Metric Category</th>
                                        <th className="py-4 px-6">Specific Metric</th>
                                        <th className="py-4 px-6 text-center">Baseline</th>
                                        <th className="py-4 px-6 text-center">Target</th>
                                        <th className="py-4 px-6 text-right">Measurement Frequency</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                                    {data.metrics.map((m, idx) => (
                                        <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                                            <td className="py-4 px-6 font-bold text-slate-900">{m.category}</td>
                                            <td className="py-4 px-6 text-blue-900 font-semibold">{m.metric}</td>
                                            <td className="py-4 px-6 text-center text-slate-500">{m.baseline}</td>
                                            <td className="py-4 px-6 text-center font-bold text-emerald-600 bg-emerald-50/40">{m.target}</td>
                                            <td className="py-4 px-6 text-right text-slate-500">{m.frequency}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Bottom CTA */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal width="100%">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl">
                        <h2 className="text-3xl font-extrabold mb-4 font-heading">Schedule a 45-Minute Profit Pool Diagnostic</h2>
                        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto font-medium">
                            We'll map your current blind spots, identify 3 addressable profit pools, and outline the validation path to capture them in the next 12 months.
                        </p>
                        <Link 
                            to="/book-consultation"
                            className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-blue-50 px-8 py-4 rounded-xl text-base font-bold transition-all shadow-lg hover:-translate-y-0.5"
                        >
                            Book Your Diagnostic
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}
