import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-10 bg-gray-50 rounded-lg">
      <div className="w-16 h-16 border-4 border-indigo-300 border-t-indigo-600 rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-semibold text-gray-700">Crafting your perfect journey...</p>
      <p className="text-gray-500">This might take a moment.</p>
    </div>
  );
};
