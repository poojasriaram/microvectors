import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-[#020617]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020617] to-[#020617]"></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="relative w-full max-w-[90%] lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="space-y-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium tracking-wide uppercase">AI-Powered Revenue Operating System</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight">
            Increase Revenue Velocity by{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent inline-block">
              5X in 12 Months
            </span>{' '}
            with AI Sales Ops
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto font-light">
            Propel Your Business on Autopilot with AI/ML-Powered Sales Growth Automation —
            from AI-Driven Demand Discovery to Revenue Management.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white px-10 h-16 text-xl rounded-full shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.5)] transition-all transform hover:-translate-y-1"
            >
              Book a Demo
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/10 bg-white/5 text-white hover:bg-white/10 h-16 text-xl rounded-full px-10 backdrop-blur-md transition-all"
            >
              Talk to a Revenue Expert
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 border-t border-white/5 max-w-5xl mx-auto">
            {[
              { value: '5X', label: 'Revenue Growth' },
              { value: '1000X', label: 'Faster Process' },
              { value: '24/7', label: 'AI Automation' }
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}