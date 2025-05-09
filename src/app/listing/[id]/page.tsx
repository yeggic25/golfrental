'use client';

import { useState, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { differenceInCalendarDays } from 'date-fns';
import { FaStar, FaMapMarkerAlt, FaCheck, FaCalendarAlt } from 'react-icons/fa';
import { Club } from '@/types';
import { clubs } from '@/data/mockData';
import DateRangePicker from '@/components/DateRangePicker';

export default function ListingPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  
  // Find the club with the matching ID
  const club = clubs.find(c => c.id === id);
  
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isReserving, setIsReserving] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  
  const handleDateChange = useCallback((start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);
  }, []);
  
  const getDayCount = () => {
    if (!startDate || !endDate) return 0;
    return differenceInCalendarDays(endDate, startDate) + 1;
  };
  
  const getTotalPrice = () => {
    if (!club) return 0;
    const days = getDayCount();
    return club.pricePerDay * days;
  };
  
  const handleReserve = () => {
    setIsReserving(true);
    // In a real app, this would submit to an API
    // For demo, we'll just redirect to the rentals page after a brief delay
    setTimeout(() => {
      router.push('/rentals');
    }, 1500);
  };
  
  if (!club) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Club Not Found</h1>
        <p className="mb-8">Sorry, the club you're looking for doesn't exist or has been removed.</p>
        <Link href="/browse" className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors">
          Browse More Clubs
        </Link>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link href="/browse" className="text-green-600 hover:underline hover:text-green-800">
          ← Back to Search Results
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Images and Club Details */}
        <div className="lg:col-span-2">
          {/* Main Image */}
          <div className="relative h-[400px] mb-4 rounded-lg overflow-hidden">
            {club.images.length > 0 ? (
              <Image 
                src={club.images[activeImage]}
                alt={club.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            ) : (
              <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">No image available</p>
              </div>
            )}
          </div>
          
          {/* Thumbnail Images */}
          {club.images.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {club.images.map((image, index) => (
                <div 
                  key={index}
                  className={`relative h-20 w-20 flex-shrink-0 cursor-pointer rounded-md overflow-hidden border-2 ${activeImage === index ? 'border-green-500' : 'border-transparent'}`}
                  onClick={() => setActiveImage(index)}
                >
                  <Image 
                    src={image}
                    alt={`${club.name} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-bold">{club.name}</h1>
                <p className="text-gray-600">{club.brand} · {club.category}</p>
              </div>
              <div className="flex items-center space-x-1 bg-green-50 text-green-700 px-3 py-1 rounded-full">
                <FaStar className="h-4 w-4" />
                <span className="font-semibold">{club.ownerRating}</span>
              </div>
            </div>
            
            <div className="flex items-center text-gray-600 mb-6">
              <FaMapMarkerAlt className="mr-2" />
              <span>{club.location}</span>
            </div>
            
            <div className="border-t border-b border-gray-200 py-6 my-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <h3 className="font-medium text-gray-700">Category</h3>
                  <p>{club.category}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Type</h3>
                  <p>{club.type}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Condition</h3>
                  <p>{club.condition}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Price</h3>
                  <p className="font-semibold text-green-600">${club.pricePerDay} / day</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">About this club</h2>
              <p className="text-gray-700 mb-6">{club.description}</p>
              
              {club.features && club.features.length > 0 && (
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {club.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <FaCheck className="text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">About the owner</h2>
              <div className="flex items-center space-x-4">
                <div className="h-14 w-14 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                  <span className="text-lg font-semibold text-gray-600">{club.ownerName.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-semibold">{club.ownerName}</h3>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1 h-4 w-4" />
                    <span>{club.ownerRating} rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Booking Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 shadow-md p-6 sticky top-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                ${club.pricePerDay} <span className="text-gray-600 text-base font-normal">/ day</span>
              </h2>
              <div className="flex items-center text-sm">
                <FaStar className="text-yellow-400 mr-1" />
                <span>{club.ownerRating}</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-4 flex items-center">
                <FaCalendarAlt className="mr-2 text-green-600" />
                <span>Select rental dates</span>
              </h3>
              <DateRangePicker 
                startDate={startDate} 
                endDate={endDate} 
                onChange={handleDateChange} 
              />
            </div>
            
            {startDate && endDate && (
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span>{club.pricePerDay} × {getDayCount()} days</span>
                  <span>${getTotalPrice()}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${getTotalPrice()}</span>
                </div>
              </div>
            )}
            
            <button
              className={`w-full py-3 px-4 rounded-md text-white font-medium ${
                !startDate || !endDate || isReserving
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700'
              }`}
              disabled={!startDate || !endDate || isReserving}
              onClick={handleReserve}
            >
              {isReserving ? 'Processing...' : startDate && endDate ? 'Reserve Now' : 'Select Dates'}
            </button>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              You won't be charged yet. Payment will be collected when you pick up the clubs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 