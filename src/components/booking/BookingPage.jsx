import React, { useState, useEffect } from "react";
import { MapPin, Calendar, User, Mail, ChevronLeft } from "lucide-react";

function BookingPage({ destination, onSubmit, onGoBack }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    destination: destination ? destination.name : "",
    travelDate: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-fill destination if provided
  useEffect(() => {
    if (destination) {
      setFormData((prev) => ({ ...prev, destination: destination.name }));
    }
  }, [destination]);

  const validate = () => {
    let tempErrors = {};
    if (!formData.fullName.trim())
      tempErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    }
    if (!formData.destination.trim())
      tempErrors.destination = "Destination is required.";
    if (!formData.travelDate) {
      tempErrors.travelDate = "Travel date is required.";
    } else if (
      new Date(formData.travelDate) < new Date().setHours(0, 0, 0, 0)
    ) {
      tempErrors.travelDate = "Travel date cannot be in the past.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        onSubmit(formData);
        setIsSubmitting(false);
      }, 1000);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="container mx-auto max-w-lg">
      {onGoBack && (
        <button
          onClick={onGoBack}
          className="mb-8 flex items-center text-sky-400 hover:text-sky-300 transition-colors group"
        >
          <ChevronLeft
            size={20}
            className="mr-2 transform group-hover:-translate-x-1 transition-transform"
          />
          Back
        </button>
      )}
      <div className="bg-slate-800 p-8 md:p-10 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-purple-300">
          Book Your Dream Trip
          {destination && (
            <span className="block text-xl text-sky-400 mt-1">
              to {destination.name}
            </span>
          )}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Full Name
            </label>
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2.5 bg-slate-700 border ${
                  errors.fullName ? "border-red-500" : "border-slate-600"
                } rounded-lg focus:ring-purple-500 focus:border-purple-500 transition-colors text-gray-200 placeholder-gray-500`}
                placeholder="Mohamed Salah"
              />
            </div>
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-400">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2.5 bg-slate-700 border ${
                  errors.email ? "border-red-500" : "border-slate-600"
                } rounded-lg focus:ring-purple-500 focus:border-purple-500 transition-colors text-gray-200 placeholder-gray-500`}
                placeholder="you@example.com"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="destination"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Selected Destination
            </label>
            <div className="relative">
              <MapPin
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                name="destination"
                id="destination"
                value={formData.destination}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2.5 bg-slate-700 border ${
                  errors.destination ? "border-red-500" : "border-slate-600"
                } rounded-lg focus:ring-purple-500 focus:border-purple-500 transition-colors text-gray-200 placeholder-gray-500`}
                placeholder="e.g., Paris, France"
                disabled={!!destination} // Disable if pre-filled
              />
            </div>
            {errors.destination && (
              <p className="mt-1 text-xs text-red-400">{errors.destination}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="travelDate"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Preferred Travel Date
            </label>
            <div className="relative">
              <Calendar
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="date"
                name="travelDate"
                id="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                min={today}
                className={`w-full pl-10 pr-3 py-2.5 bg-slate-700 border ${
                  errors.travelDate ? "border-red-500" : "border-slate-600"
                } rounded-lg focus:ring-purple-500 focus:border-purple-500 transition-colors text-gray-200 placeholder-gray-500 appearance-none date-input`}
              />
            </div>
            {errors.travelDate && (
              <p className="mt-1 text-xs text-red-400">{errors.travelDate}</p>
            )}
          </div>

          {/* CSS to style date input text color */}
          <style>{`
            .date-input:not(:focus):invalid { color: #9CA3AF; } /* gray-400 for placeholder */
            .date-input { color: #E5E7EB; } /* gray-200 for valid date */
            .date-input::-webkit-calendar-picker-indicator {
                filter: brightness(0) invert(1); /* Adjust to make it visible on dark background */
            }
          `}</style>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </div>
              ) : (
                "Confirm Booking"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;
