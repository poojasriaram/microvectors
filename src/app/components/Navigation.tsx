import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import logo from '../../assets/Trustgrid-logo.png';

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [expandedItems, setExpandedItems] = useState<string[]>([]);
    const [scrolled, setScrolled] = useState(false);
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

    // Define navigation structure
    const navItems = [
        {
            name: 'Home',
            path: '/',
            dropdown: [
                "AI-Powered Revenue Acceleration",
                "Demand Discovery",
                "Performance Revenue",
                "Growth Acceleration",
                "Market Validation",
                "Customer Journey",
                "Startup MVP",
                "Lead Generation"
            ]
        },
        {
            name: 'Capabilities',
            path: '/products',
            dropdown: [
                { name: "Demand Pulse", path: "/demand-pulse" },
                { name: "AI Demand Discovery", path: "/ai-demand-discovery" },
                { name: "AI Lead Generation", path: "/ai-lead-generation" },
                { name: "AI Lead Nurturing", path: "/ai-lead-nurturing" },
                { name: "AI MVP Validation", path: "/ai-mvp-validation" },
                { name: "AI Sales Transformation", path: "/ai-lead-sales-transformation" },
                { name: "AI Revenue Operations", path: "/ai-revenue-operations" },
                { name: "AI Revenue Acceleration", path: "/ai-revenue-acceleration" }
            ]
        },
        {
            name: 'Crypto',
            path: '/crypto',
            dropdown: [
                "AI-Powered Revenue Acceleration for Crypto",
                "AI-Powered Crypto Demand Discovery Engine",
                "AI-Powered Performance Revenue Engine",
                "AI Growth Acceleration Engine",
                "AI Market Validation Intelligence",
                "AI Customer Journey Intelligence",
                "AI Startup MVP Acceleration Engine"
            ]
        },
        {
            name: 'Outcomes',
            path: '/outcomes',
            dropdown: [
                "AI Demand Discovery",
                "AI-Driven Revenue Acceleration",
                "AI-Driven Growth Hacking",
                "AI-Driven Performance Marketing",
                "Enterprise Sales Acceleration",
                "Digital & Inside Sales Acceleration",
                "D2C & High-Velocity Sales Growth",
                "BFSI Sales Acceleration",
                "Transition from Traditional to Digital Sales",
                "Sales to Customer Success Continuity"
            ]
        },
        {
            name: 'Solutions',
            path: '/solutions',
            dropdown: [
                "AI Business Growth Strategy",
                "AI Market Strategy & Demand Intelligence",
                "AI-Driven Growth Hacking Engine",
                "AI-Driven Performance Marketing",
                "AI Auto Sales Pilot (Autonomous Sales Agents)",
                "AI Sales Process Optimization",
                "AI Revenue Operations (AI RevOps)",
                "AI Revenue Acceleration & Expansion"
            ]
        },
        {
            name: 'Industries',
            path: '/industries',
            dropdown: [
                "SaaS & Enterprise Software",
                "BFSI – Banking, Lending & Insurance",
                "FinTech",
                "D2C & Consumer Brands",
                "Crypto, Web3 & Digital Assets",
                "Education & EdTech"
            ]
        },
        {
            name: 'Offerings',
            path: '/offerings',
            dropdown: [
                "AI-Powered Sales Intelligence & Execution",
                "Revenue Operations & Intelligence",
                "AI-Driven Digital Marketing & Demand Generation",
                "Market & Demand Intelligence",
                "Market Validation & Research",
                "Product-Market Fit Validation",
                "Product Scaling & Growth Intelligence",
                "Customer Success & Retention Intelligence"
            ]
        },
        { name: 'Partners', path: '/partners' },
        {
            name: 'Company',
            path: '/company',
            dropdown: [
                "About Us",
                "Mission",
                "Leadership & Culture",
                "Our Offices",
                "Contact Us",
                { name: "Careers", path: "/career" }
            ]
        },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b h-16 lg:h-20 flex items-center ${scrolled
                    ? 'bg-white/30 backdrop-blur-xl bg-gradient-to-b from-white/80 via-white/20 to-white/80 border-white/40 shadow-sm'
                    : 'bg-transparent border-transparent'
                    }`}
            >
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-full">
                    <div className="flex items-center justify-between h-full">
                        {/* Logo */}
                        <div className="flex-shrink-0 mr-4 xl:mr-8 relative z-50">
                            <Link to="/" className="flex items-center gap-2 group">
                                <img
                                    src={logo}
                                    alt="Trustgrid.ai"
                                    className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-8 md:h-10' : 'h-10 md:h-12'}`}
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center h-full justify-end">
                            {navItems.map((item) => {
                                const isMegaMenu = item.dropdown && item.dropdown.length > 5 && item.name !== 'Company' && item.name !== 'Capabilities';
                                const dropdownWidth = isMegaMenu ? 'w-[600px]' : (item.name === 'Capabilities' ? 'w-[320px]' : 'w-72');
                                const gridCols = isMegaMenu ? 'grid-cols-2' : 'grid-cols-1';

                                return (
                                    <div
                                        key={item.name}
                                        className="relative group h-full flex items-center px-1"
                                        onMouseEnter={() => setHoveredItem(item.name)}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        {/* Determine if active */}
                                        {(() => {
                                            const isActive = location.pathname === item.path || (item.dropdown && item.dropdown.some((subItem: any) => {
                                                return typeof subItem === 'object' && subItem.path === location.pathname;
                                            }));

                                            return (
                                                <Link
                                                    to={item.path}
                                                    className={`
                                                        relative text-[14px] font-semibold transition-all duration-300 flex items-center gap-1 py-2.5 px-3 rounded-none
                                                        ${isActive ? 'text-blue-600 bg-blue-50/50 outline outline-1 outline-blue-100/50' : 'text-slate-900 hover:text-blue-600 hover:bg-slate-50/50'}
                                                    `}
                                                >
                                                    {item.name}
                                                    {item.dropdown && (
                                                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${hoveredItem === item.name ? 'rotate-180 text-blue-600' : 'text-slate-400 group-hover:text-blue-500'}`} />
                                                    )}
                                                </Link>
                                            );
                                        })()}

                                        {/* Premium Dropdown / Mega Menu */}
                                        {item.dropdown && (
                                            <div
                                                className={`
                                                    absolute top-[calc(100%+0.5rem)] 
                                                    ${item.name === 'Home' ? '-left-2' : 'left-1/2 -translate-x-1/2'} 
                                                    ${dropdownWidth}
                                                    bg-white/80 backdrop-blur-2xl
                                                    rounded-none 
                                                    shadow-[0_40px_100px_-20px_rgba(59,130,246,0.15),0_10px_30px_-15px_rgba(0,0,0,0.1)]
                                                    border border-white/40 ring-1 ring-black/5
                                                    p-4 
                                                    transform transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1) origin-top z-50
                                                    ${hoveredItem === item.name ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 translate-y-2 invisible pointer-events-none'}
                                                `}
                                            >
                                                {/* Invisible bridge */}
                                                <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />

                                                {/* Top gradient border */}
                                                <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-50" />

                                                <div className={`grid ${gridCols} gap-2`}>
                                                    {item.dropdown.map((subItem, idx) => {
                                                        const isString = typeof subItem === 'string';
                                                        const label = isString ? subItem : subItem.name;
                                                        const linkPath = isString ? `${item.path}?section=${encodeURIComponent(subItem)}` : subItem.path;

                                                        return (
                                                            <Link
                                                                key={idx}
                                                                to={linkPath}
                                                                className="
                                                                    group/item flex items-start p-3 rounded-none 
                                                                    hover:bg-gradient-to-br hover:from-white hover:to-blue-50/60
                                                                    transition-all duration-300 border border-transparent hover:border-blue-100 hover:shadow-sm
                                                                "
                                                            >
                                                                <ArrowRight className="mt-0.5 w-3.5 h-3.5 text-blue-400 group-hover/item:text-blue-600 group-hover/item:translate-x-0.5 transition-all mr-3 shrink-0" />
                                                                <span className="text-[14px] font-semibold text-slate-900 group-hover/item:text-blue-700 transition-colors leading-snug">
                                                                    {label}
                                                                </span>
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center ml-4 xl:ml-8 gap-3 shrink-0 h-full">
                            <Link to="/book-demo">
                                <Button className="relative overflow-hidden bg-slate-900 hover:bg-blue-600 text-white border-0 px-6 py-2.5 h-auto text-sm font-bold rounded-none shadow-lg shadow-slate-900/10 hover:shadow-blue-600/25 active:scale-95 transition-all duration-300 group">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Book a Demo
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Button>
                            </Link>
                            <a
                                href="https://wa.me/919944499988"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2.5 rounded-none border border-slate-200 hover:border-green-400/50 bg-white hover:bg-green-50/20 text-slate-700 text-sm font-semibold transition-all duration-300 flex items-center gap-2 hover:shadow-md hover:shadow-green-100"
                            >
                                <WhatsAppIcon className="w-4.5 h-4.5 text-[#25D366]" />
                                <span className="hidden xl:inline">WhatsApp</span>
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden flex items-center gap-4">
                            <Link to="/book-demo" className="text-sm font-bold text-slate-900 bg-slate-100 px-4 py-2 rounded-none">
                                Book Demo
                            </Link>
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-slate-700 hover:text-blue-600 p-2 -mr-2 transition-colors relative z-50"
                            >
                                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Panel - Modern Slide/Fade */}
            <div
                className={`
                    fixed inset-0 bg-white/95 backdrop-blur-xl z-40 lg:hidden overflow-y-auto 
                    transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)
                    ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[20px] pointer-events-none'}
                `}
                style={{ top: '0px', paddingTop: scrolled ? '64px' : '64px' }}
            >
                <div className="flex flex-col p-6 space-y-2 min-h-full">
                    {navItems.map((item) => (
                        <div key={item.name} className="border-b border-slate-100">
                            <div className={`flex flex-col rounded-none transition-all duration-300 ${expandedItems.includes(item.name) ? 'bg-slate-50' : ''}`}>
                                <div
                                    className="flex items-center justify-between py-4 px-3 cursor-pointer group"
                                    onClick={() => {
                                        if (item.dropdown) {
                                            toggleExpanded(item.name);
                                        } else {
                                            setMobileMenuOpen(false);
                                        }
                                    }}
                                >
                                    <Link
                                        to={item.path}
                                        className={`flex-1 text-lg font-bold tracking-tight transition-colors ${location.pathname === item.path
                                            ? 'text-blue-600'
                                            : 'text-slate-900'
                                            }`}
                                        onClick={(e) => {
                                            if (item.dropdown) e.preventDefault(); // Let the container click handle expansion
                                            else setMobileMenuOpen(false);
                                        }}
                                    >
                                        {item.name}
                                    </Link>

                                    {item.dropdown && (
                                        <button
                                            className={`p-2 rounded-full transition-all duration-300 ${expandedItems.includes(item.name) ? 'bg-blue-100 text-blue-600' : 'text-slate-400'}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleExpanded(item.name);
                                            }}
                                        >
                                            <ChevronDown
                                                className={`w-5 h-5 transition-transform duration-300 ${expandedItems.includes(item.name) ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                    )}
                                </div>

                                {/* Mobile Dropdown Items */}
                                {item.dropdown && (
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedItems.includes(item.name) ? 'max-h-[800px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                                        <div className="space-y-1 px-3">
                                            {item.dropdown.map((subItem, idx) => {
                                                const isString = typeof subItem === 'string';
                                                const label = isString ? subItem : subItem.name;
                                                const linkPath = isString ? `${item.path}?section=${encodeURIComponent(subItem)}` : subItem.path;

                                                return (
                                                    <Link
                                                        key={idx}
                                                        to={linkPath}
                                                        className="block py-3 px-4 text-[15px] text-black font-semibold hover:text-blue-600 hover:bg-white rounded-none transition-all border border-transparent hover:border-slate-100 hover:shadow-sm"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {label}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                    <div className="mt-8 pt-8 space-y-4">
                        <Link
                            to="/book-demo"
                            className="block w-full"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <Button className="w-full bg-slate-900 text-white hover:bg-blue-600 h-14 rounded-none font-bold text-lg shadow-xl shadow-slate-900/10 active:scale-[0.98] transition-all">
                                Book a Demo
                            </Button>
                        </Link>

                        <a
                            href="https://wa.me/919944499988"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <Button className="w-full bg-white text-slate-900 hover:bg-green-50 border border-slate-200 h-14 rounded-none font-bold text-lg shadow-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
                                <WhatsAppIcon className="w-5 h-5 text-green-500" />
                                WhatsApp
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
