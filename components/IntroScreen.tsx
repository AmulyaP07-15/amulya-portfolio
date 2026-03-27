'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem('_intro');
    if (!seen) {
      setVisible(true);
      sessionStorage.setItem('_intro', '1');
      const t = setTimeout(() => setVisible(false), 2200);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[99990] flex flex-col items-center justify-center gap-8"
          style={{ background: '#0D1117' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center gap-6"
          >
            <p className="font-mono text-4xl font-bold tracking-tight">
              <span className="text-[#6E40C9]">AP</span>
              <span className="text-[#E6EDF3]">.</span>
            </p>

            {/* Progress bar */}
            <div className="relative w-40 h-px bg-[#30363D] overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-[#6E40C9]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#8B949E]/60"
            >
              Loading
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
