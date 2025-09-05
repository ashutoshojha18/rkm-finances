import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCreditCard, FiHome, FiShield, FiPlus, FiMinus } from 'react-icons/fi';

const Services = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.2 });

  const services = [
    {
      id: 1,
      icon: <FiCreditCard />,
      title: "Debt Syndication",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      subcategories: [
        {
          title: "Term Loans",
          items: ["Project Finance", "Machinery Loan", "Lease Rental Discounting", "Corporate Loan"]
        },
        {
          title: "Working Capital",
          items: ["Cash Credit", "Overdraft Facility", "Letter of Credit", "Bank Guarantee", "Bills Discounting", "Suppliers Credit"]
        },
        {
          title: "Advisory Services",
          items: ["Financial Advisory Services", "Rating Advisory Services"]
        }
      ]
    },
    {
      id: 2,
      icon: <FiHome />,
      title: "Retail Loan Syndication",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      items: [
        "Home Loan",
        "Loan Against Property",
        "Education Loan",
        "Construction Equipment Finance",
        "Business Loan – Unsecured Loan",
        "Personal Loan – Unsecured Loan"
      ]
    },
    {
      id: 3,
      icon: <FiShield />,
      title: "Insurance Services",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      items: ["Corporate Insurance", "Personal Insurance"],
      description: "Comprehensive insurance solutions to protect your business and personal assets with competitive premiums and excellent coverage."
    }
  ];

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section id="services" className="services section-animate">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive financial solutions for all your business and personal needs
          </motion.p>
        </div>
        
        <div className="services-grid" ref={ref}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`service-card expandable-card ${expandedCard === service.id ? 'expanded' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div 
                className="service-header"
                onClick={() => toggleCard(service.id)}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <div className="expand-indicator">
                  {expandedCard === service.id ? <FiMinus /> : <FiPlus />}
                </div>
              </div>
              
              <div 
                className="service-image"
                onClick={() => toggleCard(service.id)}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-img"
                />
              </div>
              
              <motion.div 
                className="service-content"
                initial={false}
                animate={{ 
                  maxHeight: expandedCard === service.id ? 1000 : 0,
                  opacity: expandedCard === service.id ? 1 : 0
                }}
                transition={{ duration: 0.5 }}
              >
                {service.subcategories ? (
                  <div className="service-subcategories">
                    {service.subcategories.map((sub, subIndex) => (
                      <div key={subIndex} className="subcategory">
                        <h4>{sub.title}</h4>
                        <ul>
                          {sub.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="service-list">
                    <ul>
                      {service.items?.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                    {service.description && (
                      <p className="service-description">{service.description}</p>
                    )}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;