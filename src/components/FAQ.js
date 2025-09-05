import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FAQ = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [ref, inView] = useInView({ threshold: 0.2 });

  const faqs = [
    {
      question: "What types of loans does RKM Finances provide?",
      answer: "We provide a comprehensive range of loans including home loans, personal loans, business loans, education loans, project finance, machinery loans, and working capital solutions."
    },
    {
      question: "What is the typical processing time for loan approval?",
      answer: "Processing time varies depending on the type of loan and documentation. Generally, personal and business loans can be processed within 3-7 working days, while project finance may take 2-4 weeks."
    },
    {
      question: "Do you provide services outside North India?",
      answer: "Yes, while we have strong presence in North India, Mumbai, and Indore, we are expanding our services across India. Contact us to check availability in your location."
    },
    {
      question: "What documents are required for loan applications?",
      answer: "Document requirements vary by loan type. Common documents include identity proof, address proof, income documents, and business registration documents. Our team will provide a detailed checklist based on your specific needs."
    },
    {
      question: "Do you provide insurance services as well?",
      answer: "Yes, we offer both corporate and personal insurance services in addition to our comprehensive loan and financial advisory services."
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleItem = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <section id="faq" className="faq section-animate">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get answers to common questions about our loans and financial services
          </motion.p>
        </div>
        
        <div className="faq-container" ref={ref}>
          <motion.div 
            className="faq-search"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <input
              type="text"
              placeholder="Search FAQs..."
              className="faq-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>
          
          <div className="faq-list">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`faq-item ${activeItem === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div 
                  className="faq-question"
                  onClick={() => toggleItem(index)}
                >
                  <h3>{faq.question}</h3>
                  <motion.span 
                    className="faq-toggle"
                    animate={{ rotate: activeItem === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    +
                  </motion.span>
                </div>
                
                <motion.div 
                  className="faq-answer"
                  initial={false}
                  animate={{ 
                    maxHeight: activeItem === index ? 200 : 0,
                    opacity: activeItem === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;