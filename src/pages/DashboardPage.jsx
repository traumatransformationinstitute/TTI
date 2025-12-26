import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import { useAuth } from '../context/AuthContext';
import './DashboardPage.css';

const DashboardPage = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        navigate('/login');
    };

    return (
        <div className="dashboard-page">
            <Header />
            <main className="dashboard-content">
                <div className="container">
                    <div className="dashboard-header">
                        <h1>My Account</h1>
                        <p>Welcome, User!</p>
                    </div>

                    <div className="dashboard-grid">
                        {/* Sidebar / Menu */}
                        <div className="dashboard-menu">
                            <ul>
                                <li className="active"><a href="#">Dashboard</a></li>
                                <li><a href="#">My Certifications</a></li>
                                <li><a href="#" onClick={handleLogout}>Logout</a></li>
                            </ul>
                        </div>

                        {/* Main Content Area */}
                        <div className="dashboard-main">
                            <p>
                                From your account dashboard you can view your certifications and manage your account details.
                            </p>

                            <div className="info-boxes">
                                <div className="info-box">
                                    <h3>My Certifications</h3>
                                    <p>You have no active certifications.</p>
                                    <Link to="/certifications" className="box-link">Browse Certifications</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DashboardPage;
