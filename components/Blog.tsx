'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';
import type { PostMeta } from '@/lib/mdx';

interface BlogProps {
  posts: PostMeta[];
}

const categoryStyles: Record<string, { bg: string; color: string; border: string }> = {
  opinion: {
    bg: 'rgba(0,229,255,0.10)',
    color: '#00E5FF',
    border: '1px solid #00E5FF',
  },
  research: {
    bg: 'rgba(109,92,255,0.15)',
    color: '#6D5CFF',
    border: '1px solid #6D5CFF',
  },
};

const slugCategory: Record<string, string> = {
  'post-1': 'opinion',
  'post-2': 'research',
};

function BlogCard({ post, index }: { post: PostMeta; index: number }) {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: '-40px' });
  const router = useRouter();

  const category = slugCategory[post.slug] ?? 'research';
  const catStyle = categoryStyles[category];

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group rounded-xl border border-[#30363D] bg-[#161B22] p-5 flex flex-col gap-3 cursor-pointer hover:border-[#6E40C9]/60 transition-colors duration-200"
      onClick={() => router.push(`/blog/${post.slug}`)}
    >
      {/* Metadata row */}
      <div className="flex items-center gap-2 flex-wrap">
        <span
          className="font-mono text-xs px-2 py-0.5 rounded-md"
          style={{
            background: catStyle.bg,
            color: catStyle.color,
            border: catStyle.border,
          }}
        >
          #{category}
        </span>
        <span className="text-[14px] text-[#8B949E]">{post.date}</span>
        {post.readingTime && (
          <>
            <span className="text-[#30363D]">·</span>
            <span className="text-[14px] text-[#8B949E]">{post.readingTime}</span>
          </>
        )}
      </div>

      <h3 className="font-mono font-bold text-[#E6EDF3] text-sm leading-snug group-hover:text-white transition-colors">
        {post.title}
      </h3>

      <p className="text-base leading-[1.7] text-[#8B949E] flex-1">{post.excerpt}</p>

      <div className="pt-3 border-t border-[#30363D]">
        <span className="font-mono text-xs text-[#6E40C9] group-hover:text-[#a78bfa] transition-colors flex items-center gap-1">
          Read More
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </motion.article>
  );
}

export default function Blog({ posts }: BlogProps) {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="blog" className="py-24 border-t border-[#30363D] scroll-mt-20">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-3">
            <p className="font-mono text-xs text-[#8B949E] uppercase tracking-[0.15em] whitespace-nowrap">
              03 / Blog
            </p>
            <div className="flex-1 h-px bg-[#30363D]" />
          </div>
          <h2 className="font-mono font-bold text-[#E6EDF3]" style={{ fontSize: '32px' }}>
            Writing
          </h2>
        </motion.div>

        {posts.length === 0 ? (
          <p className="font-mono text-[#8B949E] text-center py-12 text-sm">No posts yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {posts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
