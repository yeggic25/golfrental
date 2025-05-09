'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaGolfBall } from 'react-icons/fa';
import RentalCard from '@/components/RentalCard';
import { currentUser, rentals } from '@/data/mockData';

type RentalStatus = 'all' | 'upcoming' | 'completed' | 'cancelled';

export default function RentalsPage() {
  const [activeTab, setActiveTab] = useState<RentalStatus>('all');
  
  const filteredRentals = rentals.filter(rental => {
    if (activeTab === 'all') return true;
    if (activeTab === 'upcoming') return ['Pending', 'Confirmed', 'Active'].includes(rental.status);
    if (activeTab === 'completed') return rental.status === 'Completed';
    if (activeTab === 'cancelled') return rental.status === 'Cancelled';
    return true;
  });
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">My Rentals</h1>
      
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'all'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            All Rentals
          </button>
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'upcoming'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'completed'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setActiveTab('cancelled')}
            className={`pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'cancelled'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Cancelled
          </button>
        </nav>
      </div>
      
      {/* Rental List */}
      {filteredRentals.length > 0 ? (
        <div className="space-y-6">
          {filteredRentals.map((rental) => (
            <RentalCard key={rental.id} rental={rental} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
            <FaGolfBall className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No rentals found</h3>
          <p className="text-gray-500 mb-6">
            {activeTab === 'all'
              ? "You haven't rented any clubs yet."
              : activeTab === 'upcoming'
              ? "You don't have any upcoming rentals."
              : activeTab === 'completed'
              ? "You don't have any completed rentals."
              : "You don't have any cancelled rentals."}
          </p>
          <Link
            href="/browse"
            className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors inline-block"
          >
            Browse Clubs
          </Link>
        </div>
      )}
    </div>
  );
} 