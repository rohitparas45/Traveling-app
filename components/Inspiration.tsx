import React from 'react';

const destinations = [
  { name: 'Kyoto, Japan', image: 'https://picsum.photos/seed/kyoto/800/600' },
  { name: 'Amalfi Coast, Italy', image: 'https://picsum.photos/seed/amalfi/800/600' },
  { name: 'Santorini, Greece', image: 'https://picsum.photos/seed/santorini/800/600' },
  { name: 'Banff National Park, Canada', image: 'https://picsum.photos/seed/banff/800/600' },
  { name: 'Bora Bora, French Polynesia', image: 'https://picsum.photos/seed/borabora/800/600' },
  { name: 'Machu Picchu, Peru', image: 'https://picsum.photos/seed/peru/800/600' },
];

export const Inspiration: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Need Some Inspiration?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Explore some of the world's most breathtaking destinations.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest) => (
            <div key={dest.name} className="relative group rounded-lg overflow-hidden shadow-lg">
              <img src={dest.image} alt={dest.name} className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-semibold text-white">{dest.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
