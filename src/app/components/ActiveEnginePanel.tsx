import React from 'react';
import { CheckCircle2, RefreshCw } from 'lucide-react';

interface ActiveEnginePanelProps {
    title: string;
    content: string;
    layoutId?: string;
}

export default function ActiveEnginePanel({ title, content }: ActiveEnginePanelProps) {
    return (
        <div className="w-full max-w-3xl mx-auto relative mt-4">
            {/* Glow Effect - Subtle Blue */}
            <div className="absolute inset-0 bg-blue-100/50 blur-[80px] rounded-full user-select-none pointer-events-none opacity-50"></div>

            <div className="relative z-10 w-full bg-white border border-slate-200 rounded-3xl overflow-hidden p-5 md:p-6 shadow-xl shadow-slate-200/50">
                {/* Decorative Grid - Light */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <RefreshCw className="w-40 h-40 text-blue-600 animate-[spin_10s_linear_infinite]" />
                </div>

                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs font-bold text-green-700 uppercase tracking-wider">System Active</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 max-w-2xl">
                        {title}
                    </h3>

                    <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
                        {content}
                    </p>

                    <div className="mt-4 flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] text-blue-700 font-bold shadow-sm">AI</div>
                            ))}
                        </div>
                        <span className="text-sm text-slate-500 font-medium">Processing real-time data signals</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
