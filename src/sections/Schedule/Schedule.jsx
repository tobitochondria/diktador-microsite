import { diktadorSchedule } from '../../data/diktadorData';
import './Schedule.css';

export default function Schedule() {
  return (
    <section id="dk-schedule" className="dk-schedule-section">
      <div className="container">
        <div className="dk-schedule-wrapper reveal">
          <h2 className="dk-section-title dk-schedule-title">
            {diktadorSchedule.title}
          </h2>
          <div className="dk-title-underline dk-title-underline-center"></div>
          <p className="dk-schedule-desc">{diktadorSchedule.description}</p>
          <a
            href={diktadorSchedule.formUrl}
            className="dk-btn-primary dk-schedule-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-calendar-event me-2"></i>
            {diktadorSchedule.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
