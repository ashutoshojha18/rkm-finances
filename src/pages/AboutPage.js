import React from 'react';
import { motion } from 'framer-motion';
import About from '../components/About';

const AboutPage = () => {
  return (
    <motion.div
      style={{ paddingTop: '0', minHeight: '100vh' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <About />
    </motion.div>
  );
};

export default AboutPage;