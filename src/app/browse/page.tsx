'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Club } from '@/types';
import { clubs } from '@/data/mockData';
import ClubCard from '@/components/ClubCard';
import ClubFilters, { FilterState } from '@/components/ClubFilters';
import { FaSearch, FaSort } from 'react-icons/fa';

export default function BrowsePage() {
  const searchParams = useSearchParams();
  const locationParam = searchParams.get('location');
  
  const [filteredClubs, setFilteredClubs] = useState<Club[]>(clubs);
  const [searchQuery, setSearchQuery] = useState(locationParam || '');
  const [sortOption, setSortOption] = useState('recommended');
  
  // Apply initial location filter if provided
  useEffect(() => {
    if (locationParam) {
      filterClubs({ categories: [], types: [], conditions: [], priceRange: [0, 100], location: locationParam });
    }
  }, [locationParam]);

  const filterClubs = (filters: FilterState) => {
    let results = [...clubs];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(club => 
        club.name.toLowerCase().includes(query) || 
        club.brand.toLowerCase().includes(query) || 
        club.location.toLowerCase().includes(query) ||
        club.category.toLowerCase().includes(query)
      );
    }
    
    // Filter by categories
    if (filters.categories.length > 0) {
      results = results.filter(club => filters.categories.includes(club.category));
    }
    
    // Filter by types
    if (filters.types.length > 0) {
      results = results.filter(club => filters.types.includes(club.type));
    }
    
    // Filter by conditions
    if (filters.conditions.length > 0) {
      results = results.filter(club => filters.conditions.includes(club.condition));
    }
    
    // Filter by price range
    results = results.filter(club => 
      club.pricePerDay >= filters.priceRange[0] && 
      club.pricePerDay <= filters.priceRange[1]
    );
    
    // Filter by location
    if (filters.location) {
      const locationQuery = filters.location.toLowerCase();
      results = results.filter(club => 
        club.location.toLowerCase().includes(locationQuery)
      );
    }
    
    // Sort results
    switch (sortOption) {
      case 'price-low':
        results.sort((a, b) => a.pricePerDay - b.pricePerDay);
        break;
      case 'price-high':
        results.sort((a, b) => b.pricePerDay - a.pricePerDay);
        break;
      case 'rating':
        results.sort((a, b) => b.ownerRating - a.ownerRating);
        break;
      default:
        // Default to recommended sort (no change)
        break;
    }
    
    setFilteredClubs(results);
  };
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    filterClubs({ categories: [], types: [], conditions: [], priceRange: [0, 100], location: searchQuery });
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Browse Golf Clubs</h1>
      
      {/* Search Bar */}
      <div className="mb-8">
        <form onSubmit={handleSearchSubmit} className="flex w-full md:w-2/3 lg:w-1/2">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name, brand, or location"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-l-md focus:ring-green-500 focus:border-green-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition-colors"
          >
            Search
          </button>
        </form>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters */}
        <div className="md:w-1/4">
          <ClubFilters onFilterChange={filterClubs} />
        </div>
        
        {/* Results */}
        <div className="md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <div className="text-gray-600">
              {filteredClubs.length} clubs found
            </div>
            
            <div className="flex items-center">
              <span className="mr-2 text-gray-700">Sort by:</span>
              <select
                className="p-2 border border-gray-300 rounded text-sm bg-white"
                value={sortOption}
                onChange={(e) => {
                  setSortOption(e.target.value);
                  filterClubs({ categories: [], types: [], conditions: [], priceRange: [0, 100], location: searchQuery });
                }}
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
          
          {filteredClubs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {filteredClubs.map((club) => (
                <ClubCard key={club.id} club={club} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-600 text-lg">No clubs found. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 