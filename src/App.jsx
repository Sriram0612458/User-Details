import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import Home from './pages/Home/Home.jsx';
import UserDetail from './pages/UserDetail/UserDetail.jsx';

function App() {
  return (

    <ThemeProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<UserDetail />} />
          </Routes>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;