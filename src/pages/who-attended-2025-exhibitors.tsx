import React, { useState } from "react";

// Define comprehensive lists for sectors and countries inside the component
const sectors = [
  "Equipment Supplier",
  "Mining Services Provider",
  "Mining Company",
  "Professional Services",
  "Government",
  "Industry Body",
  "Equipment",
  "Default",
  "Mining Services & Equipment",
  "Large & Mid-Sized Mining Companies",
];

const countries = [
  "Angola",
  "Australia",
  "Austria",
  "Belgium",
  "Botswana",
  "Burkina Faso",
  "Cameroon",
  "Canada",
  "Chad",
  "China",
  "Congo",
  "Congo (DRC)",
  "Cote d'ivoire",
  "Ethiopia",
  "Finland",
  "France",
  "Germany",
  "Ghana", // Added more countries
  "Greece",
  "Guinea",
  "India",
  "Indonesia",
  "Iran",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Korea, Republic of",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia, Federated States of",
  "Moldova, Republic of",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten (Dutch part)",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan, Province of China",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "United States Minor Outlying Islands",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela, Bolivarian Republic of",
  "Viet Nam",
  "Virgin Islands, British",
  "Virgin Islands, U.S.",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const itemsPerPage = 12; // Number of exhibitors per page

const WhoAttended2025Exhibitors = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(true);

  // Placeholder data for exhibitors
  const exhibitorsData = Array.from({ length: 108 }, (_, i) => ({
    name: `Exhibitor Company ${i + 1}`,
    stand: `Stand A${i + 1}`,
    logo: "/placeholder-logo.png",
    sector: sectors[i % sectors.length], // Assign sectors from the list
    country: countries[i % countries.length], // Assign countries from the list
    // Add other relevant fields if needed
  }));

  // Function to handle sector checkbox change
  const handleSectorChange = (sector: string) => {
    setSelectedSectors((prev) =>
      prev.includes(sector)
        ? prev.filter((s) => s !== sector)
        : [...prev, sector]
    );
    setCurrentPage(1); // Reset to first page on filter change
  };

  // Function to handle country checkbox change
  const handleCountryChange = (country: string) => {
    setSelectedCountries((prev) =>
      prev.includes(country)
        ? prev.filter((c) => c !== country)
        : [...prev, country]
    );
    setCurrentPage(1); // Reset to first page on filter change
  };

  // Function to filter exhibitors based on search term and selected filters
  const filteredExhibitors = exhibitorsData.filter((exhibitor) => {
    const searchTermMatch = exhibitor.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const sectorMatch =
      selectedSectors.length === 0 ||
      selectedSectors.includes(exhibitor.sector);
    const countryMatch =
      selectedCountries.length === 0 ||
      selectedCountries.includes(exhibitor.country);
    return searchTermMatch && sectorMatch && countryMatch;
  });

  // Calculate total pages based on filtered exhibitors
  const totalPages = Math.ceil(filteredExhibitors.length / itemsPerPage);

  // Calculate exhibitors for the current page from the filtered list
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentExhibitors = filteredExhibitors.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Handle pagination click
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-[#64a63a] to-[#b8f337] py-8 text-white text-center">
        <h1 className="text-3xl md:text-4xl font-bold">2025 Exhibitor List</h1>
      </div>

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
        {/* Filters Section */}
        <div className="md:w-1/4 md:pr-8 mb-8 md:mb-0 border border-gray-300 rounded-md p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900">Filters</h3>
            <button
              className="text-[#64a63a] text-sm"
              onClick={() => {
                setSelectedSectors([]);
                setSelectedCountries([]);
              }}
            >
              Clear All
            </button>
            <button
              className="md:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <svg
                className={`w-6 h-6 text-gray-700 transform ${
                  showFilters ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Wrapped filters in a div for conditional rendering on mobile */}
          <div
            className={`${
              showFilters ? "block" : "hidden"
            } md:block border-t border-gray-300 pt-4`}
          >
            {/* Search Bar - Placed here based on the new screenshot */}
            <div className="relative w-full mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-full border border-gray-300 px-3 py-1 pl-8 text-sm shadow-sm focus:border-[#64a63a] focus:ring-[#64a63a] bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  className="h-4 w-4 text-gray-400"
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

            {/* New Exhibitors Filter */}
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-[#64a63a]"
                />
                <span className="ml-2 text-gray-700">New Exhibitors</span>
              </label>
            </div>

            {/* Sections Filter */}
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Sections</h4>
              {/* Add section checkboxes here */}
              {sectors.map((sector) => (
                <div key={sector} className="mb-1">
                  <label className="inline-flex items-center text-gray-700 text-sm">
                    <input
                      type="checkbox"
                      className="form-checkbox text-[#64a63a] rounded"
                      checked={selectedSectors.includes(sector)}
                      onChange={() => handleSectorChange(sector)}
                    />
                    <span className="ml-2">{sector}</span>
                  </label>
                </div>
              ))}
            </div>

            {/* Countries Filter */}
            <div>
              <h4 className="font-semibold text-[#64a63a] mb-2 border-t border-gray-300 pt-4">
                Countries
              </h4>
              {/* Add country checkboxes here */}
              {countries.map((country) => (
                <div key={country} className="mb-1">
                  <label className="inline-flex items-center text-gray-700 text-sm">
                    <input
                      type="checkbox"
                      className="form-checkbox text-[#64a63a] rounded"
                      checked={selectedCountries.includes(country)}
                      onChange={() => handleCountryChange(country)}
                    />
                    <span className="ml-2">{country}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Exhibitors Grid Section */}
        <div className="md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentExhibitors.map((exhibitor, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden p-4 flex flex-col items-center text-center"
              >
                {exhibitor.logo && (
                  <img
                    src={exhibitor.logo}
                    alt={`${exhibitor.name} Logo`}
                    className="h-16 object-contain mb-3"
                  />
                )}
                <div className="text-gray-900 font-semibold text-sm mb-1">
                  {exhibitor.name}
                </div>
                <div className="text-xs text-gray-600">{exhibitor.stand}</div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <nav>
              <ul className="inline-flex items-center -space-x-px">
                <li>
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <li key={page}>
                      <button
                        onClick={() => paginate(page)}
                        className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                          currentPage === page
                            ? "text-[#64a63a] bg-gray-200"
                            : ""
                        }`}
                      >
                        {page}
                      </button>
                    </li>
                  )
                )}
                <li>
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoAttended2025Exhibitors;
