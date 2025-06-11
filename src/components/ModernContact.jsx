
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaArrowUp, FaTimes, FaCheck } from 'react-icons/fa';

const ModernContact = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    company: '',
    services: []
  });
  const [errors, setErrors] = useState({});

  const availableServices = [
    'Branding', 'Logo Design', 'SEO', 'PR', 'Website Development', 
    'Rebranding', 'UI/UX Design', 'Social Media Marketing', 
    'Content Marketing', 'PPC Advertising', 'Email Marketing', 
    'Video Marketing', 'Analytics & Reporting'
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    
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

    const selectedServices = formData.services.length > 0 
      ? formData.services.join(', ') 
      : 'General Inquiry';
    
    const message = `Hello! I'm ${formData.name}${formData.company ? ` from ${formData.company}` : ''}${formData.city ? ` in ${formData.city}` : ''}, interested in ${selectedServices}. My contact details: Email: ${formData.email}, Phone: ${formData.phone}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919566931353?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', city: '', company: '', services: [] });
    setErrors({});
    setIsContactOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const toggleService = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      setIsContactOpen(true);
    }
  };

  return (
    <>
      {/* Elite Up Arrow "Connect with Us" Button */}
      <motion.button
        onClick={scrollToContact}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 20px 40px rgba(251, 191, 36, 0.4)"
        }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 0.2 },
          boxShadow: { duration: 0.3 }
        }}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-full shadow-2xl flex items-center justify-center font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 border-2 border-yellow-300"
        title="Connect with Us"
      >
        <FaArrowUp className="text-xl" />
      </motion.button>

      {/* Contact Section */}
      <section id="contact-section" className="min-h-screen bg-black py-20 px-4 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 right-10 w-40 h-40 border border-yellow-400 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 rounded-lg"
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight font-playfair">
              Ready to go on a{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                business growth trajectory?
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-medium font-inter">
              We would love to be your Growth Partner
            </p>
          </motion.div>

          {/* Direct Contact Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href="tel:+919566931353"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-3 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 border border-yellow-400/30 rounded-full px-8 py-4 text-white hover:border-yellow-400 transition-all duration-300 font-inter"
            >
              <FaPhone className="text-yellow-400" />
              <span className="font-semibold">📞 Call Us</span>
            </motion.a>
            
            <motion.a
              href="mailto:digitalzi2318@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-3 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 border border-yellow-400/30 rounded-full px-8 py-4 text-white hover:border-yellow-400 transition-all duration-300 font-inter"
            >
              <FaEnvelope className="text-yellow-400" />
              <span className="font-semibold">✉️ Email Us</span>
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-yellow-400/20 rounded-3xl p-8 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2 font-inter">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 border ${errors.name ? 'border-red-400' : 'border-gray-600'} rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-white placeholder-gray-400 font-inter`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1 font-inter">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 font-inter">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 border ${errors.email ? 'border-red-400' : 'border-gray-600'} rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-white placeholder-gray-400 font-inter`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1 font-inter">{errors.email}</p>}
                </div>
              </div>

              {/* Phone and City Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2 font-inter">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 border ${errors.phone ? 'border-red-400' : 'border-gray-600'} rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-white placeholder-gray-400 font-inter`}
                    placeholder="+91 9566931353"
                  />
                  {errors.phone && <p className="text-red-400 text-sm mt-1 font-inter">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 font-inter">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-white placeholder-gray-400 font-inter"
                    placeholder="Your city"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-white font-semibold mb-2 font-inter">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-white placeholder-gray-400 font-inter"
                  placeholder="Your company name"
                />
              </div>

              {/* Services Required */}
              <div>
                <label className="block text-white font-semibold mb-4 font-inter">Services Required</label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {availableServices.map((service, index) => (
                    <motion.button
                      key={service}
                      type="button"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleService(service)}
                      className={`px-4 py-2 rounded-full border transition-all duration-300 text-sm font-medium font-inter ${
                        formData.services.includes(service)
                          ? 'bg-yellow-400 border-yellow-400 text-black'
                          : 'bg-transparent border-gray-600 text-gray-300 hover:border-yellow-400 hover:text-yellow-400'
                      }`}
                    >
                      {formData.services.includes(service) && (
                        <FaCheck className="inline mr-2 text-xs" />
                      )}
                      {service}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg font-inter"
              >
                Start Our Partnership Journey
              </motion.button>

              <p className="text-sm text-gray-400 text-center font-inter">
                By submitting this form, you'll be redirected to WhatsApp with your details pre-filled.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Slide-up Modal (Alternative option) */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end"
            onClick={() => setIsContactOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-full bg-black border-t border-yellow-400/30 rounded-t-3xl p-6 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Let's Connect!</h2>
                <button
                  onClick={() => setIsContactOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaTimes size={24} />
                </button>
              </div>
              
              <div className="text-center">
                <p className="text-gray-300 mb-6">Scroll up to see our full contact section!</p>
                <button
                  onClick={() => {
                    setIsContactOpen(false);
                    setTimeout(() => scrollToContact(), 100);
                  }}
                  className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
                >
                  View Contact Form
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModernContact;
