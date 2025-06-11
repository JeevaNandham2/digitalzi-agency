
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import photo1 from '../components/img/Media.jpeg';
import photo2 from '../components/img/shared image (3).jpeg';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Jumma Khan",
      position: "CEO,Founder",
      company: "Ahat Foto Mart",
      image: photo1,
      content: "Digitalzi transformed our online presence completely. Our revenue increased by 300% in just 1 year. Their team's expertise in SEO and Content marketing is unmatched.",
      rating: 5,
      results: "+300% Revenue"
    },
    {
      id: 2,
      name: "Ponvel Store",
      position: "Marketing Director",
      company: "Ponvel -Gummidipoondi",
      image: photo2,
      content: "Working with Digitalzi has been a game-changer. Their strategic approach to social media marketing helped us reach millions of potential customers.",
      rating: 5,
      results: "+450% Reach"
    },
    // {
    //   id: 3,
    //   name: "Emily Rodriguez",
    //   position: "Founder",
    //   company: "FashionForward",
    //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    //   content: "The ROI we've achieved through their PPC campaigns is incredible. Professional, responsive, and results-driven - exactly what we needed.",
    //   rating: 5,
    //   results: "+280% ROI"
    // },
    // {
    //   id: 4,
    //   name: "David Thompson",
    //   position: "CMO",
    //   company: "HealthPlus",
    //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    //   content: "Digitalzi's content marketing strategy helped us establish thought leadership in our industry. Our lead quality has improved dramatically.",
    //   rating: 5,
    //   results: "+200% Quality Leads"
    // },
    // {
    //   id: 5,
    //   name: "Lisa Wang",
    //   position: "CEO",
    //   company: "InnovateTech",
    //   image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    //   content: "Their analytical approach and detailed reporting gave us insights we never had before. Customer acquisition cost decreased by 40%.",
    //   rating: 5,
    //   results: "-40% CAC"
    // }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-32 h-32 border-2 border-yellow-500/20 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-yellow-500/10 rounded-lg rotate-45"
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
              textShadow: [
                "0 0 0px rgba(245, 158, 11, 0)",
                "0 0 20px rgba(245, 158, 11, 0.5)",
                "0 0 0px rgba(245, 158, 11, 0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            What Our <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">Clients Say</span>
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about their success stories.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-500/30 rounded-3xl shadow-2xl p-8 lg:p-12 backdrop-blur-lg"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-8"
                >
                  <motion.div
                    animate={{ 
                      rotateY: [0, 360],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="inline-block"
                  >
                    <FaQuoteLeft className="text-4xl text-yellow-400 mx-auto" />
                  </motion.div>
                </motion.div>

                {/* Testimonial Content */}
                <motion.blockquote
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xl lg:text-2xl text-gray-100 leading-relaxed mb-8 font-medium"
                >
                  "{testimonials[currentIndex].content}"
                </motion.blockquote>

                {/* Rating */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex justify-center space-x-1 mb-6"
                >
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                    >
                      <FaStar className="text-yellow-400 text-xl" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Client Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-8"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4"
                  >
                    <motion.img
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-yellow-400 shadow-lg"
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-white text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-300">
                        {testimonials[currentIndex].position}
                      </p>
                      <p className="text-yellow-400 font-semibold">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </motion.div>

                  {/* Results Badge */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(245, 158, 11, 0.3)",
                        "0 0 30px rgba(245, 158, 11, 0.5)",
                        "0 0 20px rgba(245, 158, 11, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-6 py-3 rounded-full"
                  >
                    <span className="font-bold text-lg">{testimonials[currentIndex].results}</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 p-3 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 group"
          >
            <FaChevronLeft className="text-black group-hover:scale-110 transition-transform duration-300" />
          </motion.button>
          
          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 p-3 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 group"
          >
            <FaChevronRight className="text-black group-hover:scale-110 transition-transform duration-300" />
          </motion.button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-yellow-400 w-8 shadow-lg'
                  : 'bg-gray-600 hover:bg-gray-500 w-3'
              }`}
            />
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: "50+", label: "Happy Clients" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "24/7", label: "Support" },
            { number: "5★", label: "Average Rating" }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label} 
              className="text-center"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{
                  textShadow: "0 0 20px rgba(245, 158, 11, 0.8)"
                }}
                className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
