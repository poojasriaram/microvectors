import { BrainCircuit, LineChart, Cpu, Bot, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: BrainCircuit,
        title: 'Demand Discovery Engine',
        description: 'Identify high-intent buyers hidden in the dark funnel before they contact competitors.',
        link: '/solutions#demand-discovery'
    },
    {
        icon: Bot,
        title: 'Autonomous Sales Agents',
        description: 'Deploy digital sales reps that handle research, outreach, and follow-ups 24/7.',
        link: '/solutions#autonomous-sales'
    },
    {
        icon: LineChart,
        title: 'Revenue Intelligence',
        description: 'Predictive forecasting and real-time bottleneck detection for RevOps teams.',
        link: '/solutions#revenue-intelligence'
    },
    {
        icon: Cpu,
        title: 'Growth Automation',
        description: 'End-to-end multi-channel campaign orchestration and A/B testing at scale.',
        link: '/solutions#growth-automation'
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
                                Explore Solution
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
