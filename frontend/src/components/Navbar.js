// Navigation bar component
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            BookIt
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium ${
                location.pathname === '/' ? 'text-blue-600' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/book"
              className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium ${
                location.pathname === '/book' ? 'text-blue-600' : ''
              }`}
            >
              Book Now
            </Link>
            <Link
              to="/admin"
              className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium ${
                location.pathname === '/admin' ? 'text-blue-600' : ''
              }`}
            >
              Admin
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <Link
              to="/"
              className={`block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium ${
                location.pathname === '/' ? 'text-blue-600' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/book"
              className={`block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium ${
                location.pathname === '/book' ? 'text-blue-600' : ''
              }`}
            >
              Book Now
            </Link>
            <Link
              to="/admin"
              className={`block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium ${
                location.pathname === '/admin' ? 'text-blue-600' : ''
              }`}
            >
              Admin
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;



