import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import VerticalTabEngine from './VerticalTabEngine';
import type { ConversionBlockData } from '../../data/homeContent';

const getColorTheme = (index: number) => {
    const themes = [
        'from-blue-500 to-cyan-500',
        'from-purple-500 to-pink-500',
        'from-emerald-500 to-teal-500',
        'from-orange-500 to-red-500',
    ];
    return themes[index % themes.length];
};

export default function ConversionBlock({ data, index }: { data: ConversionBlockData; index: number }) {
    const isAltBackground = index % 2 === 1;
    const themeGradient = getColorTheme(index);

    return (
        <section className={`py-20 lg:py-32 relative overflow-hidden ${isAltBackground ? 'bg-[#050B1D]' : 'bg-[#020617]'}`}>

            {/* Background Ambience */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br ${themeGradient} opacity-[0.05] blur-[100px]`} />
                <div className={`absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br ${themeGradient} opacity-[0.05] blur-[100px]`} />
            </div>

            <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* PANEL 1: Section Title */}
                <div className="mb-12 md:mb-20 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            {data.title}
                        </h2>
                        {data.subtitle && (
                            <p className="text-xl text-slate-400 max-w-2xl border-l-4 border-blue-500 pl-6">
                                {data.subtitle}
                            </p>
                        )}
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* LEFT COLUMN: Panels 2 & 3 (Stats & Portfolio) */}
                    <div className="lg:col-span-4 space-y-8">

                        {/* PANEL 2: Stats Cards */}
                        <div className="space-y-4">
                            {data.stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group"
                                >
                                    <p className="text-slate-400 text-sm font-medium mb-1">{stat.label}</p>
                                    <div className={`text-2xl font-bold bg-gradient-to-r ${themeGradient} bg-clip-text text-transparent`}>
                                        {stat.value}
                                    </div>
                                    {stat.subtext && <p className="text-xs text-slate-500 mt-1">{stat.subtext}</p>}
                                </motion.div>
                            ))}
                        </div>

                        {/* PANEL 3: Portfolio Cards */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Core Capabilities</h4>
                            {data.portfolio.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                                        className="flex items-center space-x-4 p-4 rounded-xl bg-[#0F172A] border border-slate-800 hover:border-slate-700 transition-all"
                                    >
                                        <div className={`p-2 rounded-lg bg-gradient-to-br ${themeGradient} bg-opacity-10`}>
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h5 className="text-white font-medium">{item.title}</h5>
                                            {item.desc && <p className="text-xs text-slate-500">{item.desc}</p>}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Panels 4 & 5 (Tabs & CTA) */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* PANEL 4: Vertical Tab Engine */}
                        <div className="bg-slate-900/50 rounded-2xl p-2 border border-white/5 shadow-2xl">
                            <VerticalTabEngine tabs={data.tabs} />
                        </div>

                        {/* PANEL 5: CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="flex justify-start md:justify-end"
                        >
                            <button className="group relative px-8 py-4 bg-white text-slate-900 font-bold rounded-lg overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300">
                                <div className={`absolute inset-0 bg-gradient-to-r ${themeGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                <span className="relative z-10 flex items-center space-x-2 group-hover:text-white transition-colors">
                                    <span>{data.cta.text}</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
