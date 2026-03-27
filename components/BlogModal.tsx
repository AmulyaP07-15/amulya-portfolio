'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { PostMeta } from '@/lib/mdx';

interface BlogModalProps {
  post: PostMeta | null;
  mdxSource: MDXRemoteSerializeResult | null;
  onClose: () => void;
}

export default function BlogModal({ post, mdxSource, onClose }: BlogModalProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (post) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKey);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [post, handleKey]);

  return (
    <AnimatePresence>
      {post && mdxSource && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[61] flex items-center justify-center p-4 md:p-8 pointer-events-none"
          >
            <div
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl pointer-events-auto border border-[#30363D]"
              style={{ background: '#161B22' }}
            >
              {/* Top accent line */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#6E40C9] to-transparent" />

              <div className="p-8">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-5 right-5 w-8 h-8 rounded-lg flex items-center justify-center text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#30363D] transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-[#8B949E]">{post.date}</span>
                  {post.readingTime && (
                    <>
                      <span className="text-[#30363D]">·</span>
                      <span className="font-mono text-xs text-[#8B949E]">{post.readingTime}</span>
                    </>
                  )}
                </div>

                {/* Title */}
                <h2 className="font-mono text-xl md:text-2xl font-bold text-[#E6EDF3] leading-snug mb-8 pr-8">
                  {post.title}
                </h2>

                {/* MDX content */}
                <div className="mdx-content">
                  <MDXRemote {...mdxSource} />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
