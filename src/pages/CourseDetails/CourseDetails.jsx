import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import {
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaTelegramPlane,
  FaArrowCircleRight,
} from "react-icons/fa";
import { Rating } from "react-simple-star-rating";
import LazyLoadWrapper from "@/components/shared/LazyLoadWrapper";
import moment from "moment";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "course", label: "Course Content" },
  { id: "instructor", label: "Instructor" },
  { id: "reviews", label: "Reviews" },
  { id: "write", label: "Write a Review" },
];

const CourseDetails = () => {
  const { route } = useParams();
  const [courseDetails, setCourseDetails] = useState({});
  const [activeTab, setActiveTab] = useState("overview");
  const navbarHeight = 80;
  const [courseData, setCourseData] = useState([]);

  let getLatestCourses = async () => {
    const result = await axios.get(
      import.meta.env.VITE_API_URL + `/api/courses/search?limit=3&name=online`
    );
    setCourseData(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    getLatestCourses();
  }, []);

  // tab wise view
  const sectionsRef = {
    overview: useRef(null),
    course: useRef(null),
    instructor: useRef(null),
    reviews: useRef(null),
    write: useRef(null),
  };

  const handleScrollTo = (id) => {
    setActiveTab(id);
    const section = sectionsRef[id].current;
    if (section) {
      const top = section.offsetTop - navbarHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + `/api/courses/${route}`)
      .then((res) => {
        console.log(res.data);
        setCourseDetails(res.data);
      });
  }, [route]);

  const modules = courseDetails?.modules;
  console.log(modules);

  function extractYouTubeID(url) {
    // Regular expression to match most YouTube URL formats
    const regExp =
      /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  }

  const [open, setOpen] = useState(false);

  const instructors = courseDetails?.instructors;
  console.log(instructors);

  // Update active tab on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "overview";
      for (const tab of tabs) {
        const section = sectionsRef[tab.id].current;
        if (
          section &&
          window.scrollY >= section.offsetTop - navbarHeight - 50
        ) {
          current = tab.id;
        }
      }
      setActiveTab(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="lg:mt-20 w-11/12 text-left mx-auto">
      <div className=" grid grid-cols-1 lg:grid-cols-3 justify-between gap-8">
        {/* course info  */}
        <div className="space-y-6 col-span-2">
          <h1 className="lg:text-5xl text-accent font-bold">
            {courseDetails?.title}
          </h1>

          <p className="text-xl text-accent">{courseDetails?.description}</p>
          <p className="text-lg text-amber-400">
            Total Classes: {courseDetails?.totalClasses}
          </p>
          <div className="  text-[#ffa800] flex items-center gap-3 text-lg pb-10">
            <p>{courseDetails.starCount}</p>
            <p>
              <Rating
                initialValue={
                  courseDetails.starCount ? courseDetails.starCount : 5
                } // Default rating
                readonly // Only display
                allowFraction // Show half stars
                size={20} // Star size (px)
                fillColor="#ffa800" // Filled star color
                emptyColor="#d1d5db" // Empty star color (Tailwind gray-300)
                transition // Smooth animation
                SVGstyle={{ display: "inline-block", marginBottom: "3px" }} // Extra custom style
              />
            </p>
            <p className="text-gray-900 ml-2 bg-[#f2b53c] px-3 py-1 rounded-md">
              {" "}
              {courseDetails.reviewCount
                ? courseDetails.reviewCount
                : "72"}{" "}
              Reviews
            </p>
            <p className="text-lg text-[#ffa800] ">
              {courseDetails.enrolledStudents?.length}+
              <span className="font-bold ml-2">Students:</span>
            </p>
          </div>
          <div className="bg-white p-4">
            <img src={courseDetails?.thumbnail} alt="" />
          </div>
        </div>

        <div className="bg-accent rounded-md shadow-md flex flex-col h-full  border-2 border-gold p-4 space-y-6 ">
          <div className="relative flex items-center justify-center w-full mx-auto">
            {/* Video Thumbnail */}
            <div
              className="relative cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <img
                src={courseDetails.thumbnail ? courseDetails.thumbnail : ""}
                alt="Video Thumbnail"
                className="rounded-lg shadow-lg max-w-3xl w-full"
              />

              {/* Ripple Animation */}
              <div className="absolute inset-0 flex items-center justify-center  ">
                <div className="absolute inset-0 bg-black/40"></div>
                <span className="ripple" />
                <span className="ripple ripple-2" />
                <span className="ripple ripple-3" />

                {/* Play Button */}
                <div className="relative z-10 w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-300">
                  <svg
                    className="w-10 h-10 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="absolute bottom-4 left-18 text-lg text-white flex items-center gap-3">
                  <IoEyeOutline />
                  Preview this course
                </p>
              </div>
            </div>

            {/* Modal Video Popup */}
            {open && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
                <div class="relative w-full max-w-4xl h-[500px]">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${extractYouTubeID(
                      courseDetails.introVideo
                    )}?autoplay=1`}
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

          <h1 className="text-blue-900 text-2xl text-center font-bold leading-loose">
            <del className="text-gray-400 mr-2">
              &#2547; {parseFloat(courseDetails.cutPrice).toFixed(2)}
            </del>
            <span>&#2547; {parseFloat(courseDetails.price).toFixed(2)}</span>
          </h1>

          <Link to={`/courses/${courseDetails.route}/pay`}>
            <button
              className="px-8 sm:px-10 lg:px-8 w-full
                py-2 sm:py-3 rounded-lg font-bold text-center flex items-center justify-center transition-all duration-500 bg-[linear-gradient(to_right,_#fc00ff_0%,_#00dbde_51%,_#fc00ff_100%)] bg-[length:200%_auto] text-white  shadow-[0_0_20px_#eee]  hover:bg-[position:right_center] hover:text-white"
            >
              Enroll Now
            </button>
          </Link>
          <p className="text-lg text-blue-900 border-b-2 pb-2">
            <span className="font-bold">Start Date:</span>{" "}
            {moment(courseDetails.startDate).format("MMMM Do YYYY")}
          </p>
          <p className="text-lg text-blue-900 border-b-2 pb-2">
            <span className="font-bold">Total Classes: </span>{" "}
            {courseDetails.totalClasses}
          </p>
          <p className="text-lg text-blue-900 border-b-2 pb-2">
            <span className="font-bold">Class Duration:</span>{" "}
            {courseDetails.duration}
          </p>
          <p className="text-lg text-blue-900 border-b-2 pb-2">
            <span className="font-bold">Total Students Till Now:</span>{" "}
            {courseDetails.enrolledStudents?.length}
          </p>

          {/* Social Icons */}
          <div className="mt-8 flex flex-wrap items-center gap-4 justify-center pb-5">
            <a href="http://wa.me/8801867101740" target="_blank">
              <SocialIcon icon={<FaWhatsapp />} color="#25D366" />
            </a>
            <a href="https://www.facebook.com/lifeline.itti" target="_blank">
              {" "}
              <SocialIcon icon={<FaFacebookF />} color="#3b5998" />
            </a>
            <a
              href="https://youtube.com/@lifelineitinstitute?si=O1ajnzSt_KyZ-WII"
              target="_blank"
            >
              <SocialIcon icon={<FaYoutube />} color="#FF0000" />
            </a>
            <a
              href="https://www.instagram.com/lifelineitt.institute?igsh=MjE1NGRwc25vMXcx&utm_source=qr"
              target="_blank"
            >
              <SocialIcon icon={<FaInstagram />} color="#C13584" />
            </a>
            {/* <SocialIcon icon={<FaTiktok />} color="#000000" /> */}
            <a href="https://t.me/lifelineitsupport" target="_blank">
              <SocialIcon icon={<FaTelegramPlane />} color="#0088cc" />
            </a>
            <a
              href="https://www.linkedin.com/in/lifeline-it-training-institute-1896aa377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
            >
              <SocialIcon icon={<FaLinkedinIn />} color="#0077b5" />
            </a>
          </div>
        </div>
      </div>

      <div className="pt-10">
        {/* Tabs */}
        <div className="flex gap-3 mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleScrollTo(tab.id)}
              className={`px-5 py-2 rounded-full transition ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-blue-100 hover:text-blue-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-2">
          <section
            ref={sectionsRef.overview}
            className=" bg-gray-50 p-6 rounded-lg"
          >
            <h2 className="text-xl font-semibold mb-10">Details</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              distinctio ad perspiciatis, rerum eligendi repudiandae similique
              ipsa ipsum. Doloribus adipisci dolorum incidunt blanditiis vitae
              magni placeat quod illum, officia rerum ipsa neque, sunt delectus
              veritatis ipsam enim nesciunt modi molestiae! Ad reprehenderit
              enim quaerat debitis molestiae corrupti, amet quae atque.
            </p>
          </section>

          <section
            ref={sectionsRef.course}
            className=" bg-gray-50 p-6 rounded-lg"
          >
            <h2 className="text-xl font-semibold mb-2">Course Content</h2>
            {modules?.map((module) => (
              <h1 className="font-bold mt-5 flex items-center gap-3">
                <FaArrowCircleRight />
                {module.title}
              </h1>
            ))}
          </section>

          <section
            ref={sectionsRef.instructor}
            className=" bg-gray-50 p-6 rounded-lg"
          >
            <div>
              <h1 className="font-semibold text-xl text-black my-4">
                Instructor
              </h1>

              {instructors?.map((instructor) => (
                <div
                  key={instructor}
                  className="relative group w-full md:w-1/3 lg:w-1/4  bg-white p-4 rounded-2xl shadow-md text-center transition"
                >
                  {/* Profile Picture */}
                  <img
                    src={instructor.image}
                    alt="Instructor"
                    className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-blue-200 shadow"
                  />

                  {/* Name & Designation */}
                  <h3 className="mt-4 text-lg font-semibold text-gray-800">
                    {instructor.name}
                  </h3>
                  <p className="text-sm text-gray-500">Frontend Mentor</p>

                  {/* Floating Pop-up Below the Card */}
                  <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-60 bg-white text-gray-700 text-sm shadow-lg p-3 rounded-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 z-20">
                    <p>{instructor.about}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            ref={sectionsRef.reviews}
            className=" bg-gray-50 p-6 rounded-lg"
          >
            <h2 className="text-xl font-semibold mb-2">Recent Reviews</h2>
            <p>Placeholder content for Reviews.</p>
          </section>

          <section
            ref={sectionsRef.write}
            className=" bg-gray-50 p-6 rounded-lg"
          >
            <h2 className="text-xl font-semibold mb-2">Write a Review</h2>
            <p>Placeholder content for Write a Review.</p>
          </section>
        </div>

        <h1 className="border border-white rounded-full text-center text-white px-3 py-1 mt-8 w-1/5">
          More Similar Courses
        </h1>
        <h1 className="text-2xl font-semibold mt-6 text-white">
          Related Courses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {courseData.map((course) => (
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
                    <p className=" space-x-1 text-[#ffa800] flex items-center">
                      <Rating
                        initialValue={course.starCount ? course.starCount : 5} // Default rating
                        readonly // Only display
                        allowFraction // Show half stars
                        size={24} // Star size (px)
                        fillColor="#ffa800" // Filled star color
                        emptyColor="#d1d5db" // Empty star color (Tailwind gray-300)
                        transition // Smooth animation
                        SVGstyle={{ display: "inline-block" }} // Extra custom style
                      />
                      <span className="text-gray-700 ml-2">
                        {" "}
                        ({course.reviewCount ? course.reviewCount : "72"}{" "}
                        Reviews)
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between items-start">
                    {/* Button */}
                    <Link to={`/courses/${course.route}/pay`}>
                      <button className="m-2 px-[20px] py-[7px] lg:px-[30px] lg:py-[10px] text-center uppercase transition-all duration-500 bg-[linear-gradient(to_right,_#249ffd_2%,_#3a7bd5_58%,_#00d2ff_100%)] bg-[length:200%_auto] text-white shadow-[0_0_10px_#000_80%] rounded-full  hover:bg-[position:right_center] hover:text-white flex items-center gap-3 font-bold">
                        Enroll Now
                      </button>
                    </Link>
                    <div>
                      <h2 className="text-gray-600 font-bold text-lg">
                        <del>৳ 1000</del>
                      </h2>
                      <h2 className="text-gray-800 font-bold text-2xl">
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

const SocialIcon = ({ icon, color }) => {
  return (
    <div
      className="w-9 h-9 flex items-center justify-center rounded-full shadow-md transition-all duration-300 hover:scale-110 cursor-pointer"
      style={{
        backgroundColor: color,
        boxShadow: `0 4px 8px ${color}80, inset 0 1px 1px #fff3`,
      }}
    >
      <div className="text-white text-lg">{icon}</div>
    </div>
  );
};

export default CourseDetails;
