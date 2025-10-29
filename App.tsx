import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Inspiration } from './components/Inspiration';
import { ItineraryDisplay } from './components/ItineraryDisplay';
import { Loader } from './components/Loader';
import { generateItinerary } from './services/geminiService';
import type { Itinerary } from './types';

export default function App() {
  const [destination, setDestination] = useState<string>('Paris, France');
  const [duration, setDuration] = useState<string>('5');
  const [interests, setInterests] = useState<string>('art, history, and food');
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateItinerary = useCallback(async () => {
    if (!destination || !duration || !interests) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);
    setError(null);
    setItinerary(null);

    try {
      const durationNum = parseInt(duration, 10);
      if (isNaN(durationNum) || durationNum <= 0) {
        setError('Please enter a valid number for duration.');
        setLoading(false);
        return;
      }
      const result = await generateItinerary(destination, durationNum, interests);
      setItinerary(result);
    } catch (err) {
      console.error(err);
      setError('Failed to generate itinerary. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [destination, duration, interests]);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans">
      <Header />
      <main>
        <Hero
          destination={destination}
          setDestination={setDestination}
          duration={duration}
          setDuration={setDuration}
          interests={interests}
          setInterests={setInterests}
          onGenerate={handleGenerateItinerary}
          isLoading={loading}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {loading && <Loader />}
          {error && <div className="text-center text-red-500 bg-red-100 p-4 rounded-lg">{error}</div>}
          {itinerary && <ItineraryDisplay itinerary={itinerary} />}
          {!loading && !itinerary && (
            <>
              <Features />
              <Inspiration />
            </>
          )}
        </div>
      </main>
      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} AI Travel Planner. Your next adventure awaits.</p>
        </div>
      </footer>
    </div>
  );
}
