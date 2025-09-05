import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.3 });

  const testimonials = [
    {
      text: "RKM Finances helped us secure project funding for our hospital expansion. Their expertise and professional approach made the entire process smooth and efficient.",
      author: "Dr. Amit Sharma",
      role: "Hospital Administrator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
      rating: 5
    },
    {
      text: "Working capital solutions provided by RKM Finances have been instrumental in growing our business. Highly recommend their services for reliable financial solutions.",
      author: "Priya Gupta",
      role: "MSME Owner",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
      rating: 5
    },
    {
      text: "The team at RKM Finances understands the complex needs of corporate financing. Their 18 years of experience truly shows in their expert advisory services.",
      author: "Rajesh Kumar",
      role: "Corporate Finance Head",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="testimonials" className="testimonials section-animate">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Client Testimonials
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What our satisfied clients say about us
          </motion.p>
        </div>
        
        <div className="testimonials-carousel" ref={ref}>
          <div className="testimonial-track">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="testimonial-slide active"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="testimonial-content">
                  <div className="testimonial-image">
                    <img 
                      src={testimonials[currentSlide].image} 
                      alt="Client testimonial" 
                      className="testimonial-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="testimonial-text">
                    <p>"{testimonials[currentSlide].text}"</p>
                    <div className="testimonial-author">
                      <h4>{testimonials[currentSlide].author}</h4>
                      <span>{testimonials[currentSlide].role}</span>
                    </div>
                    <div className="rating">
                      {'★'.repeat(testimonials[currentSlide].rating)}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="testimonial-nav">
            <motion.button 
              className="testimonial-prev"
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ‹
            </motion.button>
            
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <motion.span
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
            
            <motion.button 
              className="testimonial-next"
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ›
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;