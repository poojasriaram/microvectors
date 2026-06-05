import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTemplate, type SectionData } from "@/components/site/SectionTemplate";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/solutions")({
  component: SolutionsPage,
});

const solutionsData: SectionData[] = [
  {
    title: "Enterprise AI Infrastructure Architecture",
    description: "End-to-end resilient AI systems",
    introduction: "We design and deploy robust AI infrastructure that transforms fragmented resources into a unified, secure, and highly scalable enterprise platform, engineered for strict compliance and maximum efficiency.",
    capabilities: [
      "Zero Trust security architecture for AI payloads",
      "Unified governance and policy enforcement",
      "Predictive anomaly detection and automated remediation",
      "Seamless integration with existing enterprise IT"
    ],
    solutions: [
      "Private Enterprise GPU Cloud implementation",
      "Federated learning infrastructure orchestration",
      "Compliance-ready data pipeline architectures",
      "Resilient disaster recovery and failover systems"
    ],
    useCases: [
      "Regulated industries (Finance, Healthcare, Defense)",
      "Global enterprises consolidating AI infrastructure",
      "Organizations transitioning from shadow AI to governed AI"
    ],
    outcomes: [
      "Mitigate enterprise risk with provable compliance",
      "Empower internal teams with self-service, secure AI access",
      "Accelerate time-to-market for production AI services"
    ],
    metrics: [
      { label: "Security Incidents", value: "0" },
      { label: "Compliance Score", value: "100%" },
      { label: "Onboarding Time", value: "-80%" },
      { label: "System Uptime", value: "99.99%" }
    ]
  },
  {
    title: "LLMOps & Agentic Workflow Orchestration",
    description: "Operationalizing generative AI at scale",
    introduction: "Bridge the gap between experimental models and production-ready systems. Our LLMOps solutions provide the observability, deployment, and optimization frameworks necessary to scale Generative AI securely.",
    capabilities: [
      "Continuous integration and deployment for LLMs",
      "Advanced prompt engineering and RAG pipeline tuning",
      "Multi-agent autonomous workflow orchestration",
      "Comprehensive telemetry and bias monitoring"
    ],
    solutions: [
      "Automated model evaluation and red-teaming",
      "Distributed inference scaling and load balancing",
      "Vector database optimization and scaling",
      "Agentic AI platform deployment"
    ],
    useCases: [
      "Autonomous customer service resolution engines",
      "Complex document analysis and compliance checking",
      "Internal knowledge synthesis and retrieval systems"
    ],
    outcomes: [
      "Transform unpredictable models into reliable business engines",
      "Drastically reduce hallucination rates and operational risk",
      "Scale generative AI usage without proportional cost increases"
    ],
    metrics: [
      { label: "Inference Cost", value: "-75%" },
      { label: "Response Latency", value: "< 200ms" },
      { label: "Workflow Automation", value: "10x" },
      { label: "Accuracy Improvement", value: "40%+" }
    ]
  }
];

function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Engineered Solutions"
        title={
          <>
            Transformative <span className="text-accent">AI Solutions</span> <br />
            for the Enterprise
          </>
        }
        description="Bespoke, outcome-oriented solutions designed to accelerate AI adoption, optimize cloud GPU orchestration, and empower resilient business operations."
      />

      <div className="bg-background">
        {solutionsData.map((data, index) => (
          <SectionTemplate key={index} data={data} />
        ))}
      </div>

      <CTA />
    </>
  );
}
