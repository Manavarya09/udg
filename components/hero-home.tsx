"use client";

import VideoThumb from "@/public/images/hero-image-01.png";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import UdgaarThemeImg from "@/public/images/udgaar-theme-2025.png";
import Footer from "./ui/footer";
import cardStyles from './Card.module.css';

function getTimeLeft(target: number) {
  const now = typeof window !== 'undefined' ? new Date().getTime() : 0;
  let diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);
  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);
  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * (1000 * 60);
  const seconds = Math.floor(diff / 1000);
  return { days, hours, minutes, seconds };
}

function Countdown() {
  const [target, setTarget] = useState(0);
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setTarget(new Date("2025-10-15T00:00:00").getTime());
  }, []);

  useEffect(() => {
    if (!target) return;
    setTime(getTimeLeft(target));
    const interval = setInterval(() => {
      setTime(getTimeLeft(target));
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-2 sm:gap-10 mb-8 sm:mb-16 text-xs sm:text-base">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 sm:w-36 sm:h-36 flex items-center justify-center rounded-full bg-white text-pink-700 text-lg sm:text-5xl font-extrabold shadow-lg border-2 sm:border-8 border-pink-300">
          {time.days}
        </div>
        <span className="mt-1 sm:mt-4 font-bold text-xs sm:text-xl tracking-wide" style={{ color: '#FFD700' }}>DAYS</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 sm:w-36 sm:h-36 flex items-center justify-center rounded-full bg-white text-pink-700 text-lg sm:text-5xl font-extrabold shadow-lg border-2 sm:border-8 border-pink-300">
          {String(time.hours).padStart(2, '0')}
        </div>
        <span className="mt-1 sm:mt-4 font-bold text-xs sm:text-xl tracking-wide" style={{ color: '#FFD700' }}>HOURS</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 sm:w-36 sm:h-36 flex items-center justify-center rounded-full bg-white text-pink-700 text-lg sm:text-5xl font-extrabold shadow-lg border-2 sm:border-8 border-pink-300">
          {String(time.minutes).padStart(2, '0')}
        </div>
        <span className="mt-1 sm:mt-4 font-bold text-xs sm:text-xl tracking-wide" style={{ color: '#FFD700' }}>MINUTES</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 sm:w-36 sm:h-36 flex items-center justify-center rounded-full bg-white text-pink-700 text-lg sm:text-5xl font-extrabold shadow-lg border-2 sm:border-8 border-pink-300">
          {String(time.seconds).padStart(2, '0')}
        </div>
        <span className="mt-1 sm:mt-4 font-bold text-xs sm:text-xl tracking-wide" style={{ color: '#FFD700' }}>SECONDS</span>
      </div>
    </div>
  );
}

function ParallaxVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [hovered, setHovered] = useState(false);

  // Parallax effect using scroll
  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const offset = rect.top / windowHeight;
        videoRef.current.style.transform = `translateY(${offset * 60}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      videoRef.current.muted = false;
      setMuted(false);
    }
    setPlaying(!playing);
  };

  return (
    <section
      className="relative w-screen h-[40vh] md:h-[80vh] flex items-center justify-center overflow-hidden p-0 m-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover rounded-none"
        src={"/videos/UDGAAR%20Teaser.mp4"}
        autoPlay
        loop
        muted={muted}
        playsInline
        style={{ background: '#000' }}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      {/* Play/Pause Button Overlay */}
      {(hovered || !playing) && (
        <button
          onClick={handlePlayPause}
          className="absolute inset-0 flex items-center justify-center z-10 focus:outline-none transition-opacity duration-300"
          style={{ pointerEvents: 'auto', opacity: (hovered || !playing) ? 1 : 0 }}
          aria-label={playing ? 'Pause video' : 'Play video'}
        >
          <span
            className="flex items-center justify-center rounded-full backdrop-blur-md bg-black/40 shadow-xl transition-transform duration-200 hover:scale-110 border-2 border-white/30"
            style={{ width: 56, height: 56 }}
          >
            {playing ? (
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="5" y="4" width="6" height="20" rx="2" fill="#fff" />
                <rect x="17" y="4" width="6" height="20" rx="2" fill="#fff" />
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <polygon points="7,4 23,14 7,24" fill="#fff" />
              </svg>
            )}
          </span>
        </button>
      )}
    </section>
  );
}

const UdgarBg = () => (
  <section className="relative w-full aspect-video bg-black overflow-hidden p-0 m-0">
    <video
      src="/videos/udgaar website video.mp4"
      className="w-full h-full object-contain bg-black"
      autoPlay
      loop
      muted
      playsInline
      style={{ display: 'block' }}
    />
    <div className="absolute inset-0 bg-transparent bg-opacity-30"></div>
  </section>
);

const AboutBg = () => {
  return <section className="relative min-h-screen overflow-hidden">
    {/* Background Image Layer */}
    <div className="absolute inset-0 z-0">
      <Image
        src={require('./assets/mid-bg.png')}
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-transparent bg-opacity-30" />
    </div>

    {/* Foreground Content Layer */}
    <div className="relative z-10">
      <Countdown />
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mb-0 px-2 md:px-4 py-4 md:py-8" id="theme2025">
        <div className="flex-shrink-0 bg-white rounded-2xl md:rounded-3xl p-2 md:p-4 shadow-2xl" style={{ border: '3px solid #bdb7f7' }}>
          <Image
            src={UdgaarThemeImg}
            alt="Udgaar 2025 Theme"
            className="rounded-xl md:rounded-2xl h-[60vw] w-[60vw] md:h-[40vw] md:w-[40vw]"
            priority={false}
          />
        </div>
        <div className="max-w-xs md:max-w-xl text-center md:text-left">
          <h2 className="text-2xl md:text-5xl font-extrabold mb-4 md:mb-6" style={{ color: '#FFD700', fontFamily: 'cursive' }}>2025 Theme</h2>
          <p className="text-white text-sm md:text-lg font-medium leading-relaxed">
            UDGAAR is formatted to be a blend of edutainment and empowerment, where thousands of youngsters and dignitaries get the opportunity to connect and converge on values integral to a healthy gratifying state.<br /><br />
            UDGAAR 2024 is themed on De-addiction: Making India Addiction Free. This year's theme hopes to inspire our youngsters to realize the glory in a clean, green and progressive India.
          </p>
        </div>
      </div>

      <div className="relative min-h-screen overflow-hidden">
        {/* Other content */}

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5859265a6bc4afc6a87a454618cf108335d2750?width=1698"
          alt="Decorative"
          className="absolute bottom-1 left-0 w-[60vw] md:w-[60vw] z-10"
        />
      </div>

    </div>
  </section>
}

const SpeakersCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const speakers = [
    {
      image:
        "https://res.cloudinary.com/dm1o3cvik/image/upload/v1752581156/pj-jweller/Mask_group_2_f64w79.png",
      title: "HH Guru Prasad Swami Maharaj",
    },
    {
      image:
        "https://res.cloudinary.com/dm1o3cvik/image/upload/v1752581151/pj-jweller/Mask_group_1_m0afj6.png",
      title: "Theatrical Show",
    },
    {
      image:
        "https://res.cloudinary.com/dm1o3cvik/image/upload/v1752581144/pj-jweller/Mask_group_dk9qwm.png",
      title: "Musical Concert",
    },
    {
      image:
        "https://res.cloudinary.com/dm1o3cvik/image/upload/v1752581198/pj-jweller/Mask_group_3_znpkp2.png",
      title: "Cultural Performance",
    },
  ];

  // Detect mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Navigation
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? speakers.length - 1 : prev - 1));
  const nextSlide = () => setCurrentSlide((prev) => (prev === speakers.length - 1 ? 0 : prev + 1));

  // Swipe handlers
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) nextSlide();
      else if (diff < -50) prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="relative py-8 md:py-24">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets/TEMP/1d045ffa9b3bb8df694ebab2799e4bbe6126f5e2?width=2880')",
        }}
      ></div>

      <div className="relative max-w-screen-xl mx-auto px-2 md:px-8 lg:px-16">
        <div className="flex justify-center items-center relative">
          {isMobile ? (
            <div className="relative w-full flex items-center justify-center">
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-2 border-yellow-300 hover:bg-yellow-100 active:scale-95 transition-all duration-150"
                onClick={prevSlide}
                aria-label="Previous"
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14" r="13" stroke="#FFD600" strokeWidth="2" fill="white"/>
                  <path d="M17 8L11 14L17 20" stroke="#FFD600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {/* Only render the current card, centered, NOT inside a flex-1 or stretching container */}
              <div className="mx-auto" style={{ width: 220, height: 420 }}>
                <div className={cardStyles.card + ' group cursor-pointer hover:scale-105 transition-transform duration-300'} style={{ width: 220, height: 420 }}>
                  <div className={cardStyles.cardInner}>
                    <img
                      src={speakers[currentSlide].image}
                      alt={speakers[currentSlide].title}
                      className={cardStyles.cardImage}
                    />
                    <div className={cardStyles.cardOverlay} />
                    <div className={cardStyles.cardText}>
                      <div className={cardStyles.accentLine} />
                      <div className={cardStyles.cardTitle}>{speakers[currentSlide].title}</div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-2 border-yellow-300 hover:bg-yellow-100 active:scale-95 transition-all duration-150"
                onClick={nextSlide}
                aria-label="Next"
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14" r="13" stroke="#FFD600" strokeWidth="2" fill="white"/>
                  <path d="M11 8L17 14L11 20" stroke="#FFD600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl">
              {speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer transform hover:scale-105 transition-transform duration-300"
                  style={{
                    filter: "drop-shadow(-5px -5px 20px rgba(0, 0, 0, 0.25))",
                  }}
                >
                  <img
                    src={speaker.image}
                    alt={speaker.title}
                    className="w-full h-[220px] sm:h-[300px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const ChiefBg = () => (
  <section className="relative min-h-[150vh] md:min-h-[170vh] top-[-110vh] overflow-hidden">
    {/* Background Images */}
    <div className="absolute inset-0 z-[-1]">
      <Image
        src={require('./assets/chief-bg.png')}
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-transparent bg-opacity-30"></div>
    </div>


    <div className="relative min-h-screen overflow-hidden">
      {/* Other content */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d700eabd62ea65899853e0d9b622db4bfe2d7af?width=1264"
        alt="Decorative"
        className="absolute right-0 bottom-0 w-[40vw] md:w-[40vw] z-10"
      />
      <div className="absolute bottom-50 left-[10vw] mb-8 ml-8">
        <div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d576fc1da9ba7814b5347ab39bc7d8c453c7780c?width=1146"
            alt="Chief Guest"
            className="mb-4 w-full max-w-[400px]"
          />
          <h3 className="text-[#4173B0] text-2xl md:text-3xl font-bold font-raleway">
            Prime Minister of India
          </h3>
        </div>
      </div>


    </div>



  </section>
);


// Main Speakers Section
const MainSpeakersSection = () => (
  <div className="relative w-screen h-[40vh] sm:h-[60vh] md:h-[80vh] flex bg-[#683FB8] py-8 sm:py-16 md:py-24 b-[50vh]">
    <div className="max-w-screen-xl mx-auto px-2 sm:px-4 md:px-8 lg:px-16">
      {/* SPEAKERS Title */}
      <h2
        className="text-white font-raleway text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-medium text-center mb-4 sm:mb-10"
        style={{ letterSpacing: "0.1em" }}
      >
        SPEAKERS
      </h2>

      {/* Team Player Image */}
      <div className="relative mb-8 sm:mb-16">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3db240d2df9a97fa9213f9dd12f232110a1c0b3f?width=2880"
          alt="Team Players"
          className="w-full rounded-lg shadow-xl max-h-[180px] sm:max-h-[320px] md:max-h-none"
        />

        {/* Speaker Info Positioned at Bottom Center */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 text-center">
          <h3 className="text-[#FFF4AD] font-bold text-base sm:text-2xl md:text-3xl lg:text-xl mb-1 sm:mb-2">
            HG SUNDAR GOPAL PRABHU
          </h3>
          <p className="text-white font-bold text-xs sm:text-lg md:text-xl lg:text-xl">
            CHAIRMAN IIYC
          </p>
        </div>
      </div>

    </div>
  </div>
);



export default function HeroHome() {
  return (
    <>
      <UdgarBg />
      {/* Move the countdown and pink section directly below the video */}
      <AboutBg />
      <div className="relative">
        <ChiefBg />
      </div>
      <div className="relative">
        <SpeakersCarousel />
        <div className="relative w-screen">
          <ParallaxVideo />
        </div>
        <MainSpeakersSection />
      </div>
      <Footer />

      {/* Floating Video Button - opens YouTube in new tab */}
      <a
        href="https://www.youtube.com/watch?v=MjUwrWYjTl0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-[100] bg-white rounded-full shadow-lg p-4 flex items-center justify-center hover:bg-gray-100 transition-colors border border-gray-300"
        aria-label="Watch YouTube Video"
        style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }}
      >
        {/* Video Icon SVG */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="#FF0000"/>
          <polygon points="13,10 24,16 13,22" fill="#fff" />
        </svg>
      </a>

    </>
  );
}


export const Out = () => {
  return <section>

    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Hero content */}

      <div className="py-12 md:py-20">
        {/* Section header */}


        {/* Our Inspiration Section */}
        {/* Replace the current Our Inspiration and Chief Guest section with a diagonal split section */}
        {/* <div className="relative w-screen left-1/2 right-1/2 -translate-x-1/2" style={{ minHeight: '600px' }}> */}
        {/* Top: Our Inspiration */}
        {/* <div className="relative w-full" style={{
                  minHeight: '340px',
                  clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
                  zIndex: 2
                }}>
                  <div className="flex flex-row items-end justify-between max-w-7xl mx-auto px-6 pt-12 pb-0" style={{ position: 'relative', zIndex: 2 }}>
                    <img src="/images/wordsofwisdom.png" alt="Our Inspiration: HDG A.C. Bhaktivedanta Swami Prabhupada" className="object-contain w-[260px] h-[320px] md:w-[340px] md:h-[420px] rounded-none shadow-2xl" style={{ marginBottom: 0 }} />
                    <div className="flex-1 flex flex-col justify-center items-end pl-8">
                      <span className="block mb-2 text-3xl md:text-4xl font-cursive text-white" style={{ fontFamily: 'Pacifico, cursive' }}>Our Inspiration</span>
                      <span className="block mb-2 text-2xl md:text-3xl font-extrabold text-[#d35400] md:text-right" style={{ color: '#d35400' }}>HDG A.C. Bhaktivedanta Swami Prabhupada</span>
                      <span className="block mb-2 text-base md:text-lg font-medium text-black md:text-right">Founder Acharya: ISKCON</span>
                    </div>
                  </div>
                </div> */}
        {/* Bottom: Chief Guest */}
        {/* <div className="relative w-full" style={{
                  background: '#f4f7fb',
                  minHeight: '260px',
                  clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)',
                  zIndex: 1,
                  marginTop: '-15vw' // perfectly aligns the diagonal, adjust if needed
                }}>
                  <div className="flex flex-row items-start justify-between max-w-7xl mx-auto px-6 pt-8 pb-0">
                    <div className="flex-1 flex flex-col justify-center items-start pr-8">
                      <span className="block mb-2 text-2xl md:text-3xl font-cursive" style={{ color: '#e6861a', fontFamily: 'Pacifico, cursive' }}>Chief Guest</span>
                      <span className="block mb-2 text-2xl md:text-3xl font-extrabold text-[#2256a7]">Sri Narendra Modi Ji</span>
                      <span className="block mb-2 text-base md:text-lg font-medium text-[#2256a7]">Prime Minister of India</span>
                    </div>
                    <img src="/images/chief-guest.png" alt="Chief Guest: Sri Narendra Modi Ji" className="object-contain w-[220px] h-[260px] md:w-[320px] md:h-[380px] rounded-none shadow-2xl" style={{ marginBottom: 0 }} />
                  </div>
                </div> */}
        {/* </div> */}


        {/* Event Carousel Section */}


        {/* Event Details & Register Now Section */}
        {/* Removed golden section (eventcardssection) between video and speakers */}
        


      </div>
    </div>
  </section>
}