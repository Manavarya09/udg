import React from "react";

const images = [
  {
    src: "/images/speakers/speaker1.jpg",
    alt: "Guru Prasad Maharaj",
    name: "Guru Prasad Maharaj",
    title: "Spiritual Leader"
  },
  {
    src: "/images/speakers/speaker2.jpg", 
    alt: "Lokanath Swami Maharaj",
    name: "Lokanath Swami Maharaj",
    title: "Spiritual Guide"
  },
  {
    src: "/images/speakers/speaker3.jpg",
    alt: "HG Sundar Gopal Prabhu",
    name: "HG Sundar Gopal Prabhu", 
    title: "Chairman IIYC"
  },
  {
    src: "/images/speakers/speaker4.jpg",
    alt: "Bhakti Prem Swami",
    name: "Bhakti Prem Swami",
    title: "Devotional Leader"
  },
  {
    src: "/images/speakers/speaker5.jpg",
    alt: "HG Devaki Nandan Prabhu",
    name: "HG Devaki Nandan Prabhu",
    title: "Spiritual Teacher"
  },
  {
    src: "/images/speakers/speaker6.jpg",
    alt: "HG Ram Bhadra Pr",
    name: "HG Ram Bhadra Pr",
    title: "Spiritual Guide"
  },
  {
    src: "/images/speakers/speaker7.jpg",
    alt: "Guru Prasad Maharaj",
    name: "Guru Prasad Maharaj", 
    title: "Spiritual Leader"
  },
  {
    src: "/images/speakers/speaker8.jpg",
    alt: "HG Mahaman Prabhu",
    name: "HG Mahaman Prabhu",
    title: "Devotional Teacher"
  },
  {
    src: "/images/speakers/speaker9.jpg",
    alt: "312610812_135364142593291_958920488306895415_n",
    name: "312610812_135364142593291_958920488306895415_n",
    title: "Special Guest"
  },
  {
    src: "/images/speakers/speaker10.jpg",
    alt: "312610812_135364142593291_958920488306895415_n",
    name: "312610812_135364142593291_958920488306895415_n",
    title: "Special Guest"
  }
];

const ImageGallery: React.FC = () => {
  return (
    <div className="w-full">
      {/* Desktop Layout */}
      <div className="hidden md:flex h-[70vh] overflow-hidden group transition-all duration-500">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="flex-1 transition-all duration-500 ease-in-out hover:flex-[5] group-hover:flex-[1] relative"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover object-center transition-all duration-500"
            />
            {/* Speaker info overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white font-bold text-sm md:text-lg">{image.name}</h3>
              <p className="text-yellow-300 text-xs md:text-sm">{image.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden h-[50vh] overflow-x-auto snap-x snap-mandatory scroll-smooth">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-full snap-center px-1"
            style={{ minWidth: "100%" }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery; 