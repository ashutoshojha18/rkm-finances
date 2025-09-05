import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaWhatsapp, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Team', path: '/team' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const services = [
    { name: 'Debt Syndication', path: '/services' },
    { name: 'Retail Loans', path: '/services' },
    { name: 'Insurance Services', path: '/services' },
    { name: 'Financial Advisory', path: '/services' }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: 'https://facebook.com/rkmfinances' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com/company/rkmfinances' },
    { icon: <FaTwitter />, url: 'https://twitter.com/rkmfinances' },
    { icon: <FaInstagram />, url: 'https://instagram.com/rkmfinances' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/919999313053' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <h3>RKM FINANCES</h3>
              <p>Your Trusted Financial Partner with 18 Years of Expertise</p>
            </div>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <div className="footer-links">
              <button onClick={() => scrollToSection('hero')} className="footer-link">Home</button>
              <button onClick={() => scrollToSection('about')} className="footer-link">About Us</button>
              <button onClick={() => scrollToSection('services')} className="footer-link">Services</button>
              <button onClick={() => scrollToSection('team')} className="footer-link">Our Team</button>
              <button onClick={() => scrollToSection('contact')} className="footer-link">Contact Us</button>
            </div>
          </motion.div>
          
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Services</h4>
            <div className="footer-links">
              <button onClick={() => scrollToSection('services')} className="footer-link">Debt Syndication</button>
              <button onClick={() => scrollToSection('services')} className="footer-link">Retail Loans</button>
              <button onClick={() => scrollToSection('services')} className="footer-link">Insurance Services</button>
              <button onClick={() => scrollToSection('services')} className="footer-link">Financial Advisory</button>
            </div>
          </motion.div>
          
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <p>📞 <a href="tel:+919999313053">+91 9999313053</a></p>
              <p>✉️ <a href="mailto:rajeev@rkmfinance.com">rajeev@rkmfinance.com</a></p>
              <p>🏢 Serving across India</p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} RKM Finances. All rights reserved. | Owned by Rajeev Kumar Mishra | Established October 2022</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;