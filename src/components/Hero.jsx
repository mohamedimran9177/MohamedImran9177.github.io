import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Hero = () => {
    return (
        <section style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '0 20px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="neon-text" style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                    Mohamed Imran
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h2 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-subheading)' }}>
                    Backend Developer | Aspiring Project Manager
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.1rem' }}
            >
                <p>Healthcare IT · Waste Management · Agile Delivery</p>
                <p style={{ marginTop: '0.5rem' }}>
                    3+ Years Leading Cross-Functional Teams
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem' }}
            >
                <a href="https://www.linkedin.com/in/mohamedimran9177" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ fontSize: '2rem', color: '#fff' }}><FaLinkedin /></a>
                <a href="mailto:MohamedImran9177@gmail.com" className="social-icon" style={{ fontSize: '2rem', color: '#fff' }}><FaEnvelope /></a>
                <a href="tel:+919177434891" className="social-icon" style={{ fontSize: '2rem', color: '#fff' }}><FaPhone /></a>
            </motion.div>

            <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                animation: 'bounce 2s infinite'
            }}>
                <span style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>↓</span>
            </div>

            <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0) translateX(-50%);}
          40% {transform: translateY(-10px) translateX(-50%);}
          60% {transform: translateY(-5px) translateX(-50%);}
        }
        .social-icon:hover {
          color: var(--primary-color) !important;
          transform: scale(1.1);
        }
      `}</style>
        </section>
    );
};

export default Hero;
