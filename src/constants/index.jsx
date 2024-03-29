import { Bell, Download, SquarePen, Ticket, Users } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";


export const navItems = [
  { label: "Features", href: "#" },
  { label: "Know How", href: "#" },
  { label: "Developers", href: "#" },
  { label: "Contact Us", href: "#" },
];



export const features = [
  {
    icon: <Bell />,
    text: "Real Time Notification",
    description:
      "Instantly stay informed with live updates on event registrations, ensuring you never miss a beat. Seamless, real-time notifications, guaranteed",
  },
  {
    icon: <SquarePen />,
    text: "Easy Event Creation",
    description:
      "Effortlessly craft events with our intuitive tools. Simplify event creation and reach your audience seamlessly. Easy event planning, perfected",
  },
  {
    icon: <Ticket />,
    text: "Seamless user Invitation",
    description:
      "Effortlessly invite guests with our seamless user invitation feature. Simplify event outreach and connect with your audience effortlessly",
  },
  {
    icon: <GlobeLock />,
    text: "Flexible Event Privacy",
    description:
      "Customize event privacy effortlessly. Tailor your event's visibility to suit your needs with our flexible privacy options",
  },
  {
    icon: <Users />,
    text: "Easy Attendee management",
    description:
      "Simplify attendee management effortlessly. Seamlessly handle your event's participants with our easy attendee management feature",
  },
  {
    icon: <Download />,
    text: "Download Attendee List",
    description:
      "Easily download attendee lists with a simple click. Access comprehensive attendee data effortlessly with our download attendee list feature",
  },
];

export const checklistItems = [
  {
    title: "Sign Up by creating your account",
    description:
      "This will help in tracking the events of a person and will help in smooth management",
  },
  {
    title: "Fill up a simple form to create your event",
    description:
      "By this the user can give necessary details of the event.",
  },
  {
    title: "Accept or Reject Invitations",
    description:
      "Sometimes you dont want some people to join your party, Eventify will help you to accept or reject invitations.",
  },
  {
    title: "Download attendee list and send emails",
    description:
      "Eventify also provides a list of all attendees and also send personalized mail to everyone.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    image: user1,
    name: "Rahul Jyoti Mishra",
    features: [

    ],
  },
  {
    title: "Pro",
    image: user2,
    name: "Shubham Sharma",
    features: [

    ],
  },
  {
    title: "",
    image: user1,
    name: "Anurudh Gupta",
    features: [

    ],
  },
  {
    title: "Enterprise",
    image: user1,
    name: "Garv Baheti",
    features: [

    ],
  },
];


