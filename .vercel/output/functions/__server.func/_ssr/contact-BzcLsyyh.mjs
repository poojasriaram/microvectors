import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-CAYPhn42.mjs";
import { u as useForm } from "../_libs/react-hook-form.mjs";
import { u } from "../_libs/hookform__resolvers.mjs";
import { B as Button, c as cn } from "./router-jpP7felp.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { E as Earth, M as Mail, P as Phone, e as CircleCheck, A as ArrowRight } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { o as object, s as string } from "../_libs/zod.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
const schema = object({
  name: string().trim().min(2, "Required").max(100),
  company: string().trim().min(2, "Required").max(150),
  email: string().trim().email("Invalid email").max(255),
  phone: string().trim().max(30).optional(),
  country: string().trim().min(2).max(80),
  industry: string().trim().max(80),
  budget: string().trim().max(80),
  description: string().trim().min(20, "Tell us a bit more").max(2e3)
});
function ContactForm() {
  const [done, setDone] = reactExports.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({ resolver: u(schema) });
  const onSubmit = async (_data) => {
    await new Promise((r) => setTimeout(r, 800));
    setDone(true);
  };
  if (done) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.96 },
        animate: { opacity: 1, scale: 1 },
        className: "rounded-xl border border-primary/30 bg-surface/40 p-10 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mx-auto h-12 w-12 text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-2xl font-semibold text-gradient", children: "Request received" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "An enterprise architect from TrustGrid.AI will reach out within one business day." })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      onSubmit: handleSubmit(onSubmit),
      className: "rounded-xl border border-border/60 bg-surface/40 backdrop-blur p-6 md:p-10 space-y-5",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name", error: errors.name?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...register("name"), className: "bg-background border-border", placeholder: "Jane Doe" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company", error: errors.company?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...register("company"), className: "bg-background border-border", placeholder: "Acme Corp" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Work Email", error: errors.email?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...register("email"), type: "email", className: "bg-background border-border", placeholder: "jane@acme.com" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", error: errors.phone?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...register("phone"), className: "bg-background border-border", placeholder: "+1 555 000 0000" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Country", error: errors.country?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...register("country"), className: "bg-background border-border", placeholder: "United States" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Industry", error: errors.industry?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...register("industry"), className: "bg-background border-border", placeholder: "Financial Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Project Budget", error: errors.budget?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              ...register("budget"),
              className: "flex h-9 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select range" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "$100K – $500K" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "$500K – $1M" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "$1M – $5M" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "$5M+" })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Project Description", error: errors.description?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            ...register("description"),
            className: "bg-background border-border min-h-32",
            placeholder: "Describe your AI initiative, current infrastructure, timeline, and success criteria."
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "submit",
            size: "lg",
            disabled: isSubmitting,
            className: "bg-primary hover:bg-primary/90 text-primary-foreground font-medium glow-primary group w-full md:w-auto",
            children: [
              "Schedule Enterprise Consultation",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" })
            ]
          }
        )
      ]
    }
  );
}
function Field({
  label,
  error,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs uppercase tracking-wider text-muted-foreground", children: label }),
    children,
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: error })
  ] });
}
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Contact", title: "Schedule an enterprise consultation", description: "Speak with a TrustGrid.AI principal engineer about your AI roadmap. Most enterprise engagements begin with a tailored 48-hour capability assessment." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-[1fr_400px] gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 bg-surface/30 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground uppercase tracking-wider", children: "Global Coverage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "h-4 w-4 text-accent" }),
              " 5 delivery centers worldwide"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-accent" }),
              " enterprise@trustgrid.ai"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-accent" }),
              " 24/7 enterprise support"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-accent uppercase tracking-wider", children: "For CTOs & CIOs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-foreground/90 leading-relaxed", children: "Engagements led by principal engineers with experience deploying production AI at Fortune 500 scale. All consultations are covered by a mutual NDA." })
        ] })
      ] })
    ] })
  ] });
}
export {
  ContactPage as component
};
