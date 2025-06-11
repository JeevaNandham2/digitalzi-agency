import React from 'react';
import AnimatedNavbar from '@/components/AnimatedNavbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Services from '@/components/Services';
import ModernContact from '@/components/ModernContact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="font-poppins bg-gradient-to-br from-black via-gray-900 to-black min-h-screen relative">
      <AnimatedNavbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Other sections */}
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <ModernContact />
      <Footer />
    </div>
  );
};

export default Index;
