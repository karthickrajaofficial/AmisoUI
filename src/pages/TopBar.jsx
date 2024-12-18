import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div
      className=" top-0 left-0 w-full bg-cyan-400 z-5 text-white py-2 px-4 md:px-8 z-50 shadow-md"
      style={{ backdropFilter: "blur(5px)" }} // Optional: Adds a blur effect
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-start md:items-center text-sm">
            <span className="flex items-center gap-2">
              <FaPhoneAlt className="w-3 h-3" /> +123-456-7890
            </span>
            <span className="flex items-center gap-2">
              <FaEnvelope className="w-3 h-3" /> info@yourdomain.com
            </span>
          </div>

          {/* Social Icons and Button */}
          <div className="flex gap-4 md:gap-6 items-center">
            <div className="flex gap-4 items-center">
              <a href="#" className="hover:text-gray-200">
                <FaFacebookF className="w-3 h-3" />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaTwitter className="w-3 h-3" />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaInstagram className="w-3 h-3" />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaLinkedinIn className="w-3 h-3" />
              </a>
            </div>
            <button className="bg-white text-cyan-400 px-4 py-1 rounded text-sm font-medium">
              GET A QUOTE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
