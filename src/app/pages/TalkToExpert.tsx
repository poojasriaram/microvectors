import React, { useState, useEffect } from 'react';
import { submitToSheet } from '../../lib/sheets';
import {
    CheckCircle2,
    Search,
    TrendingUp,
    Lightbulb,
    Target
} from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';

export default function TalkToExpert() {
    useEffect(() => {
        document.title = "Talk to a Revenue Expert | TrustGrid AI";
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        challenge: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Update analytics identity immediately
        const fullName = `${formData.firstName} ${formData.lastName}`;
        localStorage.setItem('user_name', fullName);

        try {
            await submitToSheet('Talk to Expert', {
                "First Name": formData.firstName,
                "Last Name": formData.lastName,
                "Email": formData.email,
                "Phone": formData.phone,
                "Company": formData.company,
                "Job Title": formData.jobTitle,
                "Challenge": formData.challenge,
                "Message": formData.message,
                "Status": "New",
                "Source": "Talk to Expert Page"
            });
            setSubmitted(true);
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // Sync name to analytics in real-time
        if (name === 'firstName' || name === 'lastName') {
            const currentName = name === 'firstName' ? `${value} ${formData.lastName}` : `${formData.firstName} ${value}`;
            localStorage.setItem('user_name', currentName.trim());
        }

        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="pt-20 lg:pt-28 pb-16 min-h-screen bg-slate-50 text-slate-900 overflow-hidden">
            {/* Background Decorative Blobs */}
            <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Column: Value Prop */}
                    {/* Left Column: Value Prop */}
                    <div className="lg:w-1/2 space-y-10">
                        <Reveal width="100%">
                            <div>
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider mb-6 border border-blue-100 shadow-sm">
                                    <Search className="w-4 h-4" />
                                    Expert Consultation
                                </span>
                                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tighter leading-[1.05]">
                                    Solve Your <br />
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        Revenue Puzzles
                                    </span>
                                </h1>
                                <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-lg">
                                    Connect with senior revenue architects who have scaled unicorns. Get actionable advice on your GTM strategy, RevOps, and AI adoption.
                                </p>
                            </div>
                        </Reveal>

                        <div className="space-y-6">
                            <Reveal width="100%" delay={0.2}>
                                <h3 className="text-xl font-bold text-slate-900 tracking-tight">Why talk to us?</h3>
                                <ul className="space-y-4">
                                    {[
                                        { text: "Unbiased audit of your revenue stack", icon: Target },
                                        { text: "Strategic roadmap for AI implementation", icon: Lightbulb },
                                        { text: "Benchmarks against industry leaders", icon: TrendingUp },
                                        { text: "Actionable quick-wins for this quarter", icon: CheckCircle2 }
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group">
                                            <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <span className="text-slate-700 font-semibold text-lg leading-snug">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Reveal>
                        </div>

                        <div className="pt-8 border-t border-slate-200/60">
                            <Reveal width="100%" delay={0.3}>
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-300"></div>
                                        ))}
                                    </div>
                                    <p className="text-sm font-semibold text-slate-600">Join 100+ leaders optimizing revenue with TrustGrid.</p>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:w-1/2">
                        <Reveal width="100%" delay={0.2}>
                            <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 sm:p-12 relative overflow-hidden ring-1 ring-slate-900/5 mx-auto w-full max-w-lg lg:max-w-none hover:shadow-3xl transition-shadow duration-500">

                                {submitted ? (
                                    <div className="absolute inset-0 z-20 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-300">
                                        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-green-100 animate-bounce">
                                            <CheckCircle2 className="w-12 h-12 text-green-600" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Request Sent!</h2>
                                        <p className="text-lg text-slate-600 max-w-md mx-auto mb-8 font-medium">
                                            Your request has been prioritized. A senior expert will reach out to you within 24 hours.
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

                                <div className="relative z-10 mb-8">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Speak to an Expert</h2>
                                    <p className="text-slate-500">No commitment. Just clear, strategic advice.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First name</Label>
                                            <Input
                                                id="firstName" name="firstName" required
                                                value={formData.firstName} onChange={handleChange}
                                                placeholder="John"
                                                className="h-10 md:h-11"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last name</Label>
                                            <Input
                                                id="lastName" name="lastName" required
                                                value={formData.lastName} onChange={handleChange}
                                                placeholder="Doe"
                                                className="h-10 md:h-11"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Work Email</Label>
                                            <Input
                                                id="email" name="email" type="email" required
                                                value={formData.email} onChange={handleChange}
                                                placeholder="name@company.com"
                                                className="h-10 md:h-11"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone Number</Label>
                                            <Input
                                                id="phone" name="phone" type="tel"
                                                value={formData.phone} onChange={handleChange}
                                                placeholder="+1 (555) 000-0000"
                                                className="h-10 md:h-11"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="company">Company</Label>
                                        <Input
                                            id="company" name="company" required
                                            value={formData.company} onChange={handleChange}
                                            placeholder="Acme Corp"
                                            className="h-10 md:h-11"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="challenge">Biggest Revenue Challenge</Label>
                                        <div className="relative">
                                            <select
                                                id="challenge" name="challenge" required
                                                value={formData.challenge} onChange={handleChange}
                                                className={`flex h-10 md:h-11 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${formData.challenge === "" ? "text-slate-500" : "text-slate-900"}`}
                                            >
                                                <option value="" className="text-slate-400">Select Challenge</option>
                                                <option value="Unpredictable Pipeline">Unpredictable Pipeline</option>
                                                <option value="Low Sales Productivity">Low Sales Productivity</option>
                                                <option value="Data Silos & Hygiene">Data Silos & Hygiene</option>
                                                <option value="Scaling GTM Team">Scaling GTM Team</option>
                                                <option value="AI Adoption Strategy">AI Adoption Strategy</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Specific questions? (Optional)</Label>
                                        <Textarea
                                            id="message" name="message"
                                            value={formData.message} onChange={handleChange}
                                            className="min-h-[100px] resize-none"
                                            placeholder="Briefly describe what you'd like to discuss..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 text-lg rounded-xl mt-4"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Requesting...' : 'Talk to an Expert'}
                                    </Button>

                                    <p className="text-xs text-center text-slate-500 mt-4">
                                        Your information is secure. We don't share data with third parties.
                                    </p>
                                </form>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    );
}
