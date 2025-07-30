import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Zap, Globe, Shield, Lightbulb, GraduationCap, MessageCircle } from 'lucide-react';

const EventOverview = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="overview" className="bg-black py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Event Overview
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#8B5F8C] to-purple-400 mx-auto rounded-full"></div>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8">
              Join us on <span className="text-white font-semibold">April 9th in Cairo, Egypt</span>, for Finastra's Universal Banking Forum
            </p>
            <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-8">
              "Reimagine Banking: Adapt. Evolve. Thrive."
            </h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                This exclusive event is designed to help you navigate and excel in the rapidly evolving banking landscape. Our forum will bring together business and technology experts, industry leaders, and visionaries to share their insights on the latest trends and challenges in the banking sector.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                You'll gain valuable knowledge on topics such as Generative AI, the impact of volatility, globalization challenges, persistent supply chain issues, recession threats, shifts in competitive dynamics, and evolving regulations. Each session will delve into the implications, challenges, and opportunities these topics present, providing you with practical strategies to leverage the latest technologies and capitalize on emerging opportunities.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                This is a unique chance to learn from the best in the industry, stay ahead of the curve, and connect with fellow retail banking professionals.
              </p>
            </div>
          </motion.div>

          {/* Key Topics Grid - Limited to 6 cards for even layout */}
          <motion.div variants={itemVariants} className="mb-16">
            <h4 className="text-xl font-semibold text-white text-center mb-10">Key Topics & Insights</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300">
                <Zap className="w-8 h-8 text-[#8B5F8C] mb-4" />
                <h5 className="text-white font-medium mb-2">Generative AI</h5>
                <p className="text-gray-400 text-sm">Latest AI innovations transforming banking operations</p>
              </div>
              
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-[#8B5F8C] mb-4" />
                <h5 className="text-white font-medium mb-2">Impact of Volatility</h5>
                <p className="text-gray-400 text-sm">Strategies for navigating market uncertainties</p>
              </div>
              
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300">
                <Globe className="w-8 h-8 text-[#8B5F8C] mb-4" />
                <h5 className="text-white font-medium mb-2">Globalization Challenges</h5>
                <p className="text-gray-400 text-sm">Addressing global market complexities</p>
              </div>
              
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300">
                <Target className="w-8 h-8 text-[#8B5F8C] mb-4" />
                <h5 className="text-white font-medium mb-2">Supply Chain Issues</h5>
                <p className="text-gray-400 text-sm">Solutions for persistent supply chain disruptions</p>
              </div>
              
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300">
                <Users className="w-8 h-8 text-[#8B5F8C] mb-4" />
                <h5 className="text-white font-medium mb-2">Competitive Dynamics</h5>
                <p className="text-gray-400 text-sm">Shifts in market competition and positioning</p>
              </div>
              
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300">
                <Shield className="w-8 h-8 text-[#8B5F8C] mb-4" />
                <h5 className="text-white font-medium mb-2">Evolving Regulations</h5>
                <p className="text-gray-400 text-sm">Understanding changing regulatory landscapes</p>
              </div>
            </div>
          </motion.div>

          {/* Top Reasons Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-gradient-to-r from-[#471949] via-[#6B46A8] to-[#8B5F8C] rounded-3xl p-8 lg:p-12 text-center">
              <h4 className="text-1xl lg:text-2xl xl:text-2xl font-regular leading-tight mb-12 text-white">
                Top Reasons Why This Is The Only Conference You Need To Attend In 2025
              </h4>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="flex flex-col items-center text-center group">
                  <div className="flex-shrink-0 p-3 bg-white bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-all duration-300 mb-4">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="text-lg lg:text-xl font-thin text-white">
                    Learn from industry experts
                  </h5>
                </div>

                <div className="flex flex-col items-center text-center group">
                  <div className="flex-shrink-0 p-3 bg-white bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-all duration-300 mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="text-lg lg:text-xl font-thin text-white">
                    Stay ahead of emerging trends
                  </h5>
                </div>

                <div className="flex flex-col items-center text-center group">
                  <div className="flex-shrink-0 p-3 bg-white bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-all duration-300 mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="text-lg lg:text-xl font-thin text-white">
                    Connect with fellow banking professionals
                  </h5>
                </div>

                <div className="flex flex-col items-center text-center group">
                  <div className="flex-shrink-0 p-3 bg-white bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-all duration-300 mb-4">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="text-lg lg:text-xl font-thin text-white">
                    Enhance your knowledge, skills, and network
                  </h5>
                </div>

                <div className="flex flex-col items-center text-center group">
                  <div className="flex-shrink-0 p-3 bg-white bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-all duration-300 mb-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="text-lg lg:text-xl font-thin text-white">
                    Share your expertise and experience with peers
                  </h5>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-lg text-gray-300 mb-8">
              Don't miss this opportunity to enhance your knowledge, skills, and network in the finance and banking sector.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8B5F8C] to-purple-600 hover:from-purple-600 hover:to-[#8B5F8C] px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              Register Today
            </motion.button>
            <p className="text-sm text-gray-400 mt-4">
              Secure your place at this must-attend event!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventOverview;