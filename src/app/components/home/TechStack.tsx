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
        <section className="py-24 bg-slate-50 relative overflow-hidden" id="technologies">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-200/50 rounded-full blur-[100px] -z-10"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Enterprise Grade Technology
                    </h2>
                    <p className="text-lg text-slate-600">
                        Built on scalable, secure, and modern infrastructure designed to handle millions of data points autonomously.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ 
                                duration: 5, 
                                repeat: Infinity, 
                                ease: "easeInOut",
                                delay: index * 0.2
                            }}
                            className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className={`text-xl font-bold mb-1 ${tech.color}`}>{tech.name}</div>
                            <div className="text-sm font-semibold text-slate-500 tracking-wide uppercase">{tech.category}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
