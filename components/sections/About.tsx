'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const About = () => {
    return (
        <section id="about" className="space-y-6">
            <div>
                <div className="font-mono text-xs text-indigo-400 uppercase tracking-widest mb-2">
          Introduction
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    About Me
                </h2>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-surface border border-border-subtle rounded-xl p-6 sm:p-8"
            >
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {PORTFOLIO_DATA.about}
                </p>
            </motion.div>
        </section>
    );
};