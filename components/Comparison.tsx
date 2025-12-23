
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';
import { CheckCircle } from 'lucide-react';

const Comparison: React.FC = () => {
  const data = [
    { subject: 'Setup Ease', Pal: 70, Zen: 90, fullMark: 100 },
    { subject: 'Context Depth', Pal: 95, Zen: 60, fullMark: 100 },
    { subject: 'Orchestration', Pal: 40, Zen: 95, fullMark: 100 },
    { subject: 'Tool Density', Pal: 90, Zen: 50, fullMark: 100 },
    { subject: 'Customization', Pal: 85, Zen: 70, fullMark: 100 },
  ];

  return (
    <section id="comparison" className="py-20 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Performance Comparison</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Analyzing the two leading MCP implementations. <strong>Pal</strong> excels as a full-featured personal companion, while <strong>Zen</strong> shines in high-throughput enterprise orchestration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 h-[450px]">
            <h3 className="text-lg font-bold text-gray-800 mb-6 text-center">Architecture Capabilities</h3>
            <ResponsiveContainer width="100%" height="85%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#4b5563', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
                <Radar
                  name="Pal Server"
                  dataKey="Pal"
                  stroke="#ea580c"
                  fill="#ea580c"
                  fillOpacity={0.2}
                />
                <Radar
                  name="Zen Server"
                  dataKey="Zen"
                  stroke="#0d9488"
                  fill="#0d9488"
                  fillOpacity={0.2}
                />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-8 border-orange-500 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-2xl text-gray-900 mb-3">Pal: Integrated Companion</h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Designed as a "battery-included" server for high-utility local workflows.
              </p>
              <ul className="space-y-3">
                {[
                  'Semantic memory retention across sessions',
                  'High-density local toolset (FS, SQLite, Web)',
                  'Optimized for personal coding and research'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="text-orange-500 mr-3 h-5 w-5" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-8 border-teal-600 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-2xl text-gray-900 mb-3">Zen: The Orchestrator</h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A lightweight, minimal engine focused on stability and routing.
              </p>
              <ul className="space-y-3">
                {[
                  'Enterprise-grade request routing',
                  'Lower resource overhead for server-side hosting',
                  'Ideal for multi-agent dispatch pipelines'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="text-teal-600 mr-3 h-5 w-5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
