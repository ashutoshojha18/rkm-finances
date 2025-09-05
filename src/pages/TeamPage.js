import React from 'react';
import { motion } from 'framer-motion';
import Team from '../components/Team';

const TeamPage = () => {
  return (
    <motion.div
      style={{ paddingTop: '0', minHeight: '100vh' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Team />
    </motion.div>
  );
};

export default TeamPage;