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
        relative px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 w-full text-left flex items-center justify-between group
        ${isActive
                    ? 'text-white shadow-lg shadow-blue-900/10 scale-[1.02]'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-white hover:shadow-sm'
                }
      `}
        >
            <span className="relative z-10">{title}</span>

            {isActive && (
                <div className="absolute inset-0 bg-blue-600 rounded-xl -z-10">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl opacity-100"></div>
                </div>
            )}
        </button>
    );
}
