'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type TerminalLine = {
  text: string;
  color: string;
};

const projects = [
  {
    title: 'Medical Embedding Feature Extraction Benchmarking',
    description:
      'Benchmarked feature extraction strategies for medical image classification. Achieved 58.7% improvement in Precision@5 and 78.7% reduction in Davies-Bouldin index over baseline CNN models.',
    tags: ['#pytorch', '#vision-transformers', '#bioBERT', '#scikit-learn'],
    github: 'https://github.com/AmulyaP07-15/medical-embedding-visualization',
    gradient: 'linear-gradient(135deg, #1a1040, #6D5CFF)',
    terminal: [
      { text: '$ running benchmark...', color: '#8B949E' },
      { text: '▸ Precision@5    +58.7%', color: '#00E5FF' },
      { text: '▸ Davies-Bouldin  -78.7%', color: '#00E5FF' },
      { text: '▸ Silhouette Score  0.74', color: '#8B949E' },
    ] as TerminalLine[],
  },
  {
    title: 'Clinical Document Processing with Transformers',
    description:
      'Deep learning pipeline processing 10,000+ clinical documents using T5 (220M params). Multi-label classification with 79.3% accuracy using BioBERT-based feature extraction.',
    tags: ['#pytorch', '#T5', '#NLP', '#classification'],
    github: 'https://github.com/AmulyaP07-15/nbme-clinical-notes',
    gradient: 'linear-gradient(135deg, #0a2540, #00E5FF)',
    terminal: [
      { text: '$ processing 10,000 docs...', color: '#8B949E' },
      { text: '▸ Accuracy       79.3%', color: '#00E5FF' },
      { text: '▸ Parameters     220M', color: '#00E5FF' },
      { text: '▸ Labels         multi-class', color: '#8B949E' },
    ] as TerminalLine[],
  },
  {
    title: 'ReguGrounded — Agentic AI for Regulatory Compliance',
    description:
      'Agentic AI system with recursive language model architecture for multi-jurisdictional regulatory queries. Features a citation validation loop to eliminate hallucinations.',
    tags: ['#GPT-4o', '#pinecone', '#fastAPI', '#agentic-AI'],
    github: 'https://github.com/AmulyaP07-15/ReguGrounded',
    gradient: 'linear-gradient(135deg, #1a0a2e, #9D4EDD)',
    terminal: [
      { text: '$ querying regulations...', color: '#8B949E' },
      { text: '▸ Hallucinations   0%', color: '#6D5CFF' },
      { text: '▸ Jurisdictions    multi', color: '#6D5CFF' },
      { text: '▸ Citations        validated', color: '#8B949E' },
    ] as TerminalLine[],
  },
  {
    title: 'FoodShed Boston',
    description:
      'Award-winning civic tech app built at CivicHacks 2026. Interactive map visualizing food access and equity across Boston neighborhoods, with AI-powered natural language search and bilingual support.',
    tags: ['#react', '#flask', '#mongoDB', '#gemini-AI'],
    github: 'https://github.com/jaysonsao/equitable',
    gradient: 'linear-gradient(135deg, #0a2818, #00C896)',
    terminal: [
      { text: '$ loading map data...', color: '#8B949E' },
      { text: '▸ Neighborhoods    Boston', color: '#00E5FF' },
      { text: '▸ Languages        EN / ES', color: '#00E5FF' },
      { text: '▸ Award            CivicHacks 2026', color: '#8B949E' },
    ] as TerminalLine[],
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group flex flex-col rounded-xl border border-[#30363D] bg-[#161B22] overflow-visible hover:border-[#6E40C9]/60 transition-colors duration-200"
    >
      {/* Thumbnail — gradient background + floating terminal panel */}
      <div
        className="relative flex-shrink-0 rounded-t-xl overflow-visible"
        style={{ height: 200, background: project.gradient }}
      >
        {/* Floating terminal panel */}
        <div
          className="absolute"
          style={{
            bottom: -28,
            left: '7.5%',
            width: '85%',
            background: 'rgba(13, 17, 23, 0.88)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 8,
            padding: '12px',
            zIndex: 10,
          }}
        >
          {project.terminal.map((line, i) => (
            <p
              key={i}
              className="leading-[1.7]"
              style={{
                fontFamily: 'var(--font-space-mono)',
                fontSize: 11,
                color: line.color,
              }}
            >
              {line.text}
            </p>
          ))}
        </div>
      </div>

      {/* Card body — padded to clear the overlapping panel */}
      <div
        className="flex flex-col flex-1 gap-3 px-5 pb-5"
        style={{ paddingTop: 40 }}
      >
        {/* Title */}
        <h3
          className="group-hover:text-white transition-colors"
          style={{
            fontFamily: 'var(--font-space-mono)',
            fontSize: 15,
            fontWeight: 700,
            color: '#E6EDF3',
            lineHeight: 1.4,
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="flex-1"
          style={{
            fontFamily: 'var(--font-space-mono)',
            fontSize: 13,
            lineHeight: 1.6,
            color: '#8B949E',
          }}
        >
          {project.description}
        </p>

        {/* Tags + GitHub row */}
        <div
          className="mt-auto pt-4 border-t border-[#30363D]"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}
        >
          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, flex: 1 }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: 'var(--font-space-mono)',
                  fontSize: 11,
                  color: '#8B949E',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid #30363D',
                  borderRadius: 4,
                  padding: '3px 8px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* GitHub link */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E6EDF3] transition-colors flex-shrink-0"
            style={{
              fontFamily: 'var(--font-space-mono)',
              fontSize: 12,
              color: '#8B949E',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              whiteSpace: 'nowrap',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="py-24 border-t border-[#30363D] scroll-mt-20">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-3">
            <p className="font-mono text-xs text-[#8B949E] uppercase tracking-[0.15em] whitespace-nowrap">
              01 / Projects
            </p>
            <div className="flex-1 h-px bg-[#30363D]" />
          </div>
          <h2 className="font-mono font-bold text-[#E6EDF3]" style={{ fontSize: '32px' }}>
            Featured Projects
          </h2>
        </motion.div>

        {/* Grid — stretch cards to equal height */}
        <div className="grid md:grid-cols-2 gap-x-4 gap-y-12 items-stretch">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
