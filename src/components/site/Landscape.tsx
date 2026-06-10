import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const layers = [
  { name: "Reflex Layer", time: "< 1 μs", desc: "Hardware-level inference. CUDA kernels, tensor cores, RDMA fabric.", color: "from-blue-500/40 to-blue-500/0" },
  { name: "Perception Layer", time: "1 μs – 100 ms", desc: "Real-time signal interpretation. Vision, speech, sensor fusion.", color: "from-cyan-500/40 to-cyan-500/0" },
  { name: "Interaction Layer", time: "100 ms – 1 s", desc: "Conversational AI, copilots, low-latency agent responses.", color: "from-sky-500/40 to-sky-500/0" },
  { name: "Operation Layer", time: "1 s – 5 min", desc: "Agentic workflows. Tool-using agents execute multi-step tasks.", color: "from-indigo-500/40 to-indigo-500/0" },
  { name: "Analysis Layer", time: "5 min – 1 hr", desc: "Long-context analysis. Research agents, deep reasoning, planning.", color: "from-violet-500/40 to-violet-500/0" },
  { name: "Strategy Layer", time: "1 hr – Days", desc: "Autonomous enterprise operations. Self-improving agent fleets.", color: "from-fuchsia-500/40 to-fuchsia-500/0" },
];

export function Landscape() {
  return (
    <section className="relative border-b border-border/30 bg-surface/10">
      <div className="absolute inset-0 bg-grid opacity-[0.15] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 py-24 relative z-10">
        <SectionHeading
          eyebrow="The AI Engineering Landscape"
          title="We engineer across the full temporal spectrum"
          description="From microsecond kernel optimization to multi-day autonomous strategy — one partner, every layer."
        />

        <div className="mt-16 relative">
          {/* Horizontal Track Line connecting the nodes (desktop only) */}
          <div className="absolute left-8 right-8 top-5 h-0.5 bg-gradient-to-r from-primary/60 via-accent/40 to-border/30 hidden md:block" />
          
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6 relative z-10">
            {layers.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-stretch group"
              >
                {/* Node counter */}
                <div className="mb-6 flex items-center justify-center lg:justify-start">
                  <div className="h-10 w-10 rounded-full bg-card border border-border/80 shadow-sm flex items-center justify-center text-xs font-mono font-bold text-accent group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300 relative z-20">
                    0{i + 1}
                  </div>
                </div>

                {/* Layer Card */}
                <div className="premium-card p-5 h-full relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-accent bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-md">
                      {l.time}
                    </span>
                    <h3 className="mt-4 text-sm font-semibold text-foreground tracking-tight">
                      {l.name}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {l.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
