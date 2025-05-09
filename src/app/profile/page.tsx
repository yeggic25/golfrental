'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUser, FaEdit, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCreditCard } from 'react-icons/fa';
import { currentUser } from '@/data/mockData';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: currentUser.name,
    email: currentUser.email,
    phone: '(555) 123-4567',
    location: 'San Francisco, CA'
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call an API to update the user profile
    setIsEditing(false);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center">
              <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4 bg-gray-200">
                {currentUser.image ? (
                  <Image
                    src={currentUser.image}
                    alt={currentUser.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center">
                    <FaUser className="h-16 w-16 text-gray-500" />
                  </div>
                )}
              </div>
              <h2 className="text-xl font-semibold">{currentUser.name}</h2>
              <p className="text-gray-600 mb-4">{currentUser.email}</p>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center text-green-600 hover:text-green-800"
              >
                <FaEdit className="mr-2" />
                {isEditing ? 'Cancel Editing' : 'Edit Profile'}
              </button>
            </div>
            
            <div className="mt-8 border-t border-gray-200 pt-6">
              <nav className="space-y-3">
                <Link 
                  href="#" 
                  className="flex items-center text-gray-700 hover:text-green-600 py-2"
                >
                  <FaUser className="mr-3" />
                  Account Settings
                </Link>
                <Link 
                  href="/rentals" 
                  className="flex items-center text-gray-700 hover:text-green-600 py-2"
                >
                  <FaMapMarkerAlt className="mr-3" />
                  My Rentals
                </Link>
                <Link 
                  href="#" 
                  className="flex items-center text-gray-700 hover:text-green-600 py-2"
                >
                  <FaCreditCard className="mr-3" />
                  Payment Methods
                </Link>
              </nav>
            </div>
          </div>
        </div>
        
        {/* Profile Content */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
            
            {isEditing ? (
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  
                  <div className="flex space-x-4">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                    <p className="mt-1">{formData.name}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Email Address</h3>
                    <p className="mt-1 flex items-center">
                      <FaEnvelope className="mr-2 text-gray-400" />
                      {formData.email}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Phone Number</h3>
                    <p className="mt-1 flex items-center">
                      <FaPhone className="mr-2 text-gray-400" />
                      {formData.phone}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Location</h3>
                    <p className="mt-1 flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-gray-400" />
                      {formData.location}
                    </p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  >
                    Edit Information
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-xl font-semibold mb-4">Rental Activity</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-green-600">
                  {currentUser.rentals.length}
                </p>
                <p className="text-gray-600">Total Rentals</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-blue-600">
                  {currentUser.rentals.filter(r => r.status === 'Confirmed').length}
                </p>
                <p className="text-gray-600">Upcoming</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-purple-600">
                  {currentUser.rentals.filter(r => r.status === 'Completed').length}
                </p>
                <p className="text-gray-600">Completed</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link 
                href="/rentals"
                className="text-green-600 hover:text-green-800 font-medium"
              >
                View All Rentals →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 