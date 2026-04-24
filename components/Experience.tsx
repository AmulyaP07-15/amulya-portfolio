'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    company: 'Capgemini Technology Services',
    role: 'Software Engineer',
    period: 'Sep 2024 – Aug 2025',
    type: 'Full-Time',
    points: [
      'Developed microservices using Spring Boot and AWS (Lambda, RDS, S3) serving 1,000+ users with 99.9% uptime',
      'Optimized database schemas and SQL queries, improving application performance and reducing deployment time from 4 hours to 30 minutes through CI/CD automation',
      'Built REST APIs with authentication and error handling, collaborating with business analysts to deliver data solutions for key business requirements',
    ],
  },
  {
    company: 'Tech Mahindra',
    role: 'Machine Learning Intern',
    period: 'Aug 2023 – Oct 2023',
    type: 'Internship',
    points: [
      'Designed and automated ETL pipelines processing 50,000+ multilingual documents across 5+ Indic languages for Project Indus LLM training data',
      'Improved data quality scores from 68% to 94% through automated validation scripts and systematic data transformation workflows',
      'Collaborated with cross-functional teams of linguists and engineers to build production data pipelines for large language model development',
    ],
  },
];

function ExperienceCard({ exp, index, isLast }: { exp: typeof experiences[0]; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div className="flex gap-6">
      {/* Timeline column */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.15 }}
          className="w-3 h-3 rounded-full bg-[#6E40C9] border-2 border-[#0D1117] ring-2 ring-[#6E40C9]/30 mt-1.5 flex-shrink-0"
        />
        {/* Vertical line */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
            className="w-px flex-1 mt-2 origin-top"
            style={{ background: 'linear-gradient(to bottom, #30363D, transparent)' }}
          />
        )}
      </div>

      {/* Card */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`group rounded-xl border border-[#30363D] bg-[#161B22] p-5 flex flex-col gap-4 hover:border-[#6E40C9]/60 transition-colors duration-200 ${isLast ? '' : 'mb-8'}`}
        style={{ flex: 1 }}
      >
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#6E40C9]/10 border border-[#6E40C9]/20 text-[#a78bfa]">
            {exp.period}
          </span>
          <span className="font-mono text-xs px-2.5 py-1 rounded-full border border-[#30363D] text-[#8B949E]">
            {exp.type}
          </span>
        </div>

        <div>
          <h3 className="font-mono font-bold text-[#E6EDF3] group-hover:text-white transition-colors">
            {exp.role}
          </h3>
          <p className="font-mono text-sm text-[#6E40C9] mt-0.5">{exp.company}</p>
        </div>

        <ul className="space-y-2.5">
          {exp.points.map((point, j) => (
            <li key={j} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#8B949E]">
              <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-[#30363D]" />
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="experience" className="py-24 border-t border-[#30363D] scroll-mt-20">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-3">
            <p className="font-mono text-xs text-[#8B949E] uppercase tracking-[0.15em] whitespace-nowrap">
              02 / Experience
            </p>
            <div className="flex-1 h-px bg-[#30363D]" />
          </div>
          <h2 className="font-mono font-bold text-[#E6EDF3]" style={{ fontSize: '32px' }}>
            Work Experience
          </h2>
        </motion.div>

        {/* Vertical timeline */}
        <div className="max-w-2xl flex flex-col">
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={exp.company}
              exp={exp}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
