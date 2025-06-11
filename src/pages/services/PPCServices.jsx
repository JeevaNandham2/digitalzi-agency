
import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';

const PPCServices = () => {
  const serviceData = {
    title: 'PPC Services',
    subtitle: 'Maximize ROI with Targeted Ads',
    description: 'Drive immediate results with our data-driven pay-per-click advertising campaigns across Google Ads, Facebook, and other platforms.',
    benefits: [
      'Immediate traffic and leads',
      'Precise targeting options',
      'Measurable ROI',
      'Budget control',
      'Brand visibility',
      'Competitive advantage'
    ],
    features: [
      'Google Ads Management',
      'Facebook & Instagram Ads',
      'Keyword Research',
      'Ad Copy Creation',
      'Landing Page Optimization',
      'Conversion Tracking'
    ],
    ctaText: 'Get Your PPC Audit',
    icon: '💰'
  };

  return <ServiceTemplate {...serviceData} />;
};

export default PPCServices;
