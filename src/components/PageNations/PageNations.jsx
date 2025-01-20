import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext.jsx';
import { useUsers } from '../../context/UserContext.jsx';
import './PageNations.css'; // Import the CSS file

const Pagination = () => {
    const { currentPage, setCurrentPage, totalPages } = useUsers();
    const { isDarkMode } = useTheme();

    const handlePrevious = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
    };

    return (
        <div className={`pagination ${isDarkMode ? 'text-white' : ''}`}>
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`flex items-center gap-1  ${currentPage === 1 ? 'button-disabled' : 'button-hover'}`}
            >
                <ChevronLeft size={20} />
                Previous
            </button>
            <span>
                Page {currentPage} of {totalPages}
            </span>
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-1 ${currentPage === totalPages ? 'button-disabled' : 'button-hover'}`}
            >
                Next
                <ChevronRight size={20} />
            </button>
        </div>
    );
}

export default Pagination;