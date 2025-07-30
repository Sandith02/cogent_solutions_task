import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-[#010101] to-[#471949] text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-32 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Column - Cogent Solutions */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Cogent Solutions™</h2>
              <p className="text-gray-300 text-base leading-relaxed max-w-md">
                Through our conferences we transform your business challenges into opportunities. 
                Our clients and customers are leading government entities and the fortune 500 companies.
              </p>
            </div>

            {/* Awards Section */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Awards</h3>
              <div className="flex flex-wrap gap-4">
                <img
                  src="/1fi.png"
                  alt="Best Workplaces Award 1"
                  className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/2f1.png"
                  alt="Best Workplaces Award 2"
                  className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/3fi.png"
                  alt="Best Workplaces Award 3"
                  className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/4fi.png"
                  alt="Best Workplaces Award 4"
                  className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>


          </div>

          {/* Right Column - Office Information */}
          <div className="space-y-1">
            <h2 className="text-2xl font-bold">Our office</h2>
            
            <div className="space-y-1">
              {/* Middle East & Africa HQ */}
              <div className="group hover:bg-gray-900 hover:bg-opacity-50 p-4 rounded-lg transition-all duration-300">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-[#8B5F8C] flex-shrink-0 mt-1 group-hover:text-purple-400 transition-colors" />
                  <div>
                    <div className="text-gray-300 font-medium mb-1">Middle East & Africa HQ</div>
                    <div className="text-gray-400 text-sm">Office No: 209, The Metropolis Tower</div>
                    <div className="text-gray-400 text-sm">Business Bay, Dubai, United Arab Emirates</div>
                  </div>
                </div>
              </div>

              {/* Asia Pacific HQ */}
              <div className="group hover:bg-gray-900 hover:bg-opacity-50 p-4 rounded-lg transition-all duration-300">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-[#8B5F8C] flex-shrink-0 mt-1 group-hover:text-purple-400 transition-colors" />
                  <div>
                    <div className="text-gray-300 font-medium mb-1">Asia Pacific HQ</div>
                    <div className="text-gray-400 text-sm">2nd floor Green Lanka Tower, Colombo</div>
                    <div className="text-gray-400 text-sm">Sri Lanka</div>
                  </div>
                </div>
              </div>

              {/* Saudi Arabia HQ */}
              <div className="group hover:bg-gray-900 hover:bg-opacity-50 p-4 rounded-lg transition-all duration-300">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-[#8B5F8C] flex-shrink-0 mt-1 group-hover:text-purple-400 transition-colors" />
                  <div>
                    <div className="text-gray-300 font-medium mb-1">Saudi Arabia HQ</div>
                    <div className="text-gray-400 text-sm">Riyadh, Saudi Arabia</div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 pt-4 border-t border-gray-300">
                <div className="flex items-center gap-3 group hover:text-purple-300 transition-colors cursor-pointer">
                  <Phone className="w-5 h-5 text-[#8B5F8C] group-hover:text-purple-400 transition-colors" />
                  <span className="text-gray-300">+971 4 550 643 5244</span>
                </div>
                
                <div className="flex items-center gap-3 group hover:text-purple-300 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5 text-[#8B5F8C] group-hover:text-purple-400 transition-colors" />
                  <span className="text-gray-300">partnerships@cogentsolutions.ae</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-300 text-sm">
              © 2025 Cogent Solutions Event Management LLC. All Right Reserved
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-[#8B5F8C] transition-colors duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-[#8B5F8C] transition-colors duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-[#8B5F8C] transition-colors duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-[#8B5F8C] transition-colors duration-300 group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;