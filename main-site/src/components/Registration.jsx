import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Building, Phone, Globe, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    company: '',
    mobile: '',
    email: '',
    website: '',
    agreeToPolicy: false
  });

  const [focusedField, setFocusedField] = useState('');

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

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    // Handle form submission here
  };

  const FormField = ({ icon: Icon, label, field, type = "text", required = true }) => (
    <div className="relative">
      <div className={`relative transition-all duration-300 ${
        focusedField === field ? 'transform scale-105' : ''
      }`}>
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
          <Icon className={`w-5 h-5 transition-colors duration-300 ${
            focusedField === field ? 'text-purple-400' : 'text-gray-500'
          }`} />
        </div>
        <input
          type={type}
          placeholder={label}
          value={formData[field]}
          onChange={(e) => handleInputChange(field, e.target.value)}
          onFocus={() => setFocusedField(field)}
          onBlur={() => setFocusedField('')}
          className={`w-full pl-12 pr-4 py-4 bg-white bg-opacity-10 backdrop-blur-sm border-2 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:scale-105 ${
            focusedField === field 
              ? 'border-purple-400 bg-opacity-20 shadow-lg shadow-purple-500/20' 
              : 'border-white border-opacity-20 hover:border-opacity-30'
          }`}
          required={required}
        />
        {formData[field] && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="register" className="bg-black py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Register Now
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#8B5F8C] to-purple-400 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-6 text-lg">
              Join us for an unforgettable experience at the forefront of banking innovation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Image */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-[500px] rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src="/Reg@2x-8.png"
                    alt="Registration"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Registration Form */}
            <motion.div
              variants={itemVariants}
              className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField icon={User} label="First Name" field="firstName" />
                  <FormField icon={User} label="Last Name" field="lastName" />
                </div>

                <FormField icon={Building} label="Job Title" field="jobTitle" />
                <FormField icon={Building} label="Company" field="company" />
                <FormField icon={Phone} label="Mobile Number" field="mobile" type="tel" />
                <FormField icon={Mail} label="Email Address" field="email" type="email" />
                <FormField icon={Globe} label="Company Website URL" field="website" type="url" required={false} />

                {/* Privacy Policy Checkbox */}
                <motion.div variants={itemVariants} className="flex items-start gap-4 p-4 bg-white bg-opacity-5 backdrop-blur-sm rounded-lg border border-white border-opacity-10">
                  <input
                    type="checkbox"
                    id="privacy-policy"
                    checked={formData.agreeToPolicy}
                    onChange={(e) => handleInputChange('agreeToPolicy', e.target.checked)}
                    className="mt-1 w-4 h-4 text-purple-600 bg-transparent border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label htmlFor="privacy-policy" className="text-sm text-gray-300 leading-relaxed">
                    By filling out the registration form to attend our event, you agree and consent to{' '}
                    <a href="#" className="text-purple-400 hover:text-purple-300 underline">
                      Cogent Solutions Privacy Policy
                    </a>
                    .
                  </label>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={!formData.agreeToPolicy}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    formData.agreeToPolicy 
                      ? 'bg-gradient-to-r from-[#8B5F8C] to-purple-600 hover:from-purple-600 hover:to-[#8B5F8C] text-white shadow-lg hover:shadow-2xl hover:shadow-purple-500/25' 
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Register
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Registration;