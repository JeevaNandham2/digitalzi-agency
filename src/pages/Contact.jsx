import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, service, budget, message } = formData;

    const text = `
New Contact Form Submission:

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Budget: ${budget}
Message: ${message}
    `;

    const encodedMessage = encodeURIComponent(text.trim());
    const whatsappUrl = `https://wa.me/919640709670?text=${encodedMessage}`;
    
    // Open WhatsApp chat
    window.open(whatsappUrl, '_blank');

    // Optional alert
    alert('Redirecting to WhatsApp to send your message!');
  };

  return (
    <div className="contact-page">
      <section className="contact-hero section">
        <div className="container">
          <div className="contact-hero-content">
            <div className="hero-text">
              <h1 className="section-title">Let's Start Your Digital Journey</h1>
              <p className="section-subtitle">
                Ready to transform your business? Get in touch for a free consultation and custom strategy.
              </p>
              <div className="hero-features">
                <div className="feature-item">
                  <span className="feature-icon">⚡</span>
                  <span>Free 30-min consultation</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📊</span>
                  <span>Custom strategy roadmap</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🎯</span>
                  <span>ROI-focused approach</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              {/* <img src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=600" alt="Contact us" /> */}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>We're here to help you succeed. Choose the best way to reach us.</p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-content">
                    <h3>Call Us</h3>
                    <p>+91 9640709670</p>
                    <span>Mon-Fri 9AM-6PM IST</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-content">
                    <h3>Email Us</h3>
                    <p>digitalzi2318@gmail.com</p>
                    <span>We respond within 2 hours</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">💬</div>
                  <div className="method-content">
                    <h3>WhatsApp</h3>
                    <p>Chat with our experts</p>
                    <span>Available 24/7</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <div className="form-header">
                <h3>Send Us a Message</h3>
                <p>Fill out the form below and we'll get back to you soon!</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name "
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your Email"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your mobile number"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      <option value="seo">SEO Services</option>
                      <option value="ppc">PPC Advertising</option>
                      <option value="social">Social Media Marketing</option>
                      <option value="web-design">Web Design</option>
                      <option value="local-seo">Local SEO</option>
                      <option value="orm">Online Reputation Management</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  {/* <label htmlFor="budget">Monthly Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-25000">$10,000 - $25,000</option>
                    <option value="25000+">$25,000+</option>
                  </select> */}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project and goals..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                  <span className="btn-arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
