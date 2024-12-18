import React, { useState } from 'react';
import { GoDotFill, GoDot } from "react-icons/go";

const TeamSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      name: "Monica Gordon",
      role: "House Cleaning",
      image: "team.webp"
    },
    {
      name: "Laura Jones",
      role: "Cleaner",
      image: "team.webp"
    },
    {
      name: "Sara Ryan",
      role: "House Cleaner",
      image: "team.webp"
    }
  ];

  return (
    <div className="py-16 px-4 bg-white">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h3 className="text-gray-500 uppercase mb-4">MEET OUR</h3>
        <h2 className="text-4xl font-bold text-cyan-900 mb-6">Our Team</h2>
        <p className="text-gray-600">
          The member of our highly experienced team is dedicated to providing you with only the best service we can possibly provide.
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative group">
              {/* Image Container */}
              <div className="relative h-96 bg-purple-200 rounded-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Info Card */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg px-8 py-4 w-[80%] text-center">
                <h3 className="text-xl font-bold text-cyan-900 mb-1">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-16">
          {[0, 1, 2, 3, 4].map((dot) => (
            <button
              key={dot}
              onClick={() => setCurrentSlide(dot)}
              className="focus:outline-none"
            >
              {currentSlide === dot ? (
                <GoDotFill className="text-cyan-500 text-2xl" />
              ) : (
                <GoDot className="text-gray-300 text-2xl" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;