import React from 'react';
import styles from './footer.module.css';

export default function Footer() {
  const handleRegisterClick = () => {
    // Add your registration logic here
    console.log('Register button clicked!');
    // You can redirect to registration page or open a modal
    // window.location.href = '/register';
  };

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
          <button 
            className={styles['register-btn']}
            onClick={handleRegisterClick}
            aria-label="Register Now"
          >
            <img 
              src="/images/Layer 826.png" 
              alt="Register Now" 
              className={styles['register-image']}
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
