import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Technical Skills',
        skills: [
            'Node.js', 'Python', 'SQL', 'PostgreSQL', 'MongoDB',
            'NestJS', 'Express.js', 'Flask', 'REST APIs', 'Microservices',
            'Cloud Computing (Azure)', 'Git', 'GitHub', 'Postman'
        ]
    },
    {
        title: 'Project Management',
        skills: [
            'Agile Methodologies', 'Scrum', 'Sprint Planning', 'Product Management',
            'Product Road Mapping', 'Feature Prioritization', 'Jira',
            'Stakeholder Management', 'Requirements Gathering'
        ]
    },
    {
        title: 'Leadership & Soft Skills',
        skills: [
            'Cross-functional Leadership', 'Communication', 'Customer Engagement',
            'Problem Solving', 'Critical Thinking', 'Team Building',
            'Data-driven Decision Making', 'Continuous Improvement'
        ]
    },
    {
        title: 'Domain Knowledge',
        skills: [
            'Healthcare IT (HIT)', 'HIPAA Compliance', 'Waste Management',
            'Logistics Management', 'User Experience (UX)'
        ]
    }
];

const Skills = () => {
    return (
        <section style={{ padding: '4rem 20px', maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="neon-text" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Skills
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-panel"
                    >
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', borderBottom: '1px solid var(--surface-border)', paddingBottom: '0.5rem' }}>
                            {category.title}
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                            {category.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '20px',
                                        fontSize: '0.9rem',
                                        border: '1px solid var(--surface-border)',
                                        transition: 'all 0.3s ease',
                                        cursor: 'default'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = 'var(--primary-color)';
                                        e.target.style.color = '#000';
                                        e.target.style.boxShadow = '0 0 10px var(--primary-color)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                        e.target.style.color = 'var(--text-color)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
