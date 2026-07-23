import { useState, useEffect } from 'react';
import { 
    Menu, X, ArrowRight, ChevronDown, Rocket, Shield, Globe, Cpu, Zap, Lightbulb, Link as LinkIcon, Lock, 
    MessageSquare, Briefcase, BarChart, Database, MapPin, 
    BrainCircuit, Network, Sparkles, Building2, Bot, Cloud, Workflow, GitMerge, RefreshCw, 
    FileCode2, Coins, Boxes, Server, Image, TrendingUp, PieChart, Settings, Smile, Layers, DollarSign,
    Brain, CloudRain, Building, AppWindow, Code2, ShieldCheck, Users, HeartPulse, Landmark, ShoppingBag,
    Factory, GraduationCap, Truck, Home, Radio, Wrench, CloudCog, UserPlus, Layout, Search, LifeBuoy, BookOpen,
    Handshake, Info, Target, FileText, Phone, ChevronRight
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { smNavItems } from '../../data/navigationContent';

const Icons: any = {
    BrainCircuit, Network, Sparkles, Building2, Bot, Cloud, Workflow, GitMerge, RefreshCw, Briefcase, Shield, Database,
    Link: LinkIcon, Globe, FileCode2, Coins, Boxes, Server, Image, MessageSquare, TrendingUp, BarChart, PieChart, Settings,
    Smile, Layers, Cpu, DollarSign, Brain, CloudRain, Building, AppWindow, Zap, Code2, ShieldCheck, Users, HeartPulse,
    Landmark, ShoppingBag, Factory, GraduationCap, Truck, Home, Radio, Lightbulb, Wrench, CloudCog, UserPlus, Layout,
    Search, LifeBuoy, BookOpen, Handshake, Info, Target, FileText, Phone, Rocket, Lock, MapPin
};

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [expandedItems, setExpandedItems] = useState<string[]>([]);
    const [scrolled, setScrolled] = useState(false);
    const [activeOfferingsCat, setActiveOfferingsCat] = useState("profit-pools");
    const [activeIndustriesCat, setActiveIndustriesCat] = useState("profit-pools");
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleExpanded = (name: string) => {
        setExpandedItems(prev =>
            prev.includes(name)
                ? prev.filter(item => item !== name)
                : [...prev, name]
        );
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b h-16 lg:h-[72px] flex items-center ${scrolled ? 'bg-white shadow-sm border-slate-200' : 'bg-white border-slate-100'}`}>
            <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full relative">
                <div className="flex items-center justify-between h-full">
                    {/* Logo */}
                    <div className="flex-shrink-0 relative z-50">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 font-heading">
                                <span>Micro</span><span className="text-blue-600">Vectors</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center h-full gap-5 xl:gap-6">
                        {smNavItems.map((item) => {
                            const isActive = location.pathname === item.path || (item.dropdown && item.dropdown.items && item.dropdown.items.some((sub: any) => sub.path === location.pathname));

                            return (
                                <div
                                    key={item.name}
                                    className="group h-full flex items-center"
                                    onMouseEnter={() => setHoveredItem(item.name)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    <Link
                                        to={item.path}
                                        onClick={() => setHoveredItem(item.name)}
                                        className={`text-[14px] xl:text-[15px] font-semibold transition-colors flex items-center gap-1.5 h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm
                                            ${isActive ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'}
                                        `}
                                    >
                                        {item.name}
                                        {item.dropdown && (
                                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${hoveredItem === item.name ? 'rotate-180 text-blue-600' : 'text-slate-400 group-hover:text-blue-500'}`} />
                                        )}
                                    </Link>

                                    {/* Advanced 3-Column Mega Menu */}
                                    {item.dropdown && (
                                        <div
                                            className={`
                                                absolute top-[calc(100%)] left-1/2 -translate-x-1/2 w-[900px] xl:w-[1100px] max-w-[calc(100vw-2rem)] bg-white border border-slate-100 shadow-2xl rounded-xl
                                                transition-all duration-200 ease-out origin-top overflow-hidden
                                                ${hoveredItem === item.name ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible pointer-events-none'}
                                            `}
                                        >
                                            {/* Invisible bridge for hover */}
                                            <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent" />
                                            
                                            <div className="flex h-full min-h-[400px]">
                                                {/* Left Column: Submenu Items */}
                                                {/* Left Column: Submenu Items */}
                                                <div className="w-[50%] p-6 lg:p-8 bg-white shrink-0">
                                                    <h4 className="text-[12px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-5 flex items-center gap-2">
                                                        <span className="w-6 h-px bg-slate-200"></span>
                                                        Explore {item.name}
                                                    </h4>
                                                    {item.name === "Offerings" && item.dropdown.categories ? (
                                                        <div className="grid grid-cols-2 gap-3 lg:gap-4">
                                                            {item.dropdown.categories.find((cat: any) => cat.id === activeOfferingsCat)?.items.map((sub: any, subIdx: number) => {
                                                                const IconComponent = Icons[sub.icon] || ArrowRight;
                                                                return (
                                                                    <Link 
                                                                        key={subIdx}
                                                                        to={sub.path}
                                                                        onClick={() => setHoveredItem(null)}
                                                                        className="group/link flex items-center gap-3 p-2.5 bg-white border border-slate-100/50 hover:border-blue-100 rounded-xl hover:shadow-sm hover:bg-slate-50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                                                    >
                                                                        <div className="bg-slate-50 text-blue-600 p-2 rounded-lg group-hover/link:bg-blue-600 group-hover/link:text-white transition-colors shrink-0">
                                                                            <IconComponent className="w-4 h-4" />
                                                                        </div>
                                                                        <div className="flex-1 flex flex-col gap-0.5 min-w-0">
                                                                            <span className="text-[13px] xl:text-[14px] font-semibold text-slate-700 group-hover/link:text-blue-600 leading-tight truncate">{sub.name}</span>
                                                                        </div>
                                                                    </Link>
                                                                );
                                                            })}
                                                        </div>
                                                    ) : item.name === "Industries" && item.dropdown.categories ? (
                                                        <div className="grid grid-cols-2 gap-3 lg:gap-4">
                                                            {item.dropdown.categories.find((cat: any) => cat.id === activeIndustriesCat)?.items.map((sub: any, subIdx: number) => {
                                                                const IconComponent = Icons[sub.icon] || ArrowRight;
                                                                return (
                                                                    <Link 
                                                                        key={subIdx}
                                                                        to={sub.path}
                                                                        onClick={() => setHoveredItem(null)}
                                                                        className="group/link flex items-center gap-3 p-2.5 bg-white border border-slate-100/50 hover:border-blue-100 rounded-xl hover:shadow-sm hover:bg-slate-50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                                                    >
                                                                        <div className="bg-slate-50 text-blue-600 p-2 rounded-lg group-hover/link:bg-blue-600 group-hover/link:text-white transition-colors shrink-0">
                                                                            <IconComponent className="w-4 h-4" />
                                                                        </div>
                                                                        <div className="flex-1 flex flex-col gap-0.5 min-w-0">
                                                                            <span className="text-[13px] xl:text-[14px] font-semibold text-slate-700 group-hover/link:text-blue-600 leading-tight truncate">{sub.name}</span>
                                                                        </div>
                                                                    </Link>
                                                                );
                                                            })}
                                                        </div>
                                                    ) : (
                                                        <div className="grid grid-cols-2 gap-3 lg:gap-4">
                                                            {item.dropdown.items?.map((sub: any, subIdx: number) => {
                                                                const IconComponent = Icons[sub.icon] || ArrowRight;
                                                                return (
                                                                    <Link 
                                                                        key={subIdx}
                                                                        to={sub.path}
                                                                        onClick={() => setHoveredItem(null)}
                                                                        className="group/link flex items-center gap-3 p-2.5 bg-white border border-transparent rounded-xl hover:border-blue-100 hover:shadow-sm hover:bg-slate-50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                                                    >
                                                                        <div className="bg-slate-50 text-blue-600 p-2 rounded-lg group-hover/link:bg-blue-600 group-hover/link:text-white transition-colors shrink-0">
                                                                            <IconComponent className="w-4 h-4" />
                                                                        </div>
                                                                        <div className="flex-1 flex flex-col gap-0.5 min-w-0">
                                                                            <span className="text-[13px] xl:text-[14px] font-semibold text-slate-700 group-hover/link:text-blue-600 leading-tight truncate">{sub.name}</span>
                                                                        </div>
                                                                    </Link>
                                                                );
                                                            })}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Middle Column: Featured / Profit Pools */}
                                                <div className="w-[25%] p-6 lg:p-8 bg-slate-50/50 border-l border-r border-slate-100 flex flex-col shrink-0 overflow-y-auto">
                                                    <h4 className="text-[12px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-5 flex items-center gap-2">
                                                        Featured
                                                    </h4>
                                                    <div className="flex flex-col gap-2.5">
                                                        {item.name === "Offerings" && item.dropdown.categories ? (
                                                            item.dropdown.categories.map((cat: any, cIdx: number) => (
                                                                <button
                                                                    key={cIdx}
                                                                    onMouseEnter={() => setActiveOfferingsCat(cat.id)}
                                                                    onClick={() => setActiveOfferingsCat(cat.id)}
                                                                    className={`group/feat text-left flex flex-col gap-1 p-3 rounded-xl border transition-all focus:outline-none ${
                                                                        activeOfferingsCat === cat.id 
                                                                            ? "bg-blue-600 border-blue-600 shadow-md text-white" 
                                                                            : "bg-white border-transparent shadow-sm hover:border-blue-200 hover:shadow-md text-slate-900"
                                                                    }`}
                                                                >
                                                                    <span className={`text-[13px] xl:text-[14px] font-bold transition-colors ${activeOfferingsCat === cat.id ? "text-white" : "text-slate-900 group-hover/feat:text-blue-600"}`}>
                                                                        {cat.title}
                                                                    </span>
                                                                    <span className={`text-[11px] xl:text-[12px] leading-snug ${activeOfferingsCat === cat.id ? "text-blue-100" : "text-slate-500"}`}>
                                                                        {cat.desc}
                                                                    </span>
                                                                </button>
                                                            ))
                                                        ) : item.name === "Industries" && item.dropdown.categories ? (
                                                            item.dropdown.categories.map((cat: any, cIdx: number) => (
                                                                <button
                                                                    key={cIdx}
                                                                    onMouseEnter={() => setActiveIndustriesCat(cat.id)}
                                                                    onClick={() => setActiveIndustriesCat(cat.id)}
                                                                    className={`group/feat text-left flex flex-col gap-1 p-3 rounded-xl border transition-all focus:outline-none ${
                                                                        activeIndustriesCat === cat.id 
                                                                            ? "bg-blue-600 border-blue-600 shadow-md text-white" 
                                                                            : "bg-white border-transparent shadow-sm hover:border-blue-200 hover:shadow-md text-slate-900"
                                                                    }`}
                                                                >
                                                                    <span className={`text-[13px] xl:text-[14px] font-bold transition-colors ${activeIndustriesCat === cat.id ? "text-white" : "text-slate-900 group-hover/feat:text-blue-600"}`}>
                                                                        {cat.title}
                                                                    </span>
                                                                    <span className={`text-[11px] xl:text-[12px] leading-snug ${activeIndustriesCat === cat.id ? "text-blue-100" : "text-slate-500"}`}>
                                                                        {cat.desc}
                                                                    </span>
                                                                </button>
                                                            ))
                                                        ) : (
                                                            item.dropdown.featured?.map((feat: any, fIdx: number) => (
                                                                <Link 
                                                                    key={fIdx}
                                                                    to={feat.path}
                                                                    onClick={() => setHoveredItem(null)}
                                                                    className="group/feat flex flex-col gap-1 p-3 rounded-xl bg-white border border-transparent shadow-sm hover:border-blue-200 hover:shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                                                >
                                                                    <span className="text-[14px] font-bold text-slate-900 group-hover/feat:text-blue-600 transition-colors">{feat.title}</span>
                                                                    <span className="text-[12px] text-slate-500 leading-relaxed">{feat.desc}</span>
                                                                    <span className="text-[12px] font-bold text-blue-600 mt-1 flex items-center gap-1 opacity-0 -translate-x-2 group-hover/feat:opacity-100 group-hover/feat:translate-x-0 transition-all">
                                                                        Learn More <ArrowRight className="w-3 h-3" />
                                                                    </span>
                                                                </Link>
                                                            ))
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Right Column: Highlight Card */}
                                                <div className="w-[25%] relative group overflow-hidden shrink-0">
                                                    <div className="absolute inset-0 bg-slate-900">
                                                        {item.dropdown.highlight?.image && (
                                                            <img 
                                                                src={item.dropdown.highlight.image} 
                                                                alt={item.dropdown.highlight.title}
                                                                className="w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                                                            />
                                                        )}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                                                    </div>
                                                    
                                                    <div className="relative h-full flex flex-col justify-end p-6 lg:p-8">
                                                        <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                                                            {item.dropdown.highlight?.title}
                                                        </h3>
                                                        <p className="text-[13px] text-slate-300 mb-6 leading-relaxed">
                                                            {item.dropdown.highlight?.desc}
                                                        </p>
                                                        <Link 
                                                            to={item.dropdown.highlight?.linkPath || '/'}
                                                            onClick={() => setHoveredItem(null)}
                                                            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-slate-900 px-5 py-2.5 rounded-lg text-[13px] font-bold transition-colors w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                                                        >
                                                            {item.dropdown.highlight?.linkText}
                                                            <ArrowRight className="w-4 h-4" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center relative z-50">
                        <Link to="/book-consultation" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors shadow-sm">
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex items-center relative z-50">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        >
                            {mobileMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-sm transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="pt-24 pb-6 px-4 h-full overflow-y-auto">
                    <div className="flex flex-col space-y-2">
                        {smNavItems.map((item, idx) => (
                            <div key={idx} className="border-b border-slate-100 pb-2">
                                <div className="flex items-center justify-between py-3">
                                    <Link 
                                        to={item.path} 
                                        className="text-lg font-bold text-slate-900"
                                        onClick={() => {
                                            if (!item.dropdown) setMobileMenuOpen(false);
                                        }}
                                    >
                                        {item.name}
                                    </Link>
                                    {item.dropdown && (
                                        <button onClick={() => toggleExpanded(item.name)} className="p-2">
                                            <ChevronDown className={`w-5 h-5 transition-transform ${expandedItems.includes(item.name) ? 'rotate-180 text-blue-600' : 'text-slate-500'}`} />
                                        </button>
                                    )}
                                </div>
                                
                                {item.dropdown && expandedItems.includes(item.name) && (
                                    <div className="pl-4 pb-4 space-y-4">
                                        <div className="flex flex-col space-y-3 pl-2 border-l-2 border-slate-100">
                                            {item.name === "Offerings" && item.dropdown.categories ? (
                                                <>
                                                    {item.dropdown.categories.map((cat: any, cIdx: number) => (
                                                        <div key={cIdx} className="mb-3">
                                                            <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-1.5 mt-1">{cat.title}</div>
                                                            <div className="flex flex-col space-y-1">
                                                                {cat.items.map((sub: any, subIdx: number) => (
                                                                    <Link
                                                                        key={subIdx}
                                                                        to={sub.path}
                                                                        onClick={() => setMobileMenuOpen(false)}
                                                                        className="text-slate-600 font-semibold py-1 hover:text-blue-600 transition-colors text-xs block"
                                                                    >
                                                                        {sub.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </>
                                            ) : item.name === "Industries" && item.dropdown.categories ? (
                                                <>
                                                    {item.dropdown.categories.map((cat: any, cIdx: number) => (
                                                        <div key={cIdx} className="mb-3">
                                                            <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-1.5 mt-1">{cat.title}</div>
                                                            <div className="flex flex-col space-y-1">
                                                                {cat.items.map((sub: any, subIdx: number) => (
                                                                    <Link
                                                                        key={subIdx}
                                                                        to={sub.path}
                                                                        onClick={() => setMobileMenuOpen(false)}
                                                                        className="text-slate-600 font-semibold py-1 hover:text-blue-600 transition-colors text-xs block"
                                                                    >
                                                                        {sub.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </>
                                            ) : (
                                                item.dropdown.items?.map((sub: any, subIdx: number) => (
                                                    <Link
                                                        key={subIdx}
                                                        to={sub.path}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        className="text-slate-600 font-semibold py-1.5 hover:text-blue-600 transition-colors text-sm block"
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}
