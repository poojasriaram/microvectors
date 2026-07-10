import { ArrowRight, Sparkles, Building2, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Premium Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white"></div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[120px] mix-blend-multiply"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[100px] mix-blend-multiply"
        ></motion.div>
      </div>

      <div className="relative w-full max-w-[90%] lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Text Content */}
        <div className="flex-1 space-y-8 text-center lg:text-left">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 glass border border-blue-100 rounded-full shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-brand-blue" />
            <span className="text-sm text-slate-700 font-semibold tracking-wide">
              The Enterprise AI Standard
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-[5rem] font-bold text-slate-900 leading-[1.05] tracking-tight"
          >
            Transform Your Business with <br className="hidden lg:block"/>
            <span className="text-gradient">AI-Powered Digital Solutions</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-2xl font-normal mx-auto lg:mx-0"
          >
            We help enterprise leaders implement autonomous systems to accelerate revenue, automate operations, and scale predictably without increasing headcount.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-brand-blue hover:bg-blue-700 text-white px-8 h-14 text-lg rounded-full shadow-[0_8px_30px_rgb(29,78,216,0.3)] transition-all font-semibold"
            >
              <Link to="/book-consultation">
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="glass border-slate-200 text-slate-700 hover:bg-slate-50 h-14 text-lg rounded-full px-8 transition-all font-semibold"
            >
              <Link to="/solutions">View Our Solutions</Link>
            </Button>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 border-t border-slate-100"
          >
            <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
              <Building2 className="w-5 h-5 text-brand-blue" />
              50+ Enterprise Clients
            </div>
            <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
              <ShieldCheck className="w-5 h-5 text-brand-blue" />
              SOC2 Type II Certified
            </div>
            <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
              <Zap className="w-5 h-5 text-brand-blue" />
              99.99% Uptime SLA
            </div>
          </motion.div>

        </div>

        {/* Floating AI Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative w-full h-[500px] lg:h-[600px] hidden lg:block"
        >
           {/* Abstract Floating Elements representing AI Enterprise Infrastructure */}
           <motion.div 
             animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-[10%] right-[10%] w-64 h-64 glass-dark rounded-3xl shadow-2xl overflow-hidden flex flex-col p-6 z-20"
           >
              <div className="w-full h-8 bg-slate-800 rounded-lg mb-4 opacity-50 animate-pulse"></div>
              <div className="w-3/4 h-8 bg-slate-800 rounded-lg mb-4 opacity-50 animate-pulse delay-75"></div>
              <div className="mt-auto w-full h-24 bg-gradient-to-t from-brand-blue/20 to-transparent rounded-lg"></div>
           </motion.div>

           <motion.div 
             animate={{ y: [15, -15, 15], x: [-5, 5, -5] }}
             transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="absolute bottom-[20%] left-[5%] w-48 h-48 glass rounded-full shadow-xl flex items-center justify-center z-30 border border-white/20"
           >
              <div className="w-32 h-32 rounded-full border-4 border-brand-purple/20 border-t-brand-purple animate-spin" style={{ animationDuration: '3s' }}></div>
              <Sparkles className="absolute w-8 h-8 text-brand-blue" />
           </motion.div>

           <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>

      {/* Trusted By Client Logos Placeholder */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 mt-20 pt-10 border-t border-slate-100"
      >
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
          Trusted by Innovative Teams Worldwide
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Placeholder shapes for logos until actual SVGs are provided */}
           <div className="h-8 w-24 md:w-32 bg-slate-200 rounded"></div>
           <div className="h-8 w-24 md:w-32 bg-slate-200 rounded"></div>
           <div className="h-8 w-24 md:w-32 bg-slate-200 rounded"></div>
           <div className="h-8 w-24 md:w-32 bg-slate-200 rounded"></div>
           <div className="h-8 w-24 md:w-32 bg-slate-200 rounded hidden md:block"></div>
        </div>
      </motion.div>
    </section>
  );
}
