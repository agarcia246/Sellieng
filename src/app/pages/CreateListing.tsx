import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { Upload, X, ChevronLeft } from "lucide-react";
import { Button } from "../components/Button";
import { categories } from "../data/mockData";

export function CreateListing() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [campus, setCampus] = useState<"Madrid" | "Segovia" | "">("");
  const [description, setDescription] = useState("");
  const [allowOffers, setAllowOffers] = useState(true);
  const [hideLastName, setHideLastName] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  const conditions = ["New", "Like New", "Good", "Fair"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, would upload images and create listing
    alert("Listing published!");
    navigate("/my-listings");
  };

  const handleImageUpload = () => {
    // Simulate image upload
    const mockImages = [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800",
    ];
    setImages([...images, mockImages[images.length % 2]]);
  };

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
              <span className="font-medium">Cancel</span>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Listing</h1>
              <p className="text-gray-600 mb-8">Fill in the details below to post your item</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Photo Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Photos
                  </label>
                  <div className="grid grid-cols-4 gap-4">
                    {images.map((img, idx) => (
                      <div key={idx} className="relative aspect-square rounded-xl overflow-hidden group">
                        <img src={img} alt="" className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => setImages(images.filter((_, i) => i !== idx))}
                          className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    {images.length < 4 && (
                      <button
                        type="button"
                        onClick={handleImageUpload}
                        className="aspect-square border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-[var(--brand-blue)] hover:bg-blue-50 transition-colors"
                      >
                        <Upload className="w-6 h-6 text-gray-400" />
                        <span className="text-xs text-gray-500">Add Photo</span>
                      </button>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Add up to 4 photos</p>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g., iPhone 13 Pro 128GB"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--brand-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]/20"
                  />
                </div>

                {/* Category & Price */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--brand-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]/20"
                    >
                      <option value="">Select category</option>
                      {categories.filter((c) => c !== "All Categories").map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price (€)
                    </label>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="0"
                      required
                      min="0"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--brand-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]/20"
                    />
                  </div>
                </div>

                {/* Condition & Campus */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Condition
                    </label>
                    <select
                      value={condition}
                      onChange={(e) => setCondition(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--brand-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]/20"
                    >
                      <option value="">Select condition</option>
                      {conditions.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Campus
                    </label>
                    <select
                      value={campus}
                      onChange={(e) => setCampus(e.target.value as "Madrid" | "Segovia")}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--brand-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]/20"
                    >
                      <option value="">Select campus</option>
                      <option value="Madrid">Madrid</option>
                      <option value="Segovia">Segovia</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your item, its condition, and any important details..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--brand-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]/20 resize-none"
                  />
                </div>

                {/* Options */}
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                    <input
                      type="checkbox"
                      checked={allowOffers}
                      onChange={(e) => setAllowOffers(e.target.checked)}
                      className="w-5 h-5 rounded border-gray-300 text-[var(--brand-blue)] focus:ring-[var(--brand-blue)]"
                    />
                    <div>
                      <span className="text-sm font-medium text-gray-900 block">
                        Allow offers
                      </span>
                      <span className="text-xs text-gray-600">
                        Let buyers make price offers
                      </span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                    <input
                      type="checkbox"
                      checked={hideLastName}
                      onChange={(e) => setHideLastName(e.target.checked)}
                      className="w-5 h-5 rounded border-gray-300 text-[var(--brand-blue)] focus:ring-[var(--brand-blue)]"
                    />
                    <div>
                      <span className="text-sm font-medium text-gray-900 block">
                        Hide last name
                      </span>
                      <span className="text-xs text-gray-600">
                        Show only your first name to buyers
                      </span>
                    </div>
                  </label>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Publish Listing
                </Button>
              </form>
            </div>
          </div>

          {/* Preview */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Preview</h3>

              <div className="border-2 border-gray-200 rounded-xl overflow-hidden">
                {images.length > 0 ? (
                  <img src={images[0]} alt="" className="w-full aspect-square object-cover" />
                ) : (
                  <div className="w-full aspect-square bg-gray-100 flex items-center justify-center">
                    <Upload className="w-12 h-12 text-gray-400" />
                  </div>
                )}

                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1 truncate">
                    {title || "Your listing title"}
                  </h4>
                  <p className="text-2xl font-bold text-gray-900 mb-2">
                    €{price || "0"}
                  </p>
                  {condition && (
                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg">
                      {condition}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-sm text-gray-700">
                  💡 <strong>Tip:</strong> Add clear photos and a detailed description to attract more buyers!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
