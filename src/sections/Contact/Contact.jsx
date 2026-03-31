import { diktadorContact } from '../../data/diktadorData';
import './Contact.css';

export default function Contact() {
  return (
    <section id="dk-contact" className="dk-contact-section">
      <div className="container">
        <div className="dk-contact-wrapper reveal">
          <h2 className="dk-section-title dk-contact-title">Contact Us</h2>
          <div className="dk-title-underline dk-title-underline-center"></div>
          <p className="dk-contact-text">{diktadorContact.text}</p>
          <div className="dk-contact-buttons">
            <a
              href={diktadorContact.facebook}
              className="dk-contact-btn dk-contact-btn-fb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook me-2"></i>
              Facebook
            </a>
            <a
              href={diktadorContact.instagram}
              className="dk-contact-btn dk-contact-btn-ig"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram me-2"></i>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
