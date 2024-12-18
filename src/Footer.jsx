import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 md:px-40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="mb-6">
              <img src="logo.png" alt="amiso" className="h-8" />
            </div>
            <p className="text-gray-500">
              Washla customers has a tremendous opportunity to answer the call of logistic.
            </p>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-xl font-bold text-cyan-900 mb-6">Get In Touch</h3>
            <div className="text-gray-500 space-y-4">
              <p>
                8273 NW 56th ST Miami, Florida,
                <br />
                33195 United States
              </p>
              <p>info@amiso.com</p>
              <p>052 5401 3322</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-cyan-900 mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <a href="#" className="block text-gray-500 hover:text-cyan-500">Home</a>
                <a href="#" className="block text-gray-500 hover:text-cyan-500">About</a>
                <a href="#" className="block text-gray-500 hover:text-cyan-500">Services</a>
                <a href="#" className="block text-gray-500 hover:text-cyan-500">Team</a>
              </div>
              <div className="space-y-4">
                <a href="#" className="block text-gray-500 hover:text-cyan-500">FAQ</a>
                <a href="#" className="block text-gray-500 hover:text-cyan-500">Contact Us</a>
                <a href="#" className="block text-gray-500 hover:text-cyan-500">Gallery</a>
                <a href="#" className="block text-gray-500 hover:text-cyan-500">Blogs</a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-cyan-900 mb-6">Our Newsletter</h3>
            <p className="text-gray-500 mb-6">
              Subscribe to our newsletter to receive the latest news about our services.
            </p>
            <div className="flex gap-1">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-2 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-cyan-500"
              />
              <button className="px-6 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors">
                SIGN UP
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © 2023 amiso all rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Scroll to Top */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 bg-cyan-500 text-white p-3 rounded-md hover:bg-cyan-600 transition-colors"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;