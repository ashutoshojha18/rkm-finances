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
      image: "https://pplx-res.cloudinary.com/image/upload/v1755887245/pplx_project_search_images/ab71452932b222c34041272abdcbc58acb5dff93.png",
      expertise: ["Financial Advisory", "Debt Syndication"]
    },
    {
      name: "Senior Financial Advisor",
      role: "Lead Consultant",
      experience: "12+ years in banking sector",
      image: "https://pplx-res.cloudinary.com/image/upload/v1755401583/pplx_project_search_images/f8529433326e29a6535380a5ee58c52f349cd122.png",
      expertise: ["Corporate Finance", "Working Capital"]
    },
    {
      name: "Loan Specialist",
      role: "Retail Finance Head",
      experience: "8+ years in retail banking",
      image: "https://pplx-res.cloudinary.com/image/upload/v1754994731/pplx_project_search_images/c96c88751322e41a0a6cd24c1b286c93cfd5c3ba.png",
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