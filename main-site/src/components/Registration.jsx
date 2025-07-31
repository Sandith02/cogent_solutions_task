import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Building, Phone, Globe, CheckCircle, ArrowRight, Sparkles, AlertCircle, Loader } from 'lucide-react';

// Reusable Input Field Component
const FormField = ({
  icon: Icon,
  label,
  field,
  type = "text",
  required = true,
  value,
  onChange,
  onFocus,
  onBlur,
  focusedField,
  disabled
}) => (
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
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        className={`w-full pl-12 pr-4 py-4 bg-white bg-opacity-10 backdrop-blur-sm border-2 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:scale-105 ${
          focusedField === field 
            ? 'border-purple-400 bg-opacity-20 shadow-lg shadow-purple-500/20' 
            : 'border-white border-opacity-20 hover:border-opacity-30'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        required={required}
      />
      {value && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <CheckCircle className="w-5 h-5 text-green-400" />
        </div>
      )}
    </div>
  </div>
);

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
  const [submitStatus, setSubmitStatus] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (submitStatus) setSubmitStatus('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      const API_URL = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${API_URL}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage(result.message || 'Registration successful! We look forward to seeing you at the event.');
        setFormData({
          firstName: '',
          lastName: '',
          jobTitle: '',
          company: '',
          mobile: '',
          email: '',
          website: '',
          agreeToPolicy: false
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
      console.error('Registration error:', error);
    }

    setTimeout(() => {
      setSubmitStatus('');
      setStatusMessage('');
    }, 8000);
  };

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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="register" className="bg-black py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Register Now</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#8B5F8C] to-purple-400 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-6 text-lg">
              Join us for an unforgettable experience at the forefront of banking innovation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
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
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField icon={User} label="First Name" field="firstName" value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    onFocus={() => setFocusedField('firstName')} onBlur={() => setFocusedField('')}
                    focusedField={focusedField} disabled={submitStatus === 'loading'} />
                  
                  <FormField icon={User} label="Last Name" field="lastName" value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    onFocus={() => setFocusedField('lastName')} onBlur={() => setFocusedField('')}
                    focusedField={focusedField} disabled={submitStatus === 'loading'} />
                </div>

                <FormField icon={Building} label="Job Title" field="jobTitle" value={formData.jobTitle}
                  onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                  onFocus={() => setFocusedField('jobTitle')} onBlur={() => setFocusedField('')}
                  focusedField={focusedField} disabled={submitStatus === 'loading'} />

                <FormField icon={Building} label="Company" field="company" value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  onFocus={() => setFocusedField('company')} onBlur={() => setFocusedField('')}
                  focusedField={focusedField} disabled={submitStatus === 'loading'} />

                <FormField icon={Phone} label="Mobile Number" field="mobile" type="tel" value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                  onFocus={() => setFocusedField('mobile')} onBlur={() => setFocusedField('')}
                  focusedField={focusedField} disabled={submitStatus === 'loading'} />

                <FormField icon={Mail} label="Email Address" field="email" type="email" value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField('')}
                  focusedField={focusedField} disabled={submitStatus === 'loading'} />

                <FormField icon={Globe} label="Company Website URL" field="website" type="url" required={false}
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  onFocus={() => setFocusedField('website')} onBlur={() => setFocusedField('')}
                  focusedField={focusedField} disabled={submitStatus === 'loading'} />

                <motion.div variants={itemVariants} className="flex items-start gap-4 p-4 bg-white bg-opacity-5 backdrop-blur-sm rounded-lg border border-white border-opacity-10">
                  <input
                    type="checkbox"
                    id="privacy-policy"
                    checked={formData.agreeToPolicy}
                    onChange={(e) => handleInputChange('agreeToPolicy', e.target.checked)}
                    disabled={submitStatus === 'loading'}
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

                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl flex items-center gap-3 ${
                      submitStatus === 'success'
                        ? 'bg-green-500 bg-opacity-20 text-green-200 border border-green-500 border-opacity-30'
                        : submitStatus === 'error'
                        ? 'bg-red-500 bg-opacity-20 text-red-200 border border-red-500 border-opacity-30'
                        : 'bg-purple-500 bg-opacity-20 text-purple-200 border border-purple-500 border-opacity-30'
                    }`}
                  >
                    {submitStatus === 'loading' && <Loader className="w-5 h-5 animate-spin" />}
                    {submitStatus === 'success' && <CheckCircle className="w-5 h-5" />}
                    {submitStatus === 'error' && <AlertCircle className="w-5 h-5" />}
                    <span className="text-sm">{statusMessage}</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={!formData.agreeToPolicy || submitStatus === 'loading'}
                  whileHover={!formData.agreeToPolicy || submitStatus === 'loading' ? {} : { scale: 1.05 }}
                  whileTap={!formData.agreeToPolicy || submitStatus === 'loading' ? {} : { scale: 0.95 }}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    formData.agreeToPolicy && submitStatus !== 'loading'
                      ? 'bg-gradient-to-r from-[#8B5F8C] to-purple-600 hover:from-purple-600 hover:to-[#8B5F8C] text-white shadow-lg hover:shadow-2xl hover:shadow-purple-500/25'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {submitStatus === 'loading' ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Registering...
                    </>
                  ) : (
                    <>
                      Register
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
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
