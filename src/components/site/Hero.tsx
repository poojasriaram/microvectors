import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
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

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-28 md:pt-28 md:pb-36 z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-3 py-1 text-[10px] uppercase tracking-widest font-semibold text-accent backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
              Full-Spectrum AI Engineering
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 max-w-3xl text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gradient leading-[1.2] font-display"
            >
              Engineering AI Systems That Scale From GPUs to Autonomous Enterprises
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              We design, optimize, secure, and scale next-generation AI systems — from GPU infrastructure and AI-native cloud platforms to autonomous agents and enterprise AI operations.
            </motion.p>

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

          {/* Right Column: Visual Infrastructure Card (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl border border-border/60 bg-background/50 p-2.5 overflow-hidden shadow-xl backdrop-blur-sm hidden lg:block group/hero-img"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
            <img
              src="/images/hero_infrastructure.png"
              alt="TrustGrid.AI GPU infrastructure orchestration visual"
              className="w-full rounded-xl object-cover aspect-[4/3] border border-border/40 transition-transform duration-700 group-hover/hero-img:scale-[1.015]"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
