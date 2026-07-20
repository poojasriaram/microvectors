import { motion } from 'framer-motion';

const technologies = [
    { name: 'AI & ML', category: 'Intelligence', color: 'text-blue-600' },
    { name: 'Cloud Computing', category: 'Infrastructure', color: 'text-sky-500' },
    { name: 'Web Development', category: 'Engineering', color: 'text-indigo-500' },
    { name: 'Automation', category: 'Process Ops', color: 'text-emerald-500' },
    { name: 'Enterprise Platforms', category: 'Integration', color: 'text-purple-500' },
    { name: 'Cyber Security', category: 'Protection', color: 'text-red-500' },
    { name: 'Data Engineering', category: 'Analytics', color: 'text-amber-500' },
];

export default function TechStack() {
    return (
        <section className="py-24 bg-white relative overflow-hidden" id="offerings">
            {/* Background elements */}
            <div className="absolute inset-0 bg-dot-slate-200 opacity-50 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-xs tracking-widest uppercase mb-6 shadow-sm">
                        Technology Infrastructure
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Enterprise Grade Technology
                    </h2>
                    <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
                        Built on scalable, secure, and modern infrastructure designed to handle millions of data points autonomously and securely.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 lg:gap-6 relative z-10 max-w-5xl mx-auto">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="group bg-slate-50 px-6 py-4 rounded-2xl border border-slate-200 hover:border-blue-200 transition-all duration-300 flex flex-col items-center cursor-default shadow-sm hover:shadow-md hover:bg-white"
                        >
                            <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-1">{tech.category}</div>
                            <div className={`text-lg md:text-xl font-bold tracking-tight text-slate-800 group-hover:${tech.color} transition-colors duration-300`}>{tech.name}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
