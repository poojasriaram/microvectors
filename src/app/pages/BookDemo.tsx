import React, { useState } from 'react';
import {
    CheckCircle2,
    Calendar,
    ArrowRight,
    Building2,
    Users,
    TrendingUp,
    Shield,
    Send
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

export default function BookDemo() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        jobTitle: '',
        revenue: '',
        interest: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
        const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
        const AIRTABLE_TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME || 'Inbound Leads';

        if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
            console.error("Airtable configuration missing. Please check your .env file.");
            // Fallback for simulation if no config
            await new Promise(resolve => setTimeout(resolve, 1500));
            setIsSubmitting(false);
            setSubmitted(true);
            return;
        }

        try {
            const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fields: {
                        "First Name": formData.firstName,
                        "Last Name": formData.lastName,
                        "Email": formData.email,
                        "Company": formData.company,
                        "Status": "New",
                        "Source": "Website Demo Request",
                        "Annual Revenue": formData.revenue,
                        "Interest": formData.interest,
                        "Message": formData.message
                    }
                })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error("Airtable submission failed:", response.status, errorData);
                const errorMessage = errorData.error?.message || errorData.error || "Connection refused";
                throw new Error(`Airtable Error: ${errorMessage}`);
            }

            setSubmitted(true);
        } catch (error: any) {
            console.error("Error submitting form:", error);
            alert(`Submission Failed: ${error.message || "Please check your internet connection."}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="pt-24 lg:pt-32 pb-16 min-h-screen bg-slate-50 text-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Column: Value Prop */}
                    <div className="lg:w-1/2 space-y-10">
                        <div>
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-wider mb-6 border border-blue-200">
                                <Calendar className="w-4 h-4" />
                                Schedule a Consultation
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                                Architect Your <br />
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    AI Revenue Engine
                                </span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                Book a personalized demo with our revenue architects. See how TrustFlow AI can transform your unstructured data into predictable growth.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-slate-900">What you'll get:</h3>
                            <ul className="space-y-4">
                                {[
                                    { text: "Full platform walkthrough customized to your vertical", icon: Users },
                                    { text: "AI readiness assessment for your current stack", icon: Shield },
                                    { text: "Revenue acceleration roadmap & ROI projection", icon: TrendingUp },
                                    { text: "Competitive whitespace analysis preview", icon: Building2 }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
                                        <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-slate-700 font-semibold text-lg">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-8 border-t border-slate-200">
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="flex items-center gap-1 mb-1">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-sm font-bold text-slate-600">Trusted by 500+ Revenue Leaders</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:w-1/2">
                        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 sm:p-12 relative overflow-hidden ring-1 ring-slate-900/5 backdrop-blur-3xl mx-auto w-full max-w-lg lg:max-w-none">
                            {/* Decorative Background Blurs */}
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                            {submitted ? (
                                <div className="absolute inset-0 z-20 bg-white/80 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-300">
                                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-green-100">
                                        <CheckCircle2 className="w-12 h-12 text-green-600" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Received!</h2>
                                    <p className="text-lg text-slate-600 max-w-md mx-auto mb-8 font-medium">
                                        Thanks for your interest, {formData.firstName}. Our revenue architects will review your profile and contact you shortly.
                                    </p>
                                    <Button
                                        onClick={() => setSubmitted(false)}
                                        variant="outline"
                                        className="border-slate-300 text-slate-700 h-12 px-8 text-base font-semibold hover:bg-slate-50"
                                    >
                                        Submit Another Request
                                    </Button>
                                </div>
                            ) : null}

                            <div className="relative z-10 mb-10">
                                <h2 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Get Started</h2>
                                <p className="text-lg text-slate-600 font-medium">Fill out the form below to schedule your demo.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="space-y-3">
                                        <label htmlFor="firstName" className="text-sm font-bold text-slate-700 uppercase tracking-wide">First Name *</label>
                                        <Input
                                            id="firstName" name="firstName" required
                                            value={formData.firstName} onChange={handleChange}
                                            className="bg-slate-50 border-slate-200 focus:border-blue-500 h-12 text-lg shadow-sm placeholder:text-slate-400"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label htmlFor="lastName" className="text-sm font-bold text-slate-700 uppercase tracking-wide">Last Name *</label>
                                        <Input
                                            id="lastName" name="lastName" required
                                            value={formData.lastName} onChange={handleChange}
                                            className="bg-slate-50 border-slate-200 focus:border-blue-500 h-12 text-lg shadow-sm placeholder:text-slate-400"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label htmlFor="email" className="text-sm font-bold text-slate-700 uppercase tracking-wide">Work Email *</label>
                                    <Input
                                        id="email" name="email" type="email" required
                                        value={formData.email} onChange={handleChange}
                                        placeholder="name@company.com"
                                        className="bg-slate-50 border-slate-200 focus:border-blue-500 h-12 text-lg shadow-sm placeholder:text-slate-400"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-5">
                                    <div className="space-y-3">
                                        <label htmlFor="company" className="text-sm font-bold text-slate-700 uppercase tracking-wide">Company *</label>
                                        <Input
                                            id="company" name="company" required
                                            value={formData.company} onChange={handleChange}
                                            className="bg-slate-50 border-slate-200 focus:border-blue-500 h-12 text-lg shadow-sm placeholder:text-slate-400"
                                            placeholder="Acme Corp"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label htmlFor="revenue" className="text-sm font-bold text-slate-700 uppercase tracking-wide">Annual Revenue</label>
                                        <div className="relative">
                                            <select
                                                id="revenue" name="revenue"
                                                value={formData.revenue} onChange={handleChange}
                                                className={`flex h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-lg ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none shadow-sm ${formData.revenue === "" ? "text-slate-400" : "text-slate-900"}`}
                                            >
                                                <option value="" className="text-slate-500">Select Range</option>
                                                <option value="Seed - Series A">Seed - Series A</option>
                                                <option value="Series B - C ($10M - $50M)">Series B - C ($10M - $50M)</option>
                                                <option value="Enterprise ($50M+)">Enterprise ($50M+)</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                                                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label htmlFor="interest" className="text-sm font-bold text-slate-700 uppercase tracking-wide">Primary Interest *</label>
                                    <div className="relative">
                                        <select
                                            id="interest" name="interest" required
                                            value={formData.interest} onChange={handleChange}
                                            className={`flex h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-lg ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none shadow-sm ${formData.interest === "" ? "text-slate-400" : "text-slate-900"}`}
                                        >
                                            <option value="" className="text-slate-500">Select a Solution</option>
                                            <option value="AI Sales Acceleration">AI Sales Acceleration</option>
                                            <option value="Demand Discovery Engine">Demand Discovery Engine</option>
                                            <option value="Revenue Operations (RevOps)">Revenue Operations (RevOps)</option>
                                            <option value="Performance Marketing">Performance Marketing</option>
                                            <option value="Other / General Inquiry">Other / General Inquiry</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                                            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label htmlFor="message" className="text-sm font-bold text-slate-700 uppercase tracking-wide">Message (Optional)</label>
                                    <Textarea
                                        id="message" name="message"
                                        value={formData.message} onChange={handleChange}
                                        className="bg-slate-50 border-slate-200 focus:border-blue-500 min-h-[120px] text-lg shadow-sm placeholder:text-slate-400 p-4"
                                        placeholder="Tell us about your current challenges..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 text-lg shadow-xl hover:shadow-blue-500/20 transition-all rounded-xl mt-4"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Book Your Demo'}
                                    {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
                                </Button>

                                <p className="text-xs text-center text-slate-500 mt-6 font-medium">
                                    By submitting this form, you agree to our Terms of Service and Privacy Policy.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
