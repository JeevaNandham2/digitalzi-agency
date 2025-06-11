import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/seo-services' }, // or a dedicated /services page
    { name: 'Blog', to: '/blog' },
    { name: 'Contact', to: '/contact' },
  ];

  const services = [
    'SEO Optimization',
    'PPC Advertising',
    'Social Media Marketing',
    'Video Editing',
    'Web Design',
    'Online Reputation Management',
  ];

  const socialLinks = [
    {
      icon: FaWhatsapp,
      href: 'https://wa.me/919640709670',
      color: 'hover:text-yellow-400',
    },
    // {
    //   icon: FaTwitter,
    //   href: '#',
    //   color: 'hover:text-yellow-400',
    // },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/nethaji-k-821988355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
      color: 'hover:text-yellow-400',
    },
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/_digitalzi?igsh=MXRvYWIzNmU5OWpicA==',
      color: 'hover:text-yellow-400',
    },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                Digitalzi
              </h3>
              <p className="text-gray-300 leading-relaxed mt-3">
                Transform your digital presence with our cutting-edge marketing strategies. We help
                businesses grow through data-driven solutions and creative excellence.
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-400" />
                <span className="text-gray-300">digitalzi2318@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-yellow-400" />
                <span className="text-gray-300">+91 96407 09670</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-yellow-400" />
                <span className="text-gray-300">Gummidipoondi, Chennai</span>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 ${item.color} hover:bg-yellow-400/10`}
                >
                  <item.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-yellow-400 cursor-default block transition">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Offer Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold mb-6">Free Marketing Audit</h4>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Get a comprehensive analysis of your digital marketing performance with expert
              recommendations.
            </p>

            <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-4 text-sm text-gray-300">
              🎯 Limited time offer – Book a free strategy call now via WhatsApp or email!
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-gray-800 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © 2025 Digitalzi. All rights reserved. |
            <a href="#" className="ml-1 hover:text-yellow-400">Privacy Policy</a> |
            <a href="#" className="ml-1 hover:text-yellow-400">Terms</a>
          </p>

          <div className="text-gray-400 flex items-center gap-6">
            <span>🚀 Powered by Digitalzi</span>
            {/* <span>🔒 SSL Secured</span>
            <span>⚡ Fast Loading</span> */}
          </div>
        </div>
      </div>

      {/* Scroll To Top Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <a
          href="#hero"
          className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center text-black shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ↑
          </motion.div>
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;
