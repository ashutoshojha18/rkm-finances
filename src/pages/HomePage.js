import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
};

export default HomePage;