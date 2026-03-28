import { Link } from 'react-scroll';
import { diktadorHero } from '../../data/diktadorData';
import './Hero.css';

const LOGOTYPE = '/assets/images/logos/diktador-logotype.svg';
const ROUNDEL = '/assets/images/logos/diktador-roundel.svg';
const LOGO = '/assets/images/logos/diktador-logo.svg';
const PG_LOGO = '/assets/images/logos/pg-logo.svg';
const CAP_LOGO = '/assets/images/logos/cap-logo.svg';

export default function Hero() {
  return (
    <section id="dk-hero" className="dk-hero-section">
      <div className="dk-hero-bg">
        <img src={LOGO} alt="" aria-hidden="true" />
      </div>
      <div className="dk-hero-overlay"></div>

      <div className="dk-hero-roundel" aria-hidden="true">
        <img src={ROUNDEL} alt="" />
      </div>

      <div className="dk-hero-content">
        <img src={LOGOTYPE} alt="Diktador!" className="dk-hero-logo" />
        <p className="dk-hero-tagline">{diktadorHero.tagline}</p>
        <div className="dk-hero-collab-wrap">
          <div className="dk-hero-collab">
            <a href="https://www.facebook.com/artistangbayan/" target="_blank" rel="noopener noreferrer" className="dk-hero-collab-link">
              <img src={CAP_LOGO} alt="Concerned Artists of the Philippines" className="dk-hero-collab-logo" />
            </a>
            <span className="dk-hero-collab-x">&times;</span>
            <a href="https://www.projectgunita.com" target="_blank" rel="noopener noreferrer" className="dk-hero-collab-link">
              <img src={PG_LOGO} alt="Project Gunita" className="dk-hero-collab-logo" />
            </a>
          </div>
        </div>
        <div className="dk-hero-cta">
          <Link
            to="dk-about"
            smooth={true}
            offset={-72}
            duration={600}
            className="dk-btn-primary"
            role="button"
          >
            Learn More
          </Link>
          <Link
            to="dk-event"
            smooth={true}
            offset={-72}
            duration={600}
            className="dk-btn-outline"
            role="button"
          >
            Pre-Order
          </Link>
        </div>
      </div>

      <Link
        to="dk-about"
        smooth={true}
        offset={-72}
        duration={600}
        className="dk-hero-scroll"
        role="button"
        aria-label="Scroll to About section"
      >
        <i className="bi bi-chevron-double-down"></i>
      </Link>
    </section>
  );
}
