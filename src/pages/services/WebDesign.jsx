
import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';

const WebDesign = () => {
  const serviceData = {
    title: 'Web Design',
    subtitle: 'Beautiful Websites That Convert',
    description: 'Create stunning, responsive websites that not only look great but also drive conversions and provide excellent user experience.',
    benefits: [
      'Professional brand image',
      'Mobile-responsive design',
      'Better user experience',
      'Higher conversion rates',
      'SEO-friendly structure',
      'Fast loading speeds'
    ],
    features: [
      'Custom Website Design',
      'Responsive Development',
      'E-commerce Solutions',
      'CMS Integration',
      'Speed Optimization',
      'Ongoing Maintenance'
    ],
    ctaText: 'Get Your Web Design Quote',
    icon: '🎨'
  };

  return <ServiceTemplate {...serviceData} />;
};

export default WebDesign;
