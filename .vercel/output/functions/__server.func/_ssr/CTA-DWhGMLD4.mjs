import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./router-jpP7felp.mjs";
import { A as ArrowRight, x as ClipboardCheck } from "../_libs/lucide-react.mjs";
function CTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-border/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[800px] rounded-full bg-primary/20 blur-[100px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl px-6 py-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight text-gradient max-w-3xl mx-auto", children: "Transform AI Investments into Enterprise Capabilities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed", children: "Whether you are optimizing GPU infrastructure, deploying autonomous agents, modernizing AI operations, or building enterprise-scale AI platforms, TRUSTGRID.AI provides the engineering expertise required to accelerate results." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "bg-primary hover:bg-primary/90 text-primary-foreground font-medium glow-primary group", children: [
          "Schedule an Executive Strategy Session",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", variant: "outline", className: "border-border bg-surface/40 hover:bg-surface text-foreground backdrop-blur flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardCheck, { className: "h-4 w-4" }),
          "Request a Technical Assessment"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-sm font-semibold text-accent tracking-wider uppercase font-mono", children: "TRUSTGRID.AI — Engineering the Future of Intelligent Enterprises." })
    ] })
  ] });
}
export {
  CTA as C
};
