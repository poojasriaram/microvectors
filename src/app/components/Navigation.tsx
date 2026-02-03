
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import logo from '../../assets/Trustflow-logo.png';

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [expandedItems, setExpandedItems] = useState<string[]>([]);
    const location = useLocation();

    const toggleExpanded = (name: string) => {
        setExpandedItems(prev =>
            prev.includes(name)
                ? prev.filter(item => item !== name)
                : [...prev, name]
        );
    };

    // Define navigation structure with dropdowns for specific items
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
            name: 'Products',
            path: '/products',
            dropdown: [
                { name: "Demand Pulse", path: "/demand-pulse" },
                { name: "AI Demand Discovery", path: "/ai-demand-discovery" },
                { name: "AI Lead Generation", path: "/ai-lead-generation" },
                { name: "AI Lead Nurturing", path: "/ai-lead-nurturing" },
                { name: "AI MVP Validation", path: "/ai-mvp-validation" },
                { name: "AI Sales Transformation", path: "/ai-lead-sales-transformation" }
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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl shadow-sm transition-all duration-300 border-b border-slate-200/60 support-backdrop-blur:bg-white/90">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="flex items-center justify-between h-[88px]">
                    {/* Logo */}
                    <div className="flex-shrink-0 mr-4 xl:mr-8">
                        <Link to="/" className="flex items-center gap-2">
                            <img src={logo} alt="TrustFlow.ai" className="h-10 md:h-12 lg:h-14 w-auto object-contain" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-0.5 xl:gap-2 flex-1 justify-end">
                        {navItems.map((item) => {
                            const isMegaMenu = item.dropdown && item.dropdown.length > 5 && item.name !== 'Company' && item.name !== 'Products';
                            const dropdownWidth = isMegaMenu ? 'w-[560px]' : (item.name === 'Products' ? 'w-72' : 'w-64');
                            const gridCols = isMegaMenu ? 'grid-cols-2' : 'grid-cols-1';

                            return (
                                <div
                                    key={item.name}
                                    className="relative group h-full flex items-center"
                                    onMouseEnter={() => setHoveredItem(item.name)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    {/* Determine if active (exact match or child match) */}
                                    {(() => {
                                        const isActive = location.pathname === item.path || (item.dropdown && item.dropdown.some((subItem: any) => {
                                            return typeof subItem === 'object' && subItem.path === location.pathname;
                                        }));

                                        return (
                                            <Link
                                                to={item.path}
                                                className={`text-[14px] font-medium transition-all duration-200 flex items-center gap-1.5 py-2.5 px-3.5 rounded-full ${isActive
                                                    ? 'text-blue-700 bg-blue-50/80 font-semibold'
                                                    : 'text-black hover:text-blue-600 hover:bg-slate-50/80'
                                                    } ${hoveredItem === item.name ? 'text-blue-600 bg-slate-50/80' : ''}`}
                                            >
                                                {item.name}
                                                {item.dropdown && (
                                                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${hoveredItem === item.name ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                                                )}
                                            </Link>
                                        );
                                    })()}

                                    {/* Ultra-Premium Dropdown / Mega Menu */}
                                    {item.dropdown && (
                                        <div
                                            className={`absolute top-[calc(100%+0.5rem)] ${item.name === 'Home' ? 'left-0' : 'left-1/2 -translate-x-1/2'} ${dropdownWidth} 
                                            bg-white 
                                            rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 ring-1 ring-black/5 
                                            p-3 transform transition-all duration-300 ease-out origin-top z-50
                                            ${hoveredItem === item.name ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'}
                                        `}
                                        >
                                            {/* Invisible bridge to prevent closing on gap hover */}
                                            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />

                                            {/* Decorative top sheen */}
                                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

                                            <div className={`grid ${gridCols} gap-1`}>
                                                {item.dropdown.map((subItem, idx) => {
                                                    const isString = typeof subItem === 'string';
                                                    const label = isString ? subItem : subItem.name;
                                                    const linkPath = isString ? `${item.path}?section=${encodeURIComponent(subItem)}` : subItem.path;

                                                    return (
                                                        <Link
                                                            key={idx}
                                                            to={linkPath}
                                                            className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-gradient-to-r hover:from-white hover:to-blue-50/50 transition-all duration-300 group/item border border-transparent hover:border-blue-100/30 hover:shadow-sm hover:translate-x-1"
                                                        >

                                                            <span className="text-[14px] font-semibold text-slate-600 group-hover/item:text-blue-700 transition-colors leading-snug">
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
                    <div className="hidden lg:flex items-center ml-4 xl:ml-8 gap-3 shrink-0">
                        <Link to="/book-demo">
                            <Button className="min-w-[130px] justify-center bg-black text-white border border-black hover:bg-slate-800 hover:border-slate-800 px-4 py-2.5 h-auto text-sm font-semibold rounded-xl shadow-sm hover:shadow-md active:scale-95 transition-all duration-200 ease-out whitespace-nowrap">
                                Book a Demo
                            </Button>
                        </Link>
                        <a
                            href="https://wa.me/919944499988"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-w-[130px] justify-center bg-white text-slate-900 border border-slate-200 hover:border-green-300/50 hover:bg-green-50/30 px-4 py-2.5 h-auto text-sm font-semibold rounded-xl shadow-sm hover:shadow-md active:scale-95 transition-all duration-200 ease-out flex items-center gap-2 whitespace-nowrap"
                        >
                            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                            <span>WhatsApp</span>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center gap-4">
                        <Link to="/book-demo" className="text-sm font-bold text-black">
                            Book Demo
                        </Link>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-slate-700 hover:text-slate-900 p-2 -mr-2"
                        >
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Panel */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-x-0 top-20 h-[calc(100vh-5rem)] bg-white z-40 overflow-y-auto border-t border-slate-100 pb-20 shadow-2xl">
                    <div className="flex flex-col p-6 space-y-2 min-h-full bg-gradient-to-b from-transparent to-slate-50/50">
                        {navItems.map((item) => (
                            <div key={item.name} className="border-b border-slate-100/80 last:border-0">
                                <div className={`flex flex-col transition-all duration-300 ${expandedItems.includes(item.name) ? 'bg-slate-50/50 rounded-2xl mb-2' : ''}`}>
                                    <div
                                        className="flex items-center justify-between py-3 px-2 cursor-pointer group"
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
                                                : 'text-slate-800 group-hover:text-blue-600'
                                                }`}
                                            onClick={() => {
                                                if (item.dropdown) {
                                                    // Do nothing, let the expanded toggle handle it via the parent div click or button click
                                                } else {
                                                    setMobileMenuOpen(false);
                                                }
                                            }}
                                        >
                                            {item.name}
                                        </Link>

                                        {item.dropdown && (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    e.preventDefault();
                                                    toggleExpanded(item.name);
                                                }}
                                                className="p-2 text-slate-400 hover:text-blue-600 focus:outline-none transition-colors"
                                            >
                                                <ChevronDown
                                                    className={`w-5 h-5 transition-transform duration-300 ${expandedItems.includes(item.name) ? 'rotate-180 text-blue-600' : ''
                                                        }`}
                                                />
                                            </button>
                                        )}
                                    </div>

                                    {/* Mobile Dropdown Items */}
                                    {item.dropdown && (
                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedItems.includes(item.name) ? 'max-h-[800px] opacity-100 pb-4' : 'max-h-0 opacity-0'
                                            }`}>
                                            <div className="px-4 space-y-1 border-l-2 border-blue-100 ml-4 mb-2">
                                                {item.dropdown.map((subItem, idx) => {
                                                    const isString = typeof subItem === 'string';
                                                    const label = isString ? subItem : subItem.name;
                                                    const linkPath = isString ? `${item.path}?section=${encodeURIComponent(subItem)}` : subItem.path;

                                                    return (
                                                        <Link
                                                            key={idx}
                                                            to={linkPath}
                                                            className="block py-2.5 px-4 text-[15px] text-slate-600 font-medium hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all"
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

                        <div className="mt-auto pt-8 px-2 space-y-4">
                            <Link
                                to="/book-demo"
                                className="block w-full"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <Button className="w-full bg-black text-white border border-black hover:bg-slate-800 h-14 rounded-xl font-bold text-lg shadow-sm active:scale-[0.98] transition-all">
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
                                <Button className="w-full bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 h-14 rounded-xl font-bold text-lg shadow-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
                                    <WhatsAppIcon className="w-5 h-5 text-green-500" />
                                    WhatsApp
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
            {/* Floating WhatsApp Chat Widget Removed */}
        </nav>
    );
}
