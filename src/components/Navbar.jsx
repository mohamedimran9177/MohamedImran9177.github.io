import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaBriefcase, FaCode, FaGraduationCap, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
    { id: 'home', icon: FaHome, label: 'Home' },
    { id: 'about', icon: FaUser, label: 'About' },
    { id: 'experience', icon: FaBriefcase, label: 'Experience' },
    { id: 'skills', icon: FaCode, label: 'Skills' },
    { id: 'education', icon: FaGraduationCap, label: 'Education' },
    { id: 'contact', icon: FaEnvelope, label: 'Contact' },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Determine active section
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
            setActiveSection(id);
            setIsOpen(false); // Close menu after clicking
        }
    };

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    position: 'fixed',
                    left: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 1001,
                    background: 'rgba(20, 20, 30, 0.8)',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--primary-color)',
                    boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)',
                    outline: 'none'
                }}
            >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.button>

            {/* Collapsible Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                        style={{
                            position: 'fixed',
                            left: '80px', // Positioned next to the toggle button
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 1000,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            overflow: 'visible'
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.8rem',
                            padding: '1.5rem 1rem',
                            background: 'rgba(20, 20, 30, 0.8)',
                            backdropFilter: 'blur(15px)',
                            borderRadius: '20px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                        }}>
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = activeSection === item.id;

                                return (
                                    <motion.button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        initial="idle"
                                        whileHover={{ backgroundColor: 'rgba(255,255,255,0.08)', boxShadow: '0 0 8px rgba(255,255,255,0.2)' }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{
                                            background: isActive ? 'var(--primary-color)' : 'transparent',
                                            border: 'none',
                                            borderRadius: '12px',
                                            padding: '0.8rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            cursor: 'pointer',
                                            color: isActive ? '#000' : 'var(--text-muted)',
                                            position: 'relative',
                                            transition: 'background-color 0.3s ease',
                                            outline: 'none',
                                            width: 'auto',
                                            minWidth: '150px',
                                            overflow: 'visible'
                                        }}
                                    >
                                        <Icon style={{ fontSize: '1.2rem', minWidth: '20px' }} />
                                        <span style={{
                                            fontSize: '0.95rem',
                                            fontWeight: isActive ? 'bold' : 'normal',
                                            whiteSpace: 'nowrap',
                                            marginLeft: '8px',
                                            color: '#fff',
                                            opacity: 1,
                                            display: 'inline-block',
                                            visibility: 'visible'
                                        }}>
                                            {item.label}
                                        </span>

                                        {isActive && (
                                            <motion.div
                                                layoutId="active-glow"
                                                style={{
                                                    position: 'absolute',
                                                    inset: 0,
                                                    borderRadius: '12px',
                                                    boxShadow: '0 0 20px var(--primary-color)',
                                                    zIndex: -1,
                                                    opacity: 0.5
                                                }}
                                            />
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
