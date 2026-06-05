import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTemplate, type SectionData } from "@/components/site/SectionTemplate";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/platform")({
  component: PlatformPage,
});

const platformData: SectionData[] = [
  {
    title: "GPU-phi Cloud-Neutral Orchestration",
    description: "The autonomous brain for your AI infrastructure",
    introduction: "GPU-phi is our proprietary, cloud-neutral orchestration platform designed to sit above your diverse infrastructure—whether on-premise, multi-cloud, or edge—to provide unified governance, extreme resilience, and intelligent resource allocation.",
    capabilities: [
      "Cloud-neutral multi-cluster management (AWS, GCP, Azure, CoreWeave)",
      "Real-time cluster telemetry and DCGM integration",
      "Dynamic multi-tenant policy enforcement (MIG/vGPU)",
      "Automated workload profiling and matching"
    ],
    solutions: [
      "Single-pane-of-glass infrastructure dashboards",
      "Automated spot instance lifecycle management",
      "Predictive node failure isolation and self-healing",
      "Unified AI identity and access management (IAM)"
    ],
    useCases: [
      "Enterprises migrating from single-cloud to multi-cloud AI",
      "Internal platform engineering teams building self-service AI",
      "Large-scale deployments requiring extreme fault tolerance"
    ],
    outcomes: [
      "Eliminate cloud vendor lock-in and optimize pricing leverage",
      "Transform disparate clusters into a single, cohesive supercomputer",
      "Drastically reduce the operational burden on DevOps/MLOps teams"
    ],
    metrics: [
      { label: "Management Overhead", value: "-60%" },
      { label: "Platform Uptime", value: "99.99%" },
      { label: "Cross-Cloud Latency", value: "Optimized" },
      { label: "Resource Waste", value: "< 2%" }
    ]
  }
];

function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="The GPU-phi Platform"
        title={
          <>
            Autonomous AI <br />
            <span className="text-accent">Infrastructure Orchestration</span>
          </>
        }
        description="Discover the intelligence behind our enterprise-scale optimizations. The GPU-phi platform delivers cloud-neutral scheduling, advanced GPU FinOps, and self-healing resilience for the modern AI data center."
      />

      <div className="bg-background">
        {platformData.map((data, index) => (
          <SectionTemplate key={index} data={data} />
        ))}
      </div>

      <CTA />
    </>
  );
}
