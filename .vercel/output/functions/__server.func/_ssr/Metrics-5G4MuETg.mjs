import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SectionHeading } from "./SectionHeading-C-MwxatC.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
const highlights = [
  {
    value: "8",
    label: "Integrated AI Engineering Domains",
    sub: "Delivering end-to-end AI capabilities from infrastructure to autonomous systems."
  },
  {
    value: "20+",
    label: "Industry Verticals",
    sub: "Deep experience across regulated and complex enterprise environments."
  },
  {
    value: "5",
    label: "Global Delivery Centers",
    sub: "24/7 engineering and operational support."
  },
  {
    value: "10x",
    label: "Faster Deployment",
    sub: "Accelerated implementation using proven frameworks and reusable architectures."
  }
];
const stats = [
  { value: "3–15x", label: "Performance Improvement" },
  { value: "40–75%", label: "Cost Reduction" },
  { value: "128+", label: "GPU Scaling" },
  { value: "24/7", label: "Global Support" }
];
function Metrics() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative border-b border-border/40 bg-surface/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Trust",
        title: "Trusted AI Engineering Across the Full Spectrum",
        description: "Organizations worldwide are investing billions into AI, yet many struggle with fragmented architectures, underutilized GPU infrastructure, disconnected data ecosystems, and AI initiatives that never reach production. TRUSTGRID.AI provides the engineering expertise required to transform AI investments into operational capabilities."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 rounded-xl overflow-hidden border border-border/40", children: highlights.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.08 },
        className: "bg-background p-6 md:p-8 group hover:bg-surface/60 transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl md:text-4xl font-semibold text-gradient-primary font-display", children: h.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm font-medium text-foreground/90", children: h.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs text-muted-foreground leading-relaxed", children: h.sub })
        ]
      },
      h.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 rounded-xl overflow-hidden border border-border/40", children: stats.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.05 },
        className: "bg-background p-6 md:p-8 group hover:bg-surface/60 transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl md:text-4xl font-semibold text-gradient-primary font-display", children: m.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs md:text-sm text-muted-foreground uppercase tracking-wider", children: m.label })
        ]
      },
      m.label
    )) })
  ] }) });
}
export {
  Metrics as M
};
