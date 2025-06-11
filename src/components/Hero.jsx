import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaBullhorn } from 'react-icons/fa';
import homeimg from './img/logomain.png';

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 80;
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      console.warn('No section found for ID:', id);
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen mt-[-80px] pt-[80px] relative overflow-hidden  bg-gradient-to-br from-yellow-50 via-white to-gray-900"
    >
      {/* Animated Background Circles */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-yellow-400/30 to-amber-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-black/20 to-gray-800/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-300/25 to-yellow-500/25 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              <motion.span
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent bg-400% font-poppins"
              >
                Transform
              </motion.span>
              <br />
              <span className="text-gray-800 font-Montserrat font-extralight">Your Digital</span>
              <br />
              <span className="font-Monserrat-sans-serif">Presence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-700 leading-relaxed max-w-lg"
            >
              We transform your insights into action to splash bold in the digital world with our
              leading technology and advanced tools.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <motion.div whileHover={{ scale: 1.1, y: -5 }} className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-3xl font-bold text-yellow-400"
                >
                  50+
                </motion.div>
                <div className="text-gray-600">Happy Clients</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, y: -5 }} className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="text-3xl font-bold text-black"
                >
                  95%
                </motion.div>
                <div className="text-gray-600">Success Rate</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, y: -5 }} className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="text-3xl font-bold text-yellow-400"
                >
                  24/7
                </motion.div>
                <div className="text-gray-600">Support</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              <motion.div
                animate={{ y: [0, -20, 0], rotateY: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-br from-white/90 to-yellow-50/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-yellow-200/50 p-8"
              >
                <div className="h-full flex flex-col justify-center items-center space-y-8">
                  <motion.div
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{
                      rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
                      scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                    }}
                    className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <img src={homeimg} alt="home" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-center"
                  >
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Digital Growth</h3>
                    <p className="text-gray-600">Accelerating your success</p>
                  </motion.div>

                  <div className="w-full space-y-4">
                    <motion.div whileHover={{ scale: 1.02 }} className="flex items-center space-x-4">
                      <FaChartLine className="text-yellow-600 text-xl" />
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '85%' }}
                          transition={{ duration: 2, delay: 1 }}
                          className="bg-gradient-to-r from-yellow-400 to-amber-500 h-2 rounded-full"
                        ></motion.div>
                      </div>
                      <span className="text-sm font-semibold text-gray-600">85%</span>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="flex items-center space-x-4">
                      <FaBullhorn className="text-black text-xl" />
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '92%' }}
                          transition={{ duration: 2, delay: 1.5 }}
                          className="bg-gradient-to-r from-gray-800 to-black h-2 rounded-full"
                        ></motion.div>
                      </div>
                      <span className="text-sm font-semibold text-gray-600">92%</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl shadow-lg flex items-center justify-center"
              >
                <span className="text-black text-xl">📈</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, -10, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-gray-800 to-black rounded-full shadow-lg flex items-center justify-center"
              >
                <span className="text-yellow-400 text-2xl">🚀</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -12, 0], x: [0, 8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg shadow-lg flex items-center justify-center"
              >
                <span className="text-black text-lg">💡</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
