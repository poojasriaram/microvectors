import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface Tab {
    title: string;
    content: string;
}

interface VerticalTabEngineProps {
    tabs: Tab[];
}

export default function VerticalTabEngine({ tabs }: VerticalTabEngineProps) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="flex flex-col md:flex-row gap-8 h-full min-h-[300px]">
            {/* Tabs List */}
            <div className="flex flex-col gap-2 md:w-1/3">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`relative p-4 text-left rounded-lg transition-all duration-300 group ${activeTab === index
                                ? 'bg-blue-500/10 border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                                : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
                            }`}
                    >
                        <div className="flex items-center justify-between">
                            <span className={`font-medium ${activeTab === index ? 'text-blue-400' : 'text-slate-300 group-hover:text-white'}`}>
                                {tab.title}
                            </span>
                            {activeTab === index && (
                                <ChevronRight className="w-4 h-4 text-blue-400" />
                            )}
                        </div>
                        {/* Progress Bar for Active Tab (Optional visual flare) */}
                        {activeTab === index && (
                            <motion.div
                                layoutId="activeTabGlow"
                                className="absolute inset-0 rounded-lg bg-blue-500/5"
                                initial={false}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Tab Content Panel */}
            <div className="flex-1 relative bg-slate-900/50 backdrop-blur-md rounded-xl border border-white/10 p-6 md:p-8 overflow-hidden">
                {/* Decorative Grid Background */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent"></div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10 h-full flex flex-col justify-center"
                    >
                        <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
                            {tabs[activeTab].title}
                        </h4>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            {tabs[activeTab].content}
                        </p>

                        {/* Visual Flair specific to content can go here if we had more specific data types */}
                        <div className="mt-6 flex items-center space-x-2 text-sm text-blue-400 font-mono">
                            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                            <span>System Active</span>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
