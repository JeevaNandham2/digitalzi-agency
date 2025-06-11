
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const AnimatedNavbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('hero');

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
      
//       // Update active section based on scroll position
//       const sections = ['hero', 'services', 'portfolio', 'contact-section'];
//       const currentSection = sections.find(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });
      
//       if (currentSection) {
//         setActiveSection(currentSection);
//       }
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Solutions', to: 'services' },
//     { name: 'Our Work', to: 'portfolio' },
//     { name: 'News and Events', to: 'testimonials' },
//     { name: 'Blog', to: 'portfolio' },
//   ];

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       const offset = sectionId === 'hero' ? 0 : 80;
//       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
//       const offsetPosition = elementPosition - offset;
      
//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//       setIsMenuOpen(false);
//     }
//   };

//   return (
//     <>
//       {/* Main Navbar */}
//       <motion.nav
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
//           isScrolled 
//             ? 'bg-white/98 backdrop-blur-xl shadow-2xl border-b border-gray-200' 
//             : 'bg-white/95 backdrop-blur-sm'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 lg:h-20">
//             {/* Logo */}
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//               className="cursor-pointer flex items-center space-x-3 z-10"
//               onClick={() => scrollToSection('hero')}
//             >
//               <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
//                 <div className="w-6 h-6 bg-yellow-500 rounded transform rotate-45"></div>
//               </div>
//               <div className="font-bold text-xl text-black">
//                 DIGITALZI
//                 <div className="text-xs text-gray-600 font-normal tracking-wider -mt-1">
//                   YOUR GROWTH PARTNER
//                 </div>
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
//                   whileHover={{ y: -2 }}
//                   onClick={() => scrollToSection(item.to)}
//                   className={`relative px-4 py-2 font-medium text-sm transition-all duration-300 ${
//                     activeSection === item.to
//                       ? 'text-black'
//                       : 'text-gray-700 hover:text-black'
//                   }`}
//                 >
//                   {item.name}
//                   {activeSection === item.to && (
//                     <motion.div
//                       layoutId="activeIndicator"
//                       className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500 rounded-full"
//                       transition={{ type: "spring", duration: 0.6 }}
//                     />
//                   )}
//                 </motion.button>
//               ))}
//             </div>

//             {/* CTA Button */}
//             <div className="hidden lg:flex items-center">
//               <motion.button
//                 whileHover={{ 
//                   scale: 1.05,
//                   backgroundColor: "#000000",
//                   color: "#ffffff"
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => scrollToSection('contact-section')}
//                 className="bg-black text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 border-2 border-black hover:bg-yellow-500 hover:text-black hover:border-yellow-500"
//               >
//                 Enquire Now
//               </motion.button>
//             </div>

//             {/* Hamburger Menu - Mobile only */}
//             <div className="lg:hidden z-10">
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={() => setIsMenuOpen(true)}
//                 className="p-2 text-black hover:text-yellow-600 transition-colors duration-300"
//               >
//                 <FaBars size={24} />
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
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 z-[99999] bg-black lg:hidden overflow-hidden"
//           >
//             {/* Background Pattern */}
//             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,193,7,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,193,7,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            
//             {/* Close Button */}
//             <motion.button
//               initial={{ opacity: 0, rotate: -90 }}
//               animate={{ opacity: 1, rotate: 0 }}
//               exit={{ opacity: 0, rotate: 90 }}
//               transition={{ duration: 0.3, delay: 0.2 }}
//               whileHover={{ scale: 1.1, rotate: 90 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setIsMenuOpen(false)}
//               className="absolute top-6 right-6 p-3 text-yellow-500 hover:text-yellow-400 transition-colors duration-300 z-10"
//             >
//               <FaTimes size={28} />
//             </motion.button>

//             {/* Menu Content */}
//             <motion.div
//               initial={{ x: -100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: -100, opacity: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               className="flex flex-col items-center justify-center h-full space-y-12 relative z-10"
//             >
//               {/* Navigation Links */}
//               {navItems.map((item, index) => (
//                 <motion.div
//                   key={item.name}
//                   initial={{ x: -50, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
//                   className="relative group"
//                 >
//                   <motion.button
//                     whileHover={{ 
//                       scale: 1.05,
//                       x: 10
//                     }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => scrollToSection(item.to)}
//                     className="text-4xl lg:text-6xl font-bold text-white hover:text-yellow-500 transition-all duration-300"
//                   >
//                     {item.name}
//                   </motion.button>
                  
//                   <motion.div
//                     initial={{ width: 0 }}
//                     whileHover={{ width: "100%" }}
//                     className="h-1 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full mt-2"
//                     transition={{ duration: 0.3 }}
//                   />
//                 </motion.div>
//               ))}

//               {/* CTA Button */}
//               <motion.div
//                 initial={{ y: 50, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.8 }}
//                 className="mt-8"
//               >
//                 <motion.button
//                   whileHover={{ 
//                     scale: 1.05,
//                     boxShadow: "0 20px 40px rgba(255, 193, 7, 0.3)"
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => scrollToSection('contact-section')}
//                   className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 border-2 border-yellow-500 hover:bg-transparent hover:text-yellow-500"
//                 >
//                   Enquire Now
//                 </motion.button>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default AnimatedNavbar;
