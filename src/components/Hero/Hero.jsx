import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero1">
      <div className="hero-content">
        <h1>
          <span className="hero-subtext">Welcome To</span><br />
          Trauma Institute International
        </h1>
      </div>
      <div className="hero-badge">
        <div className="badge-text">
          Certified<br />Trauma<br />Specialist
        </div>
      </div>
    </section>
  );
};

export default Hero;
