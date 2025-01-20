import { Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext.jsx';
import './UserCard.css';

const UserCard = ({ user }) => {
    const { isDarkMode } = useTheme();

    return (
        <Link to={`/user/${user.id}`} className="link">
            <div className={`user-card ${isDarkMode ? 'dark' : 'light'}`}>
                <h2 className="user-name">{user.name}</h2>
                <div className="user-info">
                    <Mail size={16} />
                    <span className="user-text">{user.email}</span>
                </div>
                <div className="user-info">
                    <MapPin size={16} />
                    <span className="user-text">{user.address.city}</span>
                </div>
            </div>
        </Link>
    );
}

export default UserCard;