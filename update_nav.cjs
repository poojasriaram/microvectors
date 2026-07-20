const fs = require('fs');

const navItemsArray = `    const navItems = [
        { name: 'Home', path: '/' },
        {
            name: 'Capabilities', path: '/capabilities',
            dropdown: {
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
                ],
                featured: [
                    { title: "Generative AI Accelerator", desc: "Deploy GenAI in weeks, not months." },
                    { title: "Enterprise Automation", desc: "End-to-end process automation." }
                ],
                highlight: { title: "100+ AI Projects", desc: "Delivered securely worldwide.", cta: "View Case Studies", link: "/outcomes" }
            }
        },
        {
            name: 'Crypto', path: '/crypto',
            dropdown: {
                items: [
                    { name: "Blockchain Development", path: "/explore/blockchain-development", icon: "Link" },
                    { name: "Web3 Solutions", path: "/explore/web3-solutions", icon: "Globe" },
                    { name: "Smart Contracts", path: "/explore/smart-contracts", icon: "FileCode2" },
                    { name: "Digital Asset Solutions", path: "/explore/digital-asset-solutions", icon: "Coins" },
                    { name: "Tokenization", path: "/explore/tokenization", icon: "Boxes" },
                    { name: "Crypto Infrastructure", path: "/explore/crypto-infrastructure", icon: "Server" },
                    { name: "NFT Solutions", path: "/explore/nft-solutions", icon: "Image" },
                    { name: "Blockchain Consulting", path: "/explore/blockchain-consulting", icon: "MessageSquare" }
                ],
                featured: [
                    { title: "Defi Infrastructure", desc: "Bank-grade secure crypto protocols." },
                    { title: "Smart Contract Audit", desc: "Comprehensive security reviews." }
                ],
                highlight: { title: "$5B+ Secured", desc: "In smart contracts audited by us.", cta: "Talk to Experts", link: "/book-consultation" }
            }
        },
        {
            name: 'Outcomes', path: '/outcomes',
            dropdown: {
                items: [
                    { name: "Increased Productivity", path: "/explore/increased-productivity", icon: "TrendingUp" },
                    { name: "Business Growth", path: "/explore/business-growth", icon: "BarChart" },
                    { name: "Cost Optimization", path: "/explore/cost-optimization", icon: "PieChart" },
                    { name: "Operational Excellence", path: "/explore/operational-excellence", icon: "Settings" },
                    { name: "Customer Experience", path: "/explore/customer-experience", icon: "Smile" },
                    { name: "Digital Transformation", path: "/explore/digital-transformation-outcomes", icon: "Layers" },
                    { name: "AI Adoption", path: "/explore/ai-adoption", icon: "Cpu" },
                    { name: "ROI Improvements", path: "/explore/roi-improvements", icon: "DollarSign" }
                ],
                featured: [
                    { title: "40% Cost Reduction", desc: "Average savings in ops costs." },
                    { title: "3x Faster GTM", desc: "Accelerate your product delivery." }
                ],
                highlight: { title: "Proven Impact", desc: "Measurable metrics that matter.", cta: "See Metrics", link: "/outcomes" }
            }
        },
        {
            name: 'Solutions', path: '/solutions',
            dropdown: {
                items: [
                    { name: "AI Solutions", path: "/explore/ai-solutions-group", icon: "Brain" },
                    { name: "Cloud Solutions", path: "/explore/cloud-solutions-group", icon: "CloudRain" },
                    { name: "Enterprise Solutions", path: "/explore/enterprise-solutions-group", icon: "Building" },
                    { name: "SaaS Solutions", path: "/explore/saas-solutions", icon: "AppWindow" },
                    { name: "Automation Solutions", path: "/explore/automation-solutions-group", icon: "Zap" },
                    { name: "Custom Software", path: "/explore/custom-software-development", icon: "Code2" },
                    { name: "Managed Services", path: "/explore/managed-services", icon: "ShieldCheck" },
                    { name: "Consulting Services", path: "/explore/consulting-services", icon: "Users" }
                ],
                featured: [
                    { title: "Intelligent ERP", desc: "Next generation resource planning." },
                    { title: "Cloud Native Stack", desc: "Scalable SaaS architectures." }
                ],
                highlight: { title: "Enterprise Grade", desc: "Built for massive scale.", cta: "Explore Solutions", link: "/solutions" }
            }
        },
        {
            name: 'Industries', path: '/industries',
            dropdown: {
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
                ],
                featured: [
                    { title: "FinTech Security", desc: "Regulatory compliant infrastructures." },
                    { title: "HealthTech AI", desc: "HIPAA compliant ML models." }
                ],
                highlight: { title: "Global Delivery", desc: "Expertise across 10+ sectors.", cta: "Industry Focus", link: "/industries" }
            }
        },
        {
            name: 'Offerings', path: '/offerings',
            dropdown: {
                items: [
                    { name: "AI Consulting", path: "/explore/ai-consulting", icon: "Lightbulb" },
                    { name: "Product Engineering", path: "/explore/product-engineering", icon: "Wrench" },
                    { name: "Cloud Migration", path: "/explore/cloud-migration", icon: "CloudCog" },
                    { name: "Staff Augmentation", path: "/explore/staff-augmentation", icon: "UserPlus" },
                    { name: "Managed Services", path: "/explore/managed-services-offering", icon: "Shield" },
                    { name: "UI/UX Services", path: "/explore/ui-ux-services", icon: "Layout" },
                    { name: "Security Assessments", path: "/explore/security-assessments", icon: "Search" },
                    { name: "Technical Support", path: "/explore/technical-support", icon: "LifeBuoy" },
                    { name: "Training Services", path: "/explore/training-services", icon: "BookOpen" }
                ],
                featured: [
                    { title: "Dedicated Teams", desc: "Scale your engineering capacity." },
                    { title: "24/7 Ops", desc: "Continuous monitoring and support." }
                ],
                highlight: { title: "Flexible Models", desc: "Engagement tailored to you.", cta: "View Models", link: "/offerings" }
            }
        },
        {
            name: 'Partners', path: '/partners',
            dropdown: {
                items: [
                    { name: "Technology Partners", path: "/explore/technology-partners", icon: "Cpu" },
                    { name: "Cloud Partners", path: "/explore/cloud-partners", icon: "Cloud" },
                    { name: "Strategic Partners", path: "/explore/strategic-partners", icon: "Handshake" },
                    { name: "Implementation Partners", path: "/explore/implementation-partners", icon: "Wrench" },
                    { name: "Ecosystem Partners", path: "/explore/ecosystem-partners", icon: "Network" }
                ],
                featured: [
                    { title: "AWS Advanced Partner", desc: "Certified cloud expertise." },
                    { title: "Microsoft Gold", desc: "Enterprise application specialists." }
                ],
                highlight: { title: "Join Network", desc: "Grow together with us.", cta: "Become Partner", link: "/partners" }
            }
        },
        {
            name: 'Company', path: '/company',
            dropdown: {
                items: [
                    { name: "About Us", path: "/company#about-us", icon: "Info" },
                    { name: "Leadership Team", path: "/company#leadership", icon: "Users" },
                    { name: "Mission & Vision", path: "/company#mission", icon: "Target" },
                    { name: "Careers", path: "/career", icon: "Briefcase" },
                    { name: "Blogs", path: "/company#blogs", icon: "FileText" },
                    { name: "News & Media", path: "/company#news", icon: "Radio" },
                    { name: "CSR Activities", path: "/company#csr", icon: "Globe" },
                    { name: "Contact Us", path: "/book-consultation", icon: "Phone" }
                ],
                featured: [
                    { title: "We Are Hiring!", desc: "Join our fast-growing global team." },
                    { title: "Latest Press", desc: "MicroVectors recognized as top AI firm." }
                ],
                highlight: { title: "Our Culture", desc: "Innovation driven by people.", cta: "Join Us", link: "/career" }
            }
        }
    ];`;

let content = fs.readFileSync('src/app/components/Navigation.tsx', 'utf8');

// Replace the navItems array
const navItemsRegex = /const navItems = \[[\s\S]*?^    \];/m;
content = content.replace(navItemsRegex, navItemsArray);

// Now we need to update the imports to include all these lucide icons dynamically or just import them
const newImports = `import { 
    Menu, X, ArrowRight, ChevronDown, Rocket, Shield, Globe, Cpu, Zap, Lightbulb, Link as LinkIcon, Lock, 
    MessageSquare, Briefcase, BarChart, Database, MapPin, 
    BrainCircuit, Network, Sparkles, Building2, Bot, Cloud, Workflow, GitMerge, RefreshCw, 
    FileCode2, Coins, Boxes, Server, Image, TrendingUp, PieChart, Settings, Smile, Layers, DollarSign,
    Brain, CloudRain, Building, AppWindow, Code2, ShieldCheck, Users, HeartPulse, Landmark, ShoppingBag,
    Factory, GraduationCap, Truck, Home, Radio, Wrench, CloudCog, UserPlus, Layout, Search, LifeBuoy, BookOpen,
    Handshake, Info, Target, FileText, Phone
} from 'lucide-react';
const Icons: any = {
    BrainCircuit, Network, Sparkles, Building2, Bot, Cloud, Workflow, GitMerge, RefreshCw, Briefcase, Shield, Database,
    Link: LinkIcon, Globe, FileCode2, Coins, Boxes, Server, Image, MessageSquare, TrendingUp, BarChart, PieChart, Settings,
    Smile, Layers, Cpu, DollarSign, Brain, CloudRain, Building, AppWindow, Zap, Code2, ShieldCheck, Users, HeartPulse,
    Landmark, ShoppingBag, Factory, GraduationCap, Truck, Home, Radio, Lightbulb, Wrench, CloudCog, UserPlus, Layout,
    Search, LifeBuoy, BookOpen, Handshake, Info, Target, FileText, Phone
};`;

content = content.replace(/import \{.*?\} from 'lucide-react';/s, newImports);

// Now rewrite the mega menu UI JSX
// The old mega menu was from `<div className="flex">` to its end, but there's a specific block to replace.
// I'll replace the `<div className="flex">` block up to `<div className="bg-slate-50/80`
// Actually, I can use regex to replace the interior of `{item.dropdown && (`

const uiRegex = /<div className="flex">[\s\S]*?{item\.dropdown\[activeCatIdx\]\?\.title}[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>/m;

const newUI = `<div className="flex">
    {/* LEFT: SUBMENUS */}
    <div className="w-[40%] bg-slate-50/80 p-6 xl:p-8 border-r border-slate-100 flex flex-col">
        <h4 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-4 select-none">Explore {item.name}</h4>
        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
            {item.dropdown.items.map((sub: any, idx: number) => {
                const IconComp = Icons[sub.icon] || ArrowRight;
                return (
                    <Link
                        key={idx}
                        to={sub.path}
                        onClick={(e) => {
                            if (sub.path.includes('#')) {
                                const hash = sub.path.split('#')[1];
                                const el = document.getElementById(hash);
                                if (el) {
                                    e.preventDefault();
                                    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
                                }
                            }
                            setHoveredItem(null);
                        }}
                        className="group/link flex items-center gap-2 p-2 rounded-lg hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-slate-200 transition-all"
                    >
                        <div className="flex-shrink-0 w-7 h-7 rounded-md bg-white border border-slate-100 flex items-center justify-center group-hover/link:bg-blue-50 group-hover/link:border-blue-100 group-hover/link:text-blue-600 transition-colors text-slate-500">
                            <IconComp className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[12px] font-semibold text-slate-700 group-hover/link:text-blue-600 line-clamp-1">{sub.name}</span>
                    </Link>
                );
            })}
        </div>
    </div>

    {/* MIDDLE: FEATURED */}
    <div className="w-[30%] p-6 xl:p-8 bg-white border-r border-slate-100 flex flex-col justify-center">
        <h4 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-4 select-none">Featured</h4>
        <div className="flex flex-col gap-4">
            {item.dropdown.featured.map((feat: any, idx: number) => (
                <div key={idx} className="group/feat cursor-pointer p-4 rounded-xl border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-all">
                    <h5 className="text-[13px] font-bold text-slate-900 group-hover/feat:text-blue-600 mb-1 flex items-center gap-1">
                        {feat.title} <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/feat:translate-x-0 group-hover/feat:opacity-100 transition-all" />
                    </h5>
                    <p className="text-[12px] font-medium text-slate-500 leading-relaxed">{feat.desc}</p>
                </div>
            ))}
        </div>
    </div>

    {/* RIGHT: HIGHLIGHT */}
    <div className="w-[30%] p-6 xl:p-8 bg-white relative overflow-hidden flex flex-col justify-center group/highlight">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 -z-10 group-hover/highlight:scale-105 transition-transform duration-500"></div>
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-600/20">
            <Sparkles className="w-6 h-6" />
        </div>
        <h4 className="text-xl font-extrabold text-slate-900 mb-2 leading-tight">{item.dropdown.highlight.title}</h4>
        <p className="text-[13px] font-medium text-slate-600 mb-6">{item.dropdown.highlight.desc}</p>
        <Link 
            to={item.dropdown.highlight.link}
            onClick={() => setHoveredItem(null)}
            className="inline-flex items-center gap-2 text-[13px] font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
            {item.dropdown.highlight.cta} <ArrowRight className="w-4 h-4" />
        </Link>
    </div>
</div>`;

// We also need to remove the `activeCategoryIndices` usage if it causes issues, but it can just stay unused.
content = content.replace(uiRegex, newUI);

fs.writeFileSync('src/app/components/Navigation.tsx', content, 'utf8');
console.log('Navigation successfully updated to 3-column layout.');
