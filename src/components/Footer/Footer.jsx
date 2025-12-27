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
              <p><a href="mailto:ssidhu@lightmindsett.com">ssidhu@lightmindsett.com</a></p>
              <p>972-336-1591</p>
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
