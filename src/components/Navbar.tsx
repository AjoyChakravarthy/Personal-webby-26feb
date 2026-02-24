import { NavLink } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import './Navbar.css';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/" className="navbar__logo">
          &lt;AJO.DEV /&gt;
        </NavLink>

        <div className="navbar__links">
          <NavLink to="/" className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`} end>
            Home
          </NavLink>
          <NavLink to="/tech" className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}>
            Tech Stack
          </NavLink>
          <NavLink to="/works" className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}>
            Works
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}>
            Contact
          </NavLink>

          <button 
            className="navbar__theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}

