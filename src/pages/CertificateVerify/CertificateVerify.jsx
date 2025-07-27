

import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import cerbg from "../../assets/cerbg.jpg";
import LazyLoadWrapper from "@/components/shared/LazyLoadWrapper";
import axios from "axios";

const CertificateVerify = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [certificateData, setCertificateData] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const find = searchParams.get("find");

  useEffect(() => {
    async function fetchData(find) {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/certificate?find=${find}`
      );
      return result.data;
    }

    if (find) {
      (async () => {
        const data = await fetchData(find);
        console.log(data);
        setCertificateData(data);
        setShowDetails(true);
      })();
    }
  }, [find]);

  const handleVerify = (e) => {
    e.preventDefault();
    const form = e.target;
    const certificateId = form.certificateId.value;
    navigate(`?find=${certificateId}`);
  };

  return (
    <div className="font-poppins">
      <div
        className="flex justify-center items-center min-h-screen bg-cover bg-center p-5"
        style={{ backgroundImage: `url(${cerbg})` }}
      >
        <LazyLoadWrapper />
        <div className="bg-white p-[35px_20px] md:p-[35px_30px] rounded-2xl shadow-[0_12px_30px_#00000014] w-full sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto text-center transition ease-in-out duration-300 hover:-translate-y-0.5">
          <h2 className="text-[22px] md:text-[26px] text-[#1273eb] mb-[25px]">
            {!showDetails
              ? "Verify Your Certificate"
              : `Certificate - ${certificateData.studentData.sid}`}
          </h2>

          <form
            onSubmit={handleVerify}
            className={`flex flex-col items-center gap-[15px] ${
              !showDetails ? "block" : "hidden"
            } `}
          >
            <input
              type="text"
              id="cerInput"
              name="certificateId"
              className="w-full p-[12px_16px] text-[12px] md:text-[16px] border-2 border-[#1273eb] rounded-lg outline-none transition duration-300 focus:shadow-[0_0_8px_#3e7ad3]"
              placeholder="Enter Certificate Number / Student ID"
            />
            <button
              type="submit"
              className="w-full bg-[#1273eb] text-white border-0 p-[12px_18px] text-[16px] rounded-lg cursor-pointer transition-colors duration-300 flex items-center justify-center gap-2 hover:bg-[#0b254cd1]"
            >
              Verify
            </button>
          </form>

          <div
            className={`bg-[#fff7f4] ${
              showDetails ? "block" : "hidden"
            } border-l-4 border-[var(--main-color)] p-5 rounded-lg mt-7 w-full animate-fadeIn`}
            id="cerDetails"
          >
            {showDetails && (
              <div>
                <div className="w-full flex justify-center mb-4">
                  <img
                    src={certificateData.studentData.image}
                    alt=""
                    className="w-28 sm:w-32 md:w-36 border-2 border-blue-700 "
                  />
                </div>
                <table className="w-full border-collapse mt-2 text-xs md:text-base">
                  <tbody>
                    <tr className="hover:bg-[#f5f5f5]">
                      <th className="px-4 py-3 text-left border-b border-[hsl(0,0%,87%)] bg-[#f2f2f2] font-bold">
                        Certificate No:
                      </th>
                      <td className="px-2 py-3 text-left border-b border-[#ddd]">
                        {certificateData.studentData.sid}
                      </td>
                    </tr>
                    <tr className="hover:bg-[#f5f5f5]">
                      <th className="px-4 py-3 text-left border-b border-[#ddd] bg-[#f2f2f2] font-bold">
                        Name:
                      </th>
                      <td className="px-2 py-3 text-left border-b border-[#ddd]">
                        {certificateData.studentData.name}
                      </td>
                    </tr>
                    <tr className="hover:bg-[#f5f5f5]">
                      <th className="px-4 py-3 text-left border-b border-[#ddd] bg-[#f2f2f2] font-bold">
                        Course:
                      </th>
                      <td className="px-2 py-3 text-left border-b border-[#ddd]">
                        {certificateData.courseData.title}
                      </td>
                    </tr>
                    <tr className="hover:bg-[#f5f5f5]">
                      <th className="px-4 py-3 text-left border-b border-[#ddd] bg-[#f2f2f2] font-bold">
                        Date of Issue:
                      </th>
                      <td className="px-2 py-3 text-left border-b border-[#ddd]">
                        {certificateData.courseData.issue}
                      </td>
                    </tr>
                    <tr className="hover:bg-[#f5f5f5]">
                      <th className="px-4 py-3 text-left border-b border-[#ddd] bg-[#f2f2f2] font-bold">
                        Status:
                      </th>
                      <td className="px-2 py-3 text-left border-b border-[#ddd]">
                        <img
                          src="icons8-verified.gif"
                          alt=""
                          className="checkmarkicon"
                        />{" "}
                        Verified
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button
                  onClick={() => {
                    navigate("/certificate");
                  }}
                  className="w-full sm:w-1/2 mx-auto mt-6 bg-[#1273eb] text-white border-0 p-[12px_18px] text-[16px] rounded-lg cursor-pointer transition-colors duration-300 flex items-center justify-center gap-2 hover:bg-[#0b254cd1]"
                >
                  Back
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateVerify;





// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import cerbg from "../../assets/cerbg.jpg";
// import LazyLoadWrapper from "@/components/shared/LazyLoadWrapper";
// import axios from "axios";
// const CertificateVerify = () => {
//   const [showDetails, setShowDetails] = useState(false);
//   const [certificateData, setCertificateData] = useState([]);

//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const find = searchParams.get("find");

//   // find == null then REQ: ❌
//   // find == val -> back REQ ✅

//   useEffect(() => {
//     async function fetchData(find) {
//       const result = await axios.get(
//         `${import.meta.env.VITE_API_URL}/api/certificate?find=${find}`
//       );
//       return result.data;
//     }

//     if (find) {
//       (async () => {
//         const data = await fetchData(find);
//         console.log(data); // ✅ Shows real data
//         setCertificateData(data);
//         setShowDetails(true);
//       })();
//     }
//   }, [find]);

//   console.log(certificateData);
//   //  lifelineitinstitute.com/certificate
//   // VERIFY -<<<<<<<
//   //  lifelineitinstitute.com/certificate?find=2025/ML/000001

//   const handleVerify = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const certificateId = form.certificateId.value;
//     navigate(`?find=${certificateId}`);
//   };
//   return (
//     <div className="font-poppins">
//       <div
//         className="flex justify-center items-center min-h-screen bg-cover bg-center p-5"
//         style={{ backgroundImage: `url(${cerbg})` }}
//       >
//         <LazyLoadWrapper></LazyLoadWrapper>
//         <div className="bg-white p-[35px_30px] rounded-2xl shadow-[0_12px_30px_#00000014]  w-6/12 mx-auto text-center transition ease-in-out duration-300 hover:-translate-y-0.5">
//           <h2 className="text-[26px] text-[#1273eb] mb-[25px]">
//             {!showDetails
//               ? "Verify Your Certificate"
//               : `Certificate - ${certificateData.studentData.sid}`}
//           </h2>

//           <form
//             onSubmit={handleVerify}
//             className={`flex flex-col items-center gap-[15px] ${
//               !showDetails ? "block" : "hidden"
//             } `}
//           >
//             <input
//               type="text"
//               id="cerInput"
//               name="certificateId"
//               className="w-full p-[12px_16px] text-[10px] lg:text-[16px] border-2 border-[#1273eb] rounded-lg outline-none transition duration-300 focus:shadow-[0_0_8px_#3e7ad3]"
//               placeholder="Enter Certificate Number / Student ID"
//             />
//             <button
//               type="submit"
//               className="w-full bg-[#1273eb] text-white border-0 p-[12px_18px] text-[16px] rounded-lg cursor-pointer transition-colors duration-300 flex items-center justify-center gap-2 hover:bg-[#0b254cd1]"
//               // onClick={cerVerify}
//             >
//               Verify
//             </button>
//           </form>

//           <div
//             className={`bg-[#fff7f4] ${
//               showDetails ? "block" : "hidden"
//             } border-l-4 border-[var(--main-color)]  p-5 rounded-lg mt-7 w-full animate-fadeIn"
//             id="cerDetails`}
//           >
//             {showDetails && (
//               <div>
//                 <div className="w-full flex justify-center mb-4">
//                   <img
//                     src={certificateData.studentData.image}
//                     alt=""
//                     className="w-36 border-2 border-blue-700"
//                   />
//                 </div>
//                 <table className="w-full border-collapse mt-2 ">
//                   <tr className="hover:bg-[#f5f5f5]">
//                     <th className="px-4 py-3 text-left border-b border-[hsl(0,0%,87%)]bg-[#f2f2f2] font-bold">
//                       Certificate No:
//                     </th>
//                     <td className="px-4 py-3 text-left border-b border-[#ddd]">
//                       {certificateData.studentData.sid}
//                     </td>
//                   </tr>
//                   <tr className="hover:bg-[#f5f5f5]">
//                     <th className="px-4 py-3 text-left border-b border-[#ddd] bg-[#f2f2f2] font-bold">
//                       Name:
//                     </th>
//                     <td className="px-4 py-3 text-left border-b border-[#ddd]">
//                       {certificateData.studentData.name}
//                     </td>
//                   </tr>
//                   <tr className="hover:bg-[#f5f5f5]">
//                     <th className="px-4 py-3 text-left border-b border-[#ddd] bg-[#f2f2f2] font-bold">
//                       Course:
//                     </th>
//                     <td className="px-4 py-3 text-left border-b border-[#ddd]">
//                       {certificateData.courseData.title}
//                     </td>
//                   </tr>
//                   <tr className="hover:bg-[#f5f5f5]">
//                     <th className="px-4 py-3 text-left border-b border-[#ddd] bg-[#f2f2f2] font-bold">
//                       Date of Issue: 
//                     </th>
//                     <td className="px-4 py-3 text-left border-b border-[#ddd]">
//                       {certificateData.courseData.issue}
//                     </td>
//                   </tr>
//                   <tr className="hover:bg-[#f5f5f5]">
//                     <th className="px-4 py-3 text-left border-b border-[#ddd] bg-[#f2f2f2] font-bold">
//                       Status:
//                     </th>
//                     <td
//                       //   style="color: green;"
//                       className="px-4 py-3 text-left border-b border-[#ddd]"
//                     >
//                       <img
//                         src="icons8-verified.gif"
//                         alt=""
//                         class="checkmarkicon"
//                       />{" "}
//                       Verified
//                     </td>
//                   </tr>
//                 </table>
//                 <button
//                 onClick={()=>{navigate('/certificate')}}
//                   className="w-1/2 mx-auto mt-6 bg-[#1273eb] text-white border-0 p-[12px_18px] text-[16px] rounded-lg cursor-pointer transition-colors duration-300 flex items-center justify-center gap-2 hover:bg-[#0b254cd1]"
//                   // onClick={cerVerify}
//                 >
//                   Back
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CertificateVerify;

