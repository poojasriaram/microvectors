import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [expandedItems, setExpandedItems] = useState<string[]>([]);
    const [scrolled, setScrolled] = useState(false);
    const [activeCategoryIndices, setActiveCategoryIndices] = useState<Record<string, number>>({});
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

    // Define navigation structure matching the reference website style
    const navItems = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Company',
            path: '/company',
            dropdown: [
                {
                    title: "About Us",
                    items: [
                        { name: "Overview", path: "/company#about" },
                        { name: "Mission & Culture", path: "/company#mission" },
                        { name: "Leadership", path: "/company#leadership" }
                    ]
                },
                {
                    title: "Get In Touch",
                    items: [
                        { name: "Offices", path: "/company#offices" },
                        { name: "Contact Us", path: "/company#contact" },
                        { name: "Careers", path: "/career" }
                    ]
                }
            ]
        },
        {
            name: 'Services',
            path: '/solutions',
            dropdown: [
                {
                    title: "Platform Core",
                    items: [
                        { name: "Demand Pulse", path: "/demand-pulse" },
                        { name: "AI Revenue Operations", path: "/ai-revenue-operations" },
                        { name: "AI Revenue Acceleration", path: "/ai-revenue-acceleration" }
                    ]
                },
                {
                    title: "Autonomous Pipeline",
                    items: [
                        { name: "AI Lead Generation", path: "/ai-lead-generation" },
                        { name: "AI Lead Nurturing", path: "/ai-lead-nurturing" },
                        { name: "AI Sales Transformation", path: "/ai-lead-sales-transformation" }
                    ]
                },
                {
                    title: "Discovery & Validation",
                    items: [
                        { name: "AI Demand Discovery", path: "/ai-demand-discovery" },
                        { name: "AI MVP Validation", path: "/ai-mvp-validation" },
                        { name: "Behaviour Analytics", path: "/behaviour-analytics" }
                    ]
                }
            ]
        },
        {
            name: 'Industries',
            path: '/industries',
            dropdown: [
                {
                    title: "Financial & SaaS",
                    items: [
                        { name: "Banking & Lending", path: "/industries?section=Banking" },
                        { name: "Financial Services", path: "/industries?section=Financial%20Services" },
                        { name: "Insurance", path: "/industries?section=Insurance" },
                        { name: "SaaS & Software", path: "/industries?section=SaaS%20%26%20Enterprise%20Software" }
                    ]
                },
                {
                    title: "Consumer Brands",
                    items: [
                        { name: "E-commerce", path: "/industries?section=E-commerce" },
                        { name: "Consumer Brands / D2C", path: "/industries?section=D2C%20%26%20Consumer%20Brands" },
                        { name: "FMCG & Retail", path: "/industries?section=FMCG" },
                        { name: "Gems & Jewellery", path: "/industries?section=Gems%20%26%20Jewellery" }
                    ]
                },
                {
                    title: "Emerging Fields",
                    items: [
                        { name: "Electric Vehicles (EV)", path: "/industries?section=Electric%20Vehicles%20(EV)" },
                        { name: "Crypto & Web3", path: "/industries?section=Crypto%2C%20Web3%20%26%20Digital%20Assets" },
                        { name: "Education & EdTech", path: "/industries?section=Education%20%26%20EdTech" },
                        { name: "Media & Entertainment", path: "/industries?section=Media%20%26%20Entertainment" }
                    ]
                }
            ]
        },
        {
            name: 'Platform',
            path: '/demand-pulse'
        },
        {
            name: 'Clients',
            path: '/partners',
            dropdown: [
                {
                    title: "Partner Channels",
                    items: [
                        { name: "Solution Partners", path: "/partners#solution-partners" },
                        { name: "Technology Partners", path: "/partners#technology-partners" },
                        { name: "Referral Partners", path: "/partners#referral-partners" }
                    ]
                },
                {
                    title: "Our Program",
                    items: [
                        { name: "Overview", path: "/partners#partner-hero" },
                        { name: "Why Partner With Us", path: "/partners#why-partner" },
                        { name: "Become a Partner", path: "/partners#partner-form" }
                    ]
                }
            ]
        },
        {
            name: 'Case Studies',
            path: '/outcomes',
            dropdown: [
                {
                    title: "Growth Acceleration",
                    items: [
                        { name: "AI Demand Discovery", path: "/outcomes?section=AI%20Demand%20Discovery" },
                        { name: "AI Revenue Acceleration", path: "/outcomes?section=AI-Driven%20Revenue%20Acceleration" },
                        { name: "AI Growth Hacking", path: "/outcomes?section=AI-Driven%20Growth%20Hacking" }
                    ]
                },
                {
                    title: "Inside Sales",
                    items: [
                        { name: "Enterprise Sales", path: "/outcomes?section=Enterprise%20Sales%20Acceleration" },
                        { name: "Digital & Inside Sales", path: "/outcomes?section=Digital%20%26%20Inside%20Sales%20Acceleration" },
                        { name: "BFSI Sales Acceleration", path: "/outcomes?section=BFSI%2520Sales%2520Acceleration" }
                    ]
                }
            ]
        },
        {
            name: 'Careers',
            path: '/career'
        }
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b h-16 lg:h-24 flex items-center ${scrolled
                    ? 'bg-white/80 backdrop-blur-md border-slate-200/80 shadow-premium'
                    : 'bg-transparent border-transparent'
                    }`}
            >
                <nav className="w-full mx-auto px-4 sm:px-6 lg:px-2 xl:px-4 2xl:px-12 h-full max-w-[1920px]">
                    <div className="flex items-center justify-between h-full">
                        {/* Logo */}
                        <div className="flex-shrink-0 mr-4 lg:mr-2 xl:mr-8 relative z-50">
                            <Link to="/" className="flex items-center gap-2 group">
                                <div className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 flex items-center gap-0.5 font-heading">
                                    <span>Micro</span>
                                    <span className="text-blue-600">vectors</span>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center h-full justify-end">
                            {navItems.map((item) => {
                                const activeCatIdx = activeCategoryIndices[item.name] || 0;

                                return (
                                    <div
                                        key={item.name}
                                        className="relative group h-full flex items-center px-1 lg:px-0.5 xl:px-1.5"
                                        onMouseEnter={() => setHoveredItem(item.name)}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        {/* Determine if active */}
                                        {(() => {
                                            const isActive = location.pathname === item.path || (item.dropdown && item.dropdown.some((cat: any) => {
                                                return cat.items && cat.items.some((sub: any) => sub.path === location.pathname);
                                            }));

                                            return (
                                                <Link
                                                    to={item.path}
                                                    onClick={() => setHoveredItem(item.name)}
                                                    className={`
                                                        relative text-[13px] xl:text-[14px] 2xl:text-[15px] font-semibold transition-all duration-300 flex items-center gap-0.5 lg:gap-0.5 xl:gap-1 py-2 lg:px-1.5 xl:px-2.5 whitespace-nowrap
                                                        ${isActive ? 'text-blue-600' : 'text-slate-800 hover:text-blue-600'}
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
                                                    absolute top-[calc(100%+1rem)] 
                                                    ${item.name === 'Home' ? '-left-2' : 'left-1/2 -translate-x-1/2'} 
                                                    w-[700px] xl:w-[750px]
                                                    bg-white/95 backdrop-blur-3xl
                                                    rounded-2xl 
                                                    shadow-premium
                                                    border border-slate-200 ring-1 ring-black/5
                                                    overflow-hidden
                                                    transform transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1) origin-top z-50
                                                    ${hoveredItem === item.name ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 translate-y-4 invisible pointer-events-none'}
                                                `}
                                            >
                                                {/* Invisible bridge */}
                                                <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent" />

                                                <div className="flex">
                                                    {/* LEFT PANEL */}
                                                    <div className="w-1/3 bg-slate-50/50 border-r border-slate-100 p-6 flex flex-col gap-2">
                                                        {item.dropdown.map((category: any, catIdx: number) => (
                                                            <button
                                                                key={catIdx}
                                                                onMouseEnter={() => setActiveCategoryIndices(prev => ({ ...prev, [item.name]: catIdx }))}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    setActiveCategoryIndices(prev => ({ ...prev, [item.name]: catIdx }));
                                                                }}
                                                                className={`
                                                                    text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between group
                                                                    ${activeCatIdx === catIdx 
                                                                        ? 'bg-white shadow-sm ring-1 ring-slate-200 text-blue-600' 
                                                                        : 'hover:bg-white/60 text-slate-600 hover:text-slate-900'}
                                                                `}
                                                            >
                                                                <span className="text-[13px] font-bold">{category.title}</span>
                                                                <ChevronDown className={`w-4 h-4 -rotate-90 transition-transform duration-300 ${activeCatIdx === catIdx ? 'text-blue-600' : 'text-slate-400 opacity-0 group-hover:opacity-100'}`} />
                                                            </button>
                                                        ))}
                                                    </div>
                                                    
                                                    {/* RIGHT PANEL */}
                                                    <div className="w-2/3 p-6 xl:p-8 bg-white min-h-[280px]">
                                                        <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-6 select-none">
                                                            {item.dropdown[activeCatIdx]?.title}
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            {item.dropdown[activeCatIdx]?.items.map((subItem: any, subIdx: number) => (
                                                                <Link
                                                                    key={subIdx}
                                                                    to={subItem.path}
                                                                    className="group/item flex flex-col p-3 rounded-xl hover:bg-slate-50 transition-all duration-300 border border-transparent hover:border-slate-100"
                                                                    onClick={(e) => {
                                                                        const hash = subItem.path.includes('#') ? subItem.path.split('#')[1] : null;
                                                                        if (hash) {
                                                                            const el = document.getElementById(hash);
                                                                            if (el) {
                                                                                e.preventDefault();
                                                                                const offset = 90;
                                                                                const top = el.getBoundingClientRect().top + window.scrollY - offset;
                                                                                window.scrollTo({ top, behavior: 'smooth' });
                                                                            }
                                                                        }
                                                                    }}
                                                                >
                                                                    <div className="flex items-center text-[13px] font-bold text-slate-800 group-hover/item:text-blue-600 transition-colors">
                                                                        <span>{subItem.name}</span>
                                                                        <ArrowRight className="w-3.5 h-3.5 ml-2 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-blue-500" />
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                {/* BOTTOM CTA SECTION */}
                                                <div className="bg-slate-50/80 border-t border-slate-100 p-4 flex items-center justify-between px-6 xl:px-8">
                                                    <span className="text-[13px] font-medium text-slate-600">Need help finding the right solution?</span>
                                                    <Link to="/book-consultation" className="text-[13px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group/cta transition-colors" onClick={() => setHoveredItem(null)}>
                                                        Contact Us
                                                        <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-1 transition-transform" />
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="hidden lg:flex items-center ml-2 lg:ml-1 xl:ml-4 gap-2 lg:gap-1 xl:gap-4 shrink-0 h-full">
                            <Link to="/book-consultation">
                                <Button className="relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white border-0 px-6 py-2 h-auto text-sm font-bold rounded-full shadow-lg shadow-blue-500/20 active:scale-95 transition-all duration-300 group btn-premium">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Book Consultation
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Button>
                            </Link>
                            <a
                                href="https://wa.me/919944499988"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-2.5 lg:px-2 xl:px-3.5 py-1.5 lg:py-1.5 xl:py-2 rounded-none border border-slate-200 hover:border-green-400/50 bg-white hover:bg-green-50/20 text-slate-700 text-[11px] lg:text-[11px] xl:text-xs 2xl:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 hover:shadow-md hover:shadow-green-100"
                            >
                                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                                <span className="hidden xl:inline">WhatsApp</span>
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden flex items-center gap-4">
                            <Link to="/book-consultation" className="text-sm font-bold text-slate-900 bg-slate-100 px-4 py-2 rounded-none">
                                Book for Consultation
                            </Link>
                            <button
                                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                                title={mobileMenuOpen ? "Close menu" : "Open menu"}
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-slate-700 hover:text-blue-600 p-2 -mr-2 transition-colors relative z-50"
                            >
                                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                                <span className="sr-only">{mobileMenuOpen ? "Close menu" : "Open menu"}</span>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

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
                                            aria-label={expandedItems.includes(item.name) ? "Collapse submenu" : "Expand submenu"}
                                            title={expandedItems.includes(item.name) ? "Collapse submenu" : "Expand submenu"}
                                            className={`p-2 rounded-full transition-all duration-300 ${expandedItems.includes(item.name) ? 'bg-blue-100 text-blue-600' : 'text-slate-400'}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleExpanded(item.name);
                                            }}
                                        >
                                            <ChevronDown
                                                className={`w-5 h-5 transition-transform duration-300 ${expandedItems.includes(item.name) ? 'rotate-180' : ''}`}
                                            />
                                            <span className="sr-only">{expandedItems.includes(item.name) ? "Collapse submenu" : "Expand submenu"}</span>
                                        </button>
                                    )}
                                </div>

                                {/* Mobile Dropdown Items */}
                                {item.dropdown && (
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedItems.includes(item.name) ? 'max-h-[1200px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                                        <div className="space-y-4 px-3 text-left">
                                            {item.dropdown.map((category: any, catIdx) => (
                                                <div key={catIdx} className="space-y-1">
                                                    <div className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest pl-4 mb-1">
                                                        {category.title}
                                                    </div>
                                                    {category.items.map((subItem: any, subIdx: number) => (
                                                        <Link
                                                            key={subIdx}
                                                            to={subItem.path}
                                                            className="block py-2 px-4 text-sm text-slate-700 font-semibold hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all"
                                                            onClick={() => setMobileMenuOpen(false)}
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                    <div className="mt-8 pt-8 space-y-4">
                        <Link
                            to="/book-consultation"
                            className="block w-full"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <Button className="w-full bg-slate-900 text-white hover:bg-blue-600 h-14 rounded-none font-bold text-lg shadow-xl shadow-slate-900/10 active:scale-[0.98] transition-all">
                                Book for Consultation
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
