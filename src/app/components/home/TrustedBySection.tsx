import { ShieldCheck, Award, Zap, Server } from 'lucide-react';

export default function TrustedBySection() {
    const partners = [
        "Salesforce", "Snowflake", "AWS", "HubSpot", "Microsoft", "Databricks", "Oracle", "SAP"
    ];

    return (
        <section id="partners" className="py-12 md:py-16 border-b border-slate-200/80 bg-slate-50 relative z-10">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-8">
                    Strategic Partners & Enterprise Integrations
                </p>

                {/* Partner Logos Pill Grid */}
                <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-12">
                    {partners.map((partner, idx) => (
                        <div 
                            key={idx} 
                            className="h-12 px-6 bg-white border border-slate-200/80 rounded-2xl flex items-center justify-center text-slate-700 font-bold tracking-wide text-xs sm:text-sm shadow-xs hover:shadow-md hover:border-blue-300 hover:text-blue-600 transition-all duration-300"
                        >
                            {partner}
                        </div>
                    ))}
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-200/60 max-w-5xl mx-auto">
                    <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-slate-600">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>SOC2 Type II Certified</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-slate-600">
                        <Award className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>ISO 27001 Security</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-slate-600">
                        <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>99.99% Enterprise Uptime</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-slate-600">
                        <Server className="w-4 h-4 text-indigo-600 shrink-0" />
                        <span>Single-Tenant Vault</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
