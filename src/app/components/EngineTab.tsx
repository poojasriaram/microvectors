import React from 'react';

interface EngineTabProps {
    title: string;
    isActive: boolean;
    onClick: () => void;
}

export default function EngineTab({ title, isActive, onClick }: EngineTabProps) {
    return (
        <button
            onClick={onClick}
            className={`
        relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap
        ${isActive
                    ? 'text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }
      `}
        >
            {isActive && (
                <div className="absolute inset-0 bg-blue-600 rounded-full -z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
                </div>
            )}
            {title}
        </button>
    );
}
