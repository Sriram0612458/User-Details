import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTheme } from '/Users/sriramnelluri/Desktop/wisdom/wisdom-app/src/context/ThemeContext.jsx';
import {
    ArrowLeft,
    Mail,
    Phone,
    Globe,
    Building2,
    Loader,
    AlertCircle
} from 'lucide-react';
import './UserDetail.css';

const UserDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { isDarkMode } = useTheme();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                if (!response.ok) throw new Error('User not found');
                const data = await response.json();
                setUser(data);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]);

    if (loading) {
        return (
            <div className="loader">
                <Loader className="animate-spin" size={40} />
            </div>
        );
    }

    if (error) {
        return (
            <div >
                <AlertCircle size={24} />
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className={`detail-container ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="content-container">
                <button
                    onClick={() => navigate('/')}
                    className={`back-button ${isDarkMode ? 'dark' : 'light'}`}
                >
                    <ArrowLeft size={20} />
                    Back to Users
                </button>

                <div className={`user-detail-card ${isDarkMode ? 'dark' : 'light'}`}>


                    <div className="detail-grid">
                        <div className="info-section">
                            <h1 className="detail-title">{user.name}</h1>
                            <div className="info-item">

                                <Mail className="text-blue-500" size={20} />
                                <a href={`mailto:${user.email}`} className="info-link">
                                    {user.email}
                                </a>
                            </div>

                            <div className="info-item">
                                <Phone className="text-green-500" size={20} />
                                <a href={`tel:${user.phone}`} className="info-link">
                                    {user.phone}
                                </a>
                            </div>

                            <div className="info-item">
                                <Globe className="text-purple-500" size={20} />
                                <a
                                    href={`https://${user.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="info-link"
                                >
                                    {user.website}
                                </a>
                            </div>
                        </div>

                        <div className="info-section">
                            <div className="company-info">

                                <div className='company-logo'>
                                    <Building2 className="text-orange-500" size={20} />
                                    <h3 className="company-name">{user.company.name}</h3>
                                </div>
                                <div className="company-details">

                                    <p className={`company-text ${isDarkMode ? 'dark' : 'light'}`}>
                                        {user.company.catchPhrase}
                                    </p>
                                    <p className={`company-text ${isDarkMode ? 'dark' : 'light'}`}>
                                        {user.company.bs}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDetail;