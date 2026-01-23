
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white"></div>
        <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[120px] mix-blend-multiply animate-pulse"></div>
        <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-[120px] mix-blend-multiply animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="relative w-full max-w-[90%] lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="space-y-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-blue-100 rounded-full shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-default group">
            <Sparkles className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="text-sm text-slate-600 font-bold tracking-wide uppercase group-hover:text-blue-700 transition-colors">
              AI-Powered Revenue Operating System
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-slate-900 leading-[1.05] tracking-tighter max-w-6xl mx-auto">
            Increase Revenue Velocity by{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block drop-shadow-sm">
              5X in 12 Months
            </span>{' '}
            with AI Sales Ops
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium text-balance">
            Propel your business on autopilot with <span className="text-slate-900 font-semibold">AI/ML-Powered Sales Growth Automation</span> —
            from Demand Discovery to Revenue Management.
          </p>

          {/* CTAs */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/book-demo">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 text-base rounded-full shadow-[0_6px_20px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(37,99,235,0.5)] transition-all transform hover:-translate-y-0.5 font-bold"
              >
                Book a Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-200 bg-white text-slate-600 hover:bg-slate-50 h-12 text-base rounded-full px-8 hover:text-slate-900 shadow-sm hover:shadow-md transition-all font-semibold"
            >
              Talk to a Revenue Expert
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 border-t border-slate-100 max-w-5xl mx-auto mt-16 lg:mt-24">
            {[
              { value: '5X', suffix: 'Revenue Growth', label: 'Revenue Growth' },
              { value: '1000X', suffix: 'Faster Process', label: 'Faster Process' },
              { value: '24/7', suffix: 'AI Automation', label: 'AI Automation' }
            ].map((stat, i) => (
              <div
                key={i}
                className="relative group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 hover:border-blue-100/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col items-center gap-1">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-b from-slate-900 to-slate-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-500 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-lg text-slate-500 font-medium group-hover:text-blue-700 transition-colors">
                    {stat.suffix}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ICP Box */}
          <div className="mt-20 pt-16 border-t border-slate-100/80">
            <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-[2.5rem] p-10 md:p-16 border border-blue-100/50 text-left relative overflow-hidden group hover:border-blue-200 transition-colors duration-500">
              {/* Animated Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-400/15 transition-colors duration-500" />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-lg mb-4">
                      Ideal Customer Profile
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                      Designed For Revenue Leaders Who Need <br />
                      <span className="text-blue-600">Predictable Growth</span>
                    </h3>
                    <p className="text-slate-600 text-xl leading-relaxed font-medium">
                      Built for CROs, VPs of Sales, and Growth Leaders accountable for pipeline velocity, conversion rates, and forecast accuracy—who need AI to operate their revenue engine continuously.
                    </p>
                  </div>

                  <div className="flex-1 w-full bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-sm">
                    <h4 className="font-bold text-slate-900 uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      Best Fit If You:
                    </h4>
                    <div className="space-y-4">
                      {[
                        "Own aggressive revenue targets",
                        "Manage complex B2B buying cycles",
                        "Need AI to replace manual sales & marketing ops"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 group/item">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-blue-600 transition-colors duration-300">
                            <div className="w-2 h-2 rounded-full bg-blue-600 group-hover/item:bg-white transition-colors duration-300" />
                          </div>
                          <span className="text-lg text-slate-700 font-medium leading-snug group-hover/item:text-slate-900 transition-colors bg-transparent border-none shadow-none">{item}</span>
                        </div>
                      ))}
                    </div>
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