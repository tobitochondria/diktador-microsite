import { Link } from 'react-scroll';
import { diktadorHero } from '../../data/diktadorData';
import './Hero.css';

const LOGOTYPE = '/assets/images/diktador/diktador-logotype.png';
const ROUNDEL = '/assets/images/diktador/diktador-rounded-logo.png';

export default function Hero() {
  return (
    <section id="dk-hero" className="dk-hero-section">
      <div className="dk-hero-bg">
        <img src="/assets/images/diktador/back-card.png" alt="" aria-hidden="true" />
      </div>
      <div className="dk-hero-overlay"></div>

      <div className="dk-hero-roundel" aria-hidden="true">
        <img src={ROUNDEL} alt="" />
      </div>

      <div className="dk-hero-content">
        <img src={LOGOTYPE} alt="Diktador!" className="dk-hero-logo" />
        <p className="dk-hero-tagline">{diktadorHero.tagline}</p>
        <p className="dk-hero-subtitle">{diktadorHero.subtitle}</p>
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
            Join the Launch
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
