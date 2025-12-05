import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container navbar-container">
                <div className="logo">
                    <span className="logo-symbol">A</span>
                    <span className="logo-text">Shehayyeb</span>
                </div>

                <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                        <motion.li
                            key={item}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index + 0.5 }}
                        >
                            <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                                <span className="nav-number">0{index + 1}.</span> {item}
                            </a>
                        </motion.li>
                    ))}
                    <motion.li
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <a href="/resume.pdf" className="resume-btn">Resume</a>
                    </motion.li>
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
