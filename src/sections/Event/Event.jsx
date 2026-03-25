import { diktadorEvent } from '../../data/diktadorData';
import './Event.css';

export default function Event() {
  return (
    <section id="dk-event" className="dk-event-section">
      <div className="container">
        <div className="dk-event-wrapper reveal">
          <div className="dk-event-badge">
            <i className="bi bi-calendar-check-fill"></i>
            March 30, 2026
          </div>

          <h2 className="dk-section-title dk-event-title">{diktadorEvent.title}</h2>
          <div className="dk-title-underline dk-title-underline-center"></div>
          <p className="dk-event-desc">{diktadorEvent.description}</p>

          <div className="dk-event-details">
            {diktadorEvent.details.map((detail) => (
              <div className="dk-event-detail" key={detail.label}>
                <i className={`bi ${detail.icon}`}></i>
                <div>
                  <span className="dk-event-detail-label">{detail.label}</span>
                  <span className="dk-event-detail-value">{detail.value}</span>
                </div>
              </div>
            ))}
          </div>

          <a
            href={diktadorEvent.signupUrl}
            className="dk-btn-primary dk-event-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-pencil-square me-2"></i>
            {diktadorEvent.signupLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
