
import { useState } from 'react';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
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
        { name: 'Home', path: '/' },
        {
            name: 'Verticals',
            path: '/verticals',
            dropdown: [
                "SaaS & Enterprise",
                "BFSI & Fintech",
                "D2C & Consumer",
                "Crypto & Web3",
                "Education & EdTech",
                "Manufacturing"
            ]
        },
        { name: 'Crypto', path: '/crypto' },
        {
            name: 'Outcomes',
            path: '/outcomes',
            dropdown: [
                "Revenue Acceleration",
                "Digital Sales",
                "D2C Growth",
                "Sales Transformation"
            ]
        },
        {
            name: 'Solutions',
            path: '/solutions',
            dropdown: [
                "Business Growth Strategy",
                "Market Strategy",
                "Growth Hacking",
                "Performance Marketing",
                "Auto Sales Pilot",
                "RevOps"
            ]
        },
        { name: 'Industries', path: '/industries' },
        {
            name: 'Offerings',
            path: '/offerings',
            dropdown: [
                "Demand Generation",
                "Growth Hacking Engine",
                "Lean Sales",
                "RevOps Platform",
                "ARR Acceleration",
                { name: "Resources", path: "/resources" }
            ]
        },
        { name: 'Partners', path: '/partners' },
        {
            name: 'Company',
            path: '/company',
            dropdown: [
                { name: "Careers", path: "/career" }
            ]
        },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300 border-b border-slate-100">
            <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 mr-8">
                        <Link to="/" className="flex items-center gap-2">
                            <img src={logo} alt="TrustFlow.ai" className="h-14 w-auto object-contain" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-end">
                        {navItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative group h-full flex items-center"
                                onMouseEnter={() => setHoveredItem(item.name)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <Link
                                    to={item.path}
                                    className={`text-[15px] font-medium transition-colors flex items-center gap-1 py-2 ${location.pathname === item.path
                                        ? 'text-blue-600 font-semibold'
                                        : 'text-black hover:text-blue-600'
                                        }`}
                                >
                                    {item.name}
                                    {item.dropdown && (
                                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${hoveredItem === item.name ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                                    )}
                                </Link>

                                {/* Dropdown Menu - Simple Popup Style */}
                                {item.dropdown && (
                                    <div
                                        className={`absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-2 transform transition-all duration-200 origin-top z-50 mt-2
                                        ${hoveredItem === item.name ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'}
                                    `}
                                    >
                                        {/* Invisible bridge to prevent menu from closing when moving cursor */}
                                        <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent" />

                                        <ul className="py-1">
                                            {item.dropdown.map((subItem, idx) => {
                                                const isString = typeof subItem === 'string';
                                                const label = isString ? subItem : subItem.name;
                                                const linkPath = isString ? `${item.path}?section=${encodeURIComponent(subItem)}` : subItem.path;

                                                return (
                                                    <li key={idx}>
                                                        <Link
                                                            to={linkPath}
                                                            className="block px-4 py-2.5 text-sm text-black hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors font-medium border-b border-slate-50 last:border-0"
                                                        >
                                                            {label}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center ml-6 gap-4">
                        <Link to="/book-demo">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 h-auto text-sm font-bold rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all">
                                Book a Demo
                            </Button>
                        </Link>
                        <a
                            href="https://wa.me/919513288612"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 h-auto text-sm font-bold rounded-lg shadow-lg shadow-green-500/20 hover:shadow-green-500/30 transition-all flex items-center gap-2 whitespace-nowrap"
                        >
                            <MessageCircle className="w-4 h-4 flex-shrink-0" />
                            <span>Contact Us</span>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center gap-4">
                        <Link to="/book-demo" className="text-sm font-bold text-blue-600">
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
                <div className="lg:hidden fixed inset-x-0 top-20 h-[calc(100vh-5rem)] bg-white/95 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/80 z-40 overflow-y-auto border-t border-slate-100 pb-20 shadow-2xl">
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
                                            onClick={(e) => {
                                                if (item.dropdown) {
                                                    setMobileMenuOpen(false);
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
                                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white h-14 rounded-xl font-bold text-lg shadow-xl shadow-blue-500/20 active:scale-[0.98] transition-all">
                                    Book a Demo
                                </Button>
                            </Link>

                            <a
                                href="https://wa.me/919513288612"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <Button className="w-full bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 h-14 rounded-xl font-bold text-lg shadow-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
                                    <MessageCircle className="w-5 h-5 text-green-500" />
                                    Contact Us
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
