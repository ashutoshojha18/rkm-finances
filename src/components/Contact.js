import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.2 });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you! Your message has been sent successfully. We will contact you soon.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactDetails = [
    {
      icon: "📞",
      title: "Phone",
      content: "+91 9999313053",
      link: "tel:+919999313053"
    },
    {
      icon: "✉️",
      title: "Email",
      content: "rajeev@rkmfinance.com",
      link: "mailto:rajeev@rkmfinance.com"
    },
    {
      icon: "📍",
      title: "Coverage Areas",
      content: "North India, Mumbai, Indore\nExpanding across India"
    },
    {
      icon: "🕒",
      title: "Business Hours",
      content: "Mon - Sat: 9:00 AM - 7:00 PM\nSunday: Closed"
    }
  ];

  return (
    <section id="contact" className="contact section-animate">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get in touch with our financial experts for personalized solutions
          </motion.p>
        </div>
        
        <div className="contact-content" ref={ref}>
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3>Get in Touch</h3>
            <div className="contact-details">
              <div className="contact-detail">
                <FiPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p><a href="tel:+919999313053">+91 9999313053</a></p>
                </div>
              </div>
              
              <div className="contact-detail">
                <FiMail className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:rajeev@rkmfinance.com">rajeev@rkmfinance.com</a></p>
                </div>
              </div>
              
              <div className="contact-detail">
                <FiMapPin className="contact-icon" />
                <div>
                  <h4>Address</h4>
                  <p>North India, Mumbai, Indore<br />Expanding across India</p>
                </div>
              </div>
              
              <div className="contact-detail">
                <FiClock className="contact-icon" />
                <div>
                  <h4>Business Hours</h4>
                  <p>Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Send us a message</h3>
              <form onSubmit={handleSubmit} className="animated-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="service">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    className="form-control"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="debt-syndication">Debt Syndication</option>
                    <option value="retail-loans">Retail Loans</option>
                    <option value="insurance">Insurance Services</option>
                    <option value="advisory">Financial Advisory</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="btn btn-primary btn-full"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;