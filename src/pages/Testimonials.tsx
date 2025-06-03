import React from "react";

const Testimonials = () => {
  return (
    <>
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-[#64a63a] to-[#b8f337] py-8 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hear from the Mining Indaba community
        </h1>
      </div>

      {/* Descriptive text */}
      <div className="container mx-auto px-4 py-8 text-center text-lg text-gray-700">
        <p>
          Hear from our past attendees as they describe their Mining Indaba
          experience.
        </p>
      </div>

      {/* Green dividing line */}
      <div className="bg-[#64a63a] h-2 w-full"></div>

      {/* Testimonials Section Title */}
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          2025 Attendee Testimonials
        </h2>
      </div>

      {/* Placeholder for testimonials content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID_1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                title="Testimonial 1"
              ></iframe>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <p className="text-gray-700 italic mb-4">
                "Mining Indaba is a very different platform. It's Africa for
                Africa. We have everyone under one roof."
              </p>
              <div>
                <p className="font-semibold text-[#64a63a]">Raadiyah Emam</p>
                <p className="text-sm text-gray-600">
                  Head of Investor Relations
                </p>
                <p className="text-sm text-gray-600">Ankh Resources Ltd</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                title="Testimonial 2"
              ></iframe>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <p className="text-gray-700 italic mb-4">
                "Super insightful event and everyone's here – also this is the
                best place to meet people, build a network in the critical
                minerals space, in the region."
              </p>
              <div>
                <p className="font-semibold text-[#64a63a]">
                  Anastasia Kuskova
                </p>
                <p className="text-sm text-gray-600">Sirius</p>
                <p className="text-sm text-gray-600">CEO and Co-Founder</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID_3"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                title="Testimonial 3"
              ></iframe>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <p className="text-gray-700 italic mb-4">
                "It's huge. It's a very diverse industry, which I found very
                pleasant."
              </p>
              <div>
                <p className="font-semibold text-[#64a63a]">Martina Biene</p>
                <p className="text-sm text-gray-600">Volkswagen Group Africa</p>
                <p className="text-sm text-gray-600">Chairperson and MD</p>
              </div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID_4"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                title="Testimonial 4"
              ></iframe>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <p className="text-gray-700 italic mb-4">
                "Everybody in the mining industry is gathering here, this is
                really the place to be. In South Africa, here at Mining Indaba
                we have everybody coming from around the world to gather here so
                it's important for us to be here and take advantage of that.
                Hopefully in the next two days I'm going to be able to finalise
                a good contract and talk with investors."
              </p>
              <div>
                <p className="font-semibold text-[#64a63a]">Maryse Sedogo</p>
                <p className="text-sm text-gray-600">General Manager</p>
                <p className="text-sm text-gray-600">Aurora Drilling</p>
              </div>
            </div>
          </div>

          {/* Testimonial 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID_5"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                title="Testimonial 5"
              ></iframe>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <p className="text-gray-700 italic mb-4">
                "It's not every day you get you get the whole of the mining
                industry in one spot. It's a good opportunity to showcase what
                we do and network with our clients and possible future clients.
                Having a presence is important because these are our clients and
                if they are familiar with our brand then they reach out when
                they have projects to get off the ground."
              </p>
              <div>
                <p className="font-semibold text-[#64a63a]">Japie Du Plessis</p>
                <p className="text-sm text-gray-600">Managing Director</p>
                <p className="text-sm text-gray-600">Murray & Roberts</p>
              </div>
            </div>
          </div>

          {/* Testimonial 6 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID_6"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                title="Testimonial 6"
              ></iframe>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <p className="text-gray-700 italic mb-4">
                "What makes this an ideal platform is the diversity of thought
                and interaction. We all share the same challenges, and we can
                find common solutions. If we collaborate and work together, we
                can come to solutions but if we are not present nobody knows
                what we can do. This platform, this Indaba approach is very
                rewarding."
              </p>
              <div>
                <p className="font-semibold text-[#64a63a]">Kavita Pema</p>
                <p className="text-sm text-gray-600">VP of Sustainability</p>
                <p className="text-sm text-gray-600">AECI</p>
              </div>
            </div>
          </div>

          {/* Testimonial 7 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID_7"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                title="Testimonial 7"
              ></iframe>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <p className="text-gray-700 italic mb-4">
                "Anybody who is anybody in Mining in Africa is here. The show
                this year is really good, it's been really well organised, that
                created a very positive vibe, it's worked really well,
                compliments to you guys."
              </p>
              <div>
                <p className="font-semibold text-[#64a63a]">
                  AnneMarie Viljoen
                </p>
                <p className="text-sm text-gray-600">
                  Marketing and Brand Manager
                </p>
                <p className="text-sm text-gray-600">Komatsu</p>
              </div>
            </div>
          </div>

          {/* Testimonial 8 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID_8"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                title="Testimonial 8"
              ></iframe>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <p className="text-gray-700 italic mb-4">
                "Here we meet a lot of political as well as the decision makers
                within this forum. We have to attend, it's our obligation. The
                highlight is to see the energy around the industry again, after
                all that the world and Africa has been through, this is
                exciting."
              </p>
              <div>
                <p className="font-semibold text-[#64a63a]">Louis De Preez</p>
                <p className="text-sm text-gray-600">
                  Business Development Manager
                </p>
                <p className="text-sm text-gray-600">CBI Electrical</p>
              </div>
            </div>
          </div>

          {/* Testimonial 9 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID_9"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                title="Testimonial 9"
              ></iframe>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <p className="text-gray-700 italic mb-4">
                "It's a great gathering for knowing who the major players are in
                the industry. It's about putting the business out there to say
                we're here to do business. We have met major players across the
                value chain. I think it's a great learning space, it's not just
                to come with a preconceived idea."
              </p>
              <div>
                <p className="font-semibold text-[#64a63a]">Mpangwe Mutwale</p>
                <p className="text-sm text-gray-600">
                  Senior Relationship Manager
                </p>
                <p className="text-sm text-gray-600">Zanaco</p>
              </div>
            </div>
          </div>

          {/* Testimonial 10 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID_10"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                title="Testimonial 10"
              ></iframe>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <p className="text-gray-700 italic mb-4">
                "It was just incredible to see the depth of projects and
                everything going on."
              </p>
              <div>
                <p className="font-semibold text-[#64a63a]">Adrian O'Brien</p>
                <p className="text-sm text-gray-600">
                  VP - Business Development & Communications
                </p>
                <p className="text-sm text-gray-600">Midnight Sun Mining</p>
              </div>
            </div>
          </div>

          {/* Testimonial 11 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID_11"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                title="Testimonial 11"
              ></iframe>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <p className="text-gray-700 italic mb-4">
                "What impressed me most was the energy, enthusiasm, and sense
                that we were really about to go into the next cycle and that
                Africa could take that and grow for itself."
              </p>
              <div>
                <p className="font-semibold text-[#64a63a]">Catherine Raw</p>
                <p className="text-sm text-gray-600">
                  Chief Development Officer
                </p>
                <p className="text-sm text-gray-600">BHP</p>
              </div>
            </div>
          </div>

          {/* Testimonial 12 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID_12"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                title="Testimonial 12"
              ></iframe>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <p className="text-gray-700 italic mb-4">
                "I've been involved in the Sustainability Advisory Council and
                I've really seen the inclusiveness of different voices
                propelling the conversations that are fundamental and that are
                really needed to be able to move the mining industry forward."
              </p>
              <div>
                <p className="font-semibold text-[#64a63a]">
                  J.J. Messner de Latour
                </p>
                <p className="text-sm text-gray-600">
                  Sector Lead, Downstream Purchasers
                </p>
                <p className="text-sm text-gray-600">IRMA</p>
              </div>
            </div>
          </div>

          {/* Testimonial 13 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID_13"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                title="Testimonial 13"
              ></iframe>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <p className="text-gray-700 italic mb-4">
                "It was just incredible to see the depth of projects and
                everything going on."
              </p>
              <div>
                <p className="font-semibold text-[#64a63a]">Adrian O'Brien</p>
                <p className="text-sm text-gray-600">
                  VP - Business Development & Communications
                </p>
                <p className="text-sm text-gray-600">Midnight Sun Mining</p>
              </div>
            </div>
          </div>

          {/* Testimonial 14 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID_14"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                title="Testimonial 14"
              ></iframe>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <p className="text-gray-700 italic mb-4">
                "What impressed me most was the energy, enthusiasm, and sense
                that we were really about to go into the next cycle and that
                Africa could take that and grow for itself."
              </p>
              <div>
                <p className="font-semibold text-[#64a63a]">Catherine Raw</p>
                <p className="text-sm text-gray-600">
                  Chief Development Officer
                </p>
                <p className="text-sm text-gray-600">BHP</p>
              </div>
            </div>
          </div>

          {/* Testimonial 15 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID_15"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                title="Testimonial 15"
              ></iframe>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <p className="text-gray-700 italic mb-4">
                "I've been involved in the Sustainability Advisory Council and
                I've really seen the inclusiveness of different voices
                propelling the conversations that are fundamental and that are
                really needed to be able to move the mining industry forward."
              </p>
              <div>
                <p className="font-semibold text-[#64a63a]">
                  J.J. Messner de Latour
                </p>
                <p className="text-sm text-gray-600">
                  Sector Lead, Downstream Purchasers
                </p>
                <p className="text-sm text-gray-600">IRMA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us section */}
      <div className="bg-gradient-to-r from-[#64a63a] to-[#b8f337] py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Us at Mining Indaba 2026
          </h2>
          <p className="text-lg mb-8">
            The premier meeting place for African and global mining leaders, it
            is all set to be an unmissable experience, shaping the future of
            African mining. Register your interest today and stay ahead in this
            dynamic industry!
          </p>
          <button className="bg-[#ffda3a] hover:bg-[#e6c733] text-black font-bold px-8 py-3 rounded text-base shadow-md uppercase tracking-wide">
            REGISTER INTEREST
          </button>
        </div>
      </div>

      {/* Raj Khatri Testimonial Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="md:w-1/4 flex justify-center">
            <img
              src="/placeholder-raj-khatri.png"
              alt="Raj Khatri"
              className="rounded-full w-36 h-36 object-cover"
            />
          </div>
          {/* Testimonial Content */}
          <div className="md:w-3/4">
            <p className="text-gray-700 italic mb-4 text-lg">
              "Mining Indaba Africa continues to set the benchmark for
              excellence in the mining sector conferences. I was impressed by
              the ongoing evolution to include a broader range of streams,
              offering dedicated sessions for government/ policy makers, mining
              companies, investors, and advisers. The event is impeccably
              organised, ensuring a seamless experience for attendees, from
              registration, meetings to the structured panel sessions which I
              was invited to present. Every detail is carefully managed,
              allowing participants to focus on valuable discussions and
              networking. Overall, Mining Indaba Africa is an unmissable event
              for anyone in the industry. It continues to grow and makes it a
              premier platform for those such as myself who have significant
              business across Africa."
            </p>
            <div>
              <p className="font-semibold text-[#64a63a]">Raj Khatri</p>
              <p className="text-sm text-gray-600">
                Head of Metals & Mining, EMEA | Investment Banking,
              </p>
              <p className="text-sm text-gray-600">Canaccord Genuity Limited</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2025 Exhibitor Highlights Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-8">
          2025 Exhibitor Highlights
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="md:w-1/2 bg-[#5da033] p-8 text-white">
            <p className="text-white text-lg mb-4 ">
              Solarcentury Africa and the Industrial Development Corporation of
              Zambia to develop a 67 MWp solar project
            </p>
            <p className="text-white mb-4 ">
              During Mining Indaba 2025, Solarcentury Africa announced the
              signing of an agreement with the Industrial Development
              Corporation (IDC) to develop a 60 MW solar plant in Zambia.
            </p>
            <button className="bg-white border border-[#64a63a] text-[#64a63a] font-bold px-6 py-2 rounded text-base hover:bg-[#64a63a] hover:text-white transition-colors duration-300">
              READ MORE
            </button>
          </div>
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="/placeholder-exhibitor-highlights.png"
              alt="Exhibitor Highlights"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Strategic Partnership Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="/placeholder-strategic-partnership.png"
              alt="Strategic Partnership"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          {/* Text Content */}
          <div className="md:w-1/2 bg-[#5da033] p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Strategic partnership agreement between Total Energies and Mota
              Engil
            </h2>
            <p className="text-lg mb-4">
              Present in Cape Town for the 2025 edition of Mining Indaba, Jean
              Philippe Torres, Directeur Afrique / Senior Vice President Africa
              MS of Total Energies met Manuel Mota, President of Mota-Engil, to
              sign a strategic partnership agreement between the two companies.
            </p>
            <button className="bg-white border border-white text-[#64a63a] font-bold px-6 py-2 rounded text-base hover:bg-gray-100 transition-colors duration-300">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      {/* Other Testimonials Section */}
      {/* ... existing code ... */}
    </>
  );
};

export default Testimonials;
