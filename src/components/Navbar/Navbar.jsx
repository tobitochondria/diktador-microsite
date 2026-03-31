import { useRef, useCallback } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { diktadorNav } from '../../data/diktadorData';
import useActiveSection from '../../hooks/useActiveSection';
import './Navbar.css';

const LOGOTYPE = '/assets/images/logos/diktador-logotype.svg';

// Section IDs for scroll-spy (exclude page-type nav items)
const SECTION_IDS = diktadorNav
  .filter((link) => !link.isPage)
  .map((link) => link.to);

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const activeSection = useActiveSection(isHome ? SECTION_IDS : [], 80);
  const collapseRef = useRef(null);

  // Close the Bootstrap mobile menu after a link is tapped
  const closeMobileMenu = useCallback(() => {
    const collapse = collapseRef.current;
    if (collapse && collapse.classList.contains('show')) {
      const bsCollapse = window.bootstrap?.Collapse?.getInstance(collapse);
      if (bsCollapse) bsCollapse.hide();
    }
  }, []);

  const handleScrollLink = (to) => {
    closeMobileMenu();
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(to);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg dk-navbar fixed-top" aria-label="Main navigation">
      <div className="container">
        {isHome ? (
          <ScrollLink
            to="dk-hero"
            smooth={true}
            duration={600}
            className="navbar-brand"
            role="button"
            aria-label="Go to top"
            onClick={closeMobileMenu}
          >
            <img src={LOGOTYPE} alt="Diktador! Card Game — Home" />
          </ScrollLink>
        ) : (
          <RouterLink to="/" className="navbar-brand" aria-label="Go to home">
            <img src={LOGOTYPE} alt="Diktador! Card Game — Home" />
          </RouterLink>
        )}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dkNavbar"
          aria-controls="dkNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="bi bi-list"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="dkNavbar" ref={collapseRef}>
          <ul className="navbar-nav ms-auto align-items-center gap-1">
            {diktadorNav.map((link) =>
              link.isPage ? (
                <li className="nav-item" key={link.to}>
                  <RouterLink
                    to={link.to}
                    className={`nav-link${location.pathname === link.to ? ' active' : ''}`}
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </RouterLink>
                </li>
              ) : isHome ? (
                <li className="nav-item" key={link.to}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    offset={-72}
                    duration={600}
                    className={`nav-link${activeSection === link.to ? ' active' : ''}`}
                    role="button"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ) : (
                <li className="nav-item" key={link.to}>
                  <RouterLink
                    to="/"
                    className="nav-link"
                    onClick={() => handleScrollLink(link.to)}
                  >
                    {link.label}
                  </RouterLink>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
