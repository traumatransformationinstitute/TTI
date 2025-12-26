import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';

import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Trauma Institute International" style={{ height: '50px' }} />
        </div>
        <nav className="nav-menu">
          <NavLink to="/home" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About Us</NavLink>
          <NavLink to="/certifications" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Certifications</NavLink>
          <NavLink to={isLoggedIn ? "/dashboard" : "/login"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>My Account</NavLink>

          {isLoggedIn ? (
            <a href="#" onClick={handleLogout} className="btn-login">Logout</a>
          ) : (
            <NavLink to="/login" className="btn-login">Log In</NavLink>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
