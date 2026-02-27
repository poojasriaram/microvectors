import { useState, useEffect, useRef } from 'react';
import { X, Zap, TrendingUp, ArrowRight, Building2, ShoppingBag, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const MIN_TIME_MS = 1000; // 1s min time

const HIGHLIGHTS = [
    { icon: ShoppingBag, label: 'E-commerce & D2C', stat: '3.2X', desc: 'Repeat purchase growth' },
    { icon: Landmark, label: 'BFSI & FinTech', stat: '66%', desc: 'Reduction in Sales Cycle' },
    { icon: Building2, label: 'SaaS & Enterprise', stat: '6X', desc: 'More qualified leads' },
];

export default function TabExitPopup() {
    const [visible, setVisible] = useState(false);
    const [animateIn, setAnimateIn] = useState(false);
    const triggeredRef = useRef(false);
    const arrivedAtRef = useRef(Date.now());

    useEffect(() => {
        const hasTriggered = sessionStorage.getItem('trustgrid_tab_exit_triggered');
        if (hasTriggered) {
            triggeredRef.current = true;
        }
    }, []);

    const triggerPopup = (source: string) => {
        // Don't trigger if already visible or recently triggered
        if (visible || triggeredRef.current) return;
        if (Date.now() - arrivedAtRef.current < MIN_TIME_MS) return;

        console.log(`[ExitPopup] Triggered via: ${source}`);

        triggeredRef.current = true;
        sessionStorage.setItem('trustgrid_tab_exit_triggered', 'true');
        setVisible(true);
        // Step-by-step animation sequence for maximum reliability
        setTimeout(() => {
            setAnimateIn(true);
        }, 10);
    };

    const handleClose = () => {
        setAnimateIn(false);
        setTimeout(() => {
            setVisible(false);
            // We NO LONGER reset triggeredRef.current here.
            // This ensures it only pops up once per session.
        }, 300);
    };

    useEffect(() => {
        // ── 1. Mouse Out (The most common "top of page" detector) ──────────────
        const handleMouseOut = (e: MouseEvent) => {
            // clientY < 5 means mouse is moving towards the tabs/address bar
            if (e.clientY < 5) {
                triggerPopup('mouse_exit_top');
            }
        };

        // ── 2. Visibility (When tab is switched or browser minimized) ──────────
        const handleVisibility = () => {
            if (document.visibilityState === 'hidden') {
                triggerPopup('tab_hidden');
            }
        };

        // ── 3. Before Unload (Browser close/refresh) ──────────────────────────
        const handleBeforeUnload = () => {
            if (!visible && !triggeredRef.current) {
                triggerPopup('before_unload');
            }
        };

        document.addEventListener('mouseout', handleMouseOut);
        document.addEventListener('visibilitychange', handleVisibility);
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            document.removeEventListener('mouseout', handleMouseOut);
            document.removeEventListener('visibilitychange', handleVisibility);
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [visible]); // Re-attach when visibility changes to ensure state is fresh

    if (!visible) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center p-4 z-[10000]"
            style={{
                background: animateIn ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0)',
                backdropFilter: animateIn ? 'blur(8px)' : 'blur(0px)',
                transition: 'all 0.4s ease-out',
                pointerEvents: 'auto'
            }}
            onClick={handleClose}
        >
            <div
                className="relative bg-white w-full max-w-lg rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] overflow-hidden"
                style={{
                    transform: animateIn ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                    opacity: animateIn ? 1 : 0,
                    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Top decorative gradient bar */}
                <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

                <button
                    onClick={handleClose}
                    className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center transition-all z-20 group"
                >
                    <X className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:rotate-90 transition-all duration-300" />
                </button>

                <div className="px-10 pt-10 pb-10">
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-wide uppercase">
                        <Zap className="w-3.5 h-3.5 fill-blue-700" />
                        Exclusive Opportunity
                    </div>

                    <h2 className="text-3xl font-black text-slate-900 leading-[1.1] mb-4">
                        Wait! Don't Miss Out on Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Growth Blueprint</span>
                    </h2>

                    <p className="text-slate-600 text-base mb-8 leading-relaxed">
                        Industry leaders are already using Trustgrid.ai to capture demand competitors can't see. Explore our impact:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                        {HIGHLIGHTS.map(({ icon: Icon, label, stat, desc }) => (
                            <div key={label} className="bg-slate-50 rounded-2xl p-4 border border-slate-100 hover:border-blue-200 transition-all group">
                                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                    <Icon className="w-5 h-5 text-blue-600" />
                                </div>
                                <div className="text-2xl font-black text-blue-600 mb-1">{stat}</div>
                                <div className="text-[11px] font-bold text-slate-800 uppercase tracking-tighter mb-1 leading-none">{desc}</div>
                                <div className="text-[10px] text-slate-400 font-medium">{label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3">
                        <Link
                            to="/industries"
                            onClick={handleClose}
                            className="bg-slate-900 hover:bg-blue-600 text-white font-black text-center py-4 rounded-xl shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 group"
                        >
                            Explore Growth Intelligence
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/book-demo"
                            onClick={handleClose}
                            className="bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-center py-4 rounded-xl transition-all active:scale-95"
                        >
                            Schedule Demo Walkthrough
                        </Link>
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
                        <TrendingUp className="w-4 h-4 text-emerald-500" />
                        Join 200+ companies scaling with Trustgrid
                    </div>
                </div>
            </div>
        </div>
    );
}
