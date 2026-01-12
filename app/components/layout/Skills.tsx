'use client'
import React from 'react'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import { skillCategories } from '@/data/features'

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="skills" className='relative py-50 px-4 sm:px-6 lg:px-8'>
            <div className="max-w-7xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ y:50, opacity: 0 }}
                    animate={inView ? { y:0, opacity: 1} : {}}
                    transition={{ duration: 0.8 }}
                    className='text-center mb-16'
                >
                    <h2 className="text-4xl sm:text-5xl text-white mb-4">Skills & Expertise</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((categoryInfo, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 + categoryIndex * 0.1 }}
                            className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6'
                        >
                            <h3 className="text-white text-xl mb-6">{categoryInfo.category}</h3>
                            <div className="space-y-4">
                                {categoryInfo.skills.map((skill, skillIndex) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-slate-300 text-sm">{skill.name}</span>
                                            <span className="text-purple-400 text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={inView ? { width: `${skill.level}%` } : {}}
                                                transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                                                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills