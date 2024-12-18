import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaHandsWash, FaBroom, FaBuilding } from "react-icons/fa";

const images = [
    "/banner.jpg",
    "/banner2.jpg",
   
  ];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Navigate to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative font-sans">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-2 bg-sky-600 text-white text-sm">
        <div className="flex space-x-4">
          <span>+123-456-7890</span>
          <span>info@yourdomain.com</span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">Facebook</a>
          <a href="#" className="hover:text-gray-300">Twitter</a>
          <a href="#" className="hover:text-gray-300">Instagram</a>
          <button className="bg-sky-500 px-4 py-1 rounded hover:bg-sky-400">
            GET A QUOTE
          </button>
        </div>
      </div>

      {/* Hero Section with Full-Screen Carousel */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Carousel Container */}
        <motion.div
          className="flex"
          animate={{
            x: `-${currentIndex * 100}%`,
          }}
          transition={{
            type: "tween",
            duration: 0.6,
          }}
          style={{ width: `${images.length * 100}%` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 h-screen"
            >
              <img
                src={image}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>

        {/* Left Arrow */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-sky-600 text-white p-3 rounded-full hover:bg-sky-500 transition"
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-sky-600 text-white p-3 rounded-full hover:bg-sky-500 transition"
        >
          <FaArrowRight size={20} />
        </button>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 py-10 -mt-16">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded p-6 flex flex-col items-center text-center">
          <FaHandsWash className="text-5xl text-sky-500 mb-4" />
          <h3 className="font-bold text-lg mb-2">Professional Cleaning</h3>
          <p className="text-gray-600 text-sm">
            Housekeeping is responsible for minor security in the hotel ecosystem.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded p-6 flex flex-col items-center text-center">
          <FaBroom className="text-5xl text-sky-500 mb-4" />
          <h3 className="font-bold text-lg mb-2">Fast and Efficient</h3>
          <p className="text-gray-600 text-sm">
            Your aim will help you through Digital Innovation World Summit.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded p-6 flex flex-col items-center text-center">
          <FaBuilding className="text-5xl text-sky-500 mb-4" />
          <h3 className="font-bold text-lg mb-2">Renew Your Look</h3>
          <p className="text-gray-600 text-sm">
            Both of us take a lot of time in getting cleaned and beautiful.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
<div className="bg-gray-50">
{/* Navbar */}
{/* <nav className="bg-white shadow-md fixed w-full z-10">
  <div className="container mx-auto flex justify-between items-center py-4 px-6">
    <div className="text-2xl font-bold text-blue-500">amiso</div>
    <ul className="hidden md:flex space-x-6">
      <li>
        <a href="#" className="text-gray-600 hover:text-blue-500">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="text-gray-600 hover:text-blue-500">
          About
        </a>
      </li>
      <li>
        <a href="#services" className="text-gray-600 hover:text-blue-500">
          Services
        </a>
      </li>
      <li>
        <a href="#team" className="text-gray-600 hover:text-blue-500">
          Team
        </a>
      </li>
      <li>
        <a href="#blog" className="text-gray-600 hover:text-blue-500">
          Blog
        </a>
      </li>
    </ul>
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Get a Quote
    </button>
  </div>
</nav> */}

{/* Hero Section */}
<HeroSection/>

{/* Services Section */}
<section id="services" className="py-16 bg-white">
  <div className="container mx-auto text-center">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: "Professional Cleaning", text: "Reliable and thorough cleaning solutions." },
        { title: "Fast and Efficient", text: "Save time with our efficient cleaning services." },
        { title: "Renew Your Look", text: "Make your home and workplace shine again." },
      ].map((item, index) => (
        <div key={index} className="p-6 shadow-md rounded-md bg-gray-50">
          <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* About Section */}
<section id="about" className="bg-blue-100 py-16">
  <div className="container mx-auto text-center px-4">
    <h2 className="text-3xl font-bold mb-4">A Cleaner Place is a Safer Place</h2>
    <p className="text-gray-700 max-w-3xl mx-auto">
      Our cleaning services are designed to ensure a hygienic and safe environment for you and your loved ones.
    </p>
  </div>
</section>

{/* Team Section */}
<section id="team" className="py-16 bg-white">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { name: "Monica Gordon", role: "House Cleaner" },
        { name: "Laura Jones", role: "Cleaner" },
        { name: "Sara Ryan", role: "House Cleaner" },
      ].map((member, index) => (
        <div key={index} className="text-center">
          <img
            src="https://via.placeholder.com/150"
            alt={member.name}
            className="mx-auto rounded-full mb-4"
          />
          <h4 className="text-lg font-semibold">{member.name}</h4>
          <p className="text-gray-500">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Statistics Section */}
<section className="bg-blue-500 text-white py-12">
  <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    {[
      { count: "385", text: "Happy Customers" },
      { count: "842", text: "Houses Cleaned" },
      { count: "489", text: "Awards Received" },
      { count: "1344", text: "Glass Cleaned" },
    ].map((stat, index) => (
      <div key={index}>
        <h3 className="text-2xl font-bold">{stat.count}</h3>
        <p>{stat.text}</p>
      </div>
    ))}
  </div>
</section>

{/* Recent News Section */}
<section id="blog" className="py-16 bg-white">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8">Recent News</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3].map((item) => (
        <div key={item} className="p-6 shadow-md rounded-md">
          <h4 className="text-lg font-semibold mb-4">Cleaning Service Update</h4>
          <p className="text-gray-600">
            Discover how we are improving our services to meet your expectations.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Footer */}
<footer className="bg-gray-900 text-gray-400 py-8">
  <div className="container mx-auto text-center">
    <p>&copy; 2024 Amiso Cleaning Services. All Rights Reserved.</p>
  </div>
</footer>
</div>