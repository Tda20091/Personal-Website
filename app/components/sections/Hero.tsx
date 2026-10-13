'use client'
import React from 'react'
import { motion } from 'motion/react'
import { ArrowDown, Github, Facebook, Mail } from 'lucide-react'
import { socialLinks } from '@/data/contacts'

const Hero = () => {
  return (
    <section id="home" className='relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8'>
        <div className="max-w-5xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    className='text-5xl sm:text-6xl lg:text-7xl text-white mb-6'
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Hi, I&apos;m{' '}
                    <span className='bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                        Christopher Marajay
                    </span>
                </motion.h1>

                <motion.p
                    className='text-xl sm:text-2xl text-slate-300 mb-8'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    Creative Developer & Designer
                </motion.p>

                <motion.p
                    className='text-lg text-slate-400 mx-auto mb-12'
                    initial={{ opacity: 0 }}
                    animate={{ opacity:1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    Frontend-focused developer with several years of experience using React, Tailwind CSS, TypeScript, and Axios to build modern, visually engaging websites with robust functionality and seamless API integration.
                </motion.p>

                <motion.div
                    className='flex flex-wrap justify-center gap-4 mb-12'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <a
                        href='#contact'
                        className='px-8 py-3 bg-linear-to-r from-purple-500 via-blue-500 to-cyan-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all'
                    >
                        Get In Touch
                    </a>

                    <a
                        href='#projects'
                        className='px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all backdrop-blue-sm'
                    >
                        View Work
                    </a>
                </motion.div>

                <motion.div
                    className='flex justify-center gap-6'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    {socialLinks.map((social, index) => (
                        <div key={index}>
                            <a
                                href={social.links}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-slate-400 hover:text-white transition-colors'
                            >
                                <social.icon size={24} />
                            </a>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    className='absolute bottom-8 left-1/2 -translate-x-1/2'
                    animate={{ y: [0, 10, 0] }}
                    transition={{  repeat: Infinity, duration: 2 }}
                >
                    <ArrowDown size={34} className='text-slate-300'/>
                </motion.div>
            </motion.div>
        </div>
    </section>
  )
}

export default Hero