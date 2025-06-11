
import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';

const SEOServices = () => {
  const serviceData = {
    title: 'SEO Services',
    subtitle: 'Dominate Search Engine Rankings',
    description: 'Our comprehensive SEO strategies help your business achieve higher search engine rankings, increased organic traffic, and better online visibility.',
    benefits: [
      'Increased organic traffic',
      'Higher search engine rankings',
      'Better brand visibility',
      'Long-term sustainable growth',
      'Improved user experience',
      'Higher conversion rates'
    ],
    features: [
      'Keyword Research & Analysis',
      'On-Page Optimization',
      'Technical SEO Audit',
      'Content Strategy',
      'Link Building',
      'Performance Tracking'
    ],
    ctaText: 'Get Your Free SEO Audit',
    icon: '🔍'
  };

  return <ServiceTemplate {...serviceData} />;
};

export default SEOServices;
