import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import { IoPhonePortrait } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Footer Top: Contact Info & Social Media */}
        <div className="flex flex-wrap justify-between gap-6 mb-6 flex-col md:flex-row">
          <div className="flex flex-col text-xl gap-4 max-w-xs">
            {/* Email */}
            <a href="mailto:gcwcentre@gmail.com" className="flex items-center">
              <MdEmail className="mr-2 text-green-500" />
              gcwcentre@gmail.com
            </a>
            {/* Phone Numbers */}
            <a href="tel:+919501032237" className="flex items-center">
              <IoCall className="mr-2 text-green-500" />
              +91 95010 32237
            </a>
            <a href="tel:01814100804" className="flex items-center">
              <IoPhonePortrait className="mr-2 text-green-500" />
              01814100804
            </a>
            {/* Address */}
            <a href="https://maps.app.goo.gl/9wrYK7u3tLfTFJeg8" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-green-500" />
              127 I-Block, Sarabha Nagar, Ludhiana
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6 text-xl mt-4 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-blue-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-blue-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-600" />
            </a>
          </div>
        </div>

        {/* Footer Bottom: Navigation Links */}
        <div className="flex flex-wrap justify-between gap-6">
          <div className="flex gap-6 flex-wrap justify-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-green-500 font-semibold' : 'text-white'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-green-500 font-semibold' : 'text-white'
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/facilities"
              className={({ isActive }) =>
                isActive ? 'text-green-500 font-semibold' : 'text-white'
              }
            >
              Facilities
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? 'text-green-500 font-semibold' : 'text-white'
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-green-500 font-semibold' : 'text-white'
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/branches"
              className={({ isActive }) =>
                isActive ? 'text-green-500 font-semibold' : 'text-white'
              }
            >
              Our Branches
            </NavLink>
          </div>

          {/* Logo */}
          <div className="flex justify-center max-w-[200px] mt-4 md:mt-0">
            <a href="/">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8e4dce1e421474c148d18c0bb83f0ff210294e3f893e14ebcb53d6565c68eb70?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22"
                alt="Logo"
                className="object-contain max-w-full w-[150px] mx-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;