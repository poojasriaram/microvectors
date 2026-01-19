import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Phone, Globe, Shield, Award, CheckCircle2, Cloud, Share2, LayoutGrid, Box, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Trustflow-logo.png';

export default function Footer() {
    return (
        <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200 text-slate-600 font-sans">
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
                                <a href="mailto:cs@trustflow.in" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                                    <Mail className="w-4 h-4" /> cs@trustflow.in
                                </a>
                                <a href="tel:+919513088612" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                                    <Phone className="w-4 h-4" /> +91 9513088612
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
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-bold text-slate-900 mb-6">Company</h3>
                            <ul className="space-y-3 text-sm">
                                <li><Link to="/company" className="hover:text-blue-600 transition-colors">About Us</Link></li>
                                <li><Link to="/company" className="hover:text-blue-600 transition-colors">Leadership Team</Link></li>
                                <li><Link to="/company" className="hover:text-blue-600 transition-colors">Careers</Link></li>
                                <li><Link to="/company" className="hover:text-blue-600 transition-colors">Press & Media</Link></li>
                                <li><Link to="/company" className="hover:text-blue-600 transition-colors">Partners Program</Link></li>
                                <li><Link to="/company" className="hover:text-blue-600 transition-colors">Affiliate Program</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 mb-6">Resources</h3>
                            <ul className="space-y-3 text-sm">
                                <li><Link to="/resources" className="hover:text-blue-600 transition-colors">Blog & Insights</Link></li>
                                <li><Link to="/resources" className="hover:text-blue-600 transition-colors">Case Studies</Link></li>
                                <li><Link to="/resources" className="hover:text-blue-600 transition-colors">Whitepapers</Link></li>
                                <li><Link to="/resources" className="hover:text-blue-600 transition-colors">Webinars</Link></li>
                                <li><Link to="/resources" className="hover:text-blue-600 transition-colors">ROI Calculators</Link></li>
                                <li><Link to="/resources" className="hover:text-blue-600 transition-colors">Implementation Guides</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 mb-6">Support</h3>
                            <ul className="space-y-3 text-sm">
                                <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Help Center</Link></li>
                                <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Documentation</Link></li>
                                <li><Link to="/contact" className="hover:text-blue-600 transition-colors">API Reference</Link></li>
                                <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Status Page</Link></li>
                                <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Community Forum</Link></li>
                                <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact Support</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 mb-6">Legal</h3>
                            <ul className="space-y-3 text-sm">
                                <li><Link to="/" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
                                <li><Link to="/" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
                                <li><Link to="/" className="hover:text-blue-600 transition-colors">Security Overview</Link></li>
                                <li><Link to="/" className="hover:text-blue-600 transition-colors">GDPR Compliance</Link></li>
                                <li><Link to="/" className="hover:text-blue-600 transition-colors">Data Processing Agreement</Link></li>
                                <li><Link to="/" className="hover:text-blue-600 transition-colors">Cookie Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Partners & Recognition */}
                <div className="border-t border-slate-200 py-10 space-y-8">
                    {/* Certified Partners */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <span className="text-sm font-bold text-slate-900 uppercase tracking-wide">Certified Partners</span>
                        <div className="flex flex-wrap items-center justify-center gap-8 transition-all duration-500">
                            <div className="flex items-center gap-2 group cursor-default">
                                <Cloud className="w-5 h-5 text-[#00A1E0]" />
                                <span className="font-bold text-slate-600 text-lg group-hover:text-[#00A1E0] transition-colors">Salesforce</span>
                            </div>
                            <div className="flex items-center gap-2 group cursor-default">
                                <Share2 className="w-5 h-5 text-[#FF7A59]" />
                                <span className="font-bold text-slate-600 text-lg group-hover:text-[#FF7A59] transition-colors">HubSpot</span>
                            </div>
                            <div className="flex items-center gap-2 group cursor-default">
                                <LayoutGrid className="w-5 h-5 text-[#00A4EF]" />
                                <span className="font-bold text-slate-600 text-lg group-hover:text-[#00A4EF] transition-colors">Microsoft</span>
                            </div>
                            <div className="flex items-center gap-2 group cursor-default">
                                <Box className="w-5 h-5 text-[#FF9900]" />
                                <span className="font-bold text-slate-600 text-lg group-hover:text-[#FF9900] transition-colors">AWS</span>
                            </div>
                            <div className="flex items-center gap-2 group cursor-default">
                                <Server className="w-5 h-5 text-[#4285F4]" />
                                <span className="font-bold text-slate-600 text-lg group-hover:text-[#4285F4] transition-colors">Google Cloud</span>
                            </div>
                        </div>
                    </div>

                    {/* Recognition */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-amber-50 rounded-lg">
                                <Award className="w-6 h-6 text-amber-500" />
                            </div>
                            <div>
                                <span className="block font-bold text-slate-900">Gartner</span>
                                <span className="text-sm font-medium text-slate-500">Cool Vendor 2025</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-50 rounded-lg">
                                <Award className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <span className="block font-bold text-slate-900">Forrester</span>
                                <span className="text-sm font-medium text-slate-500">Wave Leader</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-50 rounded-lg">
                                <Award className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <span className="block font-bold text-slate-900">G2</span>
                                <span className="text-sm font-medium text-slate-500">Top 50 AI Platform</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col items-center gap-6 text-sm text-slate-600 pt-8 border-t border-slate-200">
                    <p className="font-bold">&copy; 2026 TrustFlow AI. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link to="/" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
                        <Link to="/" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
                        <Link to="/" className="hover:text-slate-900 transition-colors">Security</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
