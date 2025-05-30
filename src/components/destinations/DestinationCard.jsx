import React from "react";

function DestinationCard({ destination, onSelectDestination, onBookNow }) {
  return (
    <div className="bg-slate-800 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col">
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-56 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/600x400/333333/FFFFFF?text=Image+Not+Found`;
        }}
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-2 text-purple-300">
          {destination.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">
          {destination.shortDescription}
        </p>
        <div className="mt-auto flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <button
            onClick={() => onSelectDestination(destination)}
            className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm"
          >
            View Details
          </button>
          <button
            onClick={() => onBookNow(destination)}
            className="w-full sm:w-auto bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
