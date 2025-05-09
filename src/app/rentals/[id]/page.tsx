'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { FaCalendarAlt, FaMapMarkerAlt, FaCreditCard, FaStar, FaArrowLeft } from 'react-icons/fa';
import { rentals } from '@/data/mockData';

export default function RentalDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  
  // Find the rental with the matching ID
  const rental = rentals.find(r => r.id === id);
  
  const [isCancelling, setIsCancelling] = useState(false);
  
  const handleCancel = () => {
    setIsCancelling(true);
    // In a real app, this would submit to an API
    // For demo, we'll just redirect to the rentals page after a brief delay
    setTimeout(() => {
      router.push('/rentals');
    }, 1500);
  };
  
  const statusColorMap = {
    'Pending': 'bg-yellow-100 text-yellow-800',
    'Confirmed': 'bg-blue-100 text-blue-800',
    'Active': 'bg-green-100 text-green-800',
    'Completed': 'bg-gray-100 text-gray-800',
    'Cancelled': 'bg-red-100 text-red-800'
  };
  
  if (!rental) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Rental Not Found</h1>
        <p className="mb-8">Sorry, the rental you're looking for doesn't exist or has been removed.</p>
        <Link href="/rentals" className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors">
          View All Rentals
        </Link>
      </div>
    );
  }
  
  const isUpcoming = ['Pending', 'Confirmed'].includes(rental.status);
  const isActive = rental.status === 'Active';
  const isCompleted = rental.status === 'Completed';
  const isCancelled = rental.status === 'Cancelled';
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link href="/rentals" className="flex items-center text-green-600 hover:text-green-800">
          <FaArrowLeft className="mr-2" />
          Back to Rentals
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <h1 className="text-2xl font-bold mb-2 sm:mb-0">Rental #{rental.id}</h1>
            <span className={`px-4 py-1 rounded-full text-sm font-semibold ${statusColorMap[rental.status]}`}>
              {rental.status}
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
          {/* Club Information */}
          <div className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3 mb-4 sm:mb-0 sm:mr-6">
                <div className="relative h-48 w-full rounded-lg overflow-hidden">
                  <Image 
                    src={rental.clubImage}
                    alt={rental.clubName}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="sm:w-2/3">
                <h2 className="text-xl font-semibold mb-2">{rental.clubName}</h2>
                <p className="text-gray-600 mb-4">Rented from {rental.ownerName}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-gray-500 mr-2" />
                    <div>
                      <p className="text-sm text-gray-600">Rental Period:</p>
                      <p className="font-medium">
                        {format(rental.startDate, 'MMMM d, yyyy')} - {format(rental.endDate, 'MMMM d, yyyy')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-gray-500 mr-2" />
                    <div>
                      <p className="text-sm text-gray-600">Pickup Location:</p>
                      <p className="font-medium">Arrange with owner (details in confirmation email)</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link 
                    href={`/listing/${rental.clubId}`}
                    className="px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition-colors"
                  >
                    View Club Details
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Timeline Section */}
            <div className="mt-10 border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold mb-4">Rental Timeline</h3>
              
              <div className="relative">
                <div className="absolute top-0 left-5 h-full w-0.5 bg-gray-200"></div>
                
                <div className="relative mb-8">
                  <div className="flex items-center mb-2">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      rental.status !== 'Pending' ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-600'
                    }`}>
                      1
                    </div>
                    <h4 className="ml-4 font-medium">Booking Placed</h4>
                  </div>
                  <div className="ml-14">
                    <p className="text-sm text-gray-600">
                      Rental request submitted for {rental.clubName}
                    </p>
                  </div>
                </div>
                
                <div className="relative mb-8">
                  <div className="flex items-center mb-2">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      ['Confirmed', 'Active', 'Completed'].includes(rental.status) ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-600'
                    }`}>
                      2
                    </div>
                    <h4 className="ml-4 font-medium">Booking Confirmed</h4>
                  </div>
                  <div className="ml-14">
                    <p className="text-sm text-gray-600">
                      Owner confirmed your rental request
                    </p>
                  </div>
                </div>
                
                <div className="relative mb-8">
                  <div className="flex items-center mb-2">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      ['Active', 'Completed'].includes(rental.status) ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-600'
                    }`}>
                      3
                    </div>
                    <h4 className="ml-4 font-medium">Picked Up</h4>
                  </div>
                  <div className="ml-14">
                    <p className="text-sm text-gray-600">
                      Club pickup from owner
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex items-center mb-2">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      rental.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-600'
                    }`}>
                      4
                    </div>
                    <h4 className="ml-4 font-medium">Returned</h4>
                  </div>
                  <div className="ml-14">
                    <p className="text-sm text-gray-600">
                      Club returned to owner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Payment and Actions Information */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Rental Total</span>
                  <span className="font-semibold">${rental.totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Security Deposit</span>
                  <span className="font-semibold">$50.00</span>
                </div>
                <div className="border-t border-gray-200 pt-2 flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">${rental.totalPrice + 50}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-600 mb-2">Payment Method</h4>
                <div className="flex items-center">
                  <FaCreditCard className="text-gray-500 mr-2" />
                  <span>Payment at pickup (cash or card)</span>
                </div>
              </div>
              
              {/* Actions */}
              <div className="space-y-3">
                {isUpcoming && (
                  <>
                    <button 
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      onClick={() => window.open(`/rentals/${rental.id}/receipt`, '_blank')}
                    >
                      View Confirmation
                    </button>
                    
                    <button 
                      className={`w-full px-4 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-50 transition-colors ${
                        isCancelling ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      onClick={handleCancel}
                      disabled={isCancelling}
                    >
                      {isCancelling ? 'Cancelling...' : 'Cancel Booking'}
                    </button>
                  </>
                )}
                
                {isActive && (
                  <button 
                    className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                    onClick={() => window.open(`/rentals/${rental.id}/return`, '_blank')}
                  >
                    Initiate Return
                  </button>
                )}
                
                {isCompleted && (
                  <button 
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    onClick={() => window.open(`/rentals/${rental.id}/receipt`, '_blank')}
                  >
                    View Receipt
                  </button>
                )}
                
                {!isCancelled && !isActive && (
                  <button 
                    className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                    onClick={() => window.open(`mailto:support@golfclubrentals.com`, '_blank')}
                  >
                    Contact Support
                  </button>
                )}
              </div>
            </div>
            
            {/* Owner Information */}
            <div className="bg-gray-50 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold mb-4">Owner Information</h3>
              
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-lg font-semibold text-gray-600">{rental.ownerName.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-medium">{rental.ownerName}</h4>
                  <div className="flex items-center text-sm">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span>4.8 rating</span>
                  </div>
                </div>
              </div>
              
              <button 
                className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => window.open(`mailto:owner@example.com`, '_blank')}
              >
                Contact Owner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 