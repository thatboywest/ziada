
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
            <a className="navbar-item" href="#">
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
              className="navbar-menu-open navbar-burger"
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
                color='white'
                animationDuration={0.5}
              />
            </button>
          </div>
          <div className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`}>
            <div className="navbar-start">
              <ul className="navbar-item pl-0">
                <li><Link className=" has-text-light" to="/">About</Link></li>
                <li><Link className=" has-text-light" to="/post-job">Post job</Link></li>
                <li className="has-text-light"><Link className='has-text-light' to="/jobs-all">Jobs</Link></li>
                <li><Link className=" has-text-light" to="/get-work-done">Find-workers</Link></li>
              </ul>
            </div>
            <div className="navbar-end">
              {isAuthenticated ? (
                <div className="navbar-item">
                  <div className="dropdown is-hoverable">
                    <div className="dropdown-trigger">
                      <button 
                        className="button " 
                        aria-haspopup="true" 
                        aria-controls="dropdown-menu" 
                        onClick={toggleDropdown}
                      >
                        <span className="icon">
                          <img
                            src={user?.profilePhoto} 
                            alt="Profile"
                            style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '50%' }} 
                          />
                        </span>
                      </button>
                    </div>
                    {isDropdownOpen && (
                      <div id="dropdown-menu" className="dropdown-menu is-active" style={{ position: 'absolute', right: 0, top: '100%', marginTop: '0.5rem' }}>
                        <div className="dropdown-content">
                          <Link to="/profile" className="dropdown-item">
                            Profile
                          </Link>
                          <button className="dropdown-item" onClick={logout}>
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="navbar-item is-hidden-mobile">
                  <div className="buttons">
                    <Link className="button is-white is-outlined" to="/login">Log In</Link>
                    <Link className="button is-primary" to="/sign-up">Sign Up</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className={`is-hidden navbar-side is-fixed is-top-0 is-bottom-0 is-left-0 has-mw-md ${isMenuOpen ? 'is-active' : ''}`} style={{ width: '75%', zIndex: 9999 }}>
        <div className="navbar-backdrop is-fixed is-inset-0 has-background-dark" style={{ opacity: '75%', zIndex: 50 }}></div>
        <aside className="menu is-relative is-flex is-flex-direction-column py-6 px-6 " style={{ width: '100%', height: '100%', zIndex: 50, overflowY: 'auto' }}>
          <div className="is-flex is-align-items-center mb-10">
            <a className="mr-auto mb-0" href="#">
              <span className="navbar-item px-0 title is-5 has-text-dark">
                <img
                  src="https://via.placeholder.com/150" 
                  alt="Logo"
                  style={{ height: '28px' }}
                  width="auto"
                />
              </span>
            </a>
            <button className="navbar-close button is-text p-0 mb-2" type="button" aria-label="Close" onClick={toggleMenu}>
              <svg style={{ width: '18px', height: '18px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <ul className="menu-list is-size-7">
            <li className="mb-2"><Link to="/">About</Link></li>
            <li className="mb-2"><Link to="/post-job">Post job</Link></li>
            <li className="mb-2"><Link to="/jobs-all">Jobs</Link></li>
            <li className="mb-2"><Link to="/get-work-done">Find-workers</Link></li>
          </ul>
          <div className="mt-auto">
            {isAuthenticated ? (
              <div>
                <Link className="button is-dark is-outlined is-fullwidth mb-2" to="/profile">Profile</Link>
                <button className="button is-primary is-fullwidth" onClick={logout}>Logout</button>
              </div>
            ) : (
              <div className="py-6">
                <Link className="button is-dark is-outlined is-fullwidth mb-2" to="/login">Log in</Link>
                <Link className="button is-primary is-fullwidth" to="/sign-up">Sign Up</Link>
              </div>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Navbar;
