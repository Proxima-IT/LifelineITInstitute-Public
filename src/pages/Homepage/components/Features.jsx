import React, { useEffect, useRef, useState } from "react";
import { GraduationCap, BookOpen, ShieldCheck } from "lucide-react";

import live from "../../../assets/24 HOURS SUPPORT.png";
import instructor from "../../../assets/INSTRUCTOR.png";
import national from "../../../assets/National_Skills_Development_Authority_logo.png";
import freelancing from "../../../assets/FREELANCER.png";
import support from "../../../assets/lIFETIME SUPPORT.png";

import CountUp from "react-countup";
import LazyLoadWrapper from "@/components/shared/LazyLoadWrapper";
import { getAdminPanelData } from "@/hooks/getAdminPanelData";
const Features = () => {
  const [startCount, setStartCount] = useState(false);
  const countRef = useRef(null);
  const { data, isLoading, isError, error } = getAdminPanelData();
  console.log(data?.studentInfo.totalStudents);

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
    <div className="text-[#3473a8] font-poppins">
      <LazyLoadWrapper>
        <div>
          <button className="rounded-full bg-white font-bold shadow-lg text-black px-5 py-1.5 border border-gold">
            WHY CHOOSE US
          </button>
          <h1 className="text-xl lg:text-2xl text-white my-5 font-semibold">
            Creating A Community Of Life Long Learners.
          </h1>
        </div>
      </LazyLoadWrapper>
      <LazyLoadWrapper>
        <div className="lg:py-16 px-0 lg:px-4  text-white relative">
          {/* Heading */}
          <h2 className="text-center  text-xl font-semibold lg:mb-12"></h2>

          {/* Top horizontal white line */}
          <div className="absolute  md:-top-[40px] lg:top-[50px] left-1/2 transform -translate-x-1/2 w-[90%] h-[2px] md:bg-white/50 z-0" />

          {/* Cards Wrapper */}

          <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Card 1 */}
            <div className="relative flex flex-col items-center border-[3px] border-[#9fe8ff] shadow-lg shadow-gray-900  justify-center text-center bg-white rounded-xl hover:scale-105 transition-all duration-500 cursor-pointer p-4">
              {/* Vertical line from top */}
              <div className="absolute md:-top-10 lg:-top-16 h-16 w-[2px] hidden md:block bg-white"></div>
              {/* Top dot */}
              <div className="absolute  md:-top-11 lg:-top-16 w-4 h-4 hidden md:block rounded-full bg-white border-4 border-[#6C93B7]"></div>

              {/* <BookOpen size={48} className=" mb-4" /> */}
              <img src={live} alt="" />
            </div>

            {/* Card 2 */}
            <div className="relative border-[3px] border-[#9fe8ff] shadow-lg shadow-gray-900 flex flex-col items-center text-center bg-white rounded-xl cursor-pointer hover:scale-105 transition-all duration-500 p-4 ">
              <div className="absolute -top-16 md:-top-10 lg:-top-16 h-16 w-[2px] bg-white"></div>
              <div className="absolute -top-10 lg:-top-16 w-4 h-4 rounded-full bg-white border-4 border-[#6C93B7]"></div>

              {/* <GraduationCap size={48} className=" mb-4" /> */}
              <img src={instructor} alt="" className="w-[40%] mb-5" />
              <h3 className="text-2xl font-bold text-black my-1">
                Expert Instructors
              </h3>
              <p className="mt-2 text-black font-semibold text-lg leading-[23px]">
                Learn from Professionals with 5+ Years of Industry Experience.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative flex flex-col items-center border-[3px] border-[#9fe8ff] shadow-lg shadow-gray-900 justify-center text-center bg-white rounded-xl hover:scale-105 transition-all duration-500 cursor-pointer p-4 ">
              <div className="absolute -top-16 md:-top-10 lg:-top-16 h-16 w-[2px] bg-white"></div>
              <div className="absolute -top-10 lg:-top-16 w-4 h-4 rounded-full bg-white border-4 border-[#6C93B7]"></div>

              {/* <ShieldCheck size={48} className=" mb-4" /> */}
              <img src={national} alt="" className="w-[40%] mb-3" />
              <h3 className="text-2xl font-bold text-[#3bb54a]  ">
                Certified by NSDA
              </h3>
              <p className="mt-2 text-black font-semibold text-lg leading-[23px]">
                We are a Government Approved Training Institute (NSDA
                Certified).
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-8/12 mx-auto">
            {/* Card 4 */}
            <div className="relative flex flex-col items-center border-[3px] border-[#9fe8ff] shadow-lg shadow-gray-900 justify-center text-center bg-white rounded-xl hover:scale-105 transition-all duration-500 cursor-pointer p-4 ">
              {/* <ShieldCheck size={48} className=" mb-4" /> */}
              <img src={freelancing} alt="" className="w-[30%] mb-3" />
              <h3 className="text-2xl font-bold text-black  ">
                Internship & Freelancing Guidance
              </h3>
              <p className="mt-2 text-black font-semibold text-lg leading-[23px]">
                Get guidance to start your freelance career or land a job.
              </p>
            </div>
            {/* Card 5 */}
            <div className="relative flex flex-col items-center border-[3px] border-[#9fe8ff] shadow-lg shadow-gray-900 justify-center text-center bg-white rounded-xl hover:scale-105 transition-all duration-500 cursor-pointer p-4 ">
              {/* <ShieldCheck size={48} className=" mb-4" /> */}
              <img src={support} alt="" className="w-[42%] mb-3" />
              <h3 className="text-2xl font-bold text-black  ">
                Free Lifetime Support
              </h3>
              <p className="mt-2 text-black font-semibold text-lg leading-[23px]">
                Only our students can get Lifetime Online Support & Course
                Access into their User Dashboard.
              </p>
            </div>
          </div>

          {/* total student counting  */}
          <div className="mt-8 p-8 text-center grid grid-cols-1 md:grid-cols-3 gap-8 rounded-xl w-full shadow-lg shadow-gray-900 bg-[#ff7d2f]">
            {/* 1  */}
            <div>
              <h3 ref={countRef} className="text-4xl font-bold text-white mb-3">
                {startCount && (
                  <CountUp
                    end={data? data.studentInfo.totalStudents:25000}
                    duration={2.5}
                    separator=","
                    start={0}
                  />
                )}
                <span>+</span>
              </h3>
              <h1 className="font-bold text-2xl mb-1">Total Students</h1>
              <p className="font-semibold text-base leading-5">
                Our community is growing with thousands of passionate learners.
              </p>
            </div>

            {/* 2  */}
            <div>
              <h3 ref={countRef} className="text-4xl font-bold text-white mb-3">
                {startCount && (
                  <CountUp
                    end={data? data.studentInfo.successCount:22000}
                    duration={2.5}
                    separator=","
                    start={0}
                  />
                )}
                <span>+</span>
              </h3>
              <h1 className="font-bold text-2xl mb-1">Successful Learners</h1>
              <p className="font-semibold text-base leading-5">
                Gained skills, secured jobs, or advanced their careers through
                our training.
              </p>
            </div>
            {/* 3 */}
            <div>
              <h3 ref={countRef} className="text-4xl font-bold text-white mb-3">
                {startCount && (
                  <CountUp
                    end={data? data.studentInfo.courseCompletors:21500}
                    duration={2.5}
                    separator=","
                    start={0}
                  />
                )}
                <span>+</span>
              </h3>
              <h1 className="font-bold text-2xl mb-1"> Course Completions</h1>
              <p className="font-semibold text-base leading-5">
                Officially completed and verified through our platform.
              </p>
            </div>
          </div>
        </div>
      </LazyLoadWrapper>
    </div>
  );
};

export default Features;
