import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User, Users, Coffee, Utensils, Mic, MessageSquare } from 'lucide-react';

const Agenda = () => {
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
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getSessionIcon = (type) => {
    switch (type) {
      case 'registration': return <Coffee className="w-5 h-5" />;
      case 'keynote': return <Mic className="w-5 h-5" />;
      case 'panel': return <Users className="w-5 h-5" />;
      case 'break': return <Coffee className="w-5 h-5" />;
      case 'lunch': return <Utensils className="w-5 h-5" />;
      case 'presentation': return <User className="w-5 h-5" />;
      default: return <MessageSquare className="w-5 h-5" />;
    }
  };

  const getSessionColor = (type) => {
    switch (type) {
      case 'registration': return 'from-blue-500 to-blue-600';
      case 'keynote': return 'from-purple-500 to-pink-500';
      case 'panel': return 'from-[#8B5F8C] to-purple-600';
      case 'break': return 'from-green-500 to-emerald-600';
      case 'lunch': return 'from-orange-500 to-red-500';
      case 'presentation': return 'from-indigo-500 to-purple-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const agendaItems = [
    {
      time: "09:30 AM",
      type: "registration",
      title: "Registration & Welcome Coffee",
      speaker: null
    },
    {
      time: "10:00 AM",
      type: "keynote",
      title: "Opening Remarks",
      speaker: "Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking"
    },
    {
      time: "10:10 AM",
      type: "keynote",
      title: "Keynote session: Digital Transformation in a Gen AI World",
      speaker: "Ms. Siobhan Byron, Executive Vice President, Finastra Universal Banking"
    },
    {
      time: "10:30 AM",
      type: "presentation",
      title: "Decoding the Future - Transformation: The Opportunity & Time is Now",
      speaker: "Mr. Daragh O'Byrne, Senior Director, Marketing, Universal Banking, Finastra"
    },
    {
      time: "11:00 AM",
      type: "panel",
      title: "Panel Discussion: Customer Acquisition - Gaining New Customers in a Hyper Competitive World",
      speaker: "Hamid Nirouzad, Managing Director - Africa, Finastra Universal Banking | Ahmad Hamdy, Head of Information Technology, International Company for Leasing S.A.E. | Ms. Riham Ismail Kassem Muhammad, Corporate & Supporting Functions CEX Senior, FABMISR"
    },
    {
      time: "11:30 AM",
      type: "panel",
      title: "Panel Discussion: Customer Retention - Keeping Customers When Loyalty Is Dead",
      speaker: "Karim El Mourabet, Solution Consulting Director - Middle East & Africa, Finastra Universal Banking | Heba Yehia, Head of Digital Products, Arab African International Bank | Ismail Ali, Co-Founder and CEO of CARITech | Mohamed Elazzazy, Head of IT Governance and Change Management, Al-Baraka Bank Egypt"
    },
    {
      time: "12:00 PM",
      type: "break",
      title: "Coffee Break & Networking",
      speaker: null
    },
    {
      time: "12:30 PM",
      type: "panel",
      title: "Panel Discussion: Cost to Serve: Deliver Customer Delight",
      speaker: "Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking | Shehab Moustafa, Country Center of Excellence Director, Money Fellows | Matthew Hughes, Head of FS&I, International Markets, Atos | Emad Shawky Habib Hanna, Chief Data and Analytics Officer, Banque Misr"
    },
    {
      time: "01:00 PM",
      type: "presentation",
      title: "The Essential Elements: What do you need to be \"all things to all people\"?",
      speaker: "Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking"
    },
    {
      time: "01:30 PM",
      type: "presentation",
      title: "Making the case for change: The Question is How",
      speaker: "Marwan Abouzeid, Principal Solutions Consultant & Customer Value Lead, MEA & APAC, Finastra Universal Banking"
    },
    {
      time: "01:50 PM",
      type: "keynote",
      title: "Closing Remarks",
      speaker: "Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking"
    },
    {
      time: "02:00 PM",
      type: "lunch",
      title: "Lunch",
      speaker: null
    }
  ];

  return (
    <section id="agenda" className="bg-black py-10 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Agenda
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#8B5F8C] to-purple-400 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-6 text-lg">
              A comprehensive day of insights, networking, and innovation
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-24 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8B5F8C] via-purple-500 to-pink-500"></div>

            {/* Agenda Items */}
            <div className="space-y-8">
              {agendaItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start gap-6 md:gap-8"
                >
                  {/* Time Badge */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className={`bg-gradient-to-r ${getSessionColor(item.type)} text-white px-4 py-2 rounded-full font-semibold text-sm md:text-base min-w-[100px] text-center shadow-lg`}>
                      {item.time}
                    </div>
                    {/* Timeline dot */}
                    <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-8">
                      <div className={`w-4 h-4 bg-gradient-to-r ${getSessionColor(item.type)} rounded-full shadow-lg`}></div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      {/* Session Icon */}
                      <div className={`flex-shrink-0 p-2 bg-gradient-to-r ${getSessionColor(item.type)} text-white rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        {getSessionIcon(item.type)}
                      </div>

                      {/* Session Details */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-purple-200 transition-colors duration-300">
                            {item.title}
                          </h3>
                          {/* Session Type Badge - Inline with title */}
                          <span className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${getSessionColor(item.type)} text-white text-xs font-medium rounded-full opacity-80 ml-4 flex-shrink-0`}>
                            {getSessionIcon(item.type)}
                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                          </span>
                        </div>
                        {item.speaker && (
                          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            {item.speaker}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="text-gray-300 mb-6 text-lg">
              Ready to join us for this incredible day?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8B5F8C] to-purple-600 hover:from-purple-600 hover:to-[#8B5F8C] px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <Clock className="w-5 h-5" />
              Reserve Your Spot
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Agenda;