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
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        The Integration Process
                    </h2>
                    <p className="text-lg text-slate-600">
                        A systematic, engineering-first approach to deploying autonomous revenue systems into your existing infrastructure.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
                    
                    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-4 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 relative">
                                    <step.icon className="w-7 h-7 text-slate-600 group-hover:text-white transition-colors duration-300" />
                                    {/* Connector Dots for Mobile (Hidden on Desktop) */}
                                    {index !== steps.length - 1 && (
                                        <div className="block lg:hidden absolute -bottom-10 left-1/2 w-0.5 h-8 bg-slate-200 -translate-x-1/2"></div>
                                    )}
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-1">{step.name}</h4>
                                <p className="text-xs text-slate-500 font-medium max-w-[120px]">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
