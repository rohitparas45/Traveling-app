import React from 'react';
import { MapPinIcon } from './icons/MapPinIcon';
import { CalendarDaysIcon } from './icons/CalendarDaysIcon';
import { SparklesIcon } from './icons/SparklesIcon';

interface HeroProps {
  destination: string;
  setDestination: (value: string) => void;
  duration: string;
  setDuration: (value: string) => void;
  interests: string;
  setInterests: (value: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  destination,
  setDestination,
  duration,
  setDuration,
  interests,
  setInterests,
  onGenerate,
  isLoading,
}) => {
  return (
    <div className="relative bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
       <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Plan Your Perfect Trip</span>
          <span className="block text-indigo-600">with AI Assistance</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Tell us where you want to go, for how long, and what you love to do. Our AI will craft a personalized itinerary just for you.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative">
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destination</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPinIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3"
                placeholder="e.g., Tokyo, Japan"
              />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration (days)</label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <CalendarDaysIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="number"
                    id="duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3"
                    placeholder="e.g., 7"
                />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="interests" className="block text-sm font-medium text-gray-700">Interests</label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SparklesIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    id="interests"
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3"
                    placeholder="e.g., food, hiking, museums"
                />
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={onGenerate}
            disabled={isLoading}
            className="w-full md:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </>
            ) : (
              'Create My Itinerary'
            )}
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};
