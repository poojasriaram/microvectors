const fs = require('fs');
const path = require('path');

const navItems = [
    { name: 'Home', path: '/' },
    {
        name: 'Capabilities', path: '/capabilities',
        dropdown: {
            featured: [
                { title: "Generative AI Framework", desc: "Build custom LLM agents", path: "/explore/generative-ai" },
                { title: "Enterprise Cloud Landing Zones", desc: "Secure multi-cloud setup", path: "/explore/cloud-computing" }
            ],
            highlight: {
                title: "100+ Projects Delivered",
                desc: "Discover how we transformed Fortune 500 companies with AI.",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80",
                linkText: "View Case Studies",
                linkPath: "/case-studies"
            },
            items: [
                { name: "Artificial Intelligence", path: "/explore/artificial-intelligence", icon: "BrainCircuit" },
                { name: "Machine Learning", path: "/explore/machine-learning", icon: "Network" },
                { name: "Generative AI", path: "/explore/generative-ai", icon: "Sparkles" },
                { name: "Enterprise AI", path: "/explore/enterprise-ai", icon: "Building2" },
                { name: "Agentic AI", path: "/explore/agentic-ai", icon: "Bot" },
                { name: "Cloud Computing", path: "/explore/cloud-computing", icon: "Cloud" },
                { name: "Automation", path: "/explore/automation", icon: "Workflow" },
                { name: "Cyber Security", path: "/explore/cyber-security", icon: "Shield" },
                { name: "Data Engineering", path: "/explore/data-engineering", icon: "Database" },
                { name: "DevOps", path: "/explore/devops", icon: "GitMerge" },
                { name: "Digital Transformation", path: "/explore/digital-transformation", icon: "RefreshCw" },
                { name: "Enterprise Consulting", path: "/explore/enterprise-consulting", icon: "Briefcase" }
            ]
        }
    },
    {
        name: 'Crypto', path: '/crypto',
        dropdown: {
            featured: [
                { title: "Zero-Knowledge Proofs", desc: "Enterprise privacy protocols", path: "/explore/blockchain-development" },
                { title: "Smart Contract Audits", desc: "Military-grade security", path: "/explore/smart-contracts" }
            ],
            highlight: {
                title: "Bank-Grade Security",
                desc: "We secure over $2B in digital assets for our clients.",
                image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=400&q=80",
                linkText: "Learn More",
                linkPath: "/crypto-security"
            },
            items: [
                { name: "Blockchain Development", path: "/explore/blockchain-development", icon: "Link" },
                { name: "Web3 Solutions", path: "/explore/web3-solutions", icon: "Globe" },
                { name: "Smart Contracts", path: "/explore/smart-contracts", icon: "FileCode2" },
                { name: "Digital Asset Solutions", path: "/explore/digital-asset-solutions", icon: "Coins" },
                { name: "Tokenization", path: "/explore/tokenization", icon: "Boxes" },
                { name: "Crypto Infrastructure", path: "/explore/crypto-infrastructure", icon: "Server" },
                { name: "NFT Solutions", path: "/explore/nft-solutions", icon: "Image" },
                { name: "Blockchain Consulting", path: "/explore/blockchain-consulting", icon: "MessageSquare" }
            ]
        }
    },
    {
        name: 'Outcomes', path: '/outcomes',
        dropdown: {
            featured: [
                { title: "Revenue Operations", desc: "Automate sales cycles", path: "/explore/business-growth" },
                { title: "Supply Chain AI", desc: "Predictive logistics", path: "/explore/operational-excellence" }
            ],
            highlight: {
                title: "Guaranteed ROI",
                desc: "Our deployments average a 314% ROI within the first year.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
                linkText: "Read the Report",
                linkPath: "/roi-report"
            },
            items: [
                { name: "Increased Productivity", path: "/explore/increased-productivity", icon: "TrendingUp" },
                { name: "Business Growth", path: "/explore/business-growth", icon: "BarChart" },
                { name: "Cost Optimization", path: "/explore/cost-optimization", icon: "PieChart" },
                { name: "Operational Excellence", path: "/explore/operational-excellence", icon: "Settings" },
                { name: "Customer Experience", path: "/explore/customer-experience", icon: "Smile" },
                { name: "Digital Transformation", path: "/explore/digital-transformation-outcomes", icon: "Layers" },
                { name: "AI Adoption", path: "/explore/ai-adoption", icon: "Cpu" },
                { name: "ROI Improvements", path: "/explore/roi-improvements", icon: "DollarSign" }
            ]
        }
    },
    {
        name: 'Solutions', path: '/solutions',
        dropdown: {
            featured: [
                { title: "Conversational AI", desc: "Next-gen support bots", path: "/explore/ai-solutions-group" },
                { title: "Hybrid Cloud Manager", desc: "Unified infrastructure", path: "/explore/cloud-solutions-group" }
            ],
            highlight: {
                title: "Enterprise Grade Solutions",
                desc: "Built to scale globally with 99.999% uptime SLAs.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
                linkText: "View Architecture",
                linkPath: "/architecture"
            },
            items: [
                { name: "AI Solutions", path: "/explore/ai-solutions-group", icon: "Brain" },
                { name: "Cloud Solutions", path: "/explore/cloud-solutions-group", icon: "CloudRain" },
                { name: "Enterprise Solutions", path: "/explore/enterprise-solutions-group", icon: "Building" },
                { name: "SaaS Solutions", path: "/explore/saas-solutions", icon: "AppWindow" },
                { name: "Automation Solutions", path: "/explore/automation-solutions-group", icon: "Zap" },
                { name: "Custom Software", path: "/explore/custom-software-development", icon: "Code2" },
                { name: "Managed Services", path: "/explore/managed-services", icon: "ShieldCheck" },
                { name: "Consulting Services", path: "/explore/consulting-services", icon: "Users" }
            ]
        }
    },
    {
        name: 'Industries', path: '/industries',
        dropdown: {
            featured: [
                { title: "Predictive Healthcare", desc: "AI-driven diagnostics", path: "/explore/healthcare" },
                { title: "FinTech Infrastructure", desc: "Core banking modernization", path: "/explore/finance" }
            ],
            highlight: {
                title: "Industry Specialists",
                desc: "Our teams are composed of veterans from top Fortune 500s.",
                image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
                linkText: "Meet the Team",
                linkPath: "/team"
            },
            items: [
                { name: "Healthcare", path: "/explore/healthcare", icon: "HeartPulse" },
                { name: "Finance", path: "/explore/finance", icon: "Landmark" },
                { name: "Retail", path: "/explore/retail", icon: "ShoppingBag" },
                { name: "Manufacturing", path: "/explore/manufacturing", icon: "Factory" },
                { name: "Education", path: "/explore/education", icon: "GraduationCap" },
                { name: "Logistics", path: "/explore/logistics", icon: "Truck" },
                { name: "Government", path: "/explore/government", icon: "Landmark" },
                { name: "Startups", path: "/explore/startups", icon: "Rocket" },
                { name: "Enterprises", path: "/explore/enterprises", icon: "Building2" },
                { name: "Real Estate", path: "/explore/real-estate", icon: "Home" },
                { name: "Telecom", path: "/explore/telecom", icon: "Radio" }
            ]
        }
    },
    {
        name: 'Offerings', path: '/offerings',
        dropdown: {
            featured: [
                { title: "Team Augmentation", desc: "Scale your dev teams", path: "/explore/staff-augmentation" },
                { title: "Security Audits", desc: "Penetration testing", path: "/explore/security-assessments" }
            ],
            highlight: {
                title: "Global Delivery Model",
                desc: "Follow-the-sun delivery ensuring 24/7 continuous engineering.",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
                linkText: "Learn How",
                linkPath: "/delivery"
            },
            items: [
                { name: "AI Consulting", path: "/explore/ai-consulting", icon: "Lightbulb" },
                { name: "Product Engineering", path: "/explore/product-engineering", icon: "Wrench" },
                { name: "Cloud Migration", path: "/explore/cloud-migration", icon: "CloudCog" },
                { name: "Staff Augmentation", path: "/explore/staff-augmentation", icon: "UserPlus" },
                { name: "Managed Services", path: "/explore/managed-services-offering", icon: "ShieldCheck" },
                { name: "UI/UX Services", path: "/explore/ui-ux-services", icon: "Layout" },
                { name: "Security Assessments", path: "/explore/security-assessments", icon: "Search" },
                { name: "Technical Support", path: "/explore/technical-support", icon: "LifeBuoy" },
                { name: "Training Services", path: "/explore/training-services", icon: "BookOpen" }
            ]
        }
    },
    {
        name: 'Partners', path: '/partners',
        dropdown: {
            featured: [
                { title: "AWS Premier Partner", desc: "Advanced cloud capabilities", path: "/explore/cloud-partners" },
                { title: "Microsoft Gold", desc: "Azure integration specialists", path: "/explore/cloud-partners" }
            ],
            highlight: {
                title: "Ecosystem Growth",
                desc: "Join 50+ global partners delivering excellence.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
                linkText: "Become a Partner",
                linkPath: "/partner-program"
            },
            items: [
                { name: "Technology Partners", path: "/explore/technology-partners", icon: "Cpu" },
                { name: "Cloud Partners", path: "/explore/cloud-partners", icon: "Cloud" },
                { name: "Strategic Partners", path: "/explore/strategic-partners", icon: "Target" },
                { name: "Implementation Partners", path: "/explore/implementation-partners", icon: "Wrench" },
                { name: "Ecosystem Partners", path: "/explore/ecosystem-partners", icon: "Network" }
            ]
        }
    },
    {
        name: 'Company', path: '/company',
        dropdown: {
            featured: [
                { title: "Latest Press Release", desc: "MicroVectors expands to Europe", path: "/explore/news-media" },
                { title: "Life at MicroVectors", desc: "See our amazing culture", path: "/explore/careers" }
            ],
            highlight: {
                title: "Join Our Team",
                desc: "We are hiring passionate engineers globally.",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
                linkText: "View Open Roles",
                linkPath: "/explore/careers"
            },
            items: [
                { name: "About Us", path: "/explore/about-us", icon: "Info" },
                { name: "Mission & Vision", path: "/explore/mission-vision", icon: "Target" },
                { name: "Leadership Team", path: "/explore/leadership-team", icon: "Users" },
                { name: "Careers", path: "/explore/careers", icon: "Briefcase" },
                { name: "Blogs", path: "/explore/blogs", icon: "FileText" },
                { name: "News & Media", path: "/explore/news-media", icon: "Radio" },
                { name: "CSR Activities", path: "/explore/csr", icon: "HeartPulse" },
                { name: "Contact Us", path: "/contact", icon: "Phone" }
            ]
        }
    }
];

const generateContentForService = (category, name) => {
    // Shared structure for all pages
    const base = `
        title: "${name}",
        category: "${category}",
        heroDescription: "Empower your enterprise with our cutting-edge ${name} capabilities. We deliver scalable, secure, and high-performance technologies tailored to your strategic goals.",
        features: [
            { title: "Advanced Capabilities", description: "Leverage state-of-the-art architectures designed specifically for ${name}." },
            { title: "Seamless Integration", description: "Easily connect with your existing infrastructure with zero downtime." },
            { title: "Enterprise Grade Security", description: "Bank-level security and compliance built-in from day one." }
        ],
        benefits: ["Accelerated time-to-market by up to 40%", "Reduced operational costs through automation", "Enhanced data security and compliance", "Scalable architecture for future growth"],
        faqs: [
            { question: "How long does implementation take?", answer: "Timelines vary based on complexity, but our agile approach ensures initial delivery within weeks." },
            { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive 24/7 managed support for all deployments." }
        ]`;

    return `
        ${base}
    `;
};

let allServicesEntries = [];

navItems.forEach(item => {
    if (item.dropdown && item.dropdown.items) {
        item.dropdown.items.forEach(sub => {
            const slug = sub.path.split('/').pop();
            if(slug !== 'contact') {
                allServicesEntries.push(`"${slug}": {${generateContentForService(item.name, sub.name)}}`);
            }
        });
    }
});

const dataFileContent = `
export interface ServiceData {
    title: string;
    category: string;
    heroDescription: string;
    features: { title: string; description: string }[];
    benefits: string[];
    faqs: { question: string; answer: string }[];
}

export const servicesData: Record<string, ServiceData> = {
    ${allServicesEntries.join(',\n')}
};

export const smNavItems = ${JSON.stringify(navItems, null, 4)};
`;

const dataDir = path.join(__dirname, 'src/data');
fs.writeFileSync(path.join(dataDir, 'navigationContent.ts'), dataFileContent, 'utf8');

console.log('Successfully generated expanded content data schema for the 3-column enterprise layout.');
