import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./router-jpP7felp.mjs";
import { M as Metrics } from "./Metrics-5G4MuETg.mjs";
import { S as SectionHeading } from "./SectionHeading-C-MwxatC.mjs";
import { S as Services, T as TechEcosystem } from "./TechEcosystem-Cex10MLN.mjs";
import { C as CaseStudies } from "./CaseStudies-CQGnDC1X.mjs";
import { I as Insights } from "./Insights-Dlc8GR-k.mjs";
import { C as CTA } from "./CTA-DWhGMLD4.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { A as ArrowRight, g as Server, a as Cpu, B as Bot, L as Layers, h as ShieldAlert, H as HardDrive, b as Brain, i as Settings, c as Shield, Z as Zap, S as Sparkles, X, f as Check, j as Landmark, k as HeartPulse, l as Factory, R as Radio, m as ShoppingBag, T as Truck, n as Swords, o as Lightbulb, p as Plane, q as Building2, G as GraduationCap, r as FileBadge, s as Pill, W as Wrench, t as ShieldCheck, u as ChartColumn, v as Globe, w as Search, x as ClipboardCheck, y as Map, z as Rocket, D as TrendingUp } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function NeuralBackground({ density = 50 }) {
  const canvasRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let w = 0, h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes = [];
    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = Array.from({ length: density }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25
      }));
    };
    resize();
    window.addEventListener("resize", resize);
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 140 * 140) {
            const o = 1 - Math.sqrt(d2) / 140;
            ctx.strokeStyle = `rgba(96,165,250,${o * 0.25})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = "rgba(96,165,250,0.85)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [density]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "canvas",
    {
      ref: canvasRef,
      className: "absolute inset-0 h-full w-full",
      "aria-hidden": "true"
    }
  );
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-border/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-radial-glow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NeuralBackground, { density: 60 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-primary/20 blur-[120px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-32 md:pb-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" }),
            "Full-Spectrum AI Engineering Company"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h1,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.05 },
          className: "mt-6 max-w-5xl text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gradient leading-[1.05]",
          children: "Engineering AI Systems That Scale From GPUs to Autonomous Enterprises"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.15 },
          className: "mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground",
          children: "TRUSTGRID.AI helps enterprises design, optimize, secure, and scale next-generation AI systems—from high-performance GPU infrastructure and AI-native cloud platforms to autonomous agents and enterprise-scale AI operations."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.2 },
          className: "mt-4 max-w-2xl text-sm md:text-base text-muted-foreground/80 leading-relaxed",
          children: "We bridge the gap between AI research and production reality by delivering AI infrastructure, Agentic AI, and intelligent automation solutions that create measurable business outcomes, reduce operational complexity, and accelerate innovation at scale."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.3 },
          className: "mt-10 flex flex-wrap gap-4",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "bg-primary hover:bg-primary/90 text-primary-foreground font-medium glow-primary group", children: [
            "Book an Executive Consultation",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1, delay: 0.5 },
          className: "mt-20 flex flex-wrap items-center gap-x-10 gap-y-4 text-xs uppercase tracking-wider text-muted-foreground/70 border-t border-border/20 pt-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Trusted by Fortune 500 leaders" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Financial Services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Government & Defense" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Healthcare" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Energy" })
          ]
        }
      )
    ] })
  ] });
}
const challenges = [
  {
    icon: Server,
    title: "AI Infrastructure Complexity",
    desc: "Managing distributed AI workloads across cloud, hybrid, and on-prem environments has become increasingly difficult and expensive.",
    color: "from-red-500/30 to-red-500/0"
  },
  {
    icon: Cpu,
    title: "GPU Performance Bottlenecks",
    desc: "Most AI workloads operate at a fraction of their theoretical performance, resulting in wasted infrastructure investments.",
    color: "from-orange-500/30 to-orange-500/0"
  },
  {
    icon: Bot,
    title: "Agentic AI Adoption Risks",
    desc: "Organizations want autonomous systems but lack the governance, security, and operational frameworks required for safe deployment.",
    color: "from-amber-500/30 to-amber-500/0"
  },
  {
    icon: Layers,
    title: "Fragmented AI Operations",
    desc: "MLOps, LLMOps, and AgentOps are often implemented separately, creating operational silos and governance challenges.",
    color: "from-yellow-500/30 to-yellow-500/0"
  },
  {
    icon: ShieldAlert,
    title: "Security & Compliance Concerns",
    desc: "AI systems introduce new attack surfaces, compliance requirements, and governance risks.",
    color: "from-rose-500/30 to-rose-500/0"
  }
];
function Challenges() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "The Challenge",
        title: "The Enterprise AI Reality",
        description: "Many organizations face the same challenges when scaling AI from proof-of-concept to production."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: challenges.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.08 },
        className: "group relative rounded-xl border border-border/60 bg-background p-6 hover:border-destructive/30 transition-all overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-b ${c.color} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-lg bg-destructive/10 border border-destructive/20 grid place-items-center text-destructive/80 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-base font-semibold text-foreground leading-snug", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: c.desc })
          ] })
        ]
      },
      c.title
    )) })
  ] }) });
}
const layers$1 = [
  {
    icon: HardDrive,
    name: "Infrastructure Layer",
    desc: "Build scalable, secure, AI-native platforms.",
    accent: "from-blue-500 to-blue-600",
    glow: "bg-blue-500/20"
  },
  {
    icon: Brain,
    name: "Intelligence Layer",
    desc: "Deploy optimized AI models and reasoning systems.",
    accent: "from-cyan-500 to-cyan-600",
    glow: "bg-cyan-500/20"
  },
  {
    icon: Bot,
    name: "Agent Layer",
    desc: "Create autonomous agents capable of planning, reasoning, and execution.",
    accent: "from-violet-500 to-violet-600",
    glow: "bg-violet-500/20"
  },
  {
    icon: Settings,
    name: "Operations Layer",
    desc: "Establish enterprise-grade MLOps, LLMOps, and AgentOps.",
    accent: "from-emerald-500 to-emerald-600",
    glow: "bg-emerald-500/20"
  },
  {
    icon: Shield,
    name: "Governance Layer",
    desc: "Ensure security, compliance, observability, and accountability.",
    accent: "from-amber-500 to-amber-600",
    glow: "bg-amber-500/20"
  }
];
function Approach() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative border-b border-border/40 bg-surface/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Our Approach",
        title: "From Infrastructure to Intelligence",
        description: "TRUSTGRID.AI takes a full-spectrum engineering approach that connects infrastructure, models, agents, operations, and governance into a unified ecosystem."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 relative max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-8 md:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-violet-500/40 to-amber-500/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: layers$1.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -24 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.1 },
          className: "group relative flex items-start gap-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `h-16 w-16 md:h-20 md:w-20 rounded-2xl ${l.glow} border border-border/60 grid place-items-center group-hover:scale-110 transition-transform`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(l.icon, { className: "h-7 w-7 md:h-8 md:w-8 text-accent" })
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 md:pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg md:text-xl font-semibold text-foreground", children: l.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm md:text-base text-muted-foreground leading-relaxed", children: l.desc })
            ] })
          ]
        },
        l.name
      )) })
    ] })
  ] }) });
}
const services = [
  {
    icon: Cpu,
    title: "AI Infrastructure Engineering",
    subtitle: "Build the Foundation for Enterprise AI",
    intro: "Modern AI initiatives require infrastructure designed specifically for high-performance AI workloads. We architect and optimize AI-native environments across cloud, hybrid, and on-prem deployments.",
    capabilities: [
      "AI Cloud Architecture",
      "Kubernetes Platforms",
      "Distributed Training Infrastructure",
      "GPU Cluster Management",
      "AI FinOps Optimization",
      "High Availability Design",
      "AI Networking & Storage"
    ],
    outcome: "Reduce infrastructure costs while increasing scalability, reliability, and deployment velocity.",
    image: "/images/ai_infra.png"
  },
  {
    icon: Zap,
    title: "GPU Performance Engineering",
    subtitle: "Transform GPU Investments into Competitive Advantage",
    intro: "Most organizations achieve only a fraction of available GPU performance. Our engineering teams identify bottlenecks, optimize workloads, and maximize throughput across AI infrastructure.",
    capabilities: [
      "CUDA Optimization",
      "TensorRT Acceleration",
      "Quantization Strategies",
      "NCCL Optimization",
      "Multi-GPU Scaling",
      "H100 & MI300 Optimization",
      "Performance Benchmarking"
    ],
    outcome: "Unlock maximum GPU performance and dramatically reduce infrastructure costs.",
    image: "/images/gpu_performance.png",
    impact: [
      { value: "3–15x", label: "Performance Improvement" },
      { value: "40–75%", label: "Cost Reduction" },
      { value: "Faster", label: "Training Cycles" },
      { value: "Higher", label: "Infrastructure Utilization" }
    ]
  },
  {
    icon: Bot,
    title: "Agentic AI & Autonomous Systems",
    subtitle: "Move Beyond Chatbots",
    intro: "We design intelligent autonomous systems capable of reasoning, planning, memory retention, and task execution.",
    capabilities: [
      "Single-Agent Systems",
      "Multi-Agent Orchestration",
      "Agent Memory Architectures",
      "Tool Integration Frameworks",
      "Human-in-the-Loop Controls",
      "Autonomous Workflow Execution",
      "Agent Governance"
    ],
    outcome: "Enable end-to-end automation of complex enterprise processes while maintaining control and accountability.",
    image: "/images/agentic_ai.png"
  },
  {
    icon: Brain,
    title: "Long-Memory AI Systems",
    subtitle: "AI That Learns Beyond the Context Window",
    intro: "Traditional AI forgets. We build systems that retain institutional knowledge across months and years.",
    capabilities: [
      "Retrieval-Augmented Generation",
      "Vector Databases",
      "Knowledge Graphs",
      "Memory Architectures",
      "Semantic Search",
      "Persistent Knowledge Stores"
    ],
    outcome: "Create AI systems that continuously learn and evolve alongside your organization.",
    image: "/images/long_memory.png"
  },
  {
    icon: Sparkles,
    title: "Enterprise Generative AI",
    subtitle: "Production-Ready Generative AI Solutions",
    intro: "Transform enterprise knowledge into actionable intelligence using advanced generative AI systems.",
    capabilities: [
      "Enterprise RAG",
      "AI Assistants",
      "Knowledge Management",
      "Code Generation",
      "Content Automation",
      "Conversational AI"
    ],
    outcome: "Improve productivity, decision-making, and information accessibility across the enterprise.",
    image: "/images/generative_ai.png"
  },
  {
    icon: Shield,
    title: "AI Security & Governance",
    subtitle: "Secure AI at Scale",
    intro: "Enterprise AI requires governance, observability, and security built into every layer.",
    capabilities: [
      "Zero Trust AI Architecture",
      "AI Governance Frameworks",
      "Identity & Access Management",
      "Compliance Monitoring",
      "Confidential Computing",
      "Audit & Observability"
    ],
    outcome: "Deploy AI confidently within regulated and mission-critical environments.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
  }
];
function ServicesExpanded() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative border-b border-border/40 bg-surface/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Deep Dive",
        title: "Engineering AI Capabilities That Deliver Outcomes",
        description: "Each of our service domains is purpose-built to solve critical enterprise AI challenges and deliver measurable business results."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 space-y-12", children: services.map((s, i) => {
      const isEven = i % 2 === 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.05 },
          className: "group relative rounded-xl border border-border/60 bg-background overflow-hidden hover:border-primary/30 transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.1fr_0.9fr] gap-8 p-6 md:p-8 items-stretch", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col justify-between min-w-0 ${isEven ? "lg:order-1" : "lg:order-2"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 shrink-0 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center text-accent group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-6 w-6" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground", children: s.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-accent font-medium", children: s.subtitle })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed", children: s.intro }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground/70 mb-3", children: "Capabilities" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: s.capabilities.map((cap) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "rounded-md border border-border/60 bg-surface/40 px-2.5 py-1 text-xs text-foreground/85",
                        children: cap
                      },
                      cap
                    )) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 pt-6 border-t border-border/40", children: [
                  s.impact ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-accent font-semibold mb-3", children: "Quantified Business Impact" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 mb-4", children: s.impact.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-gradient-primary font-display", children: m.value }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5", children: m.label })
                    ] }, m.label)) })
                  ] }) : null,
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground/70 mb-2", children: "Business Outcome" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground/90 leading-relaxed flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 mt-0.5 shrink-0 text-accent" }),
                    s.outcome
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex items-center min-w-0 ${isEven ? "lg:order-2" : "lg:order-1"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-lg overflow-hidden border border-border/40 aspect-[4/3] w-full bg-surface/10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent z-10 pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: s.image,
                    alt: `${s.title} visual representation`,
                    loading: "lazy",
                    className: "w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 group-hover:scale-105"
                  }
                )
              ] }) })
            ] })
          ]
        },
        s.title
      );
    }) })
  ] }) });
}
const layers = [
  { name: "Reflex Layer", time: "< 1 μs", desc: "Hardware-level inference. CUDA kernels, tensor cores, RDMA fabric.", color: "from-blue-500/40 to-blue-500/0" },
  { name: "Perception Layer", time: "1 μs – 100 ms", desc: "Real-time signal interpretation. Vision, speech, sensor fusion.", color: "from-cyan-500/40 to-cyan-500/0" },
  { name: "Interaction Layer", time: "100 ms – 1 s", desc: "Conversational AI, copilots, low-latency agent responses.", color: "from-sky-500/40 to-sky-500/0" },
  { name: "Operation Layer", time: "1 s – 5 min", desc: "Agentic workflows. Tool-using agents execute multi-step tasks.", color: "from-indigo-500/40 to-indigo-500/0" },
  { name: "Analysis Layer", time: "5 min – 1 hr", desc: "Long-context analysis. Research agents, deep reasoning, planning.", color: "from-violet-500/40 to-violet-500/0" },
  { name: "Strategy Layer", time: "1 hr – Days", desc: "Autonomous enterprise operations. Self-improving agent fleets.", color: "from-fuchsia-500/40 to-fuchsia-500/0" }
];
function Landscape() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative border-b border-border/40 bg-surface/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "The AI Engineering Landscape",
        title: "We engineer across the full temporal spectrum",
        description: "Most vendors operate at one layer. TrustGrid.AI engineers AI systems from microsecond kernel optimization to multi-day autonomous strategy."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-6", children: layers.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.08 },
          className: "relative group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-x-0 -top-20 h-20 bg-gradient-to-b ${l.color} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-lg border border-border/60 bg-background p-5 h-full hover:border-primary/40 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-accent font-mono", children: l.time }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm font-semibold text-foreground", children: l.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-xs text-muted-foreground leading-relaxed", children: l.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-px left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-primary border-2 border-background" })
            ] })
          ]
        },
        l.name
      )) })
    ] })
  ] }) });
}
const rows = [
  ["Engineering scope", "Chatbots & demos", "Full-Spectrum AI Engineering"],
  ["Agent capabilities", "Generic development", "Agentic AI specialists"],
  ["Infrastructure depth", "Limited", "GPU & cluster engineering experts"],
  ["Security posture", "Basic", "Enterprise Zero-Trust"],
  ["Architecture", "Point solutions", "Multi-Agent + Long-Memory systems"],
  ["Delivery", "Local teams", "5 global delivery centers, 24/7"],
  ["Outcomes", "Pilots", "Production AI at Fortune 500 scale"]
];
function Compare() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Why TrustGrid.AI",
        title: "Built for enterprises, not experiments",
        description: "A side-by-side look at what makes TrustGrid.AI different from generic AI vendors."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "mt-14 overflow-hidden rounded-xl border border-border/60",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 bg-surface/60 border-b border-border/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 text-xs uppercase tracking-wider text-muted-foreground", children: "Dimension" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 text-xs uppercase tracking-wider text-muted-foreground border-l border-border/60", children: "Traditional AI Vendors" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 text-xs uppercase tracking-wider text-accent border-l border-border/60 bg-primary/5", children: "TrustGrid.AI" })
          ] }),
          rows.map(([dim, gen, us], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid grid-cols-3 border-b border-border/40 last:border-b-0 ${i % 2 === 0 ? "bg-background" : "bg-surface/20"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 text-sm font-medium text-foreground", children: dim }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 text-sm text-muted-foreground border-l border-border/40 flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4 mt-0.5 shrink-0 text-destructive/70" }),
              gen
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 text-sm text-foreground border-l border-border/40 bg-primary/[0.03] flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 mt-0.5 shrink-0 text-accent" }),
              us
            ] })
          ] }, dim))
        ]
      }
    )
  ] }) });
}
const keyIndustries = [
  {
    icon: Landmark,
    name: "Financial Services",
    desc: "Fraud detection, risk analytics, compliance automation, intelligent operations.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    desc: "Clinical intelligence, patient engagement, operational optimization, AI-assisted diagnostics.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Factory,
    name: "Manufacturing",
    desc: "Predictive maintenance, quality inspection, industrial automation, supply chain optimization.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Shield,
    name: "Government",
    desc: "Digital transformation, citizen services, intelligence systems, secure AI operations.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Radio,
    name: "Telecommunications",
    desc: "Network optimization, customer experience, operational automation, predictive analytics.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Zap,
    name: "Energy & Utilities",
    desc: "Asset monitoring, predictive forecasting, infrastructure intelligence, operational resilience.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: ShoppingBag,
    name: "Retail & Commerce",
    desc: "Personalization, demand forecasting, inventory intelligence, customer engagement.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Truck,
    name: "Logistics & Transportation",
    desc: "Route optimization, fleet intelligence, supply chain orchestration, predictive planning.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
  }
];
const otherIndustries = [
  { icon: Swords, name: "Defense" },
  { icon: Lightbulb, name: "Utilities" },
  { icon: Plane, name: "Transportation" },
  { icon: Building2, name: "Smart Cities" },
  { icon: GraduationCap, name: "Education" },
  { icon: FileBadge, name: "Insurance" },
  { icon: Pill, name: "Pharmaceuticals" }
];
function Industries() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Industries",
        title: "Engineering AI for Regulated, Mission-Critical Industries",
        description: "20+ verticals served. Our AI engineering capabilities are designed to address the unique challenges of complex, regulated, and high-stakes enterprise environments."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: keyIndustries.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4, delay: i * 0.05 },
        className: "group relative rounded-xl border border-border/60 bg-surface/20 hover:border-primary/40 hover:bg-surface/40 transition-all overflow-hidden flex flex-col justify-between",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] w-full overflow-hidden border-b border-border/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent z-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: it.image,
                alt: `${it.name} AI integration`,
                loading: "lazy",
                className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3 z-20 h-8 w-8 rounded-lg bg-background/80 backdrop-blur border border-border/60 grid place-items-center text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { className: "h-4 w-4" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 flex-1 flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-foreground leading-snug group-hover:text-accent transition-colors", children: it.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed", children: it.desc })
          ] }) })
        ]
      },
      it.name
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 pt-10 border-t border-border/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground/80 mb-6", children: "Additional Enterprise Verticals Served" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3", children: otherIndustries.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.3, delay: i * 0.03 },
          className: "group flex items-center gap-3 rounded-lg border border-border/60 bg-surface/10 p-3 hover:border-primary/40 hover:bg-surface/30 transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-md bg-primary/10 border border-primary/20 grid place-items-center text-accent group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-foreground", children: it.name })
          ]
        },
        it.name
      )) })
    ] })
  ] }) });
}
const differentiators = [
  {
    icon: Wrench,
    title: "Engineering-First Approach",
    desc: "We build production systems, not demonstrations."
  },
  {
    icon: Layers,
    title: "Full-Spectrum Expertise",
    desc: "From infrastructure and GPUs to autonomous agents and AI governance."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Security and compliance embedded into every solution."
  },
  {
    icon: ChartColumn,
    title: "Measurable Business Outcomes",
    desc: "Every engagement is aligned with performance, efficiency, and ROI objectives."
  },
  {
    icon: Globe,
    title: "Global Delivery Model",
    desc: "Flexible engagement options supported by international delivery capabilities."
  }
];
function WhyTrustGrid() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Why TRUSTGRID.AI",
        title: "Why Leading Organizations Choose TRUSTGRID.AI",
        description: "A partner built for the complexity, scale, and security requirements of enterprise AI."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5", children: differentiators.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.08 },
        className: "group relative rounded-xl border border-border/60 bg-background p-6 text-center hover:border-primary/40 transition-all overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center text-accent group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(d.icon, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-sm font-semibold text-foreground leading-snug", children: d.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed", children: d.desc })
          ] })
        ]
      },
      d.title
    )) })
  ] }) });
}
const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    desc: "Understand infrastructure, objectives, workloads, and business priorities."
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Assessment",
    desc: "Identify bottlenecks, opportunities, risks, and optimization potential."
  },
  {
    icon: Map,
    step: "03",
    title: "Strategy",
    desc: "Define technical architecture, success metrics, and implementation roadmap."
  },
  {
    icon: Rocket,
    step: "04",
    title: "Implementation",
    desc: "Deploy solutions through phased engineering execution."
  },
  {
    icon: TrendingUp,
    step: "05",
    title: "Optimization",
    desc: "Continuously improve performance, scalability, security, and business outcomes."
  }
];
function EngagementJourney() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative border-b border-border/40 bg-surface/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Engagement Model",
        title: "Our Engagement Journey",
        description: "A structured, proven approach to transforming your AI initiatives into enterprise capabilities.",
        align: "center"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-5", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.1 },
          className: "group relative text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-flex flex-col items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 rounded-2xl border border-border/60 bg-background grid place-items-center group-hover:border-primary/40 group-hover:bg-surface/60 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-8 w-8 text-accent" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-2 -right-2 h-7 w-7 rounded-full bg-primary/90 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-primary-foreground font-mono", children: s.step }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-base font-semibold text-foreground", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed max-w-[200px] mx-auto", children: s.desc })
          ]
        },
        s.title
      )) })
    ] })
  ] }) });
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Metrics, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Challenges, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Approach, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesExpanded, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Landscape, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Compare, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStudies, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Industries, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TechEcosystem, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyTrustGrid, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EngagementJourney, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Insights, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {})
  ] });
}
export {
  Home as component
};
