import { Search, PenTool, Layout, Code2, TestTube2, Rocket, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    { name: 'Discovery', icon: Search, desc: 'Market & Intent Mapping' },
    { name: 'Planning', icon: PenTool, desc: 'AI Playbook Design' },
    { name: 'Design', icon: Layout, desc: 'Funnel Architecture' },
    { name: 'Development', icon: Code2, desc: 'Model Integration' },
    { name: 'Testing', icon: TestTube2, desc: 'A/B & Validation' },
    { name: 'Deployment', icon: Rocket, desc: 'Autonomous Launch' },
    { name: 'Support', icon: HeartHandshake, desc: 'Continuous Learning' },
];

export default function ProcessTimeline() {
    return (
        <section className="py-20 md:py-24 lg:py-32 bg-white relative" id="solutions">
            <div className="absolute inset-0 bg-grid-slate-100 opacity-40 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
                    <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 font-bold text-xs tracking-widest uppercase mb-6 shadow-sm border border-slate-200">
                        Operational Framework
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        The Integration Process
                    </h2>
                    <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
                        A systematic, engineering-first approach to deploying autonomous revenue systems into your existing infrastructure.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Central Vertical Line */}
                    <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-px bg-slate-200 -translate-x-1/2"></div>
                    
                    <div className="space-y-16 lg:space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className={`relative flex items-center gap-8 md:gap-16 group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Center Node */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-white border-2 border-slate-300 -translate-x-1/2 group-hover:border-blue-600 group-hover:scale-125 transition-all duration-300 z-10 shadow-sm"></div>

                                {/* Content Side */}
                                <div className={`flex-1 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                    <div className={`flex flex-col bg-slate-50/80 backdrop-blur-md p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:bg-white hover:border-slate-200 transition-all duration-500 ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'} text-left md:text-inherit`}>
                                        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:shadow-blue-200 transition-all duration-500">
                                            <step.icon className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors duration-500" />
                                        </div>
                                        <div className="text-[10px] text-blue-600 font-extrabold tracking-widest uppercase mb-2">Phase 0{index + 1}</div>
                                        <h4 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-3">{step.name}</h4>
                                        <p className="text-slate-600 font-medium text-lg leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                                
                                {/* Empty Side for alternating layout */}
                                <div className="hidden md:block flex-1"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
