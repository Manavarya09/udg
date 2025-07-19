import React from "react";

const REGISTER_URL = "/signup";

export default function FloatingButtons() {
  return (
    <>
      {/* Calendar Floating Button (Bottom Right) */}
      <a
        href={REGISTER_URL}
        aria-label="Register Now"
        style={{
          position: "fixed",
          right: 24,
          bottom: 24,
          zIndex: 1000,
          background: "#ECD387",
          borderRadius: "50%",
          width: 56,
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          color: "#222",
          transition: "box-shadow 0.2s",
        }}
      >
        {/* Calendar SVG Icon */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="12" fill="#ECD387"/>
          <path d="M7 10H17M7 14H13M16 2V6M8 2V6M3 8H21V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V8Z" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </>
  );
} 