import React from 'react';
import { Button } from '../components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import VerticalBlock from '../components/VerticalBlock';
import { verticalsContent } from '../../data/verticalsContent';

export default function Verticals() {
    return (
        <div className="pt-24 lg:pt-32 pb-16 min-h-screen bg-white text-slate-900">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                        AI-Driven Lead Generation <br />
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Acceleration by Industry
                        </span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
                        Industry-specific demand discovery suites that transform growth from reactive lead chasing into predictive, intent-led revenue creation.
                    </p>
                </div>
            </div>

            {/* Verticals Content Blocks */}
            <div className="bg-white">
                {verticalsContent.map((block, index) => (
                    <VerticalBlock key={index} data={block} index={index} />
                ))}
            </div>

            {/* Unified Outcome Section */}
            <div className="bg-slate-900 py-20 text-white border-y border-slate-800 mt-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-white">Unified Outcome</h2>
                    <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
                        AI-Driven Lead Generation Acceleration, powered by Demand Discovery, transforms growth from reactive lead chasing into predictive, intent-led revenue creation—adapted precisely to each industry’s buying reality.
                    </p>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-4xl mx-auto px-4 py-20 text-center relative z-10">
                <div className="bg-white border border-slate-200 rounded-2xl p-12 shadow-2xl overflow-hidden relative group hover:border-blue-300 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50 pointer-events-none" />

                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 relative z-10">
                        Transform Your Vertical with <br />
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            AI Intelligence
                        </span>
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 h-auto text-lg font-bold rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all flex items-center gap-2">
                            Book a Demo
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
