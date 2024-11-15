import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import { IoPhonePortrait } from 'react-icons/io5';

const Navbar = () => {
  return (
    <div className="flex fixed z-50 overflow-hidden flex-col pb-6 w-full text-xl font-medium bg-white max-md:max-w-full">
      <div className="flex flex-wrap gap-5 h-16 items-center justify-between pl-20 w-full text-white bg-blue-700 max-md:pl-5 max-md:max-w-full max-sm:flex max-sm:flex-row max-sm:mx-auto max-sm:h-[49.5px] max-sm:w-[101%]">
        <div className="flex flex-wrap gap-10 my-auto max-md:max-w-full max-sm:flex max-sm:flex-row max-sm:mx-auto max-sm:w-[723px]">
          <div className="basis-auto max-sm:mr-auto max-sm:text-base">
            <a
              href="tel:+919501032237"
              className="flex items-center hover:text-green-600 hover:underline transition-all duration-300"
            >
              <IoCall className="mr-2" />
              +91 95010 32237
            </a>
          </div>
          <div className="basis-auto">
            <a
              href="mailto:gcwcentre@gmail.com"
              className="flex items-center hover:text-green-600 hover:underline transition-all duration-300"
            >
              <MdEmail className="mr-2" />
              gcwcentre@gmail.com
            </a>
          </div>
          <div className="basis-auto max-sm:mx-auto max-sm:text-base max-sm:text-center">
            <a
              href="tel:01814100804"
              className="flex items-center hover:text-green-600 hover:underline transition-all duration-300"
            >
              <IoPhonePortrait className="mr-2" />
              01814100804
            </a>
          </div>
        </div>
        <div className="flex gap-3 px-6 py-4 h-16 bg-green-600 max-md:px-5 max-sm:hidden max-sm:pl-16 max-sm:mx-auto">
          <div className="flex-auto">
            <a
              href="https://maps.app.goo.gl/9wrYK7u3tLfTFJeg8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-600 hover:underline transition-all duration-300"
            >
              <FaMapMarkerAlt className="mr-2" />
              127 I-Block, Sarabha Nagar, Ludhiana
            </a>
          </div>
        </div>
      </div>

      <div className="flex px-16 h-10 flex-wrap gap-5 justify-between self-center mt-6 w-full text-sky-900 max-w-[1670px] max-md:max-w-full">
        <a href="/">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8e4dce1e421474c148d18c0bb83f0ff210294e3f893e14ebcb53d6565c68eb70?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22"
            className="object-contain shrink-0 max-w-full aspect-[3.85] w-[230px] max-sm:mx-auto max-sm:w-[160px]"
            alt="Logo"
          />
        </a>

        <div className="flex flex-wrap gap-10 my-auto max-md:max-w-full max-sm:hidden max-sm:mr-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300'
                : 'text-sky-900 hover:text-blue-600 transition-all duration-300'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300'
                : 'text-sky-900 hover:text-blue-600 transition-all duration-300'
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/facilities"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300'
                : 'text-sky-900 hover:text-blue-600 transition-all duration-300'
            }
          >
            Facilities
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300'
                : 'text-sky-900 hover:text-blue-600 transition-all duration-300'
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300'
                : 'text-sky-900 hover:text-blue-600 transition-all duration-300'
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/branches"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300'
                : 'text-sky-900 hover:text-blue-600 transition-all duration-300'
            }
          >
            Our Branches
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
