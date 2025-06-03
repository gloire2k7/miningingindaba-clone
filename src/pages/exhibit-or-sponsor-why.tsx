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

// Define the company data for the carousel
const companies = [
  { logo: "/logos/barrick.png", name: "BARRICK", stand: "Stand: G29" },
  {
    logo: "/logos/hitachi.png",
    name: "HITACHI CONSTRUCTION MACHINERY AFRICA (PTY) LTD",
    stand: "Stand: M28",
  },
  { logo: "/logos/aeci.png", name: "AECI MINING", stand: "Stand: L30" },
  {
    logo: "/logos/caterpillar.png",
    name: "CATERPILLAR INC.",
    stand: "Stand: E30",
  },
  {
    logo: "/logos/enaex.png",
    name: "ENAEX AFRICA (PTY) LTD",
    stand: "Stand: K40",
  },
  {
    logo: "/logos/mota-engil.png",
    name: "MOTA-ENGIL",
    stand: "STAND: A36, A30",
  },
  {
    logo: "/logos/totalenergies.png",
    name: "TOTALENERGIES",
    stand: "STAND: A10",
  },
  { logo: "/logos/weir.png", name: "WEIR", stand: "STAND: R11" },
  { logo: "/logos/rio-tinto.png", name: "RIO TINTO", stand: "STAND: G30" },
  { logo: "/logos/rawbank.png", name: "RAWBANK SA", stand: "STAND: E28" },
  {
    logo: "/logos/kinross.png",
    name: "KINROSS GOLD CORPORATION / MINISTRY OF MINES AND INDUSTRY (MAURITANIA)",
    stand: "STAND: J35",
  },
  { logo: "/logos/vivo-energy.png", name: "VIVO ENERGY", stand: "STAND: G36" },
];

const ExhibitOrSponsorWhy = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 4;
  const itemWidth = 250; // Approximate width of each stat item including spacing
  const carouselItemsPerPage = 5;
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

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
      {/* Why Exhibit or Sponsor Header Bar */}
      <div className="bg-gradient-to-r from-[#64a63a] to-[#b8f337] py-4 text-white text-center text-2xl font-bold">
        Why Exhibit or Sponsor
      </div>

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

      {/* Call to Action Banner */}
      <div className="bg-gradient-to-r from-[#64a63a] to-[#b8f337] py-16 text-center">
        <div className="container mx-auto px-4 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join us at Mining Indaba 2026
          </h2>
          <p className="text-lg mb-8">
            Sign up early for Mining Indaba to secure better rates, prime floor
            plan options, and a head start on planning your success!
          </p>
          <button className="bg-[#ffda3a] hover:bg-[#e6c233] text-black font-bold px-6 py-3 rounded text-lg shadow-md uppercase tracking-wide">
            ENQUIRE TO EXHIBIT OR SPONSOR
          </button>
        </div>
      </div>

      {/* Who Joined Us Section (Carousel) */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Who joined us in 2025
          </h2>

          {/* Carousel Container */}
          <div className="relative">
            <div
              ref={carouselRef}
              className="flex items-center overflow-x-scroll snap-x snap-mandatory scroll-smooth hide-scrollbar space-x-8"
              style={{ paddingBottom: "2rem" }} // Add padding for scrollbar space if hide-scrollbar fails
            >
              {/* Placeholder for Company Items (Adjust number as needed) */}
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center flex-shrink-0 w-64 snap-center p-4"
                >
                  <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-32 w-full">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-24 object-contain"
                    />
                  </div>
                  <div className="mt-4 text-gray-900 font-semibold text-sm h-12 flex items-center justify-center px-2 text-center leading-tight w-full">
                    {company.name}
                  </div>
                  <div className="text-sm text-gray-600 mt-1 w-full">
                    {company.stand}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {/* Calculate number of dots based on total items and items per page */}
              {[
                ...Array(Math.ceil(companies.length / carouselItemsPerPage)),
              ].map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === activeDotIndex
                      ? "border-2 border-[#64a63a] bg-white"
                      : "bg-[#64a63a]"
                  } hover:opacity-75`}
                  onClick={() => {
                    if (carouselRef.current) {
                      // Assuming all items have the same width including margin
                      const itemWidthWithSpacing =
                        carouselRef.current.children[0].clientWidth +
                        parseInt(
                          getComputedStyle(carouselRef.current.children[0])
                            .marginRight,
                          10
                        );
                      const scrollToPosition =
                        index * carouselItemsPerPage * itemWidthWithSpacing;
                      carouselRef.current.scrollTo({
                        left: scrollToPosition,
                        behavior: "smooth",
                      });
                      setActiveDotIndex(index);
                    }
                  }}
                ></button>
              ))}
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="bg-[#64a63a] hover:bg-[#55952c] text-white font-bold px-8 py-3 rounded text-lg shadow-md uppercase tracking-wide">
              VIEW ALL EXHIBITORS
            </button>
          </div>
        </div>
      </div>

      {/* Benefits of Booking Early Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Benefits of Booking Early
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Prime Stand Location & Visibility */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Placeholder Image */}
              <img
                src="/placeholder-benefit-1.jpg"
                alt="Prime Stand Location"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Prime Stand Location & Visibility
                </h3>
                <p className="text-gray-700 text-base">
                  Early booking allows exhibitors to secure the best locations
                  on the exhibition floor, ensuring maximum visibility and foot
                  traffic.
                </p>
              </div>
            </div>

            {/* Card 2: Stronger Competitive Advantage */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Placeholder Image */}
              <img
                src="/placeholder-benefit-2.jpg"
                alt="Competitive Advantage"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Stronger Competitive Advantage
                </h3>
                <p className="text-gray-700 text-base">
                  By securing a space early, exhibitors can lock in their
                  participation before competitors, ensuring a strong presence
                  in a prime spot.
                </p>
              </div>
            </div>

            {/* Card 3: Guaranteed Participation */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Placeholder Image */}
              <img
                src="/placeholder-benefit-3.jpg"
                alt="Guaranteed Participation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Guaranteed Participation
                </h3>
                <p className="text-gray-700 text-base">
                  Mining Indaba is a high-demand event, and late registration
                  could mean missing out on a spot altogether if the exhibition
                  space sells out.
                </p>
              </div>
            </div>
          </div>

          {/* Exhibit or Sponsor Button */}
          <div className="text-center mt-12">
            <button className="bg-[#64a63a] hover:bg-[#55952c] text-white font-bold px-8 py-3 rounded text-lg shadow-md uppercase tracking-wide">
              EXHIBIT OR SPONSOR
            </button>
          </div>
        </div>
      </div>

      {/* Hear from Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Hear from
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial Card 1 */}
            <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="aspect-video w-full">
                {/* Placeholder Video Embed - Replace with actual embed code */}
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/0wtoG5QfXdU"
                  title="Testimonial 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 flex-grow relative">
                <p className="text-gray-700 text-base mb-4">
                  It&apos;s not every day you get the whole of the mining
                  industry in one spot. It&apos;s a good opportunity to showcase
                  what we do and network with our clients and possible future
                  clients. Having a presence is important because these are our
                  clients and if they are familiar with our brand then they
                  reach out when they have projects to get off the ground.
                </p>
                <div className="text-[#64a63a] font-semibold mt-auto">
                  <p className="text-lg">Japie Du Plessis</p>
                  <p className="text-sm">Managing Director</p>
                  <p className="text-sm">Murray & Roberts</p>
                </div>
                {/* Placeholder for Green Quotation Mark */}
                <div className="absolute bottom-4 right-6 text-green-200 text-6xl font-serif opacity-50">
                  ”
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="aspect-video w-full">
                {/* Placeholder Video Embed - Replace with actual embed code */}
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/vmyDZFlAZiM"
                  title="Testimonial 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 flex-grow relative">
                <p className="text-gray-700 text-base mb-4">
                  What makes this an ideal platform is the diversity of thought
                  and interaction. We all share the same challenges, and we can
                  find common solutions. If we collaborate and work together, we
                  can come to solutions but if we are not present nobody knows
                  what we can do. This platform, this indaba approach is very
                  rewarding.
                </p>
                <div className="text-[#64a63a] font-semibold mt-auto">
                  <p className="text-lg">Kavita Pema</p>
                  <p className="text-sm">VP of Sustainability</p>
                  <p className="text-sm">AECI</p>
                </div>
                {/* Placeholder for Green Quotation Mark */}
                <div className="absolute bottom-4 right-6 text-green-200 text-6xl font-serif opacity-50">
                  ”
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View All Testimonials Button */}
      <div className="container mx-auto px-4 py-8 text-center">
        <button className="bg-[#64a63a] hover:bg-[#55952c] text-white font-bold px-8 py-3 rounded text-lg shadow-md uppercase tracking-wide">
          VIEW ALL TESTIMONIALS
        </button>
      </div>

      {/* Featured Articles Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Featured Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Article Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              {/* Placeholder Image */}
              <img
                src="/placeholder-article-1.jpg"
                alt="Article 1 Image"
                className="w-full h-48 object-cover"
              />
              {/* Green Bar */}
              <div className="bg-[#64a63a] text-white text-sm px-4 py-2">
                25 Feb 2025 | Market News
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Future-proofing PGMs: Hydrogen, EV markets, and the energy
                  transition
                </h3>
                <p className="text-gray-700 text-base mb-4 line-clamp-3">
                  In this insightful interview with Kirthanya Pillay, Strategy,
                  M&A, and Investments at Impala Platinum, conducted for Mining
                  Indaba TV, s...
                </p>
                <div className="mt-auto">
                  <button className="group font-semibold text-sm">
                    <span className="bg-[#64a63a] text-white px-6 py-2 rounded-[999px] border-2 border-[#64a63a] flex items-center transition-all duration-300 group-hover:bg-white group-hover:text-[#64a63a]">
                      <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                      Read more
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Article Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              {/* Placeholder Image */}
              <img
                src="/placeholder-article-2.jpg"
                alt="Article 2 Image"
                className="w-full h-48 object-cover"
              />
              {/* Green Bar */}
              <div className="bg-[#64a63a] text-white text-sm px-4 py-2">
                24 Feb 2025 | Market News
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Unlocking the future of manganese in Africa
                </h3>
                <p className="text-gray-700 text-base mb-4 line-clamp-3">
                  Join Madelein Todd, Marketing Executive at Manganese Metal
                  Company, as she shares valuable insights during an exclusive
                  intervie...
                </p>
                <div className="mt-auto">
                  <button className="group font-semibold text-sm">
                    <span className="bg-[#64a63a] text-white px-6 py-2 rounded-[999px] border-2 border-[#64a63a] flex items-center transition-all duration-300 group-hover:bg-white group-hover:text-[#64a63a]">
                      <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                      Read more
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* All Event News Button */}
          <div className="text-center mt-12">
            <button className="bg-[#64a63a] hover:bg-[#55952c] text-white font-bold px-8 py-3 rounded text-lg shadow-md uppercase tracking-wide">
              ALL EVENT NEWS
            </button>
          </div>
        </div>
      </div>

      {/* Discover the opportunities Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Discover the opportunities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Opportunity Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Placeholder Image */}
              <img
                src="/placeholder-opportunity-1.jpg"
                alt="Opportunity 1 Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Exhibit
                </h3>
                <p className="text-gray-700 text-base">
                  Showcase your products and services to a global audience of
                  mining professionals and investors. Build new partnerships and
                  generate leads.
                </p>
              </div>
            </div>

            {/* Opportunity Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Placeholder Image */}
              <img
                src="/placeholder-opportunity-2.jpg"
                alt="Opportunity 2 Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Sponsor
                </h3>
                <p className="text-gray-700 text-base">
                  Elevate your brand visibility and stand out from the
                  competition with tailored sponsorship packages that align with
                  your marketing objectives.
                </p>
              </div>
            </div>

            {/* Opportunity Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Placeholder Image */}
              <img
                src="/placeholder-opportunity-3.jpg"
                alt="Opportunity 3 Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Advertise
                </h3>
                <p className="text-gray-700 text-base">
                  Reach a highly targeted audience through various advertising
                  channels before, during, and after the event to maximize your
                  brand exposure.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center mt-12">
            <button className="bg-[#64a63a] hover:bg-[#55952c] text-white font-bold px-8 py-3 rounded text-lg shadow-md uppercase tracking-wide">
              ENQUIRE TO EXHIBIT OR SPONSOR
            </button>
          </div>
        </div>
      </div>

      {/* Mining Indaba 2026 Sponsors and Exhibitors Section (Carousel) */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Mining Indaba 2026 Sponsors and Exhibitors
          </h2>

          {/* Carousel Container */}
          <div className="relative">
            <div
              className="flex items-center overflow-x-scroll snap-x snap-mandatory scroll-smooth hide-scrollbar space-x-8"
              style={{ paddingBottom: "2rem" }} // Add padding for scrollbar space if hide-scrollbar fails
            >
              {/* Placeholder for Sponsor/Exhibitor Logos (Adjust number as needed) */}
              {[...Array(15)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center flex-shrink-0 w-48 snap-center p-4"
                >
                  <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-24 w-full">
                    {/* Placeholder for Logo - Replace with actual image paths */}
                    <img
                      src={`/placeholder-logo-sponsor-${index + 1}.png`}
                      alt={`Sponsor/Exhibitor Logo ${index + 1}`}
                      className="h-16 object-contain"
                    />
                  </div>
                  {/* Optional: Add sponsor/exhibitor name or stand number if needed based on visual */}
                  {/* <div className="mt-4 text-gray-900 font-semibold text-sm">Company Name {index + 1}</div> */}
                  {/* <div className="text-sm text-gray-600 mt-1">Stand: S{index + 1}</div> */}
                </div>
              ))}
            </div>

            {/* Navigation Dots - Add if needed based on visual, implement logic */}
            {/* <div className="flex justify-center mt-8 space-x-3">
              {[...Array(Math.ceil(15 / 5))].map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === 0 ? 'bg-[#64a63a]' : 'bg-gray-400'} hover:bg-[#64a63a]`}
                ></button>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExhibitOrSponsorWhy;
