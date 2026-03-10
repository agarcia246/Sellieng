import { Link, useNavigate } from "react-router";
import { ChevronLeft, Heart } from "lucide-react";
import { ListingCard } from "../components/ListingCard";
import { listings } from "../data/mockData";

export function SavedItems() {
  const navigate = useNavigate();
  
  // Mock saved items - in real app would come from user's saved list
  const savedListings = listings.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate("/home")}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-medium">Back</span>
            </button>
            <Link to="/home" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-cyan)] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-cyan)] bg-clip-text text-transparent">
                SELLieNG
              </span>
            </Link>
            <div className="w-20"></div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Saved Items</h1>
          <p className="text-gray-600">Your wishlist of items you're interested in</p>
        </div>

        {savedListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {savedListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No saved items yet
            </h3>
            <p className="text-gray-600 mb-6">
              Start saving items you're interested in to view them here
            </p>
            <Link
              to="/home"
              className="inline-block px-6 py-3 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-cyan)] text-white rounded-xl hover:shadow-lg transition-all"
            >
              Browse Marketplace
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
