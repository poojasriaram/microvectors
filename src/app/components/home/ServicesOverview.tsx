import { BrainCircuit, Cpu, Code2, Cloud, ShieldCheck, Server, Bot, Headset, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
    {
        capability: 'Predictive AI & Machine Learning',
        title: 'AI Solutions',
        description: 'Deploy advanced machine learning models and predictive AI to solve complex enterprise challenges.',
        link: '/solutions#ai-solutions',
        cta: 'Explore AI'
    },
    {
        capability: 'Workflow & Operations Engineering',
        title: 'Enterprise Automation',
        description: 'Streamline operations and reduce manual workloads with intelligent process automation pipelines.',
        link: '/capabilities#enterprise-automation',
        cta: 'Automate Now'
    },
    {
        capability: 'Bespoke Full-Stack Engineering',
        title: 'Custom Software Development',
        description: 'Build scalable, secure, and bespoke software applications tailored to your business needs.',
        link: '/solutions#custom-software',
        cta: 'Build Custom'
    },
    {
        capability: 'Cloud Architecture & Infrastructure',
        title: 'Cloud Services',
        description: 'Migrate, manage, and optimize your enterprise infrastructure on scalable cloud platforms.',
        link: '/capabilities#cloud-services',
        cta: 'Scale Infrastructure'
    },
    {
        capability: 'Threat Intelligence & Compliance',
        title: 'Cyber Security',
        description: 'Protect your digital assets with enterprise-grade threat detection and compliance frameworks.',
        link: '/solutions#cyber-security',
        cta: 'Secure Assets'
    },
    {
        capability: 'Systems Modernization & Support',
        title: 'IT Services',
        description: 'Comprehensive IT management, support, and infrastructure modernization for growing teams.',
        link: '/capabilities#it-services',
        cta: 'Modernize IT'
    },
    {
        capability: 'Autonomous Digital Workforces',
        title: 'AI Agents',
        description: 'Integrate autonomous digital agents to handle customer interactions and repetitive workflows 24/7.',
        link: '/solutions#ai-agents',
        cta: 'Deploy Agents'
    },
    {
        capability: 'Process Optimization & Global Operations',
        title: 'ITES & BPO Services',
        description: 'Outsource critical business processes with technology-enabled services and global support teams.',
        link: '/capabilities#bpo-services',
        cta: 'Outsource Processes'
    }
];

export default function ServicesOverview() {
    return (
        <section id="capabilities-solutions" className="py-20 md:py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
            {/* Scroll Anchors for backward compatibility */}
            <div id="capabilities" className="scroll-mt-28 absolute -top-28 left-0 pointer-events-none" />
            <div id="solutions" className="scroll-mt-28 absolute -top-28 left-0 pointer-events-none" />

            {/* Background pattern */}
            <div className="absolute inset-0 bg-grid-slate-100 opacity-50 pointer-events-none"></div>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-xs tracking-widest uppercase mb-6 shadow-sm border border-blue-100">
                            Capabilities & Solutions
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight drop-shadow-sm font-heading">
                            Integrated <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Capabilities & Enterprise Solutions</span>
                        </h2>
                        <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
                            Pairing core domain capabilities with engineered AI solutions to deliver predictable business outcomes across your entire GTM architecture.
                        </p>
                    </motion.div>
                </div>

                {/* Preferred Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {services.map((service, index) => {
                        const iconsMap: Record<number, any> = {
                            0: BrainCircuit,
                            1: Cpu,
                            2: Code2,
                            3: Cloud,
                            4: ShieldCheck,
                            5: Server,
                            6: Bot,
                            7: Headset
                        };
                        const IconComp = iconsMap[index] || BrainCircuit;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between bg-white h-full overflow-hidden"
                            >
                                {/* Decorative internal glow */}
                                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                <div>
                                    {/* Capability Header Pill */}
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-bold uppercase tracking-wider mb-5">
                                        <Zap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                        <span>Capability: {service.capability}</span>
                                    </div>

                                    {/* Icon & Solution Name */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300 shrink-0">
                                            <IconComp className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Solution</div>
                                            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading leading-tight">
                                                {service.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Existing Description */}
                                    <p className="text-slate-600 text-base font-medium leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                </div>

                                {/* CTA Link */}
                                <div className="pt-4 border-t border-slate-100 mt-auto">
                                    <Link 
                                        to={service.link} 
                                        aria-label={`${service.cta} - ${service.title}`}
                                        className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-indigo-600 transition-colors uppercase tracking-wide group/link"
                                    >
                                        {service.cta}
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-300" />
                                    </Link>
                                </div>

                                {/* Bottom decorative gradient bar */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="flex flex-col items-center justify-center mt-16 md:mt-20 border-t border-slate-200/60 pt-10 text-center relative z-10">
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-6">Ready to scale your enterprise ecosystem?</p>
                    <Link to="/book-consultation" className="btn-cta-primary group shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40">
                        Discuss Your Implementation
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
