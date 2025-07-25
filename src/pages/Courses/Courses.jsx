import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import LazyLoadWrapper from "@/components/shared/LazyLoadWrapper";
// import { motion } from "framer-motion"

const OurCourses = () => {
  const location = useLocation();
  const { search } = location.state || {};
  const [selected, setSelected] = useState(search || "All");

  useEffect(() => {
    if (search) {
      setSelected(search);
    } else {
      setSelected("All");
    }
  }, [search]);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let result;
      if (selected != "All") {
        result = await axios.get(
          import.meta.env.VITE_API_URL + `/api/courses/search?name=${selected}`
        );
      } else {
        result = await axios.get(
          import.meta.env.VITE_API_URL + "/api/courses/"
        );
      }
      console.log(result.data);
      setData(result.data);
    };
    fetchData();
  }, [selected]);

  return (
    <div className="min-h-screen  ">
      <div className="w-10/12 mx-auto pt-10 text-left space-y-5">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-10">
          <div>
            <h1 className="text-3xl text-accent font-bold">
              {selected} Courses
            </h1>
            <p className="text-accent">
              Unlock Your Creative Potential: Learn the Skills to Dominate the
              Digital Landscape.
            </p>
          </div>
          <div>
            <button
              onClick={() => setSelected("Offline")}
              className={`px-5 py-1 rounded-full rounded-r-none shadow-md transition-all
            ${
              selected === "Offline"
                ? "bg-gold text-white"
                : "bg-white border border-blue-500 text-blue-900 "
            }`}
            >
              Offline
            </button>
            <button
              onClick={() => setSelected("Online")}
              className={`px-5 py-1 rounded-full rounded-l-none shadow-md transition-all
            ${
              selected === "Online"
                ? "bg-gold text-white"
                : "bg-white border border-blue-500 text-blue-900"
            }`}
            >
              Online
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
          {data.map((course) => (
            <LazyLoadWrapper key={course._id}>
              <div className="max-w-sm xl:max-w-lg h-full rounded-xl overflow-hidden shadow-md bg-white relative border border-[#f09619e2] hover:shadow-lg hover:scale-[1.02] transition duration-300 cursor-pointer flex flex-col justify-between">
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
                  <div className="flex justify-between  items-start w-full">
                    {/* Button */}
                    <Link to={`/courses/${course.route}`}>
                      <button className=" px-[20px] py-[7px] lg:px-[30px] lg:py-[10px] text-center uppercase transition-all duration-500 bg-[linear-gradient(to_right,_#249ffd_2%,_#3a7bd5_58%,_#00d2ff_100%)] bg-[length:200%_auto] text-white shadow-[0_0_10px_#000_80%] rounded-full  hover:bg-[position:right_center] hover:text-white flex items-center gap-2 font-bold">
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
      </div>
    </div>
  );
};

export default OurCourses;
