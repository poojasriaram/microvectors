import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  subtext?: string;
  index: number;
}

export default function StatCard({ label, value, subtext, index }: StatCardProps) {
  return (
    <div 
      className="relative group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 hover:border-blue-500/30 overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>
      
      <div className="relative z-10">
        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2">
          {value}
        </div>
        <div className="text-sm font-medium text-blue-400 uppercase tracking-widest mb-1">
          {label}
        </div>
        {subtext && (
          <div className="text-xs text-slate-500 font-light">
            {subtext}
          </div>
        )}
      </div>
    </div>
  );
}
