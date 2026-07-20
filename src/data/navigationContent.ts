
export interface ServiceData {
    title: string;
    category: string;
    heroDescription: string;
    features: { title: string; description: string }[];
    benefits: string[];
    faqs: { question: string; answer: string }[];
}

export const servicesData: Record<string, ServiceData> = {
    "artificial-intelligence": {
        
        title: "Artificial Intelligence",
        category: "Capabilities",
        heroDescription: "Empower your enterprise with our cutting-edge Artificial Intelligence capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Artificial Intelligence." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"machine-learning": {
        
        title: "Machine Learning",
        category: "Capabilities",
        heroDescription: "Empower your enterprise with our cutting-edge Machine Learning capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Machine Learning." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"generative-ai": {
        
        title: "Generative AI",
        category: "Capabilities",
        heroDescription: "Empower your enterprise with our cutting-edge Generative AI capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Generative AI." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"enterprise-ai": {
        
        title: "Enterprise AI",
        category: "Capabilities",
        heroDescription: "Empower your enterprise with our cutting-edge Enterprise AI capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Enterprise AI." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"agentic-ai": {
        
        title: "Agentic AI",
        category: "Capabilities",
        heroDescription: "Empower your enterprise with our cutting-edge Agentic AI capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Agentic AI." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"cloud-computing": {
        
        title: "Cloud Computing",
        category: "Capabilities",
        heroDescription: "Empower your enterprise with our cutting-edge Cloud Computing capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Cloud Computing." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"automation": {
        
        title: "Automation",
        category: "Capabilities",
        heroDescription: "Empower your enterprise with our cutting-edge Automation capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Automation." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"cyber-security": {
        
        title: "Cyber Security",
        category: "Capabilities",
        heroDescription: "Empower your enterprise with our cutting-edge Cyber Security capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Cyber Security." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"data-engineering": {
        
        title: "Data Engineering",
        category: "Capabilities",
        heroDescription: "Empower your enterprise with our cutting-edge Data Engineering capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Data Engineering." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"devops": {
        
        title: "DevOps",
        category: "Capabilities",
        heroDescription: "Empower your enterprise with our cutting-edge DevOps capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for DevOps." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"digital-transformation": {
        
        title: "Digital Transformation",
        category: "Capabilities",
        heroDescription: "Empower your enterprise with our cutting-edge Digital Transformation capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Digital Transformation." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"enterprise-consulting": {
        
        title: "Enterprise Consulting",
        category: "Capabilities",
        heroDescription: "Empower your enterprise with our cutting-edge Enterprise Consulting capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Enterprise Consulting." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"blockchain-development": {
        
        title: "Blockchain Development",
        category: "Crypto",
        heroDescription: "Empower your enterprise with our cutting-edge Blockchain Development capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Blockchain Development." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"web3-solutions": {
        
        title: "Web3 Solutions",
        category: "Crypto",
        heroDescription: "Empower your enterprise with our cutting-edge Web3 Solutions capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Web3 Solutions." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"smart-contracts": {
        
        title: "Smart Contracts",
        category: "Crypto",
        heroDescription: "Empower your enterprise with our cutting-edge Smart Contracts capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Smart Contracts." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"digital-asset-solutions": {
        
        title: "Digital Asset Solutions",
        category: "Crypto",
        heroDescription: "Empower your enterprise with our cutting-edge Digital Asset Solutions capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Digital Asset Solutions." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"tokenization": {
        
        title: "Tokenization",
        category: "Crypto",
        heroDescription: "Empower your enterprise with our cutting-edge Tokenization capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Tokenization." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"crypto-infrastructure": {
        
        title: "Crypto Infrastructure",
        category: "Crypto",
        heroDescription: "Empower your enterprise with our cutting-edge Crypto Infrastructure capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Crypto Infrastructure." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"nft-solutions": {
        
        title: "NFT Solutions",
        category: "Crypto",
        heroDescription: "Empower your enterprise with our cutting-edge NFT Solutions capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for NFT Solutions." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"blockchain-consulting": {
        
        title: "Blockchain Consulting",
        category: "Crypto",
        heroDescription: "Empower your enterprise with our cutting-edge Blockchain Consulting capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Blockchain Consulting." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"increased-productivity": {
        
        title: "Increased Productivity",
        category: "Outcomes",
        heroDescription: "Empower your enterprise with our cutting-edge Increased Productivity capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Increased Productivity." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"business-growth": {
        
        title: "Business Growth",
        category: "Outcomes",
        heroDescription: "Empower your enterprise with our cutting-edge Business Growth capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Business Growth." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"cost-optimization": {
        
        title: "Cost Optimization",
        category: "Outcomes",
        heroDescription: "Empower your enterprise with our cutting-edge Cost Optimization capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Cost Optimization." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"operational-excellence": {
        
        title: "Operational Excellence",
        category: "Outcomes",
        heroDescription: "Empower your enterprise with our cutting-edge Operational Excellence capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Operational Excellence." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"customer-experience": {
        
        title: "Customer Experience",
        category: "Outcomes",
        heroDescription: "Empower your enterprise with our cutting-edge Customer Experience capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Customer Experience." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"digital-transformation-outcomes": {
        
        title: "Digital Transformation",
        category: "Outcomes",
        heroDescription: "Empower your enterprise with our cutting-edge Digital Transformation capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Digital Transformation." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"ai-adoption": {
        
        title: "AI Adoption",
        category: "Outcomes",
        heroDescription: "Empower your enterprise with our cutting-edge AI Adoption capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for AI Adoption." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"roi-improvements": {
        
        title: "ROI Improvements",
        category: "Outcomes",
        heroDescription: "Empower your enterprise with our cutting-edge ROI Improvements capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for ROI Improvements." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"ai-solutions-group": {
        
        title: "AI Solutions",
        category: "Solutions",
        heroDescription: "Empower your enterprise with our cutting-edge AI Solutions capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for AI Solutions." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"cloud-solutions-group": {
        
        title: "Cloud Solutions",
        category: "Solutions",
        heroDescription: "Empower your enterprise with our cutting-edge Cloud Solutions capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Cloud Solutions." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"enterprise-solutions-group": {
        
        title: "Enterprise Solutions",
        category: "Solutions",
        heroDescription: "Empower your enterprise with our cutting-edge Enterprise Solutions capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Enterprise Solutions." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"saas-solutions": {
        
        title: "SaaS Solutions",
        category: "Solutions",
        heroDescription: "Empower your enterprise with our cutting-edge SaaS Solutions capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for SaaS Solutions." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"automation-solutions-group": {
        
        title: "Automation Solutions",
        category: "Solutions",
        heroDescription: "Empower your enterprise with our cutting-edge Automation Solutions capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Automation Solutions." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"custom-software-development": {
        
        title: "Custom Software",
        category: "Solutions",
        heroDescription: "Empower your enterprise with our cutting-edge Custom Software capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Custom Software." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"managed-services": {
        
        title: "Managed Services",
        category: "Solutions",
        heroDescription: "Empower your enterprise with our cutting-edge Managed Services capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Managed Services." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"consulting-services": {
        
        title: "Consulting Services",
        category: "Solutions",
        heroDescription: "Empower your enterprise with our cutting-edge Consulting Services capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Consulting Services." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"healthcare": {
        
        title: "Healthcare",
        category: "Industries",
        heroDescription: "Empower your enterprise with our cutting-edge Healthcare capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Healthcare." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"finance": {
        
        title: "Finance",
        category: "Industries",
        heroDescription: "Empower your enterprise with our cutting-edge Finance capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Finance." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"retail": {
        
        title: "Retail",
        category: "Industries",
        heroDescription: "Empower your enterprise with our cutting-edge Retail capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Retail." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"manufacturing": {
        
        title: "Manufacturing",
        category: "Industries",
        heroDescription: "Empower your enterprise with our cutting-edge Manufacturing capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Manufacturing." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"education": {
        
        title: "Education",
        category: "Industries",
        heroDescription: "Empower your enterprise with our cutting-edge Education capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Education." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"logistics": {
        
        title: "Logistics",
        category: "Industries",
        heroDescription: "Empower your enterprise with our cutting-edge Logistics capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Logistics." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"government": {
        
        title: "Government",
        category: "Industries",
        heroDescription: "Empower your enterprise with our cutting-edge Government capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Government." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"startups": {
        
        title: "Startups",
        category: "Industries",
        heroDescription: "Empower your enterprise with our cutting-edge Startups capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Startups." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"enterprises": {
        
        title: "Enterprises",
        category: "Industries",
        heroDescription: "Empower your enterprise with our cutting-edge Enterprises capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Enterprises." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"real-estate": {
        
        title: "Real Estate",
        category: "Industries",
        heroDescription: "Empower your enterprise with our cutting-edge Real Estate capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Real Estate." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"telecom": {
        
        title: "Telecom",
        category: "Industries",
        heroDescription: "Empower your enterprise with our cutting-edge Telecom capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Telecom." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"ai-consulting": {
        
        title: "AI Consulting",
        category: "Offerings",
        heroDescription: "Empower your enterprise with our cutting-edge AI Consulting capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for AI Consulting." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"product-engineering": {
        
        title: "Product Engineering",
        category: "Offerings",
        heroDescription: "Empower your enterprise with our cutting-edge Product Engineering capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Product Engineering." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"cloud-migration": {
        
        title: "Cloud Migration",
        category: "Offerings",
        heroDescription: "Empower your enterprise with our cutting-edge Cloud Migration capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Cloud Migration." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"staff-augmentation": {
        
        title: "Staff Augmentation",
        category: "Offerings",
        heroDescription: "Empower your enterprise with our cutting-edge Staff Augmentation capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Staff Augmentation." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"managed-services-offering": {
        
        title: "Managed Services",
        category: "Offerings",
        heroDescription: "Empower your enterprise with our cutting-edge Managed Services capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Managed Services." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"ui-ux-services": {
        
        title: "UI/UX Services",
        category: "Offerings",
        heroDescription: "Empower your enterprise with our cutting-edge UI/UX Services capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for UI/UX Services." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"security-assessments": {
        
        title: "Security Assessments",
        category: "Offerings",
        heroDescription: "Empower your enterprise with our cutting-edge Security Assessments capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Security Assessments." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"technical-support": {
        
        title: "Technical Support",
        category: "Offerings",
        heroDescription: "Empower your enterprise with our cutting-edge Technical Support capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Technical Support." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"training-services": {
        
        title: "Training Services",
        category: "Offerings",
        heroDescription: "Empower your enterprise with our cutting-edge Training Services capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Training Services." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"technology-partners": {
        
        title: "Technology Partners",
        category: "Partners",
        heroDescription: "Empower your enterprise with our cutting-edge Technology Partners capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Technology Partners." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"cloud-partners": {
        
        title: "Cloud Partners",
        category: "Partners",
        heroDescription: "Empower your enterprise with our cutting-edge Cloud Partners capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Cloud Partners." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"strategic-partners": {
        
        title: "Strategic Partners",
        category: "Partners",
        heroDescription: "Empower your enterprise with our cutting-edge Strategic Partners capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Strategic Partners." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"implementation-partners": {
        
        title: "Implementation Partners",
        category: "Partners",
        heroDescription: "Empower your enterprise with our cutting-edge Implementation Partners capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Implementation Partners." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"ecosystem-partners": {
        
        title: "Ecosystem Partners",
        category: "Partners",
        heroDescription: "Empower your enterprise with our cutting-edge Ecosystem Partners capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Ecosystem Partners." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"about-us": {
        
        title: "About Us",
        category: "Company",
        heroDescription: "Empower your enterprise with our cutting-edge About Us capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for About Us." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"mission-vision": {
        
        title: "Mission & Vision",
        category: "Company",
        heroDescription: "Empower your enterprise with our cutting-edge Mission & Vision capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Mission & Vision." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"leadership-team": {
        
        title: "Leadership Team",
        category: "Company",
        heroDescription: "Empower your enterprise with our cutting-edge Leadership Team capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Leadership Team." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"careers": {
        
        title: "Careers",
        category: "Company",
        heroDescription: "Empower your enterprise with our cutting-edge Careers capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Careers." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"blogs": {
        
        title: "Blogs",
        category: "Company",
        heroDescription: "Empower your enterprise with our cutting-edge Blogs capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for Blogs." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"news-media": {
        
        title: "News & Media",
        category: "Company",
        heroDescription: "Empower your enterprise with our cutting-edge News & Media capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for News & Media." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    },
"csr": {
        
        title: "CSR Activities",
        category: "Company",
        heroDescription: "Empower your enterprise with our cutting-edge CSR Activities capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for CSR Activities." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]
    }
};

export const smNavItems = [
    {
        "name": "Home",
        "path": "/"
    },
    {
        "name": "Capabilities",
        "path": "/capabilities",
        "dropdown": {
            "featured": [
                {
                    "title": "Generative AI Framework",
                    "desc": "Build custom LLM agents",
                    "path": "/explore/generative-ai"
                },
                {
                    "title": "Enterprise Cloud Landing Zones",
                    "desc": "Secure multi-cloud setup",
                    "path": "/explore/cloud-computing"
                }
            ],
            "highlight": {
                "title": "100+ Projects Delivered",
                "desc": "Discover how we transformed Fortune 500 companies with AI.",
                "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80",
                "linkText": "View Case Studies",
                "linkPath": "/case-studies"
            },
            "items": [
                {
                    "name": "Artificial Intelligence",
                    "path": "/explore/artificial-intelligence",
                    "icon": "BrainCircuit"
                },
                {
                    "name": "Machine Learning",
                    "path": "/explore/machine-learning",
                    "icon": "Network"
                },
                {
                    "name": "Generative AI",
                    "path": "/explore/generative-ai",
                    "icon": "Sparkles"
                },
                {
                    "name": "Enterprise AI",
                    "path": "/explore/enterprise-ai",
                    "icon": "Building2"
                },
                {
                    "name": "Agentic AI",
                    "path": "/explore/agentic-ai",
                    "icon": "Bot"
                },
                {
                    "name": "Cloud Computing",
                    "path": "/explore/cloud-computing",
                    "icon": "Cloud"
                },
                {
                    "name": "Automation",
                    "path": "/explore/automation",
                    "icon": "Workflow"
                },
                {
                    "name": "Cyber Security",
                    "path": "/explore/cyber-security",
                    "icon": "Shield"
                },
                {
                    "name": "Data Engineering",
                    "path": "/explore/data-engineering",
                    "icon": "Database"
                },
                {
                    "name": "DevOps",
                    "path": "/explore/devops",
                    "icon": "GitMerge"
                },
                {
                    "name": "Digital Transformation",
                    "path": "/explore/digital-transformation",
                    "icon": "RefreshCw"
                },
                {
                    "name": "Enterprise Consulting",
                    "path": "/explore/enterprise-consulting",
                    "icon": "Briefcase"
                }
            ]
        }
    },
    {
        "name": "Crypto",
        "path": "/crypto",
        "dropdown": {
            "featured": [
                {
                    "title": "Zero-Knowledge Proofs",
                    "desc": "Enterprise privacy protocols",
                    "path": "/explore/blockchain-development"
                },
                {
                    "title": "Smart Contract Audits",
                    "desc": "Military-grade security",
                    "path": "/explore/smart-contracts"
                }
            ],
            "highlight": {
                "title": "Bank-Grade Security",
                "desc": "We secure over $2B in digital assets for our clients.",
                "image": "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=400&q=80",
                "linkText": "Learn More",
                "linkPath": "/crypto-security"
            },
            "items": [
                {
                    "name": "Blockchain Development",
                    "path": "/explore/blockchain-development",
                    "icon": "Link"
                },
                {
                    "name": "Web3 Solutions",
                    "path": "/explore/web3-solutions",
                    "icon": "Globe"
                },
                {
                    "name": "Smart Contracts",
                    "path": "/explore/smart-contracts",
                    "icon": "FileCode2"
                },
                {
                    "name": "Digital Asset Solutions",
                    "path": "/explore/digital-asset-solutions",
                    "icon": "Coins"
                },
                {
                    "name": "Tokenization",
                    "path": "/explore/tokenization",
                    "icon": "Boxes"
                },
                {
                    "name": "Crypto Infrastructure",
                    "path": "/explore/crypto-infrastructure",
                    "icon": "Server"
                },
                {
                    "name": "NFT Solutions",
                    "path": "/explore/nft-solutions",
                    "icon": "Image"
                },
                {
                    "name": "Blockchain Consulting",
                    "path": "/explore/blockchain-consulting",
                    "icon": "MessageSquare"
                }
            ]
        }
    },
    {
        "name": "Outcomes",
        "path": "/outcomes",
        "dropdown": {
            "featured": [
                {
                    "title": "Revenue Operations",
                    "desc": "Automate sales cycles",
                    "path": "/explore/business-growth"
                },
                {
                    "title": "Supply Chain AI",
                    "desc": "Predictive logistics",
                    "path": "/explore/operational-excellence"
                }
            ],
            "highlight": {
                "title": "Guaranteed ROI",
                "desc": "Our deployments average a 314% ROI within the first year.",
                "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
                "linkText": "Read the Report",
                "linkPath": "/roi-report"
            },
            "items": [
                {
                    "name": "Increased Productivity",
                    "path": "/explore/increased-productivity",
                    "icon": "TrendingUp"
                },
                {
                    "name": "Business Growth",
                    "path": "/explore/business-growth",
                    "icon": "BarChart"
                },
                {
                    "name": "Cost Optimization",
                    "path": "/explore/cost-optimization",
                    "icon": "PieChart"
                },
                {
                    "name": "Operational Excellence",
                    "path": "/explore/operational-excellence",
                    "icon": "Settings"
                },
                {
                    "name": "Customer Experience",
                    "path": "/explore/customer-experience",
                    "icon": "Smile"
                },
                {
                    "name": "Digital Transformation",
                    "path": "/explore/digital-transformation-outcomes",
                    "icon": "Layers"
                },
                {
                    "name": "AI Adoption",
                    "path": "/explore/ai-adoption",
                    "icon": "Cpu"
                },
                {
                    "name": "ROI Improvements",
                    "path": "/explore/roi-improvements",
                    "icon": "DollarSign"
                }
            ]
        }
    },
    {
        "name": "Solutions",
        "path": "/solutions",
        "dropdown": {
            "featured": [
                {
                    "title": "Conversational AI",
                    "desc": "Next-gen support bots",
                    "path": "/explore/ai-solutions-group"
                },
                {
                    "title": "Hybrid Cloud Manager",
                    "desc": "Unified infrastructure",
                    "path": "/explore/cloud-solutions-group"
                }
            ],
            "highlight": {
                "title": "Enterprise Grade Solutions",
                "desc": "Built to scale globally with 99.999% uptime SLAs.",
                "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
                "linkText": "View Architecture",
                "linkPath": "/architecture"
            },
            "items": [
                {
                    "name": "AI Solutions",
                    "path": "/explore/ai-solutions-group",
                    "icon": "Brain"
                },
                {
                    "name": "Cloud Solutions",
                    "path": "/explore/cloud-solutions-group",
                    "icon": "CloudRain"
                },
                {
                    "name": "Enterprise Solutions",
                    "path": "/explore/enterprise-solutions-group",
                    "icon": "Building"
                },
                {
                    "name": "SaaS Solutions",
                    "path": "/explore/saas-solutions",
                    "icon": "AppWindow"
                },
                {
                    "name": "Automation Solutions",
                    "path": "/explore/automation-solutions-group",
                    "icon": "Zap"
                },
                {
                    "name": "Custom Software",
                    "path": "/explore/custom-software-development",
                    "icon": "Code2"
                },
                {
                    "name": "Managed Services",
                    "path": "/explore/managed-services",
                    "icon": "ShieldCheck"
                },
                {
                    "name": "Consulting Services",
                    "path": "/explore/consulting-services",
                    "icon": "Users"
                }
            ]
        }
    },
    {
        "name": "Industries",
        "path": "/industries",
        "dropdown": {
            "featured": [
                {
                    "title": "Predictive Healthcare",
                    "desc": "AI-driven diagnostics",
                    "path": "/explore/healthcare"
                },
                {
                    "title": "FinTech Infrastructure",
                    "desc": "Core banking modernization",
                    "path": "/explore/finance"
                }
            ],
            "highlight": {
                "title": "Industry Specialists",
                "desc": "Our teams are composed of veterans from top Fortune 500s.",
                "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
                "linkText": "Meet the Team",
                "linkPath": "/team"
            },
            "items": [
                {
                    "name": "Healthcare",
                    "path": "/explore/healthcare",
                    "icon": "HeartPulse"
                },
                {
                    "name": "Finance",
                    "path": "/explore/finance",
                    "icon": "Landmark"
                },
                {
                    "name": "Retail",
                    "path": "/explore/retail",
                    "icon": "ShoppingBag"
                },
                {
                    "name": "Manufacturing",
                    "path": "/explore/manufacturing",
                    "icon": "Factory"
                },
                {
                    "name": "Education",
                    "path": "/explore/education",
                    "icon": "GraduationCap"
                },
                {
                    "name": "Logistics",
                    "path": "/explore/logistics",
                    "icon": "Truck"
                },
                {
                    "name": "Government",
                    "path": "/explore/government",
                    "icon": "Landmark"
                },
                {
                    "name": "Startups",
                    "path": "/explore/startups",
                    "icon": "Rocket"
                },
                {
                    "name": "Enterprises",
                    "path": "/explore/enterprises",
                    "icon": "Building2"
                },
                {
                    "name": "Real Estate",
                    "path": "/explore/real-estate",
                    "icon": "Home"
                },
                {
                    "name": "Telecom",
                    "path": "/explore/telecom",
                    "icon": "Radio"
                }
            ]
        }
    },
    {
        "name": "Offerings",
        "path": "/offerings",
        "dropdown": {
            "featured": [
                {
                    "title": "Team Augmentation",
                    "desc": "Scale your dev teams",
                    "path": "/explore/staff-augmentation"
                },
                {
                    "title": "Security Audits",
                    "desc": "Penetration testing",
                    "path": "/explore/security-assessments"
                }
            ],
            "highlight": {
                "title": "Global Delivery Model",
                "desc": "Follow-the-sun delivery ensuring 24/7 continuous engineering.",
                "image": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
                "linkText": "Learn How",
                "linkPath": "/delivery"
            },
            "items": [
                {
                    "name": "AI Consulting",
                    "path": "/explore/ai-consulting",
                    "icon": "Lightbulb"
                },
                {
                    "name": "Product Engineering",
                    "path": "/explore/product-engineering",
                    "icon": "Wrench"
                },
                {
                    "name": "Cloud Migration",
                    "path": "/explore/cloud-migration",
                    "icon": "CloudCog"
                },
                {
                    "name": "Staff Augmentation",
                    "path": "/explore/staff-augmentation",
                    "icon": "UserPlus"
                },
                {
                    "name": "Managed Services",
                    "path": "/explore/managed-services-offering",
                    "icon": "ShieldCheck"
                },
                {
                    "name": "UI/UX Services",
                    "path": "/explore/ui-ux-services",
                    "icon": "Layout"
                },
                {
                    "name": "Security Assessments",
                    "path": "/explore/security-assessments",
                    "icon": "Search"
                },
                {
                    "name": "Technical Support",
                    "path": "/explore/technical-support",
                    "icon": "LifeBuoy"
                },
                {
                    "name": "Training Services",
                    "path": "/explore/training-services",
                    "icon": "BookOpen"
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
                    "title": "AWS Premier Partner",
                    "desc": "Advanced cloud capabilities",
                    "path": "/explore/cloud-partners"
                },
                {
                    "title": "Microsoft Gold",
                    "desc": "Azure integration specialists",
                    "path": "/explore/cloud-partners"
                }
            ],
            "highlight": {
                "title": "Ecosystem Growth",
                "desc": "Join 50+ global partners delivering excellence.",
                "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
                "linkText": "Become a Partner",
                "linkPath": "/partner-program"
            },
            "items": [
                {
                    "name": "Technology Partners",
                    "path": "/explore/technology-partners",
                    "icon": "Cpu"
                },
                {
                    "name": "Cloud Partners",
                    "path": "/explore/cloud-partners",
                    "icon": "Cloud"
                },
                {
                    "name": "Strategic Partners",
                    "path": "/explore/strategic-partners",
                    "icon": "Target"
                },
                {
                    "name": "Implementation Partners",
                    "path": "/explore/implementation-partners",
                    "icon": "Wrench"
                },
                {
                    "name": "Ecosystem Partners",
                    "path": "/explore/ecosystem-partners",
                    "icon": "Network"
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
                    "title": "Latest Press Release",
                    "desc": "MicroVectors expands to Europe",
                    "path": "/explore/news-media"
                },
                {
                    "title": "Life at MicroVectors",
                    "desc": "See our amazing culture",
                    "path": "/explore/careers"
                }
            ],
            "highlight": {
                "title": "Join Our Team",
                "desc": "We are hiring passionate engineers globally.",
                "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
                "linkText": "View Open Roles",
                "linkPath": "/explore/careers"
            },
            "items": [
                {
                    "name": "About Us",
                    "path": "/explore/about-us",
                    "icon": "Info"
                },
                {
                    "name": "Mission & Vision",
                    "path": "/explore/mission-vision",
                    "icon": "Target"
                },
                {
                    "name": "Leadership Team",
                    "path": "/explore/leadership-team",
                    "icon": "Users"
                },
                {
                    "name": "Careers",
                    "path": "/explore/careers",
                    "icon": "Briefcase"
                },
                {
                    "name": "Blogs",
                    "path": "/explore/blogs",
                    "icon": "FileText"
                },
                {
                    "name": "News & Media",
                    "path": "/explore/news-media",
                    "icon": "Radio"
                },
                {
                    "name": "CSR Activities",
                    "path": "/explore/csr",
                    "icon": "HeartPulse"
                },
                {
                    "name": "Contact Us",
                    "path": "/contact",
                    "icon": "Phone"
                }
            ]
        }
    }
];
