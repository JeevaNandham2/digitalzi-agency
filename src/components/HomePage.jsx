
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaBars, FaTimes, FaArrowRight, FaSearch, FaBullhorn, FaShareAlt, FaPenFancy, FaPalette, FaUsers, FaCheckCircle, FaClock } from 'react-icons/fa';

// const HomePage = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsMenuOpen(false);
//     }
//   };

//   const navItems = [
//     { name: 'Home', to: 'hero' },
//     { name: 'Services', to: 'services' },
//     { name: 'Portfolio', to: 'portfolio' },
//     { name: 'About', to: 'about' },
//     { name: 'Contact', to: 'contact' },
//   ];

//   const services = [
//     { icon: FaSearch, title: 'SEO Optimization', desc: 'Boost your search rankings' },
//     { icon: FaBullhorn, title: 'SEM Marketing', desc: 'Targeted advertising campaigns' },
//     { icon: FaShareAlt, title: 'Social Media', desc: 'Engage your audience' },
//     { icon: FaPenFancy, title: 'Content Creation', desc: 'Compelling storytelling' },
//     { icon: FaPalette, title: 'Branding', desc: 'Memorable brand identity' },
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Animated Navbar */}
//       <motion.nav
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//           isScrolled 
//             ? 'bg-black/95 backdrop-blur-xl shadow-2xl border-b border-yellow-500/20' 
//             : 'bg-black/80 backdrop-blur-sm'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 lg:h-20">
//             {/* Logo */}
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="cursor-pointer flex items-center space-x-3"
//               onClick={() => scrollToSection('hero')}
//             >
//               <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
//                 <div className="w-6 h-6 bg-black rounded transform rotate-45"></div>
//               </div>
//               <div className="font-bold text-xl text-white">
//                 DIGITALZI
//               </div>
//             </motion.div>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-8">
//               {navItems.map((item, index) => (
//                 <motion.button
//                   key={item.name}
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ y: -2, color: '#EAB308' }}
//                   onClick={() => scrollToSection(item.to)}
//                   className="text-white hover:text-yellow-500 font-medium transition-all duration-300"
//                 >
//                   {item.name}
//                 </motion.button>
//               ))}
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="lg:hidden">
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="p-2 text-white hover:text-yellow-500"
//               >
//                 {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//               </motion.button>
//             </div>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-40 bg-black/95 lg:hidden"
//           >
//             <div className="flex flex-col items-center justify-center h-full space-y-8">
//               {navItems.map((item, index) => (
//                 <motion.button
//                   key={item.name}
//                   initial={{ x: -50, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: index * 0.1 }}
//                   onClick={() => scrollToSection(item.to)}
//                   className="text-3xl font-bold text-white hover:text-yellow-500"
//                 >
//                   {item.name}
//                 </motion.button>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Hero Section */}
//       <section id="hero" className="min-h-screen relative overflow-hidden pt-20">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,193,7,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,193,7,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
//         {/* Animated Background Shapes */}
//         <div className="absolute inset-0">
//           <motion.div
//             animate={{
//               y: [0, -30, 0],
//               rotate: [0, 360],
//               scale: [1, 1.2, 1]
//             }}
//             transition={{ duration: 20, repeat: Infinity }}
//             className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-500/10 rounded-full blur-xl"
//           />
//           <motion.div
//             animate={{
//               y: [0, 40, 0],
//               x: [0, -20, 0],
//               rotate: [0, -180, -360]
//             }}
//             transition={{ duration: 25, repeat: Infinity }}
//             className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-yellow-400/10 rounded-full blur-xl"
//           />
//           <motion.div
//             animate={{
//               scale: [1, 1.5, 1],
//               rotate: [0, 180, 360]
//             }}
//             transition={{ duration: 15, repeat: Infinity }}
//             className="absolute top-1/2 right-1/3 w-24 h-24 bg-yellow-600/10 rounded-lg blur-lg"
//           />
//         </div>

//         {/* Hero Content */}
//         <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="min-h-screen flex items-center justify-center text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//               className="space-y-8"
//             >
//               {/* Main Headline */}
//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.3 }}
//                 className="text-5xl lg:text-7xl font-bold leading-tight"
//               >
//                 Transform Your{' '}
//                 <motion.span
//                   animate={{
//                     backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
//                   }}
//                   transition={{ duration: 3, repeat: Infinity }}
//                   className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent bg-400%"
//                 >
//                   Digital Presence
//                 </motion.span>
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.5 }}
//                 className="text-xl text-gray-300 max-w-2xl mx-auto"
//               >
//                 We craft cutting-edge digital marketing strategies that drive growth, boost engagement, and deliver measurable results for your business.
//               </motion.p>

//               {/* CTA Buttons */}
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.7 }}
//                 className="flex flex-col sm:flex-row gap-4 justify-center"
//               >
//                 <motion.button
//                   whileHover={{ 
//                     scale: 1.05,
//                     boxShadow: "0 20px 40px rgba(255, 193, 7, 0.4)"
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => scrollToSection('contact')}
//                   className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-yellow-400 flex items-center justify-center gap-2"
//                 >
//                   Start Your Journey
//                   <FaArrowRight />
//                 </motion.button>
                
//                 <motion.button
//                   whileHover={{ 
//                     scale: 1.05,
//                     backgroundColor: 'rgba(255, 193, 7, 0.1)',
//                     borderColor: '#EAB308'
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => scrollToSection('portfolio')}
//                   className="border-2 border-gray-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:border-yellow-500"
//                 >
//                   View Our Work
//                 </motion.button>
//               </motion.div>

//               {/* Animated Stats */}
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.9 }}
//                 className="grid grid-cols-3 gap-8 pt-16 max-w-md mx-auto"
//               >
//                 <motion.div 
//                   whileHover={{ scale: 1.05, y: -5 }}
//                   className="text-center"
//                 >
//                   <motion.div 
//                     animate={{ scale: [1, 1.05, 1] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                     className="text-3xl font-bold text-yellow-500 mb-2 flex items-center justify-center gap-2"
//                   >
//                     <FaUsers className="text-xl" />
//                     500+
//                   </motion.div>
//                   <div className="text-gray-400 text-sm">Happy Clients</div>
//                 </motion.div>
                
//                 <motion.div 
//                   whileHover={{ scale: 1.05, y: -5 }}
//                   className="text-center"
//                 >
//                   <motion.div 
//                     animate={{ scale: [1, 1.05, 1] }}
//                     transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
//                     className="text-3xl font-bold text-yellow-500 mb-2 flex items-center justify-center gap-2"
//                   >
//                     <FaCheckCircle className="text-xl" />
//                     95%
//                   </motion.div>
//                   <div className="text-gray-400 text-sm">Success Rate</div>
//                 </motion.div>
                
//                 <motion.div 
//                   whileHover={{ scale: 1.05, y: -5 }}
//                   className="text-center"
//                 >
//                   <motion.div 
//                     animate={{ scale: [1, 1.05, 1] }}
//                     transition={{ duration: 2, repeat: Infinity, delay: 1 }}
//                     className="text-3xl font-bold text-yellow-500 mb-2 flex items-center justify-center gap-2"
//                   >
//                     <FaClock className="text-xl" />
//                     24/7
//                   </motion.div>
//                   <div className="text-gray-400 text-sm">Support</div>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-20 bg-gray-900">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//               Our <span className="text-yellow-500">Services</span>
//             </h2>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//               Comprehensive digital marketing solutions to elevate your brand
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={service.title}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 className="bg-black p-6 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300"
//               >
//                 <motion.div
//                   whileHover={{ scale: 1.1, rotate: 5 }}
//                   className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mb-4"
//                 >
//                   <service.icon className="text-2xl text-black" />
//                 </motion.div>
//                 <h3 className="text-xl font-bold mb-2">{service.title}</h3>
//                 <p className="text-gray-400">{service.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Portfolio Section */}
//       <section id="portfolio" className="py-20 bg-black">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//               Our <span className="text-yellow-500">Portfolio</span>
//             </h2>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//               Successful campaigns that delivered exceptional results
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[1, 2, 3, 4, 5, 6].map((item, index) => (
//               <motion.div
//                 key={item}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ y: -10 }}
//                 className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
//               >
//                 <div className="h-48 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20"></div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2">Project {item}</h3>
//                   <p className="text-gray-400 mb-4">Digital marketing campaign that increased engagement by 200%</p>
//                   <motion.button
//                     whileHover={{ x: 5 }}
//                     className="text-yellow-500 font-semibold flex items-center gap-2"
//                   >
//                     View Case Study <FaArrowRight />
//                   </motion.button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 bg-gray-900">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//                 About <span className="text-yellow-500">DIGITALZI</span>
//               </h2>
//               <p className="text-xl text-gray-300 mb-6">
//                 We're a team of digital marketing experts passionate about helping businesses thrive in the digital landscape.
//               </p>
//               <p className="text-gray-400 mb-8">
//                 With years of experience and a proven track record, we deliver innovative solutions that drive real results for our clients.
//               </p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 onClick={() => scrollToSection('contact')}
//                 className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold"
//               >
//                 Get Started
//               </motion.button>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="relative"
//             >
//               <div className="w-full h-96 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-xl"></div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 bg-black">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//               Get In <span className="text-yellow-500">Touch</span>
//             </h2>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//               Ready to transform your digital presence? Let's start the conversation.
//             </p>
//           </motion.div>

//           <motion.form
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-6"
//           >
//             <div className="grid md:grid-cols-2 gap-6">
//               <motion.div whileFocus={{ scale: 1.02 }}>
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-all duration-300"
//                 />
//               </motion.div>
//               <motion.div whileFocus={{ scale: 1.02 }}>
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-all duration-300"
//                 />
//               </motion.div>
//             </div>
            
//             <motion.div whileFocus={{ scale: 1.02 }}>
//               <textarea
//                 rows="6"
//                 placeholder="Your Message"
//                 className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-all duration-300 resize-none"
//               ></textarea>
//             </motion.div>

//             <motion.div className="text-center">
//               <motion.button
//                 whileHover={{ 
//                   scale: 1.05,
//                   boxShadow: "0 20px 40px rgba(255, 193, 7, 0.4)"
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 type="submit"
//                 className="bg-yellow-500 text-black px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-yellow-400"
//               >
//                 Send Message
//               </motion.button>
//             </motion.div>
//           </motion.form>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 py-12 border-t border-gray-800">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="flex items-center justify-center space-x-3 mb-4">
//             <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
//               <div className="w-4 h-4 bg-black rounded transform rotate-45"></div>
//             </div>
//             <div className="font-bold text-xl text-white">DIGITALZI</div>
//           </div>
//           <p className="text-gray-400">© 2024 DIGITALZI. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;
