import { Users } from 'lucide-react';

const teamMembers = [
    { name: "Balaji Venkatraman", role: "Director Growth" },
    { name: "Lavanya Seshadri", role: "Engineering Head" },
    { name: "Vignesh KS", role: "Product Lead" },
    { name: "Dinesh Kumar", role: "Lead AI Engineer" },
    { name: "Hemalata", role: "AI Engineer & Tech Lead" },
    { name: "Prithivin L", role: "Project Lead - EscrowChain" },
    { name: "Shiva Kumar", role: "Senior Product Architect" },
    { name: "Natarajan", role: "Sr Blockchain Architect" },
    { name: "Ritin", role: "Senior AI Architect" },
    { name: "Viswanath", role: "Sr DevOps Engineer" },
    { name: "Subashini Kaushik", role: "AI Engineer - LLM / RAG" },
    { name: "Sonu Priyadarshini", role: "Chief Financial Officer (CFO)" },
    { name: "Aswathi Nair", role: "Corporate Counsel" },
    { name: "Neha Hebber", role: "FinTech Platform Engineer (IIT Bombay)" },
    { name: "Swathi Iyer", role: "IIT Madras - BTech" },
    { name: "Aiswhwarya L Bhatt", role: "AI Performance Marketing & Strategy" },
    { name: "Chintiya Liu", role: "Industry Consultant" },
    { name: "Kallol Pal", role: "Technology Advisor" },
    { name: "Soumya S", role: "Company Secretary & Advisor" },
    { name: "Annapoorani", role: "Automation Engineering (Intern)" },
    { name: "Poojasri", role: "AI/ML Engineer" },
];

export default function LeadershipSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-60"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-xl mb-4 border border-blue-100 backdrop-blur-sm">
                        <Users className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="text-blue-700 font-semibold text-sm tracking-wide uppercase">World-Class Talent</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Leadership & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Teams</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        A powerhouse of AI architects, blockchain experts, and industry consultants building the future of autonomous revenue.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="flex items-start gap-4 relative z-10">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:border-blue-200 transition-colors">
                                    <span className="text-blue-600 font-bold text-sm">
                                        {member.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                                    </span>
                                </div>
                                <div className="min-w-0">
                                    <h3 className="text-slate-900 font-bold text-base truncate pr-2 group-hover:text-blue-700 transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-slate-600 font-medium truncate mt-0.5">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
