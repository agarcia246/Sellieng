import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ChevronLeft, ChevronRight, User, Shield, Bell, HelpCircle, LogOut } from "lucide-react";
import { currentUser } from "../data/mockData";
import { Button } from "../components/Button";

export function Settings() {
  const navigate = useNavigate();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [showProfile, setShowProfile] = useState(true);

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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

        <div className="space-y-6">
          {/* Account Section */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900">Account</h3>
            </div>

            <Link
              to={`/profile/${currentUser.id}`}
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-100"
            >
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="font-medium text-gray-900">Edit Profile</div>
                  <div className="text-sm text-gray-500">Update your profile information</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>

            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-gray-600" />
                  <div>
                    <div className="font-medium text-gray-900">Email Verification</div>
                    <div className="text-sm text-gray-500">{currentUser.email}</div>
                  </div>
                </div>
                <div className="px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-full flex items-center gap-1">
                  <span>✓</span>
                  <span>Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Section */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900">Privacy</h3>
            </div>

            <div className="p-4 space-y-4">
              <label className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Show profile to IE community</div>
                  <div className="text-sm text-gray-500">Let other students see your profile</div>
                </div>
                <input
                  type="checkbox"
                  checked={showProfile}
                  onChange={(e) => setShowProfile(e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-[var(--brand-blue)] focus:ring-[var(--brand-blue)]"
                />
              </label>

              <button className="flex items-center justify-between w-full hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <div>
                  <div className="font-medium text-gray-900">Blocked Users</div>
                  <div className="text-sm text-gray-500">Manage blocked accounts</div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notifications
              </h3>
            </div>

            <div className="p-4 space-y-4">
              <label className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Email Notifications</div>
                  <div className="text-sm text-gray-500">Receive updates via email</div>
                </div>
                <input
                  type="checkbox"
                  checked={emailNotifications}
                  onChange={(e) => setEmailNotifications(e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-[var(--brand-blue)] focus:ring-[var(--brand-blue)]"
                />
              </label>

              <label className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Push Notifications</div>
                  <div className="text-sm text-gray-500">Get notified about messages and offers</div>
                </div>
                <input
                  type="checkbox"
                  checked={pushNotifications}
                  onChange={(e) => setPushNotifications(e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-[var(--brand-blue)] focus:ring-[var(--brand-blue)]"
                />
              </label>
            </div>
          </div>

          {/* Help & Safety Section */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900">Help & Safety</h3>
            </div>

            <Link
              to="/guidelines"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-100"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-gray-600" />
                <div className="font-medium text-gray-900">Community Guidelines</div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>

            <button className="flex items-center justify-between w-full p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-gray-600" />
                <div className="font-medium text-gray-900">Help Center</div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* About Section */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <button className="flex items-center justify-between w-full p-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
              <div className="font-medium text-gray-900">Terms of Service</div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="flex items-center justify-between w-full p-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
              <div className="font-medium text-gray-900">Privacy Policy</div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <div className="p-4 text-sm text-gray-500">
              Version 1.0.0
            </div>
          </div>

          {/* Logout */}
          <Button
            variant="danger"
            size="lg"
            className="w-full"
            onClick={() => navigate("/")}
          >
            <LogOut className="w-5 h-5" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
