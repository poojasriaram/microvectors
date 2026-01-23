import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white"></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] mix-blend-multiply animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[120px] mix-blend-multiply animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
      </div>

      <div className="relative w-full max-w-[90%] lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="space-y-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-50 border border-blue-100 rounded-full backdrop-blur-md hover:bg-blue-100/50 transition-colors cursor-default">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-700 font-bold tracking-wide uppercase">AI-Powered Revenue Operating System</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            Increase Revenue Velocity by{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block">
              5X in 12 Months
            </span>{' '}
            with AI Sales Ops
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-medium">
            Propel Your Business on Autopilot with AI/ML-Powered Sales Growth Automation —
            from AI-Driven Demand Discovery to Revenue Management.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6">
            <Link to="/book-demo">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-lg rounded-full shadow-[0_10px_40px_-10px_rgba(37,99,235,0.4)] hover:shadow-[0_20px_60px_-10px_rgba(37,99,235,0.5)] transition-all transform hover:-translate-y-1"
              >
                Book a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-200 bg-white text-slate-700 hover:bg-slate-50 h-14 text-lg rounded-full px-8 backdrop-blur-md transition-all hover:text-slate-900 shadow-sm"
            >
              Talk to a Revenue Expert
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-slate-100 max-w-5xl mx-auto mt-12">
            {[
              { value: '5X', suffix: 'Revenue Growth', label: 'Revenue Growth' },
              { value: '1000X', suffix: 'Faster Process', label: 'Faster Process' },
              { value: '24/7', suffix: 'AI Automation', label: 'AI Automation' }
            ].map((stat, i) => (
              <div
                key={i}
                className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 hover:border-blue-200 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/50 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="flex flex-col items-center">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    {stat.suffix && (
                      <div className="text-lg text-slate-600 font-semibold leading-tight">
                        {stat.suffix}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ICP Subsection */}
          <div className="mt-20 pt-12 border-t border-slate-100/80">
            <div className="bg-blue-50/40 rounded-3xl p-10 border border-blue-100 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5 tracking-tight">
                  Designed For Revenue Leaders Who Need Predictable Growth
                </h3>
                <p className="text-slate-700 mb-8 text-xl leading-relaxed font-medium max-w-5xl">
                  This platform is built for revenue, sales, and growth leaders who are accountable for pipeline velocity, conversion rates, and forecast accuracy — and need AI to operate their revenue engine continuously, not manually.
                </p>

                <div className="space-y-5">
                  <h4 className="font-bold text-blue-700 uppercase tracking-widest text-xs">Best Fit If You:</h4>
                  <div className="grid sm:grid-cols-3 gap-5">
                    {[
                      "Own aggressive revenue targets",
                      "Manage complex B2B buying cycles",
                      "Need AI to replace fragmented sales and marketing ops"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-slate-800 bg-white p-5 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                        <span className="text-base font-semibold leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}