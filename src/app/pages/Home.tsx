import { useState } from "react";
import { Search, Plus, Bell, MessageCircle, User, Heart, Package } from "lucide-react";
import { Link } from "react-router";
import { ListingCard } from "../components/ListingCard";
import { listings, categories, currentUser } from "../data/mockData";
import { Button } from "../components/Button";

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedCampus, setSelectedCampus] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

  const filteredListings = listings.filter((listing) => {
    if (selectedCategory !== "All Categories" && listing.category !== selectedCategory)
      return false;
    if (selectedCampus !== "all" && listing.campus !== selectedCampus)
      return false;
    if (searchQuery && !listing.title.toLowerCase().includes(searchQuery.toLowerCase()))
      return false;
    if (listing.price < priceRange[0] || listing.price > priceRange[1])
      return false;
    return listing.status === "active";
  });

  const sortedListings = [...filteredListings].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
      default:
        return b.createdAt.getTime() - a.createdAt.getTime();
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/home" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-cyan)] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-cyan)] bg-clip-text text-transparent">
                SELLieNG
              </span>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:border-[var(--brand-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]/20"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <Link to="/create">
                <Button variant="primary" size="sm">
                  <Plus className="w-5 h-5" />
                  Post Item
                </Button>
              </Link>

              <Link to="/inbox">
                <button className="p-2 hover:bg-gray-100 rounded-lg relative transition-colors">
                  <MessageCircle className="w-6 h-6 text-gray-700" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
              </Link>

              <Link to="/notifications">
                <button className="p-2 hover:bg-gray-100 rounded-lg relative transition-colors">
                  <Bell className="w-6 h-6 text-gray-700" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
              </Link>

              <div className="relative group">
                <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-cyan)] flex items-center justify-center text-white font-medium">
                    {currentUser.name.charAt(0)}
                  </div>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  <Link to={`/profile/${currentUser.id}`} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors">
                    <User className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">My Profile</span>
                  </Link>
                  <Link to="/my-listings" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors">
                    <Package className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">My Listings</span>
                  </Link>
                  <Link to="/saved" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors">
                    <Heart className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">Saved Items</span>
                  </Link>
                  <div className="border-t border-gray-100 my-2"></div>
                  <Link to="/settings" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors">
                    <span className="text-sm text-gray-700">Settings</span>
                  </Link>
                  <Link to="/" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors text-red-600">
                    <span className="text-sm">Logout</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Filters</h3>

              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === category
                          ? "bg-blue-50 text-[var(--brand-blue)] font-medium"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Campus Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Campus
                </label>
                <div className="space-y-2">
                  {["all", "Madrid", "Segovia"].map((campus) => (
                    <label key={campus} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="campus"
                        checked={selectedCampus === campus}
                        onChange={() => setSelectedCampus(campus)}
                        className="text-[var(--brand-blue)] focus:ring-[var(--brand-blue)]"
                      />
                      <span className="text-sm text-gray-700">
                        {campus === "all" ? "All Campuses" : campus}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <div className="flex items-center gap-2 mb-2">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([Number(e.target.value), priceRange[1]])
                    }
                    className="w-20 px-2 py-1 text-sm border border-gray-200 rounded-lg"
                  />
                  <span className="text-gray-500">-</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], Number(e.target.value)])
                    }
                    className="w-20 px-2 py-1 text-sm border border-gray-200 rounded-lg"
                  />
                </div>
                <p className="text-xs text-gray-500">€{priceRange[0]} - €{priceRange[1]}</p>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:border-[var(--brand-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]/20"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Listings Grid */}
          <main className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory}
              </h2>
              <p className="text-gray-600">
                {sortedListings.length} {sortedListings.length === 1 ? "item" : "items"}
              </p>
            </div>

            {sortedListings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedListings.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No items found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your filters or search query
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
