import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Verticals', path: '/verticals' },
    { name: 'Crypto', path: '/crypto' },
    { name: 'Outcomes', path: '/outcomes' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Industries', path: '/industries' },
    { name: 'Offerings', path: '/offerings' },
    { name: 'Resources', path: '/resources' },
    { name: 'Company', path: '/company' },
    { name: 'Cards', path: '/cards' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-slate-900 tracking-wider uppercase">
                TrustFlow<span className="text-blue-600">.ai</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-base font-semibold transition-colors ${location.pathname === item.path
                  ? 'text-blue-700 font-bold'
                  : 'text-slate-700 hover:text-blue-700'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link to="/book-demo">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-full shadow-md hover:shadow-lg transition-all font-semibold">
                Book a Demo
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-slate-900"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 space-y-4 bg-white border-t border-slate-100 absolute left-0 right-0 px-4 shadow-xl">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block transition-colors text-lg font-semibold py-3 border-b border-slate-50 last:border-0 ${location.pathname === item.path
                  ? 'text-blue-700'
                  : 'text-slate-700 hover:text-blue-700'
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link to="/book-demo" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-lg">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}