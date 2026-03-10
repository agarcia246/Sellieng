import { Heart, MessageCircle } from "lucide-react";
import { Listing, getUserById } from "../data/mockData";
import { Link } from "react-router";
import { useState } from "react";

interface ListingCardProps {
  listing: Listing;
}

export function ListingCard({ listing }: ListingCardProps) {
  const seller = getUserById(listing.sellerId);
  const [saved, setSaved] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
      <Link to={`/listing/${listing.id}`}>
        <div className="relative aspect-square overflow-hidden">
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setSaved(!saved);
            }}
            className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
          >
            <Heart
              className={`w-5 h-5 ${
                saved ? "fill-red-500 text-red-500" : "text-gray-600"
              }`}
            />
          </button>
          <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
            {listing.campus}
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/listing/${listing.id}`}>
          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-[var(--brand-blue)] transition-colors">
            {listing.title}
          </h3>
        </Link>
        <div className="flex items-center justify-between mb-3">
          <p className="text-2xl font-bold text-gray-900">€{listing.price}</p>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-lg">
            {listing.condition}
          </span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <Link
            to={`/profile/${seller?.id}`}
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-cyan)] flex items-center justify-center text-white text-sm font-medium">
              {seller?.name.charAt(0)}
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium text-gray-700">
                {seller?.name.split(" ")[0]}
              </span>
              {seller?.verified && (
                <span className="text-[var(--brand-blue)] text-xs">✓</span>
              )}
            </div>
          </Link>

          <Link to={`/inbox?listing=${listing.id}`}>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <MessageCircle className="w-5 h-5 text-gray-600" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
