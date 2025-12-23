
import React, { useState, useEffect } from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const [modulesCount, setModulesCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setModulesCount((prev) => (prev < 12 ? prev + 1 : 12));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <header id="hero" className="pt-16 pb-12 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Bridge Your AI to <span className="text-orange-600">Personal Context</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          A deep dive into the <strong>Pal MCP Server</strong>. Move beyond generic prompts by connecting your LLMs directly to your local tools via the Model Context Protocol.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { value: `${modulesCount}+`, label: 'Core Modules' },
            { value: 'Local', label: 'Data Privacy' },
            { value: 'JSON-RPC', label: 'Protocol' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 w-44 hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Hero;
