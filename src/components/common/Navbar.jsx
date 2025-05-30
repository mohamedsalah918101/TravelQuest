import React from "react";
import { Menu, X } from "lucide-react";

function Navbar({ onNavigate, isMobileMenuOpen, setIsMobileMenuOpen }) {
  const navItems = [
    { name: "Home", page: "home" },
    { name: "Book a Trip", page: "booking" },
    { name: "About Us", page: "about" },
  ];

  return (
    <nav className="bg-slate-900/80 backdrop-blur-md shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a
              onClick={() => onNavigate("home")}
              className="cursor-pointer flex-shrink-0 text-2xl font-bold text-purple-400 hover:text-purple-300 transition-colors"
            >
              Travel<span className="text-sky-400">Quest</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => onNavigate(item.page)}
                  className="text-gray-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => onNavigate(item.page)}
                className="text-gray-300 hover:bg-slate-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
