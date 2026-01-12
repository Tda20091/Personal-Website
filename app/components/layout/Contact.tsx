'use client'
import React from 'react'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import { SendHorizontal } from 'lucide-react'
import { contactInfo } from '@/data/contacts'

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="contact" className='relative py-20 sm:px-6 lg:px-8'>
            <div className="max-w-5xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ y:50, opacity: 0 }}
                    animate={inView ? { y:0, opacity: 1} : {}}
                    transition={{ duration: 0.8 }}
                    className='text-center mb-16'
                >
                    <h2 className="text-4xl sm:text-5xl text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }} 
                    >
                        <h3 className="text-2xl text-white mb-6">Let&apos;s talk about everything!</h3>
                        <p className="text-slate-400 mb-8">
                            Don&apos;t like forms? Send me an email or reach out through social media. 👋
                        </p>

                        <div className="space-y-6">
                            {contactInfo.map((contact, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x:-50 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.3 + index * 0.1, duration: 0.8}}
                                    className='flex items-start gap-4'
                                >
                                    <div className='w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg backdrop-blur-sm border border-white/10 flex justify-center items-center flex-shrink-0'>
                                        <contact.icon className='text-purple-500' size={18} />
                                    </div>

                                    <div>
                                        <div className="text-slate-400 text-sm">{contact.label}</div>
                                        <a className="text-slate-400 text-sm" href={contact.href}>{contact.value}</a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{  duration: 0.8, delay: 0.2 }}
                    >
                        <form className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block text-slate-300 mb-2 text-sm'>
                                    Your Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    className='w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors'
                                    placeholder='Enter Name'
                                />
                            </div>
                            <div>
                                <label htmlFor="name" className='block text-slate-300 mb-2 text-sm'>
                                    Your Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    className='w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors'
                                    placeholder='Enter Email'
                                />
                            </div>
                            <div>
                                <label htmlFor='message' className='block text-slate-300 mb-2 text-sm'>
                                    Your Message
                                </label>
                                <textarea 
                                    name="message" 
                                    id="message"
                                    required
                                    rows={6}
                                    className='w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-color resize-none'
                                    placeholder='Enter your message'
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
                            >
                                <span>Send Message</span>
                                <SendHorizontal size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact