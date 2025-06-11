
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaRocket, 
  FaChartLine, 
  FaBullhorn, 
  FaSearch, 
  FaUsers, 
  FaGlobe,
  FaMobile,
  FaEnvelope,
  FaVideo,
  FaHashtag
} from 'react-icons/fa';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: FaSearch,
      title: "SEO Optimization",
      description: "Dominate search rankings with advanced SEO strategies and premium optimization techniques",
      color: "from-yellow-400 to-amber-500",
      delay: 0.1
    },
    {
      icon: FaBullhorn,
      title: "Social Media Marketing",
      description: "Elite social media campaigns that engage and convert your target audience",
      color: "from-amber-400 to-orange-500",
      delay: 0.2
    },
    {
      icon: FaChartLine,
      title: "Analytics & Insights",
      description: "Premium data analytics and strategic insights for maximum ROI optimization",
      color: "from-yellow-500 to-yellow-600",
      delay: 0.3
    },
    {
      icon: FaEnvelope,
      title: "Email Marketing",
      description: "Luxury email campaigns with personalized automation and premium designs",
      color: "from-amber-500 to-yellow-500",
      delay: 0.4
    },
    {
      icon: FaVideo,
      title: "Video Production",
      description: "Elite video content creation that captivates and converts your audience",
      color: "from-yellow-400 to-orange-400",
      delay: 0.5
    },
    {
      icon: FaMobile,
      title: "Mobile Marketing",
      description: "Premium mobile strategies that reach customers wherever they are",
      color: "from-amber-400 to-yellow-600",
      delay: 0.6
    }
  ];

  const stats = [
    { number: "500%", label: "Average ROI Increase", icon: FaRocket },
    { number: "10M+", label: "Leads Generated", icon: FaUsers },
    { number: "98%", label: "Client Satisfaction", icon: FaGlobe },
    { number: "24/7", label: "Elite Support", icon: FaHashtag }
  ];

  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced Premium Background */}
      <div className="absolute inset-0">
        {/* Main gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.25, 0.1],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 rounded-full blur-3xl"
        />
        
        {/* Premium floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -120, 0],
              x: [0, Math.sin(i) * 100, 0],
              opacity: [0, 1, 0],
              scale: [0.3, 1.5, 0.3]
            }}
            transition={{
              duration: 10 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}

        {/* Premium geometric patterns */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-yellow-400/20 rounded-lg"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-amber-400/20 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            animate={{
              textShadow: [
                "0 0 30px rgba(245, 158, 11, 0.5)",
                "0 0 50px rgba(245, 158, 11, 0.8)",
                "0 0 30px rgba(245, 158, 11, 0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-5xl lg:text-7xl font-bold text-white mb-6"
          >
            Elite <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Transform your business with premium digital solutions designed for elite success. 
            Experience the Digitalzi difference with our luxury service offerings.
          </motion.p>
        </motion.div>

        {/* Premium Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: service.delay }}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                boxShadow: "0 30px 60px rgba(245, 158, 11, 0.4)"
              }}
              className="bg-gradient-to-br from-gray-900/80 to-black/90 border border-yellow-400/30 rounded-3xl p-8 group hover:border-yellow-400/60 transition-all duration-500 backdrop-blur-sm"
            >
              {/* Premium Animated Icon */}
              <motion.div
                whileHover={{ 
                  rotate: 360,
                  scale: 1.3
                }}
                transition={{ duration: 0.8 }}
                className={`w-18 h-18 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:shadow-yellow-400/40`}
              >
                <service.icon className="text-black text-3xl" />
              </motion.div>

              <motion.h3 
                animate={{
                  color: ["#ffffff", "#fbbf24", "#ffffff"]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-2xl lg:text-3xl font-bold mb-4"
              >
                {service.title}
              </motion.h3>
              
              <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                {service.description}
              </p>

              {/* Premium hover effect overlay */}
              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-amber-500/5 rounded-3xl -z-10"
              />
            </motion.div>
          ))}
        </div>

        {/* Premium Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.08, y: -8 }}
              animate={{
                boxShadow: [
                  "0 15px 25px rgba(0, 0, 0, 0.3)",
                  "0 20px 40px rgba(245, 158, 11, 0.3)",
                  "0 15px 25px rgba(0, 0, 0, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              className="bg-gradient-to-br from-gray-900/80 to-black/90 border border-yellow-400/30 rounded-2xl p-8 text-center group hover:border-yellow-400/60 transition-all duration-300 backdrop-blur-sm"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="text-yellow-400 text-4xl mx-auto mb-4" />
              </motion.div>
              
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-2"
              >
                {stat.number}
              </motion.div>
              
              <div className="text-gray-300 group-hover:text-white transition-colors duration-300 text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-3xl p-10 shadow-2xl hover:shadow-yellow-400/40 transition-all duration-500"
          >
            <motion.h3 
              animate={{
                textShadow: [
                  "0 0 10px rgba(0, 0, 0, 0.5)",
                  "0 0 20px rgba(0, 0, 0, 0.7)",
                  "0 0 10px rgba(0, 0, 0, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl lg:text-5xl font-bold text-black mb-6"
            >
              Ready for Elite Success?
            </motion.h3>
            
            <p className="text-xl lg:text-2xl text-black/80 mb-8 max-w-3xl mx-auto">
              Join the elite circle of businesses that dominate their markets with Digitalzi's premium services.
            </p>
            
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-yellow-400 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-900 transition-all duration-300 border-2 border-black hover:border-gray-900 shadow-xl"
            >
              Start Your Elite Journey
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
