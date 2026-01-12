'use client'
import React from 'react'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import { project } from '@/data/features'
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image'

const Project = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="projects" className='relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8'>
            <div className="max-w-5xl mx-auto text-center">
                <motion.div
                    ref={ref}
                    initial={{ y:50, opacity: 0 }}
                    animate={inView ? { y:0, opacity: 1} : {}}
                    transition={{ duration: 0.8 }}
                    className='text-center mb-16'
                >
                    <h2 className="text-4xl sm:text-5xl text-white mb-4">Featured Project</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {project.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ y:30, opacity:0 }}
                            animate={inView? {y:0, opacity:1} : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className='group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all'
                        >
                            <div className="aspect-video overflow-hidden">
                                <Image 
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    height={200}
                                    width={350}
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl text-white mb-2">{project.title}</h3>
                                <p className="text-slate-400 text-sm mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className='px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs'
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={project.repo}
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className='flex items-center gap-2 text-slate-300 hover:text-white transition-colors'

                                >
                                    <Github size={18} />
                                    <span className="text-sm">Code</span>
                                </a>
                                <a
                                    href={project.live_url}
                                    target='_blank'
                                    rel="noopener noreferer"
                                    className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                                >
                                    <ExternalLink size={18} />
                                    <span className="text-sm">Live</span>
                                </a>
                            </div>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project