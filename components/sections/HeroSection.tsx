'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import TypewriterEffect from '../TypewriterEffect';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches && videoRef.current) {
      try { videoRef.current.pause(); } catch (e) { /* noop */ }
    }
    const handleChange = () => {
      if (mq.matches && videoRef.current) videoRef.current.pause();
      else if (videoRef.current) videoRef.current.play().catch(() => {});
    };
    mq.addEventListener?.('change', handleChange);
    return () => mq.removeEventListener?.('change', handleChange);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none -z-10"
      >
        <source src="/liveBackground.mp4" type="video/mp4" />
      </video>

      {/* Enhanced overlays for better text contrast */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/30 to-black/50 pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main heading with dramatic glow effect */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.5)] animate-pulse-subtle">
          <span className="inline-block animate-glow-text">
            Hi, I'm Rabia Aziz
          </span>
          <br />
          <span className="inline-block mt-2 bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] animate-shimmer">
            <TypewriterEffect
              words={[
                'Flutter App Developer', 
                'Firebase Expert',
                'UI/UX Enthusiast',
              ]}
              speed={100}
              delay={2000}
            />
          </span>
        </h1>

        {/* Enhanced subtitle with stronger contrast */}
        <p className="text-xl sm:text-2xl text-white mb-8 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] [text-shadow:_0_2px_15px_rgb(0_0_0_/_80%),_0_0_30px_rgb(255_255_255_/_20%)]">
Building beautiful, high-performance Flutter apps with modern development practices. Passionate about clean code, smooth UI, and meaningful user experiences.        </p>

        {/* CTA Buttons - Sweep + Popup */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {/* Explore My Journey Button - White sweep + popup */}
          <button 
            onClick={() => scrollToSection('about')}
            className="group relative px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all border border-white/30 overflow-hidden hover:scale-105 cursor-pointer"
          >
            {/* Left-to-right white sweep */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-lg"></span>
            
            <span className="relative z-10">Explore My Journey</span>
            <ArrowRight size={20} className="relative z-10" />
          </button>

          {/* Download Resume Button - Grey monochrome sweep + popup */}
          <a
            href="https://drive.google.com/file/d/15ybKpKaNNWWWRCr4juTa1-ocgLG9_YlV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-white text-slate-900 rounded-lg transition-all border border-white/50 overflow-hidden hover:scale-105"
          >
            {/* Left-to-right GREY/monochrome sweep (visible on white) */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-300/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-lg"></span>
            
            <Download className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}