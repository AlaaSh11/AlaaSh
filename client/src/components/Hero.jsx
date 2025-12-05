import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <motion.p
                        className="hero-greeting"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Hi, my name is
                    </motion.p>

                    <motion.h1
                        className="hero-name glitch-text"
                        data-text="Alaa Shehayyeb"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Alaa Shehayyeb
                    </motion.h1>

                    <motion.h2
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        I build <span className="highlight">secure</span> & <span className="highlight">robust</span> digital experiences.
                    </motion.h2>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        I'm a <span className="highlight">Founder</span> & <span className="highlight">Full-Stack Developer</span> specializing in CyberSecurity.
                        I combine technical expertise with entrepreneurial vision to build high-performance, secure applications that solve real-world problems.
                    </motion.p>

                    <motion.div
                        className="hero-cta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <a href="#projects" className="btn btn-primary">Check out my work</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </motion.div>

                    <motion.div
                        className="social-icons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="mailto:email@example.com"><FaEnvelope /></a>
                    </motion.div>
                </div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="cyber-card">
                        <div className="card-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                            <span className="header-title">developer_profile.js</span>
                        </div>
                        <div className="card-body">
                            <div className="line"><span className="keyword">const</span> <span className="variable">founder</span> <span className="operator">=</span> <span className="brace">{'{'}</span></div>
                            <div className="line indent">  <span className="key">name</span>: <span className="string">"Alaa"</span>,</div>
                            <div className="line indent">  <span className="key">vision</span>: <span className="string">"Innovation"</span>,</div>
                            <div className="line indent">  <span className="key">security</span>: <span className="boolean">true</span>,</div>
                            <div className="line indent">  <span className="key">stack</span>: <span className="brace">[</span></div>
                            <div className="line double-indent">    <span className="string">"React"</span>,</div>
                            <div className="line double-indent">    <span className="string">"Node.js"</span>,</div>
                            <div className="line double-indent">    <span className="string">"CyberSec"</span></div>
                            <div className="line indent">  <span className="brace">]</span></div>
                            <div className="line"><span className="brace">{'}'}</span>;</div>
                            <div className="line blink-cursor">_</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
