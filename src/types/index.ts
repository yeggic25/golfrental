export interface Club {
  id: string;
  name: string;
  brand: string;
  category: ClubCategory;
  type: ClubType;
  description: string;
  images: string[];
  pricePerDay: number;
  location: string;
  condition: ClubCondition;
  available: boolean;
  ownerId: string;
  ownerName: string;
  ownerRating: number;
  features?: string[];
}

export type ClubCategory = 'Driver' | 'Wood' | 'Iron' | 'Wedge' | 'Putter' | 'Hybrid' | 'Complete Set';

export type ClubType = 'Men' | 'Women' | 'Junior' | 'Unisex';

export type ClubCondition = 'Like New' | 'Good' | 'Fair' | 'Well Used';

export interface Rental {
  id: string;
  clubId: string;
  clubName: string;
  clubImage: string;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  status: RentalStatus;
  ownerId: string;
  ownerName: string;
}

export type RentalStatus = 'Pending' | 'Confirmed' | 'Active' | 'Completed' | 'Cancelled';

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  rentals: Rental[];
} 