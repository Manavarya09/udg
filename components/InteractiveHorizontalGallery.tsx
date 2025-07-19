import React, { useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=80',
];

export default function InteractiveHorizontalGallery() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="w-full h-[70vh] flex overflow-hidden cursor-none relative">
      {images.map((src, idx) => (
        <div
          key={src}
          className={`transition-all duration-500 ease-in-out h-full flex-1 relative group ${
            hovered === idx ? 'flex-[4]' : hovered === null ? 'flex-1' : 'flex-[0.7]'
          }`}
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
          style={{ minWidth: 0 }}
        >
          <img
            src={src}
            alt={`Gallery ${idx}`}
            className="w-full h-full object-cover object-center select-none pointer-events-none"
            draggable={false}
          />
          {/* Custom cursor effect: zoom lens */}
          {hovered === idx && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-32 h-32 rounded-full border-4 border-yellow-400 bg-yellow-200/20 animate-pulse mix-blend-lighten shadow-2xl" style={{filter:'drop-shadow(0 0 32px #facc15)'}}></div>
            </div>
          )}
        </div>
      ))}
      {/* Hide default cursor and show sparkle/zoom lens on hover */}
      <style jsx global>{`
        .cursor-none, .cursor-none * { cursor: none !important; }
      `}</style>
    </div>
  );
} 