import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaExternalLinkAlt, FaVideo, FaCode, FaChartLine, FaCube, FaTag } from 'react-icons/fa';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState('Video Editing');

  const categories = [
    { name: 'Video Editing', icon: FaVideo, color: 'from-yellow-400 to-yellow-500' },
    { name: 'Website & App Development', icon: FaCode, color: 'from-yellow-500 to-yellow-600' },
    { name: 'AD Analytics', icon: FaChartLine, color: 'from-yellow-400 to-yellow-600' },
    { name: '3D Designs', icon: FaCube, color: 'from-yellow-300 to-yellow-500' }
  ];

  const projects = {
    'Video Editing': [
      {
        id: 1,
        title: "Brand Commercial Campaign",
        description: "Created stunning promotional videos that increased brand awareness by 300%",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop",
        tags: ["Motion Graphics", "Color Grading", "Sound Design"],
        demoLink: "#"
      },
      {
        id: 2,
        title: "Corporate Training Series",
        description: "Developed engaging training videos for Fortune 500 companies",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop",
        tags: ["Animation", "Scriptwriting", "Post-Production"],
        demoLink: "#"
      },
      {
        id: 3,
        title: "Social Media Content",
        description: "Short-form videos that generated 2M+ views across platforms",
        image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=500&h=300&fit=crop",
        tags: ["Social Media", "Viral Content", "Mobile-First"],
        demoLink: "#"
      },
      {
        id: 4,
        title: "Product Launch Video",
        description: "High-impact product videos that boosted sales by 150%",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
        tags: ["Product Demo", "3D Animation", "Marketing"],
        demoLink: "#"
      }
    ],
    'Website & App Development': [
      {
        id: 5,
        title: "E-commerce Platform",
        description: "Built a scalable e-commerce solution with 99.9% uptime",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
        tags: ["React", "Node.js", "Payment Integration"],
        demoLink: "#"
      },
      {
        id: 6,
        title: "Mobile Banking App",
        description: "Secure banking app with biometric authentication",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
        tags: ["React Native", "Security", "UX/UI"],
        demoLink: "#"
      },
      {
        id: 7,
        title: "SaaS Dashboard",
        description: "Analytics dashboard serving 10,000+ daily active users",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
        tags: ["Vue.js", "Data Visualization", "Real-time"],
        demoLink: "#"
      },
      {
        id: 8,
        title: "Healthcare Portal",
        description: "Patient management system with telemedicine features",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
        tags: ["HIPAA Compliant", "API Integration", "Cloud"],
        demoLink: "#"
      }
    ],
    'AD Analytics': [
      {
        id: 9,
        title: "Campaign Performance Tracker",
        description: "Advanced analytics platform tracking $10M+ in ad spend",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop",
        tags: ["Google Analytics", "Facebook Ads", "ROI Tracking"],
        demoLink: "#"
      },
      {
        id: 10,
        title: "Multi-Channel Attribution",
        description: "Cross-platform attribution model improving ROAS by 40%",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
        tags: ["Attribution Modeling", "Machine Learning", "Reporting"],
        demoLink: "#"
      },
      {
        id: 11,
        title: "Real-time Bidding System",
        description: "Automated bidding platform optimizing ad performance",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
        tags: ["RTB", "AI Optimization", "Performance"],
        demoLink: "#"
      },
      {
        id: 12,
        title: "Customer Journey Analytics",
        description: "Complete funnel analysis reducing customer acquisition cost",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
        tags: ["Customer Journey", "Conversion Tracking", "Insights"],
        demoLink: "#"
      }
    ],
    '3D Designs': [
      {
        id: 13,
        title: "Architectural Visualization",
        description: "Photorealistic 3D renders for luxury real estate projects",
        image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=500&h=300&fit=crop",
        tags: ["3ds Max", "V-Ray", "Photorealism"],
        demoLink: "#"
      },
      {
        id: 14,
        title: "Product Visualization",
        description: "Interactive 3D models for e-commerce product pages",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop",
        tags: ["Blender", "WebGL", "Interactive"],
        demoLink: "#"
      },
      {
        id: 15,
        title: "Brand Identity 3D",
        description: "3D logo animations and brand visualizations",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
        tags: ["Cinema 4D", "After Effects", "Branding"],
        demoLink: "#"
      },
      {
        id: 16,
        title: "Game Environment Design",
        description: "Immersive 3D environments for mobile gaming",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop",
        tags: ["Unity", "Environment Design", "Game Dev"],
        demoLink: "#"
      }
    ]
  };

  const currentProjects = projects[activeCategory] || [];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Our <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Portfolio</span>
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our exceptional work across different categories and see how we bring creative visions to life.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.name
                    ? `bg-gradient-to-r ${category.color} text-black shadow-lg`
                    : 'bg-black/50 text-yellow-400 hover:bg-black/70 border border-yellow-400/30 hover:border-yellow-400/60'
                }`}
              >
                <IconComponent className="text-lg" />
                <span className="hidden sm:inline">{category.name}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-black/80 rounded-2xl shadow-lg overflow-hidden border border-yellow-400/20 hover:shadow-2xl hover:border-yellow-400/60 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-4 right-4">
                    <motion.a
                      href={project.demoLink}
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-yellow-400/90 rounded-full text-black hover:text-gray-800 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt size={16} />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center space-x-1 text-xs bg-yellow-400/20 text-yellow-300 px-2 py-1 rounded-full hover:bg-yellow-400/30 hover:text-yellow-200 transition-colors duration-300"
                    >
                      <FaTag size={8} />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                {/* Visit Project Button */}
                <motion.a
                  href={project.demoLink}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 20px rgba(251, 191, 36, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-lg font-semibold text-sm hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 group/btn"
                >
                  <span>Visit Project</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2 inline-block group-hover/btn:translate-x-1 transition-transform duration-300"
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 text-black"
          >
            <motion.h3 
              className="text-3xl font-bold mb-4"
            >
              Ready to Start Your Project?
            </motion.h3>
            <motion.p 
              className="text-xl mb-6 opacity-90"
            >
              Let's bring your creative vision to life with our expert team.
            </motion.p>
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-yellow-400 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
