'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navigationLinks = [
        { name: 'Home', href: '#home'},
        { name: 'About', href: '#about'},
        { name: 'Projects', href: '#projects'},
        { name: 'Skills', href: '#skills'}, 
        { name: 'Contact', href: '#contact'},       
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/50 backdrop-blur-lg border-b border-white/10' : ''}`}
        >   
        {/* max-w-5xl */}
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className='text-xl bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'
                    >
                        CM
                    </motion.div>

                    {/* desktop navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navigationLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity:0, y:-20 }}
                                animate={{ opacity:1, y:0 }}
                                transition={{ delay: 0.1 * index }}
                                className='text-slate-300 hover:text-white transition-colors'
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* mobile navigation */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-slate-300 hover:text-white"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* mobile menu */}
            <AnimatePresence>
                {isOpen && (<motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-slate-900/95 backdrop-blur-lg border-b border-white/10"
                >
                    <div className="px-4 py-4 space-y-3">
                        {navigationLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-slate-300 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navigation;