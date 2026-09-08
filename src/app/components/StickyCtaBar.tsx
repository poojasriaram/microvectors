import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X, MessageCircle } from 'lucide-react';

export default function StickyCtaBar() {
    const [visible, setVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (!dismissed && window.scrollY > 400) {
                setVisible(true);
            } else if (window.scrollY <= 400) {
                setVisible(false);
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [dismissed]);

    if (dismissed) return null;

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 ease-out transform
                ${visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
            style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
            {/* Backdrop blur bar */}
            <div className="bg-slate-900/95 backdrop-blur-md border-t border-white/10 shadow-2xl">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
                    <div className="hidden sm:flex items-center gap-3 shrink-0">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                        </span>
                        <p className="text-white text-sm font-semibold">
                            Ready to accelerate your revenue?
                        </p>
                    </div>

                    <div className="flex items-center gap-3 flex-1 sm:flex-none justify-center sm:justify-end">
                        {/* WhatsApp quick link */}
                        <a
                            href="https://wa.me/919876543210?text=Hi%20ProfitMachines%2C%20I'd%20like%20to%20discuss%20my%20growth%20goals."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm rounded-lg transition-colors duration-200 shrink-0"
                            aria-label="Chat on WhatsApp"
                        >
                            <MessageCircle className="w-4 h-4" />
                            <span className="hidden xs:inline">WhatsApp</span>
                        </a>

                        {/* Primary CTA */}
                        <Link
                            to="/book-consultation"
                            className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-blue-900/40 hover:-translate-y-0.5 group shrink-0"
                        >
                            Book Consultation
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </Link>

                        {/* Dismiss */}
                        <button
                            onClick={() => { setDismissed(true); setVisible(false); }}
                            className="p-1.5 text-slate-400 hover:text-white transition-colors rounded-md hover:bg-white/10 shrink-0"
                            aria-label="Dismiss"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
