'use client';

import { Club } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';

interface ClubCardProps {
  club: Club;
}

export default function ClubCard({ club }: ClubCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
      <Link href={`/listing/${club.id}`}>
        <div className="relative h-48 w-full">
          {club.images.length > 0 ? (
            <div className="relative h-full w-full">
              <Image 
                src={club.images[0]}
                alt={club.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ) : (
            <div className="h-full w-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-700">No image available</p>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg truncate">{club.name}</h3>
              <p className="text-sm text-gray-700 mb-1">{club.brand} · {club.category}</p>
            </div>
            <div className="flex items-center text-yellow-500">
              <FaStar className="h-4 w-4" />
              <span className="ml-1 text-sm">{club.ownerRating}</span>
            </div>
          </div>
          
          <div className="flex items-center text-sm text-gray-700 mt-2">
            <FaMapMarkerAlt className="h-3 w-3 mr-1" />
            <p className="truncate">{club.location}</p>
          </div>
          
          <div className="mt-3 flex justify-between items-end">
            <div>
              <p className="text-sm text-gray-700">Condition:</p>
              <p className="font-medium">{club.condition}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-700">Price:</p>
              <p className="font-semibold text-green-600">
                ${club.pricePerDay}<span className="text-xs text-gray-700">/day</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
} 