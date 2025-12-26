import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import CertificationGrid from '../components/CertificationGrid/CertificationGrid';
import AboutSection from '../components/AboutSection/AboutSection';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <CertificationGrid />
            <AboutSection />
        </div>
    );
};

export default HomePage;
