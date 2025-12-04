import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaBriefcase, FaCode, FaGraduationCap, FaEnvelope } from 'react-icons/fa';

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
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Determine active section
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 200; // Offset for better detection

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
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
                position: 'fixed',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1000,
                display: 'flex',
                justifyContent: 'center',
                width: 'auto'
            }}
        >
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.5rem',
                background: 'rgba(20, 20, 30, 0.6)',
                backdropFilter: 'blur(15px)',
                borderRadius: '50px',
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
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: isActive ? 'var(--primary-color)' : 'transparent',
                                border: 'none',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: isActive ? '#000' : 'var(--text-muted)',
                                position: 'relative',
                                transition: 'all 0.3s ease',
                                outline: 'none'
                            }}
                            title={item.label}
                        >
                            <Icon style={{ fontSize: '1.2rem' }} />

                            {isActive && (
                                <motion.div
                                    layoutId="active-glow"
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        borderRadius: '50%',
                                        boxShadow: '0 0 20px var(--primary-color)',
                                        zIndex: -1
                                    }}
                                />
                            )}
                        </motion.button>
                    );
                })}
            </div>
        </motion.nav>
    );
};

export default Navbar;
