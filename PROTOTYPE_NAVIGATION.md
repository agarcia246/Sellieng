# SELLieNG - IE University Student Marketplace Prototype

## Navigation Flow

### Authentication Flow
1. **Welcome (/)** - Login page with magic link email authentication
   - Click "Send me a magic link" → navigates to Check Email
   
2. **Check Your Email (/check-email)** - Confirmation screen
   - Click "Open email app" → simulates email verification → navigates to Onboarding
   
3. **Onboarding (/onboarding)** - 3-step setup process
   - Step 1: Choose interests/categories
   - Step 2: Select campus (Madrid/Segovia) and pickup preference
   - Step 3: Profile setup (name, program, year, photo)
   - Click "Finish setup" → navigates to Home

### Main Application
4. **Home (/home)** - Marketplace feed
   - Browse listings with filters (category, campus, price, sort)
   - Click listing card → navigates to Listing Detail
   - Click "Post Item" → navigates to Create Listing
   - Click inbox icon → navigates to Inbox
   - Click bell icon → navigates to Notifications
   - Click profile dropdown → access to:
     - My Profile → navigates to Seller Profile
     - My Listings → navigates to My Listings
     - Saved Items → navigates to Saved Items
     - Settings → navigates to Settings
     - Logout → returns to Welcome

5. **Listing Detail (/listing/:id)** - Individual item view
   - View item details, photos, description
   - Click seller card → navigates to Seller Profile
   - Click "Message Seller" → navigates to Inbox
   - Click "Make an Offer" → opens offer modal → navigates to Inbox
   - Click similar items → navigates to other Listing Details

6. **Create Listing (/create)** - Post new item
   - Upload photos, fill in details (title, category, price, condition, campus, description)
   - Toggle options (allow offers, hide last name)
   - Live preview on the right
   - Click "Publish Listing" → navigates to My Listings

7. **Seller Profile (/profile/:id)** - User profile view
   - View seller stats (followers, following, listings)
   - Tabs: Listings, Reviews, Sold Items
   - Click "Follow" → toggles following state
   - Click listing cards → navigates to Listing Detail

8. **Inbox (/inbox)** - Messaging interface
   - Two-panel layout: conversation list + chat thread
   - View conversation context (item thumbnail, seller info)
   - Send messages, make offers, suggest meetup times
   - Access safety actions (Report, Block)

9. **Notifications (/notifications)** - Activity feed
   - View follow notifications, saved item alerts, message notifications, offer notifications
   - Click notification → navigates to relevant page (profile, listing, inbox)

10. **Saved Items (/saved)** - Wishlist
    - Grid of saved listings
    - Click card → navigates to Listing Detail

11. **My Listings (/my-listings)** - Seller dashboard
    - Tabs: Active, Sold, Drafts
    - View stats (views per listing)
    - Actions: View, Edit, Delete listings
    - Click "New Listing" → navigates to Create Listing

12. **Settings (/settings)** - Account settings
    - Edit profile
    - Email verification status
    - Privacy toggles
    - Notification preferences
    - Link to Community Guidelines
    - Logout button → returns to Welcome

13. **Community Guidelines (/guidelines)** - Safety and rules
    - Sections: Respect, Safety, Honesty, Communication, Prohibited Items
    - Report violations
    - Contact support

## Key Features Demonstrated

### Design System
- **Colors**: Blue (#2563eb) + Cyan (#06b6d4) gradients
- **Typography**: Clean hierarchy with Inter-style fonts
- **Components**: Rounded corners (rounded-xl, rounded-2xl), soft shadows, card-based layouts
- **Interactions**: Hover states, smooth transitions, micro-interactions

### Functional Prototypes
- Magic link authentication flow
- Multi-step onboarding with progress indicator
- Advanced filtering and search
- Real-time chat interface
- Offer system
- Follow/unfollow functionality
- Save/unsave items
- Profile management
- Safety features (report, block)

### Mock Data
- 8 realistic listings (textbook, bike, mini-fridge, iPad, suit jacket, concert tickets, desk lamp, headphones)
- 5 users with verified IE status
- Conversations and messages
- Reviews and ratings
- European pricing (€)
- Madrid & Segovia campus locations

## Testing the Prototype

1. Start at `/` (Welcome page)
2. Enter any IE email (e.g., test@student.ie.edu)
3. Click "Send me a magic link"
4. Click "Open email app" on confirmation
5. Complete 3-step onboarding
6. Explore the marketplace!

All navigation is fully functional with realistic transitions and interactions.
