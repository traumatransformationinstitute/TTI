import React from 'react';
import './CertificationGrid.css';

const certifications = [
  { id: 1, title: 'Certified Trauma Specialist', desc: 'Comprehensive training for professionals.' },
  { id: 2, title: 'Trauma Informed Coach', desc: 'Coaching skills for trauma recovery.' },
  { id: 3, title: 'Clinical Trauma Pro', desc: 'Advanced clinical techniques.' },
];

const CertificationGrid = () => {
  return (
    <section className="grid-section">
      <div className="grid-container">
        {certifications.map(cert => (
          <div key={cert.id} className="grid-card">
            <div className="card-header"></div>
            <div className="card-body">
              <h3>{cert.title}</h3>
              <p>{cert.desc}</p>
              <button className="btn-learn-more">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationGrid;
