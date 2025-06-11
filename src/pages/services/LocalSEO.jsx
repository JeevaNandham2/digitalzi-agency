import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';

const DigitalBranding = () => {
  const serviceData = {
    title: 'Branding',
    subtitle: 'Build a Powerful Online Identity',
    description:
      'Elevate your brand presence with our comprehensive digital marketing and branding solutions. From strategy to execution, we help you stand out in a crowded digital world.',
    benefits: [
      'Stronger brand recognition',
      'Consistent visual identity',
      'Higher customer trust',
      'Improved online engagement',
      'Multi-platform visibility',
      'Long-term customer loyalty'
    ],
    features: [
      'Brand Strategy Development',
      'Logo & Visual Identity Design',
      'Social Media Branding',
      'Influencer Collaboration',
      'Email Marketing Campaigns',
      'Content Marketing & Storytelling'
    ],
    ctaText: 'Start Building Your Brand',
    icon: '🚀'
  };

  return <ServiceTemplate {...serviceData} />;
};

export default DigitalBranding;
