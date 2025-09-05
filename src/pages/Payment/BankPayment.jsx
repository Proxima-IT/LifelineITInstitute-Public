import React, { useState } from "react";
import brac from "../../assets/Asset 2.png";
const BankPayment = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // you can handle form data submission here
    setShowModal(true);
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-blue-400">
        <div className="bg-white shadow-md rounded-md w-[380px] my-5">
          {/* Header */}
          <h2 className="text-center text-lg lg:text-2xl font-bold text-white bg-blue-900 py-3 rounded-t-md">
            Bank Deposit / NPSB Payment
          </h2>

          {/* Bank Info */}
          <div className="p-5">
            <div className="flex items-center space-x-2 mb-3 ">
              <img src={brac} alt="Brac Bank" className="w-3/4 mx-auto" />
            </div>
            <div className="space-y-1 text-lg flex  flex-col items-center text-left">
              <p>
                <span className="font-semibold">Bank Name</span> : BRAC BANK
              </p>
              <p>
                <span className="font-semibold">Account Name</span> : Lifeline
                IT
              </p>
              <p>
                <span className="font-semibold">Account Number</span> :
                2073725450001
              </p>
              <p>
                <span className="font-semibold">Branch Name</span> : SK MUJIB
                ROAD
              </p>
              <p>
                <span className="font-semibold">Routing Number</span> :
                060157427
              </p>
              <p>
                <span className="font-semibold">SWIFT Code</span> : BRAKBDDH
              </p>
              <p>
                <span className="font-semibold">District</span> : Chattogram
              </p>
            </div>
          </div>

          {/* Payment Verification */}
          <div className="mx-4 mb-4  ">
            <h3 className="text-center font-semibold mb-3 text-sm">
              Apply for Payment Verification
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="bg-[#fffaf5] border border-[#ED2224] rounded-md  p-4 space-y-3">
                <div>
                  <label className="block text-sm font-medium text-left">
                    Amount Paid
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-left">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-left">
                    Depositor Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-left">
                    Date of Payment
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-400"
                  />
                </div>

                {/* File Upload */}
                <div>
                  <p className="text-sm mb-1">
                    Upload Slip / Screenshot (JPG/PNG/PDF)
                  </p>
                  <div className="flex items-center space-x-2">
                    <label className="px-3 py-1 border-2 border-blue-900 bg-blue-100 border rounded-md cursor-pointer text-sm">
                      Choose File
                      <input type="file" className="hidden" />
                    </label>
                    <span className="text-xs text-gray-500 border px-2 py-1 rounded-md">
                      No File was attached
                    </span>
                  </div>
                </div>
              </div>
              {/* Submit */}
              <button
                type="submit"
                className="w-1/2 mt-3 bg-blue-400 text-white rounded-md py-2 font-semibold hover:bg-blue-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ✅ Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[400px] rounded-md shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              After Submit
            </h3>
            <p className="text-green-700 mb-2">
              Payment request submitted successfully!
            </p>
            <p className="text-green-700 mb-2">
              Our team will review the details and notify you via Email/SMS once
              verified.
            </p>
            <p className="text-green-700 mb-2">
              Once approved, course access will be available in your Student
              Dashboard.
            </p>
            <p className="text-green-700 mb-4">Thank you!</p>

            <p className="text-red-700 font-semibold">Emergency Contact:</p>
            <p className="text-black">01867101740 (Whatsapp)</p>
            <p className="text-black mb-4">01887893100</p>

            <button
              onClick={() => setShowModal(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BankPayment;
