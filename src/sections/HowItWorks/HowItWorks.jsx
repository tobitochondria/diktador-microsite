import { diktadorHowToPlay } from '../../data/diktadorData';
import './HowItWorks.css';

export default function HowItWorks() {
  return (
    <section id="dk-howitworks" className="dk-howitworks-section">
      <div className="container">
        <div className="dk-howitworks-header reveal">
          <h2 className="dk-section-title">How it Works</h2>
          <div className="dk-title-underline dk-title-underline-center"></div>
        </div>

        <div className="dk-howitworks-content reveal">
          <p className="dk-howitworks-text">
            {diktadorHowToPlay.text}{' '}
            <em>{diktadorHowToPlay.facilitator}</em>.
          </p>
        </div>

        <div className="dk-howitworks-gallery reveal-stagger">
          {diktadorHowToPlay.images.map((src, i) => (
            <div className="dk-howitworks-photo" key={i}>
              <img src={src} alt={`How Diktador! works — photo ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
