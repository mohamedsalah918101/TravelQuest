import React from "react";
import DestinationCard from "./DestinationCard";

function HomePage({ destinations, onSelectDestination, onBookNow }) {
  return (
    <div className="container mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400">
          Discover Your Next Adventure
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Explore breathtaking destinations and create unforgettable memories.
          Your dream vacation starts here.
        </p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {destinations.map((dest) => (
          <DestinationCard
            key={dest.id}
            destination={dest}
            onSelectDestination={onSelectDestination}
            onBookNow={onBookNow}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
