import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SectionHeading } from "./SectionHeading-C-MwxatC.mjs";
import { a as Cpu, Z as Zap, B as Bot, N as Network, b as Brain, S as Sparkles, c as Shield, J as ArrowUpRight, K as Cloud, g as Server } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
const services = [
  {
    icon: Cpu,
    title: "AI Infrastructure Engineering",
    to: "/ai-infrastructure-engineering",
    desc: "Design and optimize AI-native infrastructure across cloud, hybrid and on-prem environments.",
    tags: ["Kubernetes", "MLOps", "LLMOps", "AgentOps", "FinOps"]
  },
  {
    icon: Zap,
    title: "GPU Performance Engineering",
    to: "/gpu-performance-engineering",
    desc: "Maximize AI infrastructure performance through advanced GPU optimization.",
    tags: ["CUDA", "TensorRT", "Quantization", "NCCL", "H100"],
    accent: true
  },
  {
    icon: Bot,
    title: "Agentic AI & Autonomous Systems",
    to: "/agentic-ai-development",
    desc: "Build autonomous AI agents capable of planning, reasoning, learning and acting.",
    tags: ["Single Agent", "Multi-Agent", "Tool Use", "Governance"]
  },
  {
    icon: Network,
    title: "Multi-Agent Orchestration",
    to: "/multi-agent-systems",
    desc: "Coordinate fleets of specialized agents to deliver complex business outcomes.",
    tags: ["LangGraph", "CrewAI", "AutoGen", "Routing"]
  },
  {
    icon: Brain,
    title: "Long-Memory AI Systems",
    to: "/long-memory-ai-systems",
    desc: "Enable AI systems to retain knowledge across years instead of conversations.",
    tags: ["Vector DB", "Knowledge Graphs", "RAG", "Semantic Search"]
  },
  {
    icon: Sparkles,
    title: "Generative AI Platforms",
    to: "/services",
    desc: "Enterprise-grade GenAI for text, code, image, video and business automation.",
    tags: ["GPT", "Claude", "Llama", "Mistral", "Gemini"]
  },
  {
    icon: Shield,
    title: "AI Security & Governance",
    to: "/ai-security",
    desc: "Secure AI deployment through Zero Trust Architecture and enterprise governance.",
    tags: ["Confidential Compute", "IAM", "Compliance", "Audit"]
  },
  {
    icon: Cpu,
    title: "MLOps · LLMOps · AgentOps",
    to: "/llmops-services",
    desc: "Operate the full AI lifecycle — from model training to autonomous agent fleets.",
    tags: ["CI/CD", "Observability", "Evaluation", "Lineage"]
  }
];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Capabilities",
        title: "Full-Spectrum AI Engineering",
        description: "From GPU kernels to autonomous enterprise operations — one engineering partner for every layer of your AI stack."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-px bg-border/30 border border-border/40 rounded-xl overflow-hidden md:grid-cols-2 lg:grid-cols-4", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4, delay: i % 4 * 0.05 },
        className: `group relative bg-background p-6 hover:bg-surface/60 transition-all ${s.accent ? "bg-surface/40" : ""}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: s.to, className: "block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-base font-semibold text-foreground leading-snug", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: s.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: s.tags.slice(0, 4).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-surface/80 border border-border/60 px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground", children: t }, t)) })
        ] })
      },
      s.title
    )) })
  ] }) });
}
const layers = [
  {
    name: "AI Platforms Layer",
    icon: Bot,
    items: ["OpenAI", "Anthropic", "Google Gemini", "Llama", "Mistral"],
    accent: "text-blue-400",
    bg: "bg-blue-500/5 border-blue-500/20 group-hover:border-blue-500/40"
  },
  {
    name: "Cloud Layer",
    icon: Cloud,
    items: ["AWS", "Azure", "Google Cloud"],
    accent: "text-cyan-400",
    bg: "bg-cyan-500/5 border-cyan-500/20 group-hover:border-cyan-500/40"
  },
  {
    name: "Infrastructure & Operations Layer",
    icon: Server,
    items: ["Kubernetes", "Docker", "Ray", "Kubeflow", "MLflow"],
    accent: "text-indigo-400",
    bg: "bg-indigo-500/5 border-indigo-500/20 group-hover:border-indigo-500/40"
  },
  {
    name: "GPU & Performance Layer",
    icon: Cpu,
    items: ["NVIDIA", "CUDA", "TensorRT", "NCCL", "Triton"],
    accent: "text-accent",
    bg: "bg-accent/5 border-accent/20 group-hover:border-accent/40"
  }
];
function TechEcosystem() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative border-b border-border/40 bg-surface/10 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/4 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 right-1/4 -translate-y-1/2 h-[250px] w-[250px] rounded-full bg-accent/5 blur-[80px] pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          eyebrow: "Technology",
          title: "Built on Industry-Leading Technologies",
          description: "We leverage proven technologies while maintaining platform flexibility and vendor neutrality. Our stacks are engineered to operate seamlessly across all layers."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0 hidden lg:block pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full h-full", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M 300,180 Q 400,280 300,380",
              fill: "none",
              stroke: "var(--color-accent)",
              strokeWidth: "1.5",
              strokeOpacity: "0.15",
              strokeDasharray: "4 8",
              className: "animate-[dash_20s_linear_infinite]"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M 600,380 Q 500,480 600,580",
              fill: "none",
              stroke: "oklch(0.74 0.16 252)",
              strokeWidth: "1.5",
              strokeOpacity: "0.15",
              strokeDasharray: "4 8",
              className: "animate-[dash_25s_linear_infinite_reverse]"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M 900,580 Q 1000,420 900,180",
              fill: "none",
              stroke: "oklch(0.58 0.22 264)",
              strokeWidth: "1.5",
              strokeOpacity: "0.15",
              strokeDasharray: "4 8",
              className: "animate-[dash_30s_linear_infinite]"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 space-y-8 max-w-5xl mx-auto", children: layers.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: i % 2 === 0 ? -20 : 20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: i * 0.1 },
            className: "group grid md:grid-cols-[220px_1fr] items-center gap-6 rounded-xl border border-border/40 bg-background/60 p-6 md:p-8 backdrop-blur-sm transition-all hover:bg-background/80",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-10 w-10 rounded-lg bg-surface border border-border grid place-items-center ${l.accent}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(l.icon, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground tracking-tight", children: l.name }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2.5", children: l.items.map((item, ii) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  whileHover: { scale: 1.05 },
                  className: `rounded-lg border px-4 py-2 text-xs font-semibold text-foreground/90 transition-all cursor-default ${l.bg}`,
                  children: item
                },
                item
              )) })
            ]
          },
          l.name
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("style", { dangerouslySetInnerHTML: { __html: `
          @keyframes dash {
            to {
              stroke-dashoffset: -1000;
            }
          }
        ` } })
    ] })
  ] });
}
export {
  Services as S,
  TechEcosystem as T
};
