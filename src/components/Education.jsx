import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4rem 20px'
        }}>
            <div style={{ maxWidth: '1000px', width: '100%' }}>
                <h2 className="neon-text" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                    Education
                </h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="glass-panel"
                    style={{ display: 'flex', alignItems: 'center', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}
                >
                    <div style={{
                        fontSize: '3rem',
                        color: 'var(--secondary-color)',
                        background: 'rgba(188, 19, 254, 0.1)',
                        padding: '1.5rem',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <FaGraduationCap />
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Bachelor of Technology - B.Tech</h3>
                        <h4 style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                            Lords Institute of Engineering & Technology
                        </h4>
                        <p style={{ color: 'var(--text-muted)' }}>2017 – 2021</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
