import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const OtpPage = () => {
  const [checking, setChecking] = useState(true)
  const navigate = useNavigate()

  // Checks if user already logged in
  useEffect(() => {
    if (localStorage.getItem("RegisterInfo") == null) {
      navigate("/")
    }
    const checkLogin = async () => {
      try {
        const result = await axios.get(
          import.meta.env.VITE_API_URL + "/api/auth/check",
          { withCredentials: true }
        )

        if (result.data.status) {
          navigate("/")
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

  const handleChange = (e, index) => {
    const value = e.target.value
    if (value.length === 1 && index < 5) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const paste = (e.clipboardData || window.clipboardData).getData("text")
    if (/^\d{6}$/.test(paste)) {
      for (let i = 0; i < 6; i++) {
        inputRefs.current[i].value = paste[i]
      }
      inputRefs.current[5].focus()
    }
  }

  const [registerInfo, setRegisterInfo] = useState({})
  useEffect(() => {
    const saved = localStorage.getItem("RegisterInfo")
    console.log(saved)
    setRegisterInfo(saved)
  }, [])
  console.log(registerInfo)

  const inputRefs = useRef([])
  const MySwal = withReactContent(Swal)

  const handleOTP = async (e) => {
    e.preventDefault()

    const otp = inputRefs.current.map((input) => input.value).join("")
    console.log("Full OTP:", otp)

    try {
      const info = JSON.parse(registerInfo)

      console.log({ ...info, otp })
      const result = await axios.post(
        import.meta.env.VITE_API_URL + "/api/auth/register",
        { ...info, otp },
        { withCredentials: true }
      )

      console.log(result.data)

      if (result.data.status) {
        MySwal.fire({
          title: `Congratulations!`,
          text: result.data.message,
          icon: "success",
          confirmButtonText: "Cool!",
        })
        setTimeout(() => {
          localStorage.clear()
          navigate("/login")
        }, 3000)
      } else {
        MySwal.fire({
          title: "Oops!",
          text: "OTP Mismatched! Please check again.",
          icon: "error",
          confirmButtonText: "Okay.",
        })
      }
    } catch (error) {
      console.error("Axios Error:", error.response?.data || error.message)
      MySwal.fire({
        title: "Oh no!",
        text: "OTP is invalid, Please request for a resend OTP.",
        icon: "warning",
        confirmButtonText: "Okay.",
      })
    }
  }

  // Resend OTP Function

  const resendOTP = async () => {
    try {
      const registerInfo = JSON.parse(localStorage.getItem("RegisterInfo"))

      console.log(registerInfo.email)
      const result = await axios.post(
        import.meta.env.VITE_API_URL + "/api/auth/otp-verify",
        { email: registerInfo.email },
        { withCredentials: true }
      )

      if (result.data) {
        MySwal.fire({
          title: "OTP Resend",
          text: "OTP has been sent again to your inbox.",
          icon: "success",
          confirmButtonText: "Okay.",
        })
      }
    } catch (error) {
      console.log(error)
      MySwal.fire({
        title: "Failed!",
        text: "OTP resend request has been terminated.",
        icon: "error",
        confirmButtonText: "Okay.",
      })
    }
  }

  if (checking) return null

  return (
    <div
      className="font-sans bg-gradient-to-br from-[#78A6D9] to-[#DEAE40] flex items-center justify-center h-screen m-0
"
    >
      <div
        className="bg-white p-10 px-8 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] text-center w-full max-w-[400px]
"
      >
        <h2
          className="mb-2 text-[24px] text-[#222]
"
        >
          🔐 OTP Verification
        </h2>
        <p
          className="text-sm text-[#555] mb-8
"
        >
          We’ve sent a 6-digit code to your email. Please enter it below.
        </p>
        <div className="flex justify-between gap-[10px] mb-5">
          <form onPaste={handlePaste}>
            {Array.from({ length: 6 }).map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="w-[45px] h-[55px] text-[20px] ml-1 mr-1 text-center border-2 border-[#ccc] rounded-[10px] transition duration-200 focus:border-[#78A6D9] focus:outline-none focus:shadow-[0_0_5px_rgba(120,166,217,0.6)]"
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}

            <button
              className="bg-gradient-to-r mt-4 from-[#78A6D9] to-[#DEAE40] border-none text-white py-[14px] px-5 rounded-[10px] font-bold text-base cursor-pointer transition-all duration-300 w-full hover:bg-gradient-to-l
"
              onClick={handleOTP}
            >
              Verify Now
            </button>
          </form>
        </div>

        <div
          className="mt-[15px] text-sm
"
        >
          Didn't receive?{" "}
          <Link
            onClick={() => resendOTP()}
            className="text-[#007BFF] no-underline font-semibold hover:underline"
          >
            Resend
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OtpPage
