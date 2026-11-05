import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true; // Default to sleek dark mode
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleDownloadCv = () => {
    const link = document.createElement('a');
    link.href = './CV_PeerMohamed.pdf';
    link.download = 'Peer_Mohamed_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Subtle celebration confetti
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.75 },
        colors: ['#00F0FF', '#3B82F6', '#10B981', '#6366F1'],
      });
    } catch (e) {
      // Graceful fallback
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? 'bg-navy-950 text-slate-100 tech-grid-dark'
          : 'bg-slate-50 text-slate-900 tech-grid-light'
      }`}
    >
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        onDownloadCv={handleDownloadCv}
      />

      <main>
        <Hero isDark={isDark} onDownloadCv={handleDownloadCv} />
        <About isDark={isDark} />
        <Skills isDark={isDark} />
        <Experience isDark={isDark} />
        <Education isDark={isDark} />
        <Contact isDark={isDark} onDownloadCv={handleDownloadCv} />
      </main>

      <Footer isDark={isDark} onDownloadCv={handleDownloadCv} />
    </div>
  );
};

export default App;
