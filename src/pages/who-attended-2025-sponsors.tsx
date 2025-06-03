import React from "react";
import { useState } from "react";

// Define sponsor data by level
const sponsorsData = {
  diamond: [
    { logo: "/logos/angola-diamond.png", name: "ANGOLA DIAMOND POTENTIAL" },
  ],
  platinum: [
    { logo: "/logos/aeci-mining.png", name: "AECI MINING" },
    { logo: "/logos/anglo-american.png", name: "ANGLO AMERICAN" },
    { logo: "/logos/rawbank.png", name: "RAWBANK" },
    {
      logo: "/logos/ministry-of-mines-drc.png",
      name: "MINISTRY OF MINES,\nDEMOCRATIC REPUBLIC OF THE CONGO",
    },
    { logo: "/logos/enaex-africa.png", name: "ENAEX AFRICA" },
    {
      logo: "/logos/ministry-of-mines-zambia.png",
      name: "MINISTRY OF MINES & MINERALS\nDEVELOPMENT - ZAMBIA",
    },
  ],
  gold: [
    { logo: "/logos/bhp.png", name: "BHP" },
    { logo: "/logos/barrick.png", name: "BARRICK" },
    { logo: "/logos/ericsson.png", name: "ERICSSON" },
    { logo: "/logos/minara.png", name: "MINARA RESOURCES" },
    { logo: "/logos/south32.png", name: "SOUTH32" },
    { logo: "/logos/vedanta.png", name: "VEDANTA" },
  ],
  silver: [
    { logo: "/logos/fluor.png", name: "FLUOR" },
    { logo: "/logos/sgs.png", name: "SGS" },
    { logo: "/logos/tcs.png", name: "TATA CONSULTANCY SERVICES" },
    { logo: "/logos/unece.png", name: "UNECE" },
    { logo: "/logos/hatch.png", name: "HATCH" },
    { logo: "/logos/sally.png", name: "SALLY" },
  ],
  bronze: [
    { logo: "/logos/advisian.png", name: "ADVISIAN" },
    { logo: "/logos/dassault.png", name: "DASSAULT SYSTEMES" },
    { logo: "/logos/denver-gold.png", name: "DENVER GOLD GROUP" },
    { logo: "/logos/logicom.png", name: "LOGICOM" },
    { logo: "/logos/ramjack.png", name: "RAMJACK" },
    { logo: "/logos/sgs-canada.png", name: "SGS CANADA" },
  ],
  associate: [
    {
      logo: "/logos/amdc.png",
      name: "AFRICAN MINERAL DEVELOPMENT CENTER, AMDC",
    },
    { logo: "/logos/aggreko.png", name: "AGGREKO" },
    { logo: "/logos/dbsa.png", name: "DEVELOPMENT BANK OF SOUTHERN AFRICA" },
    { logo: "/logos/debswana.png", name: "DEBSWANA DIAMOND COMPANY" },
    { logo: "/logos/dss-plus.png", name: "DSS+" },
    { logo: "/logos/microsoft.png", name: "MICROSOFT" },
    { logo: "/logos/sandvik.png", name: "SANDVIK MINING RSA" },
    { logo: "/logos/thekvest.png", name: "THEKVEST" },
    { logo: "/logos/world-gold-council.png", name: "WORLD GOLD COUNCIL" },
    {
      logo: "/logos/dtic.png",
      name: "DEPARTMENT OF TRADE, INDUSTRY AND COMPETITION",
    },
  ],
  hostGovernment: [
    {
      logo: "/logos/dmre.png",
      name: "DEPARTMENT OF MINERAL\nRESOURCES AND ENERGY",
    },
  ],
  hostCity: [
    { logo: "/logos/city-of-cape-town.png", name: "CITY OF CAPE TOWN" },
  ],
  strategicPartner: [
    { logo: "/logos/microsoft.png", name: "MICROSOFT" },
    { logo: "/logos/anglo-american.png", name: "ANGLO AMERICAN" }, // Assuming this is the same Anglo American logo
  ],
  participatingCompany: [
    { logo: "/logos/ael-mining.png", name: "AEL Mining Services" },
    { logo: "/logos/ams.png", name: "AMS" },
    { logo: "/logos/barminco.png", name: "BARMINCO" },
    { logo: "/logos/dra.png", name: "DRA Global" },
    { logo: "/logos/endress-hauser.png", name: "Endress+Hauser" },
    { logo: "/logos/epiroc.png", name: "Epiroc" },
    { logo: "/logos/flsmidth.png", name: "FLSmidth" },
    { logo: "/logos/gold-fields.png", name: "Gold Fields" },
    { logo: "/logos/impala-platinum.png", name: "Impala Platinum" },
    { logo: "/logos/ivanhoe-mines.png", name: "Ivanhoe Mines" },
    { logo: "/logos/john-deere.png", name: "JOHN DEERE" },
    { logo: "/logos/lme.png", name: "LME" },
    { logo: "/logos/lundin-mining.png", name: "LUNDIN MINING" },
    { logo: "/logos/mopani.png", name: "Mopani Copper Mines" },
    { logo: "/logos/multotec.png", name: "Multotec" },
    { logo: "/logos/orica.png", name: "Orica" },
    { logo: "/logos/resolute-mining.png", name: "Resolute Mining" },
    {
      logo: "/logos/sandvik-mining.png",
      name: "Sandvik Mining and Rock Technology",
    },
    { logo: "/logos/standard-bank.png", name: "Standard Bank" },
    {
      logo: "/logos/thyssenkrupp.png",
      name: "thyssenkrupp Industrial Solutions",
    },
    { logo: "/logos/weir-minerals.png", name: "Weir Minerals" },
    { logo: "/placeholder-logo.png", name: "Participating Company" }, // Placeholder for the last one
  ],
};

const WhoAttended2025Sponsors = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2; // We have two defined pages of sponsors

  // Function to render sponsor cards for a given level
  const renderSponsors = (level: keyof typeof sponsorsData) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      {sponsorsData[level].map((sponsor, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden p-4 flex flex-col items-center text-center w-48 justify-between"
        >
          <img
            src={sponsor.logo}
            alt={`${sponsor.name} Logo`}
            className="h-16 object-contain mb-3"
          />
          <div className="text-gray-900 font-semibold text-xs mb-1">
            {sponsor.name}
          </div>
          <div className="text-xs text-[#64a63a] uppercase font-bold">
            {level} Sponsor
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-[#64a63a] to-[#b8f337] py-8 text-white text-center">
        <h1 className="text-3xl md:text-4xl font-bold">2025 Sponsors</h1>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-full border border-gray-300 px-4 py-2 pl-10 shadow-sm focus:border-[#64a63a] focus:ring-[#64a63a] bg-white"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Sponsor Sections */}
      <div className="container mx-auto px-4 py-8">
        {currentPage === 1 && (
          <>
            {/* Diamond Sponsor Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                Diamond Sponsor
              </h2>
              {renderSponsors("diamond")}
            </div>

            {/* Platinum Sponsor Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                Platinum Sponsors
              </h2>
              {renderSponsors("platinum")}
            </div>

            {/* Host Government Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                Host Government
              </h2>
              {renderSponsors("hostGovernment")}
            </div>

            {/* Gold Sponsor Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                Gold Sponsors
              </h2>
              {renderSponsors("gold")}
            </div>

            {/* Silver Sponsor Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                Silver Sponsors
              </h2>
              {renderSponsors("silver")}
            </div>

            {/* Bronze Sponsor Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                Bronze Sponsors
              </h2>
              {renderSponsors("bronze")}
            </div>

            {/* Associate Sponsor Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                Associate Sponsor
              </h2>
              {renderSponsors("associate")}
            </div>
          </>
        )}

        {currentPage === 2 && (
          <>
            {/* Host City Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                Host City
              </h2>
              {renderSponsors("hostCity")}
            </div>

            {/* Strategic Partner Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                Strategic Partner
              </h2>
              {renderSponsors("strategicPartner")}
            </div>

            {/* Participating Company Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                Participating Company
              </h2>
              {renderSponsors("participatingCompany")}
            </div>
          </>
        )}

        {/* Pagination Controls */}
        <div className="flex justify-center mt-12 space-x-4">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${
              currentPage === 1
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-[#64a63a] hover:bg-[#55952c] text-white"
            }`}
          >
            Previous Page
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-[#64a63a] hover:bg-[#55952c] text-white"
            }`}
          >
            Next Page
          </button>
        </div>
      </div>
    </>
  );
};

export default WhoAttended2025Sponsors;
