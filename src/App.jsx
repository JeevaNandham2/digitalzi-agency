import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollTop'; // ✅ Auto scroll on route change

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
// import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';

import SEOServices from './pages/services/SEOServices';
import SocialMediaMarketing from './pages/services/SocialMediaMarketing';
import PPCServices from './pages/services/PPCServices';
import WebDesign from './pages/services/WebDesign';
import LocalSEO from './pages/services/LocalSEO';
import ORM from './pages/services/ORM';

import './styles/global.css';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ Scroll to top on each route change */}
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/case-studies" element={<CaseStudies />} /> */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />

            {/* ✅ Services Pages */}
            <Route path="/seo-services" element={<SEOServices />} />
            <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="/ppc-services" element={<PPCServices />} />
            <Route path="/web-design" element={<WebDesign />} />
            <Route path="/local-seo" element={<LocalSEO />} />
            <Route path="/orm" element={<ORM />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
