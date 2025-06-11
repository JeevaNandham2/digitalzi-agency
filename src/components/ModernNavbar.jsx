
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ModernNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Reviews', to: 'testimonials' },
    { name: 'Contact', to: 'contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveItem(sectionId);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-2xl shadow-2xl border-b-2 border-yellow-400/30' 
          : 'bg-black/80 backdrop-blur-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <div className="flex items-center space-x-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg"
              >
                <span className="text-black font-bold text-lg">D</span>
              </motion.div>
              <div className="flex flex-col">
                <motion.div
                  className="font-bold text-xl lg:text-2xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent"
                >
                  Digitalzi
                </motion.div>
                <motion.div
                  className="text-xs text-yellow-300/80 font-medium tracking-wider -mt-1"
                >
                  Digital Excellence
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Menu - Always visible */}
          <div className="flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(251, 191, 36, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.to)}
                className={`relative px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  activeItem === item.to
                    ? 'bg-yellow-400 text-black shadow-lg'
                    : 'text-white hover:text-yellow-400 border border-yellow-400/20 hover:border-yellow-400/50'
                }`}
              >
                {item.name}
                {activeItem === item.to && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-yellow-400 rounded-lg -z-10"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
            
            {/* CTA Button */}
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(251, 191, 36, 0.4)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="ml-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-xl font-bold text-sm shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 border-2 border-yellow-300"
            >
              Get Started
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-2 inline-block"
              >
                →
              </motion.span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default ModernNavbar;
