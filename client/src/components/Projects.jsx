import React, { useState, useEffect } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { FaFolder, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects([
            {
                id: 1,
                title: 'Falcon Innovation Partners',
                description: 'A professional business website for innovation partners, featuring a sleek corporate design and responsive layout.',
                tech: ['Web Development', 'Business', 'React'],
                link: 'https://falconinnovationpartners.com',
                image: '/assets/falcon.png'
            },
            {
                id: 2,
                title: 'Le Sunset de Abdelle',
                description: 'A vibrant, atmospheric website for a sunset-themed venue. Focuses on visual storytelling and brand identity.',
                tech: ['Design', 'Frontend', 'Animation'],
                link: 'https://lesunsetdeabdelle.com',
                image: '/assets/sunset.png'
            },
            {
                id: 3,
                title: 'Art for Lebanon',
                description: 'A humanitarian aid initiative platform connecting donors with artists to support Lebanon.',
                tech: ['Charity', 'Web Design', 'Full Stack'],
                link: 'https://artforlebanon.com',
                image: '/assets/artforlebanon.png'
            },
            {
                id: 4,
                title: 'Kitabi 2021',
                description: 'An educational platform focused on literacy and book exchange. Built to foster a community of readers.',
                tech: ['Education', 'Web', 'Database'],
                link: 'https://kitabi2021.com',
                image: null
            }
        ]);
    }, []);

    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 15,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.02,   // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,   // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="nav-number">03.</span> Some Things I've Built
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Tilt options={defaultOptions} className="tilt-card">
                                <div className="project-card">
                                    {project.image && (
                                        <div className="project-image">
                                            <img src={project.image} alt={project.title} />
                                            <div className="image-overlay"></div>
                                        </div>
                                    )}
                                    <div className="project-content">
                                        <div className="project-header">
                                            <div className="folder-icon">
                                                <FaFolder />
                                            </div>
                                            <div className="external-links">
                                                <a href={project.link} aria-label="External Link" target="_blank" rel="noopener noreferrer">
                                                    <FaExternalLinkAlt />
                                                </a>
                                            </div>
                                        </div>
                                        <h3 className="project-title">
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                                        </h3>
                                        <div className="project-description">
                                            <p>{project.description}</p>
                                        </div>
                                        <ul className="project-tech-list">
                                            {project.tech && project.tech.map((tech, i) => (
                                                <li key={i}>{tech}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
