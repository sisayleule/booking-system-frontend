// Footer component
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-4">BookIt</h3>
            <p className="text-gray-400">
              Your trusted online booking platform. Schedule appointments quickly and easily.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/book"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link
                  to="/admin"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">Email: info@bookit.com</p>
            <p className="text-gray-400">Phone: (555) 123-4567</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BookIt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



