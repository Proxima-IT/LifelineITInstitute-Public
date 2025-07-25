import React, { useEffect, useState } from "react";
import { FaStar, FaQuoteRight, FaArrowRight } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import axios from "axios";
import { Link } from "react-router-dom";

const StudentReviewAlt = () => {
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

  const fiveReviews = [];
  for (let i = 0; i < reviews.length; i += 5) {
    fiveReviews.push(reviews.slice(i, i + 5));
  }
  console.log(fiveReviews);
  return (
    <div className="w-full  mx-auto py-10 ">
      <div className="flex flex-col gap-3 justify-center items-center">
        <h1 className="text-xl md:text-4xl lg:text-5xl text-secondary font-extrabold">
          What Our Learners Say
        </h1>
        <p className="text-sm md:text-lg text-secondary">
          Learning communicate to global world and build a bright future with
          our histudy.
        </p>
        <Link to="/success-story">
          <button className="m-2 px-[30px] py-[12px] text-center uppercase transition-all duration-500 bg-[linear-gradient(to_right,_#249ffd_2%,_#3a7bd5_58%,_#00d2ff_100%)] bg-[length:200%_auto] text-white shadow-[0_0_15px_#000_90%] rounded-[10px]  hover:bg-[position:right_center] hover:text-white flex items-center gap-3 font-bold">
            Success Stories <FaArrowRight />
          </button>
        </Link>
      </div>

      {/* review displaying section  */}
      <div className="bg-white py-10 mt-6">
        <div className="space-y-5  w-11/12 mx-auto  relative overflow-hidden ">
          {fiveReviews.map((reviews) => (
            <Marquee key={reviews.length}>
              {
                reviews.map(review=>( <div key={review.SlNo} className="max-w-md bg-white shadow-lg rounded-lg p-6 mx-3">
                <div className="flex items-center mb-4">
                  <img
                    src={review.Image}
                    alt="Reviewer"
                    className="w-16 h-16 rounded-full border-2 border-gray-300 object-cover"
                  />
                  <div className="flex items-center ml-4 space-x-2">
                    <h3 className="text-lg font-semibold">{review.Name}</h3>
                    <FaQuoteRight className="text-gray-400 text-xl" />
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
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
              </div>))
              }
             
            </Marquee>
          ))}

          {/* ✅ Fade effect for top marquee */}
          <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-[#fff] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-[#fff] to-transparent z-10 pointer-events-none" />
          
          {/* ✅ Fade effect for bottom marquee */}
          <div className="absolute bottom-0 left-0 h-full w-10 bg-gradient-to-r from-[#fff] to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 right-0 h-full w-10 bg-gradient-to-l from-[#fff] to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default StudentReviewAlt;

