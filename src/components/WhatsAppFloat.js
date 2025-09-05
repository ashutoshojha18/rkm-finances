import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://wa.me/919999313053"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, duration: 0.2 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="whatsapp-float"
    >
      <FaWhatsapp size={28} />
    </motion.a>
  );
};

export default WhatsAppFloat;