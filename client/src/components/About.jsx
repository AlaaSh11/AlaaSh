import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="nav-number">02.</span> About Me
                </motion.h2>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p>
                            Hey! I'm <span className="highlight">Alaa Shehayyeb</span>. I'm a Computer Science student with a deep passion for <span className="highlight">CyberSecurity</span> and <span className="highlight">Web Development</span>.
                        </p>
                        <p>
                            I'm also the <span className="highlight">Founder</span> of several web projects, where I blend code with creativity. My goal is to build secure, high-performance applications that not only look great but work flawlessly.
                        </p>
                        <p>Here are a few technologies I've been working with recently:</p>
                        <ul className="skills-list">
                            <li>JavaScript (ES6+)</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Python</li>
                            <li>MySQL</li>
                            <li>CyberSecurity Tools</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="about-img"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="img-wrapper">
                            <div className="img-placeholder">
                                <span className="placeholder-text">AS</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
