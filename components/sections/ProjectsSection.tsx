'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Github, Download, X } from 'lucide-react';

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState('');
  const [lightboxAlt, setLightboxAlt] = useState('');

  const projects = [
    {
      title: 'Taskura - Task Manager',
      desc: 'A clean and lightweight task-management app designed for fast organization, smooth navigation, and offline access.',
      tags: ['Flutter', 'Hive', 'SharedPreferences'],
      github: 'https://github.com/jk647/My-Projects',
      download: '#',
      gradient: 'from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100',
      initial: 'T',
      showcase: '/taskuraShowcase.png',
      showcaseAlt: 'Taskura showcase',
    },
    {
      title: 'Coming Soon',
      desc: 'New Flutter projects are in progress. Stay tuned for updates.',
      tags: [],
      github: null,
      download: null,
      gradient: 'from-slate-500 to-slate-700 dark:from-slate-500 dark:to-slate-300',
      initial: '?',
      comingSoon: true,
    },
  ];

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape' && lightboxOpen) setLightboxOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen]);

  useEffect(() => {
    if (lightboxOpen) {
      const btn = document.getElementById('lightbox-close-btn');
      btn?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [lightboxOpen]);

  const openLightbox = (src, alt) => {
    setLightboxSrc(src);
    setLightboxAlt(alt || 'Preview');
    setLightboxOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="relative py-20 md:py-32 px-6 overflow-hidden" ref={ref}>
      <div className="relative max-w-6xl mx-auto z-10">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black font-display mb-8">
              Featured{' '}
              <span
                className="relative inline-block px-4 py-1 rounded-xl overflow-hidden group cursor-pointer translate-y-4"
                style={{
                  backgroundImage: "url('/messageContainerBG.jpeg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-br from-black/60 via-slate-900/50 to-black/60 rounded-xl"></span>
                <span className="absolute inset-0 rounded-xl border-2 border-white/30 group-hover:border-white/50 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"></span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-white/60 rounded-full animate-pulse-glow"></span>
                <span className="absolute bottom-2 left-2 w-2 h-2 bg-white/60 rounded-full animate-pulse-glow-delayed"></span>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 blur-3xl rounded-full animate-pulse-glow"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></span>
                <span className="relative z-10 inline-block transform group-hover:scale-105 transition-transform duration-300">
                  <span className="absolute top-[3px] left-[3px] text-slate-900/40 font-black select-none" aria-hidden="true">Projects</span>
                  <span className="absolute top-[2px] left-[2px] text-slate-800/50 font-black select-none" aria-hidden="true">Projects</span>
                  <span className="absolute top-[1px] left-[1px] text-slate-700/60 font-black select-none" aria-hidden="true">Projects</span>
                  <span className="relative text-white font-black select-none" style={{ textShadow: '0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.2), 0 2px 4px rgba(0,0,0,0.3)', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }}>Projects</span>
                  <span className="absolute top-[-1px] left-0 text-white/40 font-black select-none blur-[0.5px]" aria-hidden="true">Projects</span>
                </span>
                <span className="absolute inset-0 rounded-xl shadow-[inset_0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[inset_0_0_50px_rgba(255,255,255,0.15)] transition-all duration-500"></span>
              </span>
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              A collection of Flutter apps I've built, showcasing my UI skills and App development experience.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/50 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.05] dark:group-hover:opacity-[0.08] transition-opacity duration-300`}
                />

                <div className="relative p-6 space-y-4 h-full flex flex-col">
                  <div
                    className="h-44 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 group-hover:border-slate-300 dark:group-hover:border-slate-600 transition-all overflow-hidden flex items-center justify-center p-0"
                  >
                    {project.showcase ? (
                      <img
                        src={project.showcase}
                        alt={project.showcaseAlt || project.title}
                        className="w-full h-full object-contain group-hover:opacity-60 transition-opacity cursor-pointer"
                        role="button"
                        tabIndex={0}
                        onClick={() => openLightbox(project.showcase, project.showcaseAlt || project.title)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            openLightbox(project.showcase, project.showcaseAlt || project.title);
                          }
                        }}
                      />
                    ) : (
                      <div
                        className={`text-3xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent group-hover:opacity-60 transition-opacity`}
                      >
                        {project.initial}
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 flex-grow">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-slate-200/60 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 border border-slate-300/50 dark:border-slate-600/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {!project.comingSoon ? (
                    <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-xs font-bold bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100 text-white dark:text-slate-900 rounded-lg hover:shadow-lg hover:shadow-slate-500/30 dark:hover:shadow-slate-300/30 transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-3 h-3" />
                          GitHub
                        </motion.a>
                      )}
                      {project.download && (
                        <motion.a
                          href="https://drive.google.com/file/d/1RHbE9htsvTkVjFUwLZepS59E41BJPUrW/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-xs font-bold bg-white dark:bg-slate-800 border-2 border-slate-700 dark:border-slate-300 text-slate-800 dark:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Download className="w-3 h-3" />
                          Download APK
                        </motion.a>
                      )}
                    </div>
                  ) : (
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                      <div className="px-4 py-2 text-center text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-200/50 dark:bg-slate-700/50 rounded-lg border border-slate-300/50 dark:border-slate-600/50">
                        Coming Soon
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox / Modal - FIXED VERSION */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              className="relative max-w-[95vw] max-h-[95vh] p-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                id="lightbox-close-btn"
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-12 right-0 z-50 inline-flex items-center justify-center rounded-full p-3 bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-lg hover:bg-white dark:hover:bg-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-slate-500"
                aria-label="Close preview"
              >
                <X className="w-5 h-5 text-slate-700 dark:text-slate-200" />
              </button>

              {/* Image Container */}
              <div className="bg-white dark:bg-slate-900 rounded-lg p-2 shadow-2xl">
                <img
                  src={lightboxSrc}
                  alt={lightboxAlt}
                  className="max-w-full max-h-[85vh] object-contain rounded"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              {/* Caption */}
              <div className="mt-4 text-center">
                <div className="inline-block bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-sm font-medium text-white">{lightboxAlt}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes pulse-glow-delayed {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .animate-pulse-glow-delayed {
          animation: pulse-glow-delayed 2s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
}