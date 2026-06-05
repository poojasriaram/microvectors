import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/CTA";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, BarChart3, Target, Zap } from "lucide-react";

export const Route = createFileRoute("/offerings")({
  component: OfferingsPage,
});

interface OfferingDetail {
  title: string;
  subtitle?: string;
  description: string;
  keySituations: string[];
  keyStatistics: string[];
  offeringValue: string;
  expectedOutcomes: string[];
}

const detailedOfferings: OfferingDetail[] = [
  {
    title: "1. Mega-Scale Data Center & Network Fabric Optimization",
    subtitle: "(Primarily for 10,000+ GPU deployments)",
    description: "End-to-end design and optimization of massive GPU supercomputing facilities, focusing on high-speed InfiniBand/RoCEv2 fabrics, GPUDirect Storage, advanced power/thermal management (including liquid cooling), and resilience at multi-megawatt scale for Blackwell-era clusters.",
    keySituations: [
      "Scaling to 10,000+ GPUs with efficiency collapse due to network contention or inter-switch latency.",
      "Power and cooling constraints limiting rack density (60-120 kW/rack).",
      "Low sustained utilization in hyperscale or sovereign AI training clusters.",
      "Need for near-linear scaling and minimal downtime in national-scale AI infrastructure."
    ],
    keyStatistics: [
      "Scaling efficiency: 95-97%+ in collective operations.",
      "GPU utilization lift: 35-50% → 85-95%+.",
      "Storage throughput: 2-8x improvement.",
      "Power efficiency: 15-40% gains via dynamic profiles, liquid cooling, and DPUs.",
      "Throughput increase in power-constrained environments: Up to 13%.",
      "TCO reduction: 25-40%+ at scale.",
      "Cluster downtime: <1-5% with asynchronous checkpointing.",
      "Energy savings: 20-30%+ per workload."
    ],
    offeringValue: "Maximizes return on massive CapEx investments by eliminating bottlenecks and enabling saturated, reliable operation. Supports highest power densities while meeting strict energy envelopes.",
    expectedOutcomes: [
      "World-class, near-linear scaling AI supercomputers.",
      "Significant CapEx deferral (30-50% fewer nodes/racks), OpEx reduction in power/cooling, and short-term utilization lifts.",
      "Competitive infrastructure for hyperscalers and sovereign AI initiatives with superior FLOPS-per-watt and TCO."
    ]
  },
  {
    title: "2. Enterprise-Scale GPU Platform Transformation & Automation",
    subtitle: "(For corporate data centers with hundreds to thousands of GPUs)",
    description: "Company-wide GPU platform with topology-aware scheduling, secure multi-tenancy (MIG/vGPU), self-healing via DCGM telemetry, and unified governance for shared internal AI resources.",
    keySituations: [
      "Fragmented GPU usage across business units with high idle time and resource contention.",
      "Frequent job failures disrupting R&D or production pipelines.",
      "Need for secure, chargeback-enabled shared access without noisy neighbors.",
      "Hybrid on-prem/cloud environments requiring consistent policies."
    ],
    keyStatistics: [
      "Cluster utilization: 30-50% → 80-95%+.",
      "Idle waste reduction: Down to ~1% in optimized environments.",
      "Multi-tenant capacity: 3-3.5x+.",
      "Downtime from failures: 70%+ reduction.",
      "Provisioning time: Days → minutes.",
      "Overall TCO improvement: 40-60% at enterprise scale.",
      "Cost visibility: Per-team/per-workload unit economics."
    ],
    offeringValue: "Converts fragmented, inefficient GPU resources into a reliable internal AI platform, reducing engineer friction and enabling governed, high-utilization computing.",
    expectedOutcomes: [
      "Self-service, highly utilized enterprise GPU cloud.",
      "Short-term cost relief, CapEx optimization through better packing, and sustained OpEx savings.",
      "Faster AI adoption across departments with strong governance and security."
    ]
  },
  {
    title: "3. Low-Level Kernel & Whitebox Optimization",
    description: "Deep custom CUDA/ROCm kernel development, compiler fusions, and memory hierarchy optimizations for maximum hardware efficiency on proprietary or performance-critical code.",
    keySituations: [
      "Novel architectures or proprietary layers underperforming due to framework abstraction overhead.",
      "Memory walls limiting context length or model size in large-scale training.",
      "Latency-critical workloads in HFT, defense, or scientific simulation.",
      "Foundational model developers seeking competitive edges."
    ],
    keyStatistics: [
      "Kernel speedups: 30-70%+ over defaults.",
      "Memory efficiency: 2-4x with FlashAttention-3 / PagedAttention.",
      "Latency reduction: 20-50%+ via fusion.",
      "Hardware utilization: Approaching 90%+ of theoretical peaks.",
      "Overall performance: 2-4x on targeted operations.",
      "Energy efficiency per operation: Significant gains."
    ],
    offeringValue: "Delivers proprietary performance advantages and unlocks capabilities not achievable with standard tools, directly improving model quality, speed, and cost.",
    expectedOutcomes: [
      "Peak-efficiency models with lower runtime costs.",
      "CapEx/OpEx reductions (fewer GPUs or lower power per workload).",
      "Sustainable competitive advantage for advanced AI R&D teams."
    ]
  },
  {
    title: "4. Applied GPU Acceleration & Distributed Workloads",
    description: "Multi-dimensional parallelism, inference optimization (TensorRT-LLM, vLLM), quantization, and GPU-native pipelines for training and serving large-scale models.",
    keySituations: [
      "Large models (70B+) failing to scale across clusters.",
      "High inference latency degrading user experience.",
      "Multimodal or real-time workloads (vision, genomics, recommendations).",
      "Transitioning research prototypes to production."
    ],
    keyStatistics: [
      "Inference throughput: 4-8x+ gains.",
      "Latency reduction: 28-69%+ (multi-second to sub-second).",
      "Cost-per-token: 50-80%+ reduction.",
      "Stable large-model training and serving.",
      "Multimodal pipeline acceleration: GPU-native, CPU-bypass.",
      "End-to-end efficiency: 2-5x in hybrid workloads."
    ],
    offeringValue: "Enables reliable, high-throughput production deployment while dramatically improving economics and user experience.",
    expectedOutcomes: [
      "Scalable, cost-effective AI applications.",
      "Short-term inference savings, optimized cluster sizing (CapEx), and lower ongoing serving costs (OpEx).",
      "Accelerated time-to-market for enterprise GenAI products."
    ]
  },
  {
    title: "5. GPU FinOps & Cost-Performance Diagnostics",
    description: "Auditing, SKU right-sizing, spot/preemptible strategies, idle elimination, and unit-economic dashboards to align GPU spend with business value.",
    keySituations: [
      "Rapidly escalating cloud or infrastructure bills.",
      "Poor visibility into ROI across teams or workloads.",
      "Need to safely leverage discounted instances for large jobs.",
      "Margin pressure in growth-stage or regulated environments."
    ],
    keyStatistics: [
      "Overall cost reduction: 40-70%+.",
      "Spot savings: 70-90% with proper checkpointing.",
      "Utilization-driven savings: 30-50%+ via rightsizing and idle elimination.",
      "TCO visibility: Granular per-token/per-user metrics."
    ],
    offeringValue: "Transforms GPU infrastructure from a opaque cost center into a transparent, optimized asset with strong financial governance.",
    expectedOutcomes: [
      "Controlled, high-ROI AI spending.",
      "Immediate cost relief, deferred CapEx, and sustainable OpEx management.",
      "Better margins and confident scaling decisions."
    ]
  },
  {
    title: "6. Workload-Specific Optimization Packages",
    subtitle: "(Applicable to both large-scale and enterprise environments)",
    description: "Tailored optimization for dominant workloads: LLM Training/Inference, Computer Vision/Multimodal, Scientific HPC, Genomics, Recommendation Systems, etc.",
    keySituations: [
      "LLM inference dominating costs with high latency or poor throughput.",
      "Specialized pipelines (e.g., video processing, molecular simulation) underperforming.",
      "Need for workload-tuned clusters rather than generic infrastructure."
    ],
    keyStatistics: [
      "LLM tokens/sec: 4-8x+ with disaggregated serving and quantization.",
      "Cost-per-token: 50-80% reduction.",
      "Domain acceleration: 2-5x in vision, genomics, or simulation pipelines.",
      "Utilization: 80-95% workload-tuned.",
      "Latency: Sub-second real-time performance."
    ],
    offeringValue: "Precision-tuned performance and economics for your primary use cases, delivering faster results than generic approaches.",
    expectedOutcomes: [
      "Optimized, production-grade pipelines for specific workloads.",
      "Maximum efficiency and ROI tailored to your dominant AI applications."
    ]
  }
];

function DetailedOfferingSection({ data }: { data: OfferingDetail }) {
  return (
    <div className="py-24 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gradient mb-2">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-accent font-medium text-lg">{data.subtitle}</p>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                1. Description
              </h3>
              <p className="text-lg text-muted-foreground">
                {data.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-accent" />
                2. Key Situations
              </h3>
              <ul className="space-y-3">
                {data.keySituations.map((sit, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 mt-2" />
                    <span>{sit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-emerald-500" />
                4. Offering Value and Benefits
              </h3>
              <p className="text-lg text-muted-foreground border-l-2 border-emerald-500/50 pl-4 py-2 italic bg-emerald-500/5 rounded-r-lg">
                {data.offeringValue}
              </p>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border/60 bg-surface/40 p-8"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                3. Key Statistics and Outcomes
              </h3>
              <ul className="space-y-4">
                {data.keyStatistics.map((stat, i) => (
                  <li key={i} className="flex gap-3 text-foreground font-medium">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{stat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                5. Expected Outcomes
              </h3>
              <ul className="space-y-4">
                {data.expectedOutcomes.map((out, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">{out}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OfferingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Professional Service Portfolio – 2026"
        title={
          <>
            GPU Optimization & <br />
            AI Infrastructure <span className="text-accent">Offerings</span>
          </>
        }
        description="Tailored solutions for Large-Scale Data Centers (10,000+ GPUs: sovereign AI, hyperscalers, national initiatives) and Enterprise-Scale Data Centers (hundreds to several thousand GPUs). Offerings also include Workload-Specific Optimizations for dominant AI use cases."
      />

      <div className="bg-background">
        {detailedOfferings.map((data, index) => (
          <DetailedOfferingSection key={index} data={data} />
        ))}
      </div>

      <div className="py-24 bg-surface/20 border-b border-border/40 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
            Implementation Approach
          </h2>
          <p className="text-lg text-muted-foreground">
            Offerings can be engaged modularly or as integrated full-stack programs. We tailor solutions precisely to your scale (mega vs. enterprise), power constraints, and primary workloads.
            Contact us for a complimentary assessment and customized roadmap.
          </p>
        </div>
      </div>

      <CTA />
    </>
  );
}
