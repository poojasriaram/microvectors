import React from 'react';
import { CheckCircle2, RefreshCw } from 'lucide-react';

interface ActiveEnginePanelProps {
    title: string;
    content: string;
    layoutId?: string;
}

export default function ActiveEnginePanel({ title, content }: ActiveEnginePanelProps) {
    return (
        <div className="w-full relative mt-8">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-blue-500/5 blur-[80px] rounded-full user-select-none pointer-events-none"></div>

            <div className="relative z-10 w-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-white/10 rounded-3xl overflow-hidden p-8 md:p-12 shadow-2xl">
                {/* Decorative Grid */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
                <div className="absolute top-0 right-0 p-8 opacity-20">
                    <RefreshCw className="w-32 h-32 text-white animate-[spin_10s_linear_infinite]" />
                </div>

                <div className="relative z-10 flex flex-col items-start gap-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">System Active</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white max-w-2xl">
                        {title}
                    </h3>

                    <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
                        {content}
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[10px] text-white">AI</div>
                            ))}
                        </div>
                        <span className="text-sm text-slate-500">Processing real-time data signals</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
