"use client";

import { useState } from "react";
import Header from "@/components/ui/header";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    connectedToIskcon: "Yes",
    subject: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-blue-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-lg"></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-yellow-400/20 rounded-full blur-lg"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 px-6 lg:px-12 py-12 pt-32">
          {/* Connect With Us Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-12">
              CONNECT WITH US
            </h1>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
              {/* General Section */}
              <div className="text-left">
                <h2 className="text-yellow-400 text-xl md:text-2xl font-bold mb-4">
                  GENERAL
                </h2>
                <p className="text-white mb-2 text-sm md:text-base">
                  FOR EVENT INQUIRIES, COLLABORATIONS,
                </p>
                <p className="text-white mb-4 text-sm md:text-base">
                  OR GENERAL QUESTIONS:
                </p>
                <p className="text-white text-sm md:text-base">INFO@UDGAAR.IN</p>
              </div>

              {/* Write To Us Section */}
              <div className="text-left">
                <h2 className="text-yellow-400 text-xl md:text-2xl font-bold mb-4">
                  WRITE TO US
                </h2>
                <p className="text-white mb-2 text-sm md:text-base">
                  SEND US A MESSAGE VIA OUR CONTACT FORM,
                </p>
                <p className="text-white text-sm md:text-base">
                  AND WE WILL RESPOND AS SOON AS POSSIBLE.
                </p>
              </div>

              {/* Advertising Section */}
              <div className="text-left">
                <h2 className="text-yellow-400 text-xl md:text-2xl font-bold mb-4">
                  ADVERTISING
                </h2>
                <p className="text-white mb-2 text-sm md:text-base">
                  FOR SPONSORSHIP & ADVERTISING OPPORTUNITIES:
                </p>
                <p className="text-white text-sm md:text-base">ADS@UDGAAR.IN</p>
              </div>

              {/* Follow Us Section */}
              <div className="text-left">
                <h2 className="text-yellow-400 text-xl md:text-2xl font-bold mb-4">
                  FOLLOW US
                </h2>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-red-500 text-sm">📺</span>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">f</span>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-pink-500 text-sm">📷</span>
                  </div>
                  <span className="text-white text-sm md:text-base">
                    ISKCON FOR YOUTH
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📱</span>
                  </div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <span className="text-white text-sm md:text-base">
                    +91-8474936363
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Wavy Separator */}
          <div className="relative my-16">
            <svg viewBox="0 0 1200 120" className="w-full h-20">
              <path
                d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
                fill="#FBBF24"
              />
            </svg>
          </div>

          {/* Get In Touch Form Section */}
          <div className="bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 rounded-3xl p-6 md:p-8 lg:p-12 max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
              GET IN TOUCH
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="NAME"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full bg-transparent border-b-2 border-white border-t-0 border-l-0 border-r-0 rounded-none text-white placeholder-white/70 text-lg py-3 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="EMAIL"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full bg-transparent border-b-2 border-white border-t-0 border-l-0 border-r-0 rounded-none text-white placeholder-white/70 text-lg py-3 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="tel"
                    placeholder="CONTACT NUMBER"
                    value={formData.contactNumber}
                    onChange={(e) =>
                      handleInputChange("contactNumber", e.target.value)
                    }
                    className="w-full bg-transparent border-b-2 border-white border-t-0 border-l-0 border-r-0 rounded-none text-white placeholder-white/70 text-lg py-3 focus:outline-none"
                  />
                </div>
                <div>
                  <select
                    value={formData.connectedToIskcon}
                    onChange={(e) =>
                      handleInputChange("connectedToIskcon", e.target.value)
                    }
                    className="w-full bg-transparent border-b-2 border-white border-t-0 border-l-0 border-r-0 rounded-none text-white text-lg py-3 focus:outline-none"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="SUBJECT"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className="w-full bg-transparent border-b-2 border-white border-t-0 border-l-0 border-r-0 rounded-none text-white placeholder-white/70 text-lg py-3 focus:outline-none"
                />
              </div>

              <div>
                <textarea
                  placeholder="MESSAGE"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full bg-transparent border-b-2 border-white border-t-0 border-l-0 border-r-0 rounded-none text-white placeholder-white/70 text-lg py-3 min-h-[100px] resize-none focus:outline-none"
                />
              </div>

              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 md:px-12 py-3 rounded-full text-lg transition-colors"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>

          {/* Event Venue Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              EVENT VENUE
            </h2>

            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-4 mb-8">
              <div className="aspect-video bg-green-100 rounded-2xl relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2416596807253!2d77.23115931508087!3d28.636065882429033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0683929c3f%3A0x8624c206e11a0e5f!2sIndira%20Gandhi%20Indoor%20Stadium!5e0!3m2!1sen!2sin!4v1629000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">
              INDIRA GANDHI
            </h3>
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400">
              INDOOR STADIUM
            </h4>
          </div>

          {/* Bottom decorative wave */}
          <div className="relative mt-16">
            <svg viewBox="0 0 1200 120" className="w-full h-20">
              <path
                d="M0,60 Q300,100 600,60 T1200,60 L1200,0 L0,0 Z"
                fill="#FBBF24"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
} 