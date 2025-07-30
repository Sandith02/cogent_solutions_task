import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Building, Award, X, ChevronRight } from 'lucide-react';

const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const speakers = [
    {
      id: 1,
      name: "Mr. Marwan Abouzeid",
      title: "Principal Solutions Consultant & Customer Value Lead",
      company: "MEA & APAC Finastra",
      image: "/Person 01.jpeg",
      bio: "Marwan Abouzeid is a seasoned professional with over 22 years of experience in the Fintech industry. Currently serving as the Principal Solutions Consultant & Customer Value Lead for MEA and APAC at Finastra, Marwan is known for his strategic consulting, customer relationship management, and business development expertise. His role involves ensuring Finastra adopts the right Go-to-Market strategy for its core banking platform, blending direct strategic customer engagements for both conventional and Islamic banks with complementary marketing and business development activities. Marwan's direct KPIs include C-level engagements such as ideation sessions, strategy formulation, and business case construction. Marwan's career background spans various roles in development, product management, professional services, and presales. He has proven ability in technology consultative selling for financial institutions seeking transformation and innovation. His extensive experience and dedication have made him a key player in the industry, contributing to significant projects and initiatives that drive growth and innovation. Prior to his journey at Finastra Marwan has held multiple roles within the financial industry working for both banking solution providers and financial institutions. Marwan holds an MBA from Manchester Business School and a bachelor's degree in computer science from The American University in Cairo."
    },
    {
      id: 2,
      name: "Ms. Siobhan Byron",
      title: "Executive Vice President",
      company: "Universal Banking Finastra",
      image: "/Person 01.jpeg"
    },
    {
      id: 3,
      name: "Mr. Rudy Kawmi",
      title: "Managing Director - Middle East, Africa & Asia-Pacific",
      company: "Finastra Universal Banking",
      image: "/Person 01.jpeg"
    },
    {
      id: 4,
      name: "Mr. Narendra Mistry",
      title: "Chief Product and Technology Officer",
      company: "Universal Banking Finastra",
      image: "/Person 01.jpeg"
    },
    {
      id: 5,
      name: "Mr. Mohamed Elazzazy",
      title: "Head of IT Governance and Change Management",
      company: "Al-Baraka Bank Egypt",
      image: "/Person 01.jpeg"
    },
    {
      id: 6,
      name: "Mr. Shehab Moustafa",
      title: "Country Center of Excellence Director",
      company: "Money Fellows",
      image: "/Person 01.jpeg"
    },
    {
      id: 7,
      name: "Mr. Karim El Mourabet",
      title: "Solution Consulting Director - MEA",
      company: "Finastra",
      image: "/Person 01.jpeg"
    },
    {
      id: 8,
      name: "Mr. Ahmed Hamdy Bahey El Din",
      title: "Head of Information Technology",
      company: "Incolease",
      image: "/Person 01.jpeg"
    },
    {
      id: 9,
      name: "Mr. Emad Shawky Habib Hanna",
      title: "Chief Data and Analytics Officer",
      company: "Banque Misr",
      image: "/Person 01.jpeg"
    },
    {
      id: 10,
      name: "Ms. Heba Yehia",
      title: "Head of Digital Products",
      company: "Arab African International Bank",
      image: "/Person 01.jpeg"
    },
    {
      id: 11,
      name: "Mr. Hamid Nirouzad",
      title: "Managing Director - Africa",
      company: "Finastra Universal",
      image: "/Person 01.jpeg"
    },
    {
      id: 12,
      name: "Mr. Matthew Hughes",
      title: "Head of FS&I, International Markets",
      company: "Atos",
      image: "/Person 01.jpeg"
    },
    {
      id: 13,
      name: "Mr. Daragh O'Byrne",
      title: "Senior Director, Marketing",
      company: "Universal Banking, Finastra",
      image: "/Person 01.jpeg"
    },
    {
      id: 14,
      name: "Dr. Ismail Ali",
      title: "Co-Founder and CEO",
      company: "CARITech",
      image: "/Person 01.jpeg"
    },
    {
      id: 15,
      name: "Ms. Riham Muhammad",
      title: "Corporate CEX Senior Analyst",
      company: "FABMISR",
      image: "/Person 01.jpeg"
    }
  ];

  const getSpeakerTypeColor = (type) => {
    switch (type) {
      case 'keynote': return 'from-purple-500 to-pink-500';
      case 'panel': return 'from-[#8B5F8C] to-purple-600';
      case 'presentation': return 'from-indigo-500 to-purple-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getSpeakerTypeIcon = (type) => {
    switch (type) {
      case 'keynote': return <Award className="w-4 h-4" />;
      case 'panel': return <User className="w-4 h-4" />;
      case 'presentation': return <Building className="w-4 h-4" />;
      default: return <User className="w-4 h-4" />;
    }
  };

  const SpeakerCard = ({ speaker }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group cursor-pointer"
      onClick={() => {
        if (speaker.bio) {
          setSelectedSpeaker(speaker);
        }
      }}
    >
      <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300 h-full">
        {/* Speaker Image */}
        <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gray-600">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Speaker Info */}
        <div className="text-center">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
            {speaker.name}
          </h3>
          <p className="text-sm text-gray-300 mb-2">
            {speaker.title}
          </p>
          <p className="text-xs text-gray-400">
            {speaker.company}
          </p>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
        
        {/* Read More Indicator - Only show if bio exists */}
        {speaker.bio && (
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-purple-500 text-white p-2 rounded-full">
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <section className="bg-black py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Speakers
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#8B5F8C] to-purple-400 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-6 text-lg">
              Meet the industry leaders who will share their expertise
            </p>
          </motion.div>

          {/* All Speakers Grid */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {speakers.map(speaker => (
                <SpeakerCard key={speaker.id} speaker={speaker} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Speaker Bio Modal */}
      <AnimatePresence>
        {selectedSpeaker && selectedSpeaker.bio && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedSpeaker(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-white border-opacity-20 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Speaker Info */}
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-600">
                  <img
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{selectedSpeaker.name}</h3>
                <p className="text-lg text-gray-300 mb-2">{selectedSpeaker.title}</p>
                <p className="text-gray-400">{selectedSpeaker.company}</p>
              </div>

              {/* Bio */}
              <div className="text-gray-300 leading-relaxed">
                <h4 className="text-white font-semibold mb-3">Biography</h4>
                <p>{selectedSpeaker.bio}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Speakers;