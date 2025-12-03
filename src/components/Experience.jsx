import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const experiences = [
    {
        company: 'Tericsoft',
        companyUrl: 'https://www.tericsoft.com/',
        role: 'Back End Developer',
        period: 'Apr 2023 - Present',
        duration: '2 yrs 9 mos',
        location: 'Hyderabad, Telangana, India · On-site',
        description: [
            'Contributed to the development of a healthcare product for the U.S. market, ensuring workflows and features aligned with industry standards and customer needs.',
            'Owned the product roadmap by prioritizing features in collaboration with stakeholders, balancing customer needs and business objectives to deliver maximum value.',
            'Led daily standups, coordinated feature prioritization, and aligned engineering and QA teams to deliver healthcare product modules on schedule.',
            'Worked closely with customers to understand pain points and capture their requirements, translating feedback into product improvements that enhanced user experience and increased customer retention.',
            'Engaged in client demos and feedback sessions to validate deliverables and uncover opportunities for continuous improvement.',
            'Designed and developed backend APIs for complex healthcare workflows, improving system efficiency and reducing API response times, directly impacting user experience for healthcare providers.'
        ]
    },
    {
        company: 'Bintix',
        companyUrl: 'https://bintix.com/',
        role: 'Back End Developer',
        period: 'Sep 2022 - Mar 2023',
        duration: '7 mos',
        location: 'Hyderabad, Telangana, India · Remote',
        description: [
            'Collaborated with teams to identify waste management challenges in Indonesia and Argentina and shaped product solutions to address them.',
            'Contributed to product roadmap discussions, providing technical insights that influenced build vs. buy decisions and sequencing of releases.',
            'Partnered with product managers to translate operational challenges into actionable product features, prioritizing enhancements that improved system throughput and user experience.',
            'Implemented Mixpanel to track user behavior and measure feature adoption, ensuring product decisions were data-driven.',
            'Developed backend APIs for the Waste Management Application, improving waste collection efficiency, optimizing logistics workflows, and increasing overall system throughput.'
        ]
    }
];

const Experience = () => {
    return (
        <section style={{ padding: '4rem 20px', maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="neon-text" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Experience
            </h2>

            <div style={{ position: 'relative', borderLeft: '2px solid var(--surface-border)', paddingLeft: '2rem' }}>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        style={{ marginBottom: '4rem', position: 'relative' }}
                    >
                        {/* Timeline Dot */}
                        <div style={{
                            position: 'absolute',
                            left: '-2.6rem',
                            top: '0',
                            width: '1.2rem',
                            height: '1.2rem',
                            background: 'var(--primary-color)',
                            borderRadius: '50%',
                            boxShadow: '0 0 10px var(--primary-color)'
                        }} />

                        <div className="glass-panel">
                            <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                                {exp.role}
                            </h3>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
                                {exp.companyUrl ? (
                                    <a
                                        href={exp.companyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: 'var(--primary-color)',
                                            textDecoration: 'none',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseOver={(e) => { e.currentTarget.style.textShadow = '0 0 8px var(--primary-color)'; }}
                                        onMouseOut={(e) => { e.currentTarget.style.textShadow = 'none'; }}
                                    >
                                        {exp.company} <FaExternalLinkAlt style={{ fontSize: '1rem' }} />
                                    </a>
                                ) : (
                                    exp.company
                                )}
                            </h4>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <FaCalendarAlt /> {exp.period} ({exp.duration})
                                </span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <FaMapMarkerAlt /> {exp.location}
                                </span>
                            </div>

                            <ul style={{ listStyle: 'none' }}>
                                {exp.description.map((item, i) => (
                                    <li key={i} style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.8rem' }}>
                                        <span style={{ color: 'var(--secondary-color)', minWidth: '10px' }}>▹</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
