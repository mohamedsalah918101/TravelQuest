import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-900/70 border-t border-slate-700/50 mt-16 py-8 text-center">
      <p className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} TravelQuest. All rights reserved.
      </p>
      <p className="text-gray-500 text-xs mt-1">
        A demonstration project for frontend development.
      </p>
    </footer>
  );
}

export default Footer;
