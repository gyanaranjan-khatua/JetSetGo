import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaStore,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Import your images
 // Example image

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 lg:grid-col-4 gap-10">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-2">About us</h3>
          <div className="w-20 h-[2px] bg-gradient-to-r from-red-500 mb-4"></div>
         <p className="text-sm leading-relaxed text-gray-300">
  <strong>JetSetGo</strong> is a{" "}
  <strong>leading travel agency offering customized tour packages across India and beyond</strong>. Our mission
  is to provide <strong>affordable, reliable, and seamless travel experiences</strong> for all types of travelers. 
  Contact us to plan your next <strong>adventure, honeymoon, family vacation, or corporate trip</strong> with ease and confidence.
</p>

          <div className="w-20 h-[2px] bg-gradient-to-r from-red-500 mb-4"></div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-5 py-2 rounded hover:bg-lime-700 transition"
          >
            Latest Blogs <FaExternalLinkAlt className="w-4 h-4" />
          </Link>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-2">Services</h3>
          <div className="w-20 h-[2px] bg-gradient-to-r from-red-500 mb-4"></div>
          <ul className="space-y-2 text-gray-300 text-sm">
             <li>
              <Link to="/" className="hover:text-white">
               Air Ticket
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Passport Assistance
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Visa Assistance
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Hotel Booking
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
               Forex Assistance
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Travel Insurance
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Car Rental
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Destination Wedding 
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                MICE
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <div className="w-20 h-[2px] bg-gradient-to-r from-red-500 mb-4"></div>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
             <li>
              <Link to="/CarPage" className="hover:text-white">
              Cars
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Network */}
        <div>
          <h3 className="text-xl font-bold mb-2">Social Network</h3>
          <div className="w-20 h-[2px] bg-gradient-to-r from-red-500 mb-4"></div>
          <div className="flex gap-3 mb-4">
            <a
              href="#"
              className="p-2 bg-gray-800 hover:bg-lime-600 rounded"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 hover:bg-lime-600 rounded"
            >
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-gray-800 hover:bg-lime-600 rounded">
              <FaStore />
            </a>
          </div>
          <p className="text-sm text-white font-semibold">Address:</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            HIG-C/98, HB Colony, Baramunda,
            <br />
            Bhubaneswar
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            {/* Plot No. - 440, Swarnapuri Road, Kanan Vihar Phase - 2 , Patia, Bhubaneswar, Odisha. <br />
              Hello Drive: Pincode- 751024   */}
          </p>
          <p className="text-sm text-white font-semibold">Phone:</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            {/* +918926116060
            <br />
           +919090375666 */}
          </p>
          <p className="text-sm text-white font-semibold">Email:</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            {/* hellodrive60@gmail.com */}
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-3 mb-3 md:mb-0">
            <p>
              Copyright 2025 -{" "}
              <span className="text-white font-semibold">JetSetGo</span>
            </p>
          </div>
          <div className="flex gap-4">
            <Link to="/contact" className="hover:text-white">
              Help & Support
            </Link>
            <span className="text-white">|</span>
            <Link to="/faq" className="hover:text-white">
              FAQs
            </Link>
          </div>
        </div>

        {/* Approved Line with Images */}
        
      </div>
    </footer>
  );
};

export default Footer;
