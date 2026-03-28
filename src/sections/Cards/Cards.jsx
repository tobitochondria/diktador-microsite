import { useState, useCallback, useRef, useLayoutEffect } from 'react';
import { diktadorRoles } from '../../data/diktadorData';
import './Cards.css';

const BACK_CARD = '/assets/images/cards/back-card.png';
const CARD_ANGLES = [-18, -12, -6, 0, 6, 12, 18];
const CARD_OFFSETS = [20, 10, 3, 0, 3, 10, 20];
const CARD_Z = [1, 2, 3, 4, 3, 2, 1];

const LOUPE_ZOOM = 2.5;
const LOUPE_R = 80; // radius in px

export default function Cards() {
  const [heroId, setHeroId] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [loupe, setLoupe] = useState(null);
  const cardRefs = useRef({});
  const snapshotRef = useRef({});
  const heroCardRef = useRef(null);
  const lastHeroRoleRef = useRef(null); // persists role during close animation

  const heroRole = diktadorRoles.find((r) => r.id === heroId);
  if (heroRole) lastHeroRoleRef.current = heroRole;
  const displayRole = heroRole ?? lastHeroRoleRef.current;
  const isHeroActive = heroId !== null;

  /* ── FLIP: snapshot card positions before state change ── */
  const snapshot = useCallback(() => {
    const rects = {};
    for (const [id, el] of Object.entries(cardRefs.current)) {
      if (el) rects[id] = el.getBoundingClientRect();
    }
    snapshotRef.current = rects;
  }, []);

  /* ── FLIP: animate cards from old to new positions after render ── */
  useLayoutEffect(() => {
    const prev = snapshotRef.current;
    if (!Object.keys(prev).length) return;
    snapshotRef.current = {};

    for (const [id, el] of Object.entries(cardRefs.current)) {
      if (!el || !prev[id]) continue;
      const oldRect = prev[id];
      const newRect = el.getBoundingClientRect();

      const dx = oldRect.left - newRect.left;
      const dy = oldRect.top - newRect.top;
      const sx = oldRect.width / newRect.width;
      const sy = oldRect.height / newRect.height;

      if (Math.abs(dx) < 1 && Math.abs(dy) < 1 && Math.abs(sx - 1) < 0.01) continue;

      // INVERT — place element at its old visual position
      el.style.transform = `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
      el.style.transition = 'none';

      // Force synchronous layout so the browser commits the invert
      el.getBoundingClientRect();

      // PLAY — remove inline transform, let CSS transition animate to new position
      el.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
      el.style.transform = '';

      // Clean up inline transition after animation so CSS class transitions resume
      el.addEventListener(
        'transitionend',
        function handler(e) {
          if (e.propertyName === 'transform') {
            el.style.transition = '';
            el.removeEventListener('transitionend', handler);
          }
        }
      );
    }
  }, [heroId]);

  /* ── Handlers ── */
  const handleCardClick = useCallback(
    (id) => {
      snapshot();
      setHeroId((prev) => (prev === id ? null : id));
      setHoveredCard(null);
    },
    [snapshot]
  );

  const handleHandMove = useCallback(
    (e) => {
      if (isHeroActive) return;
      const els = document.elementsFromPoint(e.clientX, e.clientY);
      const cardEl = els.find((el) => el.dataset.cardId);
      const id = cardEl ? Number(cardEl.dataset.cardId) : null;
      setHoveredCard((prev) => (prev === id ? prev : id));
    },
    [isHeroActive]
  );

  const handleHandLeave = useCallback(() => {
    setHoveredCard(null);
  }, []);

  const handleHeroMouseMove = useCallback((e) => {
    const rect = heroCardRef.current.getBoundingClientRect();
    setLoupe({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      w: rect.width,
      h: rect.height,
    });
  }, []);

  const handleHeroMouseLeave = useCallback(() => setLoupe(null), []);

  return (
    <section
      id="dk-cards"
      className={`dk-cards-section${isHeroActive ? ' is-hero-active' : ''}`}
    >
      <div className="container">
        <div className="dk-cards-header reveal">
          <h2 className="dk-section-title">Choose Your Role</h2>
          <div className="dk-title-underline dk-title-underline-center"></div>
          <p className="dk-cards-subtitle">
            Seven archetypes. Seven ways to face a dictatorship. Which side of
            history will you be on?
          </p>
        </div>

        {/* ── Hero Stage ── */}
        <div className={`dk-hero-stage-wrap${isHeroActive ? ' is-open' : ''}`}>
          <div className="dk-hero-stage-inner">
            {displayRole && (
              <div className="dk-hero-stage">
                <div
                  className="dk-hero-card-wrap"
                  ref={heroCardRef}
                  onMouseMove={handleHeroMouseMove}
                  onMouseLeave={handleHeroMouseLeave}
                >
                  <div className="dk-hero-card-display" key={displayRole.id}>
                    <img
                      src={displayRole.image}
                      alt={`${displayRole.name} role card — ${displayRole.description}`}
                      className="dk-hero-card-img"
                    />
                  </div>
                  {loupe && (
                    <div
                      className="dk-loupe"
                      style={{
                        left: loupe.x,
                        top: loupe.y,
                        backgroundImage: `url(${displayRole.image})`,
                        backgroundSize: `${loupe.w * LOUPE_ZOOM}px auto`,
                        backgroundPosition: `${LOUPE_R - loupe.x * LOUPE_ZOOM}px ${LOUPE_R - loupe.y * LOUPE_ZOOM}px`,
                      }}
                    />
                  )}
                </div>
                <div className="dk-hero-card-details" key={`info-${displayRole.id}`}>
                  <h3 className="dk-hero-card-name">{displayRole.name}</h3>
                  <p className="dk-hero-card-desc">{displayRole.description}</p>
                  <button
                    className="dk-hero-close-btn"
                    onClick={() => {
                      snapshot();
                      setHeroId(null);
                    }}
                  >
                    <i className="bi bi-x-lg"></i> Back to all roles
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Card Hand ── */}
        <div className="dk-cards-hand-wrapper">
          {!isHeroActive && (
            <>
              <div className="dk-back-accent dk-back-left" aria-hidden="true">
                <img src={BACK_CARD} alt="" />
              </div>
              <div className="dk-back-accent dk-back-right" aria-hidden="true">
                <img src={BACK_CARD} alt="" />
              </div>
            </>
          )}

          <div
            className="dk-cards-hand reveal"
            data-hand-mode={isHeroActive ? 'true' : undefined}
            onMouseMove={!isHeroActive ? handleHandMove : undefined}
            onMouseLeave={!isHeroActive ? handleHandLeave : undefined}
          >
            {diktadorRoles.map((role, index) => (
              <div
                className={`dk-playing-card${
                  hoveredCard === role.id && !isHeroActive ? ' is-lifted' : ''
                }${heroId === role.id ? ' is-active-hero' : ''}`}
                key={role.id}
                data-card-id={role.id}
                ref={(el) => {
                  cardRefs.current[role.id] = el;
                }}
                style={{
                  '--card-angle': `${CARD_ANGLES[index]}deg`,
                  '--card-offset': `${CARD_OFFSETS[index]}px`,
                  '--card-z': CARD_Z[index],
                }}
                onClick={() => handleCardClick(role.id)}
              >
                <img
                  src={role.image}
                  alt={`${role.name} — ${role.description}`}
                  className="dk-playing-card-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {isHeroActive && (
            <p className="dk-hand-hint">
              <i className="bi bi-hand-index-thumb"></i> Tap another card to
              swap roles, or close to return
            </p>
          )}
        </div>

        {/* ── Info (fan mode only) ── */}
        {!isHeroActive && (
          <div className="dk-card-info">
            {hoveredCard ? (
              <div className="dk-card-info-content" key={hoveredCard}>
                <h3 className="dk-card-info-name">
                  {diktadorRoles.find((r) => r.id === hoveredCard)?.name}
                </h3>
                <p className="dk-card-info-desc">
                  {diktadorRoles.find((r) => r.id === hoveredCard)?.description}
                </p>
              </div>
            ) : (
              <>
                <p className="dk-card-info-hint dk-hint-desktop">
                  <i className="bi bi-hand-index-thumb"></i> Hover over a card to reveal its role
                </p>
                <p className="dk-card-info-hint dk-hint-mobile">
                  <i className="bi bi-arrow-left-right"></i> Scroll and tap a card to reveal its role
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
