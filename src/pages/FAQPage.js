import React from 'react';
import { motion } from 'framer-motion';
import FAQ from '../components/FAQ';

const FAQPage = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <FAQ />
      </motion.div>
    </div>
  );
};

export default FAQPage;