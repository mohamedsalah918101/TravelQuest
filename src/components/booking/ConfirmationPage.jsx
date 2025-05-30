import React from "react";

function ConfirmationPage({ bookingDetails, onGoHome }) {
  if (!bookingDetails) {
    return (
      <div className="container mx-auto max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-6 text-purple-300">
          Booking Error
        </h1>
        <p className="text-gray-400 mb-8">
          No booking details found. Please try booking again.
        </p>
        <button
          onClick={onGoHome}
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-lg">
      <div className="bg-slate-800 p-8 md:p-10 rounded-xl shadow-2xl text-center">
        <div className="mx-auto mb-6 h-16 w-16 flex items-center justify-center rounded-full bg-green-500/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-green-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-green-400">
          Booking Confirmed!
        </h1>
        <p className="text-gray-300 mb-8 text-lg">
          Thank you,{" "}
          <span className="font-semibold text-purple-300">
            {bookingDetails.fullName}
          </span>
          ! Your trip to{" "}
          <span className="font-semibold text-purple-300">
            {bookingDetails.destination}
          </span>{" "}
          is booked.
        </p>
        <div className="bg-slate-700/50 p-6 rounded-lg text-left space-y-3 mb-8">
          <p className="text-gray-400">
            <strong>Email:</strong>{" "}
            <span className="text-gray-200">{bookingDetails.email}</span>
          </p>
          <p className="text-gray-400">
            <strong>Destination:</strong>{" "}
            <span className="text-gray-200">{bookingDetails.destination}</span>
          </p>
          <p className="text-gray-400">
            <strong>Travel Date:</strong>{" "}
            <span className="text-gray-200">
              {new Date(bookingDetails.travelDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              })}
            </span>
          </p>
        </div>
        <p className="text-sm text-gray-500 mb-8">
          A confirmation email has been sent to {bookingDetails.email} with
          further details.
        </p>
        <button
          onClick={onGoHome}
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          Explore More Destinations
        </button>
      </div>
    </div>
  );
}

export default ConfirmationPage;
