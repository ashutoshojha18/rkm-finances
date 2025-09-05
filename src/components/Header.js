import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiPhone, FiMail } from 'react-icons/fi';
import { FaFacebookF, FaWhatsapp, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <>
      {/* Top Strip - Non-sticky */}
      <div className="top-strip">
        <div className="container">
          <div className="top-strip-content">
            <div className="contact-info">
              <div className="contact-item">
                <FiMail size={12} />
                <a href="mailto:rajeev@rkmfinance.com">rajeev@rkmfinance.com</a>
              </div>
              <div className="contact-item">
                <FiPhone size={12} />
                <a href="tel:+919999313053">Rajeev Kumar - +91 9999313053</a>
              </div>
              <div className="contact-item">
                <FiPhone size={12} />
                <a href="tel:+919999313053">Support - +91 9999313053</a>
              </div>
            </div>
            <div className="social-links">
              <a href="https://facebook.com/rkmfinances" target="_blank" rel="noopener noreferrer" className="social-link facebook"><FaFacebookF size={12} /></a>
              <a href="https://twitter.com/rkmfinances" target="_blank" rel="noopener noreferrer" className="social-link twitter"><FaTwitter size={12} /></a>
              <a href="https://linkedin.com/company/rkmfinances" target="_blank" rel="noopener noreferrer" className="social-link linkedin"><FaLinkedinIn size={12} /></a>
              <a href="https://instagram.com/rkmfinances" target="_blank" rel="noopener noreferrer" className="social-link instagram"><FaInstagram size={12} /></a>
              <a href="https://wa.me/919999313053" target="_blank" rel="noopener noreferrer" className="social-link whatsapp"><FaWhatsapp size={12} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Sticky */}
      <motion.header
        className={`header ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="main-nav">
          <div className="container">
            <div className="header-content">
              <motion.div 
                className="logo"
                whileHover={{ scale: 1.05 }}
              >
                <Link to="/">
                  <h2 className="logo-text">RKM FINANCES</h2>
                  <span className="tagline">Since 2022 • 18+ Years Experience</span>
                </Link>
              </motion.div>

              <div className={`nav-center ${isMobileMenuOpen ? 'active' : ''}`}>
                <nav className="nav">
                  <button className="nav-link" onClick={() => { scrollToSection('hero'); setIsMobileMenuOpen(false); }}>Home</button>
                  <button className="nav-link" onClick={() => { scrollToSection('about'); setIsMobileMenuOpen(false); }}>About Us</button>
                  <button className="nav-link" onClick={() => { scrollToSection('services'); setIsMobileMenuOpen(false); }}>Services</button>
                  <button className="nav-link" onClick={() => { scrollToSection('team'); setIsMobileMenuOpen(false); }}>Team</button>
                  <button className="nav-link" onClick={() => { scrollToSection('testimonials'); setIsMobileMenuOpen(false); }}>Testimonials</button>
                  <button className="nav-link" onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }}>Contact</button>
                </nav>
              </div>

              <motion.button
                className="theme-toggle"
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDark ? <FiSun /> : <FiMoon />}
              </motion.button>

              <div 
                className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;