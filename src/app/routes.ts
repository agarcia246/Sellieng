import { createHashRouter } from "react-router";
import {
  Welcome,
  CheckEmail,
  Onboarding,
  Home,
  ListingDetail,
  CreateListing,
  SellerProfile,
  Inbox,
  Notifications,
  Settings,
  SavedItems,
  MyListings,
  Guidelines,
} from "./pages";

export const router = createHashRouter([
  {
    path: "/",
    Component: Welcome,
  },
  {
    path: "/check-email",
    Component: CheckEmail,
  },
  {
    path: "/onboarding",
    Component: Onboarding,
  },
  {
    path: "/home",
    Component: Home,
  },
  {
    path: "/listing/:id",
    Component: ListingDetail,
  },
  {
    path: "/create",
    Component: CreateListing,
  },
  {
    path: "/profile/:id",
    Component: SellerProfile,
  },
  {
    path: "/inbox",
    Component: Inbox,
  },
  {
    path: "/notifications",
    Component: Notifications,
  },
  {
    path: "/settings",
    Component: Settings,
  },
  {
    path: "/saved",
    Component: SavedItems,
  },
  {
    path: "/my-listings",
    Component: MyListings,
  },
  {
    path: "/guidelines",
    Component: Guidelines,
  },
]);