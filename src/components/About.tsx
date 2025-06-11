
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaUsers, FaAward, FaLightbulb, FaHeart } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: FaUsers,
      title: "Expert Team",
      description: "Certified professionals with years of industry experience"
    },
    {
      icon: FaAward,
      title: "Proven Results",
      description: "Track record of delivering exceptional ROI for our clients"
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "Cutting-edge strategies and latest marketing technologies"
    },
    {
      icon: FaHeart,
      title: "Passion",
      description: "Dedicated to your success and long-term partnership"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-yellow-50 to-white relative overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4
            }}
            className="absolute w-3 h-3 bg-yellow-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
        
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-40 h-40 border border-yellow-300/30 rounded-full"
        />
        
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-32 h-32 border border-amber-300/30 rounded-lg"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
          >
            About <span className="bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 bg-clip-text text-transparent bg-400%">Digitalzi</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            We are a passionate team of digital marketing experts dedicated to helping businesses 
            thrive in the digital landscape. With innovative strategies and data-driven approaches, 
            we transform your online presence into a powerful growth engine.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div 
              whileInView={{ y: [5, 0, 5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-gray-800">
                Why Choose Us?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                In today's competitive digital landscape, having the right partner makes all the difference. 
                We combine creativity with analytics, innovation with proven strategies, and passion with professionalism 
                to deliver results that exceed expectations.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 15px 30px rgba(245, 158, 11, 0.2)"
                  }}
                  className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.2
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="text-3xl text-yellow-600 mb-3" />
                  </motion.div>
                  <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              animate={{ 
                boxShadow: [
                  "0 20px 40px rgba(0, 0, 0, 0.1)",
                  "0 25px 50px rgba(245, 158, 11, 0.2)",
                  "0 20px 40px rgba(0, 0, 0, 0.1)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white shadow-2xl"
            >
              <motion.h3 
                animate={{ 
                  color: ["#ffffff", "#fbbf24", "#ffffff"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl font-bold mb-8"
              >
                Our Impact
              </motion.h3>
              
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between"
                >
                  <span className="text-lg">Revenue Growth</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-white/20 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "85%" } : { width: 0 }}
                        transition={{ duration: 2, delay: 1 }}
                        className="bg-gradient-to-r from-yellow-400 to-amber-500 h-2 rounded-full"
                      ></motion.div>
                    </div>
                    <motion.span 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="font-bold text-yellow-400"
                    >
                      +285%
                    </motion.span>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between"
                >
                  <span className="text-lg">Client Retention</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-white/20 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "95%" } : { width: 0 }}
                        transition={{ duration: 2, delay: 1.2 }}
                        className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full"
                      ></motion.div>
                    </div>
                    <motion.span 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                      className="font-bold text-green-400"
                    >
                      95%
                    </motion.span>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between"
                >
                  <span className="text-lg">Lead Generation</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-white/20 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "75%" } : { width: 0 }}
                        transition={{ duration: 2, delay: 1.4 }}
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full"
                      ></motion.div>
                    </div>
                    <motion.span 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                      className="font-bold text-yellow-400"
                    >
                      +450%
                    </motion.span>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                whileHover={{ y: -2 }}
                className="mt-8 pt-8 border-t border-white/20"
              >
                <div className="grid grid-cols-2 gap-4 text-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="text-3xl font-bold text-yellow-400">3+</div>
                    <div className="text-sm opacity-80">Years Experience</div>
                  </motion.div>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    <div className="text-3xl font-bold text-yellow-400">100+</div>
                    <div className="text-sm opacity-80">Projects Completed</div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced floating elements */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full shadow-lg flex items-center justify-center"
            >
              <span className="text-2xl">⭐</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
