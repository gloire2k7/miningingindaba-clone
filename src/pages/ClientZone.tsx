import React from "react";

const ClientZone = () => {
  return (
    <>
      {/* Header with gradient background */}
      <div className="w-full py-8 text-white text-center bg-gradient-to-r from-[#64a63a] to-[#b8f337]">
        <h1 className="text-4xl md:text-5xl font-bold">Client Zone</h1>
      </div>

      {/* Descriptive text */}
      <div className="container mx-auto px-4 py-8 text-center text-lg text-gray-700">
        <p className="mb-4">
          We're working behind the scenes to bring you an improved and more
          comprehensive Client Zone for 2026. This dedicated platform will
          continue to support exhibitors by providing essential resources,
          tools, and guidance to help you maximise your experience at Mining
          Indaba.
        </p>
        <p className="mb-4">
          The new edition will include everything you need, from exhibitor
          listings and marketing opportunities to key information on stand
          construction, health and safety, venue details, order forms, and
          important deadlines.
        </p>
        <p>
          We can't wait to get you logged in and exploring all the new features
          soon—stay tuned for updates on the launch!
        </p>
      </div>

      {/* Images Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Placeholder Images */}
          <img
            src="/placeholder-client-zone-1.png"
            alt="Client Zone Image 1"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <img
            src="/placeholder-client-zone-2.png"
            alt="Client Zone Image 2"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <img
            src="/placeholder-client-zone-3.png"
            alt="Client Zone Image 3"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </>
  );
};

export default ClientZone;
