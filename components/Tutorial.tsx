
import React, { useState } from 'react';
import { Terminal, Settings, Rocket, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

const Tutorial: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: 'Environment & Installation',
      icon: Terminal,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">Ensure Node.js 20+ is present. Clone the Pal repository and build the distribution binaries:</p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-xl font-mono text-sm leading-relaxed border border-white/10">
            git clone https://github.com/mcp-pal/server<br/>
            cd server<br/>
            npm install && npm run build
          </div>
          <p className="text-sm text-gray-500 italic">This compiles the TypeScript source into standardized CommonJS/ESM modules for the host client.</p>
        </div>
      )
    },
    {
      id: 2,
      title: 'Configuration Strategy',
      icon: Settings,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">Map your environment variables to match your system constraints. Security is paramount; ensure paths are explicitly defined.</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
            <li className="bg-orange-50 p-3 rounded-lg border border-orange-100 font-medium">ALLOWED_PATHS: Restrict FS scope</li>
            <li className="bg-orange-50 p-3 rounded-lg border border-orange-100 font-medium">MEMORY_DB: Vector store location</li>
            <li className="bg-orange-50 p-3 rounded-lg border border-orange-100 font-medium">BRAVE_API: Web search credits</li>
          </ul>
        </div>
      )
    },
    {
      id: 3,
      title: 'Client Connection',
      icon: ShieldCheck,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">Integrate with Claude Desktop by modifying the JSON configuration located in your user application data folder.</p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-xl font-mono text-xs overflow-x-auto border border-white/10">
            "mcpServers": {"{"}<br/>
            &nbsp;&nbsp;"pal": {"{"}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;"command": "node",<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;"args": ["/absolute/path/to/build/index.js"]<br/>
            &nbsp;&nbsp;{"}"}<br/>
            {"}"}
          </div>
          <p className="text-sm text-orange-600 font-bold underline cursor-pointer">View config directory locations &rarr;</p>
        </div>
      )
    },
    {
      id: 4,
      title: 'Verification & Execution',
      icon: Rocket,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">Restart the host application. Test the bridge by querying your local system context directly in chat.</p>
          <div className="bg-white p-5 rounded-xl border-l-4 border-green-500 shadow-sm italic text-gray-700">
            "Pal, analyze the README in my projects folder and tell me how the authentication logic is structured."
          </div>
          <p className="text-sm text-gray-500">The model will trigger the <code>read_file</code> tool via the Pal MCP server automatically.</p>
        </div>
      )
    }
  ];

  return (
    <section id="tutorial" className="py-24 bg-[#f5f5f0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Implementation Roadmap</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Deploying a context server is a structured process. Follow these milestones to augment your AI's capabilities.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step) => {
            const isActive = activeStep === step.id;
            return (
              <div 
                key={step.id} 
                className={`bg-white rounded-2xl border transition-all duration-300 shadow-sm overflow-hidden ${isActive ? 'ring-2 ring-orange-500 border-transparent shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <button 
                  onClick={() => setActiveStep(isActive ? 0 : step.id)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center space-x-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-orange-600 uppercase tracking-widest mb-1">Step 0{step.id}</span>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                  {isActive ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
                </button>
                
                {isActive && (
                  <div className="px-8 pb-8 pt-2 animate-fade-in">
                    {step.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tutorial;
