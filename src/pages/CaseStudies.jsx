
import React from 'react';
import './CaseStudies.css';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'E-commerce Revenue Transformation',
      client: 'TechGear Online',
      industry: 'Electronics & Gadgets',
      challenge: 'Low online visibility and poor conversion rates',
      solution: 'Complete SEO overhaul, PPC campaigns, and UX optimization',
      result: '400% increase in organic traffic, 250% boost in online sales',
      timeline: '6 months',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      metrics: [
        { label: 'Organic Traffic', value: '+400%' },
        { label: 'Online Sales', value: '+250%' },
        { label: 'Conversion Rate', value: '+180%' },
        { label: 'ROAS', value: '8.5x' }
      ]
    },
    {
      title: 'Local Restaurant Chain Expansion',
      client: 'Bella Vista Restaurants',
      industry: 'Food & Hospitality',
      challenge: 'Limited local awareness and foot traffic',
      solution: 'Local SEO, Google My Business optimization, social media marketing',
      result: '300% increase in local search visibility, 150% more reservations',
      timeline: '4 months',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      metrics: [
        { label: 'Local Visibility', value: '+300%' },
        { label: 'Reservations', value: '+150%' },
        { label: 'Review Rating', value: '4.8/5' },
        { label: 'Locations', value: '12 new' }
      ]
    },
    {
      title: 'B2B SaaS Lead Generation',
      client: 'CloudSync Solutions',
      industry: 'Software & Technology',
      challenge: 'High cost per acquisition and low-quality leads',
      solution: 'Content marketing, LinkedIn ads, marketing automation',
      result: '500% increase in qualified leads, 60% reduction in CAC',
      timeline: '8 months',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      metrics: [
        { label: 'Qualified Leads', value: '+500%' },
        { label: 'CAC Reduction', value: '-60%' },
        { label: 'MQL to SQL', value: '+320%' },
        { label: 'Revenue Growth', value: '+180%' }
      ]
    },
    {
      title: 'Healthcare Practice Growth',
      client: 'Prime Medical Center',
      industry: 'Healthcare',
      challenge: 'Low online presence and patient acquisition',
      solution: 'Medical SEO, reputation management, patient portal optimization',
      result: '200% increase in new patient inquiries, improved online reputation',
      timeline: '5 months',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      metrics: [
        { label: 'Patient Inquiries', value: '+200%' },
        { label: 'Online Reviews', value: '4.9/5' },
        { label: 'Appointment Bookings', value: '+175%' },
        { label: 'Local Rankings', value: 'Top 3' }
      ]
    }
  ];

  return (
    <div className="case-studies-page">
      <section className="case-studies-hero section">
        <div className="container">
          <div className="hero-content">
            <h1 className="section-title">Success Stories That Speak Volumes</h1>
            <p className="section-subtitle">
              Discover how we've helped businesses across industries achieve remarkable growth 
              through strategic digital marketing initiatives.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Successful Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">300%</div>
                <div className="stat-label">Average ROI</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-studies-content section">
        <div className="container">
          {caseStudies.map((study, index) => (
            <div key={index} className={`case-study-detailed ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="study-image">
                <img src={study.image} alt={study.title} />
                <div className="study-overlay">
                  <span className="industry-tag">{study.industry}</span>
                </div>
              </div>
              
              <div className="study-content">
                <div className="study-header">
                  <h2>{study.title}</h2>
                  <div className="client-info">
                    <span className="client-name">{study.client}</span>
                    <span className="timeline">{study.timeline} project</span>
                  </div>
                </div>
                
                <div className="study-details">
                  <div className="detail-section">
                    <h4>Challenge</h4>
                    <p>{study.challenge}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Our Solution</h4>
                    <p>{study.solution}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Results</h4>
                    <p>{study.result}</p>
                  </div>
                </div>
                
                <div className="study-metrics">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="metric-item">
                      <div className="metric-value">{metric.value}</div>
                      <div className="metric-label">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="case-studies-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Write Your Success Story?</h2>
            <p>Join the ranks of successful businesses that have transformed their digital presence with DigitalZi.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Start Your Project</a>
              <a href="/about" className="btn btn-secondary">Learn More About Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
