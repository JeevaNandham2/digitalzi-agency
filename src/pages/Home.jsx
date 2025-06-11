
import React from 'react';
import Hero from '../components/Hero';
import ServiceHighlights from '../components/ServiceHighlights';
import Testimonials from '../components/Testimonials';
import CaseStudiesPreview from '../components/CaseStudiesPreview';
import BlogPreview from '../components/BlogPreview';
import LeadCaptureForm from '../components/LeadCaptureForm';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <ServiceHighlights />
      <Testimonials />
      <CaseStudiesPreview />
      {/* <BlogPreview /> */}
      <LeadCaptureForm />
    </div>
  );
};

export default Home;
