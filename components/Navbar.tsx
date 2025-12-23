
import React from 'react';
import { Box } from 'lucide-react';

interface NavbarProps {
  onNavClick: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  return (
    <nav className="bg-[#e6e6e0] border-b border-[#d1d1cc] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavClick('hero')}>
            <Box className="text-orange-600 h-6 w-6" />
            <span className="text-xl font-bold tracking-tight text-gray-800">
              Pal MCP <span className="font-light">Architect</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {['architecture', 'comparison', 'configurator'].map((id) => (
              <button
                key={id}
                onClick={() => onNavClick(id)}
                className="text-gray-600 hover:text-orange-700 font-medium transition capitalize"
              >
                {id}
              </button>
            ))}
            <button
              onClick={() => onNavClick('tutorial')}
              className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition shadow-sm"
            >
              Start Tutorial
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
