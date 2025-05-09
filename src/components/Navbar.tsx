'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl text-green-600">GolfClub</span>
          <span className="text-gray-700 text-xl">Rentals</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-green-600">Home</Link>
          <Link href="/browse" className="text-gray-700 hover:text-green-600">Browse Clubs</Link>
          <Link href="/rentals" className="text-gray-700 hover:text-green-600">My Rentals</Link>
          <Link href="/profile" className="flex items-center space-x-2 text-gray-700 hover:text-green-600">
            <FaUser className="h-5 w-5" />
            <span>Profile</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-green-600"
          >
            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pt-2 border-t border-gray-200">
          <div className="flex flex-col space-y-4 px-4">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-green-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/browse" 
              className="text-gray-700 hover:text-green-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Browse Clubs
            </Link>
            <Link 
              href="/rentals" 
              className="text-gray-700 hover:text-green-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              My Rentals
            </Link>
            <Link 
              href="/profile" 
              className="flex items-center space-x-2 text-gray-700 hover:text-green-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaUser className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 