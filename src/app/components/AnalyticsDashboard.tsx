import {
  Activity,
  BarChart3,
  Compass,
  Database,
  GitBranch,
  Gauge,
  Lightbulb,
  MessageSquare,
  Settings,
  TrendingUp
} from 'lucide-react';

const metrics = [
  { icon: Activity, label: 'Bottlenecks Identification', value: '12 Found', trend: '+5%' },
  { icon: BarChart3, label: 'Conversion Rate Scrutiny', value: '23.4%', trend: '+8%' },
  { icon: Compass, label: '360° Sales Assessment', value: '94/100', trend: '+12%' },
  { icon: Database, label: 'KPI-Driven Analytics', value: '47 KPIs', trend: '+3%' },
  { icon: GitBranch, label: 'Lead Movement Tracking', value: '1,247', trend: '+24%' },
  { icon: Gauge, label: 'Sales Funnel Efficiency', value: '87%', trend: '+15%' },
  { icon: Lightbulb, label: 'Predictive Insights', value: '98% Acc', trend: '+6%' },
  { icon: MessageSquare, label: 'Objection Handling', value: '4.8/5', trend: '+0.3' },
  { icon: Settings, label: 'Process Streamlining', value: '34% Faster', trend: '+11%' },
  { icon: TrendingUp, label: 'Continuous Improvement', value: 'Active', trend: 'Live' },
];

export default function AnalyticsDashboard() {
  return (
    <section className="py-20 lg:py-32 bg-[#020617]">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Analytics Driven Sales &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revenue Situation Analytics
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Real-time dashboard for complete sales and revenue visibility
          </p>
        </div>

        {/* Dashboard Container */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>

          <div className="relative bg-[#0F172A]/80 backdrop-blur-xl rounded-3xl p-6 lg:p-10 border border-slate-700/50 shadow-xl">
            {/* Dashboard Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-6 border-b border-slate-700/50">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Sales Analytics Dashboard
                </h3>
                <p className="text-slate-400">Real-time metrics and insights</p>
              </div>
              <div className="flex items-center gap-2 mt-4 sm:mt-0">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-400 font-medium">Live Data</span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                const isPositive = metric.trend.startsWith('+') || metric.trend === 'Live' || metric.trend === 'Active';

                return (
                  <div
                    key={index}
                    className="group relative bg-[#020617] rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/50 transition-all hover:scale-105 shadow-sm"
                  >
                    {/* Icon */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${isPositive
                        ? 'bg-green-500/10 text-green-400'
                        : 'bg-orange-500/10 text-orange-400'
                        }`}>
                        {metric.trend}
                      </span>
                    </div>

                    {/* Value */}
                    <div className="text-2xl font-bold text-white mb-1">
                      {metric.value}
                    </div>

                    {/* Label */}
                    <div className="text-xs text-slate-400 leading-tight">
                      {metric.label}
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4 h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all"
                        style={{ width: `${Math.random() * 40 + 60}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Chart Preview */}
            <div className="mt-8 bg-[#020617] rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-white font-semibold">Revenue Velocity Trend</h4>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-lg font-medium">7D</button>
                  <button className="px-3 py-1 text-xs bg-slate-800 text-slate-400 rounded-lg hover:text-white">30D</button>
                  <button className="px-3 py-1 text-xs bg-slate-800 text-slate-400 rounded-lg hover:text-white">90D</button>
                </div>
              </div>

              <div className="h-40 flex items-end justify-around gap-2">
                {Array.from({ length: 12 }).map((_, i) => {
                  const height = Math.random() * 60 + 40;
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div
                        className="w-full bg-gradient-to-t from-blue-500 to-purple-500 rounded-t transition-all hover:from-blue-400 hover:to-purple-400"
                        style={{ height: `${height}%` }}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}