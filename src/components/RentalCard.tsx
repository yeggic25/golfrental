'use client';

import { Rental } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';

interface RentalCardProps {
  rental: Rental;
}

export default function RentalCard({ rental }: RentalCardProps) {
  const statusColorMap = {
    'Pending': 'bg-yellow-100 text-yellow-800',
    'Confirmed': 'bg-blue-100 text-blue-800',
    'Active': 'bg-green-100 text-green-800',
    'Completed': 'bg-gray-100 text-gray-800',
    'Cancelled': 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 relative">
          <div className="h-48 md:h-full w-full relative">
            <Image 
              src={rental.clubImage}
              alt={rental.clubName}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
        
        <div className="p-6 md:w-2/3">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h3 className="font-semibold text-lg mb-2 md:mb-0">{rental.clubName}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColorMap[rental.status]}`}>
              {rental.status}
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-700">Rental Period:</p>
              <p className="font-medium">
                {format(rental.startDate, 'MMM d, yyyy')} - {format(rental.endDate, 'MMM d, yyyy')}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-700">Owner:</p>
              <p className="font-medium">{rental.ownerName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-700">Total Cost:</p>
              <p className="font-semibold text-green-600">${rental.totalPrice}</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <Link 
              href={`/listing/${rental.clubId}`}
              className="px-4 py-2 bg-white border border-green-600 text-green-600 rounded-md text-center hover:bg-green-50 transition-colors"
            >
              View Club
            </Link>
            <Link 
              href={`/rentals/${rental.id}`}
              className="px-4 py-2 bg-green-600 text-white rounded-md text-center hover:bg-green-700 transition-colors"
            >
              Rental Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 