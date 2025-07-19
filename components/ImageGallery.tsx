import React from "react";

const images = [
  {
    src: "/images/speakers/speaker1.jpg",
    alt: "HG Sundar Gopal Prabhu - Chairman IIYC",
    name: "HG Sundar Gopal Prabhu",
    title: "Chairman IIYC"
  },
  {
    src: "/images/speakers/speaker2.jpg", 
    alt: "HH Guru Prasad Swami Maharaj",
    name: "HH Guru Prasad Swami Maharaj",
    title: "Spiritual Leader"
  },
  {
    src: "/images/speakers/speaker3.jpg",
    alt: "HDG A.C. Bhaktivedanta Swami Prabhupada - Founder Acharya ISKCON",
    name: "HDG A.C. Bhaktivedanta Swami Prabhupada", 
    title: "Founder Acharya ISKCON"
  },
  {
    src: "/images/speakers/speaker4.jpg",
    alt: "Dr. M Srinivas",
    name: "Dr. M Srinivas",
    title: "Cultural Leader"
  },
  {
    src: "/images/speakers/speaker5.jpg",
    alt: "Spiritual Speaker",
    name: "Spiritual Speaker",
    title: "Devotional Leader"
  },
  {
    src: "/images/speakers/speaker6.jpg",
    alt: "Monk in Orange Robes",
    name: "Monk in Orange Robes",
    title: "Spiritual Guide"
  },
  {
    src: "/images/speakers/speaker7.jpg",
    alt: "Cultural Event Speaker",
    name: "Cultural Event Speaker", 
    title: "Cultural Ambassador"
  },
  {
    src: "/images/speakers/speaker8.jpg",
    alt: "ISKCON Speaker",
    name: "ISKCON Speaker",
    title: "Spiritual Teacher"
  },
  {
    src: "/images/speakers/speaker9.jpg",
    alt: "Large Audience Speaker",
    name: "Large Audience Speaker",
    title: "Public Speaker"
  },
  {
    src: "/images/speakers/speaker10.jpg",
    alt: "Musical Performance Speaker",
    name: "Musical Performance Speaker",
    title: "Devotional Artist"
  }
];

const ImageGallery: React.FC = () => {
  return (
    <div className="flex h-[70vh] overflow-hidden group transition-all duration-500 w-full">
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
  );
};

export default ImageGallery; 