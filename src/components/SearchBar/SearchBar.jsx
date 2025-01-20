import { Search } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext.jsx';
import { useUsers } from '../../context/UserContext.jsx';
import './SearchBar.css';

const SearchBar = () => {
    const { searchTerm, setSearchTerm, sortDirection, setSortDirection } = useUsers();
    const { isDarkMode } = useTheme();

    return (
        <div className="search-container">
            <div className="search-wrapper">
                <Search className="search-icon" size={20} />
                <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`search-input ${isDarkMode ? 'dark' : 'light'}`}
                />

            </div>

            <select
                value={sortDirection}
                onChange={(e) => setSortDirection(e.target.value)}
                className={`sort-select ${isDarkMode ? 'dark' : 'light'}`}
            >
                <option value="asc">Sort A-Z</option>
                <option value="desc">Sort Z-A</option>
            </select>
        </div>
    );
}

export default SearchBar;

