import { ArrowRight, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const blogs = [
    {
        category: 'AI Insights',
        title: 'The Future of Autonomous Enterprise Agents in 2026',
        excerpt: 'How large language models are moving from conversational interfaces to autonomous action-takers in the enterprise.',
        author: 'Sarah Jenkins',
        date: 'Jul 15, 2026',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop',
        link: '/#blogs'
    },
    {
        category: 'Industry Trends',
        title: 'Why FinTech is Adopting AI Faster Than Any Other Sector',
        excerpt: 'An analysis of regulatory compliance and fraud detection pipelines powered by real-time machine learning.',
        author: 'Michael Chang',
        date: 'Jul 10, 2026',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
        link: '/#blogs'
    },
    {
        category: 'Enterprise Technology',
        title: 'Migrating Legacy Monoliths to AI-Native Microservices',
        excerpt: 'A step-by-step guide on how modern enterprises are rebuilding their core infrastructure for the AI era.',
        author: 'David Rodriguez',
        date: 'Jul 05, 2026',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop',
        link: '/#blogs'
    }
];

export default function BlogSection() {
    return (
        <section className="py-24 bg-slate-50" id="blogs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                    <div className="max-w-2xl">
                        <div className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">Featured Articles</div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                            Latest from MicroVectors
                        </h2>
                        <p className="text-lg text-slate-600">
                            Insights, trends, and thought leadership on enterprise AI and digital transformation.
                        </p>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <Link to="/#blogs" className="inline-flex items-center text-blue-600 font-semibold hover:text-indigo-600 transition-colors">
                            View All Articles
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800">
                                    {blog.category}
                                </div>
                                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                    {blog.title}
                                </h3>
                                <p className="text-slate-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                                    {blog.excerpt}
                                </p>
                                
                                <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                                    <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                                        <div className="flex items-center gap-1.5">
                                            <User className="w-3.5 h-3.5" /> {blog.author}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" /> {blog.date}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
