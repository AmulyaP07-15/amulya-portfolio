'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse 600px 400px at 50% 50%, rgba(110,64,201,0.15), transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-container mx-auto px-6 pt-[120px] pb-[80px]">

        {/* Terminal prompt */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex items-center gap-1.5 font-mono text-sm text-[#8B949E] mb-6"
        >
          <span className="text-[#6E40C9]">~/portfolio</span>
          <span>$</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'steps(1)' }}
            className="inline-block w-2 h-[18px] bg-[#6E40C9] align-middle"
          />
        </motion.div>

        {/* h1 — 48px Space Mono */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono font-bold text-[#E6EDF3] leading-tight mb-4"
          style={{ fontSize: '48px' }}
        >
          Amulya Penikalapati
        </motion.h1>

        {/* Bracketed role line */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-mono text-sm text-[#8B949E] tracking-wide mb-4"
        >
          <span className="text-[#6E40C9]/60">[</span>
          {' '}Computer Vision · NLP · Agentic AI{' '}
          <span className="text-[#6E40C9]/60">]</span>
        </motion.p>

        {/* Subtitle — Inter body text */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="text-base leading-[1.7] text-[#8B949E] max-w-xl mb-8"
        >
          Building intelligent systems at the intersection of computer vision, NLP, and agentic AI.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="font-mono px-5 py-2.5 rounded-md text-sm bg-[#6E40C9] text-white hover:bg-[#7c4fd4] transition-colors duration-200"
          >
            View Projects
          </button>
          <a
            href="https://github.com/AmulyaP07-15"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono px-5 py-2.5 rounded-md text-sm border border-[#30363D] text-[#E6EDF3] hover:border-[#6E40C9] hover:bg-[#6E40C9]/10 transition-all duration-200 flex items-center gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.68 }}
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full border border-[#30363D] bg-[#161B22] text-[#8B949E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6E40C9] animate-pulse" />
            MS in AI · Northeastern University, Boston
          </span>
        </motion.div>

      </div>
    </section>
  );
}
