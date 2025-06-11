
import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';

const SocialMediaMarketing = () => {
  const serviceData = {
    title: 'Social Media Marketing',
    subtitle: 'Build Your Brand on Social Platforms',
    description: 'Engage your audience and grow your brand presence across all major social media platforms with our comprehensive social media marketing strategies.',
    benefits: [
      'Increased brand awareness',
      'Higher engagement rates',
      'Better customer relationships',
      'More website traffic',
      'Improved brand loyalty',
      'Cost-effective marketing'
    ],
    features: [
      'Social Media Strategy',
      'Content Creation & Curation',
      'Community Management',
      'Paid Social Advertising',
      'Influencer Partnerships',
      'Analytics & Reporting'
    ],
    ctaText: 'Start Your Social Media Growth',
    icon: '📱'
  };

  return <ServiceTemplate {...serviceData} />;
};

export default SocialMediaMarketing;
