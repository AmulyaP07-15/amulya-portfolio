'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function SectionReveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-[#30363D] scroll-mt-20">
      <div className="max-w-container mx-auto px-6">

        <SectionReveal>
          <div className="flex items-center gap-4 mb-10">
            <p className="font-mono text-xs text-[#8B949E] uppercase tracking-[0.15em] whitespace-nowrap">
              00 / About
            </p>
            <div className="flex-1 h-px bg-[#30363D]" />
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <SectionReveal delay={0.1} className="md:col-span-3 space-y-6">
            {/* Tier 1 — hook */}
            <p className="font-mono text-2xl font-bold text-[#E6EDF3] leading-snug">
              I build AI systems that learn, reason, and generalize.
            </p>

            {/* Tier 2 — detail */}
            <div className="space-y-4 text-base leading-[1.8] text-[#9AA4B2]">
              <p>
                CS graduate from India now pursuing my{' '}
                <span className="text-[#E6EDF3]">MS in Artificial Intelligence</span> at{' '}
                <span className="text-[#a78bfa]">Northeastern University, Boston</span>. My academic
                journey has been driven by a single conviction: the most interesting problems sit at
                the boundary between disciplines.
              </p>
              <p>
                Research interests:{' '}
                <span className="text-[#a78bfa]">computer vision</span>,{' '}
                <span className="text-[#a78bfa]">self-supervised learning</span>, and{' '}
                <span className="text-[#a78bfa]">representation learning</span>. I care about building
                models that learn rich, transferable features without massive labeled datasets. Agentic
                AI systems and long-horizon reasoning are the other thread I keep pulling on.
              </p>
              <p>
                Before grad school, Software Engineer at Capgemini — shipping full-stack products and
                REST APIs. That industry grounding shapes how I approach research. I care about systems
                that work outside the lab.
              </p>
              <p>
                Outside of research: competitive tennis for 12 years, rock and metal, and a lot of
                literary and science fiction.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2} className="md:col-span-2">
            <div className="rounded-xl border border-[#30363D] bg-[#161B22] p-5 hover:border-[#6E40C9]/60 transition-colors duration-200">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-[#6E40C9]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#6E40C9]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-mono font-bold text-[#E6EDF3] text-sm">MS Artificial Intelligence</p>
                  <p className="text-sm text-[#8B949E] mt-0.5">Northeastern University</p>
                  <p className="font-mono text-xs text-[#6E40C9] mt-0.5">Boston, MA · 2025–2027</p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
