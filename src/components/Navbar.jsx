import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../components/img/shared image (6).jpeg';


/*hellooooo*/

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null); // close dropdown when menu toggled
  };

  const handleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar-outer">
      <div className="navbar-inner">
        <div className="nav-left">
          <Link to="/" className="nav-logo" onClick={handleLinkClick}>
            <img src={logo} alt="logo" className="logo" />
            <span className="logo-tagline">Digitalzi</span>
          </Link>
        </div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={handleLinkClick}>
            Home
          </Link>

          <div className="nav-dropdown">
            <button
              className="nav-link dropdown-toggle"
              onClick={() => handleDropdown('services')}
            >
              Services <span className="dropdown-arrow"></span>
            </button>
            <div
              className={`dropdown-menu ${
                activeDropdown === 'services' ? 'active' : ''
              }`}
            >
              <Link to="/seo-services" onClick={handleLinkClick}>
                SEO Services
              </Link>
              <Link to="/social-media-marketing" onClick={handleLinkClick}>
                Social Media Marketing
              </Link>
              <Link to="/ORM" onClick={handleLinkClick}>
                Video Editing
              </Link>
              <Link to="/ppc-services" onClick={handleLinkClick}>
                PPC Services
              </Link>
              <Link to="/web-design" onClick={handleLinkClick}>
                Web Design
              </Link>
            </div>
          </div>

          <div className="nav-dropdown">
            <button
              className="nav-link dropdown-toggle"
              onClick={() => handleDropdown('company')}
            >
              Company <span className="dropdown-arrow"></span>
            </button>
            <div
              className={`dropdown-menu ${
                activeDropdown === 'company' ? 'active' : ''
              }`}
            >
              <Link to="/about" onClick={handleLinkClick}>
                About Us
              </Link>
              <Link to="/blog" onClick={handleLinkClick}>
                Blog
              </Link>
            </div>
          </div>

          <Link to="/contact" className="nav-link cta-button" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
