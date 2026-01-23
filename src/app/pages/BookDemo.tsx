
import React, { useState } from 'react';
import {
    CheckCircle2,
    Calendar,
    ArrowRight,
    Building2,
    Users,
    TrendingUp,
    Shield
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
        <div className="pt-24 lg:pt-32 pb-16 min-h-screen bg-slate-50 text-slate-900 overflow-hidden">
            {/* Background Decorative Blobs */}
            <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Column: Value Prop */}
                    <div className="lg:w-1/2 space-y-10">
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider mb-6 border border-blue-100 shadow-sm">
                                <Calendar className="w-4 h-4" />
                                Schedule a Consultation
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tighter leading-[1.05]">
                                Architect Your <br />
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    AI Revenue Engine
                                </span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-lg">
                                Book a personalized demo with our revenue architects. See how TrustFlow AI can transform your unstructured data into predictable growth.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-slate-900 tracking-tight">What you'll get:</h3>
                            <ul className="space-y-4">
                                {[
                                    { text: "Full platform walkthrough customized to your vertical", icon: Users },
                                    { text: "AI readiness assessment for your current stack", icon: Shield },
                                    { text: "Revenue acceleration roadmap & ROI projection", icon: TrendingUp },
                                    { text: "Competitive whitespace analysis preview", icon: Building2 }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group">
                                        <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-slate-700 font-semibold text-lg leading-snug">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-8 border-t border-slate-200/60">
                            <div className="flex items-center gap-5">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden shadow-sm">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="User" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="flex items-center gap-0.5 mb-1.5">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <svg key={i} className="w-4 h-4 text-amber-400 fill-current drop-shadow-sm" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-sm font-bold text-slate-700 tracking-wide">Trusted by 500+ Revenue Leaders</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:w-1/2">
                        <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 sm:p-12 relative overflow-hidden ring-1 ring-slate-900/5 mx-auto w-full max-w-lg lg:max-w-none hover:shadow-3xl transition-shadow duration-500">

                            {submitted ? (
                                <div className="absolute inset-0 z-20 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-300">
                                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-green-100 animate-bounce">
                                        <CheckCircle2 className="w-12 h-12 text-green-600" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Request Received!</h2>
                                    <p className="text-lg text-slate-600 max-w-md mx-auto mb-8 font-medium">
                                        Thanks for your interest, {formData.firstName}. Our revenue architects will review your profile and contact you shortly.
                                    </p>
                                    <Button
                                        onClick={() => setSubmitted(false)}
                                        variant="outline"
                                        className="border-slate-300 text-slate-700 h-12 px-8 text-base font-bold hover:bg-slate-50 hover:text-slate-900 rounded-xl"
                                    >
                                        Submit Another Request
                                    </Button>
                                </div>
                            ) : null}

                            <div className="relative z-10 mb-10">
                                <h2 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Get Started</h2>
                                <p className="text-lg text-slate-500 font-medium">Fill out the form below to schedule your demo.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">First Name *</label>
                                        <Input
                                            id="firstName" name="firstName" required
                                            value={formData.firstName} onChange={handleChange}
                                            className="bg-white border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 h-14 text-lg shadow-sm placeholder:text-slate-300 rounded-xl transition-all"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Last Name *</label>
                                        <Input
                                            id="lastName" name="lastName" required
                                            value={formData.lastName} onChange={handleChange}
                                            className="bg-white border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 h-14 text-lg shadow-sm placeholder:text-slate-300 rounded-xl transition-all"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Work Email *</label>
                                    <Input
                                        id="email" name="email" type="email" required
                                        value={formData.email} onChange={handleChange}
                                        placeholder="name@company.com"
                                        className="bg-white border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 h-14 text-lg shadow-sm placeholder:text-slate-300 rounded-xl transition-all"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Company *</label>
                                        <Input
                                            id="company" name="company" required
                                            value={formData.company} onChange={handleChange}
                                            className="bg-white border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 h-14 text-lg shadow-sm placeholder:text-slate-300 rounded-xl transition-all"
                                            placeholder="Acme Corp"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="revenue" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Annual Revenue</label>
                                        <div className="relative">
                                            <select
                                                id="revenue" name="revenue"
                                                value={formData.revenue} onChange={handleChange}
                                                className={`flex h-14 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-lg ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/20 focus-visible:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50 appearance-none shadow-sm transition-all ${formData.revenue === "" ? "text-slate-400" : "text-slate-900"}`}
                                            >
                                                <option value="" className="text-slate-400">Select Range</option>
                                                <option value="Seed - Series A">Seed - Series A</option>
                                                <option value="Series B - C ($10M - $50M)">Series B - C ($10M - $50M)</option>
                                                <option value="Enterprise ($50M+)">Enterprise ($50M+)</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                                                <ChevronDown className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="interest" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Primary Interest *</label>
                                    <div className="relative">
                                        <select
                                            id="interest" name="interest" required
                                            value={formData.interest} onChange={handleChange}
                                            className={`flex h-14 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-lg ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/20 focus-visible:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50 appearance-none shadow-sm transition-all ${formData.interest === "" ? "text-slate-400" : "text-slate-900"}`}
                                        >
                                            <option value="" className="text-slate-400">Select a Solution</option>
                                            <option value="AI Sales Acceleration">AI Sales Acceleration</option>
                                            <option value="Demand Discovery Engine">Demand Discovery Engine</option>
                                            <option value="Revenue Operations (RevOps)">Revenue Operations (RevOps)</option>
                                            <option value="Performance Marketing">Performance Marketing</option>
                                            <option value="Other / General Inquiry">Other / General Inquiry</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                                            <ChevronDown className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message (Optional)</label>
                                    <Textarea
                                        id="message" name="message"
                                        value={formData.message} onChange={handleChange}
                                        className="bg-white border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 min-h-[140px] text-lg shadow-sm placeholder:text-slate-300 p-4 rounded-xl transition-all resize-none"
                                        placeholder="Tell us about your current challenges..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold h-16 text-xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all rounded-xl mt-6 active:scale-[0.98]"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Book Your Demo'}
                                    {!isSubmitting && <ArrowRight className="ml-2 w-6 h-6" />}
                                </Button>

                                <p className="text-xs text-center text-slate-400 mt-6 font-medium">
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

function ChevronDown({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}
