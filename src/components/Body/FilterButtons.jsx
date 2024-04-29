import React from "react";

const FilterButtons = () => {
  const buttonList = [
    "All",
    "Comedy",
    "Music",
    "Gaming",
    "Sports",
    "Sci-Fi",
    "Movies",
    "Live",
    "News",
    "Travel",
    "AI",
    "Drama",
    "Price action",
    "Horror",
    "Tech News",
    "Jokes",
    "Laughters",
    "Humor",
  ];

  return (
    <div className="h-10 my-  overflow-y-hidden overflow-x-hidden">
      {buttonList.map((item, index) => (
        <button
          className=" bg-gray-100 rounded-md mx-1 mb-10 px-3 py-1"
          key={index}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
