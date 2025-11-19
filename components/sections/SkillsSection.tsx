'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: 'App Development',
      gradient: 'from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100',
      skills: ['Flutter', 'Dart', 'Cross-platform', 'Android', 'iOS', 'Desktop'],
    },
    {
      title: 'Backend & Data',
      gradient: 'from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400',
      skills: ['Firebase', 'Real-Time DB', 'API Integration', 'REST APIs', 'SQLite', 'SQFlite', 'Hive', 'Shared Preferences'],
    },
    {
      title: 'State Management',
      gradient: 'from-slate-600 to-slate-900 dark:from-slate-400 dark:to-slate-100',
      skills: ['Provider', 'BLoC Pattern', 'setState()', 'Clean Architecture', 'MVVM'],
    },
    {
      title: 'Tools & Design',
      gradient: 'from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300',
      skills: ['Flutter', 'VS Code', 'Android Studio', 'Git/Github', 'UI/UX Design', 'Dart'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden" ref={ref}>
      {/* Background was removed — using shared/global background component instead */}

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black font-display mb-8">
              Technical{" "}
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
                  <span className="absolute top-[3px] left-[3px] text-slate-900/40 font-black select-none" aria-hidden="true">Skills</span>
                  <span className="absolute top-[2px] left-[2px] text-slate-800/50 font-black select-none" aria-hidden="true">Skills</span>
                  <span className="absolute top-[1px] left-[1px] text-slate-700/60 font-black select-none" aria-hidden="true">Skills</span>
                  <span
                    className="relative text-white font-black select-none"
                    style={{
                      textShadow: '0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.2), 0 2px 4px rgba(0,0,0,0.3)',
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))'
                    }}
                  >
                    Skills
                  </span>
                  <span className="absolute top-[-1px] left-0 text-white/40 font-black select-none blur-[0.5px]" aria-hidden="true">Skills</span>
                </span>
                <span className="absolute inset-0 rounded-xl shadow-[inset_0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[inset_0_0_50px_rgba(255,255,255,0.15)] transition-all duration-500"></span>
              </span>
            </h2>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Proficient in modern development tools and technologies
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="group relative p-8 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-slate-300/50 dark:border-slate-700/50 rounded-tr-2xl group-hover:border-slate-400 dark:group-hover:border-slate-600 transition-colors"></div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-[0.04] dark:group-hover:opacity-[0.06] transition-opacity duration-500 rounded-2xl`}
                />

                <h3
                  className={`text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r ${category.gradient} mb-6`}
                >
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2.5 bg-slate-100/90 dark:bg-slate-800/90 rounded-xl text-sm font-semibold text-slate-900 dark:text-slate-100 border border-slate-300/80 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-200/90 dark:hover:bg-slate-700/90 transition-all cursor-pointer"
                      whileHover={{ 
                        scale: 1.08,
                        y: -3,
                      }}
                      transition={{ 
                        delay: skillIdx * 0.02,
                        type: "spring",
                        stiffness: 300,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
