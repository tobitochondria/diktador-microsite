import { diktadorAbout } from '../../data/diktadorData';
import './About.css';

const CAP_LOGO = '/assets/images/logos/cap-logo.svg';
const PG_LOGO = '/assets/images/logos/pg-logo.svg';
const CARD_STACK = '/assets/images/card-stack.png';
const ROUNDEL = '/assets/images/logos/diktador-roundel.svg';

export default function About() {
  return (
    <section id="dk-about" className="dk-about-section">
      <div className="dk-about-roundel" aria-hidden="true">
        <img src={ROUNDEL} alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="dk-about-text reveal">
              <h2 className="dk-section-title">{diktadorAbout.title}</h2>
              <div className="dk-title-underline"></div>
              {diktadorAbout.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="dk-collab">
                <span className="dk-collab-label">A collaboration between</span>
                <div className="dk-collab-logos">
                  <a href="https://www.facebook.com/artistangbayan/" target="_blank" rel="noopener noreferrer" className="dk-collab-logo-link">
                    <img src={CAP_LOGO} alt="Concerned Artists of the Philippines" className="dk-collab-logo" />
                  </a>
                  <span className="dk-collab-x">&times;</span>
                  <a href="https://www.projectgunita.com" target="_blank" rel="noopener noreferrer" className="dk-collab-logo-link">
                    <img src={PG_LOGO} alt="Project Gunita" className="dk-collab-logo dk-collab-logo-pg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="dk-about-image reveal">
              <img src={CARD_STACK} alt="Diktador! card game box and cards" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
