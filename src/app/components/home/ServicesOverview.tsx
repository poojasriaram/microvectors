import { BrainCircuit, Cpu, Code2, Cloud, ShieldCheck, Server, Bot, Headset, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: BrainCircuit,
        title: 'AI Solutions',
        description: 'Deploy advanced machine learning models and predictive AI to solve complex enterprise challenges.',
        link: '/#solutions',
        cta: 'Explore AI'
    },
    {
        icon: Cpu,
        title: 'Enterprise Automation',
        description: 'Streamline operations and reduce manual workloads with intelligent process automation pipelines.',
        link: '/#solutions',
        cta: 'Automate Now'
    },
    {
        icon: Code2,
        title: 'Custom Software Development',
        description: 'Build scalable, secure, and bespoke software applications tailored to your business needs.',
        link: '/#solutions',
        cta: 'Build Custom'
    },
    {
        icon: Cloud,
        title: 'Cloud Services',
        description: 'Migrate, manage, and optimize your enterprise infrastructure on scalable cloud platforms.',
        link: '/#solutions',
        cta: 'Scale Infrastructure'
    },
    {
        icon: ShieldCheck,
        title: 'Cyber Security',
        description: 'Protect your digital assets with enterprise-grade threat detection and compliance frameworks.',
        link: '/#solutions',
        cta: 'Secure Assets'
    },
    {
        icon: Server,
        title: 'IT Services',
        description: 'Comprehensive IT management, support, and infrastructure modernization for growing teams.',
        link: '/#solutions',
        cta: 'Modernize IT'
    },
    {
        icon: Bot,
        title: 'AI Agents',
        description: 'Integrate autonomous digital agents to handle customer interactions and repetitive workflows 24/7.',
        link: '/#solutions',
        cta: 'Deploy Agents'
    },
    {
        icon: Headset,
        title: 'ITES & BPO Services',
        description: 'Outsource critical business processes with technology-enabled services and global support teams.',
        link: '/#solutions',
        cta: 'Outsource Processes'
    }
];

export default function ServicesOverview() {
    return (
        <section id="capabilities" className="py-20 md:py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-grid-slate-100 opacity-50 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-xs tracking-widest uppercase mb-6 shadow-sm border border-blue-100">
                            Enterprise Capabilities
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight drop-shadow-sm">
                            Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Enterprise Ecosystem</span>
                        </h2>
                        <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
                            Our integrated suite of autonomous tools designed to accelerate your revenue pipeline from first touch to expansion.
                        </p>
                    </motion.div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
                    {services.map((service, index) => {
                        // Create asymmetrical layout
                        const isLarge = index === 0 || index === 3;
                        const isTall = index === 1;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className={`
                                    group relative rounded-[2rem] p-8 md:p-10 border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500 flex flex-col overflow-hidden bg-white
                                    ${isLarge ? 'md:col-span-2' : 'col-span-1'}
                                    ${isTall ? 'md:row-span-2' : 'row-span-1'}
                                `}
                            >
                                {/* Decorative internal glow */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                <div className={`w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:shadow-lg group-hover:shadow-blue-200 transition-all duration-500 relative z-10 ${isLarge ? 'w-20 h-20 rounded-3xl' : ''}`}>
                                    <service.icon className={`text-blue-600 group-hover:text-white transition-colors duration-500 ${isLarge ? 'w-10 h-10' : 'w-8 h-8'}`} />
                                </div>
                                
                                <h3 className={`font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-500 relative z-10 ${isLarge ? 'text-3xl' : 'text-2xl'}`}>{service.title}</h3>
                                <p className="text-slate-600 mb-8 flex-grow leading-relaxed text-lg relative z-10 font-medium">{service.description}</p>
                                
                                <Link to={service.link} className="inline-flex items-center text-sm font-bold text-blue-600 group-hover:text-indigo-600 mt-auto uppercase tracking-wide relative z-10 w-max">
                                    {service.cta}
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                                </Link>

                                {/* Bottom decorative gradient bar */}
                                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform origin-left scale-x-0 group-hover:scale-x-100 ease-out"></div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="flex flex-col items-center justify-center mt-16 md:mt-20 lg:mt-24 pt-10 border-t border-slate-200/60 text-center relative z-10">
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-6">Ready to scale your enterprise?</p>
                    <Link to="/book-consultation" className="btn-cta-primary group shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40">
                        Discuss Your Implementation
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
