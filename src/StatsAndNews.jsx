import React, { useEffect, useState } from 'react';
import { FaRegSmile, FaHome, FaAward, FaBroom, FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

const StatsAndNews = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const stats = [
    { icon: <FaRegSmile />, count: 385, label: "Happy Customers" },
    { icon: <FaHome />, count: 842, label: "Houses Cleaned" },
    { icon: <FaAward />, count: 489, label: "Awards Received" },
    { icon: <FaBroom />, count: 1344, label: "Days Cleaned" }
  ];

  const news = [
    {
      date: { day: "12", month: "Nov" },
      category: "CLEANING",
      title: "Temporary Ruling Issued",
      description: "Washla has met the demands of a growing world. Cleaning tremendous.",
      author: {
        image: "team.jpg",
        name: "Martha Smith",
        role: "Washla CEO"
      }
    },
    {
      date: { day: "11", month: "Nov" },
      category: "CLEANING",
      title: "The Expands California",
      description: "welcomed and every sort ut perspiciatis unde omnis iste natus.",
      author: {
        image: "team.jpg",
        name: "Laura Jones",
        role: "Accounting"
      }
    },
    {
      date: { day: "10", month: "Nov" },
      category: "CLEANING",
      title: "Temporary Ruling Issued",
      description: "Washla has met the demands of a growing world. The Cleaning.",
      author: {
        image: "team.jpg",
        name: "Matt Ryan",
        role: "Lawyer"
      }
    }
  ];

  useEffect(() => {
    stats.forEach((stat, index) => {
      let count = 0;
      const interval = setInterval(() => {
        if (count < stat.count) {
          count += Math.floor(stat.count / 100);
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = count;
            return newCounts;
          });
        } else {
          clearInterval(interval);
        }
      }, 20); 
    });
  }, []);

  return (
    <div className="bg-white">
      {/* CTA Section with Stats */}
      <div
        className="relative text-white py-36"
        style={{
          backgroundImage: "url('cta.jpg')", // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Play Button */}
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2">
          <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-cyan-500 shadow-lg hover:bg-gray-100 transition-colors">
            <FaPlay className="ml-1" />
          </button>
        </div>

        <div className="container mx-auto px-20 text-center">
          <p className="text-lg my-8 mb-2">Cleaning your Worries Away</p>
          <h2 className="text-4xl font-bold mb-6">Need Help With Cleaning?</h2>
          <button className="bg-white text-cyan-500 px-8 py-3 rounded hover:bg-gray-100 transition-colors">
            Request Call Back
          </button>
        </div>

   
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{ top: "90%" }} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-white rounded-lg shadow-lg lg:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 text-cyan-500"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="text-2xl">{stat.icon}</div>
                  <div className="text-left">
                    <motion.div
                      className="text-2xl font-bold"
                      key={stat.count}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 10 }}
                    >
                      {counts[index]}+
                    </motion.div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Recent News Section */}
      <div className="py-16 mt-10 px-4">
        <div className="text-center mb-12">
          <p className="text-gray-500 uppercase mb-2">WHY CHOOSE US</p>
          <h2 className="text-3xl font-bold text-cyan-900 mb-4">Recent News</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We specialise in intelligent & effective Search and believes in the power of partnerships to grow business.
          </p>
        </div>

        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* News Image */}
                <div className="relative h-48 bg-gray-200">
                  <img
                    src="cleaning.jpg"
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-cyan-500 text-white rounded px-4 py-2 text-center">
                    <div className="text-xl font-bold">{item.date.day}</div>
                    <div className="text-sm">{item.date.month}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-cyan-500 text-sm mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold text-cyan-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <img
                      src={item.author.image}
                      alt={item.author.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-cyan-900">{item.author.name}</div>
                      <div className="text-sm text-gray-500">{item.author.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsAndNews;
