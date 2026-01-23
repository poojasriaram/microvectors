
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const location = useLocation();

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
                "ARR Acceleration"
            ]
        },
        { name: 'Resources', path: '/resources' },
        { name: 'Company', path: '/company' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300 border-b border-slate-100">
            <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 mr-8">
                        <Link to="/" className="flex items-center gap-2">
                            <span className="text-2xl font-black text-slate-900 tracking-wide uppercase font-sans">
                                TrustFlow<span className="text-blue-600">.ai</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
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
                                            : 'text-slate-600 hover:text-blue-600'
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
                                            {item.dropdown.map((subItem, idx) => (
                                                <li key={idx}>
                                                    <Link
                                                        to={`${item.path}?section=${encodeURIComponent(subItem)}`}
                                                        className="block px-4 py-2.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors font-medium border-b border-slate-50 last:border-0"
                                                    >
                                                        {subItem}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:block ml-4">
                        <Link to="/book-demo">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 h-auto text-sm font-bold rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all">
                                Book a Demo
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-slate-700 hover:text-slate-900 p-2"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Panel */}
                {mobileMenuOpen && (
                    <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white z-40 overflow-y-auto border-t border-slate-100">
                        <div className="p-4 space-y-1">
                            {navItems.map((item) => (
                                <div key={item.name} className="border-b border-slate-50 last:border-0">
                                    <Link
                                        to={item.path}
                                        className={`block py-4 text-base font-semibold px-2 ${location.pathname === item.path
                                                ? 'text-blue-600'
                                                : 'text-slate-800'
                                            }`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                    {item.dropdown && (
                                        <div className="pl-6 pb-4 space-y-3 bg-slate-50/50 rounded-lg mb-2">
                                            {item.dropdown.map((subItem, idx) => (
                                                <Link
                                                    key={idx}
                                                    to={`${item.path}?section=${encodeURIComponent(subItem)}`}
                                                    className="block text-sm text-slate-500 font-medium pt-3 first:pt-4"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {subItem}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-6 px-2">
                                <Link to="/book-demo" onClick={() => setMobileMenuOpen(false)}>
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-lg font-bold shadow-lg">
                                        Book a Demo
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
