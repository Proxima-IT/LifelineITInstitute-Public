import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {

    const naviagte = useNavigate()
    const handleSendOTP = ()=>{
        naviagte('/otppage')
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(135deg,_#dbeafe_0%,_#e0e7ff_100%)] font-sans p-4">
      <div className="w-full max-w-[28rem]">
        <div className="bg-white rounded-[10px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] p-8 backdrop-blur-sm">
          <h1 className="text-[1.5rem] font-bold text-gray-800 mb-8 text-center">
            Forgot Password
          </h1>

          <p className='text-xl font-bold text-blue-500 pb-6'>Please enter your Email Address which is registered with us</p>

          <form class="login-form">
            <div className="relative mb-6">
              <input
                type="email"
                id="name"
                 required
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
                    peer-valid:top-2
                    peer-valid:text-sm
                    peer-valid:font-medium
                    peer-valid:text-blue-600
                    peer-valid:scale-90
                    transform origin-left
                "
              >
                Your Email*
              </label>

              <div className="absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ease-in-out transform -translate-x-1/2 w-0"></div>
            </div>

           
            <input
              type="submit"
              onClick={handleSendOTP}
              className="inline-block w-full mt-1.5 text-[var(--login-color-secondary)] py-2 text-base tracking-wider cursor-pointer bg-transparent border border-[var(--login-color-secondary)] rounded-[30px] shadow-[inset_0_0_0_0_var(--login-color-secondary)] transition duration-200 hover:text-white hover:shadow-[inset_500px_0_0_0_var(--login-color-primary)]"
              value="Send OTP"
            />
          </form>
          
        </div>
      </div>
    </div>
    );
};

export default ForgotPassword;