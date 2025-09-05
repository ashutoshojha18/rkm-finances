import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.3 });
  
  const fullText = "Your Trusted Financial Partner with 18 Years of Expertise";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const stats = [
    { number: 18, label: "Years Experience" },
    { number: 1000, label: "Satisfied Clients" },
    { number: 500, label: "Projects Completed" },
    { number: 10, label: "Cities Served" }
  ];

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-image-container">
          <img 
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" 
            srcSet="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=50 400w,
                    https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60 800w,
                    https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=70 1200w"
            sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px"
            alt="Professional financial advisor consultation" 
            className="hero-image"
            loading="eager"
            decoding="async"
          />
          <div className="hero-overlay"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content" ref={ref}>
          <div className="hero-text">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="typing-text">{typedText}</span>
              <span className="cursor">|</span>
            </motion.h1>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Expert financial solutions for MSMEs, Corporates, Educational Institutions, Healthcare, Hospitality, and more.
            </motion.p>
            
            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.2, delay: 0.4 + index * 0.03 }}
                >
                  <h3 className="stat-number">{stat.number}{stat.number > 100 ? '+' : ''}</h3>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;