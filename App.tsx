
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Architecture from './components/Architecture';
import Comparison from './components/Comparison';
import ConfigLab from './components/ConfigLab';
import Tutorial from './components/Tutorial';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f0]">
      <Navbar onNavClick={scrollToSection} />
      <main className="flex-grow">
        <Hero onCtaClick={() => scrollToSection('tutorial')} />
        <Architecture />
        <Comparison />
        <ConfigLab />
        <Tutorial />
      </main>
      <Footer />
    </div>
  );
};

export default App;
