<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from './NavDropdown';

const navigation = [
  {
    label: 'About',
    children: [
      {
        label: 'About Rwanda Mining Week',
        to: '/about/mining-indaba',
        children: [
          { label: 'Meet the Team', to: '/about/mining-indaba/team' },
        ],
      },
      { label: 'Strategic & Media Partners', to: '/about/partners' },
      { label: 'PR & Media', to: '/about/media' },
      { label: 'Sustainability Initiatives', to: '/about/sustainability' },
      {
        label: '2025 Highlights',
        to: '/about/highlights',
        children: [
          { label: 'Thursday Highlights', to: '/about/highlights/thursday' },
          { label: 'Wednesday Highlights', to: '/about/highlights/wednesday' },
          { label: 'Tuesday Highlights', to: '/about/highlights/tuesday' },
          { label: 'Monday Highlights', to: '/about/highlights/monday' },
          { label: 'Sunday Highlights', to: '/about/highlights/sunday' },
        ],
      },
      { label: 'Contact Us', to: '/about/contact' },
    ],
  },
  {
    label: 'Attend',
    to: '/attend',
    children: [
      {
        label: 'Why Attend',
        to: '/attend/why-attend',
        children: [
          { label: 'Exploration & Junior Mining Companies', to: '/attend/why-attend/exploration-junior' },
          { label: 'Majors & Mid-tiers', to: '/attend/why-attend/majors-mid-tiers' },
          { label: 'Mining Service Providers', to: '/attend/why-attend/mining-service-providers' },
        ],
      },
      { label: 'Testimonials', to: '/exhibit-sponsor/testimonials' }, // Updated to match App.jsx
      { label: '2025 Post Event Report', to: '/2025-post-event-report' }, // Updated to match App.jsx
      { label: 'Register Interest', to: '/register-interest' }, // Updated to match App.jsx
      { label: 'Who Attends', to: '/attend/who-attends' },
    
    ],
  },
  {
    label: 'Exhibit or Sponsor',
    children: [
      { label: 'Why Exhibit or Sponsor', to: '/exhibit-sponsor/why' },
      { label: 'Exhibitor bronchure', to: '/exhibit-sponsor/why/2026-exhibitor-brochure' },
      {
        label: 'Who Attended in 2025',
        children: [
          { label: '2025 Sponsors', to: '/exhibit-sponsor/who-attended-in-2025/sponsors' },
          { label: '2025 Exhibitors', to: '/exhibit-sponsor/who-attended-in-2025/exhibitors' },
        ],
      },
      { label: 'Testimonials', to: '/exhibit-sponsor/testimonials' },
      { label: 'Enquire to Exhibit or Sponsor', to: '/exhibit-sponsor/enquire' },
      { label: 'Client Zone', to: '/exhibit-sponsor/client-zone' },
    ],
  },
  { label: 'Content Hub', to: '/content-hub' },
=======
import { useState } from "react";
import { Link } from "react-router-dom";
import NavDropdown from "./NavDropdown";

const navigation = [
  {
    label: "About",
    to: "/about",
    children: [
      {
        label: "About Mining Indaba",
        to: "/about/mining-indaba",
        children: [{ label: "Meet the team", to: "/about/mining-indaba/team" }],
      },
      { label: "Strategic & Media Partners", to: "/about/partners" },
      { label: "PR & Media", to: "/about/media" },
      { label: "Sustainability Initiatives", to: "/about/sustainability" },
      {
        label: "2025 Highlights",
        to: "/about/highlights",
        children: [
          { label: "Thursday Highlights", to: "/about/highlights/thursday" },
          { label: "Wednesday Highlights", to: "/about/highlights/wednesday" },
          { label: "Tuesday Highlights", to: "/about/highlights/tuesday" },
          { label: "Monday Highlights", to: "/about/highlights/monday" },
          { label: "Sunday Highlights", to: "/about/highlights/sunday" },
        ],
      },
      { label: "Contact Us", to: "/about/contact" },
    ],
  },
  {
    label: "Attend",
    to: "/attend",
    children: [
      {
        label: "Why Attend",
        to: "/attend/why-attend",
        children: [
          {
            label: "Exploration & Junior Mining Companies",
            to: "/attend/why-attend/exploration-junior",
          },
          {
            label: "Majors & Mid-tiers",
            to: "/attend/why-attend/majors-mid-tiers",
          },
          {
            label: "Mining Service Providers",
            to: "/attend/why-attend/mining-service-providers",
          },
          { label: "Governments", to: "/attend/why-attend/governments" },
          { label: "Investors", to: "/attend/why-attend/investors" },
          {
            label: "Downstream Buyers",
            to: "/attend/why-attend/downstream-buyers",
          },
        ],
      },
      { label: "Testimonials", to: "/exhibit-sponsor/testimonials" },
      { label: "2025 Post Event Report", to: "/2025-post-event-report" },
      { label: "Register Interest", to: "/register-interest" },
    ],
  },
  {
    label: "Exhibit or Sponsor",
    to: "/exhibit-sponsor",
    children: [
      { label: "Why Exhibit or Sponsor?", to: "/exhibit-sponsor/why" },
      {
        label: "2026 Exhibitor Brochure",
        to: "/exhibit-sponsor/why/2026-exhibitor-brochure",
      },
      {
        label: "Who Attended In 2025",
        to: "/exhibit-sponsor/who-attended-in-2025",
        children: [
          {
            label: "2025 Sponsors",
            to: "/exhibit-sponsor/who-attended-in-2025/sponsors",
          },
          {
            label: "2025 Exhibitors",
            to: "/exhibit-sponsor/who-attended-in-2025/exhibitors",
          },
        ],
      },
      { label: "Testimonials", to: "/exhibit-sponsor/testimonials" },
      {
        label: "Enquire to Exhibit or Sponsor",
        to: "/exhibit-sponsor/enquire",
      },
      { label: "Client Zone", to: "/exhibit-sponsor/client-zone" },
      {
        label: "Exhibitor & Sponsor Handbook",
        to: "/exhibit-sponsor/handbook",
      },
      { label: "Become an Exhibitor", to: "/exhibit-sponsor/become-exhibitor" },
      { label: "Become a Sponsor", to: "/exhibit-sponsor/become-sponsor" },
      { label: "Networking Opportunities", to: "/exhibit-sponsor/networking" },
    ],
  },
  { label: "2026 Theme & Advisory Board", to: "/theme-advisory" },
  { label: "Content Hub", to: "/content-hub" },
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

<<<<<<< HEAD
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-40 mt-8">
      <div className="container flex flex-col md:flex-row md:items-center md:justify-between py-4 shadow-lg">
        {/* Left: Logo & Event Info */}
        <div className="flex items-center justify-between w-full md:w-auto px-4">
          <img
            className="h-20 w-auto"
            src="/rwanda_mining_week_logo.png" // Updated logo placeholder
            alt="Rwanda Mining Week"
          />
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6 text-[#004F71]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Right: Buttons & Nav Links */}
        <div
          className={`flex flex-col md:flex-col md:items-end gap-4 w-full md:w-auto px-4 ${
            isOpen ? 'block' : 'hidden md:block'
          }`}
        >
          {/* Buttons */}
          <div className="flex gap-3 justify-center md:justify-end w-full md:w-auto">
            <button className="bg-[#004F71] hover:bg-[#003a54] text-white font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-wide">
              EXHIBIT OR SPONSOR
            </button>
            <button className="bg-[#ADD8E6] hover:bg-[#88c4d0] text-black font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-wide">
              REGISTER INTEREST
            </button>
          </div>
          {/* Nav Links */}
          <div className="flex flex-col md:flex-row gap-2 items-center justify-center w-full md:w-auto mt-4 md:mt-0">
            {/* Home Icon Link */}
            <Link
              to="/"
              className="flex items-center px-3 py-2 rounded text-base font-medium text-[blue] hover:text-[#ADD8E6] transition-colors"
            >
              <img src="/home-icon.svg" alt="Home" className="h-5 w-5" />
            </Link>

            {/* NavDropdown Components */}
=======
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-40 mt-8">
      <div className="container flex flex-col md:flex-row md:items-center md:justify-between py-4 shadow-lg">
        {/* Logo Section */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <img
            className="h-20 w-auto"
            src="/mining_indaba_logo_1.png"
            alt="Mining Indaba"
          />
        </div>

        {/* Buttons & Nav */}
        <div className="flex flex-col md:flex-col md:items-end gap-4 w-full md:w-auto">
          {/* CTA Buttons */}
          <div className="flex gap-3 justify-center md:justify-end w-full md:w-auto">
            <Link
              to="/exhibit-sponsor/why"
              className="bg-[#64a63a] hover:bg-[#5cb030] text-white font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-wide"
            >
              EXHIBIT OR SPONSOR
            </Link>
            <Link
              to="/register-interest"
              className="bg-[#d4ed31] hover:bg-[#d4ed31] text-black font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-wide"
            >
              REGISTER INTEREST
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-2 items-center justify-center w-full md:w-auto">
            <Link
              to="/"
              className="flex items-center px-3 py-2 rounded text-base font-medium hover:text-primary transition-colors"
            >
              <img src="/home-icon.svg" alt="Home" className="h-5 w-5" />
            </Link>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
            {navigation.map((item) => (
              <NavDropdown key={item.label} item={item} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
