import { BrainCircuit, Cpu, Code2, Cloud, ShieldCheck, Server, Bot, Headset, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: BrainCircuit,
        title: 'AI Solutions',
        description: 'Deploy advanced machine learning models and predictive AI to solve complex enterprise challenges.',
        link: '/#solutions'
    },
    {
        icon: Cpu,
        title: 'Enterprise Automation',
        description: 'Streamline operations and reduce manual workloads with intelligent process automation pipelines.',
        link: '/#solutions'
    },
    {
        icon: Code2,
        title: 'Custom Software Development',
        description: 'Build scalable, secure, and bespoke software applications tailored to your business needs.',
        link: '/#solutions'
    },
    {
        icon: Cloud,
        title: 'Cloud Services',
        description: 'Migrate, manage, and optimize your enterprise infrastructure on scalable cloud platforms.',
        link: '/#solutions'
    },
    {
        icon: ShieldCheck,
        title: 'Cyber Security',
        description: 'Protect your digital assets with enterprise-grade threat detection and compliance frameworks.',
        link: '/#solutions'
    },
    {
        icon: Server,
        title: 'IT Services',
        description: 'Comprehensive IT management, support, and infrastructure modernization for growing teams.',
        link: '/#solutions'
    },
    {
        icon: Bot,
        title: 'AI Agents',
        description: 'Integrate autonomous digital agents to handle customer interactions and repetitive workflows 24/7.',
        link: '/#solutions'
    },
    {
        icon: Headset,
        title: 'ITES & BPO Services',
        description: 'Outsource critical business processes with technology-enabled services and global support teams.',
        link: '/#solutions'
    }
];

export default function ServicesOverview() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight drop-shadow-sm">
                            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI Solutions</span>
                        </h2>
                        <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
                            Our integrated suite of autonomous tools designed to accelerate your revenue pipeline from first touch to expansion.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-premium-hover hover:border-blue-100 card-hover-lift flex flex-col h-full"
                        >
                            {/* Top decorative gradient */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:shadow-lg group-hover:shadow-blue-200 transition-all duration-300">
                                <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">{service.title}</h3>
                            <p className="text-slate-600 mb-8 flex-grow leading-relaxed text-base">{service.description}</p>
                            
                            <Link to={service.link} className="inline-flex items-center text-sm font-bold text-blue-600 group-hover:text-indigo-600 mt-auto uppercase tracking-wide">
                                Learn More
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-col items-center justify-center mt-16 pt-8 border-t border-slate-200/60 text-center">
                    <p className="text-slate-600 font-medium mb-4">Need help choosing the right AI solution?</p>
                    <Link to="/book-consultation" className="btn-cta-primary group">
                        Talk to Our Experts
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
