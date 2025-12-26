import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import './SignupPage.css'; // Reusing login styles or separate if needed

const SignupPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock signup logic
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Signing up with", formData);
        navigate('/dashboard'); // Or login
    };

    return (
        <div className="login-page"> {/* Reusing layout class */}
            <Header />
            <main className="login-content">
                <div className="auth-container">
                    <h2 className="auth-title">Register</h2>
                    <form className="auth-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email address *</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password *</label>
                            <input
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password *</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-privacy">
                            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#">privacy policy</a>.</p>
                        </div>

                        <div className="form-actions" style={{ justifyContent: 'center' }}>
                            <button type="submit" className="auth-btn" style={{ width: '100%' }}>Register</button>
                        </div>
                    </form>
                    <div className="signup-redirect">
                        <p>Already have an account? <Link to="/login">Log in</Link></p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SignupPage;
