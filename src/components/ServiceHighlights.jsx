import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaSearch, FaGoogle, FaFacebook, FaPenNib, FaVideo, FaChartBar, FaBullhorn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

 const serviceLinks = {
  "SEO Optimization": "/seo-services",
  "Website Development": "/web-design",
  "Social Media Marketing": "/social-media-marketing",
  "AD stratagy": "/ppc-services",
  "Video Marketing": "/orm",
  "Branding": "/local-seo"
};


  const services = [

    {
  icon: FaBullhorn,
  title: "Branding",
  description: "Build a powerful brand identity that resonates with your audience across every touchpoint—from visuals to voice.",
  features: [
    "Brand Identity Design",
    "Logo & Visual Guidelines",
    "Tone of Voice Development",
    "Brand Storytelling",
    "Social Media Presence",
  
  ],
  color: "from-purple-700 to-indigo-800"
},
    {
      icon: FaSearch,
      title: "SEO Optimization",
      description: "Boost your search rankings with our advanced SEO strategies and technical optimization.",
      features: ["Keyword Research", "Technical SEO", "Content Optimization", "Link Building"],
      color: "from-yellow-400 to-amber-500"
    },
    {
      icon: FaGoogle,
      title: "Website Development",
      description: "Maximize ROI with targeted Google Ads campaigns and strategic bid management.",
      features: ["Google Ads", "Campaign Setup", "Bid Management", "A/B Testing"],
      color: "from-gray-700 to-black"
    },
    {
      icon: FaFacebook,
      title: "Social Media Marketing",
      description: "Engage your audience across all social platforms with compelling content and strategies.",
      features: ["Content Creation", "Community Management", "Social Ads", "Analytics"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: FaChartBar,
      title: "AD stratagy",
      description: "Track performance and optimize campaigns with detailed analytics and insights.",
      features: ["Performance Tracking", "Custom Reports", "Data Analysis", "ROI Optimization"],
      color: "from-black to-gray-800"
    },
    {
      icon: FaVideo,
      title: "Video Marketing",
      description: "Captivate your audience with professional video content and marketing campaigns.",
      features: ["Video Production", "YouTube Marketing", "Video Ads", "Live Streaming"],
      color: "from-amber-400 to-yellow-500"
    },
  
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                "0 0 0px rgba(245, 158, 11, 0)",
                "0 0 20px rgba(245, 158, 11, 0.5)",
                "0 0 0px rgba(245, 158, 11, 0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Our <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive digital marketing solutions tailored to your business needs. 
            From SEO to social media, we've got you covered.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                rotateY: 5
              }}
              className="group"
            >
              <motion.div 
                whileHover={{
                  boxShadow: service.color.includes('yellow') 
                    ? "0 25px 50px rgba(245, 158, 11, 0.3)"
                    : "0 25px 50px rgba(255, 255, 255, 0.1)"
                }}
                className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 h-full"
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.2
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="text-white text-2xl" />
                </motion.div>

                <motion.h3 
                  whileHover={{ x: 5 }}
                  className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-300"
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  whileHover={{ x: 3 }}
                  className="text-gray-600 mb-6 leading-relaxed"
                >
                  {service.description}
                </motion.p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) + 0.3 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-center text-gray-600 cursor-pointer"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.5, rotate: 180 }}
                        className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}
                      ></motion.div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* ✅ Learn More Button with React Router Link */}
                <Link to={serviceLinks[service.title]}>
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: service.color.includes('yellow') 
                        ? "0 15px 30px rgba(245, 158, 11, 0.4)"
                        : "0 15px 30px rgba(0, 0, 0, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [
                        "0 5px 15px rgba(0, 0, 0, 0.1)",
                        "0 8px 25px rgba(0, 0, 0, 0.15)",
                        "0 5px 15px rgba(0, 0, 0, 0.1)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-full py-3 bg-gradient-to-r ${service.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
