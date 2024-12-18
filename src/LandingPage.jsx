import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import TopBar from "./pages/TopBar";
import NavBar from "./NavBar";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />

      <NavBar />

      <div className="relative text-white">
        <div className="relative">
          <img
            src="banner.webp"
            alt="Cleaning Service"
            className="h-[800px] w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-start">
          <div className="max-w-lg px-4 md:px-8 text-left ml-5 md:ml-20">
            <h2 className="text-lg mb-4">RENEW YOUR LOOK</h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              A TRADITION OF
              <br />
              QUALITY CLEANING
            </h1>
            <button className="border-2 border-white px-6 md:px-8 py-2 hover:bg-white hover:text-cyan-400 transition-colors">
              Contact Us
            </button>
          </div>
        </div>

        <button className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full">
          <IoIosArrowBack className="w-4 h-4 md:w-6 md:h-6" />
        </button>
        <button className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full">
          <IoIosArrowForward className="w-4 h-4 md:w-6 md:h-6" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Professional Cleaning",
              description:
                "Housekeeping is responsible for minor security in hotel Ecosystem for Food and Cleaner through.",
            },
            {
              title: "Fast and efficient",
              description:
                "Our Aim is to Keep the House Clean - Your Aim Will Help! the through Digital Innovation World Summit.",
            },
            {
              title: "Renew your look",
              description:
                "Both of us take a lot of time in getting cleaned and beautified Clean Home Professional Service.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-lg z-10 shadow-md"
            >
              <div className="flex justify-center mb-6">
                <svg
                  className="w-12 h-12 text-cyan-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 8V12L15 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* About Section */}
      <div className="bg-cyan-400 text-white py-12 md:py-16 mt-12 md:mt-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                A Clean House is a<br />
                Happy Place!
              </h2>
              <p className="text-base md:text-lg">
                Washla has met the demands of a growing world.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-sm md:text-base">
                Washla customers has a tremendous opportunity to answer the call
                of logistic needs across the globe. Has 26 affiliated state
                soybean associations representing 30 soybean-producing state.
              </p>
              <p className="text-sm md:text-base">
                World's leading non-asset-based supply chain management
                companies, we design and implement industry-leading. We
                specialise in intelligent & effective search and believes in the
                power of partnerships to grow business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
