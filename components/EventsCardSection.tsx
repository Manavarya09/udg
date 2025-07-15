import React from 'react';
import styles from './EventsCardSection.module.css';

const events = [
  {
    title: 'WORDS OF WISDOM',
    subtitle: 'HH Guru Prasad Swami Maharaj',
    img: '/images/testimonial-01.jpg',
  },
  {
    title: 'THEATRICAL SHOW',
    subtitle: '',
    img: '/images/theatricalshow3527-nnsr-300w.png',
  },
  {
    title: 'MUSICAL CONCERT',
    subtitle: '',
    img: '/images/musicalconcert3527-0cc-300w.png',
  },
  {
    title: 'CULTURAL PERFORMANCE',
    subtitle: '',
    img: '/images/culturalperformance3527-977n-300w.png',
  },
];

const cardTransforms = [
  'skewY(-10deg)',
  'skewY(-5deg)',
  'skewY(5deg)',
  'skewY(10deg)',
];

const EventsCardSection: React.FC = () => (
  <div className={styles.container}>
    <button className={styles.arrow} style={{ left: 60 }} aria-label="Previous">
      <span className={styles.arrowIcon}>{'<'}</span>
    </button>
    <div className={styles.cards}>
      {events.map((event, idx) => (
        <div
          key={event.title}
          className={styles.card}
          style={{ transform: cardTransforms[idx] }}
        >
          <img
            src={event.img}
            alt={event.title}
            className={styles.cardImage}
          />
          <div className={styles.cardOverlay} />
          <div className={styles.cardText}>
            <div className={styles.accentLine} />
            <div className={styles.cardTitle}>{event.title}</div>
            {event.subtitle && (
              <div className={styles.cardSubtitle}>{event.subtitle}</div>
            )}
          </div>
        </div>
      ))}
    </div>
    <button className={styles.arrow} style={{ right: 60 }} aria-label="Next">
      <span className={styles.arrowIcon}>{'>'}</span>
    </button>
  </div>
);

export default EventsCardSection; 