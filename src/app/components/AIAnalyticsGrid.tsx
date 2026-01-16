import {
  Target,
  TrendingUp,
  Compass,
  BarChart3,
  Navigation,
  Zap,
  Lightbulb,
  MessageSquare,
  Settings,
  RefreshCw,
  FileText,
  Activity
} from 'lucide-react';

const capabilities = [
  { icon: Target, title: 'Bottlenecks Identification', color: 'blue' },
  { icon: TrendingUp, title: 'Conversion Rate Mapping', color: 'purple' },
  { icon: Compass, title: '360° AI Sales Assessment', color: 'cyan' },
  { icon: BarChart3, title: 'Competitive KPI Analytics', color: 'blue' },
  { icon: Navigation, title: 'Lead Movement Tracking', color: 'purple' },
  { icon: Zap, title: 'Sales Funnel Velocity', color: 'cyan' },
  { icon: Lightbulb, title: 'Predictive Sales Conversion Insights', color: 'blue' },
  { icon: MessageSquare, title: 'Objection Handling Evaluation', color: 'purple' },
  { icon: Settings, title: 'Sales Process Streamlining', color: 'cyan' },
  { icon: RefreshCw, title: 'Continuous Sales Improvement', color: 'blue' },
  { icon: FileText, title: 'Data-Backed Recommendations', color: 'purple' },
  { icon: Activity, title: 'Real-Time Performance Analytics', color: 'cyan' },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case 'blue':
      return {
        bg: 'from-blue-500/10 to-blue-600/10',
        border: 'border-blue-500/20',
        icon: 'text-blue-400',
        glow: 'group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]'
      };
    case 'purple':
      return {
        bg: 'from-purple-500/10 to-purple-600/10',
        border: 'border-purple-500/20',
        icon: 'text-purple-400',
        glow: 'group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]'
      };
    case 'cyan':
      return {
        bg: 'from-cyan-500/10 to-cyan-600/10',
        border: 'border-cyan-500/20',
        icon: 'text-cyan-400',
        glow: 'group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]'
      };
    default:
      return {
        bg: 'from-blue-500/10 to-blue-600/10',
        border: 'border-blue-500/20',
        icon: 'text-blue-400',
        glow: 'group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]'
      };
  }
};

export default function AIAnalyticsGrid() {
  return (
    <section className="py-20 lg:py-32 bg-[#020617]">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            AI Analytics Driven{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sales Transformation
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Leverage cutting-edge AI analytics to transform every aspect of your sales process
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            const colors = getColorClasses(capability.color);

            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${colors.bg} backdrop-blur-sm rounded-xl p-6 border ${colors.border} transition-all hover:scale-105 hover:shadow-xl ${colors.glow}`}
              >
                <div className={`inline-flex p-3 rounded-lg bg-[#0F172A] border border-white/5 shadow-sm mb-4 ${colors.icon}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-semibold leading-snug">
                  {capability.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}