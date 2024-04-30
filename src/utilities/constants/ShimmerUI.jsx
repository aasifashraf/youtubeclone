import React from "react";

const ShimmerCard = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
        <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-48 w-full"></div>
        <div className="p-4">
          <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-4 w-1/2 mb-2"></div>
          <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-4 w-full"></div>
        </div>
      </div>
    </div>
  );
};

const ShimmerUI = () => {
  return (
    <div className="flex flex-wrap mx-2">
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};

export default ShimmerUI;
