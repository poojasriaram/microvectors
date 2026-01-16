import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    desc?: string;
    index: number;
}

export default function FeatureCard({ icon: Icon, title, desc, index }: FeatureCardProps) {
    return (
        <div
            className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] flex flex-col items-start gap-4"
        >
            <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
                <Icon className="w-6 h-6" />
            </div>

            <div>
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {title}
                </h3>
                {desc && (
                    <p className="text-sm text-slate-400 leading-relaxed font-light">
                        {desc}
                    </p>
                )}
            </div>
        </div>
    );
}
