'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#education' }, // Mapped to background/education or experience
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Handle scroll events for glassmorphism background transition
  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setScrolled(latest > 30);
    });
  }, [scrollY]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border-subtle py-3.5 shadow-card'
            : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center space-x-2 font-mono text-xs tracking-wider uppercase text-content-primary hover:text-white transition-colors"
          >
            <span className="h-2 w-2 rounded-full bg-accent group-hover:scale-125 transition-transform duration-200" />
            <span className="font-bold tracking-widest text-content-primary">
              NAYAN<span className="text-accent">.DEV</span>
            </span>
          </a>

          {/* Desktop Navigation Links with Animated Pill Indicator */}
          <nav className="hidden md:flex items-center space-x-1 bg-surface/50 border border-border-subtle/60 p-1 rounded-full backdrop-blur-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-xs font-mono tracking-wide transition-colors duration-200 ${isActive
                      ? 'text-content-primary font-medium'
                      : 'text-content-secondary hover:text-content-primary'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-surface-elevated border border-border rounded-full -z-10 shadow-subtle"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Resume CTA & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-4 py-1.5 text-xs font-mono text-content-primary bg-surface border border-border-subtle rounded-lg hover:border-accent/40 hover:bg-surface-elevated transition-all duration-200 shadow-subtle"
            >
              <span>Resume</span>
              <span className="ml-1 text-content-tertiary">↗</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-content-secondary hover:text-content-primary focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`h-0.5 w-full bg-current transform transition-transform duration-200 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}
                />
                <span
                  className={`h-0.5 w-full bg-current transition-opacity duration-200 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                />
                <span
                  className={`h-0.5 w-full bg-current transform transition-transform duration-200 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-x-0 top-[60px] z-40 bg-background/95 backdrop-blur-xl border-b border-border-subtle p-6 md:hidden shadow-elevated"
          >
            <nav className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between text-sm font-mono py-2 border-b border-border-subtle/40 ${isActive
                        ? 'text-accent font-semibold'
                        : 'text-content-secondary hover:text-content-primary'
                      }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
                  </a>
                );
              })}
              <div className="pt-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-2.5 text-xs font-mono text-content-primary bg-surface border border-border-subtle rounded-lg hover:border-accent/40 transition-colors"
                >
                  <span>Download Resume</span>
                  <span className="ml-1 text-content-tertiary">↗</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};