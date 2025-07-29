// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaTwitter, FaGlobe, FaPlaneDeparture } from 'react-icons/fa';

const socialIcons = [
  { icon: <FaInstagram />, link: '#' },
  { icon: <FaFacebook />, link: '#' },
  { icon: <FaTwitter />, link: '#' },
  { icon: <FaGlobe />, link: '#' },
];

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-zinc-900 via-slate-900 to-red-900 text-gray-300 overflow-hidden ">
      {/* Glass effect + overlay blur */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/20 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
      >
        {/* Logo + Tagline */}
        <div>
          <h2 className="text-3xl font-extrabold text-white flex items-center gap-2">
            <FaPlaneDeparture className="text-red-500" />
            TravelXplore
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Your journey begins here. Custom tours, exotic destinations, and world-class service.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Explore</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "Destinations", "Packages", "About Us", "Contact"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-red-500 transition duration-300">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
          <ul className="space-y-2 text-sm">
            {["Flight Booking", "Hotel Deals", "Tour Packages", "Visa Assistance"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-red-500 transition duration-300">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex gap-5 mt-2">
            {socialIcons.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                whileHover={{ scale: 1.3, color: '#ef4444' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="text-xl text-gray-400 hover:text-red-500 transition duration-300"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <div className="relative z-10 border-t border-gray-700 text-center text-sm text-gray-500 py-5">
        © {new Date().getFullYear()} TravelXplore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
