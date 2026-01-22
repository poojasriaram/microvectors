
import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone, Cloud, Share2, LayoutGrid, Box, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Trustflow-logo.png';

export default function Footer() {
    return (
        <footer className="bg-white pt-20 pb-10 border-t border-slate-200 text-slate-600 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Section: Brand & Contact vs Navigation Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand & Contact (Left 4 Columns) */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Brand */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <img src={logo} alt="TrustFlow.ai Logo" className="h-16 w-auto" />
                            </div>
                            <p className="text-slate-500 leading-relaxed mb-6 font-medium">
                                AI-Powered Sales & Revenue Acceleration for B2B Companies
                            </p>
                            <div className="flex flex-col gap-2 text-sm text-slate-500 mb-6">
                                <a href="mailto:connect@trustgrid.ai" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                                    <Mail className="w-4 h-4" /> connect@trustgrid.ai
                                </a>
                                <a href="tel:+919513288612" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                                    <Phone className="w-4 h-4" /> +91 9513288612
                                </a>
                            </div>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm hover:shadow-md">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm hover:shadow-md">
                                    <Twitter className="w-4 h-4" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm hover:shadow-md">
                                    <Facebook className="w-4 h-4" />
                                </a>
                            </div>
                        </div>


                    </div>

                    {/* Navigation Grid (Right 8 Columns) */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">Solutions</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/solutions" className="hover:text-blue-600 transition-colors">Business Growth</Link></li>
                                <li><Link to="/solutions" className="hover:text-blue-600 transition-colors">Demand Intelligence</Link></li>
                                <li><Link to="/solutions" className="hover:text-blue-600 transition-colors">Performance Growth</Link></li>
                                <li><Link to="/solutions" className="hover:text-blue-600 transition-colors">Sales Agents</Link></li>
                                <li><Link to="/solutions" className="hover:text-blue-600 transition-colors">RevOps Optimization</Link></li>
                                <li><Link to="/solutions" className="hover:text-blue-600 transition-colors">Revenue Expansion</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">Industries</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/industries" className="hover:text-blue-600 transition-colors">B2B SaaS</Link></li>
                                <li><Link to="/industries" className="hover:text-blue-600 transition-colors">Fintech</Link></li>
                                <li><Link to="/industries" className="hover:text-blue-600 transition-colors">Healthcare</Link></li>
                                <li><Link to="/industries" className="hover:text-blue-600 transition-colors">Manufacturing</Link></li>
                                <li><Link to="/crypto" className="hover:text-blue-600 transition-colors">Crypto & Web3</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">Company</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/company" className="hover:text-blue-600 transition-colors">About Us</Link></li>
                                <li><Link to="/company" className="hover:text-blue-600 transition-colors">Leadership Team</Link></li>
                                <li><Link to="/company" className="hover:text-blue-600 transition-colors">Our Offices</Link></li>
                                <li><a href="mailto:connect@trustgrid.ai" className="hover:text-blue-600 transition-colors">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">Resources</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/resources" className="hover:text-blue-600 transition-colors">Playbooks</Link></li>
                                <li><Link to="/resources" className="hover:text-blue-600 transition-colors">Case Studies</Link></li>
                                <li><Link to="/resources" className="hover:text-blue-600 transition-colors">Whitepapers</Link></li>
                                <li><Link to="/resources" className="hover:text-blue-600 transition-colors">Blog & Insights</Link></li>
                                <li><Link to="/sitemap" className="hover:text-blue-600 transition-colors">Sitemap</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">Legal & Help</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
                                <li><Link to="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
                                <li><Link to="/security" className="hover:text-blue-600 transition-colors">Security Overview</Link></li>
                                <li><Link to="/cookies" className="hover:text-blue-600 transition-colors">Cookie Policy</Link></li>
                                <li><a href="mailto:connect@trustgrid.ai" className="hover:text-blue-600 transition-colors">Help Center</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Partners & Recognition */}
                <div className="border-t border-slate-200 py-6">
                    {/* Certified Partners */}
                    {/* Certified Partners - Redesigned */}
                    <div className="flex flex-col items-center justify-center gap-5">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-[0.2em]">Certified Partners</span>
                        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                            {/* Salesforce */}
                            <div className="flex items-center gap-2.5 group cursor-default transition-all duration-300 hover:-translate-y-1">
                                <Cloud className="w-6 h-6 text-slate-400 group-hover:text-[#00A1E0] transition-colors" />
                                <span className="font-bold text-slate-400 text-lg group-hover:text-slate-700 transition-colors">Salesforce</span>
                            </div>
                            {/* HubSpot */}
                            <div className="flex items-center gap-2.5 group cursor-default transition-all duration-300 hover:-translate-y-1">
                                <Share2 className="w-5 h-5 text-slate-400 group-hover:text-[#FF7A59] transition-colors" />
                                <span className="font-bold text-slate-400 text-lg group-hover:text-slate-700 transition-colors">HubSpot</span>
                            </div>
                            {/* Microsoft */}
                            <div className="flex items-center gap-2.5 group cursor-default transition-all duration-300 hover:-translate-y-1">
                                <LayoutGrid className="w-5 h-5 text-slate-400 group-hover:text-[#00A4EF] transition-colors" />
                                <span className="font-bold text-slate-400 text-lg group-hover:text-slate-700 transition-colors">Microsoft</span>
                            </div>
                            {/* AWS */}
                            <div className="flex items-center gap-2.5 group cursor-default transition-all duration-300 hover:-translate-y-1">
                                <Box className="w-6 h-6 text-slate-400 group-hover:text-[#FF9900] transition-colors" />
                                <span className="font-bold text-slate-400 text-lg group-hover:text-slate-700 transition-colors">AWS</span>
                            </div>
                            {/* Google Cloud */}
                            <div className="flex items-center gap-2.5 group cursor-default transition-all duration-300 hover:-translate-y-1">
                                <Server className="w-5 h-5 text-slate-400 group-hover:text-[#4285F4] transition-colors" />
                                <span className="font-bold text-slate-400 text-lg group-hover:text-slate-700 transition-colors">Google Cloud</span>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-200 mt-6">
                    <p className="text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} TrustFlow AI. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8 text-sm font-medium text-slate-500">
                        <Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
                        <Link to="/security" className="hover:text-blue-600 transition-colors">Security</Link>
                        <Link to="/copyright" className="hover:text-blue-600 transition-colors">Copyright</Link>
                        <Link to="/cookies" className="hover:text-blue-600 transition-colors">Cookies</Link>
                        <Link to="/sitemap" className="hover:text-blue-600 transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
