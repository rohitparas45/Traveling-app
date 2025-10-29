import React from 'react';
import type { Itinerary } from '../types';

interface ItineraryDisplayProps {
  itinerary: Itinerary;
}

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
  
  const LocationMarkerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

export const ItineraryDisplay: React.FC<ItineraryDisplayProps> = ({ itinerary }) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 animate-fade-in">
      <header className="text-center border-b pb-6 mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">{itinerary.title}</h1>
        <p className="mt-2 text-xl text-indigo-600 font-medium">{itinerary.destination} &bull; {itinerary.duration} Days</p>
      </header>

      <div className="space-y-12">
        {itinerary.days.map((day, index) => (
          <div key={day.day} className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0 md:w-32 flex md:flex-col items-start">
              <div className="flex items-center justify-center w-16 h-16 bg-indigo-600 text-white font-bold text-2xl rounded-full shadow-lg">
                {day.day}
              </div>
              <div className="ml-4 md:ml-0 md:mt-4 text-left md:text-center w-full">
                <p className="font-bold text-lg text-gray-700">Day {day.day}</p>
              </div>
            </div>
            
            <div className="flex-1 border-l-4 border-indigo-200 pl-8 space-y-8">
              <div className="relative">
                 <div className="absolute -left-[38px] top-1 h-4 w-4 rounded-full bg-indigo-600 ring-4 ring-white"></div>
                 <h2 className="text-2xl font-bold text-gray-800">{day.title}</h2>
                 <p className="mt-2 text-gray-600">{day.summary}</p>
              </div>

              {day.activities.map((activity, actIndex) => (
                <div key={actIndex} className="relative bg-gray-50 p-6 rounded-lg border border-gray-200 transition-shadow hover:shadow-md">
                   <div className="absolute -left-[38px] top-7 h-4 w-4 rounded-full bg-white ring-4 ring-indigo-200"></div>
                  <h3 className="text-xl font-semibold text-gray-900">{activity.name}</h3>
                  <div className="mt-2 space-y-2 text-gray-600">
                    <p>{activity.description}</p>
                    <div className="flex items-center text-sm">
                      <ClockIcon />
                      <span>{activity.time}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <LocationMarkerIcon />
                      <span>{activity.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
