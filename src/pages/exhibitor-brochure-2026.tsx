import React from "react";

const ExhibitorBrochure2026 = () => {
  return (
    <>
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-[#64a63a] to-[#b8f337] py-8 text-white text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Download our 2026 Exhibitor Brochure
        </h1>
      </div>

      {/* Introductory Text */}
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-lg text-gray-700">
          Want to maximise your exposure at Mining Indaba 2026? Download our
          exclusive exhibitor brochure now and discover how you can showcase
          your brand of the industry&apos;s premier event!
        </p>
      </div>

      {/* Main Content: Brochure Image and Form */}
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-12">
        {/* Left Column: Brochure Image and Enquire Section */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <img
            src="/placeholder-brochure.png" // Placeholder image
            alt="2026 Exhibitor Brochure"
            className="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-lg"
          />

          <div className="mt-8 w-full md:w-2/3 lg:w-1/2">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Gain access to:
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                Details about Mining Indaba, Africa&apos;s premier mining event,
                happening from 9-12 February 2026 in Cape Town
              </li>
              <li>
                Exhibitor and sponsorship opportunities at Mining Indaba 2026
              </li>
              <li>Insights into our audience types — your potential leads!</li>
            </ul>
            <p className="text-gray-700 mb-6">
              To discuss the floorplan and exhibiting or sponsorship
              opportunities, simply click &quot;Enquire&quot; below, and a
              member of our team will get in touch with you.
            </p>
            <button className="bg-[#64a63a] hover:bg-[#55952c] text-white font-bold px-8 py-3 rounded text-lg shadow-md uppercase tracking-wide">
              ENQUIRE
            </button>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="flex-1 w-full">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First name*
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#64a63a] focus:ring-[#64a63a] sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last name*
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#64a63a] focus:ring-[#64a63a] sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#64a63a] focus:ring-[#64a63a] sm:text-sm"
              />
              <p className="mt-2 text-sm text-gray-500">
                Using a business email helps us better understand your interest
                in sponsoring.
              </p>
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone number*
              </label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#64a63a] focus:ring-[#64a63a] sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country*
              </label>
              <select
                id="country"
                name="country"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#64a63a] focus:ring-[#64a63a] sm:text-sm"
              >
                <option>Please Select</option>
                {/* Add more country options here */}
              </select>
            </div>
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700"
              >
                Company name*
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#64a63a] focus:ring-[#64a63a] sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="jobTitle"
                className="block text-sm font-medium text-gray-700"
              >
                Job title*
              </label>
              <input
                type="text"
                name="jobTitle"
                id="jobTitle"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#64a63a] focus:ring-[#64a63a] sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="jobFunction"
                className="block text-sm font-medium text-gray-700"
              >
                Job function*
              </label>
              <select
                id="jobFunction"
                name="jobFunction"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#64a63a] focus:ring-[#64a63a] sm:text-sm"
              >
                <option>Please Select</option>
                {/* Add more job function options here */}
              </select>
            </div>
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700"
              >
                Service*
              </label>
              <select
                id="service"
                name="service"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#64a63a] focus:ring-[#64a63a] sm:text-sm"
              >
                <option>Please Select</option>
                {/* Add more service options here */}
              </select>
            </div>

            {/* Privacy Policy Text */}
            <p className="mt-4 text-sm text-gray-600">
              Hyve Group takes your privacy seriously - you can read more about
              this in our{" "}
              <a href="#" className="text-[#64a63a] hover:underline">
                Privacy Notice
              </a>
              . We use your personal information to provide the services you
              have requested from us and for other carefully considered
              legitimate business purposes. This includes sending you marketing
              communications and advertising about our events as well as
              information and publications which we think would be of interest
              to you. You have the right to object to this processing and, if
              you wish to do so, you can{" "}
              <a href="#" className="text-[#64a63a] hover:underline">
                update your preferences here
              </a>
              . View a list of the events organised by{" "}
              <a href="#" className="text-[#64a63a] hover:underline">
                Hyve Group here
              </a>
              .
            </p>

            {/* Submit Button */}
            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-[#64a63a] hover:bg-[#55952c] text-white font-bold px-8 py-3 rounded text-lg shadow-md uppercase tracking-wide"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ExhibitorBrochure2026;
