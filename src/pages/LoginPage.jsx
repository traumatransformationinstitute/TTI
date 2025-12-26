import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import { useAuth } from '../context/AuthContext';
import './LoginPage.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock login - in a real app, validate and hit an API
        console.log("Logging in with", email, password);
        login(); // Set global auth state
        // Navigate to dashboard
        navigate('/dashboard');
    };

    return (
        <div className="login-page">
            <Header />
            <main className="login-content">
                <div className="auth-container">
                    <h2 className="auth-title">Log In</h2>
                    <form className="auth-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Username or email address *</label>
                            <input
                                type="text"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password *</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-actions">
                            <label className="remember-me">
                                <input type="checkbox" /> Remember me
                            </label>
                            <button type="submit" className="auth-btn">Log in</button>
                        </div>
                        <div className="auth-links">
                            <a href="#" className="forgot-password">Lost your password?</a>
                        </div>
                    </form>
                    <div className="signup-redirect">
                        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LoginPage;
