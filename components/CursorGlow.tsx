'use client';

import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    setVisible(true);

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] rounded-full hidden md:block"
      style={{
        width: 400,
        height: 400,
        left: pos.x,
        top: pos.y,
        transform: 'translate(-50%, -50%)',
        background:
          'radial-gradient(circle, rgba(110,64,201,0.06) 0%, transparent 70%)',
        willChange: 'left, top',
      }}
    />
  );
}
