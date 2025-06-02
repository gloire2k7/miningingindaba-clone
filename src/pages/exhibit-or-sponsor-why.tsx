import React, { useState, useRef } from "react";
import {
  UsersIcon,
  GlobeAltIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  NewspaperIcon,
  MegaphoneIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

// Define the statistics data
const stats = [
  {
    value: "10,500+",
    label: "Attendees",
    icon: UsersIcon,
  },
  {
    value: "120+",
    label: "Countries represented",
    icon: GlobeAltIcon,
  },
  {
    value: "1450+",
    label: "Mining company executives",
    icon: BuildingOffice2Icon,
  },
  {
    value: "1300+",
    label: "Global Investors",
    icon: UsersIcon, // Using UsersIcon as HandshakeIcon is not available
  },
  {
    value: "625",
    label: "Speakers",
    icon: AcademicCapIcon, // Placeholder, choose appropriate icon
  },
  {
    value: "40%",
    label: "Female speaker representation",
    icon: UsersIcon, // Placeholder, choose appropriate icon
  },
  {
    value: "2500+",
    label: "Pieces of press coverage",
    icon: NewspaperIcon, // Placeholder, choose appropriate icon
  },
  {
    value: "Over 1 billion",
    label: "PR total audience reach",
    icon: MegaphoneIcon, // Placeholder, choose appropriate icon
  },
];

const ExhibitOrSponsorWhy = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 4;
  const itemWidth = 250; // Approximate width of each stat item including spacing

  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: itemWidth * itemsPerPage,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -itemWidth * itemsPerPage,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Inject styles to hide scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-start gap-12">
        {/* Left Column: Text Content and Button */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6">
            Seize the Opportunity: Exhibit or Sponsor Mining Indaba 2026!
          </h2>
          <p className="text-lg mb-4">
            Join over 10,500 global leaders at Mining Indaba 2026 — where the
            theme &quot;Stronger Together: Progress Through Partnerships&quot;
            highlights the power of unity and collaboration to tackle the mining
            sector&apos;s biggest challenges.
          </p>
          <p className="text-lg mb-8">
            Exhibiting or sponsoring puts your brand at the forefront of
            industry innovation, showing the world how your business drives
            progress through collective solutions. Don&apos;t miss the chance to
            build partnerships, expand your reach, and shape the future of
            mining.
          </p>
          <button className="bg-[#64a63a] hover:bg-[#55952c] text-white font-bold px-4 py-2 rounded text-lg shadow-md uppercase tracking-wide">
            EXHIBIT OR SPONSOR
          </button>
        </div>

        {/* Right Column: Video Embed */}
        <div className="flex-1 aspect-video w-full md:w-1/2">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/7yWlWyr4_dU"
            title="Mining Indaba 2026"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Green line above stats */}
      <div className="bg-gradient-to-r from-[#64a63a] to-[#b8f337] h-2 w-full"></div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            className="absolute left-0 z-10 p-2 rounded-full bg-[#64a63a] shadow-md hidden lg:flex items-center justify-center cursor-pointer"
            onClick={handlePrev}
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>

          {/* Icons and Stats Container */}
          <div
            ref={scrollContainerRef}
            className="flex items-center text-center overflow-x-scroll snap-x snap-mandatory scroll-smooth space-x-8 w-full hide-scrollbar"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 min-w-[25%] snap-start stat-item"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#64a63a] to-[#a2cd48] flex items-center justify-center">
                  {/* Use the imported icon component */}
                  {stat.icon && <stat.icon className="text-white w-12 h-12" />}
                </div>
                <div className="text-3xl font-bold text-[#64a63a]">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-0 z-10 p-2 rounded-full bg-[#64a63a] shadow-md hidden lg:flex items-center justify-center cursor-pointer"
            onClick={handleNext}
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Green line below stats */}
      <div className="bg-gradient-to-r from-[#64a63a] to-[#b8f337] h-2 w-full"></div>

      {/* Who We Are Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left Column: Image */}
        <div className="flex-1 w-full">
          {/* Placeholder for Image - Please provide the image path */}
          <img
            src="/placeholder-image.jpg"
            alt="Mining Indaba Event Image"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Column: Who We Are Text Block */}
        <div className="flex-1 bg-[#64a63a] text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          {/* Please replace this with the full descriptive text from the website */}
          <p className="text-lg leading-relaxed">
            Investing in African Mining Indaba is where the world comes together
            to shape the future of African mining. Since 1994, we have been a
            driving force for investment, innovation, and collaboration,
            bringing together industry leaders, investors, and changemakers.
            More than just an event, we are a catalyst for growth, connecting
            people and ideas that will transform the mining sector and create
            lasting impact.
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-start gap-12">
        {/* Left Column (on desktop): Our Mission Text Block */}
        <div className="flex-1 bg-[#64a63a] text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          {/* Please replace this with the full descriptive text from the website */}
          <p className="text-lg leading-relaxed">
            Our mission is to unlock the full potential of African mining by
            inspiring investment, fostering partnerships and championing
            responsible growth. We believe in the power of collaboration to
            drive innovation, create opportunities and build a sustainable
            future. Through bold conversations and meaningful connections, we
            are shaping an industry that benefits communities, economies, and
            generations to come.
          </p>
        </div>

        {/* Right Column (on desktop): Image */}
        <div className="flex-1 w-full">
          {/* Placeholder for Image - Please provide the image path */}
          <img
            src="/placeholder-image-2.jpg"
            alt="Mining Indaba Mission Image"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Button between sections */}
      <div className="container mx-auto px-4 py-8 text-center">
        <button className="bg-[#64a63a] hover:bg-[#55952c] text-white font-bold px-6 py-3 rounded text-lg shadow-md uppercase tracking-wide">
          EXHIBIT OR SPONSOR
        </button>
      </div>

      {/* Why Exhibit or Sponsor Cards Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Why exhibit or sponsor?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Placeholder Image */}
              <img
                src="/placeholder-card-image-1.jpg"
                alt="Card image 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Access top executives & policymakers
                </h3>
                <p className="text-gray-700 text-base">
                  Meet face-to-face with senior leaders and decision-makers from
                  across the mining industry. Build relationships with key
                  stakeholders that can open doors to new opportunities.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Placeholder Image */}
              <img
                src="/placeholder-card-image-2.jpg"
                alt="Card image 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Boost brand visibility on a global stage
                </h3>
                <p className="text-gray-700 text-base">
                  Gain worldwide exposure through extensive media coverage and a
                  highly engaged audience. Increase your brand recognition and
                  credibility across 122 countries.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Placeholder Image */}
              <img
                src="/placeholder-card-image-3.jpg"
                alt="Card image 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Generate high-value leads & drive business growth
                </h3>
                <p className="text-gray-700 text-base">
                  Directly engage with potential clients, partners, and
                  investors. Turn conversations into actionable opportunities
                  that lead to new contracts and collaborations.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Placeholder Image */}
              <img
                src="/placeholder-card-image-4.jpg"
                alt="Card image 4"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Position your brand as an industry leader
                </h3>
                <p className="text-gray-700 text-base">
                  Demonstrate your commitment to the mining sector and stay
                  ahead of industry trends. Enhance your company's reputation
                  while attracting influential partners and investors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsor Mining Indaba Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left Column: Image */}
        <div className="flex-1 w-full">
          {/* Placeholder for Image - Please provide the image path */}
          <img
            src="/placeholder-sponsor-image.jpg"
            alt="Sponsor Mining Indaba Image"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Column: Sponsor Text Block */}
        <div className="flex-1 bg-[#64a63a] text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            Sponsor Mining Indaba 2026
          </h2>
          {/* Please replace this with the full descriptive text from the screenshot/website */}
          <p className="text-lg leading-relaxed mb-6">
            Position your brand at the heart of the global mining conversation
            at Mining Indaba 2026. With an array of impactful sponsorship
            opportunities – from high-visibility branding such as Badge &
            Lanyard sponsorship to exclusive networking experiences like hosting
            the prestigious Welcome Party – you can connect with the people who
            matter most. Whether you're looking to dominate key spaces in the
            Exhibition Hall, Skybridge, or Lounges, or wish to create
            unforgettable moments through bespoke activations, content
            partnerships, or headline networking events, we'll help you make a
            lasting impression. Share your company's objectives with our expert
            sales team, and we'll tailor the perfect sponsorship opportunity to
            elevate your presence at Mining Indaba 2026.
          </p>
          <button className="bg-white hover:bg-gray-200 text-[#64a63a] font-bold px-6 py-3 rounded text-lg shadow-md uppercase tracking-wide">
            ENQUIRE TODAY
          </button>
        </div>
      </div>

      {/* Latest updates Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Latest updates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Update Card 1: Exhibitor Brochure */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Placeholder Image */}
              <img
                src="/placeholder-update-image-1.jpg"
                alt="Exhibitor Brochure Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Download the 2026 Exhibitor Brochure
                </h3>
                <p className="text-gray-700 text-base mb-4">
                  Discover the opportunities to showcase your brand at Africa's
                  largest mining investment event – Mining Indaba 2026!
                </p>
                <button className="bg-[#ffda3a] hover:bg-[#e6c733] text-black font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-wide">
                  DOWNLOAD THE BROCHURE
                </button>
              </div>
            </div>

            {/* Update Card 2: Post Event Report */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Placeholder Image */}
              <img
                src="/placeholder-update-image-2.jpg"
                alt="Post Event Report Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Post Event Report
                </h3>
                <p className="text-gray-700 text-base mb-4">
                  The official Mining Indaba 2025 Post Event Report is now live!
                  This exclusive report offers an in-depth look at the
                  industry's most influential gathering, highlighting the key
                  people, discussions, and opportunities that defined Mining
                  Indaba 2025.
                </p>
                <button className="bg-[#ffda3a] hover:bg-[#e6c733] text-black font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-wide">
                  DOWNLOAD THE REPORT
                </button>
              </div>
            </div>

            {/* Update Card 3: MI25 Companies Attended */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Placeholder Image */}
              <img
                src="/placeholder-update-image-3.jpg"
                alt="Companies Attended Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  MI25 Companies Attended
                </h3>
                <p className="text-gray-700 text-base mb-4">
                  Discover the complete list of companies that attended Mining
                  Indaba 2025.
                </p>
                <button className="bg-[#ffda3a] hover:bg-[#e6c733] text-black font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-wide">
                  DOWNLOAD NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExhibitOrSponsorWhy;
