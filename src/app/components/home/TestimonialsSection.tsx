import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "MicroVectors transformed our entire Go-To-Market motion. We saw a 300% increase in pipeline velocity within the first quarter.",
        author: "Sarah Jenkins",
        role: "CRO, FinTech Enterprise",
        company: "Vanguard Pay"
    },
    {
        quote: "The autonomous sales reps handle 80% of our initial discovery calls. It's like having a 24/7 sales floor that never misses a beat.",
        author: "David Chen",
        role: "VP of Sales, SaaS Logistics",
        company: "ShipFlow"
    },
    {
        quote: "Their predictive revenue models are uncannily accurate. We can finally forecast our quarterly targets with 98% precision.",
        author: "Elena Rodriguez",
        role: "RevOps Director",
        company: "CloudScale Systems"
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight drop-shadow-sm">
                            Proven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Enterprise Leaders</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-slate-50 rounded-3xl p-10 border border-slate-100 relative group hover:bg-white hover:shadow-premium-hover hover:border-blue-100 card-hover-lift transition-all duration-300"
                        >
                            <Quote className="w-10 h-10 text-blue-200 mb-6 group-hover:text-blue-500 transition-colors duration-300" />
                            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-10">
                                "{testimonial.quote}"
                            </p>
                            
                            <div className="pt-6 border-t border-slate-200/60 group-hover:border-blue-100 transition-colors duration-300">
                                <div className="font-bold text-slate-900">{testimonial.author}</div>
                                <div className="text-sm text-slate-500 font-medium mb-1">{testimonial.role}</div>
                                <div className="text-xs font-bold text-blue-600 uppercase tracking-wide">{testimonial.company}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
