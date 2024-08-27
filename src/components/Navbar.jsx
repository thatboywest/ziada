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
            <div className="navbar-item">
              {isAuthenticated ? (
                <div className="navbar-item">
                  <div className={`dropdown ${isDropdownOpen ? 'is-active' : ''}`} onClick={toggleDropdown}>
                    <div className="dropdown-trigger">
                      <button
                        className="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu"
                      >
                        <span className="image">
                          <img
                            src={user?.profilePhoto}
                            alt="Profile"
                            style={{ borderRadius: '50%' }}
                          />
                        </span>
                      </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                        <Link to="/profile" className="dropdown-item">
                          Profile
                        </Link>
                        <button className="dropdown-item" onClick={logout}>
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="navbar-item is-hidden-mobile">
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
      <div
        className={`is-hidden navbar-side is-fixed is-top-0 is-bottom-0 is-left-0 ${isMenuOpen ? 'is-active has-background-primary' : ''}`}
        style={{ width: '75%', zIndex: 9999 }}
      >
        <div className="navbar-backdrop is-fixed is-inset-0 has-background-dark" style={{ opacity: '75%', zIndex: 50 }}></div>
        <aside
          className="menu is-relative is-flex is-flex-direction-column py-6 px-6"
          style={{ width: '100%', height: '100%', zIndex: 50, overflowY: 'auto' }}
        >
          <div className="is-flex is-align-items-center mb-10">
            <a className="mr-auto mb-0" href="#">
              <span className="navbar-item px-0 title is-5 has-text-white">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Logo"
                  style={{ height: '28px' }}
                  width="auto"
                />
              </span>
            </a>
            <button
              className="navbar-close button is-text p-0 mb-2"
              type="button"
              aria-label="Close"
              onClick={toggleMenu}
            >
              <svg
                style={{ width: '18px', height: '18px' }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="menu-list is-size-7">
            <li className="mb-2">
              <Link className="has-text-white" to="/">
                About
              </Link>
            </li>
            <li className="mb-2">
              <Link className="has-text-white" to="/post-job">
                Post job
              </Link>
            </li>
            <li className="mb-2">
              <Link className="has-text-white" to="/jobs-all">
                Jobs
              </Link>
            </li>
            <li className="mb-2">
              <Link className="has-text-white" to="/get-work-done">
                Find-workers
              </Link>
            </li>
          </ul>
          <div className="mt-auto">
            {isAuthenticated ? (
              <div>
                <Link className="button is-dark is-outlined is-fullwidth mb-2" to="/profile">
                  Profile
                </Link>
                <button className="button is-primary is-fullwidth" onClick={logout}>
                  Logout
                </button>
              </div>
            ) : (
              <div className="py-6">
                <Link className="button is-dark is-outlined is-fullwidth mb-2" to="/login">
                  Log in
                </Link>
                <Link className="button is-primary is-fullwidth" to="/sign-up">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Navbar;
