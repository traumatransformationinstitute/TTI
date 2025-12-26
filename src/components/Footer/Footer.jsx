import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="global-footer">
      <div className="container">
        <div className="footer-columns">
          {/* Contact Us */}
          <div className="footer-col">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="footer-info">
              <p>18020 N 7th St, Ste. 220</p>
              <p>Phoenix, AZ 85024</p>
              <p><a href="mailto:help@aztrauma.org">help@aztrauma.org</a></p>
              <p>Office: (480) 442-1840</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col center-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/certifications">Certifications</Link></li>
              <li><Link to="/login">My Account</Link></li>
            </ul>
          </div>


        </div>

        <div className="footer-bottom">
          <p>© 2025 Trauma Institute International. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
