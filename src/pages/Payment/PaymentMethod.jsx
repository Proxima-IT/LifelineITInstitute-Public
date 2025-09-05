import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import bkash from '../../assets/bkash.png'
import nagad from '../../assets/nagad.png'
import bank from '../../assets/Asset 1.png'
import axios from "axios";

const PaymentMethod = () => {

   const location = useLocation();
  const { courseDetails } = location.state || {};

  const handlePay = ()=>{
    axios.post(`${import.meta.env.VITE_API_URL}/api/payment/pay`)
    .then(res=>console.log(res.data))
  }
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-white mt-10 font-bold text-2xl">Payment Method</h1>

      <div className="bg-white rounded-md p-10 w-1/3 mx-auto mt-5 flex gap-4 justify-around">
        <Link onClick={handlePay} className="w-1/2 shadow-md rounded-md flex items-center">
            <img src={bkash} alt="bkash"  />
        </Link>
        <Link className="w-1/2 shadow-md rounded-md flex items-center">
            <img src={nagad} alt="nagad"  />
        </Link>
        <Link to={`/courses/${courseDetails.route}/pay/bank`} className="w-1/2 shadow-md rounded-md flex flex-col justify-center">
            <img src={bank} alt="nagad"  />
            <h3 className="text-sm">Deposit / NPSB</h3>
        </Link>
      </div>

      <Link to="/" className="flex mt-4 w-full justify-center">
        <button className="w-1/3 m-2 px-[26px] py-[12px] text-center uppercase transition-all duration-500 bg-[linear-gradient(to_right,_#249ffd_2%,_#3a7bd5_58%,_#00d2ff_100%)] bg-[length:200%_auto] text-white  rounded-[10px]  hover:bg-[position:right_center] hover:text-white flex items-center gap-3 font-bold justify-center text-xl">
          Place Now <FaArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default PaymentMethod;
