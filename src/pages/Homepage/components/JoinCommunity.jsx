import React from "react";
import about from "../../../assets/about3.png";
import { Link } from "react-router-dom";
import LazyLoadWrapper from "@/components/shared/LazyLoadWrapper";

const JoinCommunity = () => {
  const handleClick = () => {
    // navigate("/our-courses");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // delay to ensure page loads
  };
  return (
    <div>
      <LazyLoadWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
          <div>
            <Link to="/register">
              <button
                onClick={handleClick}
                className="text-white text-center lg:px-[35px] px-[20px] py-[8px] lg:py-[10px] rounded-full shadow-[0_0_10px_#000_80%] bg-gradient-to-r from-[#f09619ee] via-[#e4d653] to-[#f9a917] bg-[length:200%_auto] transition-all duration-500 hover:bg-[position:right_center] block font-bold"
              >
                Join Our Community
              </button>
            </Link>
            <p className="text-left text-white text-lg xl:text-xl pt-8">
              Join our Successful Freelancers Community where you will find
              every single proves of their Earnings and activities.
            </p>
          </div>
          <div className="">
            <img
              src={about}
              alt=""
              className="rounded-xl border border-gray-100"
            />
          </div>
        </div>
      </LazyLoadWrapper>
    </div>
  );
};

export default JoinCommunity;
