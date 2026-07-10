export default function TrustedBySection() {
    return (
        <section className="py-16 border-b border-slate-100 bg-white/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-10">
                    Trusted by Innovative Enterprise Teams Globally
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                    <div className="h-10 w-32 bg-slate-200/50 rounded-lg"></div>
                    <div className="h-10 w-32 bg-slate-200/50 rounded-lg"></div>
                    <div className="h-10 w-32 bg-slate-200/50 rounded-lg"></div>
                    <div className="h-10 w-32 bg-slate-200/50 rounded-lg"></div>
                    <div className="h-10 w-32 bg-slate-200/50 rounded-lg hidden md:block"></div>
                </div>
            </div>
        </section>
    );
}
