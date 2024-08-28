import { useContext, useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <section>
      <nav className="navbar py-5 has-background-primary">
        <div className="container is-fluid">
          <div className="navbar-brand">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dhrybaucr/image/upload/v1724405466/bq4kj86qbdnnh0hfjedo.png"
                alt="Logo"
                style={{ height: '120px', width: 'auto' }}
                className="is-rounded"
              />
            </Link>
            <button
              className={`navbar-burger ${isMenuOpen ? 'is-active' : ''} has-background-primary`}
              type="button"
              aria-label="Menu"
              onClick={toggleMenu}
            >
              <HamburgerMenu
                isOpen={isMenuOpen}
                menuClicked={toggleMenu}
                width={18}
                height={15}
                strokeWidth={2}
                color="white"
                animationDuration={0.5}
              />
            </button>
          </div>

          <div className={`navbar-menu ${isMenuOpen ? 'is-active' : ''} has-background-primary`}>
            <div className="navbar-start">
              <ul className="navbar-item pl-0">
                <li>
                  <Link className="has-text-white" to="/">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="has-text-white" to="/post-job">
                    Post job
                  </Link>
                </li>
                <li>
                  <Link className="has-text-white" to="/jobs-all">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link className="has-text-white" to="/get-work-done">
                    Find-workers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Authenticated User Links */}
            <div className="navbar-end">
              {isAuthenticated ? (
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link has-text-white">
                    <img
                      src={user?.profilePhoto}
                      alt="Profile"
                      style={{ borderRadius: '50%', height: '40px', width: '40px' }}
                    />
                  </a>
                  <div className="navbar-dropdown is-right">
                    <Link className="navbar-item" to="/profile">
                      Profile
                    </Link>
                    <button className="navbar-item" onClick={logout}>
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="navbar-item">
                  <div className="buttons">
                    <Link className="button is-white is-outlined" to="/login">
                      Log In
                    </Link>
                    <Link className="button is-primary" to="/sign-up">
                      Sign Up
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
