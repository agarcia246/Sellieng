import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/Button";
import { ChevronRight, ChevronLeft, Upload } from "lucide-react";
import { interests } from "../data/mockData";

export function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [campus, setCampus] = useState<"Madrid" | "Segovia" | "">("");
  const [pickupPreference, setPickupPreference] = useState("");
  const [name, setName] = useState("");
  const [program, setProgram] = useState("");
  const [year, setYear] = useState("");
  const [showListings, setShowListings] = useState(true);

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else navigate("/home");
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const canProceed = () => {
    if (step === 1) return selectedInterests.length > 0;
    if (step === 2) return campus !== "";
    if (step === 3) return name !== "";
    return true;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                      s === step
                        ? "bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-cyan)] text-white"
                        : s < step
                        ? "bg-[var(--brand-blue)] text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`flex-1 h-1 mx-2 transition-all ${
                        s < step ? "bg-[var(--brand-blue)]" : "bg-gray-200"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs font-medium text-gray-600">
              <span>Interests</span>
              <span>Campus</span>
              <span>Profile</span>
            </div>
          </div>

          {/* Step 1: Interests */}
          {step === 1 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                What are you interested in?
              </h2>
              <p className="text-gray-600 mb-8">
                Select categories to personalize your feed
              </p>

              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest) => (
                  <button
                    key={interest.id}
                    onClick={() => toggleInterest(interest.id)}
                    className={`p-6 rounded-2xl border-2 transition-all text-left hover:scale-105 ${
                      selectedInterests.includes(interest.id)
                        ? "border-[var(--brand-blue)] bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="text-3xl mb-2">{interest.icon}</div>
                    <div className="font-semibold text-gray-900">
                      {interest.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Campus & Pickup */}
          {step === 2 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Choose your campus
              </h2>
              <p className="text-gray-600 mb-8">
                This helps us show you relevant listings
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Campus Location
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {["Madrid", "Segovia"].map((c) => (
                      <button
                        key={c}
                        onClick={() => setCampus(c as "Madrid" | "Segovia")}
                        className={`p-6 rounded-2xl border-2 transition-all hover:scale-105 ${
                          campus === c
                            ? "border-[var(--brand-blue)] bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="font-semibold text-gray-900 text-lg">
                          {c}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Pickup Preference
                  </label>
                  <select
                    value={pickupPreference}
                    onChange={(e) => setPickupPreference(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--brand-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]/20"
                  >
                    <option value="">Select preference...</option>
                    <option value="campus">On Campus</option>
                    <option value="library">Library</option>
                    <option value="cafeteria">Cafeteria</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Profile Setup */}
          {step === 3 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Set up your profile
              </h2>
              <p className="text-gray-600 mb-8">
                Help other students know who you are
              </p>

              <div className="space-y-6">
                <div className="flex justify-center">
                  <button className="relative group">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-cyan)] flex items-center justify-center text-white text-3xl font-semibold">
                      {name.charAt(0).toUpperCase() || "?"}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <Upload className="w-6 h-6 text-white" />
                    </div>
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--brand-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]/20"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Program <span className="text-gray-400">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={program}
                      onChange={(e) => setProgram(e.target.value)}
                      placeholder="e.g., BBA"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--brand-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Year <span className="text-gray-400">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      placeholder="e.g., 3rd Year"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--brand-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]/20"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <input
                    type="checkbox"
                    id="showListings"
                    checked={showListings}
                    onChange={(e) => setShowListings(e.target.checked)}
                    className="w-5 h-5 rounded border-gray-300 text-[var(--brand-blue)] focus:ring-[var(--brand-blue)]"
                  />
                  <label htmlFor="showListings" className="text-sm text-gray-700">
                    Show my listings to the IE community
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            {step > 1 ? (
              <Button variant="ghost" onClick={handleBack}>
                <ChevronLeft className="w-5 h-5" />
                Back
              </Button>
            ) : (
              <div></div>
            )}

            <Button
              variant="primary"
              onClick={handleNext}
              disabled={!canProceed()}
            >
              {step === 3 ? "Finish setup" : "Continue"}
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
