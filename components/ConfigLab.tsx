
import React, { useState, useMemo } from 'react';
import { Folder, Brain, Search, Terminal } from 'lucide-react';
import { ModuleConfig } from '../types';

const ConfigLab: React.FC = () => {
  const [config, setConfig] = useState<ModuleConfig>({
    fs: true,
    memory: true,
    search: false,
    path: '/Users/dev/projects'
  });

  const generatedJson = useMemo(() => {
    const output: any = {
      mcpServers: {
        pal: {
          command: 'node',
          args: ['/path/to/pal-mcp-server/build/index.js'],
          env: {
            NODE_ENV: 'production'
          }
        }
      }
    };

    if (config.fs) output.mcpServers.pal.env.ALLOWED_PATHS = config.path;
    if (config.memory) output.mcpServers.pal.env.MEMORY_FILE = './pal_context.json';
    if (config.search) output.mcpServers.pal.env.BRAVE_API_KEY = 'SK_REDACTED_8923';

    return JSON.stringify(output, null, 2);
  }, [config]);

  return (
    <section id="configurator" className="py-20 bg-white border-y border-[#d1d1cc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Configuration Lab</h2>
          <p className="mt-4 text-gray-600 max-w-2xl text-lg">
            Customize your <code>pal-mcp-server</code> environment. Select modules to live-generate your <code>claude_desktop_config.json</code> setup.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-[#fcfcfc] p-8 rounded-2xl border border-gray-200">
            <h3 className="font-bold text-xl mb-8 text-gray-800">Feature Modules</h3>
            
            <div className="space-y-4">
              {[
                { id: 'fs' as const, icon: Folder, label: 'Local Filesystem', sub: 'Enable read/write permissions' },
                { id: 'memory' as const, icon: Brain, label: 'Memory Service', sub: 'Enable persistent context storage' },
                { id: 'search' as const, icon: Search, label: 'Web Search', sub: 'Brave/Google Search Integration' },
              ].map((mod) => (
                <label 
                  key={mod.id}
                  className={`flex items-center justify-between p-5 bg-white rounded-xl border-2 cursor-pointer transition-all hover:border-orange-200 ${config[mod.id] ? 'border-orange-500 bg-orange-50/20' : 'border-gray-200'}`}
                >
                  <span className="flex items-center">
                    <mod.icon className={`w-8 h-8 mr-4 ${config[mod.id] ? 'text-orange-600' : 'text-gray-400'}`} />
                    <div>
                      <span className="block font-bold text-gray-900">{mod.label}</span>
                      <span className="block text-xs text-gray-500">{mod.sub}</span>
                    </div>
                  </span>
                  <input 
                    type="checkbox" 
                    checked={config[mod.id]}
                    onChange={(e) => setConfig({ ...config, [mod.id]: e.target.checked })}
                    className="w-6 h-6 text-orange-600 rounded-md focus:ring-orange-500 border-gray-300" 
                  />
                </label>
              ))}

              <div className="pt-6 mt-6 border-t border-gray-200">
                <label className="block text-sm font-bold text-gray-700 mb-2">Allowed Filesystem Path</label>
                <input 
                  type="text" 
                  value={config.path}
                  onChange={(e) => setConfig({ ...config, path: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 code-font text-sm outline-none transition-all" 
                />
              </div>
            </div>
          </div>

          <div className="bg-[#1e1e1e] rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[520px]">
            <div className="bg-[#2d2d2d] px-4 py-3 flex items-center border-b border-white/5">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <Terminal className="w-4 h-4 text-gray-500 mr-2" />
              <span className="text-xs text-gray-400 font-mono tracking-wider">claude_desktop_config.json</span>
            </div>
            <div className="p-6 flex-grow overflow-auto">
              <pre className="text-sm text-green-400 code-font leading-relaxed whitespace-pre-wrap">
                {generatedJson}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfigLab;
