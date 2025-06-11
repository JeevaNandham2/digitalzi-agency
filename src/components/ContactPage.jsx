
import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaArrowUp, FaPaperPlane, FaUser, FaEnvelope as FaEmail, FaPhone as FaPhoneIcon, FaComment } from 'react-icons/fa';

const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  // Monitor scroll for floating button
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Format WhatsApp message
    const message = `Hi, I'm ${formData.name}, my email is ${formData.email}, phone is ${formData.phone}. I want to say: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const scrollToContact = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <section id="contact" ref={ref} className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 right-10 w-32 h-32 border border-blue-400/20 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1 
              animate={{
                textShadow: [
                  "0 0 0px rgba(59, 130, 246, 0)",
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 0px rgba(59, 130, 246, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-4xl lg:text-6xl font-bold text-white mb-6"
            >
              Get In 99 <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
            </motion.h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your digital presence? Let's discuss your goals and create a custom strategy that drives results.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Section - Direct Contact */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Let's Start a Conversation</h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Whether you're a startup looking to make your mark or an established business ready to scale, 
                  we're here to help you achieve your digital marketing goals.
                </p>
              </div>

              {/* Direct Contact Buttons */}
              <div className="space-y-6">
                <motion.a
                  href="tel:+15551234567"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center space-x-6 p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg border border-blue-400/30 rounded-2xl hover:border-blue-400/60 transition-all duration-300"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50"
                  >
                    <FaPhone className="text-white text-xl" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">📞 Call Us</h3>
                    <p className="text-blue-300 font-medium">+91 9566931353</p>
                    <p className="text-gray-400 text-sm">Mon-Fri from 8am to 6pm</p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:hello@digitalzi.com"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center space-x-6 p-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg border border-purple-400/30 rounded-2xl hover:border-purple-400/60 transition-all duration-300"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50"
                  >
                    <FaEnvelope className="text-white text-xl" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">✉️ Email Us</h3>
                    <p className="text-purple-300 font-medium">hello@digitalzi.com</p>
                    <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                  </div>
                </motion.a>
              </div>

              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-blue-400/20 rounded-2xl p-6"
              >
                <h4 className="font-bold text-lg text-white mb-4">Why Choose Digitalzi?</h4>
                <div className="space-y-3">
                  {[
                    "Free initial consultation",
                    "Custom strategy development", 
                    "Transparent reporting",
                    "Dedicated account manager"
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Section - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-xl border border-blue-400/30 rounded-3xl shadow-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2 flex items-center space-x-2">
                      <FaUser className="text-blue-400" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.name ? 'border-red-400' : 'border-slate-600'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white placeholder-gray-400`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </motion.div>

                  {/* Email Field */}
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2 flex items-center space-x-2">
                      <FaEmail className="text-blue-400" />
                      <span>Email Address *</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.email ? 'border-red-400' : 'border-slate-600'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white placeholder-gray-400`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </motion.div>

                  {/* Phone Field */}
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2 flex items-center space-x-2">
                      <FaPhoneIcon className="text-blue-400" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.phone ? 'border-red-400' : 'border-slate-600'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white placeholder-gray-400`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                  </motion.div>

                  {/* Message Field */}
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-2 flex items-center space-x-2">
                      <FaComment className="text-blue-400" />
                      <span>Message *</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.message ? 'border-red-400' : 'border-slate-600'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none text-white placeholder-gray-400`}
                      placeholder="Tell us about your project and goals..."
                    ></textarea>
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(37, 99, 235, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-3 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>Send via WhatsApp</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaPaperPlane />
                    </motion.div>
                  </motion.button>

                  <p className="text-sm text-gray-400 text-center">
                    By submitting this form, you'll be redirected to WhatsApp with your message pre-filled.
                  </p>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating "Connect with Us" Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: isScrolled ? 1 : 0, 
          scale: isScrolled ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToContact}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowUp className="text-xl" />
      </motion.button>
    </>
  );
};

export default ContactPage;
