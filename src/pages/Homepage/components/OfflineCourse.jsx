import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import LazyLoadWrapper from "@/components/shared/LazyLoadWrapper";
const OnlineCourse = () => {
  const handleClick = () => {
    // navigate("/our-courses");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // delay to ensure page loads
  };

  const [data, setData] = useState([]);
  const [typeName, setType] = useState("offline");

  let getLatestCourses = async (type) => {
    setType(type);
    const result = await axios.get(
      import.meta.env.VITE_API_URL +
        `/api/courses/search?limit=3&name=${typeName}`
    );
    setData(result.data);
  };

  useEffect(() => {
    getLatestCourses(typeName);
  }, [typeName]);

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold bg-blue-900 rounded-full px-8 py-1.5 text-white">
          Offline Courses
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {data.map((course) => (
          <LazyLoadWrapper>
            <div
              key={course._id}
              className="max-w-sm xl:max-w-lg h-full rounded-xl overflow-hidden shadow-md bg-white relative border border-[#f09619e2] hover:shadow-lg hover:scale-[1.02] transition duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Gradient top border */}
              <div className="h-2 bg-gradient-to-r from-[#F09819] via-[#EDDE5D] to-[#F09819]"></div>
              {/* Course image */}
              <img
                src={course.thumbnail}
                alt="Course"
                className="w-full h-44 object-cover"
              />

              <div className="p-5 space-y-3">
                <small className="font-bold bg-[#225499] text-white rounded-full px-2 py-1">
                  {course.type == "online" ? "🟢 Online" : "🔴 Offline"}
                </small>
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-[#F09819] transition">
                  {course.title}
                </h2>
                <p className="text-gray-600 text-sm flex-grow">
                  {course.description}
                </p>

                {/* Extra info */}
                <div className="flex justify-between text-sm text-gray-500 pt-2">
                  <span>Duration: {course.duration}</span>
                  <span>Total Class: {course.totalClasses}</span>
                </div>
                <div className="text-left">
                  <p className="flex space-x-1 text-yellow-600">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
                <div className="flex justify-between items-start">
                  {/* Button */}
                  <Link to={`/courses/${course.route}`}>
                    <button className="m-2 px-[20px] py-[7px] lg:px-[30px] lg:py-[10px] text-center uppercase transition-all duration-500 bg-[linear-gradient(to_right,_#249ffd_2%,_#3a7bd5_58%,_#00d2ff_100%)] bg-[length:200%_auto] text-white shadow-[0_0_10px_#000_80%] rounded-full  hover:bg-[position:right_center] hover:text-white flex items-center gap-3 font-bold">
                      Enroll Now
                    </button>
                  </Link>
                  <div>
                    <h2 className="text-gray-600 font-bold text-xl">
                      <del>৳ 1000</del>
                    </h2>
                    <h2 className="text-gray-800 font-bold text-xl">
                      ৳ {course.price}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </LazyLoadWrapper>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Link to="/courses">
          <button
            onClick={handleClick}
            className="
                flex items-center gap-2 font-medium
                text-sm sm:text-base lg:text-lg
                px-4 sm:px-6 lg:px-8
                py-2 sm:py-3
                text-white
                bg-gradient-to-t from-[#4D36D0] to-[#8474FE]
                rounded-full
                border-none
                shadow-[0_0.7em_1.5em_-0.5em_#4d36d0be]
                tracking-wide
                transition
                duration-300
                hover:shadow-[0_0.5em_1.5em_-0.5em_#4d36d0be]
                active:shadow-[0_0.3em_1em_-0.5em_#4d36d0be]
                active:scale-95
                focus:outline-none focus:ring-2 focus:ring-[#8474FE] focus:ring-offset-2
              "
          >
            View All Courses <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OnlineCourse;
