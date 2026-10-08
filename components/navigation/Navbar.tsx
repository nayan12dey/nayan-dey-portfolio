'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setScrolled(latest > 40);
    });
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border-subtle py-3 shadow-2xl'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#"
          className="group flex items-center space-x-2 font-mono text-sm tracking-tight text-gray-200 hover:text-white transition-colors"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform" />
          <span className="font-bold">{PORTFOLIO_DATA.personal.name.toLowerCase().replace(' ', '')}</span>
          <span className="text-gray-500 text-xs">/ fullstack</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-indigo-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center px-4 py-1.5 text-xs font-mono text-gray-200 bg-surface border border-border-subtle rounded-full hover:border-indigo-500/50 hover:text-white transition-all"
        >
          <span>Get in Touch</span>
        </a>
      </div>
    </motion.header>
  );
};