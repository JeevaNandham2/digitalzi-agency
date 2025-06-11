
// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaRocket, FaChartLine, FaBullhorn } from 'react-icons/fa';

// const Hero = () => {
//   return (
//     <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-gray-900">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         <motion.div 
//           animate={{ 
//             y: [0, -20, 0],
//             rotate: [0, 10, 0]
//           }}
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-yellow-400/30 to-amber-400/30 rounded-full blur-3xl"
//         ></motion.div>
//         <motion.div 
//           animate={{ 
//             y: [0, -30, 0],
//             x: [0, 15, 0]
//           }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//           className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-black/20 to-gray-800/20 rounded-full blur-3xl"
//         ></motion.div>
//         <motion.div 
//           animate={{ 
//             scale: [1, 1.1, 1],
//             rotate: [0, -5, 0]
//           }}
//           transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
//           className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-300/25 to-yellow-500/25 rounded-full blur-3xl"
//         ></motion.div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-8"
//           >
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-5xl lg:text-7xl font-bold leading-tight"
//             >
//               <motion.span 
//                 animate={{ 
//                   backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
//                 }}
//                 transition={{ duration: 3, repeat: Infinity }}
//                 className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent bg-400%"
//               >
//                 Transform
//               </motion.span>
//               <br />
//               <span className="text-gray-800">Your Digital</span>
//               <br />
//               <span className="font-playfair italic text-black">Presence</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="text-xl text-gray-700 leading-relaxed max-w-lg"
//             >
//               We craft cutting-edge digital marketing strategies that drive growth, boost engagement, and deliver measurable results for your business.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="flex flex-col sm:flex-row gap-4"
//             >
//               <motion.button
//                 whileHover={{ 
//                   scale: 1.05, 
//                   boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)",
//                   y: -5
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 animate={{
//                   boxShadow: [
//                     "0 10px 20px rgba(245, 158, 11, 0.2)",
//                     "0 15px 30px rgba(245, 158, 11, 0.3)",
//                     "0 10px 20px rgba(245, 158, 11, 0.2)"
//                   ]
//                 }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-black rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
//               >
//                 Start Your Journey
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05, borderColor: "#000000", color: "#000000" }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 border-2 border-gray-400 text-gray-700 rounded-full font-semibold text-lg hover:border-black transition-all duration-300"
//               >
//                 View Our Work
//               </motion.button>
//             </motion.div>

//             {/* Stats with enhanced animations */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.8 }}
//               className="grid grid-cols-3 gap-8 pt-8"
//             >
//               <motion.div 
//                 whileHover={{ scale: 1.1, y: -5 }}
//                 className="text-center"
//               >
//                 <motion.div 
//                   animate={{ scale: [1, 1.05, 1] }}
//                   transition={{ duration: 2, repeat: Infinity, delay: 0 }}
//                   className="text-3xl font-bold text-yellow-600"
//                 >
//                   500+
//                 </motion.div>
//                 <div className="text-gray-600">Happy Clients</div>
//               </motion.div>
//               <motion.div 
//                 whileHover={{ scale: 1.1, y: -5 }}
//                 className="text-center"
//               >
//                 <motion.div 
//                   animate={{ scale: [1, 1.05, 1] }}
//                   transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
//                   className="text-3xl font-bold text-black"
//                 >
//                   95%
//                 </motion.div>
//                 <div className="text-gray-600">Success Rate</div>
//               </motion.div>
//               <motion.div 
//                 whileHover={{ scale: 1.1, y: -5 }}
//                 className="text-center"
//               >
//                 <motion.div 
//                   animate={{ scale: [1, 1.05, 1] }}
//                   transition={{ duration: 2, repeat: Infinity, delay: 1 }}
//                   className="text-3xl font-bold text-yellow-600"
//                 >
//                   24/7
//                 </motion.div>
//                 <div className="text-gray-600">Support</div>
//               </motion.div>
//             </motion.div>
//           </motion.div>

//           {/* Right Content - Enhanced 3D Illustration */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="relative"
//           >
//             <div className="relative w-full h-96 lg:h-[500px]">
//               {/* Main 3D Card with enhanced animations */}
//               <motion.div
//                 animate={{ 
//                   y: [0, -20, 0],
//                   rotateY: [0, 5, 0]
//                 }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute inset-0 bg-gradient-to-br from-white/90 to-yellow-50/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-yellow-200/50 p-8"
//               >
//                 <div className="h-full flex flex-col justify-center items-center space-y-8">
//                   <motion.div
//                     animate={{ 
//                       rotate: 360,
//                       scale: [1, 1.1, 1]
//                     }}
//                     transition={{ 
//                       rotate: { duration: 10, repeat: Infinity, ease: "linear" },
//                       scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
//                     }}
//                     className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg"
//                   >
//                     <FaRocket className="text-black text-3xl" />
//                   </motion.div>
                  
//                   <motion.div 
//                     animate={{ y: [0, -5, 0] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                     className="text-center"
//                   >
//                     <h3 className="text-2xl font-bold text-gray-800 mb-2">Digital Growth</h3>
//                     <p className="text-gray-600">Accelerating your success</p>
//                   </motion.div>

//                   <div className="w-full space-y-4">
//                     <motion.div 
//                       whileHover={{ scale: 1.02 }}
//                       className="flex items-center space-x-4"
//                     >
//                       <FaChartLine className="text-yellow-600 text-xl" />
//                       <div className="flex-1 bg-gray-200 rounded-full h-2">
//                         <motion.div
//                           initial={{ width: 0 }}
//                           animate={{ width: "85%" }}
//                           transition={{ duration: 2, delay: 1 }}
//                           className="bg-gradient-to-r from-yellow-400 to-amber-500 h-2 rounded-full"
//                         ></motion.div>
//                       </div>
//                       <span className="text-sm font-semibold text-gray-600">85%</span>
//                     </motion.div>
                    
//                     <motion.div 
//                       whileHover={{ scale: 1.02 }}
//                       className="flex items-center space-x-4"
//                     >
//                       <FaBullhorn className="text-black text-xl" />
//                       <div className="flex-1 bg-gray-200 rounded-full h-2">
//                         <motion.div
//                           initial={{ width: 0 }}
//                           animate={{ width: "92%" }}
//                           transition={{ duration: 2, delay: 1.5 }}
//                           className="bg-gradient-to-r from-gray-800 to-black h-2 rounded-full"
//                         ></motion.div>
//                       </div>
//                       <span className="text-sm font-semibold text-gray-600">92%</span>
//                     </motion.div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Enhanced Floating Elements */}
//               <motion.div
//                 animate={{ 
//                   y: [0, -15, 0], 
//                   rotate: [0, 10, 0],
//                   scale: [1, 1.1, 1]
//                 }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl shadow-lg flex items-center justify-center"
//               >
//                 <span className="text-black text-xl">📈</span>
//               </motion.div>

//               <motion.div
//                 animate={{ 
//                   y: [0, -10, 0], 
//                   rotate: [0, -10, 0],
//                   scale: [1, 1.05, 1]
//                 }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//                 className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-gray-800 to-black rounded-full shadow-lg flex items-center justify-center"
//               >
//                 <span className="text-yellow-400 text-2xl">🚀</span>
//               </motion.div>

//               <motion.div
//                 animate={{ 
//                   y: [0, -12, 0], 
//                   x: [0, 8, 0],
//                   rotate: [0, 5, 0]
//                 }}
//                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//                 className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg shadow-lg flex items-center justify-center"
//               >
//                 <span className="text-black text-lg">💡</span>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
