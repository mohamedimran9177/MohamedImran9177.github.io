import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section style={{ padding: '4rem 20px', maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="neon-text" style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
                    About Me
                </h2>


                <div className="glass-panel" style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#e0e0e0' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Aspiring Project Manager with 3+ years of experience bridging the gap between technology and business outcomes.
                        I bring hands-on expertise in leading cross-functional teams, managing product roadmaps, and delivering solutions
                        across <span style={{ color: 'var(--primary-color)' }}>Healthcare IT</span> and <span style={{ color: 'var(--secondary-color)' }}>Waste Management</span> domains.
                    </p>

                    <p style={{ marginBottom: '1.5rem' }}>
                        Skilled in Agile project delivery, stakeholder management, requirement gathering, feature prioritization, and client engagement,
                        I ensure projects are aligned with business objectives while meeting timelines and quality standards.
                    </p>

                    <p style={{ marginBottom: '1.5rem' }}>
                        With a strong foundation in software development (APIs, cloud solutions, system optimization), I translate complex technical
                        concepts into actionable plans, enabling smooth collaboration between engineering, QA, and product teams.
                    </p>

                    <p>
                        Passionate about solving real-world problems through structured planning, effective communication, and continuous improvement,
                        I’m eager to contribute to impactful projects in the healthcare and sustainability space.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
