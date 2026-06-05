import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTemplate, type SectionData } from "@/components/site/SectionTemplate";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/capabilities")({
  component: CapabilitiesPage,
});

const capabilitiesData: SectionData[] = [
  {
    title: "GPU Optimization",
    description: "Maximum hardware throughput and efficiency",
    introduction: "We empower enterprises to achieve peak hardware efficiency through comprehensive Black-Box Optimization (autonomous workload tuning) and White-Box Optimization (transparent kernel profiling).",
    capabilities: [
      "Kernel-level tuning and custom CUDA deployment",
      "Advanced CUDA stream concurrency",
      "TensorRT graph fusion optimization",
      "NCCL topology optimization for multi-GPU communication"
    ],
    solutions: [
      "Automated workload profiling and tuning",
      "Transparent white-box kernel acceleration",
      "Autonomous black-box workload orchestration",
      "Hybrid scaling architectures"
    ],
    useCases: [
      "Real-time inference pipelines requiring ultra-low latency",
      "Large-scale distributed training clusters",
      "Complex computational modeling in HFT and research"
    ],
    outcomes: [
      "Dramatically accelerate workload processing speeds",
      "Significant latency reduction across enterprise applications",
      "Massive throughput gains and hard cost savings"
    ],
    metrics: [
      { label: "Performance Gains", value: "3-15x" },
      { label: "Cost Reduction", value: "40-75%" },
      { label: "Latency Reduction", value: "50%+" },
      { label: "Hardware Utilization", value: "95%" }
    ]
  },
  {
    title: "Cloud GPU Optimization",
    description: "Cloud-neutral multi-cluster orchestration",
    introduction: "Positioning the GPU-phi platform as cloud-neutral and enterprise-ready, we transform fragmented multi-cloud deployments into unified, cost-aware AI factories.",
    capabilities: [
      "Seamless multi-cloud cluster orchestration",
      "Advanced GPU autoscaling with Kubernetes and Ray",
      "Enterprise-grade GPU FinOps strategies",
      "Cross-region workload mobility"
    ],
    solutions: [
      "Cloud-neutral GPU-phi orchestration integration",
      "Automated cost-aware scheduling policies",
      "Dynamic instance provisioning algorithms",
      "Multi-tenant resource isolation"
    ],
    useCases: [
      "Enterprise multi-cloud AI adoption",
      "Global scaling of real-time AI services",
      "Mitigating cloud vendor lock-in strategies"
    ],
    outcomes: [
      "Significantly faster deployment cycles",
      "Unmatched resilience with zero downtime updates",
      "Drastic reduction in cloud infrastructure spending"
    ],
    metrics: [
      { label: "Deployment Speed", value: "5x Faster" },
      { label: "Infrastructure Savings", value: "50%+" },
      { label: "Downtime", value: "Zero" },
      { label: "Cloud Flexibility", value: "100%" }
    ]
  },
  {
    title: "LLM Optimization",
    description: "Accelerating GenAI inference and training",
    introduction: "Unlock the full potential of Large Language Models with specialized hybrid black-box and white-box optimizations that reduce inference costs while accelerating response times.",
    capabilities: [
      "Parameter-Efficient Fine-Tuning (LoRA, QLoRA)",
      "Advanced model quantization (INT8/FP16/AWQ)",
      "Highly distributed inference pipeline orchestration",
      "Context-window memory management"
    ],
    solutions: [
      "Disaggregated serving architectures for LLMs",
      "Hybrid black-box + white-box scaling",
      "Custom kernel integration for transformer blocks",
      "RAG pipeline acceleration"
    ],
    useCases: [
      "Enterprise customer support conversational bots",
      "Automated compliance monitoring and document QA",
      "Real-time predictive analytics and decision engines"
    ],
    outcomes: [
      "Drastically reduces per-token inference cost",
      "Accelerates response times for fluid user experiences",
      "Empowers secure, on-premise foundation model deployment"
    ],
    metrics: [
      { label: "Inference Speed", value: "70% Faster" },
      { label: "Memory Footprint", value: "-60%" },
      { label: "Cost Per Token", value: "-80%" },
      { label: "Throughput", value: "4-8x+" }
    ]
  },
  {
    title: "AI Optimization",
    description: "Intelligent orchestration for AI infrastructure",
    introduction: "Emphasize workload orchestration across heterogeneous GPU clusters with AI-driven scheduling, predictive resource allocation, and automated scaling that guarantees resilience.",
    capabilities: [
      "Heterogeneous GPU cluster workload orchestration",
      "AI-driven workload scheduling algorithms",
      "Predictive resource allocation and capacity planning",
      "Automated and autonomous scaling frameworks"
    ],
    solutions: [
      "Autonomous resilience frameworks",
      "Intelligent capacity forecasting dashboards",
      "Continuous integration/deployment (CI/CD) for ML models",
      "Dynamic priority-based queue management"
    ],
    useCases: [
      "Foundational model training across diverse hardware",
      "Heterogeneous enterprise cluster management",
      "High-throughput internal AI R&D platforms"
    ],
    outcomes: [
      "ROI-driven outcomes with significantly faster model training",
      "Reduced energy consumption across the data center",
      "Improved resilience and fault tolerance for critical workloads"
    ],
    metrics: [
      { label: "Model Training", value: "3x Faster" },
      { label: "Energy Consumption", value: "-40%" },
      { label: "Cluster Uptime", value: "99.99%" },
      { label: "Job Completion", value: "99%+" }
    ]
  },
  {
    title: "Data Center Network Automation",
    description: "Sub-microsecond latency at multi-megawatt scale",
    introduction: "Eliminate network bottlenecks with AI-driven routing controllers, RDMA over InfiniBand, and NVLink topology optimization for autonomous, highly resilient orchestration.",
    capabilities: [
      "RDMA over InfiniBand architectural design",
      "NVLink topology optimization for massive scale",
      "AI-driven routing controllers and traffic management",
      "Adaptive network reflex layers"
    ],
    solutions: [
      "Autonomous network orchestration platforms",
      "Adaptive routing dashboards with real-time telemetry",
      "Congestion control and automated load balancing",
      "Resilient leaf-spine fabric configurations"
    ],
    useCases: [
      "Hyperscale AI training data center networking",
      "Low-latency financial trading (HFT) infrastructure",
      "National sovereign AI computing grid deployments"
    ],
    outcomes: [
      "Achieve absolute sub-microsecond latency",
      "Guarantee 99.9% uptime for business-critical operations",
      "Transform rigid networks into adaptive, self-healing fabrics"
    ],
    metrics: [
      { label: "Network Latency", value: "< 1μs" },
      { label: "Network Uptime", value: "99.9%" },
      { label: "Bandwidth Utilization", value: "95%+" },
      { label: "Packet Loss", value: "Near-Zero" }
    ]
  },
  {
    title: "Energy Optimization",
    description: "Sustainable AI scaling with ESG compliance",
    introduction: "Drive sustainable AI growth through energy-aware scheduling, comprehensive GPU FinOps dashboards, and automated thermal management that aligns with corporate ESG standards.",
    capabilities: [
      "Energy-aware workload scheduling algorithms",
      "Real-time GPU FinOps and sustainability dashboards",
      "Comprehensive sustainability metrics tracking",
      "Dynamic power capping and thermal profiling"
    ],
    solutions: [
      "ESG compliance reporting suites",
      "Intelligent workload time-shifting for off-peak execution",
      "Liquid cooling integration and management",
      "Carbon footprint reduction automation"
    ],
    useCases: [
      "Enterprise sustainability initiatives and ESG mandates",
      "Power-constrained data center environments",
      "Green AI research and development facilities"
    ],
    outcomes: [
      "Massively reduced total power consumption",
      "Proven carbon footprint reduction for enterprise reporting",
      "Strict compliance with evolving ESG standards and regulations"
    ],
    metrics: [
      { label: "Power Consumption", value: "-30%" },
      { label: "ESG Compliance", value: "100%" },
      { label: "Carbon Footprint", value: "-45%" },
      { label: "Cooling Efficiency", value: "2x" }
    ]
  }
];

function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Core Competencies"
        title={
          <>
            Enterprise AI & <br />
            Infrastructure <span className="text-accent">Capabilities</span>
          </>
        }
        description="From low-level kernel tuning to mega-scale network automation, we provide the technical capabilities necessary to transform risk into resilience and empower the modern AI enterprise."
      />

      <div className="bg-background">
        {capabilitiesData.map((data, index) => (
          <SectionTemplate key={index} data={data} />
        ))}
      </div>

      <CTA />
    </>
  );
}
