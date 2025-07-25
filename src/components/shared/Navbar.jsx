import React, { useEffect, useState } from "react";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  IconButton,
  ListItem,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { FaUserGraduate } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { FaArrowRightFromBracket, FaQ } from "react-icons/fa6";
import { GrCloudSoftware, GrResources } from "react-icons/gr";
import { SiCodementor } from "react-icons/si";
import { AiOutlineTeam } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [isOpen, setIsOpen] = useState(false);
  //  const toggleNavbar = () => setIsOpen(!isOpen)

   const handleClick = () => {
    // navigate("/our-courses");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // delay to ensure page loads
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="">
      <NavigationMenu>
        <NavigationMenuList className="gap-2">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
              onClick={handleClick}
            >
              <Link
                to="/"
                className="bg-transparent text-navmenu text-xl font-roboto"
              >
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
              onClick={handleClick}
            >
              <Link
                to="/courses"
                className="bg-transparent text-navmenu text-xl font-roboto"
              >
                Courses
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-navmenu text-xl font-roboto">
              Students
            </NavigationMenuTrigger>
            <NavigationMenuContent side="bottom" align="start" sideOffset={8}>
              <ul className="grid gap-2 md:w-[100px] lg:w-[200px] ">
                <li className="flex flex-col items-start p-4 gap-4">
                  <NavigationMenuLink asChild onClick={handleClick}>
                    <Link to="/certificate">Certificate Verify</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild onClick={handleClick}>
                    <Link to="/success-story">Success Story</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild onClick={handleClick}>
                    <Link to="/student-review">Student Reviews</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
              onClick={handleClick}
            >
              <Link
                to="/about"
                className="bg-transparent text-navmenu text-xl font-roboto"
              >
                About Us
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
              onClick={handleClick}
            >
              <Link
                to="/contact"
                className="bg-transparent text-navmenu text-xl font-roboto"
              >
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Box
              sx={{
                flexGrow: 0,
              }}
            >
              <Tooltip title="Open Menu">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                  // className="border-2 border-blue-700"
                >
                  {/* <Avatar alt="" src={''} /> */}
                  <Link
                    to="#"
                    className="bg-transparent text-navmenu text-xl font-roboto "
                  >
                    More
                  </Link>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "38px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  onClick={handleCloseUserMenu}
                  sx={{
                    "&:hover": {
                      backgroundColor: "transparent", // removes hover background
                    },
                    padding: 1.5,
                    // optional: remove default padding if needed
                  }}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    <Link
                      to="/"
                      className="flex items-center gap-2 hover:bg-gray-100 transition-all duration-300 p-2 rounded-md pb-2"
                    >
                      <GrCloudSoftware /> Free Software
                    </Link>

                    <Link
                      to="/"
                      className="flex items-center gap-2 hover:bg-gray-100 transition-all duration-300  p-2 rounded-md "
                    >
                      <GrResources /> Free Resources
                    </Link>

                    <Link
                      to="/"
                      // onClick={handleLogout}
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 transition-all duration-300 rounded-md"
                    >
                      <SiCodementor /> Join as a Mentor
                    </Link>
                    <Link
                      to="/"
                      // onClick={handleLogout}
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 transition-all duration-300 rounded-md"
                    >
                      <AiOutlineTeam /> Our Team
                    </Link>
                    <Link
                      to="/"
                      // onClick={handleLogout}
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 transition-all duration-300 rounded-md"
                    >
                      <FaArrowRightFromBracket /> Our Agency
                    </Link>

                    <HashLink
                      to="/about#faq"
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 transition-all duration-300 rounded-md"
                    >
                      <FaQ /> FAQ
                    </HashLink>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import {
//   NavigationMenu,
//   NavigationMenuList,
//   NavigationMenuItem,
//   NavigationMenuTrigger,
//   NavigationMenuContent,
//   NavigationMenuLink,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";

// export default function Navbar() {
//   const [isMobileOpen, setIsMobileOpen] = useState(false);

//   return (
//     <nav >
//       <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-10">

//         {/* Hamburger for small devices */}
//         <div className="md:hidden">
//           {isMobileOpen ? (
//             <X size={24} onClick={() => setIsMobileOpen(false)} />
//           ) : (
//             <Menu size={24} onClick={() => setIsMobileOpen(true)} />
//           )}
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:block">
//           <NavigationMenu>
//             <NavigationMenuList className="gap-6">
//               <NavigationMenuItem>
//                 <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//                   <Link to="/" className="bg-transparent text-navmenu">Home</Link>
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//                   <Link to="/our-courses" className="bg-transparent text-navmenu">Courses</Link>
//                 </NavigationMenuLink>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <NavigationMenuTrigger  className="bg-transparent text-navmenu">Students</NavigationMenuTrigger>
//                 <NavigationMenuContent side="bottom" align="start" sideOffset={8}>
//                   <ul className="grid gap-2 md:w-[100px] lg:w-[200px]">
//                     <li className="flex flex-col items-start p-4 gap-4">
//                       <NavigationMenuLink asChild>
//                         <Link to="/certificate" >Freelancer Story</Link>
//                       </NavigationMenuLink>
//                       <NavigationMenuLink asChild>
//                         <Link to="/success-story" >Success Story</Link>
//                       </NavigationMenuLink>
//                       <NavigationMenuLink asChild>
//                         <Link to="/student-review" >Student Reviews</Link>
//                       </NavigationMenuLink>
//                     </li>
//                   </ul>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//                   <Link to="/about" className="bg-transparent text-navmenu">About Us</Link>
//                 </NavigationMenuLink>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//                   <Link to="/contact" className="bg-transparent text-navmenu">Contact</Link>
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileOpen && (
//         <div className="md:hidden bg-white px-4 py-6 shadow-inner space-y-4">
//           <Link to="/" onClick={() => setIsMobileOpen(false)} className="block font-medium">
//             Home
//           </Link>
//           <Link to="/our-courses" onClick={() => setIsMobileOpen(false)} className="block font-medium">
//             Courses
//           </Link>

//           {/* Students Section with Submenu */}
//           <div>
//             <p className="font-medium mb-2">Students</p>
//             <div className="pl-4 space-y-2 text-sm">
//               <Link to="/certificate" onClick={() => setIsMobileOpen(false)} className="block">
//                 Freelancer Story
//               </Link>
//               <Link to="/success-story" onClick={() => setIsMobileOpen(false)} className="block">
//                 Success Story
//               </Link>
//               <Link to="/student-review" onClick={() => setIsMobileOpen(false)} className="block">
//                 Student Reviews
//               </Link>
//             </div>
//           </div>

//           <Link to="/about" onClick={() => setIsMobileOpen(false)} className="block font-medium">
//             About Us
//           </Link>
//           <Link to="/contact" onClick={() => setIsMobileOpen(false)} className="block font-medium">
//             Contact
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }
