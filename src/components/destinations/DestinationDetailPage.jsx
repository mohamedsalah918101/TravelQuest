import React from "react";
import { MapPin, ChevronLeft } from "lucide-react";

function DestinationDetailPage({ destination, onBookNow, onGoBack }) {
  if (!destination)
    return (
      <div className="text-center text-xl text-gray-400">
        Destination not found. Please go back.
      </div>
    );

  return (
    <div className="container mx-auto max-w-4xl">
      <button
        onClick={onGoBack}
        className="mb-8 flex items-center text-sky-400 hover:text-sky-300 transition-colors group"
      >
        <ChevronLeft
          size={20}
          className="mr-2 transform group-hover:-translate-x-1 transition-transform"
        />
        Back to Destinations
      </button>
      <div className="bg-slate-800 rounded-xl shadow-2xl overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-72 md:h-96 object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/800x600/333333/FFFFFF?text=Image+Not+Found`;
          }}
        />
        <div className="p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-purple-300">
            {destination.name}
          </h1>
          <div className="flex items-center text-gray-400 mb-6">
            <MapPin size={20} className="mr-2 text-sky-400" />
            <span>{destination.location}</span>
          </div>
          <p className="text-gray-300 leading-relaxed mb-8 whitespace-pre-line">
            {destination.fullDescription}
          </p>
          <div className="text-right">
            <button
              onClick={() => onBookNow(destination)}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Book This Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetailPage;
