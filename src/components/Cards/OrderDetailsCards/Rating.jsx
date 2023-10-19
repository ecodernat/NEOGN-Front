import React, { useState } from "react";

const Rating = ({ rating, setRating , handleToRating }) => {
  

  const handleStarClick = (star) => {
    setRating(star);
  };

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleStarClick(star)}
          className={`cursor-pointer text-4xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300 md:font-bold'}`}
        >
          {star <= rating ? "★" : "☆"}
        </span>
      ))}

      <span className="relative w-4 h-4 bg-red">

      </span>

      <button
        className="bg-red-500 text-white py-2 px-4 ml-4 rounded"
        onClick={handleToRating}
      >
        Confirm
      </button>
    </div>
  );
};

export default Rating