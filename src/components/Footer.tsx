
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-scroll';
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

// const Footer = () => {
//   const quickLinks = [
//     { name: 'Home', to: 'hero' },
//     { name: 'About', to: 'about' },
//     { name: 'Services', to: 'services' },
//     { name: 'Portfolio', to: 'portfolio' },
//     { name: 'Pricing', to: 'pricing' },
//     { name: 'Contact', to: 'contact' }
//   ];

//   const services = [
//     'SEO Optimization',
//     'PPC Advertising',
//     'Social Media Marketing',
//     'Content Marketing',
//     'Video Marketing',
//     'Email Marketing'
//   ];

//   const socialLinks = [
//     { icon: FaFacebook, href: '#', color: 'hover:text-yellow-400' },
//     { icon: FaTwitter, href: '#', color: 'hover:text-yellow-400' },
//     { icon: FaLinkedin, href: '#', color: 'hover:text-yellow-400' },
//     { icon: FaInstagram, href: '#', color: 'hover:text-yellow-400' }
//   ];

//   return (
//     <footer className="bg-black text-white">
//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
//           {/* Company Info */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-6"
//           >
//             <div>
//               <h3 className="font-playfair text-3xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent mb-4">
//                 Digitalzi
//               </h3>
//               <p className="text-gray-300 leading-relaxed">
//                 Transform your digital presence with our cutting-edge marketing strategies. 
//                 We help businesses grow through data-driven solutions and creative excellence.
//               </p>
//             </div>

//             {/* Contact Info */}
//             <div className="space-y-3">
//               <div className="flex items-center space-x-3">
//                 <FaEnvelope className="text-yellow-400" />
//                 <span className="text-gray-300">hello@digitalzi.com</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <FaPhone className="text-yellow-400" />
//                 <span className="text-gray-300">+1 (555) 123-4567</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <FaMapMarkerAlt className="text-yellow-400" />
//                 <span className="text-gray-300">San Francisco, CA 94105</span>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="flex space-x-4">
//               {socialLinks.map((social, index) => (
//                 <motion.a
//                   key={index}
//                   href={social.href}
//                   whileHover={{ scale: 1.1, y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:bg-yellow-400/10`}
//                 >
//                   <social.icon className="text-lg" />
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//           >
//             <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
//             <ul className="space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     to={link.to}
//                     spy={true}
//                     smooth={true}
//                     offset={-70}
//                     duration={500}
//                     className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer block"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Services */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <h4 className="text-xl font-bold mb-6 text-white">Our Services</h4>
//             <ul className="space-y-3">
//               {services.map((service) => (
//                 <li key={service}>
//                   <a
//                     href="#"
//                     className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 block"
//                   >
//                     {service}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Newsletter */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             <h4 className="text-xl font-bold mb-6 text-white">Stay Updated</h4>
//             <p className="text-gray-300 mb-6 leading-relaxed">
//               Subscribe to our newsletter for the latest digital marketing insights and tips.
//             </p>
            
//             <form className="space-y-4">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
//               />
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 text-black py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
//               >
//                 Subscribe
//               </motion.button>
//             </form>

//             <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
//               <h5 className="font-semibold text-white mb-2">🎯 Free Marketing Audit</h5>
//               <p className="text-sm text-gray-300">
//                 Get a comprehensive analysis of your current digital marketing performance.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
//             <div className="text-gray-400 text-sm">
//               © 2024 Digitalzi. All rights reserved. | 
//               <a href="#" className="hover:text-yellow-400 transition-colors duration-300 ml-1">Privacy Policy</a> | 
//               <a href="#" className="hover:text-yellow-400 transition-colors duration-300 ml-1">Terms of Service</a>
//             </div>
            
//             <div className="flex items-center space-x-6 text-sm text-gray-400">
//               <span>🚀 Powered by Innovation</span>
//               <span>🔒 SSL Secured</span>
//               <span>⚡ Fast Loading</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Action Button */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="fixed bottom-8 right-8 z-50"
//       >
//         <Link
//           to="hero"
//           spy={true}
//           smooth={true}
//           duration={500}
//           className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center text-black shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
//         >
//           <motion.div
//             animate={{ y: [0, -2, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             ↑
//           </motion.div>
//         </Link>
//       </motion.div>
//     </footer>
//   );
// };

// export default Footer;
