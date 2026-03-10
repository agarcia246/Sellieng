import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ChevronLeft, Plus, Eye, Edit, Trash2 } from "lucide-react";
import { Button } from "../components/Button";
import { getListingsBySeller, currentUser } from "../data/mockData";

export function MyListings() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"active" | "sold" | "draft">("active");

  const allUserListings = getListingsBySeller(currentUser.id);
  const activeListings = allUserListings.filter((l) => l.status === "active");
  const soldListings = allUserListings.filter((l) => l.status === "sold");
  const draftListings = allUserListings.filter((l) => l.status === "draft");

  const currentListings = {
    active: activeListings,
    sold: soldListings,
    draft: draftListings,
  }[activeTab];

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
            <Link to="/create">
              <Button variant="primary" size="sm">
                <Plus className="w-5 h-5" />
                New Listing
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Listings</h1>
          <p className="text-gray-600">Manage your posted items</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <div className="flex">
              {[
                { id: "active", label: "Active", count: activeListings.length },
                { id: "sold", label: "Sold", count: soldListings.length },
                { id: "draft", label: "Drafts", count: draftListings.length },
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
        </div>

        {/* Listings */}
        {currentListings.length > 0 ? (
          <div className="space-y-4">
            {currentListings.map((listing) => (
              <div key={listing.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 p-4">
                  <img
                    src={listing.images[0]}
                    alt={listing.title}
                    className="w-24 h-24 rounded-xl object-cover"
                  />

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-1 truncate">
                      {listing.title}
                    </h3>
                    <p className="text-2xl font-bold text-gray-900 mb-2">€{listing.price}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="px-2 py-1 bg-gray-100 rounded-lg">{listing.condition}</span>
                      <span className="px-2 py-1 bg-blue-50 text-[var(--brand-blue)] rounded-lg">
                        {listing.campus}
                      </span>
                      <span className="text-gray-500">
                        {listing.createdAt.toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {activeTab === "active" && (
                      <div className="text-center px-4">
                        <div className="text-2xl font-bold text-gray-900">12</div>
                        <div className="text-xs text-gray-500">Views</div>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Link to={`/listing/${listing.id}`}>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Eye className="w-5 h-5 text-gray-600" />
                        </button>
                      </Link>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit className="w-5 h-5 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-5 h-5 text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No {activeTab} listings
            </h3>
            <p className="text-gray-600 mb-6">
              {activeTab === "active" && "Create your first listing to start selling"}
              {activeTab === "sold" && "Items you've sold will appear here"}
              {activeTab === "draft" && "Draft listings will appear here"}
            </p>
            {activeTab === "active" && (
              <Link to="/create">
                <Button variant="primary">
                  <Plus className="w-5 h-5" />
                  Create Listing
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
