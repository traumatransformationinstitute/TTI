import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.png';
import './CertificationDetailsPage.css';

const CertificationDetailsPage = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();

    const handleGetCertified = () => {
        if (!isLoggedIn) {
            navigate('/login');
        } else {
            // Proceed to checkout (mock)
            alert("Proceeding to checkout...");
            navigate('/dashboard');
        }
    };

    return (
        <div className="cert-details-page">
            <Header />
            <main className="details-content">
                <div className="container">
                    {/* Intro / Description */}
                    <div className="details-intro">
                        <p>
                            MicroCertified Trauma Support Specialist is a certification that attests that the bearer has completed the educational requirements necessary to
                            help non-clinical care professionals learn the essential information and skills to help trauma survivors recover fully. This certification is valuable for
                            non-clinical trauma professionals, mental health staff, nurses, and emergency first responders. Certification demonstrates knowledge of the
                            essential information and skills to help trauma survivors recover fully from the events of their past.
                        </p>
                        <p className="note-text">
                            <strong>PLEASE NOTE: THIS CERTIFICATION DOES NOT INCLUDE THE COURSE. YOU WILL NEED TO PURCHASE THE COURSE SEPARATELY.</strong>
                        </p>
                    </div>

                    {/* Certification Procedure */}
                    <div className="procedure-section">
                        <h2 className="section-title">Certification Procedure:</h2>

                        <div className="step-block">
                            <p><strong><span className="step-label">STEP 1</span> – Satisfactory completion of one of the following trauma trainings COURSE MUST BE COMPLETED WITHIN 12 MONTHS OF APPLYING FOR CERTIFICATION:</strong></p>
                            <ul>
                                <li>Certified Trauma Support Specialist – Online Class</li>
                                <li>Are you looking for a Microcredential through your college or university?</li>
                            </ul>
                        </div>

                        <div className="step-block">
                            <p><strong><span className="step-label">STEP 2</span> – Online payment of certification fee</strong></p>
                            <ol>
                                <li>Click the (Get Certified Now) button below to enroll to take the certification</li>
                                <li>On the next screen you will
                                    <ul className="sub-list">
                                        <li>Choose your certification(s)</li>
                                        <li>Click "checkout"</li>
                                        <li>If you are already registered click "Log in here" to login, if you have not registered complete the account information form to register during the checkout process</li>
                                        <li>Complete the purchase of the certification</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>

                        <div className="step-block">
                            <p><strong><span className="step-label">STEP 3</span> – Complete the Personal Information Questionnaire</strong></p>
                        </div>

                        <div className="step-block">
                            <p><strong><span className="step-label">STEP 4</span> – Upload proof of course completion</strong></p>
                        </div>

                        <div className="step-block">
                            <p><strong><span className="step-label">STEP 5</span> – Complete and <span className="highlight-text">pass the certification exam with a passing grade of 80% or above</span> (approximate time to complete 1.5 hours)</strong></p>
                        </div>

                        <p className="completion-note">
                            <em>After completion of certification steps, please allow up to 30 days to review your documentation. We will contact you if we need any additional information or clarification. If your application is approved, you will be certified for 1 year from your application date.</em>
                        </p>

                        <div className="cta-container">
                            <button className="get-certified-btn" onClick={handleGetCertified}>GET CERTIFIED NOW</button>
                        </div>

                        <div className="redirect-notice">
                            <span className="warning-icon">⚠️</span>
                            <strong>After payment, you will be redirected to your <em>My Account</em> page to complete steps 3-5.</strong>
                        </div>
                    </div>

                    {/* Recertification */}
                    <div className="recertification-section">
                        <h2 className="section-title">Recertification:</h2>
                        <p>You can recertify your credentials for one (1) year by completing six (6) CE trauma related hours and by payment of a recertification fee of $50. To have your recertification application reviewed please complete the following steps:</p>

                        <div className="step-block">
                            <p><strong>Step 1 – </strong>Satisfactory completion of six (6) CE trauma related hours since the beginning of the current certification period.</p>
                        </div>
                        <div className="step-block">
                            <p><strong>Step 2 – </strong>Login to upload documentation and pay renewal fee</p>
                            <ol>
                                <li>In <em>My Account Dashboard</em>, click the Renew link below the certification you want to renew.</li>
                                <li>Complete the purchase to renew your certification</li>
                                <li>In <em>My Account Dashboard</em>, go to <em>DOCUMENT MANAGER</em> and upload your proof of CE completion for your renewal</li>
                            </ol>
                        </div>

                        <p className="completion-note">
                            <em>After completion of certification steps, please allow 30 days to review your documentation. We will contact you if we need any additional information or clarification.</em>
                        </p>
                        <div className="divider-line"></div>
                    </div>
                </div>
            </main>

            {/* Footer Removed - using Global Footer */}
        </div>
    );
};

export default CertificationDetailsPage;
