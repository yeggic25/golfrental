import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">GolfClub Rentals</h3>
            <p className="text-gray-300 text-sm">
              Rent premium golf clubs from local owners. Save money and play with the best equipment.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white text-sm">Home</Link></li>
              <li><Link href="/browse" className="text-gray-300 hover:text-white text-sm">Browse Clubs</Link></li>
              <li><Link href="/rentals" className="text-gray-300 hover:text-white text-sm">My Rentals</Link></li>
              <li><Link href="/profile" className="text-gray-300 hover:text-white text-sm">Profile</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">FAQ</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} GolfClub Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 