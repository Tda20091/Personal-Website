'use client'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'motion/react'
import Image from 'next/image'
import { feature } from '@/data/features'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  return (
    <section id="about" className='relative py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0 , opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className="text-4xl sm:text-5xl text-white mb-4">About me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ x:-50, opacity:0 }}
            animate={inView? {x:0, opacity:1} : {}}
            transition={{ delay:0.2, duration:0.8 }}
            className='relative'
          >
            <div className='aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blue-sm border border-white/18 p-8 flex items-center justify-center'>
              <div className="text-center">
                <Image 
                  src="/about/FORMAL.jpg"
                  alt="Christopher Marajay"
                  width={365}
                  height={650}
                  className='rounded-4xl'
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x:50, opacity:0 }}
            animate={inView? {x:0, opacity:1} : {}}
            transition={{ delay:0.2, duration:0.8 }}
            className='relative'
          >
            <h3 className="text-2xl text-white mb-4">
              Hello! I&apos;m a passionate developer
            </h3>

            <p className="text-slate-300 mb-4">
              With several year of frontend and backend development—primarily focused in frontend technologies such as ReactJs, Tailwindcss, Typescript, Axios—I specialize in building and managing web interfaces, integrating APIs, creating a visually appealing design combined with robust functionality.
            </p>

            <p className="text-slate-300 mb-4">
              I enjoy learning new technologies, exploring programming languages related to game development, and continuously improving my skills by keeping up with the latest technologies and design trends
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {feature.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
            >
              <feature.icon className='text-purple-400 mb-4' size={32} />
              <h4 className="text-white mb-2">{feature.title}</h4>
              <p className="text-slate-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About