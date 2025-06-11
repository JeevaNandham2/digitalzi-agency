import React, { useState } from 'react';
import './LeadCaptureForm.css';

const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, service } = formData;
    const message = `
🔔 New Consultation Request:

👤 Name: ${name}
📧 Email: ${email}
🛠️ Service Interested: ${service}

Please reach out ASAP.
    `;

    const encodedMessage = encodeURIComponent(message.trim());
    const whatsappUrl = `https://wa.me/919640709670?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    // Optional reset
    setFormData({ name: '', email: '', service: '' });
  };

  return (
    <section className="lead-capture section">
      <div className="container">
        <div className="lead-capture-content">
          <div className="lead-capture-text">
            <h2>Ready to Grow Your Business?</h2>
            <p>
              Get a free consultation and discover how we can help you achieve your digital marketing goals.
            </p>
            <ul>
              <li>✓ Free initial consultation</li>
              <li>✓ Customized strategy proposal</li>
              <li>✓ No long-term commitments</li>
            </ul>
          </div>
          
          <div className="lead-capture-form-container">
            <form className="lead-capture-form" onSubmit={handleSubmit}>
              <h3>Get Your Free Consultation</h3>
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a Service</option>
                  <option value="SEO Services">SEO Services</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="PPC Services">PPC Services</option>
                  <option value="Web Design">Web Design</option>
                  <option value="Local SEO">Local SEO</option>
                  <option value="Online Reputation Management">Online Reputation Management</option>
                </select>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Get Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
