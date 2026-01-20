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
        <section className="py-12 relative border-t border-slate-100 bg-white">
            <div className="max-w-6xl mx-auto px-6 space-y-8">

                {/* 1. Section Header */}
                <div className="text-center space-y-4 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                        {data.title}
                    </h2>
                    {data.subtitle && (
                        <p className="text-xl text-slate-600 font-normal leading-relaxed">
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
                            suffix={stat.suffix}
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
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">

                    {/* Left Column: Vertical Tabs */}
                    <div className="md:col-span-4 flex flex-col gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-100 h-full">
                        {data.tabs.map((tab, i) => (
                            <EngineTab
                                key={i}
                                title={tab.title}
                                isActive={activeTab === i}
                                onClick={() => setActiveTab(i)}
                            />
                        ))}
                    </div>

                    {/* Right Column: Active Panel */}
                    <div className="md:col-span-8 h-full">
                        <ActiveEnginePanel
                            title={data.tabs[activeTab].title}
                            content={data.tabs[activeTab].content}
                        />
                    </div>
                </div>

                {/* CTA for Section */}
                <div className="flex justify-center pt-6">
                    <button className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] flex items-center gap-2">
                        {data.cta?.text || "Learn More"}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </div>
        </section>
    );
}
