import {
  Users,
  Heart,
  FileText,
  Target,
  LineChart,
  Workflow,
  Headphones,
  TrendingUp,
  Shield,
  MessageCircle
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Data-Driven Customer Insights',
    description: 'Deep customer intelligence powered by AI analytics'
  },
  {
    icon: Heart,
    title: 'Automated Lead & Loyalty Nurturing',
    description: 'Build lasting relationships with automated nurturing'
  },
  {
    icon: FileText,
    title: 'AI Personalized Content Creation',
    description: 'Generate personalized content at scale with AI'
  },
  {
    icon: Target,
    title: 'Micro-Segmentation & Targeting',
    description: 'Precision targeting with advanced segmentation'
  },
  {
    icon: LineChart,
    title: 'Predictive Analytics',
    description: 'Forecast sales outcomes with AI predictions'
  },
  {
    icon: Workflow,
    title: 'AI Multi-Channel Engagement',
    description: 'Engage customers across all touchpoints seamlessly'
  },
  {
    icon: Headphones,
    title: 'AI Customer Success Ops',
    description: 'Ensure customer success with AI-driven operations'
  },
  {
    icon: TrendingUp,
    title: 'AI Revenue Expansion',
    description: 'Identify and execute upsell opportunities automatically'
  },
  {
    icon: Shield,
    title: 'AI Customer Retention',
    description: 'Reduce churn with predictive retention strategies'
  },
  {
    icon: MessageCircle,
    title: 'AI ChatGPT Conversational Engine',
    description: 'Intelligent conversations that convert and retain'
  },
];

export default function LeanSalesSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#020617]">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            AI Driven Lean Sales &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sales Transformation
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Transform your sales process with lean, AI-powered operations
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClass = index % 3 === 0 ? 'blue' : index % 3 === 1 ? 'purple' : 'cyan';

            const colors = {
              blue: {
                bg: 'from-blue-500/10 to-blue-600/10',
                border: 'border-blue-500/20 group-hover:border-blue-500/40',
                icon: 'bg-blue-500/10 text-blue-400',
                glow: 'group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)]'
              },
              purple: {
                bg: 'from-purple-500/10 to-purple-600/10',
                border: 'border-purple-500/20 group-hover:border-purple-500/40',
                icon: 'bg-purple-500/10 text-purple-400',
                glow: 'group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]'
              },
              cyan: {
                bg: 'from-cyan-500/10 to-cyan-600/10',
                border: 'border-cyan-500/20 group-hover:border-cyan-500/40',
                icon: 'bg-cyan-500/10 text-cyan-400',
                glow: 'group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]'
              }
            }[colorClass];

            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${colors.bg} backdrop-blur-sm rounded-xl p-6 border ${colors.border} transition-all hover:scale-105 hover:shadow-xl ${colors.glow}`}
              >
                <div className={`inline-flex p-3 rounded-lg ${colors.icon} mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}