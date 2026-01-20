import React from 'react';
import { CheckCircle2, RefreshCw } from 'lucide-react';

interface ActiveEnginePanelProps {
    title: string;
    content: string;
    layoutId?: string;
}

export default function ActiveEnginePanel({ title, content }: ActiveEnginePanelProps) {
    return (
        <div className="w-full max-w-3xl mx-auto relative mt-4 h-full">
            {/* Glow Effect - Subtle Blue */}
            <div className="absolute inset-0 bg-blue-100/50 blur-[80px] rounded-full user-select-none pointer-events-none opacity-50"></div>

            <div className="relative z-10 w-full bg-white border border-slate-200 rounded-3xl overflow-hidden p-8 md:p-10 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center h-full justify-center">
                {/* Decorative Grid - Light */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>

                {/* Background Rotating Element */}
                <div className="absolute -right-12 -top-12 opacity-5 pointer-events-none">
                    <RefreshCw className="w-64 h-64 text-blue-900 animate-[spin_10s_linear_infinite]" />
                </div>

                <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-2xl">

                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-green-50/80 border border-green-200/60 rounded-full backdrop-blur-sm shadow-sm">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-bold text-green-700 uppercase tracking-widest">System Active</span>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                            {title}
                        </h3>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            {content}
                        </p>
                    </div>

                    {/* Data Signal Visual */}
                    <div className="mt-6 w-full bg-slate-50/80 p-5 rounded-2xl border border-slate-100/80 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-[10px] text-blue-600 font-bold shadow-sm ring-1 ring-slate-100">AI</div>
                                ))}
                            </div>
                            <div className="text-left">
                                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Status</div>
                                <div className="text-sm font-medium text-slate-700">Processing real-time signals</div>
                            </div>
                        </div>

                        {/* Animated Bars */}
                        <div className="flex items-end gap-1 h-6">
                            {[40, 70, 45, 90, 60].map((h, i) => (
                                <div key={i} className="w-1.5 bg-blue-500/20 rounded-full animate-pulse" style={{ height: `${h}%`, animationDelay: `${i * 100}ms` }}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
