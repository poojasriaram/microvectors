
import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone, Cloud, Share2, LayoutGrid, Box, Server, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Trustflow-logo.png';

export default function Footer() {

    const solutionsLinks: { [key: string]: string } = {
        'Business Growth': '/solutions?section=ai-business-growth-strategy',
        'Demand Intelligence': '/solutions?section=ai-market-strategy-demand-intelligence',
        'Performance Growth': '/solutions?section=ai-driven-performance-marketing',
        'Sales Agents': '/solutions?section=ai-auto-sales-pilot-autonomous-sales-agents',
        'RevOps Optimization': '/solutions?section=ai-revenue-operations-ai-revops'
    };

    const industriesLinks: { [key: string]: string } = {
        'B2B SaaS': '/industries?section=saas-digital-platforms',
        'Fintech': '/industries?section=bfsi-fintech',
        'Healthcare': '/industries?section=insurance',
        'Manufacturing': '/industries?section=manufacturing-industrial',
        'Crypto & Web3': '/crypto'
    };

    const companyLinks: { [key: string]: string } = {
        'About Us': '/company',
        'Leadership Team': '/company?section=leadership-culture',
        'Our Offices': '/company?section=our-offices',
        'Careers': '/career',
        'Contact Us': '/company?section=contact-details'
    };

    const offeringsLinks: { [key: string]: string } = {
        'Demand Generation': '/offerings?section=ai-demand-generation-engine',
        'Growth Hacking Engine': '/offerings?section=ai-growth-hacking-engine',
        'Lean Sales': '/offerings?section=ai-lean-sales-sales-transformation',
        'RevOps Platform': '/offerings?section=ai-revenue-operations-revops',
        'ARR Acceleration': '/offerings?section=arr-acceleration-program',
        'Resources': '/resources'
    };

    const productLinks: { [key: string]: string } = {
        'Demand Pulse': '/demand-pulse',
        'AI Demand Discovery': '/ai-demand-discovery',
        'AI Lead Generation': '/ai-lead-generation',
        'AI Lead Nurturing': '/ai-lead-nurturing',
        'AI MVP Validation': '/ai-mvp-validation',
        'Crypto': '/crypto',
        'Sales Transformation': '/ai-lead-sales-transformation',
        'AI Revenue Operations': '/ai-revenue-operations',
        'AI Revenue Acceleration': '/ai-revenue-acceleration'
    };

    return (
        <footer className="bg-slate-50 pt-12 pb-8 border-t border-slate-200 font-sans text-slate-600 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] mix-blend-multiply opacity-50"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[120px] mix-blend-multiply opacity-50"></div>
            </div>

            <div className="w-full mx-auto px-6 lg:px-10 relative z-10">

                {/* Top Section: Brand & Contact vs Navigation Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-8">

                    {/* Brand & Contact (Left 4 Columns) */}
                    <div className="lg:col-span-4 space-y-6 lg:pr-8">
                        {/* Brand */}
                        <div>
                            <Link to="/" className="inline-block mb-1">
                                <div className="flex items-center gap-2">
                                    <img src={logo} alt="TrustFlow.ai Logo" className="h-9 md:h-12 w-auto" />
                                </div>
                            </Link>
                            <p className="text-slate-500 leading-relaxed mb-6 font-medium text-sm max-w-sm">
                                The AI-Powered Revenue Operating System for modern B2B enterprises. Predict, Accelerate, and Scale.
                            </p>

                            <div className="space-y-3 mb-6">
                                <a href="mailto:connect@trustgrid.ai" className="group flex items-center gap-3 text-slate-500 hover:text-blue-600 transition-colors duration-300">
                                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-blue-200 group-hover:bg-blue-50 transition-all">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium text-sm">connect@trustgrid.ai</span>
                                </a>
                                <a href="tel:+919513288612" className="group flex items-center gap-3 text-slate-500 hover:text-blue-600 transition-colors duration-300">
                                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-blue-200 group-hover:bg-blue-50 transition-all">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium text-sm">+91 9513288612</span>
                                </a>
                            </div>

                            <div className="flex gap-3">
                                {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                                    <a key={i} href="#" className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                                        <Icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Navigation Grid - 5 Columns to Include All Content */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

                        {/* Column 1: Platform */}
                        <div className="space-y-4">
                            <h3 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2">Platform</h3>
                            <ul className="space-y-2.5 text-[13px]">
                                {Object.keys(productLinks).map((item, i) => (
                                    <li key={i}>
                                        <Link to={productLinks[item]} className="text-slate-500 hover:text-blue-600 transition-all duration-300 block hover:translate-x-1 font-medium">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 2: Solutions */}
                        <div className="space-y-4">
                            <h3 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2">Solutions</h3>
                            <ul className="space-y-2.5 text-[13px]">
                                {Object.keys(solutionsLinks).map((item, i) => (
                                    <li key={i}>
                                        <Link to={solutionsLinks[item]} className="text-slate-500 hover:text-blue-600 transition-all duration-300 block hover:translate-x-1 font-medium">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Offerings (Restored) */}
                        <div className="space-y-4">
                            <h3 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2">Offerings</h3>
                            <ul className="space-y-2.5 text-[13px]">
                                {Object.keys(offeringsLinks).map((item, i) => (
                                    <li key={i}>
                                        <Link to={offeringsLinks[item]} className="text-slate-500 hover:text-blue-600 transition-all duration-300 block hover:translate-x-1 font-medium">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Industries */}
                        <div className="space-y-4">
                            <h3 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2">Industries</h3>
                            <ul className="space-y-2.5 text-[13px]">
                                {Object.keys(industriesLinks).map((item, i) => (
                                    <li key={i}>
                                        <Link to={industriesLinks[item]} className="text-slate-500 hover:text-blue-600 transition-all duration-300 block hover:translate-x-1 font-medium">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 5: Company */}
                        <div className="space-y-4">
                            <h3 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2">Company</h3>
                            <ul className="space-y-2.5 text-[13px]">
                                {Object.keys(companyLinks).map((item, i) => (
                                    <li key={i}>
                                        <Link to={companyLinks[item]} className="text-slate-500 hover:text-blue-600 transition-all duration-300 block hover:translate-x-1 font-medium">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Our Offices - Premium Minimalist */}
                <div className="border-t border-slate-200/60 py-6">
                    <div className="flex items-center justify-center mb-8">
                        <h3 className="font-bold text-slate-900 text-xs tracking-[0.2em] uppercase px-4 border py-1.5 rounded-full bg-white border-slate-200">
                            Global Presence
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 text-left justify-items-center">
                        {[
                            {
                                title: 'US Office',
                                address: ['501 E Kennedy Blvd Suite 1400,', 'Tampa, FL 33602, United States'],
                                email: 'connect@trustgrid.ai',
                                phone: '+91 9513288612'
                            },
                            {
                                title: 'Singapore Office',
                                address: ['5 Temasek Boulevard, 17th Floor,', 'Singapore 038985'],
                                email: 'connect@trustgrid.ai',
                                phone: '+65 6050 5235'
                            },
                            {
                                title: 'India Office',
                                address: ['TRUSTGRID.AI INNOVATION PVT LTD', 'Suite: 32, 235, Binnamangala, 2nd Floor,', '13th Cross Road, Indira Nagar 2nd Stage,', 'Hoysala Nagar, Bengaluru – 560038, India'],
                                email: 'connect@trustgrid.ai',
                                phone: '+91 9513288612'
                            },
                            {
                                title: 'Mumbai Office',
                                address: ['WeWork, Raheja Platinum, Sag Baug,', 'Marol, Andheri East, Mumbai 400059'],
                                email: 'cs@trustflow.in',
                                phone: '+91 9513088612'
                            },
                            {
                                title: 'Bangalore Office',
                                address: ['WeWork, 13th floor, Tin Factory,', 'Old Madras Rd, Bengaluru 560016'],
                                email: 'cs@trustflow.in',
                                phone: '+91 9513088612'
                            }
                        ].map((office, idx) => (
                            <div key={idx} className="group flex flex-col items-start">
                                <h4 className="flex items-center gap-2 font-bold text-slate-900 text-[13px] uppercase tracking-wide mb-3">
                                    <MapPin className="w-4 h-4 text-secondary-500 shrink-0" />
                                    {office.title}
                                </h4>

                                <div className="mb-4 pl-6">
                                    {office.address.map((line, i) => (
                                        <p key={i} className="text-slate-500 text-[13px] leading-relaxed">
                                            {line}
                                        </p>
                                    ))}
                                </div>

                                <div className="space-y-2 pl-6">
                                    <a href={`mailto:${office.email}`} className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors text-[13px] group/item">
                                        <Mail className="w-3.5 h-3.5" />
                                        <span>{office.email}</span>
                                    </a>
                                    <a href={`tel:${office.phone.replace(/ /g, '')}`} className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors text-[13px] group/item">
                                        <Phone className="w-3.5 h-3.5" />
                                        <span>{office.phone}</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Partners & Recognition */}
                <div className="border-t border-slate-200/60 py-3">
                    <div className="flex flex-col items-center justify-center gap-3">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] bg-slate-100/50 px-2.5 py-0.5 rounded-full border border-slate-200">Trusted Ecosystem</span>
                        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Salesforce */}
                            <div className="flex items-center gap-2 group cursor-default">
                                <Cloud className="w-5 h-5 text-slate-500 group-hover:text-[#00A1E0] transition-colors" />
                                <span className="font-bold text-slate-500 text-sm group-hover:text-slate-800 transition-colors">Salesforce</span>
                            </div>
                            {/* HubSpot */}
                            <div className="flex items-center gap-2 group cursor-default">
                                <Share2 className="w-4 h-4 text-slate-500 group-hover:text-[#FF7A59] transition-colors" />
                                <span className="font-bold text-slate-500 text-sm group-hover:text-slate-800 transition-colors">HubSpot</span>
                            </div>
                            {/* Microsoft */}
                            <div className="flex items-center gap-2 group cursor-default">
                                <LayoutGrid className="w-4 h-4 text-slate-500 group-hover:text-[#00A4EF] transition-colors" />
                                <span className="font-bold text-slate-500 text-sm group-hover:text-slate-800 transition-colors">Microsoft</span>
                            </div>
                            {/* AWS */}
                            <div className="flex items-center gap-2 group cursor-default">
                                <Box className="w-5 h-5 text-slate-500 group-hover:text-[#FF9900] transition-colors" />
                                <span className="font-bold text-slate-500 text-sm group-hover:text-slate-800 transition-colors">AWS</span>
                            </div>
                            {/* Google Cloud */}
                            <div className="flex items-center gap-2 group cursor-default">
                                <Server className="w-4 h-4 text-slate-500 group-hover:text-[#4285F4] transition-colors" />
                                <span className="font-bold text-slate-500 text-sm group-hover:text-slate-800 transition-colors">Google Cloud</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200/60 mt-2">
                    <p className="text-xs text-slate-500 font-medium">
                        &copy; {new Date().getFullYear()} TrustFlow AI. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-xs font-medium text-slate-500">
                        {['Privacy Policy', 'Terms of Service', 'Security', 'Copyright', 'Cookies', 'Sitemap'].map((item, i) => {
                            const path = `/${item.toLowerCase().replace(/ /g, '-')}`; // Simplistic slugify
                            return (
                                <Link key={i} to={item === 'Privacy Policy' ? '/privacy' : item === 'Terms of Service' ? '/terms' : path} className="hover:text-blue-600 transition-colors">
                                    {item}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
