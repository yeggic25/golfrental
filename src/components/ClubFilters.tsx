'use client';

import { useState } from 'react';
import { ClubCategory, ClubType, ClubCondition } from '@/types';

interface ClubFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  categories: ClubCategory[];
  types: ClubType[];
  conditions: ClubCondition[];
  priceRange: [number, number];
  location: string;
}

const initialFilters: FilterState = {
  categories: [],
  types: [],
  conditions: [],
  priceRange: [0, 100],
  location: '',
};

export default function ClubFilters({ onFilterChange }: ClubFiltersProps) {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  
  const handleCategoryChange = (category: ClubCategory) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    
    const newFilters = { ...filters, categories: newCategories };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleTypeChange = (type: ClubType) => {
    const newTypes = filters.types.includes(type)
      ? filters.types.filter(t => t !== type)
      : [...filters.types, type];
    
    const newFilters = { ...filters, types: newTypes };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleConditionChange = (condition: ClubCondition) => {
    const newConditions = filters.conditions.includes(condition)
      ? filters.conditions.filter(c => c !== condition)
      : [...filters.conditions, condition];
    
    const newFilters = { ...filters, conditions: newConditions };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    const isMin = e.target.id === 'min-price';
    const newPriceRange = isMin 
      ? [value, filters.priceRange[1]] 
      : [filters.priceRange[0], value];
    
    const newFilters = { ...filters, priceRange: newPriceRange as [number, number] };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = { ...filters, location: e.target.value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    setFilters(initialFilters);
    onFilterChange(initialFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Filters</h2>
        <button 
          onClick={resetFilters}
          className="text-sm text-green-600 hover:text-green-800"
        >
          Reset All
        </button>
      </div>

      {/* Club Category */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Club Category</h3>
        <div className="space-y-2">
          {['Driver', 'Wood', 'Iron', 'Wedge', 'Putter', 'Hybrid', 'Complete Set'].map((category) => (
            <div key={category} className="flex items-center">
              <input
                type="checkbox"
                id={`category-${category}`}
                checked={filters.categories.includes(category as ClubCategory)}
                onChange={() => handleCategoryChange(category as ClubCategory)}
                className="h-4 w-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
              />
              <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-700">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Club Type */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Club Type</h3>
        <div className="space-y-2">
          {['Men', 'Women', 'Junior', 'Unisex'].map((type) => (
            <div key={type} className="flex items-center">
              <input
                type="checkbox"
                id={`type-${type}`}
                checked={filters.types.includes(type as ClubType)}
                onChange={() => handleTypeChange(type as ClubType)}
                className="h-4 w-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
              />
              <label htmlFor={`type-${type}`} className="ml-2 text-sm text-gray-700">
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Condition */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Condition</h3>
        <div className="space-y-2">
          {['Like New', 'Good', 'Fair', 'Well Used'].map((condition) => (
            <div key={condition} className="flex items-center">
              <input
                type="checkbox"
                id={`condition-${condition}`}
                checked={filters.conditions.includes(condition as ClubCondition)}
                onChange={() => handleConditionChange(condition as ClubCondition)}
                className="h-4 w-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
              />
              <label htmlFor={`condition-${condition}`} className="ml-2 text-sm text-gray-700">
                {condition}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Price Range (per day)</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="min-price" className="block text-sm text-gray-700 mb-1">
              Min Price ($)
            </label>
            <input
              type="number"
              id="min-price"
              min="0"
              max={filters.priceRange[1]}
              value={filters.priceRange[0]}
              onChange={handlePriceChange}
              className="w-full p-2 border border-gray-300 rounded text-sm"
            />
          </div>
          <div>
            <label htmlFor="max-price" className="block text-sm text-gray-700 mb-1">
              Max Price ($)
            </label>
            <input
              type="number"
              id="max-price"
              min={filters.priceRange[0]}
              value={filters.priceRange[1]}
              onChange={handlePriceChange}
              className="w-full p-2 border border-gray-300 rounded text-sm"
            />
          </div>
        </div>
      </div>

      {/* Location */}
      <div>
        <h3 className="font-medium mb-3">Location</h3>
        <input
          type="text"
          id="location"
          placeholder="City, State"
          value={filters.location}
          onChange={handleLocationChange}
          className="w-full p-2 border border-gray-300 rounded text-sm"
        />
      </div>
    </div>
  );
} 