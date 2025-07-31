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
    <section className="min-h-screen pt-20 bg-gradient-to-b from-[#471949] via-[#010101] to-black flex items-center relative overflow-hidden py-8">
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
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-8 lg:space-y-12">
            {/* Main Heading with animations */}
            <div className="text-white">
              <motion.h1
                variants={headingVariants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-regular leading-tight mb-2"
              >
                Reimagine Banking:
              </motion.h1>
              {/* Mobile: Two lines, Desktop: One line */}
              <div className="block lg:hidden">
                <motion.h2
                  variants={headingVariants}
                  transition={{ delay: 0.3 }}
                  className="text-3xl sm:text-4xl font-bold leading-tight"
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
                    Adapt. Evolve.
                  </motion.span>
                </motion.h2>
                <motion.h2
                  variants={headingVariants}
                  transition={{ delay: 0.5 }}
                  className="text-3xl sm:text-4xl font-bold leading-tight"
                >
                  <span className="bg-gradient-to-r from-white via-purple-100 via-pink-200 to-white bg-clip-text text-transparent bg-[length:200%_auto]">
                    Thrive.
                  </span>
                </motion.h2>
              </div>
              {/* Desktop: Single line */}
              <motion.h2
                variants={headingVariants}
                transition={{ delay: 0.3 }}
                className="hidden lg:block text-5xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-nowrap"
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
              className="text-white text-base sm:text-lg md:text-xl space-y-4 lg:space-y-6"
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-3 lg:gap-4 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-2 bg-[#8B5F8C] bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 lg:w-6 lg:h-6 text-[#8B5F8C] flex-shrink-0" />
                </motion.div>
                <div>
                  <span className="font-thin">9th April 2025</span>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-3 lg:gap-4 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-2 bg-[#8B5F8C] bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-all duration-300"
                >
                  <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-[#8B5F8C] flex-shrink-0" />
                </motion.div>
                <div>
                  <span className="font-thin">9:30 AM - 2:00 PM GMT+2</span>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-3 lg:gap-4 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-2 bg-[#8B5F8C] bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-all duration-300"
                >
                  <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-[#8B5F8C] flex-shrink-0" />
                </motion.div>
                <div className="font-thin">
                  The Nile Ritz-Carlton, Cairo, Egypt
                </div>
              </motion.div>
            </motion.div>

            {/* Organized By Section - Now on Left */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-left pt-4 md:pt-8 lg:pt-40"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ delay: 1.7 }}
                className="text-white text-lg sm:text-xl md:text-2xl font-normal mb-4"
              >
                Organized By
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.9, duration: 0.8, ease: "backOut" }}
                className="flex items-center justify-start gap-4"
              >
                <motion.img
                  src="/Asset 2@4x.webp"
                  alt="Finastra Logo"
                  className="h-4 sm:h-5 md:h-8 lg:h-10 w-auto"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Image (desktop only) and About Section */}
          <div className="space-y-6 lg:space-y-8">
            {/* Animated Image - Desktop only */}
            <motion.div
              variants={imageVariants}
              className="hidden lg:flex justify-end"
            >
              <div className="relative group">
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-[580px] h-[380px] rounded-[60px] overflow-hidden shadow-2xl relative"
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

            {/* About Finastra Section - Visible on all screens */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="text-white max-w-[580px] mx-auto lg:mx-0"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
                className="text-lg sm:text-xl md:text-2xl font-regular mb-3 lg:mb-4 text-white"
              >
                About Finastra
              </motion.h3>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ delay: 2.4 }}
                className="text-gray-300 text-sm sm:text-base font-light leading-relaxed space-y-3 lg:space-y-4"
              >
                <p>
                  Finastra is a global provider of financial services software applications 
                  across Lending, Payments, Treasury and Capital Markets, and Universal 
                  (retail and digital) Banking. Committed to unlocking the potential of 
                  people, businesses and communities everywhere, its vision is to 
                  accelerate the future of Open Finance through technology and 
                  collaboration, and its pioneering approach is why it is trusted by 
                  ~8,100 financial institutions, including 45 of the world's top 50 banks.
                </p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.6 }}
                  className="text-purple-300"
                >
                  For more information, visit www.finastra.com.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

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
        <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5" />
      </motion.div>
    </section>
  );
};

export default Hero;