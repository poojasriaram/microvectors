import React from 'react';
import { ArrowLeft, Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* Header/Hero Section */}
            <div className="bg-white border-b border-slate-200 pt-32 pb-12 lg:pt-40 lg:pb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-50 opacity-50"></div>
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 mb-8 transition-colors group">
                        <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                            <Lock className="w-6 h-6" />
                        </div>
                        <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Legal</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                        Privacy Policy
                    </h1>
                    <div className="flex items-center gap-2 text-slate-500 font-medium text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        Last Updated: {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="prose prose-slate prose-lg max-w-none">
                    <p className="text-xl text-slate-600 leading-relaxed mb-12">
                        TrustFlow ("we", "our", "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://trustflow.in" className="text-blue-600 no-underline hover:underline">trustflow.in</a> and use our services.
                    </p>

                    <div className="space-y-12">
                        {/* Section 1 */}
                        <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 text-sm font-bold">1</span>
                                Information We Collect
                            </h2>
                            <p className="text-slate-600 mb-6">We may collect the following types of information:</p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                        Personal Information
                                    </h3>
                                    <ul className="space-y-2 text-slate-600 pl-4 border-l-2 border-slate-100">
                                        <li>Name</li>
                                        <li>Email address</li>
                                        <li>Phone number</li>
                                        <li>Company name</li>
                                        <li>Job title</li>
                                        <li>Any information submitted via forms</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                        Technical Information
                                    </h3>
                                    <ul className="space-y-2 text-slate-600 pl-4 border-l-2 border-slate-100">
                                        <li>IP address</li>
                                        <li>Browser type</li>
                                        <li>Device information</li>
                                        <li>Location (approximate)</li>
                                        <li>Cookies & usage data</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 text-sm font-bold">2</span>
                                How We Use Your Information
                            </h2>
                            <p className="text-slate-600 mb-6">We use your information to:</p>
                            <ul className="grid sm:grid-cols-2 gap-3">
                                {[
                                    "Provide and operate our services",
                                    "Respond to inquiries and requests",
                                    "Improve our website and offerings",
                                    "Send product updates & marketing",
                                    "Analyze usage patterns",
                                    "Ensure platform security",
                                    "Comply with legal obligations"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                        <span className="text-slate-700 font-medium text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">3</span>
                                Sharing of Information
                            </h2>
                            <p className="text-slate-600 mb-4">We may share your information with:</p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2 text-slate-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                    Service providers and technology partners
                                </li>
                                <li className="flex items-center gap-2 text-slate-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                    Analytics and CRM platforms
                                </li>
                                <li className="flex items-center gap-2 text-slate-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                    Cloud infrastructure providers
                                </li>
                                <li className="flex items-center gap-2 text-slate-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                    Legal authorities when required by law
                                </li>
                            </ul>
                            <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                                <Shield className="w-5 h-5 text-blue-600" />
                                <span className="font-bold text-slate-900">We do not sell your personal data.</span>
                            </div>
                        </section>

                        {/* Additional Sections Grouped */}
                        <div className="space-y-10 border-l px-6 border-slate-200 ml-4">
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4">4. Data Security</h2>
                                <p className="text-slate-600 mb-4">We implement industry-standard security measures including secure cloud infrastructure, access controls, data encryption, and regular security audits. However, no system is 100% secure.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
                                <p className="text-slate-600 mb-4">You have the right to access your data, request correction or deletion, withdraw consent, and opt out of marketing communications.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4">6. Cookies & Updates</h2>
                                <p className="text-slate-600 mb-4">We use cookies as described in our Cookie Policy. We may update this policy from time to time. Updates will be posted on this page.</p>
                            </section>
                        </div>

                        {/* Contact Section */}
                        <section className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
                            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <span className="text-xl">📧</span>
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-sm font-medium">Email Support</p>
                                        <a href="mailto:cs@trustflow.in" className="text-lg font-bold hover:text-blue-400 transition-colors">cs@trustflow.in</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <span className="text-xl">🌐</span>
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-sm font-medium">Visit Website</p>
                                        <a href="https://trustflow.in" className="text-lg font-bold hover:text-blue-400 transition-colors">trustflow.in</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
