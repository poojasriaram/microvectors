import { HeartPulse, Landmark, Factory, ShoppingCart, GraduationCap, Truck, Rocket, Building2, Landmark as GovIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const industries = [
    {
        icon: HeartPulse,
        title: 'Healthcare',
        useCases: 'Patient Data Management, Telehealth Platforms, Predictive Diagnostics',
        technologies: 'AI & ML, Cloud Infrastructure, IoT',
        benefits: 'Enhanced patient care, secure EHR compliance, reduced operational costs',
        link: '/#industries'
    },
    {
        icon: Landmark,
        title: 'Finance',
        useCases: 'Fraud Detection, Algorithmic Trading, Automated KYC',
        technologies: 'Machine Learning, Blockchain, Data Engineering',
        benefits: 'Risk mitigation, personalized banking experiences, regulatory compliance',
        link: '/#industries'
    },
    {
        icon: Factory,
        title: 'Manufacturing',
        useCases: 'Predictive Maintenance, Supply Chain Automation, Digital Twins',
        technologies: 'IoT, Cloud Computing, Automation',
        benefits: 'Minimized downtime, optimized inventory, accelerated production cycles',
        link: '/#industries'
    },
    {
        icon: ShoppingCart,
        title: 'Retail',
        useCases: 'Inventory Forecasting, Personalized Recommendations, POS Systems',
        technologies: 'Generative AI, Web Technologies, Data Analytics',
        benefits: 'Higher conversion rates, improved customer retention, streamlined ops',
        link: '/#industries'
    },
    {
        icon: GraduationCap,
        title: 'Education',
        useCases: 'E-Learning Platforms, Automated Grading, Student Analytics',
        technologies: 'Cloud Computing, Web Technologies, AI',
        benefits: 'Scalable learning environments, personalized education paths',
        link: '/#industries'
    },
    {
        icon: Truck,
        title: 'Logistics',
        useCases: 'Route Optimization, Fleet Management, Real-time Tracking',
        technologies: 'Data Engineering, Automation, Cloud',
        benefits: 'Reduced delivery times, fuel efficiency, transparent tracking',
        link: '/#industries'
    },
    {
        icon: Rocket,
        title: 'Startups',
        useCases: 'MVP Development, Scalable Architectures, Growth Hacking',
        technologies: 'Web Technologies, Cloud Computing, AI APIs',
        benefits: 'Faster time-to-market, agile iterations, cost-effective scaling',
        link: '/#industries'
    },
    {
        icon: Building2,
        title: 'Enterprises',
        useCases: 'Legacy Modernization, ERP Integrations, Corporate Portals',
        technologies: 'Enterprise Platforms, Cyber Security, Cloud',
        benefits: 'Silo reduction, global scalability, robust security frameworks',
        link: '/#industries'
    },
    {
        icon: GovIcon,
        title: 'Government',
        useCases: 'Smart City Infrastructure, Citizen Portals, Secure Data Vaults',
        technologies: 'Cyber Security, Data Engineering, Enterprise Platforms',
        benefits: 'Enhanced public service delivery, strict compliance, data sovereignty',
        link: '/#industries'
    }
];

export default function IndustriesSection() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="industries">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Built for Complex Industries
                    </h2>
                    <p className="text-lg text-slate-400">
                        Our autonomous models and enterprise architectures are tailored to industry-specific data and compliance needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link 
                                to={industry.link}
                                className="group flex flex-col h-full p-8 rounded-3xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden"
                            >
                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                <div className="relative z-10 flex-grow">
                                    <div className="w-12 h-12 rounded-full bg-slate-700/50 flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors duration-300 border border-slate-600/50 group-hover:border-blue-500/30">
                                        <industry.icon className="w-6 h-6 text-slate-300 group-hover:text-blue-400 transition-colors duration-300" />
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">{industry.title}</h3>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">Use Cases</div>
                                            <div className="text-sm text-slate-300 font-medium leading-relaxed">{industry.useCases}</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">Technologies</div>
                                            <div className="text-sm text-blue-300/80 font-medium leading-relaxed">{industry.technologies}</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">Benefits</div>
                                            <div className="text-sm text-slate-300 font-medium leading-relaxed">{industry.benefits}</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
