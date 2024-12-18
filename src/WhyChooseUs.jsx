import React from 'react';
import { FaUserTie } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { MdVerified } from 'react-icons/md';

const WhyChooseUs = () => {
  return (
    <div className="py-16 px-4">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h3 className="text-gray-500 uppercase mb-4">WHY CHOOSE US</h3>
        <h2 className="text-4xl font-bold text-cyan-900 mb-6">Tradition of Trust</h2>
        <p className="text-gray-600">
          We specialise in intelligent & effective Search and believes in the power of partnerships to grow business.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Professional Team */}
        <div className="text-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <FaUserTie className="w-12 h-12 text-cyan-500" />
          </div>
          <h3 className="text-xl font-bold text-cyan-900 mb-4">Professional Team</h3>
          <p className="text-gray-600">
            Our team uses a sanitizing solution to wipe down light switches doorknobs.
          </p>
        </div>

        {/* 24/7 Services */}
        <div className="text-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <BiSupport className="w-12 h-12 text-cyan-500" />
          </div>
          <h3 className="text-xl font-bold text-cyan-900 mb-4">24/7 Services</h3>
          <p className="text-gray-600">
            We encourage our customers to let us know in advance of an appointment.
          </p>
        </div>

        {/* Service Guarantee */}
        <div className="text-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <MdVerified className="w-12 h-12 text-cyan-500" />
          </div>
          <h3 className="text-xl font-bold text-cyan-900 mb-4">Service Guarantee</h3>
          <p className="text-gray-600">
            We are telling our team members to switch out all cleaning cloths and mopheads.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;