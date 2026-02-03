import { useEffect, useState } from 'react';
import { submitToAirtable } from '../../lib/airtable';
import {
    Rocket,
    Heart,
    Briefcase,
    Users,
    Code2,
    Brain,
    Globe
} from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

export default function Career() {
    useEffect(() => {
        document.title = "Careers | TrustFlow AI";
    }, []);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isApplyOpen, setIsApplyOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState("");

    const handleApply = (roleTitle: string) => {
        setSelectedRole(roleTitle);
        setIsApplyOpen(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);

        try {
            await submitToAirtable('Job Applications', {
                "First Name": formData.get('firstName'),
                "Last Name": formData.get('lastName'),
                "Email": formData.get('email'),
                "LinkedIn Profile": formData.get('linkedin'),
                "Role Applied For": selectedRole,
                "Cover Letter": formData.get('coverLetter'),
                "Status": "New"
            });
            alert(`Application for ${selectedRole} submitted successfully!`);
            setIsApplyOpen(false);
        } catch (error) {
            console.error(error);
            alert("Application failed. Please try again.");
        }
    };

    const slides = [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const values = [
        {
            icon: <Rocket className="w-6 h-6 text-blue-600" />,
            title: "Move Fast & Build",
            desc: "We believe in rapid iteration and shipping high-quality software that solves real problems."
        },
        {
            icon: <Heart className="w-6 h-6 text-pink-600" />,
            title: "Customer Obsession",
            desc: "Our customers' success is our success. We go above and beyond to deliver value."
        },
        {
            icon: <Brain className="w-6 h-6 text-purple-600" />,
            title: "First Principles Thinking",
            desc: "We challenge assumptions and solve problems from their fundamental truths."
        },
        {
            icon: <Users className="w-6 h-6 text-orange-600" />,
            title: "One Team",
            desc: "We support each other, share knowledge, and win together as a cohesive unit."
        }
    ];

    const openRoles = [
        {
            title: "Senior AI Engineer",
            dept: "Engineering",
            loc: "Remote / SF",
            type: "Full-time"
        },
        {
            title: "Founding Product Designer",
            dept: "Product",
            loc: "Remote",
            type: "Full-time"
        },
        {
            title: "Enterprise Account Executive",
            dept: "Sales",
            loc: "New York / Remote",
            type: "Full-time"
        },
        {
            title: "Full Stack Engineer",
            dept: "Engineering",
            loc: "Bengaluru / Remote",
            type: "Full-time"
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            {/* 1. Hero Section */}
            <section className="relative bg-slate-900 text-white pt-32 pb-24 overflow-hidden">
                {/* Background Slideshow */}
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-40" : "opacity-0"
                            }`}
                        style={{
                            backgroundImage: `url('${slide}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                ))}

                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/80 to-slate-900"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <Reveal width="100%">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-300 text-sm font-bold mb-8 backdrop-blur-sm animate-fade-in-up">
                            <Briefcase className="w-4 h-4" />
                            <span>We're Hiring</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1] text-white drop-shadow-lg">
                            Build the Future of <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                                Revenue Intelligence
                            </span>
                        </h1>

                        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                            Join a team of world-class engineers, researchers, and operators building the next generation of AI-powered enterprise software.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <a href="#open-roles">
                                <Button className="bg-white text-slate-900 hover:bg-slate-100 px-10 py-6 text-lg h-auto rounded-full font-bold shadow-lg transition-all hover:-translate-y-1">
                                    View Open Roles
                                </Button>
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 2. Values Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">Our Values</h2>
                        <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto">The principles that guide how we build, sell, and support.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((val, idx) => (
                            <Reveal key={idx} width="100%" delay={idx * 0.1}>
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors h-full">
                                    <div className="mb-4 p-3 bg-white rounded-xl shadow-sm w-fit border border-slate-100">
                                        {val.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        {val.desc}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Open Roles Section */}
            <section id="open-roles" className="py-24 bg-slate-50 relative">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">Open Positions</h2>
                        <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto">Come do the best work of your career.</p>
                    </div>

                    <div className="space-y-4">
                        {openRoles.map((role, idx) => (
                            <Reveal key={idx} width="100%" delay={idx * 0.1}>
                                <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">{role.title}</h3>
                                        <div className="flex flex-wrap gap-3 text-sm text-slate-500 font-medium">
                                            <span className="flex items-center gap-1"><Code2 className="w-3.5 h-3.5" /> {role.dept}</span>
                                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                            <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5" /> {role.loc}</span>
                                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                            <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {role.type}</span>
                                        </div>
                                    </div>
                                    <Button
                                        onClick={() => handleApply(role.title)}
                                        variant="outline"
                                        className="border-slate-200 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200 transition-all rounded-full px-6"
                                    >
                                        Apply Now
                                    </Button>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-slate-600 text-lg font-medium">
                            Don't see your role? <a href="mailto:careers@trustflow.ai" className="text-blue-600 hover:underline">Email us</a> your resume.
                        </p>
                    </div>
                </div>
            </section>
            {/* Application Modal */}
            <Dialog open={isApplyOpen} onOpenChange={setIsApplyOpen}>
                <DialogContent className="sm:max-w-[600px] bg-white border-slate-100 dark:bg-slate-900 dark:border-slate-800">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-slate-900 dark:text-white">Apply for {selectedRole}</DialogTitle>
                        <DialogDescription className="text-slate-500">
                            Fill out the form below to apply. We'll get back to you soon.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First name</Label>
                                <Input id="firstName" name="firstName" placeholder="Jane" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last name</Label>
                                <Input id="lastName" name="lastName" placeholder="Doe" required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" placeholder="jane@example.com" required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="linkedin">LinkedIn Profile URL</Label>
                            <Input id="linkedin" name="linkedin" placeholder="https://linkedin.com/in/janedoe" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="resume">Resume / CV</Label>
                            <Input id="resume" type="file" className="cursor-pointer file:text-blue-600 file:font-semibold" accept=".pdf,.doc,.docx" required />
                            <p className="text-xs text-slate-500">PDF, DOC, DOCX up to 10MB</p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
                            <Textarea
                                id="coverLetter"
                                name="coverLetter"
                                placeholder="Tell us why you want to join TrustFlow AI..."
                                className="min-h-[100px]"
                            />
                        </div>

                        <DialogFooter className="pt-4">
                            <Button type="button" variant="outline" onClick={() => setIsApplyOpen(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                                Submit Application
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
