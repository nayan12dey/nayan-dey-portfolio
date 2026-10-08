'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const TechStack = () => {
    const { technical, aiTools, interpersonal } = PORTFOLIO_DATA.skills;

    return (
        <section id="skills" className="space-y-8">
            <div>
                <div className="font-mono text-xs text-indigo-400 uppercase tracking-widest mb-2">
          Capabilities
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    Skills & Technologies
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {technical.map((cat, index) => (
                    <motion.div
                        key={cat.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-surface border border-border-subtle rounded-xl p-6 space-y-4"
                    >
                        <h3 className="font-mono text-sm font-semibold text-indigo-300 uppercase tracking-wider border-b border-border-subtle pb-3">
                            {cat.category}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {cat.items.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1.5 text-xs font-mono text-gray-200 bg-background border border-border-subtle rounded-md"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* AI Tools & Interpersonal Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-surface border border-border-subtle rounded-xl p-6 space-y-3"
                >
                    <h3 className="font-mono text-sm font-semibold text-indigo-300 uppercase tracking-wider">
                        AI Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {aiTools.map((tool) => (
                            <span
                                key={tool}
                                className="px-3 py-1 text-xs font-mono text-gray-300 bg-background border border-border-subtle rounded-md"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-surface border border-border-subtle rounded-xl p-6 space-y-3"
                >
                    <h3 className="font-mono text-sm font-semibold text-indigo-300 uppercase tracking-wider">
                        Interpersonal Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {interpersonal.map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1 text-xs font-mono text-gray-300 bg-background border border-border-subtle rounded-md"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};