'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Smartphone, Zap } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section 
      id="about" 
      className="py-24 px-4 relative overflow-hidden" 
      ref={ref}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black mb-4 text-center">
              About{" "}
              <span
                className="relative inline-block px-4 py-1 rounded-xl overflow-hidden group cursor-pointer translate-y-3"
                style={{
                  backgroundImage: "url('/messageContainerBG.jpeg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-br from-black/60 via-slate-900/50 to-black/60 rounded-xl"></span>
                <span className="absolute inset-0 rounded-xl border-2 border-white/30 group-hover:border-white/50 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"></span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-white/60 rounded-full animate-pulse-glow"></span>
                <span className="absolute bottom-2 left-2 w-2 h-2 bg-white/60 rounded-full animate-pulse-glow-delayed"></span>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 blur-3xl rounded-full animate-pulse-glow"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></span>
                <span className="relative z-10 inline-block transform group-hover:scale-105 transition-transform duration-300">
                  <span className="absolute top-[3px] left-[3px] text-slate-900/40 font-black select-none" aria-hidden="true">
                    Me
                  </span>
                  <span className="absolute top-[2px] left-[2px] text-slate-800/50 font-black select-none" aria-hidden="true">
                    Me
                  </span>
                  <span className="absolute top-[1px] left-[1px] text-slate-700/60 font-black select-none" aria-hidden="true">
                    Me
                  </span>
                  <span
                    className="relative text-white font-black select-none"
                    style={{
                      textShadow: '0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.2), 0 2px 4px rgba(0,0,0,0.3)',
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))'
                    }}
                  >
                    Me
                  </span>
                  <span className="absolute top-[-1px] left-0 text-white/40 font-black select-none blur-[0.5px]" aria-hidden="true">
                    Me
                  </span>
                </span>
                <span className="absolute inset-0 rounded-xl shadow-[inset_0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[inset_0_0_50px_rgba(255,255,255,0.15)] transition-all duration-500"></span>
              </span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100 rounded-full mx-auto" />
          </motion.div>

          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                I'm a Flutter developer with hands-on experience building cross-platform applications that combine clean
                design with strong performance. My passion lies in crafting modern, user-friendly interfaces that
                delight users.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Specialized in Firebase integration, state management, modular architecture, and seamless API
                interactions. I believe great code is clean code, and great apps are built with great user experience in
                mind.
              </p>

              {/* Stats section */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <motion.div
                  className="p-4 glass-card rounded-2xl text-center neon-glow"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-black gradient-text-mono">3+</div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Projects</p>
                </motion.div>
                <motion.div
                  className="p-4 glass-card rounded-2xl text-center neon-glow"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-black text-slate-800 dark:text-slate-200">1+</div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Years Dev</p>
                </motion.div>
                <motion.div
                  className="p-4 glass-card rounded-2xl text-center neon-glow"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-black text-slate-700 dark:text-slate-300">100%</div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Passion</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Features section */}
            <motion.div variants={itemVariants} className="space-y-4">
              {[
                { icon: Smartphone, title: 'Mobile First', desc: 'Responsive design for all devices' },
                { icon: Code2, title: 'Clean Code', desc: 'Maintainable, scalable architecture' },
                { icon: Zap, title: 'Performance', desc: 'Optimized and lightning-fast apps' },
              ].map((feature) => (
                <motion.div
                  key={feature.title}
                  className="p-6 glass-card rounded-2xl border border-slate-200 dark:border-slate-700 neon-glow group cursor-pointer relative overflow-hidden"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-slate-300/50 dark:border-slate-700/50 rounded-tr-2xl group-hover:border-slate-400 dark:group-hover:border-slate-600 transition-colors pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-100/0 opacity-0 group-hover:opacity-5 dark:group-hover:opacity-6 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

                  <div className="flex gap-4 items-start relative z-10">
                    <div className="p-3 bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100 rounded-lg group-hover:shadow-lg group-hover:shadow-slate-500/50 transition-shadow duration-300">
                      <feature.icon className="w-6 h-6 text-white dark:text-slate-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">{feature.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}