import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Team = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  const teamMembers = [
    {
      name: "Rajeev Kumar Mishra",
      role: "Founder & CEO",
      experience: "18+ years in finance industry",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
      expertise: ["Financial Advisory", "Debt Syndication"]
    },
    {
      name: "Senior Financial Advisor",
      role: "Lead Consultant",
      experience: "12+ years in banking sector",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
      expertise: ["Corporate Finance", "Working Capital"]
    },
    {
      name: "Loan Specialist",
      role: "Retail Finance Head",
      experience: "8+ years in retail banking",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
      expertise: ["Home Loans", "Personal Finance"]
    }
  ];

  return (
    <section id="team" className="team section-animate">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our Professional Team
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Meet our experienced financial experts dedicated to your success
          </motion.p>
        </div>
        
        <div className="team-grid" ref={ref}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-member"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="team-image-container">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="team-image"
                  loading="lazy"
                />
                <motion.div 
                  className="team-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="team-social">
                    <a href="https://linkedin.com/in/rajeevkumarmishra" target="_blank" rel="noopener noreferrer" className="social-link">
                      <FaLinkedinIn />
                    </a>
                    <a href="mailto:rajeev@rkmfinance.com" className="social-link">
                      <FaEnvelope />
                    </a>
                  </div>
                </motion.div>
              </div>
              
              <div className="team-info">
                <h4>{member.name}</h4>
                <p className="team-role">{member.role}</p>
                <p className="team-experience">{member.experience}</p>
                <div className="team-expertise">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="expertise-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;