import React from 'react';
import { motion } from 'framer-motion';

const LoadingOverlay = () => {
  return (
    <motion.div
      className="loading-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-spinner"></div>
      <div className="loading-text">RKM FINANCES</div>
    </motion.div>
  );
};

export default LoadingOverlay;