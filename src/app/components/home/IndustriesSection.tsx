import { 
    Briefcase, Factory, ShoppingBag, Landmark, Code, Rocket, Building2, 
    HeartPulse, GraduationCap, ShoppingCart, Home, Zap, ArrowRight 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const industries = [
    {
        icon: Briefcase,
        title: 'Service Industries',
        useCases: 'Consulting, Healthcare, Education, Hospitality, Logistics',
        focus: 'Reputation building + lead generation through trust audits.',
        link: '/industries?section=service-industries'
    },
    {
        icon: Factory,
        title: 'Industrial Industries',
        useCases: 'Manufacturing, Utilities, Infrastructure, Supply Chain, Construction, Energy, Automotive, Chemicals, Textiles, Heavy Machinery',
        focus: 'Compliance, disaster vulnerability audits, operational risk coverage, and digital procurement outreach.',
        link: '/industries?section=industrial-industries'
    },
    {
        icon: ShoppingBag,
        title: 'D2C Companies',
        useCases: 'Consumer Brands, E‑commerce, Lifestyle Products, Food & Beverages, Fashion, Electronics',
        focus: 'Digital brand acceleration, customer trust, cyber protection, influencer campaigns.',
        link: '/industries?section=d2c-companies'
    },
    {
        icon: Landmark,
        title: 'FinTech & Lending',
        useCases: 'Digital Lending, NBFCs, Payment Platforms, Wealth Management, Insurance Tech',
        focus: 'Cybersecurity audits, regulatory compliance, liability protection, trust‑building with investors.',
        link: '/industries?section=fintech-lending'
    },
    {
        icon: Code,
        title: 'SaaS Products',
        useCases: 'Software Platforms, AI Tools, Cloud Solutions, Productivity Apps, Enterprise SaaS',
        focus: 'Customer outreach, penetration testing, credibility building, subscription growth.',
        link: '/industries?section=saas-products'
    },
    {
        icon: Rocket,
        title: 'Startups',
        useCases: 'Early‑stage ventures across all sectors',
        focus: 'Affordable liability insurance, investor confidence, growth resilience, digital lead generation.',
        link: '/industries?section=startups'
    },
    {
        icon: Building2,
        title: 'Enterprises',
        useCases: 'Large corporates and established firms',
        focus: 'End‑to‑end liability coverage, automation of sales hunting, sector‑specific solutions, global compliance.',
        link: '/industries?section=enterprises'
    },
    {
        icon: HeartPulse,
        title: 'Healthcare & Life Sciences',
        useCases: 'Hospitals, Clinics, Pharma, Diagnostics, Biotech',
        focus: 'Compliance audits, patient data protection, disaster readiness.',
        link: '/industries?section=healthcare-life-sciences'
    },
    {
        icon: GraduationCap,
        title: 'Education & EdTech',
        useCases: 'Schools, Universities, Online Learning Platforms',
        focus: 'Reputation acceleration, digital trust, cyber safety for student data.',
        link: '/industries?section=education-edtech'
    },
    {
        icon: ShoppingCart,
        title: 'Retail & FMCG',
        useCases: 'Supermarkets, Consumer Goods, Lifestyle Chains',
        focus: 'Digital lead generation, customer trust, cyber audits for POS systems.',
        link: '/industries?section=retail-fmcg'
    },
    {
        icon: Home,
        title: 'Real Estate & Construction',
        useCases: 'Developers, Builders, Smart Infrastructure Projects',
        focus: 'Compliance, disaster audits, investor confidence.',
        link: '/industries?section=real-estate-construction'
    },
    {
        icon: Zap,
        title: 'Energy & Utilities',
        useCases: 'Power, Renewable Energy, Oil & Gas',
        focus: 'Operational risk audits, compliance, disaster resilience.',
        link: '/industries?section=energy-utilities'
    }
];

export default function IndustriesSection() {
    return (
        <section className="py-20 md:py-24 lg:py-32 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200" id="industries">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-xs tracking-widest uppercase mb-4 shadow-xs">
                        Sector Specific Solutions
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight text-slate-900 font-heading">
                        Built for Complex Industries
                    </h2>
                    <p className="text-lg text-slate-600 font-medium">
                        Tailored compliance, risk mitigation, reputation building, and digital outreach for your specific industry sector.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, index) => {
                        const Icon = industry.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="bg-white rounded-[20px] p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xs">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors font-heading">
                                        {industry.title}
                                    </h3>
                                    
                                    <div className="mb-4">
                                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">Sectors Covered</span>
                                        <p className="text-xs text-slate-600 font-medium leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                                            {industry.useCases}
                                        </p>
                                    </div>
                                    
                                    <div className="mb-6">
                                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 block mb-1">Core Focus</span>
                                        <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                                            {industry.focus}
                                        </p>
                                    </div>
                                </div>

                                <Link
                                    to={industry.link}
                                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors pt-4 border-t border-slate-100 group-hover:gap-3"
                                >
                                    <span>Explore Sector Solutions</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
