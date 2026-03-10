import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { ChevronLeft, MapPin, Star } from "lucide-react";
import { Button } from "../components/Button";
import { getUserById, getListingsBySeller, Listing } from "../data/mockData";
import { ListingCard } from "../components/ListingCard";

export function SellerProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = getUserById(id || "");
  const [following, setFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState<"listings" | "reviews" | "sold">("listings");

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">User not found</h2>
          <Button onClick={() => navigate("/home")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const userListings = getListingsBySeller(user.id).filter((l) => l.status === "active");
  const soldListings = getListingsBySeller(user.id).filter((l) => l.status === "sold");

  const reviews = [
    { id: 1, rating: 5, comment: "Great seller! Item exactly as described.", buyer: "Ana G.", date: "2 days ago" },
    { id: 2, rating: 5, comment: "Quick response and smooth transaction.", buyer: "Carlos M.", date: "1 week ago" },
    { id: 3, rating: 4, comment: "Good item, met on campus as planned.", buyer: "Julia S.", date: "2 weeks ago" },
  ];

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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
          {/* Banner */}
          <div className="h-32 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-cyan)]"></div>

          <div className="px-8 pb-8">
            {/* Avatar & Name */}
            <div className="flex items-end justify-between -mt-16 mb-6">
              <div className="flex items-end gap-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-cyan)] border-4 border-white flex items-center justify-center text-white text-5xl font-bold shadow-xl">
                  {user.name.charAt(0)}
                </div>
                <div className="mb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                    {user.verified && (
                      <div className="px-3 py-1 bg-blue-50 text-[var(--brand-blue)] text-sm font-medium rounded-full flex items-center gap-1">
                        <span>✓</span>
                        <span>Verified IE</span>
                      </div>
                    )}
                  </div>
                  {user.program && (
                    <p className="text-gray-600">
                      {user.program} {user.year && `• ${user.year}`}
                    </p>
                  )}
                </div>
              </div>

              <Button
                variant={following ? "secondary" : "primary"}
                onClick={() => setFollowing(!following)}
              >
                {following ? "Following" : "Follow"}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{user.followers}</div>
                <div className="text-sm text-gray-600">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{user.following}</div>
                <div className="text-sm text-gray-600">Following</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{userListings.length}</div>
                <div className="text-sm text-gray-600">Listings</div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{user.campus} Campus</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-gray-900">{user.rating}</span>
                <span>rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-t-2xl shadow-sm">
          <div className="border-b border-gray-200">
            <div className="flex">
              {[
                { id: "listings", label: "Listings", count: userListings.length },
                { id: "reviews", label: "Reviews", count: reviews.length },
                { id: "sold", label: "Sold Items", count: soldListings.length },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex-1 px-6 py-4 font-medium transition-colors relative ${
                    activeTab === tab.id
                      ? "text-[var(--brand-blue)]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab.label}
                  <span className="ml-2 text-sm">({tab.count})</span>
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--brand-blue)]"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Listings Tab */}
            {activeTab === "listings" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userListings.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === "reviews" && (
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-white font-medium">
                          {review.buyer.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{review.buyer}</div>
                          <div className="text-sm text-gray-500">{review.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Sold Items Tab */}
            {activeTab === "sold" && (
              <div>
                {soldListings.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {soldListings.map((listing) => (
                      <div key={listing.id} className="relative">
                        <ListingCard listing={listing} />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-gray-900 text-white text-sm font-medium rounded-full">
                          Sold
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-600">No sold items yet</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
