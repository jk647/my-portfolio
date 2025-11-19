'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg dark:bg-slate-950/95'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with RA */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            {/* RA Logo - JPEG background like "Me" */}
            <div 
              className="relative w-12 h-12 rounded-xl overflow-hidden transition-all duration-300 shadow-lg group-hover:scale-110 group-hover:rotate-3"
              style={{
                backgroundImage: "url('/messageContainerBG.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Dark overlay for readability (same as "Me") */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-slate-900/50 to-black/60 rounded-xl"></div>
              
              {/* RA Text */}
              <div className="absolute inset-0 flex items-center justify-center text-xl font-black text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                RA
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse"></div>
            </div>
            
            {/* Name Text */}
            <div className={`text-xl font-bold transition-all duration-300 ${
              scrolled
                ? 'bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent'
                : 'text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] [text-shadow:_0_0_20px_rgb(255_255_255_/_40%)]'
            }`}>
              Rabia Aziz
            </div>
          </div>

          {/* Desktop Nav Links with UNIQUE diagonal slide effect */}
          <div className="hidden md:flex gap-8">
            {[
              { label: 'Home', id: 'hero' },
              { label: 'About', id: 'about' },
              { label: 'Skills', id: 'skills' },
              { label: 'Projects', id: 'projects' },
              { label: 'Experience', id: 'experience' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-semibold transition-all duration-300 relative overflow-hidden px-3 py-2 group ${
                  scrolled
                    ? 'text-slate-600 dark:text-slate-300'
                    : 'text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'
                }`}
              >
                {/* Text */}
                <span className="relative z-10 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                  {item.label}
                </span>
                
                {/* Diagonal sliding reveal from bottom-left to top-right - MORE VISIBLE */}
                <span className={`absolute inset-0 ${
                  scrolled
                    ? 'bg-gradient-to-tr from-slate-400 via-slate-300 to-slate-200 dark:from-slate-600 dark:via-slate-700 dark:to-slate-800'
                    : 'bg-gradient-to-tr from-white/50 via-white/30 to-white/20 backdrop-blur-sm'
                } -translate-x-full -translate-y-full skew-x-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-md`}></span>
                
                {/* Corner accent dot that appears on hover */}
                <span className={`absolute top-1 right-1 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                  scrolled
                    ? 'bg-slate-700 dark:bg-slate-300'
                    : 'bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]'
                }`}></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-all ${
              scrolled
                ? 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white'
                : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] hover:bg-white/20 backdrop-blur-sm'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`md:hidden pb-4 space-y-2 ${
              scrolled ? '' : 'bg-black/40 backdrop-blur-md rounded-lg p-2'
            }`}
          >
            {[
              { label: 'Home', id: 'hero' },
              { label: 'About', id: 'about' },
              { label: 'Skills', id: 'skills' },
              { label: 'Projects', id: 'projects' },
              { label: 'Experience', id: 'experience' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
                  scrolled
                    ? 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    : 'text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}