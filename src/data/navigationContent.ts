export interface ServiceData {
    title: string;
    category: string;
    heroDescription: string;
    features: { title: string; description: string }[];
    benefits: string[];
    faqs: { question: string; answer: string }[];
    useCases?: { title: string; description: string }[];
    technologies?: string[];
    architectureDiagrams?: { src: string; title: string; description: string }[];
    kpis?: { metric: string; label: string }[];
    successStories?: { title: string; description: string }[];
    serviceModels?: { title: string; description: string }[];
    projectLifecycle?: { step: string; description: string; desc?: string }[];
}

export const servicesData: Record<string, ServiceData> = {
"demand-pulse": {

        title: "Demand Pulse",
        category: "Capabilities",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade Demand Pulse capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive Demand Pulse Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate Demand Pulse execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy Demand Pulse?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"ai-demand-discovery": {

        title: "AI Demand Discovery",
        category: "Capabilities",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade AI Demand Discovery capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive AI Demand Discovery Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate AI Demand Discovery execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy AI Demand Discovery?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"ai-lead-generation": {

        title: "AI Lead Generation",
        category: "Capabilities",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade AI Lead Generation capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive AI Lead Generation Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate AI Lead Generation execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy AI Lead Generation?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"ai-lead-nurturing": {

        title: "AI Lead Nurturing",
        category: "Capabilities",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade AI Lead Nurturing capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive AI Lead Nurturing Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate AI Lead Nurturing execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy AI Lead Nurturing?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"ai-mvp-validation": {

        title: "AI MVP Validation",
        category: "Capabilities",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade AI MVP Validation capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive AI MVP Validation Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate AI MVP Validation execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy AI MVP Validation?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"ai-sales-transformation": {

        title: "AI Sales Transformation",
        category: "Capabilities",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade AI Sales Transformation capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive AI Sales Transformation Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate AI Sales Transformation execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy AI Sales Transformation?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"ai-revenue-operations": {

        title: "AI Revenue Operations",
        category: "Capabilities",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade AI Revenue Operations capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive AI Revenue Operations Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate AI Revenue Operations execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy AI Revenue Operations?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"ai-revenue-acceleration": {

        title: "AI Revenue Acceleration",
        category: "Capabilities",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade AI Revenue Acceleration capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive AI Revenue Acceleration Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate AI Revenue Acceleration execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy AI Revenue Acceleration?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"crypto-revenue": {

        title: "Crypto Revenue Acceleration",
        category: "Crypto",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade Crypto Revenue Acceleration capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive Crypto Revenue Acceleration Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate Crypto Revenue Acceleration execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy Crypto Revenue Acceleration?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"crypto-demand-discovery": {

        title: "Crypto Demand Discovery",
        category: "Crypto",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade Crypto Demand Discovery capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive Crypto Demand Discovery Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate Crypto Demand Discovery execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy Crypto Demand Discovery?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"crypto-performance": {

        title: "Crypto Performance Revenue",
        category: "Crypto",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade Crypto Performance Revenue capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive Crypto Performance Revenue Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate Crypto Performance Revenue execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy Crypto Performance Revenue?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"crypto-growth": {

        title: "Crypto Growth Acceleration",
        category: "Crypto",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade Crypto Growth Acceleration capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive Crypto Growth Acceleration Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate Crypto Growth Acceleration execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy Crypto Growth Acceleration?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"crypto-market-validation": {

        title: "Market Validation Intelligence",
        category: "Crypto",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade Market Validation Intelligence capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive Market Validation Intelligence Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate Market Validation Intelligence execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy Market Validation Intelligence?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"crypto-journey": {

        title: "Customer Journey Intelligence",
        category: "Crypto",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade Customer Journey Intelligence capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive Customer Journey Intelligence Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate Customer Journey Intelligence execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy Customer Journey Intelligence?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"crypto-startup": {

        title: "Startup MVP Acceleration",
        category: "Crypto",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade Startup MVP Acceleration capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive Startup MVP Acceleration Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate Startup MVP Acceleration execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy Startup MVP Acceleration?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"revenue-acceleration": {

        title: "AI-Driven Revenue Acceleration",
        category: "Outcomes",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade AI-Driven Revenue Acceleration capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive AI-Driven Revenue Acceleration Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate AI-Driven Revenue Acceleration execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy AI-Driven Revenue Acceleration?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"growth-hacking": {

        title: "AI-Driven Growth Hacking",
        category: "Outcomes",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade AI-Driven Growth Hacking capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive AI-Driven Growth Hacking Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate AI-Driven Growth Hacking execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy AI-Driven Growth Hacking?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"performance-marketing": {

        title: "AI-Driven Performance Marketing",
        category: "Outcomes",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade AI-Driven Performance Marketing capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive AI-Driven Performance Marketing Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate AI-Driven Performance Marketing execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy AI-Driven Performance Marketing?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"enterprise-sales": {

        title: "Enterprise Sales Acceleration",
        category: "Outcomes",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade Enterprise Sales Acceleration capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive Enterprise Sales Acceleration Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate Enterprise Sales Acceleration execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy Enterprise Sales Acceleration?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"digital-sales": {

        title: "Digital & Inside Sales",
        category: "Outcomes",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade Digital & Inside Sales capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive Digital & Inside Sales Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate Digital & Inside Sales execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy Digital & Inside Sales?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"d2c-sales": {

        title: "D2C & High-Velocity Sales",
        category: "Outcomes",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade D2C & High-Velocity Sales capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive D2C & High-Velocity Sales Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate D2C & High-Velocity Sales execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy D2C & High-Velocity Sales?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"bfsi-sales": {

        title: "BFSI Sales Acceleration",
        category: "Outcomes",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade BFSI Sales Acceleration capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive BFSI Sales Acceleration Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate BFSI Sales Acceleration execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy BFSI Sales Acceleration?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"ai-business-strategy": {

        title: "AI Business Growth Strategy",
        category: "Solutions",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade AI Business Growth Strategy capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive AI Business Growth Strategy Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate AI Business Growth Strategy execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy AI Business Growth Strategy?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"ai-market-strategy": {

        title: "AI Market Strategy & Demand",
        category: "Solutions",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade AI Market Strategy & Demand capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive AI Market Strategy & Demand Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate AI Market Strategy & Demand execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy AI Market Strategy & Demand?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"ai-auto-sales-pilot": {

        title: "AI Auto Sales Pilot",
        category: "Solutions",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade AI Auto Sales Pilot capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive AI Auto Sales Pilot Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate AI Auto Sales Pilot execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy AI Auto Sales Pilot?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"sales-optimization": {

        title: "AI Sales Process Optimization",
        category: "Solutions",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade AI Sales Process Optimization capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive AI Sales Process Optimization Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate AI Sales Process Optimization execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy AI Sales Process Optimization?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"ecommerce": {

        title: "E-commerce & D2C",
        category: "Industries",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade E-commerce & D2C capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive E-commerce & D2C Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate E-commerce & D2C execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy E-commerce & D2C?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"consumer-durables": {

        title: "Consumer Durables",
        category: "Industries",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade Consumer Durables capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive Consumer Durables Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate Consumer Durables execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy Consumer Durables?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"bfsi": {

        title: "BFSI & FinTech",
        category: "Industries",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade BFSI & FinTech capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive BFSI & FinTech Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate BFSI & FinTech execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy BFSI & FinTech?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"fmcg": {

        title: "FMCG",
        category: "Industries",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade FMCG capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive FMCG Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate FMCG execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy FMCG?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"saas": {

        title: "SaaS & Enterprise Software",
        category: "Industries",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade SaaS & Enterprise Software capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive SaaS & Enterprise Software Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate SaaS & Enterprise Software execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy SaaS & Enterprise Software?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"manufacturing": {

        title: "Manufacturing",
        category: "Industries",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade Manufacturing capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive Manufacturing Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate Manufacturing execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy Manufacturing?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"real-estate": {

        title: "Real Estate",
        category: "Industries",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade Real Estate capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive Real Estate Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate Real Estate execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy Real Estate?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"crypto-industry": {

        title: "Crypto & Web3",
        category: "Industries",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade Crypto & Web3 capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive Crypto & Web3 Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate Crypto & Web3 execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy Crypto & Web3?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"sales-intelligence": {

        title: "AI-Powered Sales Intelligence",
        category: "Offerings",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade AI-Powered Sales Intelligence capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive AI-Powered Sales Intelligence Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate AI-Powered Sales Intelligence execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy AI-Powered Sales Intelligence?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"revenue-ops-intelligence": {

        title: "Revenue Operations & Intelligence",
        category: "Offerings",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade Revenue Operations & Intelligence capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive Revenue Operations & Intelligence Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate Revenue Operations & Intelligence execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy Revenue Operations & Intelligence?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"digital-marketing": {

        title: "Digital Marketing & Demand Gen",
        category: "Offerings",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade Digital Marketing & Demand Gen capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive Digital Marketing & Demand Gen Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate Digital Marketing & Demand Gen execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy Digital Marketing & Demand Gen?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"market-intelligence": {

        title: "Market & Demand Intelligence",
        category: "Offerings",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade Market & Demand Intelligence capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive Market & Demand Intelligence Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate Market & Demand Intelligence execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy Market & Demand Intelligence?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"market-validation-offering": {

        title: "Market Validation & Research",
        category: "Offerings",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade Market Validation & Research capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive Market Validation & Research Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate Market Validation & Research execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy Market Validation & Research?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"product-scaling": {

        title: "Product Scaling & Growth",
        category: "Offerings",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade Product Scaling & Growth capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive Product Scaling & Growth Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate Product Scaling & Growth execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy Product Scaling & Growth?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"partner-overview": {

        title: "Partner Program Overview",
        category: "Partners",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade Partner Program Overview capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive Partner Program Overview Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate Partner Program Overview execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy Partner Program Overview?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"solution-partners": {

        title: "Solution Partners",
        category: "Partners",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade Solution Partners capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive Solution Partners Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate Solution Partners execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy Solution Partners?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"technology-partners": {

        title: "Technology Partners",
        category: "Partners",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade Technology Partners capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive Technology Partners Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate Technology Partners execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy Technology Partners?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
},
"referral-partners": {

        title: "Referral Partners",
        category: "Partners",
        heroDescription: "Empower your organization with TrustGrid's enterprise-grade Referral Partners capabilities. We deliver autonomous AI agents, predictive deal dynamics, and scalable infrastructure designed to increase revenue velocity by 5X.",
        features: [
            { title: "Predictive Referral Partners Intelligence", description: "Deploy proprietary AI models trained to identify high-intent buyer behavior and automate Referral Partners execution." },
            { title: "Autonomous Execution Agents", description: "Self-healing workflow agents that continuously optimize pipeline conversion, deal prioritization, and engagement." },
            { title: "Enterprise Systems Integration", description: "Bi-directional sync with Salesforce, HubSpot, SAP, and Snowflake with strict SOC2 Type II compliance." },
            { title: "Real-time Deal Dynamics", description: "Live opportunity scoring and risk detection to prevent deal slippage and maximize win rates by 4X." }
        ],
        benefits: [
            "Accelerated revenue velocity by up to 500% in 12 months",
            "4X increase in qualified win rates via predictive deal scoring",
            "Zero manual data entry with 100% automated CRM RevOps",
            "Enterprise bank-grade security & ISO 27001 / SOC2 compliance"
        ],
        faqs: [
            { question: "How quickly can TrustGrid deploy Referral Partners?", answer: "Initial setup and data ingestion take under 14 days, with full AI model calibration achieved within 4 weeks." },
            { question: "What infrastructure integrations are supported?", answer: "TrustGrid seamlessly connects with leading CRMs, ERPs, Data Warehouses, and Communication platforms out-of-the-box." },
            { question: "Is my corporate data kept confidential and secure?", answer: "Yes, all customer data is processed in dedicated single-tenant environments with end-to-end encryption." }
        ],
        useCases: [
            { title: "High-Growth Enterprise Scaling", description: "Scale sales operations exponentially without linear headcount expansion using automated AI sales drivers." },
            { title: "Complex B2B Deal Navigation", description: "Map stakeholder influence and sentiment across multi-buyer committees to accelerate close times." }
        ],
        kpis: [
            { metric: "5X", label: "Revenue Velocity" },
            { metric: "4X", label: "Win Rate Multiplier" },
            { metric: "85%", label: "Manual Effort Reduction" }
        ],
        projectLifecycle: [
            { step: "Discovery & Audit", description: "In-depth pipeline analysis and intent data source integration." },
            { step: "Model Calibration", description: "Customizing predictive AI scoring for your target audience." },
            { step: "Autonomous Launch", description: "Deploying AI agents across outreach and RevOps channels." },
            { step: "Continuous Optimization", description: "Closed-loop feedback to continuously elevate conversions." }
        ]
}
};

export const smNavItems = [
    {
        "name": "Home",
        "path": "/"
    },
    {
        "name": "Crypto",
        "path": "/crypto",
        "dropdown": {
            "featured": [
                {
                    "title": "Web3 Ecosystems",
                    "desc": "L1 & L2 protocol scaling",
                    "path": "/explore/crypto-demand-discovery"
                },
                {
                    "title": "DeFi Platforms",
                    "desc": "Sustainable liquidity",
                    "path": "/explore/crypto-growth"
                }
            ],
            "highlight": {
                "title": "High-Velocity Web3",
                "desc": "Built for High-Velocity Web3 & Crypto Ecosystems.",
                "image": "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=400&q=80",
                "linkText": "Learn More",
                "linkPath": "/crypto"
            },
            "items": [
                {
                    "name": "Crypto Revenue Acceleration",
                    "path": "/explore/crypto-revenue",
                    "icon": "TrendingUp"
                },
                {
                    "name": "Crypto Demand Discovery",
                    "path": "/explore/crypto-demand-discovery",
                    "icon": "Search"
                },
                {
                    "name": "Crypto Performance Revenue",
                    "path": "/explore/crypto-performance",
                    "icon": "Coins"
                },
                {
                    "name": "Crypto Growth Acceleration",
                    "path": "/explore/crypto-growth",
                    "icon": "Rocket"
                },
                {
                    "name": "Market Validation Intelligence",
                    "path": "/explore/crypto-market-validation",
                    "icon": "Target"
                },
                {
                    "name": "Customer Journey Intelligence",
                    "path": "/explore/crypto-journey",
                    "icon": "MapPin"
                },
                {
                    "name": "Startup MVP Acceleration",
                    "path": "/explore/crypto-startup",
                    "icon": "Lightbulb"
                }
            ]
        }
    },
    {
        "name": "Offerings",
        "path": "/offerings",
        "dropdown": {
            "categories": [
                {
                    "id": "profit-pools",
                    "title": "Profit Pools",
                    "desc": "Maximize industry profit share",
                    "items": [
                        { "name": "Market Discovery", "path": "/offerings/profit-pool-discovery/market-discovery", "icon": "Search" },
                        { "name": "Demand Discovery", "path": "/offerings/profit-pool-discovery/demand-discovery", "icon": "Target" },
                        { "name": "Value Discovery", "path": "/offerings/profit-pool-discovery/value-discovery", "icon": "DollarSign" },
                        { "name": "Channel Discovery", "path": "/offerings/profit-pool-discovery/channel-discovery", "icon": "Network" },
                        { "name": "Competitive Discovery", "path": "/offerings/profit-pool-discovery/competitive-discovery", "icon": "ShieldCheck" },
                        { "name": "Customer Discovery", "path": "/offerings/profit-pool-discovery/customer-discovery", "icon": "Users" },
                        { "name": "Product-Market Fit Discovery", "path": "/offerings/profit-pool-discovery/product-market-fit-discovery", "icon": "Sparkles" }
                    ]
                },
                {
                    "id": "ai-growth",
                    "title": "AI Growth Engines",
                    "desc": "Automated pipeline & market expansion",
                    "items": [
                        { "name": "AI Demand Discovery", "path": "/explore/ai-demand-discovery", "icon": "Search" },
                        { "name": "AI-Driven Revenue Acceleration", "path": "/explore/revenue-acceleration", "icon": "TrendingUp" },
                        { "name": "AI-Driven Growth Hacking", "path": "/explore/growth-hacking", "icon": "Rocket" },
                        { "name": "AI-Driven Performance Marketing", "path": "/explore/performance-marketing", "icon": "BarChart" }
                    ]
                },
                {
                    "id": "sales-acceleration",
                    "title": "Sales Acceleration",
                    "desc": "High-velocity sales execution",
                    "items": [
                        { "name": "Enterprise Sales Acceleration", "path": "/explore/enterprise-sales", "icon": "Building2" },
                        { "name": "Digital & Inside Sales", "path": "/explore/digital-sales", "icon": "Layout" },
                        { "name": "D2C & High-Velocity Sales", "path": "/explore/d2c-sales", "icon": "ShoppingBag" },
                        { "name": "BFSI Sales Acceleration", "path": "/explore/bfsi-sales", "icon": "Landmark" }
                    ]
                }
            ],
            "highlight": {
                "title": "Enterprise Offerings",
                "desc": "Turnkey AI sales engines and revenue intelligence.",
                "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
                "linkText": "View All Offerings",
                "linkPath": "/offerings"
            }
        }
    },
    {
        "name": "Industries",
        "path": "/industries",
        "dropdown": {
            "categories": [
                {
                    "id": "profit-pools",
                    "title": "Profit Pools",
                    "desc": "Targeted sector profit mapping",
                    "items": [
                        { "name": "B2B Profit Pool Discovery", "path": "/offerings/profit-pool-discovery/b2b", "icon": "Building2" },
                        { "name": "B2C Profit Pool Discovery", "path": "/offerings/profit-pool-discovery/b2c", "icon": "ShoppingBag" }
                    ]
                },
                {
                    "id": "finance-enterprise",
                    "title": "Financial & Enterprise",
                    "desc": "High-compliance, scale sectors",
                    "items": [
                        { "name": "BFSI", "path": "/explore/bfsi", "icon": "Landmark" },
                        { "name": "Enterprise Sales", "path": "/explore/enterprise-sales", "icon": "Building2" },
                        { "name": "SaaS & Enterprise Software", "path": "/explore/saas", "icon": "Boxes" },
                        { "name": "Manufacturing", "path": "/explore/manufacturing", "icon": "Factory" }
                    ]
                },
                {
                    "id": "retail-consumer",
                    "title": "Retail & Consumer",
                    "desc": "Direct to consumer channels",
                    "items": [
                        { "name": "E-commerce & D2C", "path": "/explore/ecommerce", "icon": "ShoppingBag" },
                        { "name": "Consumer Durables", "path": "/explore/consumer-durables", "icon": "Home" },
                        { "name": "FMCG", "path": "/explore/fmcg", "icon": "Truck" },
                        { "name": "B2C Sales", "path": "/explore/d2c-sales", "icon": "Layout" }
                    ]
                },
                {
                    "id": "emerging",
                    "title": "Emerging Sectors",
                    "desc": "Web3, startups, & agile markets",
                    "items": [
                        { "name": "Crypto & Web3", "path": "/explore/crypto-industry", "icon": "Coins" },
                        { "name": "Startup / Early Stage", "path": "/explore/crypto-startup", "icon": "Rocket" },
                        { "name": "Real Estate", "path": "/explore/real-estate", "icon": "Building" }
                    ]
                }
            ],
            "highlight": {
                "title": "Industry Expertise",
                "desc": "Tailored revenue acceleration for your specific industry.",
                "image": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
                "linkText": "Learn More",
                "linkPath": "/industries"
            }
        }
    },
    {
        "name": "Solutions",
        "path": "/solutions",
        "dropdown": {
            "featured": [
                {
                    "title": "AI Business Strategy",
                    "desc": "Market intelligence",
                    "path": "/explore/ai-business-strategy"
                },
                {
                    "title": "AI Auto Sales Pilot",
                    "desc": "Autonomous agents",
                    "path": "/explore/ai-auto-sales-pilot"
                }
            ],
            "highlight": {
                "title": "Comprehensive Solutions",
                "desc": "End-to-end AI-driven growth solutions for enterprises.",
                "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
                "linkText": "View Solutions",
                "linkPath": "/solutions"
            },
            "items": [
                {
                    "name": "AI Business Growth Strategy",
                    "path": "/explore/ai-business-strategy",
                    "icon": "TrendingUp"
                },
                {
                    "name": "AI Market Strategy & Demand",
                    "path": "/explore/ai-market-strategy",
                    "icon": "Target"
                },
                {
                    "name": "AI-Driven Growth Hacking",
                    "path": "/explore/growth-hacking",
                    "icon": "Rocket"
                },
                {
                    "name": "AI-Driven Performance Marketing",
                    "path": "/explore/performance-marketing",
                    "icon": "BarChart"
                },
                {
                    "name": "AI Auto Sales Pilot",
                    "path": "/explore/ai-auto-sales-pilot",
                    "icon": "Bot"
                },
                {
                    "name": "AI Sales Process Optimization",
                    "path": "/explore/sales-optimization",
                    "icon": "Settings"
                },
                {
                    "name": "AI Revenue Operations",
                    "path": "/explore/ai-revenue-operations",
                    "icon": "Server"
                },
                {
                    "name": "AI Revenue Acceleration",
                    "path": "/explore/ai-revenue-acceleration",
                    "icon": "Zap",
                    "badge": "Popular"
                }
            ]
        }
    },
    {
        "name": "Capabilities",
        "path": "/capabilities",
        "dropdown": {
            "featured": [
                {
                    "title": "Demand Discovery & Acceleration",
                    "desc": "Predictive deal intelligence",
                    "path": "/explore/ai-demand-discovery"
                },
                {
                    "title": "Autonomous Sales Pilot",
                    "desc": "AI sales agents",
                    "path": "/explore/ai-auto-sales-pilot"
                }
            ],
            "highlight": {
                "title": "Activate Your Autonomous Growth Engine",
                "desc": "Predictive Deal Intelligence & Autonomous Agents.",
                "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80",
                "linkText": "View Engines",
                "linkPath": "/capabilities"
            },
            "items": [
                {
                    "name": "Demand Discovery & Acceleration",
                    "path": "/explore/ai-demand-discovery",
                    "icon": "Search",
                    "badge": "Featured"
                },
                {
                    "name": "AI Brand Acceleration",
                    "path": "/ai-brand-acceleration",
                    "icon": "Sparkles"
                },
                {
                    "name": "AI Reputation Acceleration",
                    "path": "/ai-reputation-acceleration",
                    "icon": "ShieldCheck"
                },
                {
                    "name": "Autonomous Sales Pilot",
                    "path": "/explore/ai-auto-sales-pilot",
                    "icon": "Bot",
                    "badge": "Enterprise"
                },
                {
                    "name": "Hidden Revenue Capture",
                    "path": "/hidden-revenue-capture",
                    "icon": "TrendingUp"
                },
                {
                    "name": "AI Revenue Acceleration",
                    "path": "/explore/revenue-acceleration",
                    "icon": "Zap"
                },
                {
                    "name": "AI Auto Pilot",
                    "path": "/explore/ai-auto-sales-pilot",
                    "icon": "Bot",
                    "badge": "Enterprise"
                }
            ]
        }
    },
    {
        "name": "Partners",
        "path": "/partners",
        "dropdown": {
            "featured": [
                {
                    "title": "Solution Partners",
                    "desc": "Implementation experts",
                    "path": "/explore/solution-partners"
                },
                {
                    "title": "Technology Partners",
                    "desc": "Platform integrations",
                    "path": "/explore/technology-partners"
                }
            ],
            "highlight": {
                "title": "Global Partner Ecosystem",
                "desc": "Co-sell and build next-gen AI revenue systems together.",
                "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80",
                "linkText": "Become a Partner",
                "linkPath": "/partners"
            },
            "items": [
                {
                    "name": "Partner Program Overview",
                    "path": "/explore/partner-overview",
                    "icon": "Handshake"
                },
                {
                    "name": "Solution Partners",
                    "path": "/explore/solution-partners",
                    "icon": "Building2"
                },
                {
                    "name": "Technology Partners",
                    "path": "/explore/technology-partners",
                    "icon": "Cpu"
                },
                {
                    "name": "Referral Partners",
                    "path": "/explore/referral-partners",
                    "icon": "UserPlus"
                }
            ]
        }
    },
    {
        "name": "Company",
        "path": "/company",
        "dropdown": {
            "featured": [
                {
                    "title": "About Us",
                    "desc": "Our mission and vision",
                    "path": "/about"
                },
                {
                    "title": "Careers",
                    "desc": "Join our team",
                    "path": "/careers"
                }
            ],
            "highlight": {
                "title": "Trustgrid AI",
                "desc": "We are engineering growth and automating scale.",
                "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
                "linkText": "Meet the Team",
                "linkPath": "/company"
            },
            "items": [
                {
                    "name": "About Us",
                    "path": "/about",
                    "icon": "Info"
                },
                {
                    "name": "Mission",
                    "path": "/mission",
                    "icon": "Target"
                },
                {
                    "name": "Leadership & Culture",
                    "path": "/leadership",
                    "icon": "Users"
                },
                {
                    "name": "Our Offices",
                    "path": "/offices",
                    "icon": "MapPin"
                },
                {
                    "name": "Careers",
                    "path": "/careers",
                    "icon": "Briefcase"
                },
                {
                    "name": "Contact Us",
                    "path": "/book-consultation",
                    "icon": "Phone"
                }
            ]
        }
    },
    {
        "name": "Contact Us",
        "path": "/book-consultation"
    }
];
