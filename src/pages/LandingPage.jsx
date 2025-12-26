import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import logo from '../assets/logo.png';

const LandingPage = () => {
    return (
        <div className="landing-page">
            {/* Floating Background Orbs */}
            <div className="orb orb--one"></div>
            <div className="orb orb--two"></div>
            <div className="orb orb--three"></div>

            {/* Header */}
            <header>
                <div className="container">
                    <div className="header-inner">
                        <Link to="/" className="logo">
                            <img src={logo} alt="ETT India" style={{ height: '60px' }} />
                        </Link>
                        <nav>
                            <Link to="/home" className="nav-link">Wellness Track</Link>
                            <a href="#clinical" className="nav-link">Clinical Track</a>
                            <a href="#about" className="nav-link">About</a>
                            <a href="#contact" className="nav-link cta-button">Get Started</a>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero" id="home">
                <div className="container">
                    <div className="status-indicator">
                        <span className="status-dot"></span>
                        <span>Programs Open • Applications Welcome</span>
                    </div>
                    <h1>Choose Your Path</h1>
                    <p className="hero-subtitle">
                        Transform lives through Emotional Transformation Therapy.
                        Select your journey—Wellness for personal growth or Clinical for professional mastery.
                    </p>
                </div>
            </section>

            {/* Program Options */}
            <section className="container">
                <div className="options-grid">
                    {/* Wellness Track */}
                    <Link to="/home" className="option-card wellness">
                        <div className="option-header">
                            <div className="option-tag">Wellness Track</div>
                        </div>
                        <h2 className="option-title">ETT Wellness Model</h2>
                        <p className="option-subtitle">Foundations of ETT for wellness professionals and personal seekers</p>
                        <div className="features">
                            <div className="feature">
                                <div className="feature-icon">🌿</div>
                                <span>Level 1: Emotional regulation & stress reduction</span>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">🧘</div>
                                <span>Somatic healing & spiritual wellness pathways</span>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">💫</div>
                                <span>Self-paced personal transformation</span>
                            </div>
                        </div>
                        <div className="option-cta">
                            Explore Wellness Track
                            <span>→</span>
                        </div>
                    </Link>

                    {/* Clinical Track */}
                    <a href="#clinical" className="option-card clinical">
                        <div className="option-header">
                            <div className="option-tag">Clinical Track</div>
                        </div>
                        <h2 className="option-title">ETT Clinical Model</h2>
                        <p className="option-subtitle">Advanced training for licensed mental health professionals</p>
                        <div className="features">
                            <div className="feature">
                                <div className="feature-icon">🩺</div>
                                <span>Level 1–2: Core ETT techniques & attachment work</span>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">🎯</div>
                                <span>Advanced: Adomatic applications & spiritual integration</span>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">📜</div>
                                <span>Certification for clinical practice</span>
                            </div>
                        </div>
                        <div className="option-cta">
                            Explore Clinical Track
                            <span>→</span>
                        </div>
                    </a>
                </div>
            </section>



            {/* Footer Removed - using Global Footer */}
        </div>
    );
};

export default LandingPage;
