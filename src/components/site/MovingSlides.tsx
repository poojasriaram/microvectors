import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Brain, Bot, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    icon: Cpu,
    category: "GPU & AI HPC INFRASTRUCTURE",
    title: "Data Center & Performance Engineering",
    description: "Optimize multi-node fabrics, NCCL/RoCEv2 networks, and CUDA kernels to maximize hardware utilization and achieve linear scale up to 10,000+ GPUs.",
    tag: "NVIDIA Blackwell & InfiniBand",
    iconColor: "text-blue-500",
  },
  {
    icon: Brain,
    category: "LLM OPTIMIZATION & GEN AI",
    title: "Domain-Specific Models & Knowledge Systems",
    description: "Fine-tune open-weights models (LoRA/DPO), compress models using FP8/INT4 quantization, and build multi-hop RAG systems with enterprise knowledge graphs.",
    tag: "Llama, Mistral & pgvector",
    iconColor: "text-indigo-500",
  },
  {
    icon: Bot,
    category: "AI AGENTS & AUTONOMOUS SYSTEMS",
    title: "Multi-Agent Orchestration & Tool Gating",
    description: "Orchestrate specialized agent fleets (LangGraph/CrewAI) with persistent memory, Model Context Protocol (MCP) tool integrations, and human-in-the-loop gating.",
    tag: "LangGraph, CrewAI & MCP",
    iconColor: "text-violet-500",
  },
  {
    icon: ShieldCheck,
    category: "AI CYBERSECURITY & GOVERNANCE",
    title: "Zero-Trust Security Mesh & Sandboxing",
    description: "Secure model inference and agent execution with MicroVM / WASM sandboxes, protect against prompt injection, and audit decision lineage for SOC2/FedRAMP.",
    tag: "Zero-Trust & SOC2 Compliance",
    iconColor: "text-emerald-500",
  },
];

export function MovingSlides() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(slideNext, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 120 : -120,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 120 : -120,
      opacity: 0
    })
  };

  const slide = slides[currentIndex];
  const IconComponent = slide.icon;

  return (
    <div className="w-full mt-10 md:mt-12 relative">
      <div className="relative h-[250px] sm:h-[200px] md:h-[180px] lg:h-[160px] w-full overflow-hidden rounded-xl border border-border/80 bg-card/65 backdrop-blur-sm px-8 py-6 flex items-center shadow-md">
        {/* Subtle slide grid accent overlay */}
        <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.015] via-transparent to-primary/[0.015] pointer-events-none" />
        
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="grid md:grid-cols-[1fr_auto] gap-6 items-center w-full relative z-10"
          >
            <div className="flex gap-4 md:gap-5 items-start">
              <div className={`h-10 w-10 rounded-lg border shrink-0 grid place-items-center bg-primary/10 border-primary/20 ${slide.iconColor}`}>
                <IconComponent className="h-5 w-5" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-accent bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-md">
                    {slide.category}
                  </span>
                </div>
                <h3 className="mt-2.5 text-sm md:text-base font-semibold text-foreground tracking-tight leading-snug">
                  {slide.title}
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed max-w-3xl">
                  {slide.description}
                </p>
              </div>
            </div>

            {/* Tag section on the right */}
            <div className="hidden md:flex flex-col items-end shrink-0">
              <span className="text-[9px] font-mono font-semibold uppercase tracking-widest text-muted-foreground/85 mb-1">
                Platform Core Stack
              </span>
              <span className="rounded-md bg-surface border border-border/80 px-2.5 py-1 text-[10px] font-bold text-foreground/80 shadow-sm">
                {slide.tag}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={slidePrev}
          className="absolute left-1.5 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full border border-border/80 bg-card/90 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-surface shadow-sm transition-colors cursor-pointer z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
        </button>
        <button
          onClick={slideNext}
          className="absolute right-1.5 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full border border-border/80 bg-card/90 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-surface shadow-sm transition-colors cursor-pointer z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-1.5 mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? "w-5 bg-accent" : "w-1.5 bg-border/80 hover:bg-border"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
