import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SectionHeading } from "./SectionHeading-C-MwxatC.mjs";
import { J as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
const articles = [
  { cat: "Agentic AI", title: "The State of Agentic AI in 2026", read: "12 min read" },
  { cat: "GPU Engineering", title: "Enterprise GPU Optimization: A Practical Guide to H100 at Scale", read: "18 min read" },
  { cat: "Autonomous Systems", title: "The Future of Autonomous Enterprises", read: "9 min read" },
  { cat: "Memory Systems", title: "Building Long-Memory AI Systems with Vector & Graph Hybrids", read: "14 min read" },
  { cat: "AI Infrastructure", title: "AI Infrastructure at Scale: Lessons from 128+ GPU Deployments", read: "16 min read" }
];
const categories = ["Agentic AI", "GPU Engineering", "AI Infrastructure", "MLOps", "LLMOps", "AgentOps", "Enterprise AI", "Security"];
function Insights() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          eyebrow: "Thought Leadership",
          title: "Insights from the AI engineering frontier"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "text-sm text-accent hover:underline inline-flex items-center gap-1", children: [
        "All insights ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-2", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border/60 bg-surface/40 px-3 py-1 text-xs text-muted-foreground", children: c }, c)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-px bg-border/30 border border-border/40 rounded-xl overflow-hidden md:grid-cols-2 lg:grid-cols-3", children: articles.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4, delay: i * 0.05 },
        className: "group bg-background p-6 hover:bg-surface/60 transition-colors cursor-pointer",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-accent font-mono", children: a.cat }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-lg font-semibold text-foreground leading-snug group-hover:text-accent transition-colors", children: a.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: a.read }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" })
          ] })
        ]
      },
      a.title
    )) })
  ] }) });
}
export {
  Insights as I
};
