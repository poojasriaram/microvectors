import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Zap, Brain, Globe, Shield, Code, Database, BarChart3, Layers, Server, Users, Building2, TrendingUp, Rocket, Target, Cpu, Cloud, Lock, LineChart } from 'lucide-react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link, useLocation } from 'react-router-dom';

const navConfig = [
    { name: 'Home', path: '/' },
    {
        name: 'Capabilities', path: '/capabilities',
        dropdown: [
            {
                title: 'Core Tech', icon: Brain, color: 'text-violet-600', bg: 'bg-violet-50',
                items: [
                    { name: 'AI & Machine Learning', path: '/capabilities', icon: Brain },
                    { name: 'Generative AI Solutions', path: '/capabilities', icon: Zap },
                    { name: 'Data Engineering', path: '/capabilities', icon: Database },
                    { name: 'Computer Vision', path: '/capabilities', icon: Cpu },
                    { name: 'Natural Language Processing', path: '/capabilities', icon: Globe },
                    { name: 'Predictive Analytics', path: '/capabilities', icon: BarChart3 },
                ],
            },
            {
                title: 'Engineering', icon: Code, color: 'text-blue-600', bg: 'bg-blue-50',
                items: [
                    { name: 'Cloud & DevOps', path: '/capabilities', icon: Cloud },
                    { name: 'Custom Software Dev', path: '/capabilities', icon: Code },
                    { name: 'Mobile App Development', path: '/capabilities', icon: Layers },
                    { name: 'API Integration', path: '/capabilities', icon: Server },
                    { name: 'Microservices Architecture', path: '/capabilities', icon: Database },
                    { name: 'QA & Testing', path: '/capabilities', icon: Shield },
                ],
            },
            {
                title: 'Enterprise & Security', icon: Shield, color: 'text-emerald-600', bg: 'bg-emerald-50',
                items: [
                    { name: 'Enterprise Automation', path: '/capabilities', icon: Zap },
                    { name: 'Cyber Security', path: '/capabilities', icon: Lock },
                    { name: 'IT Consulting', path: '/capabilities', icon: Building2 },
                    { name: 'Identity Management', path: '/capabilities', icon: Users },
                    { name: 'Threat Detection', path: '/capabilities', icon: Shield },
                    { name: 'Compliance Solutions', path: '/capabilities', icon: Shield },
                ],
            },
        ],
    },
    {
        name: 'Crypto', path: '/crypto',
        dropdown: [
            {
                title: 'Blockchain & Web3', icon: Globe, color: 'text-orange-600', bg: 'bg-orange-50',
                items: [
                    { name: 'Blockchain Solutions', path: '/crypto', icon: Layers },
                    { name: 'Web3 Development', path: '/crypto', icon: Globe },
                    { name: 'Decentralized Apps', path: '/crypto', icon: Code },
                    { name: 'DeFi Platforms', path: '/crypto', icon: TrendingUp },
                    { name: 'NFT Marketplaces', path: '/crypto', icon: Zap },
                    { name: 'Web3 Gaming', path: '/crypto', icon: Rocket },
                ],
            },
            {
                title: 'Infrastructure', icon: Server, color: 'text-blue-600', bg: 'bg-blue-50',
                items: [
                    { name: 'Smart Contracts', path: '/crypto', icon: Code },
                    { name: 'Crypto Infrastructure', path: '/crypto', icon: Server },
                    { name: 'Node Development', path: '/crypto', icon: Database },
                    { name: 'Consensus Algorithms', path: '/crypto', icon: Cpu },
                    { name: 'Layer 2 Solutions', path: '/crypto', icon: Layers },
                    { name: 'Cross-Chain Bridges', path: '/crypto', icon: Globe },
                ],
            },
            {
                title: 'Digital Assets', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-50',
                items: [
                    { name: 'Tokenization Services', path: '/crypto', icon: Zap },
                    { name: 'Digital Asset Solutions', path: '/crypto', icon: Database },
                    { name: 'Crypto Wallets', path: '/crypto', icon: Shield },
                    { name: 'Asset Management', path: '/crypto', icon: BarChart3 },
                    { name: 'Yield Farming', path: '/crypto', icon: TrendingUp },
                    { name: 'STO Development', path: '/crypto', icon: Building2 },
                ],
            },
        ],
    },
    {
        name: 'Outcomes', path: '/outcomes',
        dropdown: [
            {
                title: 'Business Value', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50',
                items: [
                    { name: 'Business Transformation', path: '/outcomes', icon: Rocket },
                    { name: 'Increased Productivity', path: '/outcomes', icon: Zap },
                    { name: 'Revenue Growth', path: '/outcomes', icon: TrendingUp },
                    { name: 'Market Expansion', path: '/outcomes', icon: Globe },
                    { name: 'Competitive Advantage', path: '/outcomes', icon: Target },
                    { name: 'Customer Satisfaction', path: '/outcomes', icon: Users },
                ],
            },
            {
                title: 'Efficiency', icon: Zap, color: 'text-blue-600', bg: 'bg-blue-50',
                items: [
                    { name: 'Cost Optimization', path: '/outcomes', icon: BarChart3 },
                    { name: 'Process Automation', path: '/outcomes', icon: Zap },
                    { name: 'Resource Allocation', path: '/outcomes', icon: Target },
                    { name: 'Time-to-Market', path: '/outcomes', icon: Rocket },
                    { name: 'Operational Excellence', path: '/outcomes', icon: Shield },
                    { name: 'Risk Mitigation', path: '/outcomes', icon: Lock },
                ],
            },
            {
                title: 'Growth', icon: Rocket, color: 'text-indigo-600', bg: 'bg-indigo-50',
                items: [
                    { name: 'Digital Innovation', path: '/outcomes', icon: Brain },
                    { name: 'Enterprise Growth', path: '/outcomes', icon: Building2 },
                    { name: 'Scale Operations', path: '/outcomes', icon: Layers },
                    { name: 'New Revenue Streams', path: '/outcomes', icon: LineChart },
                    { name: 'Market Disruption', path: '/outcomes', icon: Zap },
                    { name: 'Future-Proofing', path: '/outcomes', icon: Shield },
                ],
            },
        ],
    },
    {
        name: 'Solutions', path: '/solutions',
        dropdown: [
            {
                title: 'Intelligent Tech', icon: Brain, color: 'text-violet-600', bg: 'bg-violet-50',
                items: [
                    { name: 'AI Solutions', path: '/solutions', icon: Brain },
                    { name: 'Cloud Solutions', path: '/solutions', icon: Cloud },
                    { name: 'IoT Solutions', path: '/solutions', icon: Cpu },
                    { name: 'Edge Computing', path: '/solutions', icon: Server },
                    { name: 'Big Data Analytics', path: '/solutions', icon: Database },
                    { name: 'Machine Learning Ops', path: '/solutions', icon: Zap },
                ],
            },
            {
                title: 'Business Solutions', icon: Building2, color: 'text-blue-600', bg: 'bg-blue-50',
                items: [
                    { name: 'Enterprise Solutions', path: '/solutions', icon: Building2 },
                    { name: 'Automation Solutions', path: '/solutions', icon: Zap },
                    { name: 'ERP Integrations', path: '/solutions', icon: Layers },
                    { name: 'CRM Systems', path: '/solutions', icon: Users },
                    { name: 'Supply Chain Mgmt', path: '/solutions', icon: Globe },
                    { name: 'HR Tech', path: '/solutions', icon: Users },
                ],
            },
            {
                title: 'Core Services', icon: Server, color: 'text-emerald-600', bg: 'bg-emerald-50',
                items: [
                    { name: 'Software Solutions', path: '/solutions', icon: Code },
                    { name: 'Managed Services', path: '/solutions', icon: Server },
                    { name: 'Digital Workplaces', path: '/solutions', icon: Globe },
                    { name: 'Remote Operations', path: '/solutions', icon: Cloud },
                    { name: 'Disaster Recovery', path: '/solutions', icon: Shield },
                    { name: 'Tech Support', path: '/solutions', icon: Zap },
                ],
            },
        ],
    },
    {
        name: 'Industries', path: '/industries',
        dropdown: [
            {
                title: 'Core Sectors', icon: Building2, color: 'text-blue-600', bg: 'bg-blue-50',
                items: [
                    { name: 'Healthcare', path: '/industries', icon: Shield },
                    { name: 'Finance', path: '/industries', icon: BarChart3 },
                    { name: 'Manufacturing', path: '/industries', icon: Layers },
                    { name: 'Insurance', path: '/industries', icon: Lock },
                    { name: 'Real Estate', path: '/industries', icon: Building2 },
                    { name: 'Automotive', path: '/industries', icon: Zap },
                ],
            },
            {
                title: 'Growth Sectors', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50',
                items: [
                    { name: 'Retail', path: '/industries', icon: Globe },
                    { name: 'Education', path: '/industries', icon: Brain },
                    { name: 'Logistics', path: '/industries', icon: Server },
                    { name: 'E-commerce', path: '/industries', icon: TrendingUp },
                    { name: 'Media & Entertainment', path: '/industries', icon: Zap },
                    { name: 'Telecommunications', path: '/industries', icon: Globe },
                ],
            },
            {
                title: 'Market Focus', icon: Target, color: 'text-purple-600', bg: 'bg-purple-50',
                items: [
                    { name: 'Government', path: '/industries', icon: Building2 },
                    { name: 'Startups', path: '/industries', icon: Rocket },
                    { name: 'Enterprises', path: '/industries', icon: Layers },
                    { name: 'Non-Profits', path: '/industries', icon: Users },
                    { name: 'SMBs', path: '/industries', icon: Target },
                    { name: 'Agencies', path: '/industries', icon: Globe },
                ],
            },
        ],
    },
    {
        name: 'Offerings', path: '/offerings',
        dropdown: [
            {
                title: 'Core Services', icon: Zap, color: 'text-blue-600', bg: 'bg-blue-50',
                items: [
                    { name: 'Consulting Services', path: '/offerings', icon: Brain },
                    { name: 'Development Services', path: '/offerings', icon: Code },
                    { name: 'UI/UX Design', path: '/offerings', icon: Layers },
                    { name: 'Product Strategy', path: '/offerings', icon: Target },
                    { name: 'Digital Transformation', path: '/offerings', icon: Globe },
                    { name: 'Technical Audits', path: '/offerings', icon: Shield },
                ],
            },
            {
                title: 'Specialized', icon: Brain, color: 'text-violet-600', bg: 'bg-violet-50',
                items: [
                    { name: 'Managed Services', path: '/offerings', icon: Server },
                    { name: 'AI Services', path: '/offerings', icon: Brain },
                    { name: 'Blockchain Services', path: '/offerings', icon: Layers },
                    { name: 'Data Science', path: '/offerings', icon: Database },
                    { name: 'Security Services', path: '/offerings', icon: Lock },
                    { name: 'Cloud Migration', path: '/offerings', icon: Cloud },
                ],
            },
            {
                title: 'Infrastructure', icon: Server, color: 'text-emerald-600', bg: 'bg-emerald-50',
                items: [
                    { name: 'Cloud Services', path: '/offerings', icon: Cloud },
                    { name: 'Support Services', path: '/offerings', icon: Shield },
                    { name: 'DevOps as a Service', path: '/offerings', icon: Code },
                    { name: 'Network Infrastructure', path: '/offerings', icon: Server },
                    { name: 'Database Management', path: '/offerings', icon: Database },
                    { name: 'Site Reliability', path: '/offerings', icon: Zap },
                ],
            },
        ],
    },
    {
        name: 'Partners', path: '/partners',
        dropdown: [
            {
                title: 'Technology', icon: Cpu, color: 'text-blue-600', bg: 'bg-blue-50',
                items: [
                    { name: 'Technology Partners', path: '/partners', icon: Cpu },
                    { name: 'Strategic Partners', path: '/partners', icon: Building2 },
                    { name: 'Cloud Providers', path: '/partners', icon: Cloud },
                    { name: 'AI Vendors', path: '/partners', icon: Brain },
                    { name: 'Hardware Partners', path: '/partners', icon: Server },
                    { name: 'Platform Providers', path: '/partners', icon: Layers },
                ],
            },
            {
                title: 'Ecosystem', icon: Globe, color: 'text-emerald-600', bg: 'bg-emerald-50',
                items: [
                    { name: 'Integration Partners', path: '/partners', icon: Globe },
                    { name: 'Ecosystem Partners', path: '/partners', icon: Layers },
                    { name: 'Solution Providers', path: '/partners', icon: Code },
                    { name: 'Value-Added Resellers', path: '/partners', icon: TrendingUp },
                    { name: 'Academic Partners', path: '/partners', icon: Brain },
                    { name: 'Industry Affiliates', path: '/partners', icon: Building2 },
                ],
            },
        ],
    },
    {
        name: 'Company', path: '/company',
        dropdown: [
            {
                title: 'About', icon: Building2, color: 'text-blue-600', bg: 'bg-blue-50',
                items: [
                    { name: 'About Us', path: '/company', icon: Building2 },
                    { name: 'Our Mission', path: '/company', icon: Target },
                    { name: 'Core Values', path: '/company', icon: Shield },
                    { name: 'Global Reach', path: '/company', icon: Globe },
                    { name: 'Social Responsibility', path: '/company', icon: Users },
                    { name: 'Company History', path: '/company', icon: Layers },
                ],
            },
            {
                title: 'People & Culture', icon: Users, color: 'text-purple-600', bg: 'bg-purple-50',
                items: [
                    { name: 'Leadership Team', path: '/company', icon: Users },
                    { name: 'Careers', path: '/career', icon: Rocket },
                    { name: 'Life at MicroVectors', path: '/career', icon: Zap },
                    { name: 'Diversity & Inclusion', path: '/company', icon: Globe },
                    { name: 'Employee Benefits', path: '/career', icon: Shield },
                    { name: 'Alumni Network', path: '/company', icon: Users },
                ],
            },
            {
                title: 'Connect', icon: Globe, color: 'text-emerald-600', bg: 'bg-emerald-50',
                items: [
                    { name: 'Blogs & Resources', path: '/resources', icon: Layers },
                    { name: 'Contact Us', path: '/book-consultation', icon: ArrowRight },
                    { name: 'Press Releases', path: '/resources', icon: Globe },
                    { name: 'News & Events', path: '/resources', icon: Zap },
                    { name: 'Media Kit', path: '/resources', icon: Code },
                    { name: 'Office Locations', path: '/book-consultation', icon: Building2 },
                ],
            },
        ],
    },
];

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [expandedItems, setExpandedItems] = useState<string[]>([]);
    const [scrolled, setScrolled] = useState(false);
    const [activeCategoryIndices, setActiveCategoryIndices] = useState<Record<string, number>>({});
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => { setMobileMenuOpen(false); }, [location]);

    const toggleExpanded = (name: string) =>
        setExpandedItems(prev => prev.includes(name) ? prev.filter(i => i !== name) : [...prev, name]);

    const isActive = (item: (typeof navConfig)[0]) => {
        if (location.pathname === item.path) return true;
        if ('dropdown' in item && item.dropdown) {
            return item.dropdown.some((cat: any) => cat.items?.some((sub: any) => location.pathname === sub.path));
        }
        return false;
    };

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center transition-all duration-500
                ${scrolled
                    ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_1px_20px_-4px_rgba(15,23,42,0.10)]'
                    : 'bg-white/70 backdrop-blur-md border-b border-slate-200/50'
                }`}>
                <nav className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">

                    {/* ── Logo ── */}
                    <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-md shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow">
                            <Zap className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
                        </div>
                        <span className="font-extrabold text-[15px] tracking-tight text-slate-900">
                            Micro<span className="text-blue-600">Vectors</span>
                        </span>
                    </Link>

                    {/* ── Desktop Nav ── */}
                    <div className="hidden lg:flex items-center gap-0.5 h-full mx-4 flex-1 justify-center">
                        {navConfig.map((item) => {
                            const active = isActive(item);
                            const hasDD = 'dropdown' in item && !!item.dropdown;
                            const activeCatIdx = activeCategoryIndices[item.name] ?? 0;

                            return (
                                <div
                                    key={item.name}
                                    className="relative h-full flex items-center"
                                    onMouseEnter={() => setHoveredItem(item.name)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    <Link
                                        to={item.path}
                                        className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[13px] font-semibold transition-all duration-200 whitespace-nowrap select-none
                                            ${active ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                                    >
                                        {item.name}
                                        {hasDD && (
                                            <ChevronDown className={`w-3 h-3 transition-transform duration-200 flex-shrink-0
                                                ${hoveredItem === item.name ? 'rotate-180 text-blue-500' : 'text-slate-400'}`}
                                            />
                                        )}
                                    </Link>

                                    {/* Mega Dropdown */}
                                    {hasDD && (
                                        <div className={`absolute top-[calc(100%+6px)]
                                            ${'dropdown' in item && item.dropdown && item.dropdown.length <= 2
                                                ? ['Offerings', 'Partners', 'Company'].includes(item.name) ? 'right-0' : 'left-1/2 -translate-x-1/2'
                                                : ['Offerings', 'Partners', 'Company'].includes(item.name) ? 'right-0' : 'left-1/2 -translate-x-1/2'}
                                            w-[700px] rounded-2xl bg-white border border-slate-200/80
                                            shadow-[0_12px_48px_-8px_rgba(15,23,42,0.18),0_4px_16px_-4px_rgba(15,23,42,0.08)]
                                            transition-all duration-200 origin-top
                                            ${hoveredItem === item.name
                                                ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                                                : 'opacity-0 scale-[0.97] translate-y-1.5 pointer-events-none'
                                            }`}
                                        >
                                            <div className="absolute -top-2 inset-x-0 h-2 bg-transparent" />
                                            <div className="flex rounded-2xl overflow-hidden">
                                                {/* Left panel */}
                                                <div className="w-[195px] flex-shrink-0 bg-slate-50 border-r border-slate-100 p-3.5 space-y-0.5">
                                                    <p className="text-[9.5px] font-black uppercase tracking-[0.12em] text-slate-400 px-2.5 pb-2">
                                                        {item.name}
                                                    </p>
                                                    {'dropdown' in item && item.dropdown?.map((cat: any, ci: number) => {
                                                        const CIcon = cat.icon;
                                                        return (
                                                            <button
                                                                key={ci}
                                                                onMouseEnter={() => setActiveCategoryIndices(p => ({ ...p, [item.name]: ci }))}
                                                                className={`w-full flex items-center gap-2.5 px-2.5 py-2.5 rounded-xl text-left transition-all duration-150
                                                                    ${activeCatIdx === ci
                                                                        ? 'bg-white shadow-sm ring-1 ring-slate-200/80 text-blue-600'
                                                                        : 'hover:bg-white/70 text-slate-600 hover:text-slate-900'}`}
                                                            >
                                                                <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors
                                                                    ${activeCatIdx === ci ? cat.bg : 'bg-slate-100'}`}>
                                                                    <CIcon className={`w-3.5 h-3.5 transition-colors
                                                                        ${activeCatIdx === ci ? cat.color : 'text-slate-400'}`} />
                                                                </div>
                                                                <span className="text-[12px] font-semibold leading-snug">{cat.title}</span>
                                                                <ChevronDown className={`w-3 h-3 -rotate-90 ml-auto flex-shrink-0 transition-opacity
                                                                    ${activeCatIdx === ci ? 'opacity-100 text-blue-400' : 'opacity-0'}`} />
                                                            </button>
                                                        );
                                                    })}
                                                </div>

                                                {/* Right panel */}
                                                <div className="flex-1 p-4">
                                                    {'dropdown' in item && (
                                                        <>
                                                            <p className="text-[9.5px] font-black uppercase tracking-[0.12em] text-slate-400 px-1 pb-3">
                                                                {item.dropdown?.[activeCatIdx]?.title}
                                                            </p>
                                                            <div className="grid grid-cols-2 gap-0.5">
                                                                {item.dropdown?.[activeCatIdx]?.items.map((sub: any, si: number) => {
                                                                    const SIcon = sub.icon;
                                                                    return (
                                                                        <Link
                                                                            key={si}
                                                                            to={sub.path}
                                                                            onClick={() => setHoveredItem(null)}
                                                                            className="flex items-center gap-2.5 px-2.5 py-2.5 rounded-xl hover:bg-slate-50 group/s transition-all duration-150"
                                                                        >
                                                                            <div className="w-6.5 h-6.5 w-7 h-7 rounded-lg bg-slate-100 group-hover/s:bg-blue-50 flex items-center justify-center flex-shrink-0 transition-colors">
                                                                                <SIcon className="w-3.5 h-3.5 text-slate-400 group-hover/s:text-blue-600 transition-colors" />
                                                                            </div>
                                                                            <span className="text-[12px] font-medium text-slate-700 group-hover/s:text-slate-900 leading-snug">{sub.name}</span>
                                                                            <ArrowRight className="w-3 h-3 ml-auto text-slate-300 group-hover/s:text-blue-500 group-hover/s:translate-x-0.5 transition-all opacity-0 group-hover/s:opacity-100 flex-shrink-0" />
                                                                        </Link>
                                                                    );
                                                                })}
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Footer bar */}
                                            <div className="border-t border-slate-100 px-5 py-3 flex items-center justify-between bg-slate-50/70 rounded-b-2xl">
                                                <span className="text-[11.5px] text-slate-500 font-medium">Need help finding the right fit?</span>
                                                <Link
                                                    to="/book-consultation"
                                                    onClick={() => setHoveredItem(null)}
                                                    className="flex items-center gap-1 text-[12px] font-bold text-blue-600 hover:text-blue-700 transition-colors group/ft"
                                                >
                                                    Talk to an Expert
                                                    <ArrowRight className="w-3 h-3 group-hover/ft:translate-x-0.5 transition-transform" />
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* ── Desktop Right CTAs ── */}
                    <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0">
                        <a
                            href="https://wa.me/919944499988"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-slate-200 bg-white hover:border-green-400 hover:bg-green-50 text-slate-600 hover:text-green-700 text-[12px] font-semibold transition-all shadow-sm"
                        >
                            <WhatsAppIcon style={{ fontSize: 15, color: '#22c55e' }} />
                            <span className="hidden xl:inline">WhatsApp</span>
                        </a>
                        <Link
                            to="/book-consultation"
                            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-bold transition-all shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-px group"
                        >
                            Get Started
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>

                    {/* ── Mobile toggle ── */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </nav>
            </header>

            {/* ── Mobile Menu Panel ── */}
            <div className={`fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto transition-all duration-300
                ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'}`}
                style={{ paddingTop: 68 }}>
                <div className="px-4 pt-4 pb-28 space-y-0.5">
                    {navConfig.map((item) => {
                        const hasDD = 'dropdown' in item && !!item.dropdown;
                        return (
                            <div key={item.name} className="border-b border-slate-100 last:border-0">
                                <div
                                    className="flex items-center justify-between py-3 px-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                                    onClick={() => { if (hasDD) toggleExpanded(item.name); else setMobileMenuOpen(false); }}
                                >
                                    <Link
                                        to={item.path}
                                        className={`text-[15px] font-bold flex-1 ${location.pathname === item.path ? 'text-blue-600' : 'text-slate-900'}`}
                                        onClick={(e) => { if (hasDD) e.preventDefault(); else setMobileMenuOpen(false); }}
                                    >
                                        {item.name}
                                    </Link>
                                    {hasDD && (
                                        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${expandedItems.includes(item.name) ? 'rotate-180' : ''}`} />
                                    )}
                                </div>

                                {hasDD && (
                                    <div className={`overflow-hidden transition-all duration-300 ${expandedItems.includes(item.name) ? 'max-h-[600px] pb-4' : 'max-h-0'}`}>
                                        <div className="space-y-3 px-3">
                                            {'dropdown' in item && item.dropdown?.map((cat: any, ci: number) => (
                                                <div key={ci}>
                                                    <p className="text-[9.5px] font-black uppercase tracking-[0.12em] text-slate-400 px-3 mb-1">{cat.title}</p>
                                                    <div className="space-y-0.5">
                                                        {cat.items.slice(0, 4).map((sub: any, si: number) => {
                                                            const SIcon = sub.icon;
                                                            return (
                                                                <Link
                                                                    key={si}
                                                                    to={sub.path}
                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
                                                                >
                                                                    <SIcon className="w-4 h-4 flex-shrink-0 text-slate-400" />
                                                                    {sub.name}
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    <div className="pt-6 space-y-3">
                        <Link to="/book-consultation" onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-[15px] transition-colors shadow-lg shadow-blue-500/20">
                            Book Consultation <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a href="https://wa.me/919944499988" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl border-2 border-slate-200 hover:border-green-400 bg-white text-slate-800 font-bold text-[15px] transition-all">
                            <WhatsAppIcon style={{ fontSize: 20, color: '#22c55e' }} /> WhatsApp Us
                        </a>
                    </div>
                </div>
            </div>

            {/* ── Mobile bottom sticky bar ── */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 z-40 flex gap-3">
                <Link to="/book-consultation"
                    className="flex-1 flex items-center justify-center py-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20">
                    Book Consultation
                </Link>
                <a href="https://wa.me/919944499988" target="_blank" rel="noopener noreferrer"
                    className="w-12 flex items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-green-50 transition-colors">
                    <WhatsAppIcon style={{ fontSize: 22, color: '#22c55e' }} />
                </a>
            </div>
        </>
    );
}
