import React, { useEffect, useState } from "react";
import logo from "../../assets/Website Logo.png";
import { HiAdjustments } from "react-icons/hi";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Switch } from "@/components/ui/switch";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [query, setQuery] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyLogin = async () => {
      try {
        const result = await axios.get(
          import.meta.env.VITE_API_URL + "/api/auth/check",
          { withCredentials: true }
        );
        if (result.status === 200 && result.data.status === true) {
          setIsLoggedIn(true);
          setUser(result.data.user);
        }
      } catch (error) {
        setIsLoggedIn(false);
        console.error("Login check error:", error.message);
      }
    };
    verifyLogin();
  }, []);

  const toggleNavbar = () => setIsOpen(!isOpen);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate("/courses", { state: { search: query } });
    setMobileSearchOpen(false); // close floating search if on mobile
  };

  const handleClick = () => {
    // navigate("/our-courses");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // delay to ensure page loads
  };

  return (
    <div className="p-2 flex items-center justify-around sticky top-0 z-50 bg-[#0c2851] shadow">
      {/* Logo */}
      <div className="lg:w-3/12">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-full md:w-3/4 " />
        </Link>
      </div>

      {/* Main Controls */}
      <div className="flex lg:flex-col items-center lg:gap-3">
        <div className="flex items-center justify-around gap-4">
          {/* Adjustments icon (desktop only) */}
          <div className="text-primary bg-secondary rounded-sm p-2 text-lg hidden lg:block">
            <HiAdjustments />
          </div>

          {/* Mobile Search Icon + Floating Search Bar */}
          {/* Mobile Search Trigger */}
          <div className="lg:hidden">
            <IconButton
              sx={{ p: "10px", color: "white" }}
              aria-label="search"
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            >
              <SearchIcon />
            </IconButton>
          </div>

          {/* Floating Full-Width Search Bar */}
          {mobileSearchOpen && (
            <div className="fixed transition-all duration-200 top-20 left-0 right-0 z-50 px-4 w-[80%] mx-auto">
              <Paper
                component="form"
                onSubmit={handleSearch}
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search here..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <IconButton type="submit" sx={{ p: "10px" }}>
                  <SearchIcon />
                </IconButton>
              </Paper>
            </div>
          )}

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <Paper
              component="form"
              onSubmit={handleSearch}
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 300,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search here..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <IconButton type="submit" sx={{ p: "8px" }}>
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>

          {/* Login/Dashboard button */}
          <Link
            to={
              isLoggedIn
                ? "https://dashboard.lifelineitinstitute.com"
                : "/login"
            }
          >
            <button className="text-white text-sm lg:text-base text-center lg:px-[22px] px-[12px] py-[6px] lg:py-[11px] rounded-[10px] shadow-[0_0_10px_#000] bg-gradient-to-r from-[#f09619ee] via-[#d3c440] to-[#f9a917] bg-[length:200%_auto] transition-all duration-500 hover:bg-[position:right_center]  font-bold flex">
              {isLoggedIn ? "🎓 Dashboard" : "Login"}
            </button>
          </Link>

          {/* Success Stories (desktop only) */}
          <Link to="/success-story" className="hidden lg:flex">
            <button className="m-2 px-[26px] py-[12px] text-center uppercase transition-all duration-500 bg-[linear-gradient(to_right,_#249ffd_2%,_#3a7bd5_58%,_#00d2ff_100%)] bg-[length:200%_auto] text-white shadow-[0_0_15px_#000] rounded-[10px]  hover:bg-[position:right_center] hover:text-white flex items-center gap-3 font-bold">
              Success Stories <FaArrowRight />
            </button>
          </Link>

          {/* Language switch (desktop only) */}
          <div className="lg:flex items-center hidden rounded-full p-1 w-24 select-none">
            <span
              className={`text-xs font-semibold mr-1 z-10 ${
                !enabled ? "text-secondary" : "text-secondary"
              }`}
            >
              {!enabled ? "বাং" : "EN"}
            </span>
            <Switch checked={enabled} onCheckedChange={setEnabled} />
          </div>

          {/* Mobile Nav Toggle */}
          <div className="text-white text-lg lg:hidden" onClick={toggleNavbar}>
            <AiOutlineMenuFold />
          </div>
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsOpen(false)}
            />
          )}

          {/* Mobile Drawer */}
          <div
            className={`fixed z-50 top-0 right-0 h-screen overflow-auto lg:hidden w-11/12 bg-[#0B254C] border-l border-neutral-300 shadow-lg transition-transform duration-500 ease-in-out transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Drawer Header */}
            <div className="w-full flex items-center justify-between px-4">
              <Link
                to="/"
                className="text-lg font-semibold text-sky-700 flex items-center gap-x-2"
              >
                <img src={logo} alt="" className="w-1/2 md:w-1/3" />
              </Link>
              <div className="lg:hidden flex justify-end py-6">
                <button
                  onClick={toggleNavbar}
                  className="text-gold focus:outline-none"
                >
                  <IoMdClose size={28} />
                </button>
              </div>
            </div>

            <div className="border-b border-neutral-300"></div>

            <div className="flex-1 flex flex-col items-center justify-between gap-6 p-6">
              <ul
                onClick={() => setIsOpen(false)}
                className="flex flex-col items-center gap-6 text-base text-white font-normal font-roboto"
              >
                <Link
                  onClick={handleClick}
                  to="/"
                  className="bg-gray-200 rounded px-3 py-1 text-black"
                >
                  Home
                </Link>
                <Link
                  onClick={handleClick}
                  to="/courses"
                  className="bg-gray-200 rounded px-3 py-1 text-black"
                >
                  Courses
                </Link>
                <Link
                  onClick={handleClick}
                  to="/certificate"
                  className="bg-gray-200 rounded px-3 py-1 text-black"
                >
                  Certificate Verify
                </Link>
                <Link
                  onClick={handleClick}
                  to="/success-story"
                  className="bg-gray-200 rounded px-3 py-1 text-black"
                >
                  Success Story
                </Link>
                <Link
                  onClick={handleClick}
                  to="/student-review"
                  className="bg-gray-200 rounded px-3 py-1 text-black"
                >
                  Student Reviews
                </Link>
                <Link
                  onClick={handleClick}
                  to="/about"
                  className="bg-gray-200 rounded px-3 py-1 text-black"
                >
                  About Us
                </Link>
                <Link
                  onClick={handleClick}
                  to="/contact"
                  className="bg-gray-200 rounded px-3 py-1 text-black"
                >
                  Contact
                </Link>

                {/* more options  */}
                <Link
                  to="/"
                  className="bg-gray-200 rounded px-3 py-1 text-black"
                >
                   Free Software
                </Link>

                <Link
                  to="/"
                 className="bg-gray-200 rounded px-3 py-1 text-black"
                >
                   Free Resources
                </Link>

                <Link
                  to="/"
                
                  className="bg-gray-200 rounded px-3 py-1 text-black"
                >
                   Join as a Mentor
                </Link>
                <Link
                  to="/"
                 
                  className="bg-gray-200 rounded px-3 py-1 text-black"
                >
                   Our Team
                </Link>
                <Link
                  to="/"
                  // onClick={handleLogout}
                 className="bg-gray-200 rounded px-3 py-1 text-black"
                >
                   Our Agency
                </Link>

                <HashLink
                  to="/about#faq"
                 className="bg-gray-200 rounded px-3 py-1 text-black"
                >
                   FAQ
                </HashLink>
              </ul>

              {/* <div
                onClick={() => setIsOpen(false)}
                className="flex flex-col items-center gap-4"
              >
                <Link to="/success-story">
                  <button className="m-2 px-[24px] py-[12px] font-bold text-center flex items-center transition-all duration-500 bg-[linear-gradient(to_right,_#fc00ff_0%,_#00dbde_51%,_#fc00ff_100%)] bg-[length:200%_auto] text-white rounded-[10px] shadow-[0_0_20px_#eee] gap-3 hover:bg-[position:right_center] hover:text-white">
                    Success Stories <FaArrowRight />
                  </button>
                </Link>
              </div> */}
            </div>
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;

// import React from "react";
// import logo from "../../assets/Website Logo.png";
// import { HiAdjustments } from "react-icons/hi";
// //
// import Paper from "@mui/material/Paper";
// import InputBase from "@mui/material/InputBase";
// //
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// //
// import { Switch } from "@/components/ui/switch";
// import Navbar from "./Navbar";
// import { Link, useNavigate } from "react-router-dom";
// import { FaArrowRight, FaBars } from "react-icons/fa";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { AiOutlineMenuFold } from "react-icons/ai";
// import { IoMdClose } from "react-icons/io";
// //
// const Header = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // default: not logged in
//   const [user, setUser] = useState({}); // Making this useState to use later.
//   //
//   const [isOpen, setIsOpen] = useState(false);
//   //
//   const [isScrolled, setIsScrolled] = useState(false);
//   //
//   useEffect(() => {
//     const verifyLogin = async () => {
//       try {
//         const result = await axios.get(
//           import.meta.env.VITE_API_URL + "/api/auth/check",
//           {
//             withCredentials: true,
//           }
//         );
//         if (result.status == 200 && result.data.status == true) {
//           setIsLoggedIn(true);
//           setUser(result.data.user);
//         }
//       } catch (error) {
//         setIsLoggedIn(false);
//         console.error("Error setting up request:", error.message);
//       }
//     };
//     //
//     verifyLogin();
//   }, []);
//   //
//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   // Function to handle scroll event
//   const handleScroll = () => {
//     if (window.scrollY > 50) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//   };

//   // Adding event listener on mount and removing on unmount
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   //
//   const [enabled, setEnabled] = React.useState(false);
//   //
//   // search bar functionality
//   //
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();
//   const handleSearch = async (e) => {
//     e.preventDefault();
//     try {
//       navigate("/courses", { state: { search: query } });
//     } catch (err) {
//       console.error("Search failed", err);
//     }
//   };
//   //
//   const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
//   console.log(mobileSearchOpen)
//   //
//   return (
//     <div className="p-3 flex items-center justify-around">
//       {/* logo */}
//       <div className=" lg:w-3/12">
//         <Link to="/">
//           <img src={logo} alt="" className="w-full md:w-1/2 lg:w-full" />
//         </Link>
//       </div>
//       <div className="flex lg:flex-col items-center lg:gap-5">
//         <div className="flex items-center justify-around gap-4">
//           <div className="text-primary bg-secondary rounded-sm p-2 text-lg hidden lg:block">
//             <HiAdjustments />
//           </div>

//           {/* search bar  */}

//           {/* Search icon for mobile */}
//           <div className="lg:hidden relative flex items-center gap-2">
//             <IconButton
//               sx={{ p: "10px", color: "white" }}
//               aria-label="search"
//               onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
//             >
//               <SearchIcon />
//             </IconButton>

//              {/* Floating Mobile Search */}
//           {mobileSearchOpen && (
//             <div className="absolute top-full left-0 w-full z-50 mt-2 px-4">
//               <Paper
//                 component="form"
//                 sx={{
//                   p: "2px 4px",
//                   display: "flex",
//                   alignItems: "center",
//                   width: "100%",
//                 }}
//               >
//                 <IconButton sx={{ p: "10px" }} aria-label="menu">
//                   <MenuIcon />
//                 </IconButton>
//                 <InputBase
//                   sx={{ ml: 1, flex: 1 }}
//                   placeholder="Search here..."
//                   inputProps={{ "aria-label": "Search here..." }}
//                 />
//                 <IconButton
//                   type="button"
//                   sx={{ p: "10px" }}
//                   aria-label="search"
//                 >
//                   <SearchIcon />
//                 </IconButton>
//               </Paper>
//             </div>
//           )}
//           </div>

//           {/* Search bar */}
//           <div className="hidden lg:flex items-center justify-center flex-1">
//             <Paper
//               component="form"
//               onSubmit={handleSearch}
//               sx={{
//                 p: "2px 4px",
//                 display: "flex",
//                 alignItems: "center",
//                 width: 300,
//               }}
//             >
//               {/* <IconButton sx={{ p: "10px" }} aria-label="menu">
//                 <MenuIcon />
//               </IconButton> */}
//               <InputBase
//                 sx={{ ml: 1, flex: 1 }}
//                 placeholder="Search here..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 inputProps={{ "aria-label": "Search here..." }}
//               />
//               <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
//                 <SearchIcon />
//               </IconButton>
//             </Paper>
//           </div>

//           <Link to={isLoggedIn ? "/future-dashboard-link-goes-here" : "/login"}>
//             <button className="text-white text-center lg:px-[25px] px-[20px] py-[8px] lg:py-[10px] rounded-[10px] shadow-[0_0_10px_#000] bg-gradient-to-r from-[#f09619ee] via-[#e4d653] to-[#f9a917] bg-[length:200%_auto] transition-all duration-500 hover:bg-[position:right_center] block font-bold">
//               {isLoggedIn ? "🎓 Dashboard" : "Login"}
//             </button>
//           </Link>

//           <Link to="/success-story" className="hidden lg:flex">
//             <button className="m-2 px-[45px] py-[15px] font-bold text-center flex items-center transition-all duration-500 bg-[linear-gradient(to_right,_#fc00ff_0%,_#00dbde_51%,_#fc00ff_100%)] bg-[length:200%_auto] text-white rounded-[10px] shadow-[0_0_10px_#000] gap-3 hover:bg-[position:right_center] hover:text-white">
//               Success Stories <FaArrowRight />
//             </button>
//           </Link>

//           {/* language select  */}
//           <div className="lg:flex items-center hidden  rounded-full p-1 w-24 select-none">
//             {/* EN text, active hole white, inactive hole gray */}
//             <span
//               className={`text-xs font-semibold mr-1  z-10 ${
//                 !enabled ? "text-secondary " : "text-secondary"
//               }`}
//             >
//               {!enabled ? "বাং" : "EN"}
//             </span>
//             <Switch checked={enabled} onCheckedChange={setEnabled} />
//           </div>

//           <div className="text-white text-lg lg:hidden" onClick={toggleNavbar}>
//             <AiOutlineMenuFold />
//           </div>

//           <div
//             className={`fixed  z-10 top-0 right-0 h-screen overflow-auto lg:hidden  w-11/12  bg-blue-50 border-l  border-neutral-300 lg:bg-transparent shadow-lg lg:shadow-none transition-transform duration-500 ease-in-out transform flex-1 ${
//               isOpen ? "translate-x-0" : "translate-x-full"
//             } lg:translate-x-0 z-60`}
//           >
//             {/* Logo and close icon Inside Toggle Menu */}
//             <div className="w-full  flex items-center justify-between px-4">
//               {/* Logo */}
//               <Link
//                 to="/"
//                 className="text-lg font-semibold text-sky-700 flex items-center gap-x-2"
//               >
//                 <img src={logo} alt="" className="w-1/2 md:w-1/3" />
//               </Link>
//               {/* Close Icon */}
//               <div className="lg:hidden flex justify-end py-6">
//                 <button
//                   onClick={toggleNavbar}
//                   className="text-gold focus:outline-none"
//                 >
//                   <IoMdClose size={28} />
//                 </button>
//               </div>
//             </div>
//             {/* Divider */}
//             <div className="border-b border-neutral-300"></div>
//             <div className="flex-1 flex flex-col  items-center justify-between gap-6 p-6 md:p-0">
//               {/* Navbar items */}
//               <ul
//                 onClick={() => setIsOpen(false)}
//                 className="flex flex-col items-center gap-6 text-base text-neutral-700 font-normal font-roboto"
//               >
//                 <Link
//                   to="/"
//                   // className=" text-xl font-roboto"
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   to="/our-courses"
//                   // className="  text-xl font-roboto"
//                 >
//                   Courses
//                 </Link>
//                 <Link to="/certificate">Freelancer Story</Link>
//                 <Link to="/success-story">Success Story</Link>
//                 <Link to="/student-review">Student Reviews</Link>
//                 <Link
//                   to="/about"
//                   // className=" text-xl font-roboto"
//                 >
//                   About Us
//                 </Link>
//                 <Link
//                   to="/contact"
//                   // className=" text-xl font-roboto"
//                 >
//                   Contact
//                 </Link>
//               </ul>

//               {/* Buttons */}
//               <div
//                 onClick={() => setIsOpen(false)}
//                 className="flex flex-col items-center gap-4"
//               >
//                 <Link to="/success-story" className="">
//                   <button className="m-2 px-[24px] py-[12px] font-bold text-center flex items-center transition-all duration-500 bg-[linear-gradient(to_right,_#fc00ff_0%,_#00dbde_51%,_#fc00ff_100%)] bg-[length:200%_auto] text-white rounded-[10px] shadow-[0_0_20px_#eee] gap-3 hover:bg-[position:right_center] hover:text-white">
//                     Success Stories <FaArrowRight />
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="hidden lg:flex">
//           <Navbar></Navbar>
//         </div>
//       </div>
//     </div>
//   );
// };
// //
// export default Header;

// // demo
// import React, { useState } from "react";
// import logo from "../../assets/Website Logo.png";
// import { HiAdjustments } from "react-icons/hi";
// import Paper from "@mui/material/Paper";
// import InputBase from "@mui/material/InputBase";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import { Switch } from "@/components/ui/switch";
// import Navbar from "./Navbar";
// import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";

// const Header = () => {
//   const [enabled, setEnabled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

//   return (
//     <div className="px-4 py-3 shadow-xl bg-white w-full relative">
//       {/* Top row */}
//       <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
//         <div className="flex items-center justify-between w-full lg:w-auto">
//           {/* Mobile: hamburger + logo */}
//           <div className="flex items-center gap-4">
//             <button
//               className="lg:hidden text-2xl text-gray-700"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               <FaBars />
//             </button>
//             <div className="max-w-[160px]">
//               <img src={logo} alt="Logo" className="w-full" />
//             </div>
//           </div>

//           {/* Search icon for mobile */}
//           <div className="lg:hidden flex items-center gap-2">
//             <IconButton
//               sx={{ p: "10px" }}
//               aria-label="search"
//               onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
//             >
//               <SearchIcon />
//             </IconButton>
//           </div>

//   {/* Login + Language Toggle */}
//            <Link to="/login">
//             <button className="text-white text-center uppercase px-[25px] py-[10px] rounded-[10px] shadow-[0_0_20px_#eee] bg-gradient-to-r from-[#F09819] via-[#EDDE5D] to-[#F09819] bg-[length:200%_auto] transition-all duration-500 hover:bg-[position:right_center]">
//               Login
//             </button>
//           </Link>

//           <div className="hidden lg:flex items-center rounded-full p-1 w-24 select-none">
//             <span className={`text-xs font-semibold mr-1 z-10 text-primary`}>
//               {!enabled ? "EN" : "BN"}
//             </span>
//             <Switch checked={enabled} onCheckedChange={setEnabled} />
//           </div>
//         </div>

//         {/* Search bar */}
//         <div className="hidden lg:flex items-center justify-center flex-1">
//           <Paper
//             component="form"
//             sx={{
//               p: "2px 4px",
//               display: "flex",
//               alignItems: "center",
//               width: 300,
//             }}
//           >
//             <IconButton sx={{ p: "10px" }} aria-label="menu">
//               <MenuIcon />
//             </IconButton>
//             <InputBase
//               sx={{ ml: 1, flex: 1 }}
//               placeholder="Search here..."
//               inputProps={{ "aria-label": "Search here..." }}
//             />
//             <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
//               <SearchIcon />
//             </IconButton>
//           </Paper>
//         </div>

//       </div>

//       {/* Floating Mobile Search */}
//       {mobileSearchOpen && (
//         <div className="absolute top-full left-0 w-full z-50 mt-2 px-4">
//           <Paper
//             component="form"
//             sx={{
//               p: "2px 4px",
//               display: "flex",
//               alignItems: "center",
//               width: "100%",
//             }}
//           >
//             <IconButton sx={{ p: "10px" }} aria-label="menu">
//               <MenuIcon />
//             </IconButton>
//             <InputBase
//               sx={{ ml: 1, flex: 1 }}
//               placeholder="Search here..."
//               inputProps={{ "aria-label": "Search here..." }}
//             />
//             <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
//               <SearchIcon />
//             </IconButton>
//           </Paper>
//         </div>
//       )}

//       {/* Desktop Navbar */}
//       <div className="mt-4 hidden lg:block">
//         <Navbar />
//       </div>

//       {/* Mobile Nav Dropdown */}
//       {mobileMenuOpen && (
//         <>
//           {/* Backdrop */}
//           <div
//             onClick={() => setMobileMenuOpen(false)}
//             className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
//               mobileMenuOpen
//                 ? "opacity-100 pointer-events-auto"
//                 : "opacity-0 pointer-events-none"
//             }`}
//           ></div>

//           {/* Sliding panel */}
//           <div
//             className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
//     ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
//           >
//             <div className="p-4 flex justify-between items-center border-b">
//               <h2 className="text-lg font-bold">Menu</h2>
//               <button
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="text-2xl font-bold"
//                 aria-label="Close menu"
//               >
//                 &times;
//               </button>
//             </div>

//             <nav className="px-4 mt-4">
//               <Navbar vertical />
//             </nav>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Header;

//demo 2

// import React, { useEffect, useState } from "react"
// import logo from "../../assets/Website Logo.png"
// import { HiAdjustments } from "react-icons/hi"
// import Paper from "@mui/material/Paper"
// import InputBase from "@mui/material/InputBase"
// import IconButton from "@mui/material/IconButton"
// import MenuIcon from "@mui/icons-material/Menu"
// import SearchIcon from "@mui/icons-material/Search"
// import { Switch } from "@/components/ui/switch"
// import Navbar from "./Navbar"
// import { Link, useNavigate } from "react-router-dom"
// import { FaArrowRight } from "react-icons/fa"
// import axios from "axios"
// import { AiOutlineMenuFold } from "react-icons/ai"
// import { IoMdClose } from "react-icons/io"

// const Header = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const [user, setUser] = useState({})
//   const [isOpen, setIsOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [enabled, setEnabled] = useState(false)
//   const [query, setQuery] = useState("")
//   const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
//   const navigate = useNavigate()

//   useEffect(() => {
//     const verifyLogin = async () => {
//       try {
//         const result = await axios.get(
//           import.meta.env.VITE_API_URL + "/api/auth/check",
//           { withCredentials: true }
//         )

//         console.log(result)
//         if (result.status === 200 && result.data.status === true) {
//           setIsLoggedIn(true)
//           setUser(result.data.user)
//         }
//       } catch (error) {
//         setIsLoggedIn(false)
//         console.error("Login check error:", error.message)
//       }
//     }
//     verifyLogin()
//   }, [])

//   const toggleNavbar = () => setIsOpen(!isOpen)

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50)
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const handleSearch = (e) => {
//     e.preventDefault()
//     if (!query.trim()) return
//     navigate("/courses", { state: { search: query } })
//     setMobileSearchOpen(false) // close floating search if on mobile
//   }

//   return (
//     <div className="p-3 flex items-center justify-around">
//       {/* Logo */}
//       <div className="lg:w-3/12">
//         <Link to="/">
//           <img src={logo} alt="Logo" className="w-full md:w-1/2 lg:w-full" />
//         </Link>
//       </div>

//       {/* Main Controls */}
//       <div className="flex lg:flex-col items-center lg:gap-5">
//         <div className="flex items-center justify-around gap-4">
//           {/* Adjustments icon (desktop only) */}
//           <div className="text-primary bg-secondary rounded-sm p-2 text-lg hidden lg:block">
//             <HiAdjustments />
//           </div>

//           {/* Mobile Search Icon + Floating Search Bar */}
//           {/* Mobile Search Trigger */}
//           <div className="lg:hidden">
//             <IconButton
//               sx={{ p: "10px", color: "white" }}
//               aria-label="search"
//               onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
//             >
//               <SearchIcon />
//             </IconButton>
//           </div>

//           {/* Floating Full-Width Search Bar */}
//           {mobileSearchOpen && (
//             <div className="fixed transition-all duration-200 top-28 left-0 right-0 z-50 px-4 w-[80%] mx-auto">
//               <Paper
//                 component="form"
//                 onSubmit={handleSearch}
//                 sx={{
//                   p: "2px 4px",
//                   display: "flex",
//                   alignItems: "center",
//                   width: "100%",
//                 }}
//               >
//                 <InputBase
//                   sx={{ ml: 1, flex: 1 }}
//                   placeholder="Search here..."
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                 />
//                 <IconButton type="submit" sx={{ p: "10px" }}>
//                   <SearchIcon />
//                 </IconButton>
//               </Paper>
//             </div>
//           )}

//           {/* Desktop Search Bar */}
//           <div className="hidden lg:flex items-center justify-center flex-1">
//             <Paper
//               component="form"
//               onSubmit={handleSearch}
//               sx={{
//                 p: "2px 4px",
//                 display: "flex",
//                 alignItems: "center",
//                 width: 300,
//               }}
//             >
//               <InputBase
//                 sx={{ ml: 1, flex: 1 }}
//                 placeholder="Search here..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//               />
//               <IconButton type="submit" sx={{ p: "10px" }}>
//                 <SearchIcon />
//               </IconButton>
//             </Paper>
//           </div>

//           {/* Login/Dashboard button */}
//           <Link to={isLoggedIn ? "/future-dashboard-link-goes-here" : "/login"}>
//             <button className="text-white text-center lg:px-[25px] px-[10px] py-[6px] lg:py-[12px] rounded-[10px] shadow-[0_0_10px_#000] bg-gradient-to-r from-[#f09619ee] via-[#e4d653] to-[#f9a917] bg-[length:200%_auto] transition-all duration-500 hover:bg-[position:right_center]  font-bold flex text-sm">
//               {isLoggedIn ? "🎓 Dashboard" : "Login"}
//             </button>
//           </Link>

//           {/* Success Stories (desktop only) */}
//           <Link to="/success-story" className="hidden lg:flex">
//             <button className="m-2 px-[30px] py-[12px] text-center uppercase transition-all duration-500 bg-[linear-gradient(to_right,_#249ffd_2%,_#3a7bd5_58%,_#00d2ff_100%)] bg-[length:200%_auto] text-white shadow-[0_0_15px_#000] rounded-[10px]  hover:bg-[position:right_center] hover:text-white flex items-center gap-3 font-bold">
//               Success Stories <FaArrowRight />
//             </button>
//           </Link>

//           {/* Language switch (desktop only) */}
//           <div className="lg:flex items-center hidden rounded-full p-1 w-24 select-none">
//             <span
//               className={`text-xs font-semibold mr-1 z-10 ${
//                 !enabled ? "text-secondary" : "text-secondary"
//               }`}
//             >
//               {!enabled ? "বাং" : "EN"}
//             </span>
//             <Switch checked={enabled} onCheckedChange={setEnabled} />
//           </div>

//           {/* Mobile Nav Toggle */}
//           <div className="text-white text-lg lg:hidden" onClick={toggleNavbar}>
//             <AiOutlineMenuFold />
//           </div>

//           {/* Mobile Drawer */}
//           <div
//             className={`fixed z-10 top-0 right-0 h-screen overflow-auto lg:hidden w-11/12 bg-blue-50 border-l border-neutral-300 shadow-lg transition-transform duration-500 ease-in-out transform ${
//               isOpen ? "translate-x-0" : "translate-x-full"
//             }`}
//           >
//             {/* Drawer Header */}
//             <div className="w-full flex items-center justify-between px-4">
//               <Link
//                 to="/"
//                 className="text-lg font-semibold text-sky-700 flex items-center gap-x-2"
//               >
//                 <img src={logo} alt="" className="w-1/2 md:w-1/3" />
//               </Link>
//               <div className="lg:hidden flex justify-end py-6">
//                 <button
//                   onClick={toggleNavbar}
//                   className="text-gold focus:outline-none"
//                 >
//                   <IoMdClose size={28} />
//                 </button>
//               </div>
//             </div>

//             <div className="border-b border-neutral-300"></div>

//             <div className="flex-1 flex flex-col items-center justify-between gap-6 p-6">
//               <ul
//                 onClick={() => setIsOpen(false)}
//                 className="flex flex-col items-center gap-6 text-base text-neutral-700 font-normal font-roboto"
//               >
//                 <Link to="/">Home</Link>
//                 <Link to="/courses">Courses</Link>
//                 <Link to="/certificate">Certificate Verify</Link>
//                 <Link to="/success-story">Success Story</Link>
//                 <Link to="/student-review">Student Reviews</Link>
//                 <Link to="/about">About Us</Link>
//                 <Link to="/contact">Contact</Link>
//               </ul>

//               {/* <div
//                 onClick={() => setIsOpen(false)}
//                 className="flex flex-col items-center gap-4"
//               >
//                 <Link to="/success-story">
//                   <button className="m-2 px-[24px] py-[12px] font-bold text-center flex items-center transition-all duration-500 bg-[linear-gradient(to_right,_#fc00ff_0%,_#00dbde_51%,_#fc00ff_100%)] bg-[length:200%_auto] text-white rounded-[10px] shadow-[0_0_20px_#eee] gap-3 hover:bg-[position:right_center] hover:text-white">
//                     Success Stories <FaArrowRight />
//                   </button>
//                 </Link>
//               </div> */}
//             </div>
//           </div>
//         </div>

//         {/* Desktop Navbar */}
//         <div className="hidden lg:flex">
//           <Navbar />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Header
