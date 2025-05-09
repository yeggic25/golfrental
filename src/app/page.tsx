'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaSearch, FaGolfBall, FaShieldAlt, FaMoneyBillWave } from 'react-icons/fa';
import ClubCard from '@/components/ClubCard';
import { clubs } from '@/data/mockData';

export default function Home() {
  const [location, setLocation] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/browse?location=${encodeURIComponent(location)}`);
  };

  // Show just a few featured clubs
  const featuredClubs = clubs.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1600&auto=format&fit=crop&q=80"
            alt="Golf course"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
            Rent Premium Golf Clubs Without Breaking the Bank
          </h1>
          <p className="text-xl text-white mb-10 max-w-2xl">
            Find high-quality golf clubs from local owners near your next golf destination
          </p>

          {/* Search Form */}
          <form 
            onSubmit={handleSearch}
            className="w-full max-w-lg bg-white rounded-lg shadow-lg p-4 flex flex-col md:flex-row items-center md:space-x-2"
          >
            <div className="flex-grow mb-3 md:mb-0 w-full">
              <label htmlFor="location" className="sr-only">Location</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                  <FaSearch />
                </div>
                <input
                  type="text"
                  id="location"
                  placeholder="Where are you playing?"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
            <button 
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors"
            >
              Find Clubs
            </button>
          </form>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Rent With Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                <FaGolfBall className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Equipment</h3>
              <p className="text-gray-700">
                Access high-quality clubs that would cost thousands to buy, for a fraction of the price.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                <FaShieldAlt className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-gray-700">
                Our rental protection and verification system ensures a safe rental experience.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                <FaMoneyBillWave className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Save Money</h3>
              <p className="text-gray-700">
                No need to pay extra airline fees or buy expensive clubs you'll only use once.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Clubs</h2>
            <Link 
              href="/browse"
              className="text-green-600 hover:text-green-800 font-medium"
            >
              View all clubs
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredClubs.map((club) => (
              <ClubCard key={club.id} club={club} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to rent premium golf clubs?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Find the perfect clubs for your next golf adventure
          </p>
          <Link 
            href="/browse"
            className="inline-block px-8 py-3 bg-white text-green-600 font-medium rounded-md hover:bg-gray-100 transition-colors"
          >
            Browse Clubs
          </Link>
        </div>
      </section>
    </div>
  );
}
