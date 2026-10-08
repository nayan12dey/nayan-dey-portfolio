'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Hero = () => {
    const { personal, hero } = PORTFOLIO_DATA;

    return (
        <section className="relative pt-12 md:pt-20 pb-8 flex flex-col items-start justify-center min-h-[75vh]">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Status Badge */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface border border-border-subtle text-xs font-mono mb-8"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-gray-300">{personal.availabilityStatus}</span>
            </motion.div>

            {/* Name */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 leading-tight"
            >
                {personal.name}.
            </motion.h1>

            {/* Professional Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="font-mono text-indigo-400 text-lg sm:text-2xl mb-6"
            >
                {personal.professionalTitle} • {personal.location}
            </motion.div>

            {/* Headline & Subheadline */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-2xl text-gray-300 font-normal max-w-3xl leading-relaxed mb-4"
            >
                {hero.headline}
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed mb-10"
            >
                {hero.subheadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 items-center"
            >
                <a
                    href="#projects"
                    className="px-6 py-3 bg-indigo-600 text-white font-mono text-sm rounded-lg font-medium hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20"
                >
                    {hero.primaryCtaText}
                </a>

                <a
                    href="#contact"
                    className="px-6 py-3 bg-surface text-gray-300 border border-border-subtle font-mono text-sm rounded-lg hover:border-gray-600 hover:text-white transition-all"
                >
                    {hero.secondaryCtaText}
                </a>
            </motion.div>
        </section>
    );
};