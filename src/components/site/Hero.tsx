import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Cpu, Bot, Shield, Globe, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NeuralBackground } from "./NeuralBackground";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/30 bg-surface/5">
      {/* Premium subtle grid and glows */}
      <div className="absolute inset-0 bg-grid opacity-[0.4]" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute inset-0 z-0">
        <NeuralBackground density={45} />
      </div>
      <div className="absolute -top-40 left-1/3 h-[500px] w-[900px] rounded-full bg-primary/10 blur-[130px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9, }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute inset-0 hidden lg:block pointer-events-none z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background via-45% to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
        <img
          src="/images/hero_infrastructure.png"
          alt="TrustGrid.AI GPU infrastructure orchestration visual"
          className="w-full h-full object-cover object-right"
        />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-28 md:pt-28 md:pb-36 z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="flex flex-col items-start">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-gradient leading-[1.15] font-display"
            >
              AI Infrastructure.<br />
              Autonomous Agents.<br />
              <span className="text-accent">Enterprise Security.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed font-medium"
            >
              Build, Optimize, and Secure Next-Generation AI Systems with Industry-Leading Expertise in:
            </motion.p>

            {/* Core Expertise Grid */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl w-full"
            >
              {[
                { title: "GPU Infrastructure Engineering", icon: Cpu, desc: "CUDA kernel speedups & cluster networking" },
                { title: "Production LLMs & AI Agents", icon: Bot, desc: "Fine-tuning, RAG, & workflow orchestrations" },
                { title: "AI Cybersecurity", icon: Shield, desc: "Cyber Dom mesh & secure sandbox execution" },
                { title: "Sovereign AI Platforms", icon: Globe, desc: "Zero Trust data sovereignty & compliance" },
                { title: "Enterprise AI Transformation", icon: Layers, desc: "High-ROI platform roadmap design" },
              ].map((item, i) => (
                <li
                  key={item.title}
                  className={`flex items-center gap-3 p-3 rounded-xl border border-border bg-background/50 hover:border-primary/30 hover:bg-surface/50 hover:shadow-sm transition-all duration-300 ${
                    i === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-accent shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-foreground leading-snug">{item.title}</h3>
                    <p className="text-[10px] text-muted-foreground leading-none mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </motion.ul>

            {/* Serving indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 py-3 px-4 rounded-xl border border-border/50 bg-surface/30 text-xs font-medium text-muted-foreground max-w-2xl flex items-center gap-2.5 leading-relaxed"
            >
              <Globe className="h-4 w-4 text-accent shrink-0 animate-pulse-glow" />
              <span>
                Serving <strong className="text-foreground">Government, Healthcare, Banking, Manufacturing, Telecom, Retail, and Research</strong> Organizations Worldwide.
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/95 text-primary-foreground font-medium text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group">
                  Book an Executive Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </motion.div>

          </div>

          {/* Right Column Spacer (Desktop Only) */}
          <div className="hidden lg:block h-[450px]" />

        </div>

      </div>
    </section>
  );
}
