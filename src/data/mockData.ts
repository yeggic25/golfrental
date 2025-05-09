import { Club, Rental, User } from '@/types';

export const clubs: Club[] = [
  {
    id: '1',
    name: 'TaylorMade SIM2 Driver',
    brand: 'TaylorMade',
    category: 'Driver',
    type: 'Men',
    description: 'The SIM2 Driver delivers powerful performance with forgiveness and low spin for maximum distance. Perfect for players looking to add yards to their drive.',
    images: [
      'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1592919505780-303950717480?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=800&auto=format&fit=crop&q=60'
    ],
    pricePerDay: 35,
    location: 'San Francisco, CA',
    condition: 'Like New',
    available: true,
    ownerId: '101',
    ownerName: 'Michael Johnson',
    ownerRating: 4.8,
    features: ['460cc Head', 'Adjustable Loft', 'Speed Injected Twist Face']
  },
  {
    id: '2',
    name: 'Callaway Mavrik Iron Set',
    brand: 'Callaway',
    category: 'Iron',
    type: 'Men',
    description: 'Complete set of Callaway Mavrik irons (4-PW). These game-improvement irons offer exceptional distance and forgiveness for players of all skill levels.',
    images: [
      'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&auto=format&fit=crop&q=60'
    ],
    pricePerDay: 45,
    location: 'Los Angeles, CA',
    condition: 'Good',
    available: true,
    ownerId: '102',
    ownerName: 'Sarah Williams',
    ownerRating: 4.9,
    features: ['Flash Face Cup Technology', 'Tungsten Energy Core', 'Urethane Microspheres']
  },
  {
    id: '3',
    name: 'Scotty Cameron Special Select Newport 2',
    brand: 'Scotty Cameron',
    category: 'Putter',
    type: 'Unisex',
    description: 'The iconic Scotty Cameron Newport 2 putter. Precision milled for exceptional feel and performance on the greens.',
    images: [
      'https://images.unsplash.com/photo-1592919505780-303950717480?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=800&auto=format&fit=crop&q=60'
    ],
    pricePerDay: 25,
    location: 'Chicago, IL',
    condition: 'Like New',
    available: true,
    ownerId: '103',
    ownerName: 'James Wilson',
    ownerRating: 4.7,
    features: ['Milled 303 Stainless Steel', 'Performance Balanced Weighting', 'Tour-proven Design']
  },
  {
    id: '4',
    name: 'Ping G425 Hybrid',
    brand: 'Ping',
    category: 'Hybrid',
    type: 'Men',
    description: 'The Ping G425 Hybrid offers versatility and forgiveness, perfect for replacing long irons or as a fairway wood alternative.',
    images: [
      'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&auto=format&fit=crop&q=60'
    ],
    pricePerDay: 20,
    location: 'Austin, TX',
    condition: 'Good',
    available: true,
    ownerId: '104',
    ownerName: 'Robert Chen',
    ownerRating: 4.6
  },
  {
    id: '5',
    name: 'Titleist Vokey SM8 Wedge Set',
    brand: 'Titleist',
    category: 'Wedge',
    type: 'Men',
    description: 'Set of three Vokey SM8 wedges (52°, 56°, 60°). Precision crafted for optimal spin, control, and versatility around the greens.',
    images: [
      'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1592919505780-303950717480?w=800&auto=format&fit=crop&q=60'
    ],
    pricePerDay: 30,
    location: 'Seattle, WA',
    condition: 'Fair',
    available: true,
    ownerId: '105',
    ownerName: 'Emma Thompson',
    ownerRating: 4.8,
    features: ['Tour-proven Grinds', 'Spin Milled Grooves', 'Progressive Center of Gravity']
  },
  {
    id: '6',
    name: 'Callaway Strata Complete Set',
    brand: 'Callaway',
    category: 'Complete Set',
    type: 'Women',
    description: '11-piece complete set designed specifically for women. Includes driver, fairway woods, hybrids, irons, putter, and bag.',
    images: [
      'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&auto=format&fit=crop&q=60'
    ],
    pricePerDay: 60,
    location: 'Denver, CO',
    condition: 'Good',
    available: true,
    ownerId: '106',
    ownerName: 'Patricia Lopez',
    ownerRating: 4.5,
    features: ['Lightweight Design', 'High Launch Technology', 'Premium Bag Included']
  }
];

export const rentals: Rental[] = [
  {
    id: '1001',
    clubId: '3',
    clubName: 'Scotty Cameron Special Select Newport 2',
    clubImage: 'https://images.unsplash.com/photo-1592919505780-303950717480?w=800&auto=format&fit=crop&q=60',
    startDate: new Date('2023-06-10'),
    endDate: new Date('2023-06-12'),
    totalPrice: 50,
    status: 'Completed',
    ownerId: '103',
    ownerName: 'James Wilson'
  },
  {
    id: '1002',
    clubId: '1',
    clubName: 'TaylorMade SIM2 Driver',
    clubImage: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&auto=format&fit=crop&q=60',
    startDate: new Date('2023-07-15'),
    endDate: new Date('2023-07-17'),
    totalPrice: 105,
    status: 'Confirmed',
    ownerId: '101',
    ownerName: 'Michael Johnson'
  }
];

export const currentUser: User = {
  id: '201',
  name: 'John Smith',
  email: 'john.smith@example.com',
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60',
  rentals: rentals
}; 