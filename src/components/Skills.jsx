import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTasks, FaUsers, FaBrain } from 'react-icons/fa';

const skillCategories = [
    {
        title: 'Technical Skills',
        icon: FaCode,
        color: '#00f0ff',
        skills: [
            'Node.js', 'Python', 'SQL', 'PostgreSQL', 'MongoDB',
            'NestJS', 'Express.js', 'Flask', 'REST APIs', 'Microservices',
            'Cloud Computing (Azure)', 'Git', 'GitHub', 'Postman'
        ]
    },
    {
        title: 'Project Management',
        icon: FaTasks,
        color: '#bc13fe',
        skills: [
            'Agile Methodologies', 'Scrum', 'Sprint Planning', 'Product Management',
            'Product Road Mapping', 'Feature Prioritization', 'Jira',
            'Stakeholder Management', 'Requirements Gathering'
        ]
    },
    {
        title: 'Leadership & Soft Skills',
        icon: FaUsers,
        color: '#ff00ff',
        skills: [
            'Cross-functional Leadership', 'Communication', 'Customer Engagement',
            'Problem Solving', 'Critical Thinking', 'Team Building',
            'Data-driven Decision Making', 'Continuous Improvement'
        ]
    },
    {
        title: 'Domain Knowledge',
        icon: FaBrain,
        color: '#00ffaa',
        skills: [
            'Healthcare IT (HIT)', 'HIPAA Compliance', 'Waste Management',
            'Logistics Management', 'User Experience (UX)'
        ]
    }
];

const Skills = () => {
    const [hoveredCategory, setHoveredCategory] = useState(null);

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4rem 20px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated background particles */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: 'none',
                opacity: 0.1
            }}>
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        style={{
                            position: 'absolute',
                            width: '2px',
                            height: '2px',
                            background: i % 2 === 0 ? '#00f0ff' : '#bc13fe',
                            borderRadius: '50%',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 1, 0.2],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                    />
                ))}
            </div>

            <div style={{ maxWidth: '1200px', width: '100%', position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="neon-text" style={{
                        fontSize: '2.5rem',
                        marginBottom: '1rem',
                        textAlign: 'center'
                    }}>
                        Skills & Expertise
                    </h2>
                    <p style={{
                        textAlign: 'center',
                        color: 'var(--text-muted)',
                        marginBottom: '3rem',
                        fontSize: '1.1rem'
                    }}>
                        Hover over each category to explore
                    </p>
                </motion.div>

                <div className="skills-grid" style={{
                    display: 'grid',
                    gap: '2rem'
                }}>
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon;
                        const isHovered = hoveredCategory === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                onMouseEnter={() => setHoveredCategory(index)}
                                onMouseLeave={() => setHoveredCategory(null)}
                                style={{
                                    position: 'relative',
                                    background: isHovered
                                        ? `linear-gradient(135deg, rgba(0, 240, 255, 0.05), rgba(188, 19, 254, 0.05))`
                                        : 'rgba(255, 255, 255, 0.03)',
                                    backdropFilter: 'blur(10px)',
                                    border: `2px solid ${isHovered ? category.color + '80' : 'rgba(255, 255, 255, 0.1)'}`,
                                    borderRadius: '20px',
                                    padding: '2rem',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                                    boxShadow: isHovered
                                        ? `0 15px 40px ${category.color}20, 0 0 30px ${category.color}10`
                                        : '0 8px 32px rgba(0, 0, 0, 0.3)',
                                    cursor: 'pointer',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Animated corner accents */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    width: '100px',
                                    height: '100px',
                                    background: `radial-gradient(circle at top right, ${category.color}20, transparent)`,
                                    opacity: isHovered ? 1 : 0,
                                    transition: 'opacity 0.4s ease'
                                }} />

                                {/* Icon with glow effect */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    marginBottom: '1.5rem'
                                }}>
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: isHovered
                                            ? `linear-gradient(135deg, ${category.color}40, ${category.color}20)`
                                            : 'rgba(255, 255, 255, 0.05)',
                                        borderRadius: '15px',
                                        border: `2px solid ${category.color}`,
                                        boxShadow: isHovered ? `0 0 30px ${category.color}60` : 'none',
                                        transition: 'all 0.4s ease',
                                        transform: isHovered ? 'rotate(10deg)' : 'rotate(0deg)'
                                    }}>
                                        <Icon style={{
                                            fontSize: '1.8rem',
                                            color: category.color,
                                            filter: isHovered ? 'drop-shadow(0 0 8px currentColor)' : 'none'
                                        }} />
                                    </div>
                                    <h3 style={{
                                        color: isHovered ? category.color : '#fff',
                                        fontSize: '1.4rem',
                                        fontWeight: 'bold',
                                        transition: 'all 0.3s ease',
                                        textShadow: isHovered ? `0 0 20px ${category.color}80` : 'none',
                                        flex: 1
                                    }}>
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Skills with staggered animation */}
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.7rem'
                                }}>
                                    {category.skills.map((skill, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: isHovered ? i * 0.03 : 0
                                            }}
                                            style={{
                                                background: isHovered
                                                    ? `linear-gradient(135deg, ${category.color}30, ${category.color}10)`
                                                    : 'rgba(255, 255, 255, 0.05)',
                                                padding: '0.5rem 1rem',
                                                borderRadius: '12px',
                                                fontSize: '0.85rem',
                                                border: `1px solid ${isHovered ? category.color + '60' : 'rgba(255, 255, 255, 0.1)'}`,
                                                transition: 'all 0.3s ease',
                                                color: isHovered ? '#fff' : 'var(--text-color)',
                                                fontWeight: isHovered ? '500' : 'normal',
                                                boxShadow: isHovered ? `0 0 15px ${category.color}30` : 'none',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Scan line effect */}
                                {isHovered && (
                                    <motion.div
                                        initial={{ top: 0 }}
                                        animate={{ top: '100%' }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: 'linear'
                                        }}
                                        style={{
                                            position: 'absolute',
                                            left: 0,
                                            right: 0,
                                            height: '2px',
                                            background: `linear-gradient(90deg, transparent, ${category.color}, transparent)`,
                                            opacity: 0.5,
                                            pointerEvents: 'none'
                                        }}
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <style>{`
                .skills-grid {
                    grid-template-columns: 1fr;
                }
                @media (min-width: 768px) {
                    .skills-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @keyframes gradient-shift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
            `}</style>
        </section>
    );
};

export default Skills;
