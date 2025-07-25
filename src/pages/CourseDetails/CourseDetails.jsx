import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const CourseDetails = () => {
  const { route } = useParams()

  const [courseDetails, setCourseDetails] = useState({})
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + `/api/courses/${route}`)
      .then((res) => {
        console.log(res.data)
        setCourseDetails(res.data)
      })
  }, [route])

  function extractYouTubeID(url) {
    // Regular expression to match most YouTube URL formats
    const regExp =
      /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
    const match = url.match(regExp)
    return match ? match[1] : null
  }

  const [open, setOpen] = useState(false)

  const instructors = courseDetails?.instructors
  console.log(instructors)

  return (
    <div>
      <div className="mt-10 w-11/12 text-left mx-auto grid grid-cols-1 lg:grid-cols-3 justify-between gap-8">
        <div className="space-y-6 col-span-2">
          <h1 className="lg:text-6xl text-accent font-bold">
            {courseDetails?.title}
          </h1>

          <p className="text-xl text-accent">{courseDetails?.description}</p>
          <p className="text-lg text-amber-400">Total Classes: {courseDetails?.totalClasses}</p>
          <div className="bg-white p-4">
            <img
              src="https://i.ibb.co.com/NpnnggZ/cybersecurity-concept-collage-design.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="bg-accent rounded-md shadow-md flex flex-col h-full  ml-auto border-2 border-gold p-4 space-y-6 ">
          <div className="relative flex items-center justify-center w-full">
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
              <div className="absolute inset-0 flex items-center justify-center">
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
            &#2547; 1500
          </h1>
          <p className="text-xl text-blue-900 border-b-2 pb-2">
            <span className="font-bold">Start Date:</span> {courseDetails.startDate}
          </p>
          <p className="text-xl text-blue-900 border-b-2 pb-2">
            <span className="font-bold">Total Classes: </span> {courseDetails.totalClasses}
          </p>
          <p className="text-xl text-blue-900 border-b-2 pb-2">
            <span className="font-bold">Class Duration:</span> {courseDetails.duration}
          </p>
          <Link to={`/`}>
            <button
              className="px-8 sm:px-10 lg:px-8 w-full
                py-2 sm:py-3 rounded-full font-bold text-center flex items-center justify-center transition-all duration-500 bg-[linear-gradient(to_right,_#fc00ff_0%,_#00dbde_51%,_#fc00ff_100%)] bg-[length:200%_auto] text-white  shadow-[0_0_20px_#eee]  hover:bg-[position:right_center] hover:text-white"
            >
              Enroll Now
            </button>
          </Link>
        </div>

        <div>
          <h1 className="font-bold text-xl text-white mb-4">Instructor</h1>
        
          {instructors?.map((instructor) => (
            <div
              key={instructor}
              className="relative group w-64  bg-white p-4 rounded-2xl shadow-md text-center transition"
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
        
      </div>
    </div>
  )
}

export default CourseDetails
