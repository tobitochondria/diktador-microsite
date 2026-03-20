import { useState, useCallback } from 'react';
import { diktadorRoles } from '../../data/diktadorData';
import './Cards.css';

const BACK_CARD = '/assets/images/diktador/back-card.png';
const CARD_ANGLES = [-18, -12, -6, 0, 6, 12, 18];
const CARD_OFFSETS = [20, 10, 3, 0, 3, 10, 20];
const CARD_Z = [1, 2, 3, 4, 3, 2, 1];

export default function Cards() {
  const [activeCard, setActiveCard] = useState(null);
  const activeRole = diktadorRoles.find((r) => r.id === activeCard);

  const handleHandMove = useCallback((e) => {
    const els = document.elementsFromPoint(e.clientX, e.clientY);
    const cardEl = els.find((el) => el.dataset.cardId);
    const id = cardEl ? Number(cardEl.dataset.cardId) : null;
    setActiveCard((prev) => (prev === id ? prev : id));
  }, []);

  const handleHandLeave = useCallback(() => {
    setActiveCard(null);
  }, []);

  return (
    <section id="dk-cards" className="dk-cards-section">
      <div className="container">
        <div className="dk-cards-header reveal">
          <h2 className="dk-section-title">Choose Your Role</h2>
          <div className="dk-title-underline dk-title-underline-center"></div>
          <p className="dk-cards-subtitle">
            Seven archetypes. Seven ways to face a dictatorship. Which side of history will you be on?
          </p>
        </div>

        <div className="dk-cards-hand-wrapper">
          <div className="dk-back-accent dk-back-left" aria-hidden="true">
            <img src={BACK_CARD} alt="" />
          </div>
          <div className="dk-back-accent dk-back-right" aria-hidden="true">
            <img src={BACK_CARD} alt="" />
          </div>

          <div
            className="dk-cards-hand reveal"
            onMouseMove={handleHandMove}
            onMouseLeave={handleHandLeave}
          >
            {diktadorRoles.map((role, index) => (
              <div
                className={`dk-playing-card${activeCard === role.id ? ' is-lifted' : ''}`}
                key={role.id}
                data-card-id={role.id}
                style={{
                  '--card-angle': `${CARD_ANGLES[index]}deg`,
                  '--card-offset': `${CARD_OFFSETS[index]}px`,
                  '--card-z': CARD_Z[index],
                }}
                onClick={() => setActiveCard(activeCard === role.id ? null : role.id)}
              >
                <img
                  src={role.image}
                  alt={role.name}
                  className="dk-playing-card-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="dk-card-info">
          {activeRole ? (
            <div className="dk-card-info-content" key={activeRole.id}>
              <h3 className="dk-card-info-name">{activeRole.name}</h3>
              <p className="dk-card-info-desc">{activeRole.description}</p>
            </div>
          ) : (
            <p className="dk-card-info-hint">
              <i className="bi bi-hand-index-thumb"></i> Hover over a card to reveal its role
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
