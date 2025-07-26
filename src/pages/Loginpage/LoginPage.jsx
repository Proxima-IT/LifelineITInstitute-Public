import React, { useEffect, useState } from "react"
import "../../Footer.css"
import { Link, useNavigate } from "react-router-dom"
import { Checkbox } from "@mui/material"
import axios from "axios"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const LoginPage = () => {
  const [checking, setChecking] = useState(true)
  const navigate = useNavigate()

  // Checks if user already logged in
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const result = await axios.get(
          import.meta.env.VITE_API_URL + "/api/auth/check",
          { withCredentials: true }
        )

        if (result.data.status) {
          // window.location.href = `${import.meta.env.VITE_DASHBOARD_PAGE}`;
          window.location.href = `${import.meta.env.VITE_STUDENT_DASHBOARD_URL}`
        } else {
          setChecking(false)
          console.log("Okay, not logged in")
        }
      } catch (err) {
        console.error("Error while checking login status:", err)
      }
    }

    checkLogin()
  }, [navigate])

  const handleLogin = async (e) => {
    const MySwal = withReactContent(Swal)
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    try {
      const result = await axios.post(
        import.meta.env.VITE_API_URL + "/api/auth/login",
        { email, password },
        { withCredentials: true }
      )

      console.log(result)

      if (result.data.success) {
        MySwal.fire({
          title: `Welcome Back, ${result.data.name}`,
          text: result.data.message,
          icon: "success",
          confirmButtonText: "Cool!",
        })
        setTimeout(() => {
          // window.location.href = `${import.meta.env.VITE_DASHBOARD_PAGE}`;
          // window.location.href = `${import.meta.env.VITE_STUDENT_DASHBOARD_URL}`;
        }, 3000)
      }
    } catch (error) {
      MySwal.fire({
        title: "Oops!",
        text: "Invalid Credintials, please cross check your data",
        icon: "error",
        confirmButtonText: "Okay",
      })
      console.error("Axios Error:", error.response?.data || error.message)
    }
  }

  if (checking) return null

  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(135deg,_#dbeafe_0%,_#e0e7ff_100%)] font-sans p-4">
      <div className="w-full max-w-[28rem]">
        <div className="bg-white rounded-[10px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] p-8 backdrop-blur-sm">
          <h1 className="text-[1.5rem] font-bold text-gray-800 mb-8 text-center">
            Login
          </h1>

          <form className="login-form" onSubmit={handleLogin}>
            <div className="relative mb-6">
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" "
                className="
                    peer
                    w-full pt-6 pb-2 px-4
                    text-gray-700
                    bg-transparent
                    border-0 border-b-2 border-gray-300
                    rounded-lg
                    transition-all duration-300 ease-in-out
                    outline-none
                    resize-none
                    text-base
                    focus:border-blue-500
                    focus:shadow-[0_10px_25px_-5px_rgba(59,130,246,0.2)]
                    hover:border-gray-400
                  "
              />

              <label
                htmlFor="email"
                className="
                    absolute left-4 text-gray-400 pointer-events-none transition-all duration-300 ease-in-out 
                    top-1/2 -translate-y-1/2 text-base 
                    peer-placeholder-shown:top-1/2
                    peer-placeholder-shown:text-base
                    peer-focus:top-2
                    peer-focus:text-sm
                    peer-focus:font-medium
                    peer-focus:text-blue-600
                    peer-focus:scale-90
                    transform origin-left
                  "
              >
                Email*
              </label>

              <div className="absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ease-in-out transform -translate-x-1/2 w-0"></div>
            </div>

            <div className="relative mb-6">
              <input
                type="password"
                id="pass"
                name="password"
                placeholder=" "
                className="
                      peer
                      w-full pt-6 pb-2 px-4
                      text-gray-700
                      bg-transparent
                      border-0 border-b-2 border-gray-300
                      rounded-lg
                      transition-all duration-300 ease-in-out
                      outline-none
                      resize-none
                      text-base
                      focus:border-blue-500
                      focus:shadow-[0_10px_25px_-5px_rgba(59,130,246,0.2)]
                      hover:border-gray-400
                    "
              />

              <label
                htmlFor="pass"
                className="
                      absolute left-4 text-gray-400 pointer-events-none transition-all duration-300 ease-in-out 
                      top-1/2 -translate-y-1/2 text-base
                      peer-placeholder-shown:top-1/2
                      peer-placeholder-shown:text-base
                      peer-focus:top-2
                      peer-focus:text-sm
                      peer-focus:font-medium
                      peer-focus:text-blue-600
                      peer-focus:scale-90
                      transform origin-left
                    "
              >
                Password*
              </label>

              <div className="absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ease-in-out transform -translate-x-1/2 w-0"></div>
            </div>
            <div className="flex justify-between items-center mb-5 font-sans text-sm">
              <label className="flex items-center  relative  cursor-pointer select-none text-[#2d2d2d]">
                <input
                  type="checkbox"
                  checked
                  className="absolute opacity-0 cursor-pointer h-0 w-0 checked:bg-[#deae40] checked:border-0"
                />
                {/* <span class="checkmark"></span> */}
                <span className="">
                  <Checkbox
                    sx={{
                      color: "orange",
                      "&.Mui-checked": {
                        color: "orange",
                      },
                    }}
                  />
                </span>
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="no-underline text-[#2d2d2d] font-semibold hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <input
              type="submit"
              className="inline-block w-full mt-1.5 text-[var(--login-color-secondary)] py-2 text-base tracking-wider cursor-pointer bg-transparent border border-[var(--login-color-secondary)] rounded-[30px] shadow-[inset_0_0_0_0_var(--login-color-secondary)] transition duration-200 hover:text-white hover:shadow-[inset_500px_0_0_0_var(--login-color-primary)]"
              value="Login"
            />
          </form>
          <p className="text-center font-sans text-[15px] text-gray-600 mt-8">
            If you don’t have any existing account, first
            <Link
              to="/register"
              className="text-blue-600 font-semibold no-underline hover:underline ml-2"
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
