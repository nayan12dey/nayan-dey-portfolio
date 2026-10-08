'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const ContactSection = () => {
    const { contact } = PORTFOLIO_DATA;

    return (
        <section id="contact" className="relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-surface to-background border border-border-subtle rounded-2xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden"
            >
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="font-mono text-xs text-indigo-400 uppercase tracking-widest">
          Get In Touch
                </div>

                <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight max-w-2xl mx-auto">
                    Let’s Connect & Build Together
                </h2>

                <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                    Open to Full Stack Developer opportunities, projects, and technical discussions.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href={`mailto:${contact.email}`}
                        className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white font-mono text-sm rounded-lg font-medium hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20"
                    >
                        {contact.email}
                    </a>
                    <a
                        href={`tel:${contact.phone}`}
                        className="w-full sm:w-auto px-8 py-3.5 bg-surface text-gray-300 border border-border-subtle font-mono text-sm rounded-lg hover:border-gray-600 hover:text-white transition-all"
                    >
                        {contact.phone}
                    </a>
                </div>
            </motion.div>
        </section>
    );
};