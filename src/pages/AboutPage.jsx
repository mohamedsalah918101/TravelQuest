import React from "react";

function AboutPage() {
  return (
    <div className="container mx-auto max-w-3xl">
      <div className="bg-slate-800 p-8 md:p-10 rounded-xl shadow-2xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-purple-300">
          About TravelQuest
        </h1>
        <p className="text-gray-300 leading-relaxed mb-4">
          Welcome to TravelQuest, your premier platform for discovering and
          booking unforgettable travel experiences around the globe. We believe
          that travel broadens the mind and enriches the soul, and our mission
          is to make your dream vacations a reality.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          Our curated selection of destinations ranges from bustling cityscapes
          to serene natural wonders. Whether you're seeking adventure,
          relaxation, cultural immersion, or a romantic getaway, TravelQuest has
          something for everyone.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          This interface is a demonstration of our commitment to user-friendly
          design and seamless booking processes. While this is a frontend-only
          application using mock data, it showcases the core functionalities and
          user experience we strive for.
        </p>
        <p className="text-gray-300 leading-relaxed font-semibold text-sky-400">
          Thank you for exploring TravelQuest!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
