import React from 'react';
import { motion } from 'framer-motion';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <motion.div
      style={{ paddingTop: '0', minHeight: '100vh' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Services />
    </motion.div>
  );
};

export default ServicesPage;