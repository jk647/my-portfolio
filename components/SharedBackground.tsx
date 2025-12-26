"use client";

export default function SharedBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-white dark:bg-slate-950 pointer-events-none overflow-hidden">
      <div
        className="absolute top-0 right-10 w-72 h-72 border-2 border-slate-400/45 dark:border-slate-600/45 rotate-45 rounded-3xl animate-float-sophisticated shadow-2xl shadow-slate-400/20"
        style={{ willChange: "transform, opacity, filter" }}
      ></div>

      <div
        className="absolute bottom-0 left-10 w-72 h-72 border-2 border-slate-400/45 dark:border-slate-600/45 -rotate-45 rounded-3xl animate-float-sophisticated-alt shadow-2xl shadow-slate-400/20"
        style={{ willChange: "transform, opacity, filter" }}
      ></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute -top-32 -left-20 w-16 h-16 border border-slate-400/40 dark:border-slate-600/40 rotate-45 rounded-lg animate-spin-very-slow"></div>
        <div className="absolute -bottom-28 right-24 w-20 h-20 border border-slate-400/35 dark:border-slate-600/35 -rotate-12 rounded-xl animate-float-micro"></div>
        <div className="absolute top-40 -right-32 w-14 h-14 border border-slate-400/40 dark:border-slate-600/40 rounded-full animate-pulse-elegant"></div>
        <div className="absolute -top-24 right-28 w-18 h-18 border border-slate-400/35 dark:border-slate-600/35 rounded-full animate-orbit-elegant"></div>
        <div className="absolute -top-40 left-32 w-20 h-20 border-2 border-slate-400/40 dark:border-slate-600/40 rounded-full animate-pulse-elegant-alt"></div>
      </div>

      <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-slate-400/50 dark:bg-slate-600/50 rounded-full animate-twinkle-1"></div>
      <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-slate-400/50 dark:bg-slate-600/50 rounded-full animate-twinkle-2"></div>
      <div className="absolute top-2/3 left-1/2 w-2 h-2 bg-slate-400/50 dark:bg-slate-600/50 rounded-full animate-twinkle-3"></div>
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-slate-400/50 dark:bg-slate-600/50 rounded-full animate-twinkle-4"></div>
      <div className="absolute top-1/3 right-2/5 w-2 h-2 bg-slate-400/50 dark:bg-slate-600/50 rounded-full animate-twinkle-5"></div>

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

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-slate-200/40 via-slate-100/20 to-transparent dark:from-slate-800/30 dark:via-slate-900/15 dark:to-transparent blur-3xl animate-orb-elegant-1"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-slate-200/40 via-slate-100/20 to-transparent dark:from-slate-800/30 dark:via-slate-900/15 dark:to-transparent blur-3xl animate-orb-elegant-2"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-slate-150/25 to-transparent dark:from-slate-850/25 dark:to-transparent blur-3xl animate-orb-center-elegant"></div>

      <style jsx>{`
        /* ===== Big squares: slightly more noticeable but still subtle ===== */
        @keyframes float-sophisticated {
          0%,
          100% {
            transform: translate(0, 0) rotate(45deg) scale(1);
            opacity: 0.95;
            filter: drop-shadow(0 8px 18px rgba(58, 75, 102, 0.05));
          }
          25% {
            transform: translate(-22px, -28px) rotate(47deg) scale(1.03);
            opacity: 1;
            filter: drop-shadow(0 12px 28px rgba(58, 75, 102, 0.08));
          }
          50% {
            transform: translate(14px, -18px) rotate(43deg) scale(0.985) skewX(-0.3deg);
            opacity: 0.9;
            filter: drop-shadow(0 6px 14px rgba(58, 75, 102, 0.04));
          }
          75% {
            transform: translate(-8px, -10px) rotate(46deg) scale(1.01);
            opacity: 0.98;
            filter: drop-shadow(0 10px 22px rgba(58, 75, 102, 0.06));
          }
        }

        @keyframes float-sophisticated-alt {
          0%,
          100% {
            transform: translate(0, 0) rotate(-45deg) scale(1);
            opacity: 0.95;
            filter: drop-shadow(0 8px 18px rgba(58, 75, 102, 0.05));
          }
          25% {
            transform: translate(22px, 28px) rotate(-43deg) scale(1.035) skewX(0.4deg);
            opacity: 1;
            filter: drop-shadow(0 12px 28px rgba(58, 75, 102, 0.08));
          }
          50% {
            transform: translate(-14px, 18px) rotate(-48deg) scale(0.985);
            opacity: 0.9;
            filter: drop-shadow(0 6px 14px rgba(58, 75, 102, 0.04));
          }
          75% {
            transform: translate(8px, 10px) rotate(-46deg) scale(1.01);
            opacity: 0.98;
            filter: drop-shadow(0 10px 22px rgba(58, 75, 102, 0.06));
          }
        }

        /* micro / center animations unchanged */
        @keyframes float-micro {
          0%,
          100% {
            transform: translateY(0) rotate(-12deg);
          }
          50% {
            transform: translateY(-15px) rotate(-8deg);
          }
        }
        @keyframes spin-very-slow {
          from {
            transform: rotate(45deg);
          }
          to {
            transform: rotate(405deg);
          }
        }
        @keyframes pulse-elegant {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.7;
          }
        }
        @keyframes pulse-elegant-alt {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.12);
            opacity: 0.65;
          }
        }
        @keyframes orbit-elegant {
          0% {
            transform: rotate(0deg) translateX(25px) rotate(0deg);
            opacity: 0.35;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: rotate(360deg) translateX(25px) rotate(-360deg);
            opacity: 0.35;
          }
        }
        @keyframes twinkle-1 {
          0%,
          100% {
            transform: scale(0.8);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.8);
            opacity: 1;
          }
        }
        @keyframes twinkle-2 {
          0%,
          100% {
            transform: scale(0.6);
            opacity: 0.2;
          }
          50% {
            transform: scale(2);
            opacity: 0.9;
          }
        }
        @keyframes twinkle-3 {
          0%,
          100% {
            transform: scale(0.7);
            opacity: 0.25;
          }
          50% {
            transform: scale(1.9);
            opacity: 0.95;
          }
        }
        @keyframes twinkle-4 {
          0%,
          100% {
            transform: scale(0.9);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.7);
            opacity: 0.85;
          }
        }
        @keyframes twinkle-5 {
          0%,
          100% {
            transform: scale(0.75);
            opacity: 0.25;
          }
          50% {
            transform: scale(1.85);
            opacity: 0.9;
          }
        }
        @keyframes orb-elegant-1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translate(40px, 40px) scale(1.15);
            opacity: 0.55;
          }
        }
        @keyframes orb-elegant-2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translate(-40px, -40px) scale(1.15);
            opacity: 0.55;
          }
        }
        @keyframes orb-center-elegant {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.25;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.25);
            opacity: 0.4;
          }
        }

        /* slightly snappier but still chill timings for the big squares */
        .animate-float-sophisticated {
          animation: float-sophisticated 20s cubic-bezier(.22,.9,.28,.99) infinite;
        }
        .animate-float-sophisticated-alt {
          animation: float-sophisticated-alt 22s cubic-bezier(.22,.9,.28,.99) infinite 1.2s;
        }
        .animate-float-micro {
          animation: float-micro 20s ease-in-out infinite;
        }
        .animate-spin-very-slow {
          animation: spin-very-slow 50s linear infinite;
        }
        .animate-pulse-elegant {
          animation: pulse-elegant 12s ease-in-out infinite;
        }
        .animate-pulse-elegant-alt {
          animation: pulse-elegant-alt 14s ease-in-out infinite 2s;
        }
        .animate-orbit-elegant {
          animation: orbit-elegant 35s linear infinite;
        }
        .animate-twinkle-1 {
          animation: twinkle-1 4s ease-in-out infinite;
        }
        .animate-twinkle-2 {
          animation: twinkle-2 5s ease-in-out infinite 1s;
        }
        .animate-twinkle-3 {
          animation: twinkle-3 4.5s ease-in-out infinite 2s;
        }
        .animate-twinkle-4 {
          animation: twinkle-4 5.5s ease-in-out infinite 1.5s;
        }
        .animate-twinkle-5 {
          animation: twinkle-5 4.8s ease-in-out infinite 2.5s;
        }
        .animate-orb-elegant-1 {
          animation: orb-elegant-1 30s ease-in-out infinite;
        }
        .animate-orb-elegant-2 {
          animation: orb-elegant-2 34s ease-in-out infinite 3s;
        }
        .animate-orb-center-elegant {
          animation: orb-center-elegant 25s ease-in-out infinite 1.5s;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}
