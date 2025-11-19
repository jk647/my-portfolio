"use client";

export default function SharedBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-white dark:bg-slate-950 pointer-events-none">
      {/* Large geometric shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 border-2 border-slate-300/60 dark:border-slate-700/60 rotate-45 rounded-3xl animate-float-slow"></div>
      <div className="absolute bottom-32 left-16 w-56 h-56 border-2 border-slate-300/50 dark:border-slate-700/50 -rotate-12 rounded-3xl animate-float-medium"></div>
      <div className="absolute top-1/2 left-1/3 w-40 h-40 border border-slate-300/40 dark:border-slate-700/40 rotate-12 rounded-2xl animate-float-fast"></div>

      {/* Circular accents */}
      <div className="absolute top-1/3 right-1/4 w-48 h-48 border-2 border-slate-300/40 dark:border-slate-700/40 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/3 w-32 h-32 border border-slate-300/30 dark:border-slate-700/30 rounded-full animate-pulse-slower"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.90] dark:opacity-[0.100]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(148 163 184 / 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(148 163 184 / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-slate-200/50 to-transparent dark:from-slate-800/30 dark:to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-slate-300/40 to-transparent dark:from-slate-700/30 dark:to-transparent blur-3xl"></div>

      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(45deg);
          }
          50% {
            transform: translateY(-30px) rotate(45deg);
          }
        }
        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px) rotate(-12deg);
          }
          50% {
            transform: translateY(-35px) rotate(-12deg);
          }
        }
        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0px) rotate(12deg);
          }
          50% {
            transform: translateY(-25px) rotate(12deg);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.6;
          }
        }
        @keyframes pulse-slower {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
        }
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 18s ease-in-out infinite 1s;
        }
        .animate-float-fast {
          animation: float-fast 16s ease-in-out infinite 2s;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 10s ease-in-out infinite 1s;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}
