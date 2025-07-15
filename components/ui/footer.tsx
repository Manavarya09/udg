import React from 'react';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles['footer-root']}>
      <div className={styles['footer-content']}>
        <div className={styles['footer-grid']}>
          <div className={styles['footer-block']}>
            <div className={styles['footer-label']}>DATE</div>
            <div className={styles['footer-value']}>12th OCTOBER 2025</div>
          </div>
          <div className={styles['footer-block']}>
            <div className={styles['footer-label']}>VENUE</div>
            <div className={styles['footer-value']}>INDIRA GANDHI INOOR STADIUM</div>
          </div>
          <div className={styles['footer-block']}>
            <div className={styles['footer-label']}>THEME</div>
            <div className={styles['footer-value']}>THE FESTIVAL OF CULTURE & WELLNESS</div>
          </div>
          <div className={styles['footer-block']}>
            <div className={styles['footer-label']}>DRESS CODE</div>
            <div className={styles['footer-value']}>BOYS - DHOTI KURTA</div>
          </div>
        </div>
        <div className={styles['footer-register-container']}>
          <button className={styles['register-btn']}>
            <span>REGISTER NOW!</span>
            <span className={styles['register-hand']}>
              {/* Inline SVG hand/click icon */}
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="#fff"/>
                <path d="M32.5 28.5L25.5 21.5V13.5C25.5 12.6716 24.8284 12 24 12C23.1716 12 22.5 12.6716 22.5 13.5V28.5L20.5 26.5C19.6716 25.6716 18.3284 25.6716 17.5 26.5C16.6716 27.3284 16.6716 28.6716 17.5 29.5L24 36L30.5 29.5C31.3284 28.6716 31.3284 27.3284 30.5 26.5C29.6716 25.6716 28.3284 25.6716 27.5 26.5L25.5 28.5" stroke="#FFD600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
