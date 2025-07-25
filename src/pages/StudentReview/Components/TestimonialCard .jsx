import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialCard = ({review}) => {
  return (
    <div className="w-full h-full mx-auto p-6 border border-orange-400 rounded-2xl bg-white relative shadow-sm ">
      {/* Quotation Mark */}
      <div className="absolute top-4 right-6 z-20 text-xl lg:text-5xl text-gray-300">
        <FaQuoteLeft />
      </div>

      {/* Profile */}
      <div className="flex flex-col lg:flex-row items-center justify-center space-x-4  ">
        {/* Profile Image */}
        <img
          className="lg:w-44 lg:h-44 w-20 h-20 rounded-full object-cover shadow"
          src={review.Image}
          alt="User"
        />

        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-xl font-semibold text-gray-800 text-center">{review.Name}</h3>
          <p className="text-sm text-gray-500 my-3">Student of Lifeline IT Institute</p>
          <p className="text-gray-600 text-sm leading-relaxed text-left">
            {review.ReviewText}
          </p>
          {/* Hardcoded rating stars */}
          <div className="flex space-x-1 text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
