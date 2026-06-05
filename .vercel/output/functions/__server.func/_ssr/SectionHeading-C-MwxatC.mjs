import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl", children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "inline-flex items-center gap-2 mb-4 rounded-full border border-border/60 bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" }),
          eyebrow
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.h2,
      {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "text-3xl md:text-5xl font-semibold tracking-tight text-gradient",
        children: title
      }
    ),
    description && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: 0.1 },
        className: "mt-4 text-base md:text-lg text-muted-foreground",
        children: description
      }
    )
  ] });
}
export {
  SectionHeading as S
};
