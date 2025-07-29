"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/jetsetgologo.jpeg"; // Replace with your logo

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto  flex items-center justify-between px-4 py-3 md:py-5 lg:py-6">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 w-15" />
          </Link>
        </div>

        {/* Center: Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
          <li><Link to="/blog" className="hover:text-blue-600">Blogs</Link></li>
          <li><Link to="/gallery" className="hover:text-blue-600">Gallery</Link></li>
          <li><Link to="/faq" className="hover:text-blue-600">Faq</Link></li>
        </ul>

        {/* Right: Button & Mobile Menu Icon */}
        <div className="flex items-center gap-4">
          {/* Desktop Get Started Button */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition hidden md:inline-block">
            Get Started
          </button>

          {/* Mobile Hamburger Icon */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Full Screen Slide-In) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 bg-white p-6 flex flex-col md:hidden"
          >
            <div className="flex justify-between items-center mb-6">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
              <button onClick={() => setMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>

            <ul className="flex flex-col gap-6 text-lg text-gray-700 font-medium">
              <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
              <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
              <li><Link to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link></li>
              <li>
                <button
                  className="mt-6 bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Started
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
