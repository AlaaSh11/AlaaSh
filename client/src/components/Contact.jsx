import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container contact-container">
                <motion.p
                    className="contact-overline"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    05. What's Next?
                </motion.p>

                <motion.h2
                    className="contact-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Get In Touch
                </motion.h2>

                <motion.p
                    className="contact-description"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    I'm currently looking for new opportunities, whether it's a freelance project or a full-time position.
                    My inbox is always open. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                </motion.p>

                <motion.div
                    className="contact-form-wrapper"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="contact-form">
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                            <textarea name="message" rows="5" placeholder="Message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary contact-btn">Send Message</button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
