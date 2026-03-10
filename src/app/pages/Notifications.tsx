import { Link, useNavigate } from "react-router";
import { ChevronLeft, Heart, MessageCircle, UserPlus, Tag } from "lucide-react";

export function Notifications() {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      type: "follow",
      user: "Sofia Chen",
      action: "started following you",
      time: "5 minutes ago",
      icon: UserPlus,
      link: "/profile/user-2",
      unread: true,
    },
    {
      id: 2,
      type: "saved",
      user: "Lucas Silva",
      action: "saved your listing",
      item: "Strategic Management Textbook",
      time: "1 hour ago",
      icon: Heart,
      link: "/listing/listing-1",
      unread: true,
    },
    {
      id: 3,
      type: "message",
      user: "Emma Rodriguez",
      action: "sent you a message",
      time: "3 hours ago",
      icon: MessageCircle,
      link: "/inbox",
      unread: false,
    },
    {
      id: 4,
      type: "offer",
      user: "Marco Bianchi",
      action: "made an offer on your",
      item: "iPad Air",
      time: "Yesterday",
      icon: Tag,
      link: "/inbox",
      unread: false,
    },
    {
      id: 5,
      type: "follow",
      user: "Ana Garcia",
      action: "started following you",
      time: "2 days ago",
      icon: UserPlus,
      link: "/profile/user-5",
      unread: false,
    },
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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
          <button className="text-sm text-[var(--brand-blue)] hover:underline">
            Mark all as read
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {notifications.map((notif, index) => {
            const Icon = notif.icon;
            return (
              <Link
                key={notif.id}
                to={notif.link}
                className={`flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors ${
                  index !== notifications.length - 1 ? "border-b border-gray-100" : ""
                } ${notif.unread ? "bg-blue-50/30" : ""}`}
              >
                <div className={`p-3 rounded-full ${
                  notif.unread
                    ? "bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-cyan)]"
                    : "bg-gray-100"
                }`}>
                  <Icon className={`w-5 h-5 ${notif.unread ? "text-white" : "text-gray-600"}`} />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-gray-900">
                    <span className="font-semibold">{notif.user}</span>{" "}
                    <span className="text-gray-600">{notif.action}</span>
                    {notif.item && (
                      <span className="font-medium"> "{notif.item}"</span>
                    )}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{notif.time}</p>
                </div>

                {notif.unread && (
                  <div className="w-2 h-2 bg-[var(--brand-blue)] rounded-full mt-2 flex-shrink-0"></div>
                )}
              </Link>
            );
          })}
        </div>

        {notifications.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No notifications yet
            </h3>
            <p className="text-gray-600">
              We'll notify you when something happens
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
