import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { Heart, MessageCircle, MapPin, Package, Shield, ChevronLeft, User as UserIcon } from "lucide-react";
import { Button } from "../components/Button";
import { getListingById, getUserById, listings } from "../data/mockData";
import { ListingCard } from "../components/ListingCard";

export function ListingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const listing = getListingById(id || "");
  const seller = listing ? getUserById(listing.sellerId) : null;
  const [saved, setSaved] = useState(false);
  const [following, setFollowing] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [offerAmount, setOfferAmount] = useState("");

  if (!listing || !seller) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Listing not found</h2>
          <Button onClick={() => navigate("/home")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const similarListings = listings
    .filter((l) => l.category === listing.category && l.id !== listing.id && l.status === "active")
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate("/home")}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-medium">Back to Marketplace</span>
            </button>
            <Link to="/home" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-cyan)] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-cyan)] bg-clip-text text-transparent">
                SELLieNG
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {/* Main Image */}
              <div className="aspect-[4/3] relative">
                <img
                  src={listing.images[currentImageIndex]}
                  alt={listing.title}
                  className="w-full h-full object-cover"
                />
                {listing.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {listing.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentImageIndex
                            ? "bg-white w-8"
                            : "bg-white/50 hover:bg-white/75"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-blue-50 text-[var(--brand-blue)] text-sm font-medium rounded-full">
                        {listing.category}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {listing.campus}
                      </span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {listing.title}
                    </h1>
                  </div>
                  <button
                    onClick={() => setSaved(!saved)}
                    className="p-3 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Heart
                      className={`w-6 h-6 ${
                        saved ? "fill-red-500 text-red-500" : "text-gray-600"
                      }`}
                    />
                  </button>
                </div>

                <div className="mb-6">
                  <p className="text-4xl font-bold text-gray-900 mb-2">€{listing.price}</p>
                  <p className="text-gray-600">
                    Condition: <span className="font-medium text-gray-900">{listing.condition}</span>
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{listing.description}</p>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {listing.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[var(--brand-blue)] flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900 mb-1">Safety Tips</p>
                    <p className="text-gray-700">
                      Meet on campus in public places. Inspect items before payment. Never share
                      personal financial information.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Similar Items */}
            {similarListings.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Similar Items</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {similarListings.map((item) => (
                    <ListingCard key={item.id} listing={item} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Seller Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Seller Information</h3>

              <Link
                to={`/profile/${seller.id}`}
                className="flex items-center gap-3 p-4 hover:bg-gray-50 rounded-xl transition-colors mb-4"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-cyan)] flex items-center justify-center text-white text-xl font-semibold">
                  {seller.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">{seller.name}</span>
                    {seller.verified && (
                      <span className="text-[var(--brand-blue)]">✓</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <span>⭐ {seller.rating}</span>
                    <span>•</span>
                    <span>{seller.followers} followers</span>
                  </div>
                </div>
              </Link>

              <div className="space-y-3 mb-6">
                <Button
                  variant={following ? "secondary" : "ghost"}
                  size="md"
                  className="w-full"
                  onClick={() => setFollowing(!following)}
                >
                  <UserIcon className="w-5 h-5" />
                  {following ? "Following" : "Follow Seller"}
                </Button>

                <Link to={`/inbox?listing=${listing.id}&seller=${seller.id}`} className="block">
                  <Button variant="secondary" size="md" className="w-full">
                    <MessageCircle className="w-5 h-5" />
                    Message Seller
                  </Button>
                </Link>

                {listing.allowOffers && (
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full"
                    onClick={() => setShowOfferModal(true)}
                  >
                    <Package className="w-5 h-5" />
                    Make an Offer
                  </Button>
                )}
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-600 space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Pickup: {listing.campus} Campus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    <span>Condition: {listing.condition}</span>
                  </div>
                  {listing.allowOffers && (
                    <div className="flex items-center gap-2 text-[var(--brand-blue)]">
                      <span>💡</span>
                      <span>Seller accepts offers</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Make Offer Modal */}
      {showOfferModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Make an Offer</h3>
            <p className="text-gray-600 mb-6">
              Listing price: <span className="font-semibold">€{listing.price}</span>
            </p>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Offer (€)
              </label>
              <input
                type="number"
                value={offerAmount}
                onChange={(e) => setOfferAmount(e.target.value)}
                placeholder="Enter your offer amount"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--brand-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]/20"
              />
            </div>

            <div className="flex gap-3">
              <Button
                variant="ghost"
                className="flex-1"
                onClick={() => setShowOfferModal(false)}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                className="flex-1"
                onClick={() => {
                  setShowOfferModal(false);
                  navigate(`/inbox?listing=${listing.id}&seller=${seller.id}`);
                }}
              >
                Send Offer
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
