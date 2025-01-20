import { Loader, AlertCircle, Sun, Moon } from 'lucide-react';
import { useTheme } from '/Users/sriramnelluri/Desktop/wisdom/wisdom-app/src/context/ThemeContext.jsx';
import { useUsers } from '/Users/sriramnelluri/Desktop/wisdom/wisdom-app/src/context/UserContext.jsx';
import SearchBar from '/Users/sriramnelluri/Desktop/wisdom/wisdom-app/src/components/SearchBar/SearchBar.jsx';
import UserCard from '/Users/sriramnelluri/Desktop/wisdom/wisdom-app/src/components/UserCard/UserCard.jsx';
import Pagination from '/Users/sriramnelluri/Desktop/wisdom/wisdom-app/src/components/PageNations/PageNations.jsx';

import './Home.css';

const Home = () => {
    const { users, loading, error, totalUsers } = useUsers();
    const { isDarkMode, toggleTheme } = useTheme();

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
        <div className={`page-container ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="content-container">
                <div className="header">
                    <h1 className={`title ${isDarkMode ? 'dark' : ''}`}>
                        User Directory
                    </h1>
                    <button
                        onClick={toggleTheme}
                        className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
                    >
                        {isDarkMode ? <Sun size={26} /> : <Moon size={26} />}
                    </button>
                </div>

                <SearchBar />

                <p className={`user-count ${isDarkMode ? 'dark' : 'light'}`}>
                    Showing {users.length} of {totalUsers} users
                </p>

                <div className="users-list">
                    {users.map(user => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>

                <Pagination />
            </div>
        </div>
    );
}

export default Home;