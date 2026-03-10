import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ChevronLeft, Send, MoreVertical, Flag, Ban } from "lucide-react";
import { conversations, messages, getListingById, getUserById, currentUser } from "../data/mockData";

export function Inbox() {
  const navigate = useNavigate();
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]?.id || null);
  const [messageText, setMessageText] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const selectedConv = conversations.find((c) => c.id === selectedConversation);
  const convMessages = messages.filter((m) => m.conversationId === selectedConversation);
  const listing = selectedConv ? getListingById(selectedConv.listingId) : null;
  const otherParticipant = selectedConv
    ? getUserById(selectedConv.participants.find((p) => p !== currentUser.id) || "")
    : null;

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    // In real app, would send message
    setMessageText("");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200 z-50 shadow-sm">
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

      <div className="flex-1 flex overflow-hidden">
        {/* Conversations List */}
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Messages</h2>
          </div>

          <div className="flex-1 overflow-y-auto">
            {conversations.length > 0 ? (
              conversations.map((conv) => {
                const convListing = getListingById(conv.listingId);
                const otherUser = getUserById(
                  conv.participants.find((p) => p !== currentUser.id) || ""
                );

                return (
                  <button
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv.id)}
                    className={`w-full p-4 flex gap-3 hover:bg-gray-50 transition-colors border-b border-gray-100 ${
                      selectedConversation === conv.id ? "bg-blue-50" : ""
                    }`}
                  >
                    <img
                      src={convListing?.images[0]}
                      alt=""
                      className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 text-left min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-gray-900 truncate">
                          {otherUser?.name}
                        </span>
                        {conv.unread && (
                          <span className="w-2 h-2 bg-[var(--brand-blue)] rounded-full flex-shrink-0"></span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 truncate">{convListing?.title}</p>
                      <p className="text-xs text-gray-500 truncate">{conv.lastMessage}</p>
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-600">No conversations yet</p>
                <p className="text-sm text-gray-500 mt-2">
                  Start chatting with sellers!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Chat Area */}
        {selectedConversation && listing && otherParticipant ? (
          <div className="flex-1 flex flex-col bg-white">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <Link
                to={`/listing/${listing.id}`}
                className="flex items-center gap-3 hover:bg-white rounded-xl p-3 transition-colors"
              >
                <img
                  src={listing.images[0]}
                  alt={listing.title}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 truncate">{listing.title}</h3>
                  <p className="text-sm text-gray-600">€{listing.price}</p>
                </div>
                <span className="text-sm text-[var(--brand-blue)] font-medium hover:underline">
                  View listing
                </span>
              </Link>
            </div>

            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
              <Link
                to={`/profile/${otherParticipant.id}`}
                className="flex items-center gap-2 hover:opacity-70"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-cyan)] flex items-center justify-center text-white font-medium">
                  {otherParticipant.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-gray-900">
                      {otherParticipant.name}
                    </span>
                    {otherParticipant.verified && (
                      <span className="text-[var(--brand-blue)] text-xs">✓</span>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">{otherParticipant.campus} Campus</span>
                </div>
              </Link>

              <div className="relative">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <MoreVertical className="w-5 h-5 text-gray-600" />
                </button>

                {showMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-10">
                    <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <Flag className="w-4 h-4" />
                      Report
                    </button>
                    <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                      <Ban className="w-4 h-4" />
                      Block User
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {convMessages.map((msg) => {
                const isCurrentUser = msg.senderId === currentUser.id;

                return (
                  <div
                    key={msg.id}
                    className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}
                  >
                    {msg.type === "offer" ? (
                      <div className="max-w-xs p-4 rounded-2xl bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-cyan)] text-white">
                        <p className="font-semibold mb-1">Offer: €{msg.offerAmount}</p>
                        <p className="text-sm opacity-90">{msg.text}</p>
                      </div>
                    ) : (
                      <div
                        className={`max-w-xs px-4 py-2 rounded-2xl ${
                          isCurrentUser
                            ? "bg-[var(--brand-blue)] text-white"
                            : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <p>{msg.text}</p>
                        <p
                          className={`text-xs mt-1 ${
                            isCurrentUser ? "text-white/70" : "text-gray-500"
                          }`}
                        >
                          {msg.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-2 border-t border-gray-100 bg-gray-50">
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                  Make offer
                </button>
                <button className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                  Suggest meetup time
                </button>
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:border-[var(--brand-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]/20"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-6 py-3 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-cyan)] text-white rounded-full hover:shadow-lg transition-all"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-white">
            <div className="text-center">
              <p className="text-gray-600">Select a conversation to start chatting</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
