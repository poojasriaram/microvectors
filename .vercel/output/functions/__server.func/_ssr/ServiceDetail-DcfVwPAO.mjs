import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-CAYPhn42.mjs";
import { C as CTA } from "./CTA-DWhGMLD4.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { f as Check } from "../_libs/lucide-react.mjs";
function ServiceDetail({ eyebrow, title, description, capabilities, stack, outcomes }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow, title, description }),
    outcomes && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border/40 bg-surface/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6", children: outcomes.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl md:text-4xl font-semibold text-gradient-primary font-display", children: o.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground", children: o.label })
    ] }, o.label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-semibold text-gradient", children: "Capabilities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-px bg-border/30 border border-border/40 rounded-xl overflow-hidden md:grid-cols-2", children: capabilities.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: i * 0.05 },
          className: "bg-background p-6",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-5 w-5 shrink-0 rounded-md bg-primary/15 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3 text-accent" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-foreground", children: c.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground leading-relaxed", children: c.desc })
            ] })
          ] })
        },
        c.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border/40 bg-surface/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-semibold text-gradient", children: "Technology stack" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-2", children: stack.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md border border-border/60 bg-surface/40 px-3 py-1.5 text-sm text-foreground/90", children: t }, t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {})
  ] });
}
export {
  ServiceDetail as S
};
