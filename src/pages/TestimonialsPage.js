import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../components/Testimonials';

const TestimonialsPage = () => {
  return (
    <motion.div
      style={{ paddingTop: '0', minHeight: '100vh' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Testimonials />
    </motion.div>
  );
};

export default TestimonialsPage;