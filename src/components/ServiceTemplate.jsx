
import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceTemplate.css';

const ServiceTemplate = ({ 
  title, 
  subtitle, 
  description, 
  benefits, 
  features, 
  ctaText, 
  icon 
}) => {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-icon-large">{icon}</div>
            <h1 className="service-hero-title">{title}</h1>
            <h2 className="service-hero-subtitle">{subtitle}</h2>
            <p className="service-hero-description">{description}</p>
            <Link to="/contact" className="btn btn-primary service-cta">
              {ctaText}
            </Link>
          </div>
        </div>
      </section>

      <section className="service-details section">
        <div className="container">
          <div className="service-content-grid">
            <div className="service-benefits">
              <h3>Benefits You'll Get</h3>
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index}>✓ {benefit}</li>
                ))}
              </ul>
            </div>

            <div className="service-features">
              <h3>What's Included</h3>
              <ul className="features-list">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceTemplate;
