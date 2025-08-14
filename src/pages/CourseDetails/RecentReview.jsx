import axios from "axios";
import React, { useEffect, useState } from "react";

const RecentReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("/Reviews.json") // public folder থেকে relative path
      .then((res) => {
        setReviews(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error fetching JSON:", err);
      });
  }, []);
  return (
    <div className="grid grid-cols-2 gap-3">
      {reviews.map((review) => (
        <div className="max-w-xl mx-auto border border-gray-200 rounded-lg shadow-sm p-4 bg-white">
          {/* Top Section */}
          <div className="flex items-start gap-4">
            {/* Image */}
            <img
              src={review.Image} // Replace with your image URL
              alt="Reviewer"
              className="w-16 h-16 rounded-md object-cover"
            />

            <div className="flex-1">
              {/* Name */}
              <h3 className="font-bold text-lg">{review.Name}</h3>
              {/* Stars */}
              <div className="flex items-center mt-1"></div>
            </div>
          </div>

          {/* Review Text */}
          <p className="mt-4 text-gray-700 leading-relaxed">
            {review.ReviewText}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RecentReview;
