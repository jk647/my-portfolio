"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { BookOpen, Award, Briefcase, ChevronRight } from "lucide-react"

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const [activeSection, setActiveSection] = useState<"education" | "experience" | "currentRole" | "certifications">("education")

  const experiences = {
    education: {
      title: "Education",
      icon: BookOpen,
      color: "from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100",
      subtitle: "Academic Background",
      items: [
        {
          title: "Bachelor of Science in Software Engineering",
          organization: "Virtual University of Pakistan",
          period: "Ongoing",
          description: "Focused on modern software development and architecture.",
        },
      ],
    },
    experience: {
      title: "Experience",
      icon: Briefcase,
      color: "from-slate-600 to-slate-800 dark:from-slate-200 dark:to-slate-400",
      subtitle: "Training & Development",
      items: [
        {
          title: "Flutter App Development",
          organization: "Arfa Karim Technology Incubator, Peshawar",
          period: "Sept 2025",
          description: "Completed a 3-month Flutter app development training focused on building cross-platform mobile applications from scratch. Gained hands-on experience with Firebase integration, state management using Provider and BLoC, OOPs, local storage solutions (Hive & SQLite), and API integration. Worked extensively on UI/UX design, implementing full CRUD features, clean architecture, and optimized performance. Developed production-ready applications while practicing comprehensive error and exception handling, debugging complex issues, and following best practices for scalable and modular development.",
          reference: {
            name: "Afaq Zahir",
            role: "Flutter Development Instructor",
            contact: "afaqxdev@gmail.com",
            linkedin: "linkedin.com/in/afaqxdev"
          }
        },
      ],
    },
    currentRole: {
      title: "Current Role",
      icon: Briefcase,
      color: "from-slate-500 to-slate-700 dark:from-slate-400 dark:to-slate-200",
      subtitle: "Active Position",
      items: [
        {
          title: "Junior Flutter Developer",
          organization: "X dev Soft",
          period: "2025 - Present",
          description: "As a Junior Flutter Developer at X Dev Soft, I’m working closely with experienced developers to build clean, scalable, and efficient mobile applications. My role includes writing responsive UI, integrating APIs, maintaining app performance, and following modern Flutter development practices. I collaborate with the team to understand requirements, implement new features, fix bugs, and improve existing codebases. Every day teaches me something new real-world development experience, stronger problem-solving skills, and a better understanding of professional workflows like writing clean code, following proper project architecture, team communication, and structured development practices.",
        },
      ],
    },
    certifications: {
      title: "Certifications",
      icon: Award,
      color: "from-slate-800 to-slate-700 dark:from-slate-100 dark:to-slate-300",
      subtitle: "Professional Credentials",
      items: [
        {
          title: "Flutter App Development",
          organization: "Arfa Karim Technology Incubator, Peshawar",
          period: "September 2025",
          description: "Comprehensive training in Flutter app development covering Dart programming, cross-platform development, Firebase integration, state management, UI/UX design, and deployment strategies.",
        },
        {
          title: "Digital Skills & Freelancing",
          organization: "KP-TEVTA, Helvetas Pakistan, GWVTC Khar Bajaur",
          period: "Sept - Nov 2021",
          description: "Professional development in digital skills and freelancing practices, including remote work management, client communication, and project delivery standards.",
        },
        {
          title: "NCVQ IT - Computer Operator",
          organization: "Khyber Pakhtunkhwa Trade Testing Board",
          period: "December 2021",
          description: "National vocational qualification in IT and computer operations, covering fundamental computing skills and technical operations.",
        },
      ],
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const timelineVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, staggerChildren: 0.15 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden" ref={ref}>
      {/* BACKGROUND REMOVED — using shared/global background component in page.tsx */}

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black font-display mb-4">
              Professional{" "}
              <span
                className="relative inline-block px-4 py-1 rounded-xl overflow-hidden group cursor-pointer translate-y-4"
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
                  <span className="absolute top-[3px] left-[3px] text-slate-900/40 font-black select-none" aria-hidden="true">Journey</span>
                  <span className="absolute top-[2px] left-[2px] text-slate-800/50 font-black select-none" aria-hidden="true">Journey</span>
                  <span className="absolute top-[1px] left-[1px] text-slate-700/60 font-black select-none" aria-hidden="true">Journey</span>
                  <span 
                    className="relative text-white font-black select-none"
                    style={{
                      textShadow: '0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.2), 0 2px 4px rgba(0,0,0,0.3)',
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))'
                    }}
                  >
                    Journey
                  </span>
                  <span className="absolute top-[-1px] left-0 text-white/40 font-black select-none blur-[0.5px]" aria-hidden="true">Journey</span>
                </span>
                <span className="absolute inset-0 rounded-xl shadow-[inset_0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[inset_0_0_50px_rgba(255,255,255,0.15)] transition-all duration-500"></span>
              </span>
            </h2>
          </motion.div>

          {/* Main Content - Sidebar + Timeline Layout */}
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Sidebar Navigator */}
            <motion.div variants={itemVariants} className="space-y-3">
              {(Object.keys(experiences) as Array<keyof typeof experiences>).map((key) => {
                const section = experiences[key]
                const Icon = section.icon
                const isActive = activeSection === key
                
                return (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`w-full text-left glass-card p-5 rounded-xl border transition-all duration-300 group relative overflow-hidden ${
                      isActive
                        ? "border-slate-400 dark:border-slate-500 neon-glow"
                        : "border-slate-200/50 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600"
                    }`}
                  >
                    {/* Active indicator bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${section.color}`}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <div className="relative flex items-center gap-3">
                      <div className={`p-2.5 rounded-lg bg-gradient-to-br ${section.color} ${isActive ? "scale-110" : ""} transition-transform duration-300`}>
                        <Icon className="w-5 h-5 text-white dark:text-slate-900" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-slate-900 dark:text-slate-100 mb-0.5">{section.title}</div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">{section.subtitle}</div>
                      </div>
                      <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isActive ? "translate-x-1" : ""}`} />
                    </div>
                  </button>
                )
              })}
            </motion.div>

            {/* Timeline Content */}
            <motion.div
              key={activeSection}
              variants={timelineVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              {/* Vertical Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-300 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 hidden md:block" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {experiences[activeSection].items.map((item: any, idx: number) => {
                  const section = experiences[activeSection]
                  const isLast = idx === section.items.length - 1
                  
                  return (
                    <motion.div
                      key={idx}
                      variants={cardVariants}
                      className="relative"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute -left-[13px] top-8 w-8 h-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100 border-4 border-white dark:border-slate-950 hidden md:flex items-center justify-center z-10">
                        <div className="w-2 h-2 rounded-full bg-white dark:bg-slate-900" />
                      </div>

                      {/* Card */}
                      <div className="glass-card p-8 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 neon-glow hover:border-slate-300 dark:hover:border-slate-600 transition-all group md:ml-12 relative overflow-hidden">
                        {/* Gradient accent */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                        <div className="relative z-10">
                          {/* Header */}
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <div className="flex-1">
                              <h4 className="text-xl md:text-2xl font-bold font-display text-slate-900 dark:text-slate-100 mb-2">
                                {item.title}
                              </h4>
                              <p className="text-slate-700 dark:text-slate-300 font-semibold flex items-center gap-2">
                                {item.organization}
                              </p>
                            </div>
                            <span className={`px-4 py-2 bg-gradient-to-r ${section.color} text-white dark:text-slate-900 text-sm font-bold rounded-full whitespace-nowrap shrink-0`}>
                              {item.period}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            {item.description}
                          </p>

                          {/* Reference Section */}
                          {item.reference && (
                            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Reference:</p>
                              <div className="space-y-1">
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                  <span className="font-semibold text-slate-900 dark:text-slate-100">{item.reference.name}</span>
                                  <span className="text-slate-500 dark:text-slate-500"> • {item.reference.role}</span>
                                </p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                  Email: <a href={`mailto:${item.reference.contact}`} className="text-slate-700 dark:text-slate-300 hover:underline">{item.reference.contact}</a>
                                </p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                  LinkedIn: <a href={`https://${item.reference.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-slate-300 hover:underline">{item.reference.linkedin}</a>
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-30px) rotate(45deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-35px) rotate(-12deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-25px) rotate(12deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.05); opacity: 0.6; }
        }
        @keyframes pulse-slower {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes pulse-glow-delayed {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .animate-float-slow { animation: float-slow 20s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 18s ease-in-out infinite 1s; }
        .animate-float-fast { animation: float-fast 16s ease-in-out infinite 2s; }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        .animate-pulse-slower { animation: pulse-slower 10s ease-in-out infinite 1s; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-pulse-glow-delayed { animation: pulse-glow-delayed 2s ease-in-out infinite 0.5s; }
        .bg-gradient-radial { background: radial-gradient(circle, var(--tw-gradient-stops)); }
      `}</style>
    </section>
  )
}