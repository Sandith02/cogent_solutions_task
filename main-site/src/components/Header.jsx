import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-2 lg:top-4 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-20">
         
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img
              src="/cogent-logo-01.png"
              alt="Cogent Solutions"
              className="h-10 lg:h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block flex-1 ml-8">
            <div
              className="rounded-r-full px-20 py-3"
              style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(71, 25, 73, 0.3) 20%, #471949 40%, #8B5F8C 100%)' }}
            >
              <div className="flex items-center justify-end space-x-12 pr-8">
                <a
                  href="#overview"
                  className="text-white text-lg font-medium hover:text-purple-200 transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  Event Overview
                </a>
                <a
                  href="#agenda"
                  className="text-white text-lg font-medium hover:text-purple-200 transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  Agenda
                </a>
                <a
                  href="#register"
                  className="text-white text-lg font-medium hover:text-purple-200 transition-all duration-300 hover:scale-105 whitespace-nowrap px-4 py-2 rounded-full hover:bg-white hover:bg-opacity-20"
                >
                  Register
                </a>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:text-purple-200 transition-colors rounded-md hover:bg-white hover:bg-opacity-10"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-4 space-y-2">
              <div
                className="rounded-xl p-6 shadow-lg backdrop-blur-sm"
                style={{ background: 'linear-gradient(90deg, #471949 0%, #8B5F8C 100%)' }}
              >
                <div className="flex flex-col space-y-4">
                  <a
                    href="#overview"
                    className="text-white text-lg font-medium hover:text-purple-200 transition-colors py-2 border-b border-white border-opacity-20 last:border-b-0"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Event Overview
                  </a>
                  <a
                    href="#agenda"
                    className="text-white text-lg font-medium hover:text-purple-200 transition-colors py-2 border-b border-white border-opacity-20 last:border-b-0"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Agenda
                  </a>
                  <a
                    href="#register"
                    className="text-white text-lg font-medium hover:text-purple-200 transition-colors py-3 bg-white bg-opacity-20 rounded-lg text-center hover:bg-opacity-30"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;