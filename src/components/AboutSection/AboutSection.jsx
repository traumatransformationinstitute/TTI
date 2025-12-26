import React, { useState } from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    { title: 'Our Mission', content: 'To provide the highest quality trauma education and certification.' },
    { title: 'Our Values', content: 'Integrity, Compassion, Excellence in everything we do.' },
    { title: 'Our Role', content: 'Leading the way in international trauma standards.' }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Trauma Institute International is a leading provider of trauma education and certification.
            We are dedicated to helping professionals and organizations improve their capacity to support
            individuals affected by trauma.
          </p>
        </div>
        <div className="about-accordion">
          {items.map((item, index) => (
            <div key={index} className="accordion-item">
              <div 
                className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
                <span className="icon">{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <div className="accordion-content">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
