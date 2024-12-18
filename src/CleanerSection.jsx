import React from "react";
import { MdCleaningServices, MdSpeed } from "react-icons/md";
import { FaHome, FaWindowMaximize } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";

const CleanerSection = () => {
  return (
    <div>
      <div className="container relative mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-2 mb-16">
        <div className="bg-yellow-400 rounded-lg overflow-hidden">
          <img
            src="cleaner.jpg"
            alt="Cleaning Service Professional"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center md:justify-start bg-white p-10 shadow-lg rounded-lg">
          <p className="text-gray-500 mb-2">READY FOR YOU</p>
          <h2 className="text-3xl font-bold text-cyan-900 mb-4">
            A Cleaner Place is a Safer Place.
          </h2>
          <p className="text-gray-600 mb-8">
            Washla cleaning service. We are a company dedicated to giving our
            customers back the time they deserve to enjoy the things they love.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 items-start">
              <div className="text-cyan-500">
                <MdCleaningServices size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Professional Cleaning
                </h3>
                <p className="text-gray-600 text-sm">
                  Housekeeping is responsible for minor security in hotel.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-cyan-500">
                <MdSpeed size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Fast and Efficient
                </h3>
                <p className="text-gray-600 text-sm">
                  Both of us take a lot of time in getting cleaned Clean Home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cyan-50 py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gray-500 mb-2">Why Choose Us</p>
            <h2 className="text-3xl font-bold text-cyan-900 mb-4">
              Our Great Service
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Restoring the beauty and freshness of all your upholstered fabrics
              and take the work out of housework for you.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-cyan-500 text-white p-8 rounded-lg">
              <FaHome className="text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-4">Home Cleaning</h3>
              <p>
                Homes and thoroughly launder them between usage. We give our
                team the accumulum doloremque sandalantum.
              </p>
            </div>

            <div className="bg-cyan-500 text-white p-8 rounded-lg">
              <FaWindowMaximize className="text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-4">Windows Cleaning</h3>
              <p>
                We are closely monitoring national, state and local health
                agencies for the most recent developments.
              </p>
            </div>

            <div className="bg-cyan-500 text-white p-8 rounded-lg">
              <BsBuilding className="text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-4">Office Cleaning</h3>
              <p>
                Follow these tips from the CDC to help prevent the spread of the
                seasonal flu and respiratory diseases.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 opacity-20">
          <img
            src="why.jpg"
            alt="Cleaning Supplies"
            className="w-[9030px] h-[520px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CleanerSection;
