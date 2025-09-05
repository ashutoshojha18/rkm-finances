import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Contact />
      </motion.div>
    </div>
  );
};

export default ContactPage;