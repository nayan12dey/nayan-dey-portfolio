'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const TECH_HIGHLIGHTS = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Express', icon: '⚡' },
    { name: 'TypeScript', icon: '📘' },
];

export const Hero = () => {
    const { personal, hero } = PORTFOLIO_DATA;
    const [copied, setCopied] = useState(false);
    const [activeTab, setActiveTab] = useState<'stack' | 'overview'>('stack');

    const handleCopyCommand = () => {
        navigator.clipboard.writeText('npx nayandey');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section
            id="hero"
            className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-technical-grid"
        >
            {/* Radial Background Light & Ambient Glow */}
            <div className="ambient-glow-top" />
            <div className="absolute top-1/3 -left-32 w-80 h-80 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-10 right-0 w-96 h-96 bg-accent/5 blur-[140px] rounded-full pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
            >
                {/* Left Column: Hero Copy & Actions */}
                <div className="lg:col-span-7 space-y-8 z-10">
                    {/* Availability Status Badge */}
                    <motion.div variants={itemVariants} className="inline-flex">
                        <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full bg-surface border border-border-subtle shadow-subtle">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            <span className="text-2xs font-mono uppercase tracking-wider text-content-secondary">
                                {personal.availabilityStatus || 'Available for projects & roles'}
                            </span>
                        </div>
                    </motion.div>

                    {/* Main Title & Editorial Subhead */}
                    <div className="space-y-3">
                        <motion.div
                            variants={itemVariants}
                            className="font-mono text-xs sm:text-sm text-accent uppercase tracking-widest flex items-center gap-2"
                        >
                            <span>Full-Stack & MERN Developer</span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-content-primary leading-[1.08]"
                        >
                            Hi, I’m <span className="text-white">{personal.name || 'Nayan Dey'}</span>.
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg sm:text-2xl text-content-secondary font-normal max-w-2xl leading-relaxed pt-2"
                        >
                            {hero.headline ||
                                'Building modern, scalable, and user-focused web applications with the MERN Stack.'}
                        </motion.p>
                    </div>

                    {/* Supporting Statement */}
                    <motion.p
                        variants={itemVariants}
                        className="text-xs sm:text-sm text-content-tertiary max-w-xl leading-relaxed"
                    >
                        {hero.subheadline ||
                            'Specializing in high-performance frontend interfaces, robust backend microservices, and smooth user experiences.'}
                    </motion.p>

                    {/* Tech Pill Highlights */}
                    <motion.div variants={itemVariants} className="space-y-2">
                        <div className="text-2xs font-mono text-content-tertiary uppercase tracking-wider">
                            Core Tech Stack
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {TECH_HIGHLIGHTS.map((tech) => (
                                <span
                                    key={tech.name}
                                    className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md text-xs font-mono bg-surface/80 border border-border-subtle text-content-secondary hover:text-content-primary hover:border-accent/40 transition-colors"
                                >
                                    <span className="text-2xs">{tech.icon}</span>
                                    <span>{tech.name}</span>
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Call to Actions */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center gap-4 pt-2"
                    >
                        <a
                            href="#projects"
                            className="group relative inline-flex items-center justify-center px-6 py-3.5 text-xs font-mono text-white bg-accent rounded-lg font-medium shadow-card hover:shadow-glow hover:bg-accent-hover transition-all duration-300"
                        >
                            <span>{hero.primaryCtaText || 'View My Work'}</span>
                            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                                →
                            </span>
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-mono text-content-primary bg-surface border border-border-subtle rounded-lg hover:border-border-hover hover:bg-surface-elevated transition-all duration-300"
                        >
                            <span>{hero.secondaryCtaText || 'Contact Me'}</span>
                        </a>

                        <button
                            onClick={handleCopyCommand}
                            className="hidden sm:inline-flex items-center space-x-2 px-4 py-3.5 text-xs font-mono text-content-secondary bg-background-alt border border-border-subtle rounded-lg hover:border-accent/40 hover:text-content-primary transition-colors"
                            title="Click to copy terminal command"
                        >
                            <span className="text-accent">$</span>
                            <span>{copied ? 'copied to clipboard!' : 'npx nayandey'}</span>
                            <span className="text-2xs text-content-tertiary">
                                {copied ? '✓' : '📋'}
                            </span>
                        </button>
                    </motion.div>
                </div>

                {/* Right Column: Floating Terminal / Developer Inspector UI */}
                <motion.div
                    variants={itemVariants}
                    className="lg:col-span-5 relative z-10"
                >
                    {/* Subtle Floating Animation wrapper */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="bg-surface/90 border border-border rounded-xl shadow-elevated backdrop-blur-xl overflow-hidden"
                    >
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-surface-elevated/80 border-b border-border-subtle">
                            <div className="flex items-center space-x-2">
                                <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                                <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
                                <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                            </div>

                            {/* Tab Selector */}
                            <div className="flex bg-background/60 p-0.5 rounded-md border border-border-subtle">
                                <button
                                    onClick={() => setActiveTab('stack')}
                                    className={`px-2.5 py-0.5 text-2xs font-mono rounded-xs transition-colors ${activeTab === 'stack'
                                            ? 'bg-surface text-content-primary font-semibold'
                                            : 'text-content-tertiary hover:text-content-secondary'
                                        }`}
                                >
                                    system.json
                                </button>
                                <button
                                    onClick={() => setActiveTab('overview')}
                                    className={`px-2.5 py-0.5 text-2xs font-mono rounded-xs transition-colors ${activeTab === 'overview'
                                            ? 'bg-surface text-content-primary font-semibold'
                                            : 'text-content-tertiary hover:text-content-secondary'
                                        }`}
                                >
                                    status.log
                                </button>
                            </div>

                            <span className="text-2xs font-mono text-content-tertiary">
                                v2.6.0
                            </span>
                        </div>

                        {/* Terminal Content Body */}
                        <div className="p-5 font-mono text-xs leading-relaxed space-y-3 min-h-[280px] bg-background-alt/80">
                            {activeTab === 'stack' ? (
                                <>
                                    <div className="text-content-tertiary">
                                        <span className="text-accent">const</span> developer = &#123;
                                    </div>
                                    <div className="pl-4 space-y-1 text-content-secondary">
                                        <div>
                                            <span className="text-content-tertiary">name:</span>{' '}
                                            <span className="text-emerald-400">"{personal.name}"</span>,
                                        </div>
                                        <div>
                                            <span className="text-content-tertiary">role:</span>{' '}
                                            <span className="text-emerald-400">"MERN Stack Developer"</span>,
                                        </div>
                                        <div>
                                            <span className="text-content-tertiary">location:</span>{' '}
                                            <span className="text-emerald-400">"{personal.location}"</span>,
                                        </div>
                                        <div>
                                            <span className="text-content-tertiary">specializations:</span> [
                                        </div>
                                        <div className="pl-4 text-indigo-300">
                                            "React Ecosystem", "Node/Express Microservices",
                                        </div>
                                        <div className="pl-4 text-indigo-300">
                                            "Database Optimization", "Scalable UI Architecture"
                                        </div>
                                        <div>],</div>
                                        <div>
                                            <span className="text-content-tertiary">status:</span>{' '}
                                            <span className="text-emerald-400">"Ready for deployment"</span>
                                        </div>
                                    </div>
                                    <div className="text-content-tertiary">&#125;;</div>

                                    <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-2xs text-content-tertiary">
                                        <span>STATUS: 200 OK</span>
                                        <span className="text-emerald-400 animate-pulse">● LIVE</span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="space-y-2 text-content-secondary">
                                        <div className="flex items-center gap-2">
                                            <span className="text-emerald-400">✓</span>
                                            <span>Next.js App Router setup complete</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-emerald-400">✓</span>
                                            <span>MongoDB pipeline connection verified</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-emerald-400">✓</span>
                                            <span>JWT / Auth security layer initialized</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-indigo-400">ℹ</span>
                                            <span>Tailwind design tokens mapped to portfolio</span>
                                        </div>
                                    </div>

                                    <div className="mt-4 p-3 bg-surface border border-border-subtle rounded-md space-y-1">
                                        <div className="text-2xs text-content-tertiary uppercase">Runtime Metrics</div>
                                        <div className="flex justify-between text-2xs">
                                            <span>Response Speed:</span>
                                            <span className="text-emerald-400 font-bold">&lt; 50ms</span>
                                        </div>
                                        <div className="flex justify-between text-2xs">
                                            <span>Code Cleanliness:</span>
                                            <span className="text-indigo-400 font-bold">100% Type-Safe</span>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};