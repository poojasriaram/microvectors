import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/30 bg-surface/5">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-20 md:pt-28 md:pb-24">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-3 py-1 text-[10px] uppercase tracking-widest font-semibold text-accent backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
            {eyebrow}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mt-6 max-w-4xl text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gradient leading-[1.2] font-display"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            {description}
          </motion.p>
        )}
        {children && <div className="mt-8">{children}</div>}

      </div>
    </section>
  );
}
