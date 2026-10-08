'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';

export const FeaturedProjects = () => {
    return (
        <section id="projects" className="space-y-10">
            <div>
                <div className="font-mono text-xs text-indigo-400 uppercase tracking-widest mb-2">
          Project Showcase
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    Featured Projects
                </h2>
            </div>

            <div className="space-y-8">
                {PORTFOLIO_DATA.projects.map((project: Project, index: number) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative bg-surface border border-border-subtle rounded-xl p-6 md:p-8 hover:border-indigo-500/40 transition-all duration-300"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                            <div className="lg:col-span-8 space-y-4">
                                <span className="font-mono text-xs text-indigo-400 uppercase tracking-wider block">
                                    {project.type}
                                </span>

                                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                                    {project.name}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="space-y-2 pt-2">
                                    <div className="text-xs font-mono text-gray-500 uppercase">Key Features:</div>
                                    <ul className="space-y-1">
                                        {project.features.map((feature, idx) => (
                                            <li key={idx} className="text-xs text-gray-300 flex items-start space-x-2">
                                                <span className="text-indigo-400 font-mono">›</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-4">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 text-xs font-mono text-gray-300 bg-background border border-border-subtle rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links Section */}
                            <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border-subtle pt-6 lg:pt-0 lg:pl-6 space-y-3">
                                <div className="text-xs font-mono text-gray-500 uppercase">Available Links</div>
                                <div className="flex flex-col space-y-2">
                                    {project.links.live.url ? (
                                        <a
                                            href={project.links.live.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-between px-4 py-2.5 bg-background hover:bg-border-subtle text-xs font-mono text-gray-200 rounded-lg border border-border-subtle transition-colors"
                                        >
                                            <span>{project.links.live.label}</span>
                                            <span>↗</span>
                                        </a>
                                    ) : (
                                        <div className="px-4 py-2.5 bg-background text-xs font-mono text-gray-500 rounded-lg border border-border-subtle">
                                            {project.links.live.label} (Unavailable)
                                        </div>
                                    )}

                                    {project.links.githubClient.url ? (
                                        <a
                                            href={project.links.githubClient.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-between px-4 py-2.5 bg-background hover:bg-border-subtle text-xs font-mono text-gray-200 rounded-lg border border-border-subtle transition-colors"
                                        >
                                            <span>{project.links.githubClient.label}</span>
                                            <span>⌥</span>
                                        </a>
                                    ) : (
                                        <div className="px-4 py-2.5 bg-background text-xs font-mono text-gray-500 rounded-lg border border-border-subtle">
                                            {project.links.githubClient.label} (Unavailable)
                                        </div>
                                    )}

                                    {project.links.githubServer.url ? (
                                        <a
                                            href={project.links.githubServer.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-between px-4 py-2.5 bg-background hover:bg-border-subtle text-xs font-mono text-gray-200 rounded-lg border border-border-subtle transition-colors"
                                        >
                                            <span>{project.links.githubServer.label}</span>
                                            <span>⌥</span>
                                        </a>
                                    ) : (
                                        <div className="px-4 py-2.5 bg-background text-xs font-mono text-gray-500 rounded-lg border border-border-subtle">
                                            {project.links.githubServer.label} (Unavailable)
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};