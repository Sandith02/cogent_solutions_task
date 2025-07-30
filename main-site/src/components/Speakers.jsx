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
      image: "/Mr. Marwan Abouzeid.jpg",
      bio: "Marwan Abouzeid is a seasoned professional with over 22 years of experience in the Fintech industry. Currently serving as the Principal Solutions Consultant & Customer Value Lead for MEA and APAC at Finastra, Marwan is known for his strategic consulting, customer relationship management, and business development expertise. His role involves ensuring Finastra adopts the right Go-to-Market strategy for its core banking platform, blending direct strategic customer engagements for both conventional and Islamic banks with complementary marketing and business development activities. Marwan's direct KPIs include C-level engagements such as ideation sessions, strategy formulation, and business case construction. Marwan's career background spans various roles in development, product management, professional services, and presales. He has proven ability in technology consultative selling for financial institutions seeking transformation and innovation. His extensive experience and dedication have made him a key player in the industry, contributing to significant projects and initiatives that drive growth and innovation. Prior to his journey at Finastra Marwan has held multiple roles within the financial industry working for both banking solution providers and financial institutions. Marwan holds an MBA from Manchester Business School and a bachelor's degree in computer science from The American University in Cairo."
    },
    {
      id: 2,
      name: "Ms. Siobhan Byron",
      title: "Executive Vice President",
      company: "Universal Banking Finastra",
      image: "/Ms. Siobhan Byron.jpg",
      bio:"Siobhan oversees Universal Banking, including market leading core banking and digital solutions globally. She has more than 25 years of experience in IT and channel management, as well as leading and growing prominent technology companies across financial services, insurance, manufacturing, and public sectors. Siobhan is a strong advocate for diversity and inclusion. She is the Executive Sponsor for the company’s LGBTQ+ and Friends initiatives and supports Women@Finastra. Based in Canada, Siobhan enjoys spending down time with her family and friends, travelling, reading, and watching her son play hockey. "
    },
    {
      id: 3,
      name: "Mr. Rudy Kawmi",
      title: "Managing Director - Middle East, Africa & Asia-Pacific",
      company: "Finastra Universal Banking",
      image: "/Mr. Rudy Kawmi.jpg",
      bio: " Rudy Kawmi oversees the Retail Banking business across the Middle East, Africa, and Asia-Pacific regions at Finastra. With a career dedicated to financial technology, Rudy has collaborated with banks on numerous digital transformation initiatives. As a proponent of innovative business models that promote financial inclusion, he is passionate about establishing fintech partnerships across these regions to drive innovation and expand access to next-generation banking systems. "
    },
    {
      id: 4,
      name: "Mr. Narendra Mistry",
      title: "Chief Product and Technology Officer",
      company: "Universal Banking Finastra",
      image: "/Mr. Narendra Mistry.jpg",
      bio: " Narendra leads the global product and technology organization for Universal Banking as the Chief Product and Technology Officer (CPTO). Narendra has been in the financial software industry for more than 25 years and his career with Finastra spans more than 13 years in various leadership roles, including running product for International Retail. He has experience building new SaaS businesses in Digital Essence cloud banking, whilst ensuring a robust product and go-to-market strategy. Narendra was instrumental in the very successful Equation N-2 program and the Midas Service Pack program that have made the Midas and Equation business extremely stable over the years. During his time at Finastra, Narendra has built a strong reputation of being a trusted leader who has been central to many successes on our journey. Narendra is based in London. "
    },
    {
      id: 5,
      name: "Mr. Mohamed Elazzazy",
      title: "Head of IT Governance and Change Management",
      company: "Al-Baraka Bank Egypt",
      image: "/Mr. Mohamed Elazzazy.png"
    },
    {
      id: 6,
      name: "Mr. Shehab Moustafa",
      title: "Country Center of Excellence Director",
      company: "Money Fellows",
      image: "/Mr. Shehab Moustafa.jpg"
    },
    {
      id: 7,
      name: "Mr. Karim El Mourabet",
      title: "Solution Consulting Director - MEA",
      company: "Finastra",
      image: "/Mr. Karim El Mourabet.jpg",
      bio: "Karim El Mourabet leads the Retail Banking Solution Consulting team at Finastra, covering Middle East & Africa. He has over 12 years’ experience in retail banking software implementation and consulting and working with Digital Banks. He previously led the Innovation services for Finastra Global Services team and worked on Next Gen implementation services, including core banking migrations. Prior to re-joining Finastra, he was global head of solution consulting at Fidor, working on designing and launching digital banks globally. He holds a Masters of Science in Project Management and a Bachelor’s in Business Administration from the American University of Beirut. "
    },
    {
      id: 8,
      name: "Mr. Ahmed Hamdy Bahey El Din",
      title: "Head of Information Technology",
      company: "Incolease",
      image: "/Mr. Ahmed Hamdy Bahey El Din.jpeg",
      bio:" Ahmed Hamdy is a results-driven IT professional with extensive experience leading IT departments and delivering innovative solutions. As the IT Head at Incolease, he manages all IT operations, ensuring strategic alignment, process optimization, and efficient resource management. With over 18 years of experience, his career highlights include managing complex projects at EFG-HERMES, Corplease, and Atos, focusing on business process automation and efficiency improvements. Ahmed's expertise includes ERP systems, leasing, factoring, and securitization, and he holds certifications in CBAP® and ITIL® Foundation. "
    },
    {
      id: 9,
      name: "Mr. Emad Shawky Habib Hanna",
      title: "Chief Data and Analytics Officer",
      company: "Banque Misr",
      image: "/Mr. Emad Shawky Habib Hanna.jpeg"
    },
    {
      id: 10,
      name: "Ms. Heba Yehia",
      title: "Head of Digital Products",
      company: "Arab African International Bank",
      image: "/Ms. Heba Yehia.jpg"
    },
    {
      id: 11,
      name: "Mr. Hamid Nirouzad",
      title: "Managing Director - Africa",
      company: "Finastra Universal",
      image: "/Mr. Hamid Nirouzad.jpg",
      bio: "Hamid Nirouzad is a seasoned professional in the fintech industry. He began his career at National Westminster Bank in the UK before joining Midas-Kapiti in 1994. Throughout his tenure at Finastra, Hamid has played a pivotal role in various business aspects across Europe and the MEA regions. With a robust background in both retail and corporate banking, he possesses a comprehensive understanding of the banking sector. "
    },
    {
      id: 12,
      name: "Mr. Matthew Hughes",
      title: "Head of FS&I, International Markets",
      company: "Atos",
      image: "/Mr. Matthew Hughes.jpg",
      bio: " Matthew Hughes is a seasoned professional with over 25 years of experience in the financial services and insurance sectors. Matthew worked for 17 years at Royal Bank of Scotland in various leadership roles, including Country Head of Operations in China, Head of Retail and Commercial Banking in China, Head of Core Banking Operations for England and Wales, and Head of Consumer Finance for Spain and Portugal. At Atos, he serves as Global Client Executive Partner and Head of the Financial Services & Insurance Sector for International Markets (covering Middle East, APAC, Latin America, Switzerland, Iberia and South East Europe). In this role, Matthew leads strategic client engagement and initiatives around Platform and/or Mainframe Modernisation and Migrations, Cloud, Cybersecurity and the full range of end-to-end managed services that Atos offers, as well as the management of key client relationships, leveraging his extensive industry expertise to drive business growth and innovation. In 2022, Atos in Asia Pacific announced Matthew's appointment as the Global Client Executive Partner for our largest customer in APAC (Global Bank), underscoring his pivotal role in strengthening the partnership between Atos and the bank. Matthew is based in Singapore and is bilingual in Spanish."
    },
    {
      id: 13,
      name: "Mr. Daragh O'Byrne",
      title: "Senior Director, Marketing",
      company: "Universal Banking, Finastra",
      image: "/Mr. Daragh O'Byrne.JPG",
      bio:"Daragh leads the Finastra Universal Banking marketing team. For more than 25 years he has worked in the Financial Services application software market, focusing on ensuring that software provides tangible business benefits for customers, and that those business benefits are explained in a clear, concise and compelling way via an integrated set of creative marketing activities that generate results. He combines his background in technology with a decade helping banks all over the world translate their vision into implemented reality to position sophisticated banking platforms in terms of the business problems they solve and the opportunities they enable. Daragh focuses on turning strategy into action and turning action into results in a co-ordinated way. A passionate believer in technology's power to transform and enrich, he believes in explaining its benefits in easy to an understand, educational and entertaining way. "
    },
    {
      id: 14,
      name: "Dr. Ismail Ali",
      title: "Co-Founder and CEO",
      company: "CARITech",
      image: "/Dr. Ismail Ali.jpg",
      bio:" Dr. Ismail Ali is the Co-Founder and CEO of CARITech, a digital banking solutions provider supporting financial institutions across the Middle East and Africa. With over 25 years of experience in financial technology, Dr. Ali has led core banking modernization programs for both Islamic and conventional banks—helping them overcome legacy challenges and respond to dynamic market demands. He has held senior positions with leading global technology firms and now leads CARITech’s mission to eliminate technology barriers through structured, standards-driven delivery. CARITech operates in the Americas and is expanding rapidly across MEA, delivering high-quality transformation services using CMMI Level 3-compliant methodologies. Dr. Ali holds a Doctorate in Business Management, an MBA, and is an alumnus of Harvard Business School. He regularly collaborates with banks, regulators, and fintech leaders to enable inclusive, future-ready financial ecosystems."
    },
    {
      id: 15,
      name: "Ms. Riham Muhammad",
      title: "Corporate CEX Senior Analyst",
      company: "FABMISR",
      image: "/Ms. Riham Muhammad.png"
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