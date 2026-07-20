export default function TrustedBySection() {
    return (
        <section id="partners" className="py-20 border-y border-white/5 bg-slate-950/80 backdrop-blur-sm relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-12">
                    Strategic Partners & Trusted Enterprise Ecosystem
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                    {/* Placeholder logos for enterprise tech companies */}
                    <div className="h-10 w-36 bg-slate-800/80 border border-white/5 rounded-lg flex items-center justify-center text-slate-400 font-bold tracking-widest uppercase text-xs shadow-inner">Partner 1</div>
                    <div className="h-10 w-36 bg-slate-800/80 border border-white/5 rounded-lg flex items-center justify-center text-slate-400 font-bold tracking-widest uppercase text-xs shadow-inner">Partner 2</div>
                    <div className="h-10 w-36 bg-slate-800/80 border border-white/5 rounded-lg flex items-center justify-center text-slate-400 font-bold tracking-widest uppercase text-xs shadow-inner">Partner 3</div>
                    <div className="h-10 w-36 bg-slate-800/80 border border-white/5 rounded-lg flex items-center justify-center text-slate-400 font-bold tracking-widest uppercase text-xs shadow-inner">Partner 4</div>
                    <div className="h-10 w-36 bg-slate-800/80 border border-white/5 rounded-lg flex items-center justify-center text-slate-400 font-bold tracking-widest uppercase text-xs shadow-inner hidden md:flex">Partner 5</div>
                </div>
            </div>
        </section>
    );
}
