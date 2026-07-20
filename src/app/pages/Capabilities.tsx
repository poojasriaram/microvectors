import { Link } from "react-router-dom";
import { ArrowRight, Brain, Zap, Database, Cpu, Globe, BarChart3, Cloud, Code, Layers, Server, Shield, Lock, Users, Building2, CheckCircle2, TrendingUp, Rocket, Target } from "lucide-react";
import { Reveal } from "../components/ui/Reveal";

const capabilities = [
    {
        pillar: "Core Tech & AI",
        badge: "Artificial Intelligence",
        icon: Brain,
        accent: "blue",
        tagline: "Intelligence that transforms data into decisions at enterprise scale.",
        items: [
            { icon: Brain, name: "AI & Machine Learning", desc: "Custom ML models, AutoML pipelines, and AI strategy consulting for enterprise transformation.", tags: ["Neural Networks", "AutoML", "MLOps", "Fine-tuning"] },
            { icon: Zap, name: "Generative AI Solutions", desc: "LLM integrations, RAG architectures, AI agents, and custom GPT deployments for business workflows.", tags: ["LLMs", "RAG", "AI Agents", "Prompt Engineering"] },
            { icon: Database, name: "Data Engineering", desc: "Modern data stacks, real-time pipelines, lakehouse architectures, and enterprise data governance.", tags: ["Data Lake", "ETL/ELT", "Kafka", "dbt"] },
            { icon: Cpu, name: "Computer Vision", desc: "Object detection, document OCR, quality inspection, and video analytics for industrial use cases.", tags: ["Object Detection", "OCR", "Video Analytics", "Edge AI"] },
            { icon: Globe, name: "Natural Language Processing", desc: "Text classification, entity extraction, semantic search, and conversational AI at scale.", tags: ["NER", "Semantic Search", "Chatbots", "Summarization"] },
            { icon: BarChart3, name: "Predictive Analytics", desc: "Demand forecasting, churn prediction, risk scoring, and revenue intelligence platforms.", tags: ["Forecasting", "Risk Scoring", "Churn Prediction", "BI"] },
        ],
        stats: [{ label: "AI Models Deployed", value: "150+" }, { label: "Data Points Processed Daily", value: "10B+" }, { label: "Accuracy Improvement", value: "40%+" }],
    },
    {
        pillar: "Engineering",
        badge: "Software Engineering",
        icon: Code,
        accent: "indigo",
        tagline: "Enterprise-grade software engineered for performance, scale, and reliability.",
        items: [
            { icon: Cloud, name: "Cloud & DevOps", desc: "AWS, GCP, Azure architecture design, CI/CD automation, and site reliability engineering.", tags: ["AWS", "GCP", "Azure", "Terraform"] },
            { icon: Code, name: "Custom Software Development", desc: "Full-stack web and enterprise application development using modern tech stacks.", tags: ["React", "Node.js", "Python", "TypeScript"] },
            { icon: Layers, name: "Mobile App Development", desc: "Cross-platform and native iOS/Android applications with seamless UX.", tags: ["React Native", "Flutter", "Swift", "Kotlin"] },
            { icon: Server, name: "API Integration", desc: "Enterprise API design, third-party integrations, and middleware development.", tags: ["REST", "GraphQL", "gRPC", "OpenAPI"] },
            { icon: Database, name: "Microservices Architecture", desc: "Decompose monoliths into scalable, resilient microservices with service mesh capabilities.", tags: ["Docker", "Kubernetes", "Service Mesh", "Event-Driven"] },
            { icon: Shield, name: "QA & Testing", desc: "Automated testing, performance benchmarking, and quality assurance frameworks.", tags: ["Selenium", "Cypress", "Load Testing", "SDET"] },
        ],
        stats: [{ label: "Applications Delivered", value: "300+" }, { label: "Uptime SLA Achieved", value: "99.99%" }, { label: "Deployment Frequency", value: "10x faster" }],
    },
    {
        pillar: "Enterprise & Security",
        badge: "Enterprise Solutions",
        icon: Shield,
        accent: "emerald",
        tagline: "Enterprise-grade security and automation for regulated industries.",
        items: [
            { icon: Zap, name: "Enterprise Automation", desc: "RPA, intelligent document processing, and workflow orchestration for back-office efficiency.", tags: ["RPA", "BPM", "IDP", "Workflow Automation"] },
            { icon: Lock, name: "Cyber Security", desc: "Penetration testing, SOC setup, SIEM implementation, and security posture management.", tags: ["SIEM", "SOC", "Pen Testing", "Zero Trust"] },
            { icon: Building2, name: "IT Consulting", desc: "Technology strategy, digital transformation roadmaps, and enterprise architecture advisory.", tags: ["IT Strategy", "EA", "CTO Advisory"] },
            { icon: Users, name: "Identity Management", desc: "SSO, MFA, PAM, and enterprise identity governance solutions for secure access.", tags: ["SSO", "MFA", "PAM", "IAM"] },
            { icon: Shield, name: "Threat Detection", desc: "AI-powered threat intelligence, anomaly detection, and incident response automation.", tags: ["UEBA", "XDR", "SOAR", "Threat Intel"] },
            { icon: Shield, name: "Compliance Solutions", desc: "GRC platforms, regulatory compliance automation for GDPR, ISO 27001, SOC 2, and more.", tags: ["GRC", "GDPR", "ISO 27001", "SOC 2"] },
        ],
        stats: [{ label: "Enterprises Secured", value: "80+" }, { label: "Compliance Frameworks", value: "12+" }, { label: "Threat Detection Rate", value: "99.3%" }],
    },
];

const accentMap: Record<string, { badgeCls: string; iconCls: string; iconBgCls: string; statCls: string; statBgCls: string; tagCls: string; glowCls: string }> = {
    blue: { badgeCls: "bg-blue-50 text-blue-700 border-blue-100", iconCls: "text-blue-600", iconBgCls: "bg-blue-50 group-hover:bg-blue-100", statCls: "text-blue-700", statBgCls: "bg-blue-50 border-blue-100", tagCls: "bg-blue-50 text-blue-600 border-blue-100", glowCls: "bg-blue-500/5" },
    indigo: { badgeCls: "bg-indigo-50 text-indigo-700 border-indigo-100", iconCls: "text-indigo-600", iconBgCls: "bg-indigo-50 group-hover:bg-indigo-100", statCls: "text-indigo-700", statBgCls: "bg-indigo-50 border-indigo-100", tagCls: "bg-indigo-50 text-indigo-600 border-indigo-100", glowCls: "bg-indigo-500/5" },
    emerald: { badgeCls: "bg-emerald-50 text-emerald-700 border-emerald-100", iconCls: "text-emerald-600", iconBgCls: "bg-emerald-50 group-hover:bg-emerald-100", statCls: "text-emerald-700", statBgCls: "bg-emerald-50 border-emerald-100", tagCls: "bg-emerald-50 text-emerald-600 border-emerald-100", glowCls: "bg-emerald-500/5" },
};

export default function Capabilities() {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            {/* Hero */}
            <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 bg-slate-50 border-b border-slate-200 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right,#e2e8f0 1px,transparent 1px),linear-gradient(to bottom,#e2e8f0 1px,transparent 1px)", backgroundSize: "3rem 3rem", opacity: 0.5 }} />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/50 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Reveal width="100%">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm text-blue-700 text-xs font-bold uppercase tracking-wider mb-8">
                            <Zap className="w-3.5 h-3.5" /> Enterprise Capabilities
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 tracking-tight leading-[1.08] mb-6">
                            Built for the <br className="hidden sm:block" />
                            <span className="text-blue-600">Enterprise of Tomorrow</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium mb-10">
                            Three integrated pillars — AI & Intelligence, Software Engineering, and Enterprise Security — working together to deliver transformational outcomes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/book-consultation" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-500/25 hover:-translate-y-px transition-all group">
                                Schedule a Discovery Call <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                            <Link to="/solutions" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-slate-200 hover:border-slate-300 bg-white text-slate-700 font-bold text-base transition-all hover:-translate-y-px">
                                View Solutions
                            </Link>
                        </div>
                    </Reveal>
                    <div className="relative mt-14">
                        <Reveal width="100%">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                                {[{ label: "Technologies Mastered", value: "60+" }, { label: "Enterprise Clients", value: "200+" }, { label: "Projects Delivered", value: "500+" }, { label: "Countries Served", value: "18+" }].map((s, i) => (
                                    <div key={i} className="text-center bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                                        <div className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">{s.value}</div>
                                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Capability Pillars */}
            {capabilities.map((pillar, pi) => {
                const PIcon = pillar.icon;
                const acc = accentMap[pillar.accent];
                return (
                    <section key={pi} className={`py-20 lg:py-28 ${pi % 2 === 0 ? "bg-white" : "bg-slate-50"} border-b border-slate-100`}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <Reveal width="100%">
                                <div className="text-center mb-14">
                                    <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider mb-6 ${acc.badgeCls}`}>
                                        <PIcon className="w-3.5 h-3.5" /> {pillar.badge}
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-5">{pillar.pillar}</h2>
                                    <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">{pillar.tagline}</p>
                                </div>
                            </Reveal>
                            <Reveal width="100%">
                                <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
                                    {pillar.stats.map((s, si) => (
                                        <div key={si} className={`text-center p-4 rounded-2xl border ${acc.statBgCls}`}>
                                            <div className={`text-xl font-black mb-1 ${acc.statCls}`}>{s.value}</div>
                                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider leading-tight">{s.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </Reveal>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {pillar.items.map((cap, ci) => {
                                    const CIcon = cap.icon;
                                    return (
                                        <Reveal key={ci} width="100%" delay={ci * 0.06}>
                                            <div className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-900/5 transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden h-full">
                                                <div className={`absolute inset-0 ${acc.glowCls} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                                                <div className="relative">
                                                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors duration-200 ${acc.iconBgCls}`}>
                                                        <CIcon className={`w-5 h-5 ${acc.iconCls}`} />
                                                    </div>
                                                    <h3 className="text-base font-bold text-slate-900 mb-2">{cap.name}</h3>
                                                    <p className="text-sm text-slate-500 leading-relaxed mb-4 font-medium">{cap.desc}</p>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {cap.tags.map((tag, ti) => (
                                                            <span key={ti} className={`text-[10.5px] font-bold px-2.5 py-1 rounded-full border ${acc.tagCls}`}>{tag}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </Reveal>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                );
            })}

            {/* Why section */}
            <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal width="100%">
                        <div className="text-center mb-14">
                            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">The MicroVectors Advantage</h2>
                            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">We architect, scale, and continuously evolve your technology capabilities.</p>
                        </div>
                    </Reveal>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { icon: Rocket, title: "Speed to Value", desc: "Deploy production-ready solutions in weeks with our modular delivery approach.", color: "text-blue-600", bg: "bg-blue-50" },
                            { icon: Brain, title: "AI-First Thinking", desc: "Every solution is designed with AI at its core, not bolted on as an afterthought.", color: "text-violet-600", bg: "bg-violet-50" },
                            { icon: Shield, title: "Enterprise Security", desc: "Security-by-design across every layer of architecture, not a compliance checkbox.", color: "text-emerald-600", bg: "bg-emerald-50" },
                            { icon: TrendingUp, title: "Outcome Driven", desc: "We measure success in business KPIs: revenue, efficiency, and scalability.", color: "text-orange-600", bg: "bg-orange-50" },
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <Reveal key={i} width="100%" delay={i * 0.08}>
                                    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 h-full">
                                        <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center mb-5`}>
                                            <Icon className={`w-5 h-5 ${item.color}`} />
                                        </div>
                                        <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 lg:py-28 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal width="100%">
                        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-900/5 p-10 lg:p-16 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50 rounded-full blur-[80px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-50 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
                            <div className="relative">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-8">
                                    <Rocket className="w-3.5 h-3.5" /> Start Your Journey
                                </div>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-5">
                                    Ready to Build Something <span className="text-blue-600">Extraordinary?</span>
                                </h2>
                                <p className="text-lg text-slate-600 max-w-xl mx-auto mb-10 font-medium">Let us architect a technology foundation that positions your business for the next decade of growth.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link to="/book-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-500/25 hover:-translate-y-px transition-all group">
                                        Book a Discovery Call <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                    <Link to="/solutions" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-slate-200 hover:border-slate-300 bg-white text-slate-700 font-bold text-base hover:-translate-y-px transition-all">
                                        Explore Solutions
                                    </Link>
                                </div>
                                <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-medium">
                                    {["Free 30-min consultation", "No commitment required", "Response within 24 hours"].map((item, i) => (
                                        <span key={i} className="flex items-center gap-1.5">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
