import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJs, FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, 
  FaGitAlt, FaGithub, FaDocker, FaFigma, FaTerminal, FaDatabase,
  FaBootstrap, FaNetworkWired, FaShieldAlt
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiExpress, SiWireshark, SiBurpsuite, 
  SiKalilinux, SiAdobexd, SiGnubash, SiMysql
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { 
      category: "Languages", 
      items: [
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "SQL", icon: <SiMysql /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Bash", icon: <SiGnubash /> }
      ] 
    },
    { 
      category: "Frameworks & Libraries", 
      items: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <FaBootstrap /> }
      ] 
    },
    { 
      category: "CyberSecurity & Tools", 
      items: [
        { name: "Kali Linux", icon: <SiKalilinux /> },
        { name: "Wireshark", icon: <SiWireshark /> },
        { name: "Burp Suite", icon: <SiBurpsuite /> },
        { name: "Metasploit", icon: <FaShieldAlt /> },
        { name: "Nmap", icon: <FaNetworkWired /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Git & GitHub", icon: <FaGithub /> }
      ] 
    },
    { 
      category: "Design & Other", 
      items: [
        { name: "Figma", icon: <FaFigma /> },
        { name: "Adobe XD", icon: <SiAdobexd /> },
        { name: "UI/UX", icon: <FaDatabase /> } // Generic icon for concept
      ] 
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="nav-number">04.</span> Skills & Arsenal
        </motion.h2>
        
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <motion.div 
              className="skill-category-card" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="skill-category-header">{skillGroup.category}</h3>
              <div className="skill-items-wrapper">
                {skillGroup.items.map((item, i) => (
                  <div key={i} className="skill-pill">
                    <span className="skill-icon">{item.icon}</span>
                    <span className="skill-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
