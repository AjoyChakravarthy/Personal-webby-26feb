import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import './Navbar.css';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/" className="navbar__logo" onClick={closeMenu}>
          &lt;AJO.DEV /&gt;
        </NavLink>

        <div className="navbar__actions">
          <button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button
            className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`navbar__links${menuOpen ? ' open' : ''}`}>
          <NavLink to="/" className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`} end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/tech" className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`} onClick={closeMenu}>
            Tech Stack
          </NavLink>
          <NavLink to="/works" className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`} onClick={closeMenu}>
            Works
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`} onClick={closeMenu}>
            Contact
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`} onClick={closeMenu}>
            Gallery
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

