const fs = require('fs');

let content = fs.readFileSync('src/app/pages/ServiceDetail.tsx', 'utf8');

// I need to add many conditional sections.
// Right after the Features & Benefits section, before FAQs.

const newSections = `
            {/* Conditional: Use Cases */}
            {data.useCases && (
                <div className="py-20 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
                    <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center font-heading">Key Use Cases</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {data.useCases.map((uc, i) => (
                            <div key={i} className="p-8 border border-slate-200 rounded-2xl bg-white shadow-sm hover:border-blue-300 transition-colors">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{uc.title}</h3>
                                <p className="text-slate-600 font-medium">{uc.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Conditional: Technologies */}
            {data.technologies && (
                <div className="bg-slate-900 text-white py-20">
                    <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 text-center">
                        <h2 className="text-3xl font-bold mb-12 font-heading">Powered by Leading Technologies</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {data.technologies.map((tech, i) => (
                                <span key={i} className="px-6 py-3 bg-white/10 rounded-full font-bold text-sm hover:bg-blue-600 transition-colors cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Conditional: Architecture Diagrams */}
            {data.architectureDiagrams && (
                <div className="py-20 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
                    <h2 className="text-3xl font-bold mb-12 text-slate-900 text-center font-heading">Reference Architecture</h2>
                    {data.architectureDiagrams.map((arch, i) => (
                        <div key={i} className="max-w-5xl mx-auto mb-16 text-center">
                            <img src={arch.src} alt={arch.title} className="w-full h-auto rounded-3xl shadow-premium mb-8 border border-slate-200" />
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{arch.title}</h3>
                            <p className="text-slate-600 text-lg max-w-3xl mx-auto">{arch.description}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Conditional: KPIs */}
            {data.kpis && (
                <div className="bg-blue-600 text-white py-24">
                    <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
                        <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
                            {data.kpis.map((kpi, i) => (
                                <div key={i} className="pt-8 md:pt-0">
                                    <div className="text-5xl lg:text-6xl font-extrabold mb-4 font-heading">{kpi.metric}</div>
                                    <div className="text-lg font-bold text-blue-100">{kpi.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Conditional: Success Stories */}
            {data.successStories && (
                <div className="py-20 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 bg-slate-50 border-y border-slate-100">
                    <h2 className="text-3xl font-bold mb-12 text-slate-900 text-center font-heading">Proven Success Stories</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {data.successStories.map((story, i) => (
                            <div key={i} className="p-8 bg-white border border-slate-200 rounded-3xl">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{story.title}</h3>
                                <p className="text-slate-600 text-lg">{story.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Conditional: Service Models & Project Lifecycle */}
            {(data.serviceModels || data.projectLifecycle) && (
                <div className="py-20 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
                    {data.serviceModels && (
                        <div className="mb-24">
                            <h2 className="text-3xl font-bold mb-12 text-slate-900 text-center font-heading">Engagement Models</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {data.serviceModels.map((model, i) => (
                                    <div key={i} className="p-8 border-2 border-slate-100 hover:border-blue-500 rounded-2xl transition-colors">
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">{model.title}</h3>
                                        <p className="text-slate-600 font-medium">{model.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {data.projectLifecycle && (
                        <div>
                            <h2 className="text-3xl font-bold mb-12 text-slate-900 text-center font-heading">Our Delivery Methodology</h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {data.projectLifecycle.map((step, i) => (
                                    <div key={i} className="relative p-6 bg-slate-50 rounded-2xl border border-slate-200">
                                        <div className="text-4xl font-black text-slate-200 mb-4 font-heading">0{i+1}</div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{step.step}</h3>
                                        <p className="text-slate-600 text-sm font-medium">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
`;

content = content.replace('{/* FAQs */}', newSections + '\n            {/* FAQs */}');

fs.writeFileSync('src/app/pages/ServiceDetail.tsx', content, 'utf8');
console.log('ServiceDetail updated');
