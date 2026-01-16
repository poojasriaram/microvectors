import React, { useState } from 'react';
import { ConversionBlockData } from '../../data/homeContent';
import StatCard from './StatCard';
import FeatureCard from './FeatureCard';
import EngineTab from './EngineTab';
import ActiveEnginePanel from './ActiveEnginePanel';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button'; // Assuming Button exists or we use standard HTML button

interface VerticalSectionProps {
    data: ConversionBlockData;
    index: number;
}

export default function VerticalSection({ data, index }: VerticalSectionProps) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="py-24 relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 space-y-20">

                {/* 1. Section Header */}
                <div className="text-center space-y-6 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        {data.title}
                    </h2>
                    {data.subtitle && (
                        <p className="text-xl text-slate-400 font-light">
                            {data.subtitle}
                        </p>
                    )}
                </div>

                {/* 2. Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {data.stats.map((stat, i) => (
                        <StatCard
                            key={i}
                            label={stat.label}
                            value={stat.value}
                            subtext={stat.subtext}
                            index={i}
                        />
                    ))}
                </div>

                {/* 3. Capabilities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {data.portfolio.map((item, i) => (
                        <FeatureCard
                            key={i}
                            icon={item.icon}
                            title={item.title}
                            desc={item.desc}
                            index={i}
                        />
                    ))}
                </div>

                {/* 4. Engine Selector & Active Panel */}
                <div className="space-y-8">
                    <div className="flex flex-wrap justify-center gap-4 bg-white/5 p-2 rounded-full md:inline-flex md:left-1/2 md:relative md:-translate-x-1/2 backdrop-blur-sm border border-white/10">
                        {data.tabs.map((tab, i) => (
                            <EngineTab
                                key={i}
                                title={tab.title}
                                isActive={activeTab === i}
                                onClick={() => setActiveTab(i)}
                            />
                        ))}
                    </div>

                    <ActiveEnginePanel
                        title={data.tabs[activeTab].title}
                        content={data.tabs[activeTab].content}
                    />
                </div>

                {/* CTA for Section */}
                <div className="flex justify-center pt-8">
                    <button className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] flex items-center gap-2">
                        {data.cta?.text || "Learn More"}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </div>
        </section>
    );
}
