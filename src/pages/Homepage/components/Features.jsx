import React, { useEffect, useRef, useState } from "react";
import { GraduationCap, BookOpen, ShieldCheck } from "lucide-react";
import people from "../../../assets/Asset 4.png";
import live from "../../../assets/Live Support.jpg";
import support from "../../../assets/Asset 5.png";
import CountUp from "react-countup";
import LazyLoadWrapper from "@/components/shared/LazyLoadWrapper";
const Features = () => {
  const [startCount, setStartCount] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 } // 50% দেখা গেলেই trigger
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);
  return (
    <div className="text-[#3473a8]">
      <LazyLoadWrapper>
        <div>
          <button className="rounded-full bg-white shadow-lg text-black px-5 py-1.5 border border-gold">
            WHY CHOOSE US
          </button>
          <h1 className="text-2xl text-white my-5">
            Creating A Community Of Life Long Learners.
          </h1>
        </div>
      </LazyLoadWrapper>
      <LazyLoadWrapper>
        <div className="lg:py-16 px-4  text-white relative">
          {/* Heading */}
          <h2 className="text-center  text-xl font-semibold mb-12"></h2>

          {/* Top horizontal white line */}
          <div className="absolute  md:-top-[40px] lg:top-[50px] left-1/2 transform -translate-x-1/2 w-[90%] h-[2px] md:bg-white/50 z-0" />

          {/* Cards Wrapper */}
          <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Card 1 */}
            <div className="relative flex flex-col items-center justify-center text-center bg-white rounded-xl hover:scale-105 transition-all duration-500 cursor-pointer shadow-md p-6 border border-white/30">
              {/* Vertical line from top */}
              <div className="absolute md:-top-10 lg:-top-16 h-16 w-[2px] hidden md:block bg-white"></div>
              {/* Top dot */}
              <div className="absolute  md:-top-11 lg:-top-16 w-4 h-4 hidden md:block rounded-full bg-white border-4 border-[#6C93B7]"></div>

              {/* <BookOpen size={48} className=" mb-4" /> */}
              <img src={people} alt="" />
              {/* <div
              ref={countRef}
              className="text-3xl font-bold text-center text-black"
            >
              {startCount && (
                <CountUp end={500000} duration={2.5} separator="," start={0} />
              )}
            </div> */}
              <h3
                ref={countRef}
                className="text-3xl font-bold text-[#3473a8] mt-3"
              >
                {startCount && (
                  <CountUp
                    end={500000}
                    duration={2.5}
                    separator=","
                    start={0}
                  />
                )}
                <span>+</span>
              </h3>

              <p className="text-[#3473a8] mt-2">Learners & Counting</p>
            </div>

            {/* Card 2 */}
            <div className="relative flex flex-col items-center text-center bg-white rounded-xl cursor-pointer hover:scale-105 transition-all duration-500 shadow-md p-6 border border-white/30">
              <div className="absolute -top-16 md:-top-10 lg:-top-16 h-16 w-[2px] bg-white"></div>
              <div className="absolute -top-10 lg:-top-16 w-4 h-4 rounded-full bg-white border-4 border-[#6C93B7]"></div>

              {/* <GraduationCap size={48} className=" mb-4" /> */}
              <img src={live} alt="" className="" />
              {/* <h3 className="text-3xl font-bold text-[#3473a8] ">25,000+</h3>
            <p className="mt-2 text-[#3473a8]">Total Student</p> */}
            </div>

            {/* Card 3 */}
            <div className="relative flex flex-col items-center justify-center text-center bg-white rounded-xl hover:scale-105 transition-all duration-500 cursor-pointer shadow-md p-6 border border-white/30">
              <div className="absolute -top-16 md:-top-10 lg:-top-16 h-16 w-[2px] bg-white"></div>
              <div className="absolute -top-10 lg:-top-16 w-4 h-4 rounded-full bg-white border-4 border-[#6C93B7]"></div>

              {/* <ShieldCheck size={48} className=" mb-4" /> */}
              <img src={support} alt="" />
              <h3 className="text-xl font-semibold text-[#3473a8] mt-3">
                Free Lifetime Support
              </h3>
              <p className="text-[#3473a8] text-sm mt-2">
                Only our students can get Lifetime Online Support & Course
                Access into their User Dashboard.
              </p>
            </div>
          </div>
        </div>
      </LazyLoadWrapper>
    </div>
  );
};

export default Features;
