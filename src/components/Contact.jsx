import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <footer style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4rem 20px',
            textAlign: 'center',
            background: 'rgba(0,0,0,0.5)'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{ maxWidth: '1000px', width: '100%' }}
            >
                <h2 className="neon-text" style={{ fontSize: '2rem', marginBottom: '2rem' }}>
                    Get In Touch
                </h2>

                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                    Interested in collaborating or have a project in mind? Let's build something amazing together.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
                    <a href="https://www.linkedin.com/in/mohamedimran9177" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ fontSize: '2rem', color: '#fff' }}><FaLinkedin /></a>
                    <a href="mailto:MohamedImran9177@gmail.com" className="social-icon" style={{ fontSize: '2rem', color: '#fff' }}><FaEnvelope /></a>
                    <a href="tel:+919177434891" className="social-icon" style={{ fontSize: '2rem', color: '#fff' }}><FaPhone /></a>
                </div>

                <div style={{ borderTop: '1px solid var(--surface-border)', paddingTop: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    <p>&copy; {new Date().getFullYear()} Mohamed Imran. All rights reserved.</p>

                </div>
            </motion.div>
        </footer>
    );
};

export default Contact;
