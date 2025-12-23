
import React from 'react';
import { Box, Github, Book, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-800 pb-12">
          <div className="mb-10 md:mb-0">
            <div className="flex items-center space-x-3 text-white mb-4">
              <Box className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold tracking-tight">Pal MCP</span>
            </div>
            <p className="text-sm max-w-xs leading-relaxed">
              Standardizing the connection between large language models and your unique local context. Built for the future of agentic AI.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center hover:text-white transition cursor-pointer"><Book className="w-4 h-4 mr-2" /> Documentation</li>
                <li className="flex items-center hover:text-white transition cursor-pointer"><Github className="w-4 h-4 mr-2" /> Source Code</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center hover:text-white transition cursor-pointer"><FileText className="w-4 h-4 mr-2" /> License</li>
                <li className="flex items-center hover:text-white transition cursor-pointer"><ShieldCheck className="w-4 h-4 mr-2" /> Security</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-xs">
          <p>&copy; 2025 Pal MCP Architect. Designed for semantic integration.</p>
        </div>
      </div>
    </footer>
  );
};

const ShieldCheck: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
);

export default Footer;
