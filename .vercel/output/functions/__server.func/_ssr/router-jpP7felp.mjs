import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { C as ChevronDown, A as ArrowRight, a as Cpu, Z as Zap, B as Bot, b as Brain, S as Sparkles, c as Shield, I as Info, F as FileText, M as Mail, X, d as Menu } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
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
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-CJ57TWPk.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const serviceLinks = [
  {
    to: "/ai-infrastructure-engineering",
    label: "AI Infrastructure",
    desc: "Kubernetes, MLOps, cloud design",
    icon: Cpu
  },
  {
    to: "/gpu-performance-engineering",
    label: "GPU Performance",
    desc: "CUDA kernel & cluster optimization",
    icon: Zap
  },
  {
    to: "/agentic-ai-development",
    label: "Agentic AI",
    desc: "Autonomous workflow orchestrations",
    icon: Bot
  },
  {
    to: "/long-memory-ai-systems",
    label: "Long-Memory AI",
    desc: "Vector databases & knowledge graphs",
    icon: Brain
  },
  {
    to: "/services",
    label: "Generative AI",
    desc: "Enterprise RAG & multi-modal platforms",
    icon: Sparkles
  },
  {
    to: "/ai-security",
    label: "AI Security",
    desc: "Zero Trust architecture & compliance",
    icon: Shield
  }
];
const companyLinks = [
  {
    to: "/about",
    label: "About TrustGrid.AI",
    desc: "Our mandate, team and operations",
    icon: Info
  },
  {
    to: "/case-studies",
    label: "Case Studies",
    desc: "Engineered outcomes in production",
    icon: FileText
  },
  {
    to: "/blog",
    label: "Insights",
    desc: "Latest AI engineering research",
    icon: Sparkles
  },
  {
    to: "/contact",
    label: "Contact Us",
    desc: "Schedule strategy consultations",
    icon: Mail
  }
];
function Header() {
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  const [activeMenu, setActiveMenu] = reactExports.useState(null);
  const timeoutRef = reactExports.useRef(null);
  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };
  reactExports.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center group mr-8", onClick: () => setActiveMenu(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xl font-semibold tracking-tight", children: [
        "TRUSTGRID",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: ".AI" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/",
            className: "text-base font-medium text-muted-foreground transition-colors hover:text-foreground px-2 py-1 rounded-md",
            activeProps: { className: "text-foreground bg-surface/40" },
            onClick: () => setActiveMenu(null),
            children: "Home"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative",
            onMouseEnter: () => handleMouseEnter("services"),
            onMouseLeave: handleMouseLeave,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-1 text-base font-medium text-muted-foreground transition-colors hover:text-foreground px-2 py-1", children: [
                "Services",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-3.5 w-3.5 transition-transform duration-200 ${activeMenu === "services" ? "rotate-180 text-accent" : ""}` })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: activeMenu === "services" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 10, scale: 0.98 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  exit: { opacity: 0, y: 10, scale: 0.98 },
                  transition: { duration: 0.15 },
                  className: "absolute left-1/2 -translate-x-1/2 top-full pt-4 z-50 w-[540px]",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 bg-background p-5 shadow-2xl grid grid-cols-2 gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 pb-2 mb-2 border-b border-border/40 flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-accent font-semibold", children: "Capabilities Portfolio" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "text-xs text-muted-foreground hover:text-accent flex items-center gap-0.5", onClick: () => setActiveMenu(null), children: [
                        "All Services ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
                      ] })
                    ] }),
                    serviceLinks.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: s.to,
                        onClick: () => setActiveMenu(null),
                        className: "group flex gap-3 p-3 rounded-lg hover:bg-surface/50 border border-transparent hover:border-border/40 transition-all",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-md bg-primary/10 border border-primary/20 grid place-items-center text-accent group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-4.5 w-4.5" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground group-hover:text-accent transition-colors", children: s.label }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5 leading-normal", children: s.desc })
                          ] })
                        ]
                      },
                      s.to
                    ))
                  ] })
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/case-studies",
            className: "text-base font-medium text-muted-foreground transition-colors hover:text-foreground px-2 py-1 rounded-md",
            activeProps: { className: "text-foreground bg-surface/40" },
            onClick: () => setActiveMenu(null),
            children: "Case Studies"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/blog",
            className: "text-base font-medium text-muted-foreground transition-colors hover:text-foreground px-2 py-1 rounded-md",
            activeProps: { className: "text-foreground bg-surface/40" },
            onClick: () => setActiveMenu(null),
            children: "Insights"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative",
            onMouseEnter: () => handleMouseEnter("company"),
            onMouseLeave: handleMouseLeave,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-1 text-base font-medium text-muted-foreground transition-colors hover:text-foreground px-2 py-1", children: [
                "Company",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-3.5 w-3.5 transition-transform duration-200 ${activeMenu === "company" ? "rotate-180 text-accent" : ""}` })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: activeMenu === "company" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 10, scale: 0.98 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  exit: { opacity: 0, y: 10, scale: 0.98 },
                  transition: { duration: 0.15 },
                  className: "absolute left-0 top-full pt-4 z-50 w-[300px]",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border/60 bg-background p-4 shadow-2xl flex flex-col gap-2", children: companyLinks.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: c.to,
                      onClick: () => setActiveMenu(null),
                      className: "group flex gap-3 p-2.5 rounded-lg hover:bg-surface/50 border border-transparent hover:border-border/40 transition-all",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-md bg-primary/10 border border-primary/20 grid place-items-center text-accent group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-4 w-4" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-foreground group-hover:text-accent transition-colors", children: c.label }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5 leading-normal", children: c.desc })
                        ] })
                      ]
                    },
                    c.to
                  )) })
                }
              ) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "default", className: "bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base", children: "Book Strategy Session" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "md:hidden p-2 text-foreground",
            onClick: () => setMobileOpen((v) => !v),
            "aria-label": "Toggle menu",
            children: mobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
          }
        )
      ] })
    ] }),
    mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden border-t border-border/40 bg-background max-h-[85vh] overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-6 flex flex-col gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/",
          onClick: () => setMobileOpen(false),
          className: "text-base font-medium text-muted-foreground hover:text-foreground",
          children: "Home"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-accent font-semibold mb-3", children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3.5 pl-2", children: serviceLinks.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: s.to,
            onClick: () => setMobileOpen(false),
            className: "flex items-center gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-4 w-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base text-foreground hover:text-accent", children: s.label })
            ]
          },
          s.to
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-accent font-semibold mb-3", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3.5 pl-2", children: companyLinks.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: c.to,
            onClick: () => setMobileOpen(false),
            className: "flex items-center gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-4 w-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base text-foreground hover:text-accent", children: c.label })
            ]
          },
          c.to
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", onClick: () => setMobileOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "default", className: "w-full bg-primary text-primary-foreground text-base", children: "Book Strategy Session" }) })
    ] }) })
  ] });
}
const cols = [
  {
    title: "Services",
    links: [
      { to: "/ai-infrastructure-engineering", label: "AI Infrastructure" },
      { to: "/gpu-performance-engineering", label: "GPU Engineering" },
      { to: "/agentic-ai-development", label: "Agentic AI" },
      { to: "/multi-agent-systems", label: "Multi-Agent Systems" },
      { to: "/long-memory-ai-systems", label: "Long-Memory AI" },
      { to: "/llmops-services", label: "LLMOps" },
      { to: "/agentops-services", label: "AgentOps" },
      { to: "/ai-security", label: "AI Security" }
    ]
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/case-studies", label: "Case Studies" },
      { to: "/blog", label: "Insights" },
      { to: "/contact", label: "Contact" }
    ]
  },
  {
    title: "Industries",
    links: [
      { to: "/services", label: "Financial Services" },
      { to: "/services", label: "Healthcare" },
      { to: "/services", label: "Government & Defense" },
      { to: "/services", label: "Manufacturing" }
    ]
  }
];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border/40 bg-surface/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-base font-semibold", children: [
          "TRUSTGRID",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: ".AI" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground max-w-xs", children: "Full-Spectrum AI Engineering. From GPUs to autonomous enterprises." })
      ] }),
      cols.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-semibold uppercase tracking-wider text-foreground/80 mb-4", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: c.links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: "text-sm text-muted-foreground hover:text-foreground transition-colors", children: l.label }) }, l.label)) })
      ] }, c.title))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " TrustGrid.AI. Engineering AI systems that scale."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "5 Global Delivery Centers · 24/7 Enterprise Support" })
    ] })
  ] }) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-dvh items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-gradient", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-dvh items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong. Try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$f = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TrustGrid.AI — Full-Spectrum AI Engineering for the Enterprise" },
      {
        name: "description",
        content: "TrustGrid.AI designs, builds, optimizes and secures enterprise AI infrastructure, GPU clusters, Agentic AI systems and autonomous business operations."
      },
      { name: "author", content: "TrustGrid.AI" },
      { name: "theme-color", content: "#050505" },
      { property: "og:site_name", content: "TrustGrid.AI" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "TrustGrid.AI — Full-Spectrum AI Engineering" },
      {
        property: "og:description",
        content: "Engineering AI systems that scale from GPUs to autonomous enterprises."
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@TrustGridAI" },
      { name: "twitter:title", content: "TrustGrid.AI — Full-Spectrum AI Engineering" },
      {
        name: "twitter:description",
        content: "Engineering AI systems that scale from GPUs to autonomous enterprises."
      }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "TrustGrid.AI",
          description: "Full-Spectrum AI Engineering Company specializing in AI infrastructure, GPU performance engineering, Agentic AI, multi-agent systems and enterprise AI security.",
          url: "/",
          sameAs: []
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$f.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-dvh flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) });
}
const BASE_URL = "";
const paths = [
  "/",
  "/about",
  "/services",
  "/gpu-performance-engineering",
  "/agentic-ai-development",
  "/multi-agent-systems",
  "/ai-infrastructure-engineering",
  "/long-memory-ai-systems",
  "/llmops-services",
  "/agentops-services",
  "/ai-security",
  "/case-studies",
  "/blog",
  "/contact"
];
const Route$e = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = paths.map(
          (p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.8"}</priority></url>`
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$d = () => import("./services-5eUilHf_.mjs");
const Route$d = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — Enterprise AI Engineering | TrustGrid.AI"
    }, {
      name: "description",
      content: "Full-Spectrum AI Engineering services: AI infrastructure, GPU performance engineering, Agentic AI, multi-agent systems, long-memory AI, LLMOps, AgentOps and AI security."
    }, {
      property: "og:title",
      content: "Enterprise AI Engineering Services"
    }, {
      property: "og:description",
      content: "Eight integrated capability domains for Fortune 500 AI engineering."
    }, {
      property: "og:url",
      content: "/services"
    }],
    links: [{
      rel: "canonical",
      href: "/services"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./multi-agent-systems-DxN9JYE7.mjs");
const Route$c = createFileRoute("/multi-agent-systems")({
  head: () => ({
    meta: [{
      title: "Multi-Agent Systems — Orchestrated AI Fleets | TrustGrid.AI"
    }, {
      name: "description",
      content: "Coordinate fleets of specialized AI agents to deliver complex enterprise outcomes. Routing, planning, debate and consensus at production scale."
    }, {
      property: "og:title",
      content: "Multi-Agent Systems | TrustGrid.AI"
    }, {
      property: "og:description",
      content: "Orchestrated agent fleets for autonomous enterprise operations."
    }, {
      property: "og:url",
      content: "/multi-agent-systems"
    }],
    links: [{
      rel: "canonical",
      href: "/multi-agent-systems"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./long-memory-ai-systems-COqSQ_oD.mjs");
const Route$b = createFileRoute("/long-memory-ai-systems")({
  head: () => ({
    meta: [{
      title: "Long-Memory AI Systems — Knowledge Across Years | TrustGrid.AI"
    }, {
      name: "description",
      content: "Engineer AI systems that retain knowledge across years instead of conversations. Vector databases, knowledge graphs, RAG and semantic search."
    }, {
      property: "og:title",
      content: "Long-Memory AI Systems | TrustGrid.AI"
    }, {
      property: "og:description",
      content: "AI memory architectures that span years of enterprise context."
    }, {
      property: "og:url",
      content: "/long-memory-ai-systems"
    }],
    links: [{
      rel: "canonical",
      href: "/long-memory-ai-systems"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./llmops-services-C3FQz0Tl.mjs");
const Route$a = createFileRoute("/llmops-services")({
  head: () => ({
    meta: [{
      title: "LLMOps Services — Production LLM Operations | TrustGrid.AI"
    }, {
      name: "description",
      content: "End-to-end LLMOps: prompt management, evaluation, fine-tuning, inference operations and observability for enterprise LLM deployments."
    }, {
      property: "og:title",
      content: "LLMOps Services | TrustGrid.AI"
    }, {
      property: "og:description",
      content: "Operate LLMs in production at Fortune 500 scale."
    }, {
      property: "og:url",
      content: "/llmops-services"
    }],
    links: [{
      rel: "canonical",
      href: "/llmops-services"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./gpu-performance-engineering-BaXx3Aku.mjs");
const Route$9 = createFileRoute("/gpu-performance-engineering")({
  head: () => ({
    meta: [{
      title: "GPU Performance Engineering — 3–15x Speedups | TrustGrid.AI"
    }, {
      name: "description",
      content: "Maximize AI infrastructure performance through CUDA optimization, TensorRT, quantization, NCCL tuning and multi-GPU scaling on NVIDIA H100."
    }, {
      property: "og:title",
      content: "GPU Performance Engineering | TrustGrid.AI"
    }, {
      property: "og:description",
      content: "3–15x speedups. 40–75% cost reduction. < 6 month ROI."
    }, {
      property: "og:url",
      content: "/gpu-performance-engineering"
    }],
    links: [{
      rel: "canonical",
      href: "/gpu-performance-engineering"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./contact-BzcLsyyh.mjs");
const Route$8 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Enterprise Consultation — TrustGrid.AI"
    }, {
      name: "description",
      content: "Schedule a strategy session with TrustGrid.AI principal engineers. Tailored capability assessment within 48 hours."
    }, {
      property: "og:title",
      content: "Enterprise Consultation — TrustGrid.AI"
    }, {
      property: "og:description",
      content: "Schedule a strategy session with TrustGrid.AI principal engineers."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./case-studies-CALDvQAZ.mjs");
const Route$7 = createFileRoute("/case-studies")({
  head: () => ({
    meta: [{
      title: "Case Studies — Enterprise AI Outcomes | TrustGrid.AI"
    }, {
      name: "description",
      content: "Production AI systems engineered by TrustGrid.AI for Fortune 500 enterprises and governments. Measurable outcomes in GPU performance, agentic AI and AI infrastructure."
    }, {
      property: "og:title",
      content: "Enterprise AI Case Studies"
    }, {
      property: "og:description",
      content: "Measured outcomes from production AI engagements."
    }, {
      property: "og:url",
      content: "/case-studies"
    }],
    links: [{
      rel: "canonical",
      href: "/case-studies"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./blog-C2C4YAQy.mjs");
const Route$6 = createFileRoute("/blog")({
  head: () => ({
    meta: [{
      title: "Insights — AI Engineering Thought Leadership | TrustGrid.AI"
    }, {
      name: "description",
      content: "Research and insights on Agentic AI, GPU performance engineering, AI infrastructure, MLOps, LLMOps, AgentOps and enterprise AI security."
    }, {
      property: "og:title",
      content: "TrustGrid.AI Insights"
    }, {
      property: "og:description",
      content: "Thought leadership from the AI engineering frontier."
    }, {
      property: "og:url",
      content: "/blog"
    }],
    links: [{
      rel: "canonical",
      href: "/blog"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./ai-security-Ddz5oYmm.mjs");
const Route$5 = createFileRoute("/ai-security")({
  head: () => ({
    meta: [{
      title: "AI Security & Governance — Zero Trust for AI | TrustGrid.AI"
    }, {
      name: "description",
      content: "Secure AI deployments with Zero Trust Architecture, confidential computing, IAM, compliance, audit trails and continuous security monitoring."
    }, {
      property: "og:title",
      content: "AI Security & Governance | TrustGrid.AI"
    }, {
      property: "og:description",
      content: "Enterprise-grade security and governance for production AI."
    }, {
      property: "og:url",
      content: "/ai-security"
    }],
    links: [{
      rel: "canonical",
      href: "/ai-security"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./ai-infrastructure-engineering-iCbMBkkr.mjs");
const Route$4 = createFileRoute("/ai-infrastructure-engineering")({
  head: () => ({
    meta: [{
      title: "AI Infrastructure Engineering — Cloud, Hybrid, On-Prem | TrustGrid.AI"
    }, {
      name: "description",
      content: "Design and operate AI-native infrastructure across cloud, hybrid and on-premise environments. Kubernetes, distributed AI, MLOps, LLMOps and FinOps."
    }, {
      property: "og:title",
      content: "AI Infrastructure Engineering | TrustGrid.AI"
    }, {
      property: "og:description",
      content: "AI-native infrastructure engineered for cost, scale and security."
    }, {
      property: "og:url",
      content: "/ai-infrastructure-engineering"
    }],
    links: [{
      rel: "canonical",
      href: "/ai-infrastructure-engineering"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./agentops-services-B6d8o8M7.mjs");
const Route$3 = createFileRoute("/agentops-services")({
  head: () => ({
    meta: [{
      title: "AgentOps Services — Operate Autonomous Agents | TrustGrid.AI"
    }, {
      name: "description",
      content: "AgentOps for production agent fleets: orchestration, observability, evaluation, cost control and governance for autonomous AI systems."
    }, {
      property: "og:title",
      content: "AgentOps Services | TrustGrid.AI"
    }, {
      property: "og:description",
      content: "Industrial operations for autonomous agent fleets."
    }, {
      property: "og:url",
      content: "/agentops-services"
    }],
    links: [{
      rel: "canonical",
      href: "/agentops-services"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./agentic-ai-development-7i-Shkrq.mjs");
const Route$2 = createFileRoute("/agentic-ai-development")({
  head: () => ({
    meta: [{
      title: "Agentic AI Development — Autonomous Systems | TrustGrid.AI"
    }, {
      name: "description",
      content: "Build autonomous AI agents capable of planning, reasoning, learning and acting across enterprise workflows. Single-agent and multi-agent systems."
    }, {
      property: "og:title",
      content: "Agentic AI Development | TrustGrid.AI"
    }, {
      property: "og:description",
      content: "Autonomous AI agents engineered for enterprise scale."
    }, {
      property: "og:url",
      content: "/agentic-ai-development"
    }],
    links: [{
      rel: "canonical",
      href: "/agentic-ai-development"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-pSdbToFx.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About TrustGrid.AI — Full-Spectrum AI Engineering Company"
    }, {
      name: "description",
      content: "TrustGrid.AI is a Full-Spectrum AI Engineering Company serving Fortune 500 organizations and governments across 20+ industries."
    }, {
      property: "og:title",
      content: "About TrustGrid.AI"
    }, {
      property: "og:description",
      content: "A Full-Spectrum AI Engineering Company serving the world's most demanding enterprises."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-COahMhBV.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "TrustGrid.AI — Engineering AI Systems That Scale From GPUs to Autonomous Enterprises"
    }, {
      name: "description",
      content: "Full-Spectrum AI Engineering. TrustGrid.AI designs, builds, optimizes and secures enterprise AI infrastructure, Agentic AI systems and autonomous business operations."
    }, {
      property: "og:title",
      content: "TrustGrid.AI — Full-Spectrum AI Engineering"
    }, {
      property: "og:description",
      content: "Engineering AI systems that scale from GPUs to autonomous enterprises."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$e.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$f
});
const ServicesRoute = Route$d.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$f
});
const MultiAgentSystemsRoute = Route$c.update({
  id: "/multi-agent-systems",
  path: "/multi-agent-systems",
  getParentRoute: () => Route$f
});
const LongMemoryAiSystemsRoute = Route$b.update({
  id: "/long-memory-ai-systems",
  path: "/long-memory-ai-systems",
  getParentRoute: () => Route$f
});
const LlmopsServicesRoute = Route$a.update({
  id: "/llmops-services",
  path: "/llmops-services",
  getParentRoute: () => Route$f
});
const GpuPerformanceEngineeringRoute = Route$9.update({
  id: "/gpu-performance-engineering",
  path: "/gpu-performance-engineering",
  getParentRoute: () => Route$f
});
const ContactRoute = Route$8.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$f
});
const CaseStudiesRoute = Route$7.update({
  id: "/case-studies",
  path: "/case-studies",
  getParentRoute: () => Route$f
});
const BlogRoute = Route$6.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$f
});
const AiSecurityRoute = Route$5.update({
  id: "/ai-security",
  path: "/ai-security",
  getParentRoute: () => Route$f
});
const AiInfrastructureEngineeringRoute = Route$4.update({
  id: "/ai-infrastructure-engineering",
  path: "/ai-infrastructure-engineering",
  getParentRoute: () => Route$f
});
const AgentopsServicesRoute = Route$3.update({
  id: "/agentops-services",
  path: "/agentops-services",
  getParentRoute: () => Route$f
});
const AgenticAiDevelopmentRoute = Route$2.update({
  id: "/agentic-ai-development",
  path: "/agentic-ai-development",
  getParentRoute: () => Route$f
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$f
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$f
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AgenticAiDevelopmentRoute,
  AgentopsServicesRoute,
  AiInfrastructureEngineeringRoute,
  AiSecurityRoute,
  BlogRoute,
  CaseStudiesRoute,
  ContactRoute,
  GpuPerformanceEngineeringRoute,
  LlmopsServicesRoute,
  LongMemoryAiSystemsRoute,
  MultiAgentSystemsRoute,
  ServicesRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$f._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  cn as c,
  router as r
};
