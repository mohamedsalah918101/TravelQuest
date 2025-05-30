import React, { useState } from "react";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import HomePage from "./components/destinations/HomePage";
import DestinationDetailPage from "./components/destinations/DestinationDetailPage";
import BookingPage from "./components/booking/BookingPage";
import ConfirmationPage from "./components/booking/ConfirmationPage";
import AboutPage from "./pages/AboutPage";
import { mockDestinations } from "./assets/mockDestinations";

function App() {
  const [currentPage, setCurrentPage] = useState("home"); // 'home', 'details', 'booking', 'confirmation', 'about'
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateTo = (page, destination = null) => {
    setCurrentPage(page);
    setSelectedDestination(destination);
    window.scrollTo(0, 0); // Scroll to top on page change
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  const handleBookingSubmit = (details) => {
    setBookingDetails(details);
    navigateTo("confirmation");
  };

  // Render current page based on state
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            destinations={mockDestinations}
            onSelectDestination={(dest) => navigateTo("details", dest)}
            onBookNow={(dest) => navigateTo("booking", dest)}
          />
        );
      case "details":
        return (
          <DestinationDetailPage
            destination={selectedDestination}
            onBookNow={(dest) => navigateTo("booking", dest)}
            onGoBack={() => navigateTo("home")}
          />
        );
      case "booking":
        return (
          <BookingPage
            destination={selectedDestination}
            onSubmit={handleBookingSubmit}
            onGoBack={() =>
              selectedDestination
                ? navigateTo("details", selectedDestination)
                : navigateTo("home")
            }
          />
        );
      case "confirmation":
        return (
          <ConfirmationPage
            bookingDetails={bookingDetails}
            onGoHome={() => navigateTo("home")}
          />
        );
      case "about":
        return <AboutPage />;
      default:
        return (
          <HomePage
            destinations={mockDestinations}
            onSelectDestination={(dest) => navigateTo("details", dest)}
            onBookNow={(dest) => navigateTo("booking", dest)}
          />
        );
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-gray-100 font-sans">
      <Navbar
        onNavigate={navigateTo}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main className="pt-20 pb-12 px-4 md:px-8">
        {" "}
        {/* Added padding top for fixed navbar */}
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
