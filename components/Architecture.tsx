
import React, { useState } from 'react';
import { Bot, Network, FolderOpen, Brain, Globe, ArrowRight } from 'lucide-react';
import { ArchComponent } from '../types';
import { ARCH_DETAILS } from '../constants';

const Architecture: React.FC = () => {
  const [selected, setSelected] = useState<ArchComponent | null>(null);

  return (
    <section id="architecture" className="py-16 bg-white border-y border-[#e6e6e0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">System Architecture</h2>
          <p className="mt-4 text-gray-600 max-w-2xl text-lg">
            Pal acts as a semantic gateway. Unlike standard REST APIs, it maintains a persistent JSON-RPC stream for bi-directional context exchange.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center bg-[#fcfcfc] p-10 rounded-2xl border border-gray-200 shadow-inner">
          
          {/* AI Client */}
          <div 
            onClick={() => setSelected('client')}
            className={`text-center p-8 bg-white rounded-xl shadow-md border-l-4 border-blue-500 relative cursor-pointer transition-all hover:translate-y-[-4px] ${selected === 'client' ? 'ring-2 ring-blue-400' : ''}`}
          >
            <Bot className="mx-auto h-12 w-12 text-blue-500 mb-4" />
            <h3 className="font-bold text-lg">AI Client</h3>
            <p className="text-sm text-gray-500">Claude / Gemini / IDE</p>
            <ArrowRight className="absolute -right-6 top-1/2 transform -translate-y-1/2 hidden lg:block text-gray-300 w-8 h-8" />
          </div>

          {/* Core Server */}
          <div 
            onClick={() => setSelected('server')}
            className={`text-center p-10 bg-orange-50 rounded-xl shadow-lg border-2 border-orange-200 relative transform transition-all hover:scale-105 cursor-pointer ${selected === 'server' ? 'ring-2 ring-orange-400' : ''}`}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">
              Context Hub
            </div>
            <Network className="mx-auto h-14 w-14 text-orange-600 mb-4" />
            <h3 className="font-bold text-xl text-gray-900">Pal MCP Server</h3>
            <p className="text-sm text-gray-600 mt-2">Router & Logic Controller</p>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-5">
            {[
              { id: 'fs' as const, icon: FolderOpen, label: 'Filesystem', sub: 'Read/Write Access', color: 'text-green-600', bg: 'hover:bg-green-50' },
              { id: 'memory' as const, icon: Brain, label: 'Memory', sub: 'Long-term Recall', color: 'text-purple-600', bg: 'hover:bg-purple-50' },
              { id: 'web' as const, icon: Globe, label: 'Web Integration', sub: 'Fetch & Search', color: 'text-red-600', bg: 'hover:bg-red-50' },
            ].map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelected(item.id)}
                className={`flex items-center p-5 bg-white rounded-xl shadow-sm border border-gray-200 cursor-pointer transition-colors ${item.bg} ${selected === item.id ? 'ring-2 ring-gray-400' : ''}`}
              >
                <item.icon className={`${item.color} mr-5 h-6 w-6`} />
                <div>
                  <div className="font-bold text-sm text-gray-900">{item.label}</div>
                  <div className="text-xs text-gray-500">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-8 bg-gray-50 rounded-xl border border-gray-200 min-h-[140px] flex flex-col justify-center">
          {selected ? (
            <div className="animate-fade-in">
              <h4 className={`font-bold text-lg mb-2 ${ARCH_DETAILS[selected].color}`}>
                {ARCH_DETAILS[selected].title}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {ARCH_DETAILS[selected].description}
              </p>
            </div>
          ) : (
            <p className="text-gray-400 italic text-center text-lg">
              Click on a component above to explore its function within the Pal ecosystem.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
