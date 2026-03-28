import { diktadorPreorder } from '../../data/diktadorData';
import './Event.css';

const ROUNDEL = '/assets/images/logos/diktador-roundel.svg';

export default function Event() {
  return (
    <section id="dk-event" className="dk-preorder-section">
      <div className="dk-preorder-roundel" aria-hidden="true">
        <img src={ROUNDEL} alt="" />
      </div>
      <div className="container">
        <div className="dk-preorder-wrapper reveal">
          <div className="dk-preorder-badge">
            <i className="bi bi-stars"></i>
            First Edition
          </div>

          <h2 className="dk-section-title dk-preorder-title">Pre-Order Diktador!</h2>
          <div className="dk-title-underline dk-title-underline-center"></div>
          <p className="dk-preorder-desc">{diktadorPreorder.description}</p>

          <a
            href={diktadorPreorder.formUrl}
            className="dk-btn-primary dk-preorder-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-bag-fill me-2"></i>
            {diktadorPreorder.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
