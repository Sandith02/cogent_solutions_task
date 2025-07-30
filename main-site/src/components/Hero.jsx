import React from 'react';
import { Calendar, Clock, MapPin, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const headingVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="h-screen bg-gradient-to-b from-[#471949] via-[#010101] to-black flex items-center relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          variants={pulseVariants}
          animate="pulse"
          className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full"
        />
        <motion.div
          variants={pulseVariants}
          animate="pulse"
          transition={{ delay: 1 }}
          className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full"
        />
        <motion.div
          variants={pulseVariants}
          animate="pulse"
          transition={{ delay: 0.5 }}
          className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-white rounded-full"
        />
        <motion.div
          variants={pulseVariants}
          animate="pulse"
          transition={{ delay: 0.7 }}
          className="absolute top-60 left-1/3 w-1 h-1 bg-purple-300 rounded-full"
        />
      </div>

      {/* Match Header's max-width and padding structure */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-16">
            {/* Main Heading with animations */}
            <div className="text-white">
              <motion.h1
                variants={headingVariants}
                className="text-4xl md:text-5xl lg:text-4xl font-regular leading-tight mb-2"
              >
                Reimagine Banking:
              </motion.h1>
              <motion.h2
                variants={headingVariants}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-nowrap"
              >
                <motion.span
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: "100% 50%" }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear"
                  }}
                  className="bg-gradient-to-r from-white via-purple-100 via-pink-200 to-white bg-clip-text text-transparent bg-[length:200%_auto]"
                >
                  Adapt. Evolve. Thrive.
                </motion.span>
              </motion.h2>
              {/* Animated accent line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                className="h-1 bg-gradient-to-r from-[#8B5F8C] to-purple-400 mt-6 rounded-full"
              />
            </div>

            {/* Event Details with staggered animations */}
            <motion.div
              variants={containerVariants}
              className="text-white text-lg md:text-xl space-y-6"
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-2 bg-[#8B5F8C] bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-all duration-300"
                >
                  <Calendar className="w-6 h-6 text-[#8B5F8C] flex-shrink-0" />
                </motion.div>
                <div>
                  <span className="font-light text-gray-300">Date: </span>
                  <span className="font-medium">9th April 2025</span>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-2 bg-[#8B5F8C] bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-all duration-300"
                >
                  <Clock className="w-6 h-6 text-[#8B5F8C] flex-shrink-0" />
                </motion.div>
                <div>
                  <span className="font-light text-gray-300">Time: </span>
                  <span className="font-medium">9:30 AM - 2:00 PM GMT+2</span>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-2 bg-[#8B5F8C] bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-all duration-300"
                >
                  <MapPin className="w-6 h-6 text-[#8B5F8C] flex-shrink-0" />
                </motion.div>
                <div className="font-medium">
                  The Nile Ritz-Carlton, Cairo, Egypt
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Animated Image */}
          <motion.div
            variants={imageVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-[580px] h-[300px] md:h-[380px] rounded-rt-[60px] overflow-hidden shadow-2xl relative"
              >
                <img
                  src="/Finastra-UB-Egypt-Event-Overview SMALL.jpg"
                  alt="Banking professionals in meeting"
                  className="w-full h-full object-cover"
                />
                {/* Animated gradient overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                />
              </motion.div>
              {/* Floating decorative element */}
              <motion.div
                variants={floatVariants}
                animate="float"
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#8B5F8C] to-purple-600 rounded-full opacity-30 blur-xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Finastra Branding */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-0 right-0 text-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 1.7 }}
          className="text-white text-xl md:text-2xl font-normal mb-4"
        >
          Organized By
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.8, ease: "backOut" }}
          className="flex items-center justify-center gap-4 mb-5"
        >
          <motion.img
            src="/Asset 2@4x.webp"
            alt="Finastra Logo"
            className="h-5 md:h-8 lg:h-10 w-auto"
          />
        </motion.div>
      </motion.div>

      {/* Animated Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.5, y: [0, 10, 0] }}
        transition={{ 
          delay: 2.5,
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
};

export default Hero;