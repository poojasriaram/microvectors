import { ArrowRight, BarChart3, CheckCircle2, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const caseStudies = [
    {
        client: 'Global FinTech Corp',
        title: 'Automated Fraud Detection Pipeline',
        problem: 'High manual review times caused transaction delays. Experienced high false positive rates.',
        solution: 'Deployed a custom Machine Learning model. Analyzed transaction patterns in real-time.',
        technologies: 'Python, TensorFlow, AWS SageMaker',
        metrics: [
            { label: 'False Positives', value: '-45%' },
            { label: 'Processing Time', value: '< 200ms' }
        ]
    },
    {
        client: 'Leading SaaS Provider',
        title: 'AI-Driven Churn Prediction',
        problem: 'Unable to identify at-risk customers. Missed cancellation signals before they occurred.',
        solution: 'Implemented predictive analytics on user engagement data. Triggered automated retention workflows.',
        technologies: 'Node.js, PostgreSQL, Scikit-learn',
        metrics: [
            { label: 'Churn Rate', value: '-30%' },
            { label: 'Retention ROI', value: '4.5x' }
        ]
    }
];

export default function CaseStudiesSection() {
    return (
        <section className="py-20 md:py-24 lg:py-32 bg-slate-50 relative overflow-hidden" id="outcomes">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Proven Enterprise Outcomes
                    </h2>
                    <p className="text-lg text-slate-600">
                        See how our AI and cloud solutions deliver measurable business impact across industries.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {caseStudies.map((study, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">{study.client}</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">{study.title}</h3>
                            
                            <div className="space-y-6 mb-8 flex-grow">
                                <div>
                                    <div className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                                        <Layers className="w-4 h-4 text-slate-400" /> Problem
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed">{study.problem}</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Solution
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed">{study.solution}</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                                        <BarChart3 className="w-4 h-4 text-blue-500" /> Technologies Used
                                    </div>
                                    <p className="text-blue-600 font-medium text-sm">{study.technologies}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 border-t border-slate-200 pt-6">
                                {study.metrics.map((metric, i) => (
                                    <div key={i}>
                                        <div className="text-2xl font-black text-slate-900">{metric.value}</div>
                                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{metric.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link to="/#case-studies" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 shadow-sm text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-colors">
                        View Success Story
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
