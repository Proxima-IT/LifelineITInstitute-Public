import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
// import { useRef } from "react";
import logo from "../../assets/Website Logo.png";
import LazyLoadWrapper from "@/components/shared/LazyLoadWrapper";
const students = [
  {
    name: "Rahim Uddin",
    designation: "Frontend Developer",
    image: "https://i.ibb.co/YB4pwRDG/pic2.jpg",
    instituteLogo: logo,
  },
  {
    name: "Sarika Sabah",
    designation: "UI/UX Designer",
    image: "https://i.ibb.co/6R0phCbk/pic1.jpg",
    instituteLogo: logo,
  },
  {
    name: "Fahim Hassan",
    designation: "Software Engineer",
    image: "https://i.ibb.co/YB4pwRDG/pic2.jpgg",
    instituteLogo: logo,
  },
  {
    name: "Adila Jahan",
    designation: "MERN Stack Dev",
    image: "https://i.ibb.co/6R0phCbk/pic1.jpg",
    instituteLogo: logo,
  },
  {
    name: "Tariq Islam",
    designation: "Web Designer",
    image: "https://i.ibb.co/YB4pwRDG/pic2.jpgg",
    instituteLogo: logo,
  },
  // Add more...
];

const videos = [
  { id: "oaFJY1tBwEQ", title: "Student 1" },
  { id: "sY1LpZd7Jwo", title: "Student 2" },
  { id: "8riqrNBgCBY", title: "Student 3" },
  { id: "FJ6F-defbbo", title: "Student 4" },
  { id: "uGx8wsKooBc", title: "Student 5" },
  { id: "-QcVc3VKTGA", title: "Student 6" },
];

const SuccessStory = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [picsliderRef, picinstanceRef] = useKeenSlider({
    loop: true,

    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 8 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
    // slides: {
    //   perView: 2, // mobile default
    //   spacing: 20,
    // },
    // breakpoints: {
    //   640: {
    //     slides: { perView: 2 },
    //   },
    //   1024: {
    //     slides: { perView: 4 },
    //   },
    // },
  });
  const [videosliderRef, videoinstanceRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 8 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });
  return (
    <div>
      {/* image card slider  */}

      <div className="relative px-6 py-10 ">
        {/* Arrows */}
        <button
          onClick={() => picinstanceRef.current?.prev()}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gold shadow px-2 py-1 rounded-full z-10 duration-300"
        >
          ◀
        </button>
        <button
          onClick={() => picinstanceRef.current?.next()}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gold  shadow px-2 py-1 rounded-full z-10 duration-300"
        >
          ▶
        </button>

        {/* Slider */}
        <div ref={picsliderRef} className="keen-slider">
          {students.map((student, i) => (
            <div
              key={i}
              className="keen-slider__slide bg-accent rounded-xl shadow-lg p-6 flex flex-col items-center text-center space-y-4"
            >
              <img
                src={student.image}
                alt={student.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-gold"
              />
              <div>
                <h3 className="text-lg font-semibold text-heading">
                  {student.name}
                </h3>
                <p className="text-sm text-gold">{student.designation}</p>
              </div>
              <img
                src={student.instituteLogo}
                alt="Institute Logo"
                className="w-20 h-auto mt-2"
              />
            </div>
          ))}
        </div>
      </div>

      {/* videos slider  */}
      <LazyLoadWrapper>
        <div className="relative px-6 py-10 ">
          {/* Arrows */}
          <button
            onClick={() => videoinstanceRef.current?.prev()}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gold shadow px-2 py-1 rounded-full z-10"
          >
            ◀
          </button>
          <button
            onClick={() => videoinstanceRef.current?.next()}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gold shadow px-2 py-1 rounded-full z-10"
          >
            ▶
          </button>

          {/* Video Slider */}
          <div ref={videosliderRef} className="keen-slider">
            {videos.map((video, i) => (
              <div key={i} className="keen-slider__slide">
                <div
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedVideo(video.id)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-lg shadow"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition">
                    <div className="bg-white p-3 rounded-full shadow text-xl">
                      ▶
                    </div>
                  </div>
                </div>
                {/* <p className="text-center text-sm mt-2 text-heading font-medium">{video.title}</p> */}
              </div>
            ))}
          </div>

          {/* Modal Popup */}
          {selectedVideo && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
              <div className="bg-white w-full max-w-3xl rounded-lg overflow-hidden relative">
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-2 right-2 text-2xl font-bold text-gray-600 hover:text-red-500"
                >
                  ✕
                </button>
                <iframe
                  width="100%"
                  height="450"
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="YouTube Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </LazyLoadWrapper>
    </div>
  );
};

export default SuccessStory;
