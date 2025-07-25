import React, { useRef, useState } from "react";
import cerbg from "../../assets/cerbg.jpg";
import LazyLoadWrapper from "@/components/shared/LazyLoadWrapper";
const CertificateVerify = () => {
  const [showDetails, setShowDetails] = useState(false);
  const inputRef = useRef(null);

  function cerVerify() {
    const value = inputRef.current.value.trim();
    if (value !== "") {
      setShowDetails(true);
    } else {
      setShowDetails(false);
      alert("Please enter a valid certificate number.");
    }
  }
  return (
    <div className="font-poppins">
      <div
        className="flex justify-center items-center min-h-screen bg-cover bg-center p-5"
        style={{ backgroundImage: `url(${cerbg})` }}
      >
        <LazyLoadWrapper></LazyLoadWrapper>
        <div className="bg-white p-[35px_30px] rounded-2xl shadow-[0_12px_30px_#00000014] max-w-[600px] w-full text-center transition ease-in-out duration-300 hover:-translate-y-0.5">
          <h2 className="text-[26px] text-[#0B254C] mb-[25px]">
            Verify Your Certificate
          </h2>

          <div className="flex flex-col items-center gap-[15px]">
            <input
              type="text"
              id="cerInput"
              ref={inputRef}
              className="w-full p-[12px_16px] text-[10px] lg:text-[16px] border-2 border-[#0B254C] rounded-lg outline-none transition duration-300 focus:shadow-[0_0_8px_#3e7ad3]"
              placeholder="Enter Certificate Number / Student ID"
            />
            <button
              className="w-full bg-[#0B254C] text-white border-0 p-[12px_18px] text-[16px] rounded-lg cursor-pointer transition-colors duration-300 flex items-center justify-center gap-2 hover:bg-[#0b254cd1]"
              onClick={cerVerify}
            >
              Verify
            </button>
          </div>

          <div
            className="hidden bg-[#fff7f4] border-l-4 border-[var(--main-color)] p-5 rounded-lg mt-7 w-full animate-fadeIn"
            id="cerDetails"
          >
            {showDetails && (
              <table className="w-full border-collapse mt-2">
                <tr className="hover:bg-[#f5f5f5]">
                  <th className="px-4 py-3 text-left border-b border-[hsl(0,0%,87%)]bg-[#f2f2f2] font-bold">
                    Certificate No:
                  </th>
                  <td className="px-4 py-3 text-left border-b border-[#ddd]">
                    C123456789
                  </td>
                </tr>
                <tr className="hover:bg-[#f5f5f5]">
                  <th className="px-4 py-3 text-left border-b border-[#ddd] bg-[#f2f2f2] font-bold">
                    Name:
                  </th>
                  <td className="px-4 py-3 text-left border-b border-[#ddd]">
                    Hasan Mondol
                  </td>
                </tr>
                <tr className="hover:bg-[#f5f5f5]">
                  <th className="px-4 py-3 text-left border-b border-[#ddd] bg-[#f2f2f2] font-bold">
                    Course:
                  </th>
                  <td className="px-4 py-3 text-left border-b border-[#ddd]">
                    HTML & CSS Mastery
                  </td>
                </tr>
                <tr className="hover:bg-[#f5f5f5]">
                  <th className="px-4 py-3 text-left border-b border-[#ddd] bg-[#f2f2f2] font-bold">
                    Date of Issue:
                  </th>
                  <td className="px-4 py-3 text-left border-b border-[#ddd]">
                    June 20, 2025
                  </td>
                </tr>
                <tr className="hover:bg-[#f5f5f5]">
                  <th className="px-4 py-3 text-left border-b border-[#ddd] bg-[#f2f2f2] font-bold">
                    Status:
                  </th>
                  <td
                    //   style="color: green;"
                    className="px-4 py-3 text-left border-b border-[#ddd]"
                  >
                    <img
                      src="icons8-verified.gif"
                      alt=""
                      class="checkmarkicon"
                    />{" "}
                    Verified
                  </td>
                </tr>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateVerify;
