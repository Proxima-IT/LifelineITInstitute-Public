import React, { useEffect, useState } from "react";
import { FaStar, FaQuoteRight, FaArrowRight } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import axios from "axios";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../App.css";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import TestimonialCard from "./Components/TestimonialCard ";

const StudentReview = () => {
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
  for (let i = 0; i < reviews.length; i += 6) {
    fiveReviews.push(reviews.slice(i, i + 6));
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
          {fiveReviews.map((reviews, idx) => (
            <Swiper
              key={reviews.length}
              pagination={{ clickable: true }}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                reverseDirection: idx % 2 !== 0,
              }}
              speed={3000}
              modules={[Pagination, Autoplay, Navigation]}
              className="mySwiper"
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.SlNo}>
                  <TestimonialCard review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          ))}

          {/* ✅ Fade effect for top marquee */}
          <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-[#fff] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-[#fff] to-transparent z-10 pointer-events-none" />

          {/* ✅ Fade effect for bottom marquee */}
          <div className="absolute bottom-0 left-0 h-full w-10 bg-gradient-to-r from-[#fff] to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 right-0 h-full w-10 bg-gradient-to-l from-[#fff] to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default StudentReview;
