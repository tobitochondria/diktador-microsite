import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { diktadorFaq } from '../../data/diktadorData';
import './FAQ.css';

export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="dk-faq-page">
      <div className="container">
        <Link to="/" className="dk-faq-back">
          <i className="bi bi-arrow-left me-2"></i>
          Back to Home
        </Link>

        <div className="dk-faq-header">
          <h1 className="dk-section-title dk-faq-title">
            Frequently Asked Questions
          </h1>
          <div className="dk-title-underline dk-title-underline-center"></div>
        </div>

        <div className="dk-faq-list">
          {diktadorFaq.map((item, i) => (
            <div className="dk-faq-item" key={i}>
              <h3 className="dk-faq-question">{item.question}</h3>
              {item.answer.split('\n\n').map((paragraph, j) => (
                <p className="dk-faq-answer" key={j}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="dk-faq-footer">
          <Link to="/" className="dk-btn-primary">
            <i className="bi bi-arrow-left me-2"></i>
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
