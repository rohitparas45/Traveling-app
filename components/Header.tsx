import React from 'react';

const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l.943.943A2 2 0 0110 6h4a2 2 0 011.414.586l.943-.943M12 21a9 9 0 100-18 9 9 0 000 18z" />
    </svg>
  );
  

export const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <GlobeIcon />
            <span className="text-2xl font-bold text-gray-800 tracking-tight">AI Travel Planner</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Destinations</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Trips</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Support</a>
          </nav>
          <button className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};
