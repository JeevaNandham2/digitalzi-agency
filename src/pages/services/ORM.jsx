import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';

const VideoEditing = () => {
  const serviceData = {
    title: 'Video Editing',
    subtitle: 'Transform Ideas into Cinematic Visuals',
    description:
      'Bring your vision to life with our professional video editing services. Using tools like DaVinci Resolve, After Effects, and Blender, we craft stunning motion graphics, VFX, and 3D animations that captivate your audience.',
    benefits: [
      'High-quality cinematic videos',
      'Eye-catching VFX & transitions',
      'Enhanced brand storytelling',
      'Engaging social media content',
      'Stronger audience retention',
      'Professional-grade visuals'
    ],
    features: [
      'Social Media Reels & Shorts',
      'VFX & Motion Graphics ',
      'DaVinci Resolve Color Grading',
      '3D Design & Animation (Blender/Cinema 4D)',
      'Video Stabilization & Cleanup',
      'Intro/Outro Creation',
      
    ],
    ctaText: 'Start Your Video Project',
    icon: '🎬'
  };

  return <ServiceTemplate {...serviceData} />;
};

export default VideoEditing;
