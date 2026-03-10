export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  verified: boolean;
  campus: "Madrid" | "Segovia";
  program?: string;
  year?: string;
  followers: number;
  following: number;
  rating: number;
}

export interface Listing {
  id: string;
  title: string;
  price: number;
  description: string;
  condition: "New" | "Like New" | "Good" | "Fair";
  category: string;
  campus: "Madrid" | "Segovia";
  images: string[];
  sellerId: string;
  tags: string[];
  createdAt: Date;
  status: "active" | "sold" | "draft";
  allowOffers: boolean;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  text: string;
  timestamp: Date;
  type: "text" | "offer";
  offerAmount?: number;
}

export interface Conversation {
  id: string;
  listingId: string;
  participants: string[];
  lastMessage: string;
  lastMessageTime: Date;
  unread: boolean;
}

export const currentUser: User = {
  id: "user-1",
  name: "Alex Martinez",
  email: "alex.martinez@student.ie.edu",
  verified: true,
  campus: "Madrid",
  program: "BBA",
  year: "3rd Year",
  followers: 45,
  following: 32,
  rating: 4.8,
};

export const users: User[] = [
  currentUser,
  {
    id: "user-2",
    name: "Sofia Chen",
    email: "sofia.chen@student.ie.edu",
    verified: true,
    campus: "Madrid",
    program: "MBA",
    year: "1st Year",
    followers: 89,
    following: 67,
    rating: 4.9,
  },
  {
    id: "user-3",
    name: "Lucas Silva",
    email: "lucas.silva@student.ie.edu",
    verified: true,
    campus: "Segovia",
    program: "Computer Science",
    year: "2nd Year",
    followers: 34,
    following: 28,
    rating: 4.7,
  },
  {
    id: "user-4",
    name: "Emma Rodriguez",
    email: "emma.rodriguez@student.ie.edu",
    verified: true,
    campus: "Madrid",
    program: "International Relations",
    year: "4th Year",
    followers: 156,
    following: 112,
    rating: 5.0,
  },
  {
    id: "user-5",
    name: "Marco Bianchi",
    email: "marco.bianchi@student.ie.edu",
    verified: true,
    campus: "Segovia",
    program: "Architecture",
    year: "3rd Year",
    followers: 67,
    following: 45,
    rating: 4.6,
  },
];

export const listings: Listing[] = [
  {
    id: "listing-1",
    title: "Strategic Management Textbook (9th Edition)",
    price: 35,
    description: "Barely used textbook for Strategic Management course. Includes access code (unused). Perfect condition with no highlighting or notes.",
    condition: "Like New",
    category: "Books",
    campus: "Madrid",
    images: ["https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800"],
    sellerId: "user-2",
    tags: ["textbook", "business", "management"],
    createdAt: new Date("2026-03-08"),
    status: "active",
    allowOffers: true,
  },
  {
    id: "listing-2",
    title: "Mountain Bike - Trek Marlin 5",
    price: 280,
    description: "Great bike for weekend rides! Used for 6 months, well-maintained. Perfect for exploring Madrid. Includes lock and lights.",
    condition: "Good",
    category: "Sports & Outdoors",
    campus: "Madrid",
    images: ["https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800"],
    sellerId: "user-3",
    tags: ["bicycle", "sports", "outdoor"],
    createdAt: new Date("2026-03-07"),
    status: "active",
    allowOffers: true,
  },
  {
    id: "listing-3",
    title: "Mini Fridge - Perfect for Dorm",
    price: 60,
    description: "Compact mini fridge, 1.7 cubic feet. Energy efficient and quiet. Moving apartments and can't take it with me. Works perfectly!",
    condition: "Good",
    category: "Home & Living",
    campus: "Segovia",
    images: ["https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800"],
    sellerId: "user-5",
    tags: ["appliance", "dorm", "fridge"],
    createdAt: new Date("2026-03-09"),
    status: "active",
    allowOffers: false,
  },
  {
    id: "listing-4",
    title: "iPad Air (4th Gen) 64GB + Apple Pencil",
    price: 420,
    description: "Sky Blue iPad Air with Apple Pencil (1st gen). Great for note-taking in class. Barely used, still under AppleCare until December 2026.",
    condition: "Like New",
    category: "Electronics",
    campus: "Madrid",
    images: ["https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800"],
    sellerId: "user-4",
    tags: ["electronics", "apple", "tablet", "studying"],
    createdAt: new Date("2026-03-06"),
    status: "active",
    allowOffers: true,
  },
  {
    id: "listing-5",
    title: "Men's Navy Suit Jacket (Size M)",
    price: 85,
    description: "Hugo Boss suit jacket, worn twice for presentations. Classic navy, perfect for business presentations and career fairs. Dry cleaned.",
    condition: "Like New",
    category: "Fashion",
    campus: "Madrid",
    images: ["https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=800"],
    sellerId: "user-2",
    tags: ["clothing", "formal", "business"],
    createdAt: new Date("2026-03-05"),
    status: "active",
    allowOffers: true,
  },
  {
    id: "listing-6",
    title: "2x Coldplay Concert Tickets - Madrid",
    price: 140,
    description: "Two tickets for Coldplay at WiZink Center on March 25. Floor seats! Can't make it anymore due to exams. Selling together.",
    condition: "New",
    category: "Tickets & Events",
    campus: "Madrid",
    images: ["https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800"],
    sellerId: "user-3",
    tags: ["concert", "tickets", "music", "coldplay"],
    createdAt: new Date("2026-03-10"),
    status: "active",
    allowOffers: false,
  },
  {
    id: "listing-7",
    title: "IKEA Desk Lamp with USB Port",
    price: 15,
    description: "White adjustable desk lamp with built-in USB charging port. Perfect for late-night study sessions. Works perfectly.",
    condition: "Good",
    category: "Home & Living",
    campus: "Segovia",
    images: ["https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800"],
    sellerId: "user-5",
    tags: ["furniture", "lamp", "study"],
    createdAt: new Date("2026-03-04"),
    status: "active",
    allowOffers: true,
  },
  {
    id: "listing-8",
    title: "Wireless Noise Cancelling Headphones",
    price: 120,
    description: "Sony WH-1000XM4. Amazing sound quality and noise cancellation. Perfect for studying in libraries. Comes with case and all cables.",
    condition: "Good",
    category: "Electronics",
    campus: "Madrid",
    images: ["https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800"],
    sellerId: "user-4",
    tags: ["electronics", "headphones", "sony", "audio"],
    createdAt: new Date("2026-03-03"),
    status: "active",
    allowOffers: true,
  },
];

export const conversations: Conversation[] = [
  {
    id: "conv-1",
    listingId: "listing-1",
    participants: ["user-1", "user-2"],
    lastMessage: "Is the access code still available?",
    lastMessageTime: new Date("2026-03-10T10:30:00"),
    unread: true,
  },
  {
    id: "conv-2",
    listingId: "listing-4",
    participants: ["user-1", "user-4"],
    lastMessage: "I can meet you at the library tomorrow at 3pm",
    lastMessageTime: new Date("2026-03-09T16:45:00"),
    unread: false,
  },
];

export const messages: Message[] = [
  {
    id: "msg-1",
    conversationId: "conv-1",
    senderId: "user-1",
    text: "Hi! Is this textbook still available?",
    timestamp: new Date("2026-03-10T09:15:00"),
    type: "text",
  },
  {
    id: "msg-2",
    conversationId: "conv-1",
    senderId: "user-2",
    text: "Yes! It's in perfect condition.",
    timestamp: new Date("2026-03-10T09:20:00"),
    type: "text",
  },
  {
    id: "msg-3",
    conversationId: "conv-1",
    senderId: "user-1",
    text: "Is the access code still available?",
    timestamp: new Date("2026-03-10T10:30:00"),
    type: "text",
  },
  {
    id: "msg-4",
    conversationId: "conv-2",
    senderId: "user-1",
    text: "Hi! Interested in the iPad. Could we meet on campus?",
    timestamp: new Date("2026-03-09T14:00:00"),
    type: "text",
  },
  {
    id: "msg-5",
    conversationId: "conv-2",
    senderId: "user-4",
    text: "Sure! When works for you?",
    timestamp: new Date("2026-03-09T14:15:00"),
    type: "text",
  },
  {
    id: "msg-6",
    conversationId: "conv-2",
    senderId: "user-1",
    text: "How about tomorrow at 3pm in the library?",
    timestamp: new Date("2026-03-09T16:30:00"),
    type: "text",
  },
  {
    id: "msg-7",
    conversationId: "conv-2",
    senderId: "user-4",
    text: "I can meet you at the library tomorrow at 3pm",
    timestamp: new Date("2026-03-09T16:45:00"),
    type: "text",
  },
];

export const categories = [
  "All Categories",
  "Books",
  "Electronics",
  "Fashion",
  "Sports & Outdoors",
  "Home & Living",
  "Tickets & Events",
];

export const interests = [
  { id: "books", label: "Books & Textbooks", icon: "📚" },
  { id: "furniture", label: "Furniture", icon: "🪑" },
  { id: "tech", label: "Tech & Electronics", icon: "💻" },
  { id: "fashion", label: "Fashion & Clothing", icon: "👔" },
  { id: "tickets", label: "Tickets & Events", icon: "🎫" },
  { id: "home", label: "Home Goods", icon: "🏠" },
];

export function getUserById(id: string): User | undefined {
  return users.find((u) => u.id === id);
}

export function getListingById(id: string): Listing | undefined {
  return listings.find((l) => l.id === id);
}

export function getListingsBySeller(sellerId: string): Listing[] {
  return listings.filter((l) => l.sellerId === sellerId);
}
