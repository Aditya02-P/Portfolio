import React, { useEffect, useState, useRef } from 'react';
import './CursorGlow.css';

// Iconic vector SVGs for skills
const skillLogos = [
  {
    id: 'java',
    name: 'Java',
    top: '8%',
    left: '10%',
    size: 46,
    rotate: -8,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 18c3 1.5 9 1.5 14 0" />
        <path d="M6 21c3 1 7 1 10 0" />
        <path d="M7 14c2-2 3-4 2-7 0 0-1 2-2 3-1.5 1.5-1 3 0 4z" fill="currentColor" fillOpacity="0.25" />
        <path d="M13 13c2-2.5 3-5 2-8 0 0-1.5 2-2.5 3.5-1.5 2-1 3.5.5 4.5z" fill="currentColor" fillOpacity="0.25" />
        <path d="M17 12c1.5-1.5 2.5-3.5 1.5-6 0 0-1 1.5-1.8 2.5-1 1.2-.7 2.5.3 3.5z" fill="currentColor" fillOpacity="0.25" />
        <path d="M5 11c5 .5 10-.5 14 1" />
      </svg>
    )
  },
  {
    id: 'cpp',
    name: 'C++',
    top: '22%',
    left: '5%',
    size: 44,
    rotate: 10,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M10 8.5C9.2 7.6 8 7 6.7 7 4.1 7 2 9.2 2 12s2.1 5 4.7 5c1.3 0 2.5-.6 3.3-1.5" />
        <path d="M14 10v4m-2-2h4" />
        <path d="M20 10v4m-2-2h4" />
      </svg>
    )
  },
  {
    id: 'docker',
    name: 'Docker',
    top: '12%',
    left: '86%',
    size: 48,
    rotate: -6,
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 3h2v2h-2V3zm-3 3h2v2h-2V6zm3 0h2v2h-2V6zm3 0h2v2h-2V6zm-9 3h2v2H7V9zm3 0h2v2h-2V9zm3 0h2v2h-2V9zm3 0h2v2h-2V9zm-9 3h2v2H7v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm6.5-1.5c-.4 0-.8.1-1.2.3-.6-.8-1.5-1.3-2.6-1.3-.2 0-.4 0-.6.1-.4-1.2-1.5-2.1-2.9-2.1H1.5C.7 10.5 0 11.2 0 12v3.5C0 19.1 3.4 22 7.5 22c5.2 0 9.7-3.2 11.4-8 1.4-.2 2.6-1.1 3-2.4.1-.4.1-.7.1-1.1 0-1.1-.9-2-2-2z" />
      </svg>
    )
  },
  {
    id: 'spring',
    name: 'Spring',
    top: '28%',
    left: '92%',
    size: 42,
    rotate: 12,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4c-4.5.5-12.5 4.5-14 13 4-2 7.5-1.5 11-4.5 3-2.5 3.5-6.5 3-8.5z" />
        <path d="M6 17c1.5-3 4-6 9-9" />
      </svg>
    )
  },
  {
    id: 'postgres',
    name: 'PostgreSQL',
    top: '15%',
    left: '48%',
    size: 44,
    rotate: -4,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="7" rx="8" ry="4" />
        <path d="M4 7v10c0 2.2 3.6 4 8 4s8-1.8 8-4V7" />
        <path d="M4 12c0 2.2 3.6 4 8 4s8-1.8 8-4" />
      </svg>
    )
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    top: '38%',
    left: '12%',
    size: 46,
    rotate: -10,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8.5 4.9v9.8L12 21.6 3.5 16.7V6.9L12 2z" />
        <path d="M12 22V12" />
        <path d="M12 12L3.5 7" />
        <path d="M12 12l8.5-5" />
      </svg>
    )
  },
  {
    id: 'react',
    name: 'React',
    top: '44%',
    left: '84%',
    size: 48,
    rotate: 15,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    top: '52%',
    left: '4%',
    size: 42,
    rotate: 6,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 9h6M10 9v8" />
        <path d="M14 15.5c.8.6 1.8.8 2.5.4.6-.4.6-1.2 0-1.6-.7-.5-2.2-.7-2.2-2 0-1.2 1-2.1 2.5-2.1.8 0 1.6.3 2.2.8" />
      </svg>
    )
  },
  {
    id: 'python',
    name: 'Python',
    top: '58%',
    left: '90%',
    size: 44,
    rotate: -8,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11.5 3H8.8C6.1 3 4 5.1 4 7.8v2.7h8V9c0-.6.4-1 1-1h1.5V6.5C14.5 4.6 13.2 3 11.5 3z" />
        <circle cx="7" cy="6" r=".8" fill="currentColor" />
        <path d="M12.5 21h2.7c2.7 0 4.8-2.1 4.8-4.8v-2.7h-8V15c0 .6-.4 1-1 1H9.5v1.5c0 1.9 1.3 3.5 3 3.5z" />
        <circle cx="17" cy="18" r=".8" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 'linux',
    name: 'Linux',
    top: '64%',
    left: '14%',
    size: 44,
    rotate: -4,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 9l3 3-3 3" />
        <path d="M12 15h5" />
      </svg>
    )
  },
  {
    id: 'git',
    name: 'Git',
    top: '70%',
    left: '82%',
    size: 44,
    rotate: 10,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="6" cy="18" r="2.5" />
        <circle cx="18" cy="9" r="2.5" />
        <path d="M6 8.5v7" />
        <path d="M6 13c3 0 7-1 9.5-3" />
      </svg>
    )
  },
  {
    id: 'concurrency',
    name: 'Threads',
    top: '78%',
    left: '6%',
    size: 42,
    rotate: 8,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 4v16M15 4v16M4 9h16M4 15h16" />
      </svg>
    )
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    top: '84%',
    left: '88%',
    size: 42,
    rotate: -12,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C12 2 6 8.5 6 13.5c0 3.3 2.7 6 6 6.5 3.3-.5 6-3.2 6-6.5C18 8.5 12 2 12 2z" />
        <path d="M12 2v18" />
      </svg>
    )
  },
  {
    id: 'sockets',
    name: 'Sockets',
    top: '90%',
    left: '18%',
    size: 40,
    rotate: 5,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <circle cx="4" cy="6" r="2" />
        <circle cx="20" cy="6" r="2" />
        <circle cx="4" cy="18" r="2" />
        <circle cx="20" cy="18" r="2" />
        <path d="M6 7l4 3.5M18 7l-4 3.5M6 17l4-3.5M18 17l-4-3.5" />
      </svg>
    )
  },
  {
    id: 'restapi',
    name: 'REST API',
    top: '32%',
    left: '32%',
    size: 40,
    rotate: -6,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16M4 12h16M4 18h16" />
        <circle cx="8" cy="6" r="2" fill="currentColor" fillOpacity="0.3" />
        <circle cx="16" cy="12" r="2" fill="currentColor" fillOpacity="0.3" />
        <circle cx="10" cy="18" r="2" fill="currentColor" fillOpacity="0.3" />
      </svg>
    )
  },
  {
    id: 'mysql',
    name: 'MySQL',
    top: '86%',
    left: '72%',
    size: 42,
    rotate: 12,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    )
  },
  {
    id: 'express',
    name: 'Express',
    top: '68%',
    left: '38%',
    size: 40,
    rotate: -5,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18h12M6 6h12M6 12h8" />
      </svg>
    )
  },
  {
    id: 'tailwind',
    name: 'Tailwind',
    top: '92%',
    left: '46%',
    size: 42,
    rotate: 7,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 12c1.5-3 3.5-4.5 6-4.5 3.5 0 4.5 2.5 6 3.5 1.5 1 2.5 1 4 0-1.5 3-3.5 4.5-6 4.5-3.5 0-4.5-2.5-6-3.5-1.5-1-2.5-1-4 0z" />
      </svg>
    )
  }
];

const CursorGlow = () => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);
  const posRef = useRef({ x: -1000, y: -1000 });
  const rafId = useRef(null);

  useEffect(() => {
    // Only enable for pointers that can hover (desktop/laptop mouse & trackpad)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      setVisible(true);

      if (!rafId.current) {
        rafId.current = requestAnimationFrame(() => {
          if (containerRef.current) {
            containerRef.current.style.setProperty('--cursor-x', `${posRef.current.x}px`);
            containerRef.current.style.setProperty('--cursor-y', `${posRef.current.y}px`);
          }
          rafId.current = null;
        });
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`cursor-glow-container ${visible ? 'visible' : ''}`}
      aria-hidden="true"
    >
      {/* 1. Ambient Cursor Spotlight Light */}
      <div className="cursor-glow-light" />

      {/* 2. Hidden Skill Logos Layer (Revealed by Flashlight in Dark Mode) */}
      <div className="hidden-logos-layer">
        {skillLogos.map((logo) => (
          <div
            key={logo.id}
            className="hidden-logo-item"
            style={{
              top: logo.top,
              left: logo.left,
              transform: `rotate(${logo.rotate}deg)`,
              '--logo-size': `${logo.size}px`
            }}
          >
            {logo.svg}
            <span className="hidden-logo-label">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CursorGlow;
