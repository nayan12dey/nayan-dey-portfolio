'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Education = () => {
    const { education, languages } = PORTFOLIO_DATA;

    return (
        <section id="education" className="space-y-8">
            <div>
                <div className="font-mono text-xs text-indigo-400 uppercase tracking-widest mb-2">
          Background
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    Education & Languages
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Education Box */}
                <div className="lg:col-span-2">
                    {education.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-surface border border-border-subtle rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 h-full"
                        >
                            <div>
                                <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                                <p className="text-sm text-gray-300 mt-1">{edu.university} • {edu.location}</p>
                                <span className="text-xs font-mono text-emerald-400 mt-2 block">
                                    CGPA: {edu.cgpa}
                                </span>
                            </div>
                            <span className="font-mono text-xs text-gray-400 bg-background px-3 py-1.5 rounded border border-border-subtle self-start sm:self-auto">
                                {edu.duration}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Languages Box */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-surface border border-border-subtle rounded-xl p-6 space-y-4"
                >
                    <h3 className="font-mono text-sm font-semibold text-indigo-300 uppercase tracking-wider border-b border-border-subtle pb-2">
                        Languages
                    </h3>
                    <div className="space-y-2">
                        {languages.map((lang) => (
                            <div key={lang.language} className="flex justify-between items-center">
                                <span className="text-sm text-gray-200">{lang.language}</span>
                                <span className="text-xs font-mono text-gray-400 bg-background px-2 py-0.5 rounded border border-border-subtle">
                                    {lang.proficiency}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};