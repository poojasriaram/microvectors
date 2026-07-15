import { Building, Landmark, Factory, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const industries = [
    {
        icon: Building,
        title: 'SaaS & Tech',
        description: 'Accelerate PMF and automate free-to-paid conversions with product-led growth AI.',
        link: '/industries#saas'
    },
    {
        icon: Landmark,
        title: 'BFSI & FinTech',
        description: 'Secure, compliant AI for fraud detection, personalized offers, and risk management.',
        link: '/industries#finance'
    },
    {
        icon: Factory,
        title: 'Manufacturing',
        description: 'Optimize dealer networks, predict supply chain demand, and automate channel sales.',
        link: '/industries#manufacturing'
    },
    {
        icon: Rocket,
        title: 'Startups',
        description: 'Rapidly test markets and validate pricing strategies with our Growth-in-a-Box AI.',
        link: '/industries#startups'
    }
];

export default function IndustriesSection() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Built for Complex Industries
                    </h2>
                    <p className="text-lg text-slate-400">
                        Our autonomous models are pre-trained on industry-specific data architectures to ensure rapid deployment and compliance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                                className="group block h-full p-8 rounded-3xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden"
                            >
                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-full bg-slate-700/50 flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors duration-300 border border-slate-600/50 group-hover:border-blue-500/30">
                                        <industry.icon className="w-6 h-6 text-slate-300 group-hover:text-blue-400 transition-colors duration-300" />
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{industry.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{industry.description}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
