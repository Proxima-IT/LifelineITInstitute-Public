import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import banner from "../../../assets/banner.jpg";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import "../../../App.css";
import { IoMdClose } from "react-icons/io";
import { Typewriter } from "react-simple-typewriter";
const Hero = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const Offer = "";
  const [offer, setOffer] = useState(false);
  const videoId = "uGx8wsKooBc";

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(()=>{
    if (Offer) {
    setOffer(true);
  }
  },[])

  return (
    <div className=" space-y-10 mt-10">
      {offer && ( 
        <div
          className={`bg-accent w-full mx-auto h-20 md:h-24 lg:h-28 relative ${
            close ? "hidden" : "block"
          }`}
        >
          <img src={banner} alt="" className="h-full w-full bg-cover " />
          <span
            onClick={() => setClose(!close)}
            className="text-black bg-white rounded-full p-1 font-bold text-xl absolute right-0 top-0 cursor-pointer"
          >
            <IoMdClose />
          </span>
        </div>
      )}

      {/* <div className="text-primary text-3xl  w-auto mx-auto shadow-xl rounded-full px-5 py-3">
        <h1
          data-aos="fade-up"
          className="text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400 font-bold text-base md:text-xl lg:text-3xl"
        >
          From Zero to Skilled, Your IT Journey Starts Here.
        </h1>
      </div> */}
      {/* grid grid-cols-1 grid-flow-row-reverse lg:grid-flow-row md:grid-cols-2 */}

      <div className=" flex flex-col-reverse lg:flex-row  gap-8 lg:gap-24 text-left lg:pt-4">
        {/* left section  */}
        <div className="flex flex-col items-start gap-5">
          <h1 className="text-secondary font-poppins text-2xl md:text-3xl lg:text-4xl font-bold lg:leading-snug whitespace-pre-line">
            <Typewriter
              words={["From Zero to Skilled, Your IT Journey Starts Here."]}
              loop={1} // 0 = no loop, or use Infinity
              cursor
              cursorStyle=""
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1500}
            />
            {/* One of the Best IT <br /> Training Institute <br /> In Bangladesh */}
          </h1>

          <p className="text-sm text-secondary ">
            Lifeline IT is operated by a Govt. approved organization | Est. 18<sup>th</sup> August, 2021
            | Over 25,000+ Students Trained | Trusted by 2.50 Lakh+ Followers on
            Social Media.
          </p>

          <div className="flex gap-3 items-center justify-start">
            <Link to="/courses">
              <button className=" px-[25px] py-[8px] text-center  transition-all duration-500 bg-[linear-gradient(to_right,_#249ffd_2%,_#3a7bd5_58%,_#00d2ff_100%)] bg-[length:200%_auto] text-white shadow-[0_0_10px_#000_80%] rounded-full  hover:bg-[position:right_center] hover:text-white flex items-center gap-2 font-bold">
                Courses <FaArrowRight />
              </button>
            </Link>

            <Link to="/register">
              <button
                className="
                flex items-center gap-2
                text-white text-center
                
                px-[25px] py-[8px] rounded-full
               shadow-[0_0_10px_#f09619ee] bg-gradient-to-r from-[#f09619ee] via-[#e4d653] to-[#f9a917] bg-[length:200%_auto]
                transition-all duration-500
                hover:bg-[position:right_center]
                
                focus:outline-none focus:ring-2 focus:ring-[#EDDE5D] focus:ring-offset-2
              "
              >
                Register <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>

        {/* right section  */}
        <div className="relative flex items-center justify-center w-full">
          {/* Video Thumbnail */}
          <div
            className="relative cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Video Thumbnail"
              className="rounded-lg shadow-lg max-w-3xl w-full"
            />

            {/* Ripple Animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="ripple" />
              <span className="ripple ripple-2" />
              <span className="ripple ripple-3" />

              {/* Play Button */}
              <div className="relative z-10 md:w-14 md:h-14 lg:w-20 lg:h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Modal Video Popup */}
          {open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
              <div class="relative w-full max-w-4xl h-[500px]">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="YouTube video"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-2 right-2 text-white text-2xl hover:text-red-400 transition"
                >
                  &times;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
