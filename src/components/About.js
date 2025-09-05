import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  const progressBars = [
    { label: "Financial Advisory", width: "95%" },
    { label: "Debt Syndication", width: "90%" },
    { label: "Client Satisfaction", width: "98%" }
  ];

  return (
    <section id="about" className="about section-animate">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            About RKM Finances
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Established in October 2022 by Rajeev Kumar Mishra, bringing 18 years of finance industry expertise
          </motion.p>
        </div>
        
        <div className="about-content" ref={ref}>
          <motion.div 
            className="about-image-container"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Professional financial consultation" 
              className="about-image"
            />
          </motion.div>
          
          <motion.div 
            className="about-story"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="about-heading">Our Story</h3>
            <p>
              RKM Finances was founded with a vision to provide comprehensive financial solutions to businesses and individuals across India. Under the leadership of Rajeev Kumar Mishra, who brings 18 years of extensive experience in the finance industry, we have established ourselves as a trusted partner for all financial needs.
            </p>
            
            <h3 className="about-heading">Our Expertise</h3>
            <p>
              We specialize in providing expert financial solutions tailored for diverse sectors including MSMEs, Corporates, Educational Institutions, Healthcare, Hospitality, and many more.
            </p>
            
            <div className="expertise-bars">
              {progressBars.map((bar, index) => (
                <motion.div 
                  key={index}
                  className="progress-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <div className="progress-label">{bar.label}</div>
                  <div className="progress-bar">
                    <motion.div 
                      className="progress-fill"
                      initial={{ width: 0 }}
                      animate={inView ? { width: bar.width } : {}}
                      transition={{ duration: 1, delay: 1 + index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;