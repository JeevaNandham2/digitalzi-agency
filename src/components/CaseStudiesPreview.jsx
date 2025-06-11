
import React from 'react';
import { Link } from 'react-router-dom';
import './CaseStudiesPreview.css';

const CaseStudiesPreview = () => {
  const caseStudies = [
    {
      title: 'E-commerce Success',
      result: '+300% Sales Growth',
      description: 'How we helped an online retailer triple their revenue through comprehensive digital marketing.',
      icon: '📈'
    },
    {
      title: 'Local Business Boost',
      result: '+150% Foot Traffic',
      description: 'Local SEO and social media strategy that brought more customers to physical locations.',
      icon: '📍'
    }
  ];

  return (
    <section className="case-studies-preview section">
      <div className="container">
        <h2 className="section-title">Success Stories</h2>
        <p className="section-subtitle">
          Real results for real businesses
        </p>
        
        <div className="case-studies-grid grid grid-2">
          {caseStudies.map((study, index) => (
            <div key={index} className="case-study-preview-card">
              <div className="case-study-icon">{study.icon}</div>
              <h3>{study.title}</h3>
              <div className="case-study-result">{study.result}</div>
              <p>{study.description}</p>
            </div>
          ))}
        </div>
        
        <div className="case-studies-cta">
          <Link to="/blog" className="btn btn-secondary">
            View All 
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;
