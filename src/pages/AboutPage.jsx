import React from 'react';
import Header from '../components/Header/Header';
import './AboutPage.css';
import heroBg from '../assets/about-hero.png';
import benefitsIll from '../assets/about-benefits-final.png';

const AboutPage = () => {
    return (
        <div className="about-page">
            <Header />

            {/* Hero Section */}
            <div className="about-hero" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="container hero-content">
                    <h1 className="hero-title fade-in-up">Empowering Transformations</h1>
                    <p className="hero-subtitle fade-in-up delay-1">
                        Trauma Institute International is the premier organization for certification in trauma treatment and transformative care.
                    </p>
                </div>
            </div>

            <main className="about-content">
                <div className="container">

                    {/* Intro Section */}
                    <div className="intro-section fade-in-up delay-2">
                        <p className="intro-text">
                            We provide certifications in accord with the standards accepted by the international
                            trauma treating community. Our goal is to equip professionals with the essential information
                            and skills to help trauma survivors recover fully.
                        </p>
                    </div>

                    {/* Certifications Grid */}
                    <h2 className="section-title fade-in-up">Our Certifications</h2>
                    <div className="cert-grid">
                        <div className="cert-card fade-in-up">
                            <h3>CCTSI</h3>
                            <p>Certified Clinical Trauma Specialist – Individual</p>
                        </div>
                        <div className="cert-card fade-in-up">
                            <h3>CCTSF</h3>
                            <p>Certified Clinical Trauma Specialist – Family</p>
                        </div>
                        <div className="cert-card fade-in-up">
                            <h3>CCTSA</h3>
                            <p>Certified Clinical Trauma Specialist – Addiction</p>
                        </div>
                        <div className="cert-card fade-in-up">
                            <h3>CTSS</h3>
                            <p>Certified Trauma Support Specialist</p>
                        </div>
                        <div className="cert-card fade-in-up">
                            <h3>ACCTS</h3>
                            <p>Advanced Certified Clinical Trauma Specialist</p>
                        </div>
                        <div className="cert-card fade-in-up">
                            <h3>CRP</h3>
                            <p>Certified Resilience Professional</p>
                        </div>
                        <div className="cert-card fade-in-up">
                            <h3>CCTS-P</h3>
                            <p>Certified Clinical Trauma Specialist – Prenatal</p>
                        </div>
                    </div>

                    {/* Benefits Section */}
                    <div className="benefits-section">
                        <div className="benefits-content fade-in-left">
                            <h2 className="section-title">Benefits of Becoming Certified</h2>
                            <ul className="benefits-list">
                                <li><strong>Professional Recognition:</strong> Use the certification designation on your credentials.</li>
                                <li><strong>Expertise:</strong> Demonstrate your ambitious dedication to excellence in trauma service.</li>
                                <li><strong>Community:</strong> Join a world-wide network of caring peers for support.</li>
                                <li><strong>Knowledge:</strong> Stay informed of current developments in trauma care.</li>
                                <li><strong>Support:</strong> Access peer coaching through Arizona Trauma Institute.</li>
                            </ul>
                        </div>
                        <div className="benefits-image fade-in-right">
                            <img src={benefitsIll} alt="Benefits Illustration" />
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default AboutPage;
