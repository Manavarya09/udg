"use client";

import VideoThumb from "@/public/images/hero-image-01.png";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import UdgaarThemeImg from "@/public/images/udgaar-theme-2025.png";
import Footer from "./ui/footer";

// Countdown target date: 15 OCT 2025 00:00:00
const COUNTDOWN_TARGET = new Date("2025-10-15T00:00:00").getTime();

function getTimeLeft() {
  const now = new Date().getTime();
  let diff = Math.max(0, COUNTDOWN_TARGET - now);
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
  const [time, setTime] = useState(getTimeLeft());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-row justify-center items-center gap-3 sm:gap-10 mb-16">
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
      className="relative w-screen h-[50vh] md:h-[80vh] flex items-center justify-center overflow-hidden p-0 m-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover rounded-none max-h-[24vh] md:max-h-none"
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
  <section className="relative min-h-[150vh] md:min-h-[150vh] overflow-hidden">
    {/* Background Images */}
    <div className="absolute inset-0">
      <Image
        src={require('./assets/top-bg.png')}
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-transparent bg-opacity-30"></div>
    </div>

    {/* UDGAAR Title */}
    <div className="absolute inset-0 top-[20vh] flex-col justify-center items-start">
      <Image
        src={VideoThumb}
        width={1104}
        height={576}
        alt="Hero image"
        className="rounded-xl"
        priority
      />
      <div className="flex justify-center gap-6 mb-12 mt-10">
        <a
          href="/signup"
          className="px-8 py-3 rounded-lg bg-pink-600 text-white text-lg font-semibold shadow hover:bg-pink-700 transition-colors"
        >
          Register now
        </a>
        <a
          href="#teaser"
          className="px-8 py-3 rounded-lg bg-white text-pink-700 text-lg font-semibold border border-pink-600 shadow hover:bg-pink-50 transition-colors"
        >
          Watch Teaser
        </a>
      </div>
    </div>
  </section>
);

const AboutBg = () => {
  return <section className="relative min-h-[190vh] top-[-60vh] overflow-hidden">
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
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 mb-0 px-4 py-8">
        <div className="flex-shrink-0 bg-white rounded-3xl p-4 shadow-2xl" style={{ border: '6px solid #bdb7f7' }}>
          <Image
            src={UdgaarThemeImg}
            alt="Udgaar 2025 Theme"
            className="rounded-2xl h-[40vw] w-[40vw]"
            priority={false}
          />
        </div>
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ color: '#FFD700', fontFamily: 'cursive' }}>2025 Theme</h2>
          <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
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

  return (
    <section className="relative py-16 md:py-24">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets/TEMP/1d045ffa9b3bb8df694ebab2799e4bbe6126f5e2?width=2880')",
        }}
      ></div>

      <div className="relative max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Speakers Grid */}
        <div className="flex justify-center items-center relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
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
                  className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {/* <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-15 h-15 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
            <ChevronLeft className="w-6 h-6 text-[#8538A8]" />
          </button> */}

          {/* <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-15 h-15 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
            <ChevronRight className="w-6 h-6 text-[#8538A8]" />
          </button> */}
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
  <div className="relative w-screen h-[80vh] md:h-[80vh] flex  relative bg-[#683FB8] py-16 md:py-24 b-[50vh]">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
      {/* SPEAKERS Title */}
      <h2
        className="text-white font-raleway text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium text-center mb-10"
        style={{ letterSpacing: "0.2em" }}
      >
        SPEAKERS
      </h2>

      {/* Team Player Image */}
      <div className="relative mb-16">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3db240d2df9a97fa9213f9dd12f232110a1c0b3f?width=2880"
          alt="Team Players"
          className="w-full rounded-lg shadow-xl"
        />

        {/* Speaker Info Positioned at Bottom Center */}
        <div className="absolute bottom-4 left-3/7 transform -translate-x-1/2 text-center">
          <h3 className="text-[#FFF4AD] font-bold md:text-3xl lg:text-xl mb-2">
            HG SUNDAR GOPAL PRABHU
          </h3>
          <p className="text-white font-bold text-lg md:text-xl lg:text-xl">
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
      <div className="relative">
        <UdgarBg />
        <AboutBg />
        <ChiefBg />
      </div>
      <div className="relative">
        <div className="absolute left-0 w-full flex-col top-[-210vh] z-[12]">

          <SpeakersCarousel />
          
            {/* Parallax Video Section (full-bleed, edge-to-edge) */}
          <div className="relative w-screen">
            <ParallaxVideo />
          </div>

          


        


          


        </div>
      </div>
      <MainSpeakersSection/>

          <Footer />

      {/* Speakers Section */}

      
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
        {/* Removed duplicate event details and register now section */}
        <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 flex flex-col items-center justify-center mb-0 pt-8 pb-8"
          style={{ minHeight: '600px', overflow: 'visible', background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' }}>
          {/* Wavy orange-red background */}
          <svg viewBox="0 0 1440 320" className="absolute top-0 left-0 w-full h-full z-0" style={{ pointerEvents: 'none' }}><path fill="#e43a87" fillOpacity="0.18" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L0,320Z"></path></svg>
          {/* Carousel and arrows */}
          <div className="relative w-full flex items-center justify-center z-10" style={{ minHeight: '600px' }}>
            <button id="carousel-left" className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-30 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl border-4 border-white hover:bg-pink-100 transition-colors" style={{ boxShadow: '0 8px 32px 0 #e43a8740' }}>
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path stroke="#e43a87" strokeWidth="3.5" strokeLinecap="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <div id="event-carousel" className="flex gap-0 md:gap-0 overflow-x-auto no-scrollbar py-8 w-full justify-center items-end relative" style={{ scrollSnapType: 'x mandatory', zIndex: 2 }}>
              {/* Card 1 */}
              <div className="relative min-w-[260px] max-w-[280px] h-[620px] overflow-visible flex-shrink-0 shadow-2xl z-10" style={{ scrollSnapAlign: 'center', marginLeft: '-48px', marginRight: '-48px', borderRadius: '2.5rem', transform: 'rotateZ(-8deg)' }}>
                <div className="absolute inset-0 rounded-[2.5rem]" style={{ background: 'linear-gradient(135deg, #7b4397 0%, #dc2430 100%)', boxShadow: '0 16px 48px 0 rgba(236, 72, 153, 0.28)' }}></div>
                <img src="/images/wordsofwisdom.png" alt="Words of Wisdom" className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] border-[6px] border-white" style={{ zIndex: 1 }} />
                {/* Yellow corner bracket */}
                <svg className="absolute top-0 left-0 z-10" width="68" height="68"><polyline points="0,68 0,0 68,0" style={{ fill: 'none', stroke: '#ffe259', strokeWidth: 7, strokeLinejoin: 'round' }} /></svg>
                {/* Text overlay */}
                <div className="absolute left-0 bottom-0 z-20 p-7" style={{ width: '100%' }}>
                  <div className="text-yellow-400 font-extrabold text-2xl leading-tight drop-shadow mb-2" style={{ letterSpacing: '1.5px', textShadow: '0 2px 8px #0008' }}>WORDS OF WISDOM</div>
                  <div className="text-white font-semibold text-base" style={{ textShadow: '0 2px 8px #0008' }}>HH Guru Prasad Swami Maharaj</div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="relative min-w-[260px] max-w-[280px] h-[620px] overflow-visible flex-shrink-0 shadow-2xl z-20" style={{ scrollSnapAlign: 'center', marginLeft: '-48px', marginRight: '-48px', borderRadius: '2.5rem', transform: 'rotateZ(-4deg)' }}>
                <div className="absolute inset-0 rounded-[2.5rem]" style={{ background: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)', boxShadow: '0 16px 48px 0 rgba(236, 72, 153, 0.18)' }}></div>
                <img src="/images/theatre.png" alt="Theatrical Show" className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] border-[6px] border-white" style={{ zIndex: 1 }} />
                {/* Yellow corner bracket */}
                <svg className="absolute top-0 left-0 z-10" width="68" height="68"><polyline points="0,68 0,0 68,0" style={{ fill: 'none', stroke: '#ffe259', strokeWidth: 7, strokeLinejoin: 'round' }} /></svg>
                {/* Text overlay */}
                <div className="absolute left-0 bottom-0 z-20 p-7" style={{ width: '100%' }}>
                  <div className="text-yellow-400 font-extrabold text-2xl leading-tight drop-shadow mb-2" style={{ letterSpacing: '1.5px', textShadow: '0 2px 8px #0008' }}>THEATRICAL SHOW</div>
                  <div className="text-white font-semibold text-base" style={{ textShadow: '0 2px 8px #0008' }}>&nbsp;</div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="relative min-w-[260px] max-w-[280px] h-[620px] overflow-visible flex-shrink-0 shadow-2xl z-30" style={{ scrollSnapAlign: 'center', marginLeft: '-48px', marginRight: '-48px', borderRadius: '2.5rem', transform: 'rotateZ(0deg)' }}>
                <div className="absolute inset-0 rounded-[2.5rem]" style={{ background: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)', boxShadow: '0 16px 48px 0 rgba(72, 236, 153, 0.18)' }}></div>
                <img src="/images/music.png" alt="Musical Concert" className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] border-[6px] border-white" style={{ zIndex: 1 }} />
                {/* Yellow corner bracket */}
                <svg className="absolute top-0 left-0 z-10" width="68" height="68"><polyline points="0,68 0,0 68,0" style={{ fill: 'none', stroke: '#ffe259', strokeWidth: 7, strokeLinejoin: 'round' }} /></svg>
                {/* Text overlay */}
                <div className="absolute left-0 bottom-0 z-20 p-7" style={{ width: '100%' }}>
                  <div className="text-yellow-400 font-extrabold text-2xl leading-tight drop-shadow mb-2" style={{ letterSpacing: '1.5px', textShadow: '0 2px 8px #0008' }}>MUSICAL CONCERT</div>
                  <div className="text-white font-semibold text-base" style={{ textShadow: '0 2px 8px #0008' }}>&nbsp;</div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="relative min-w-[260px] max-w-[280px] h-[620px] overflow-visible flex-shrink-0 shadow-2xl z-40" style={{ scrollSnapAlign: 'center', marginLeft: '-48px', marginRight: '-48px', borderRadius: '2.5rem', transform: 'rotateZ(8deg)' }}>
                <div className="absolute inset-0 rounded-[2.5rem]" style={{ background: 'linear-gradient(135deg, #ff512f 0%, #dd2476 100%)', boxShadow: '0 16px 48px 0 rgba(236, 72, 153, 0.18)' }}></div>
                <img src="/images/culture.png" alt="Cultural Performance" className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] border-[6px] border-white" style={{ zIndex: 1 }} />
                {/* Yellow corner bracket */}
                <svg className="absolute top-0 left-0 z-10" width="68" height="68"><polyline points="0,68 0,0 68,0" style={{ fill: 'none', stroke: '#ffe259', strokeWidth: 7, strokeLinejoin: 'round' }} /></svg>
                {/* Text overlay */}
                <div className="absolute left-0 bottom-0 z-20 p-7" style={{ width: '100%' }}>
                  <div className="text-yellow-400 font-extrabold text-2xl leading-tight drop-shadow mb-2" style={{ letterSpacing: '1.5px', textShadow: '0 2px 8px #0008' }}>CULTURAL PERFORMANCE</div>
                  <div className="text-white font-semibold text-base" style={{ textShadow: '0 2px 8px #0008' }}>&nbsp;</div>
                </div>
              </div>
            </div>
            <button id="carousel-right" className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-30 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl border-4 border-white hover:bg-pink-100 transition-colors" style={{ boxShadow: '0 8px 32px 0 #e43a8740' }}>
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path stroke="#e43a87" strokeWidth="3.5" strokeLinecap="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
        


      </div>
    </div>
  </section>
}