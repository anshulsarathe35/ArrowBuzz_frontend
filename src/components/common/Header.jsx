// import { useState, useEffect, useRef } from "react";
// import { useLocation } from "react-router-dom";

// // design
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { IoSearchOutline } from "react-icons/io5";
// import { Container, CustomNavLink, CustomNavLinkList, ProfileCard } from "../../router";
// import { User1 } from "../hero/Hero";
// import { menulists } from "../../utils/data";

// export const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();

//   const menuRef = useRef(null);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenuOutside = (event) => {
//     if (menuRef.current && !menuRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };
//   const handleScroll = () => {
//     setIsScrolled(window.scrollY > 0);
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", closeMenuOutside);
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       document.removeEventListener("mousedown", closeMenuOutside);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Check if it's the home page
//   const isHomePage = location.pathname === "/";

//   const role = "servicemen";
//   return (
//     <>
//       <header className={isHomePage ? `header py-1 bg-primary ${isScrolled ? "scrolled" : ""}` : `header bg-white shadow-s1 ${isScrolled ? "scrolled" : ""}`}>
//         <Container>
//           <nav className="p-4 flex justify-between items-center relative">
//             <div className="flex items-center gap-14">
//               <div>
//                 {isHomePage && !isScrolled ? (
//                   <img src="../images/common/header-logo.png" alt="LogoImg" className="h-11" />
//                 ) : (
//                   <img src="../images/common/header-logo2.png" alt="LogoImg" className="h-11" />
//                 )}
//               </div>
//               <div className="hidden lg:flex items-center justify-between gap-8">
//                 {menulists.map((list) => (
//                   <li key={list.id} className="capitalize list-none">
//                     <CustomNavLinkList href={list.path} isActive={location.pathname === list.path} className={`${isScrolled || !isHomePage ? "text-black" : "text-white"}`}>
//                       {list.link}
//                     </CustomNavLinkList>
//                   </li>
//                 ))}
//               </div>
//             </div>
//             <div className="flex items-center gap-8 icons">
//               <div className="hidden lg:flex lg:items-center lg:gap-8">
//                 <IoSearchOutline size={23} className={`${isScrolled || !isHomePage ? "text-black" : "text-white"}`} />
//                 {role === "servicemen" && (
//                   <CustomNavLink href="/seller/login" className={`${isScrolled || !isHomePage ? "text-black" : "text-white"}`}>
//                     Become a Customer
//                   </CustomNavLink>
//                 )}
//                 <CustomNavLink href="/login" className={`${isScrolled || !isHomePage ? "text-black" : "text-white"}`}>
//                   Sign in
//                 </CustomNavLink>
//                 <CustomNavLink href="/register" className={`${!isHomePage || isScrolled ? "bg-green" : "bg-white"} px-8 py-2 rounded-full text-primary shadow-md`}>
//                   Join
//                 </CustomNavLink>
//                 <CustomNavLink href="/dashboard">
//                   <ProfileCard>
//                     <img src={User1} alt="" className="w-full h-full object-cover" />
//                   </ProfileCard>
//                 </CustomNavLink>
//               </div>
//               <div className={`icon flex items-center justify-center gap-6 ${isScrolled || !isHomePage ? "text-primary" : "text-white"}`}>
//                 <button onClick={toggleMenu} className="lg:hidden w-10 h-10 flex justify-center items-center bg-black text-white focus:outline-none">
//                   {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
//                 </button>
//               </div>
//             </div>

//             {/* Responsive Menu if below 768px */}
//             <div ref={menuRef} className={`lg:flex lg:items-center lg:w-auto w-full p-5 absolute right-0 top-full menu-container ${isOpen ? "open" : "closed"}`}>
//               {menulists.map((list) => (
//                 <li href={list.path} key={list.id} className="uppercase list-none">
//                   <CustomNavLink className="text-white">{list.link}</CustomNavLink>
//                 </li>
//               ))}
//             </div>
//           </nav>
//         </Container>
//       </header>
//     </>
//   );
// };


// import { useState, useEffect, useRef } from "react";
// import { useLocation } from "react-router-dom";

// // design
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { IoSearchOutline } from "react-icons/io5";
// import { Container, CustomNavLink, CustomNavLinkList, ProfileCard } from "../../router";
// import { User1 } from "../hero/Hero";
// import { menulists } from "../../utils/data";

// export const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();

//   const menuRef = useRef(null);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenuOutside = (event) => {
//     if (menuRef.current && !menuRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };
//   const handleScroll = () => {
//     setIsScrolled(window.scrollY > 0);
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", closeMenuOutside);
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       document.removeEventListener("mousedown", closeMenuOutside);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Check if it's the home page
//   const isHomePage = location.pathname === "/";

//   // ✅ Check if the user is logged in or not
//   const token = localStorage.getItem("token");

//   // ✅ Assume the role from localStorage or any context
//   const role = localStorage.getItem("role"); // 'customer' or 'servicemen'

//   return (
//     <>
//       <header className={isHomePage ? `header py-1 bg-primary ${isScrolled ? "scrolled" : ""}` : `header bg-white shadow-s1 ${isScrolled ? "scrolled" : ""}`}>
//         <Container>
//           <nav className="p-4 flex justify-between items-center relative">
//             <div className="flex items-center gap-14">
//               <div>
//                 {isHomePage && !isScrolled ? (
//                   <img src="../images/common/header-logo.jpg" alt="LogoImg" className="h-11" />
//                 ) : (
//                   <img src="../images/common/header-logo2.jpg" alt="LogoImg" className="h-11" />
//                 )}
//               </div>
//               <div className="hidden lg:flex items-center justify-between gap-8">
//                 {menulists.map((list) => (
//                   <li key={list.id} className="capitalize list-none">
//                     <CustomNavLinkList href={list.path} isActive={location.pathname === list.path} className={`${isScrolled || !isHomePage ? "text-black" : "text-white"}`}>
//                       {list.link}
//                     </CustomNavLinkList>
//                   </li>
//                 ))}
//               </div>
//             </div>
//             <div className="flex items-center gap-8 icons">
//               <div className="hidden lg:flex lg:items-center lg:gap-8">
//                 <IoSearchOutline size={23} className={`${isScrolled || !isHomePage ? "text-black" : "text-white"}`} />

//                 {/* ✅ Hide "Become a Customer" if already a customer */}
//                 {role === "servicemen" && (
//                   <CustomNavLink href="/seller/login" className={`${isScrolled || !isHomePage ? "text-black" : "text-white"}`}>
//                     Become a Customer
//                   </CustomNavLink>
//                 )}

//                 {role === "customer" && (
//                   <CustomNavLink href="/servicemen/login" className={`${isScrolled || !isHomePage ? "text-black" : "text-white"}`}>
//                     Become a Servicemen
//                   </CustomNavLink>
//                 )}
                
                

//                 {/* ✅ Hide "Sign in" and "Join" if already logged in */}
//                 {!token && (
//                   <>
//                     <CustomNavLink href="/login" className={`${isScrolled || !isHomePage ? "text-black" : "text-white"}`}>
//                       Sign in
//                     </CustomNavLink>
//                     <CustomNavLink href="/register" className={`${!isHomePage || isScrolled ? "bg-green" : "bg-white"} px-8 py-2 rounded-full text-primary shadow-md`}>
//                       Join
//                     </CustomNavLink>
//                   </>
//                 )}

//                 {/* ✅ Always show Profile if logged in */}
//                 {token && (
//                   <CustomNavLink href="/dashboard">
//                     <ProfileCard>
//                       <img src={User1} alt="" className="w-full h-full object-cover" />
//                     </ProfileCard>
//                   </CustomNavLink>
//                 )}
//               </div>

//               {/* ✅ Mobile Menu */}
//               <div className={`icon flex items-center justify-center gap-6 ${isScrolled || !isHomePage ? "text-primary" : "text-white"}`}>
//                 <button onClick={toggleMenu} className="lg:hidden w-10 h-10 flex justify-center items-center bg-black text-white focus:outline-none">
//                   {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
//                 </button>
//               </div>
//             </div>

//             {/* ✅ Responsive Menu */}
//             <div ref={menuRef} className={`lg:flex lg:items-center lg:w-auto w-full p-5 absolute right-0 top-full menu-container ${isOpen ? "open" : "closed"}`}>
//               {menulists.map((list) => (
//                 <li href={list.path} key={list.id} className="uppercase list-none">
//                   <CustomNavLink className="text-white">{list.link}</CustomNavLink>
//                 </li>
//               ))}
//             </div>
//           </nav>
//         </Container>
//       </header>
//     </>
//   );
// };

import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";


import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import {
  Container,
  CustomNavLink,
  CustomNavLinkList,
  ProfileCard,
} from "../../router";
import { User1 } from "../hero/Hero";
import { menulists } from "../../utils/data";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenuOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", closeMenuOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === "/";
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return (
    <>
      <header
        className={`header transition-all duration-300 ${
          isHomePage
            ? isScrolled
              ? "bg-blue-600 shadow-md"
              : "bg-white shadow-2xl"
            : "bg-blue-600 shadow-md"
        } py-4`}
      >
        <Container>
          <nav className="flex justify-between items-center relative">
            <div className="flex items-center gap-8">
              <img
                src={
                  isHomePage && !isScrolled
                    ? "../images/common/header-logo.jpg"
                    : "../images/common/header-logo2.jpg"
                }
                alt="Logo"
                className="h-12"
              />
              <ul className="hidden lg:flex items-center gap-6">
                {menulists.map((list) => (
                  <li key={list.id} className="list-none">
                    <CustomNavLinkList
                      href={list.path}
                      isActive={location.pathname === list.path}
                      className={`text-lg font-medium ${
                          isScrolled || !isHomePage
                            ? "text-white hover:text-gray-600"
                            : "text-blue-900 hover:text-gray-600"
                        }`}
                    >
                      {list.link}
                    </CustomNavLinkList>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-6">
              <SearchIcon
                className={`cursor-pointer text-2xl ${
                          isScrolled || !isHomePage
                            ? "text-blue-700"
                            : "text-white"
                        }`}
              />

              {role === "servicemen" && (
                <CustomNavLink
                  href="/seller/login"
                  className={`text-lg font-medium ${
                    isScrolled || !isHomePage
                      ? "text-white hover:text-gray-600"
                      : "text-blue-900 hover:text-gray-600"
                  }`}
                >
                  Become a Customer
                </CustomNavLink>
              )}

              {role === "customer" && (
                <CustomNavLink
                  href="/servicemen/login"
                  className={`text-lg font-medium ${
                    isScrolled || !isHomePage
                      ? "text-white hover:text-gray-600"
                      : "text-blue-900 hover:text-gray-600"
                  }`}
                >
                  Become a Serviceman
                </CustomNavLink>
              )}

              {!token ? (
                <>
                  <CustomNavLink
                    href="/login"
                    className={`text-lg font-medium ${
                      isScrolled || !isHomePage
                        ? "text-white hover:text-gray-600"
                        : "text-blue-900 hover:text-gray-600"
                    }`}
                  >
                    <PersonOutlineIcon /> Sign in
                  </CustomNavLink>
                  <CustomNavLink
                    href="/register"
                    // className="bg-white text-black px-6 py-2 rounded-full shadow-lg hover:bg-gray-600"
                    className={` ${
                      isScrolled || !isHomePage
                        ? "bg-white px-6 py-2 rounded-full shadow-lg text-blue-600 hover:text-gray-600"
                        : "bg-blue-600 px-6 py-2 rounded-full shadow-lg text-white hover:text-gray-600"
                    }`}
                  >
                    <PersonAddIcon /> Join
                  </CustomNavLink>
                </>
              ) : (
                <CustomNavLink href="/dashboard">
                  <ProfileCard>
                    <img
                      src={User1}
                      alt="Profile"
                      className="w-12 h-12 rounded-full border-2 border-white"
                    />
                  </ProfileCard>
                </CustomNavLink>
              )}

              <button
                onClick={toggleMenu}
                className="lg:hidden w-10 h-10 flex justify-center items-center bg-blue-600 text-white rounded-md focus:outline-none"
              >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>

            <div
              ref={menuRef}
              className={`lg:hidden absolute right-0 top-16 w-64 bg-white shadow-lg p-5 rounded-xl transform ${
                isOpen ? "translate-y-0" : "-translate-y-96"
              } transition-transform duration-300`}
            >
              <ul className="space-y-4">
                {menulists.map((list) => (
                  <li key={list.id} className="list-none">
                    <CustomNavLinkList
                      href={list.path}
                      className="text-lg text-blue-700 hover:text-blue-900"
                    >
                      {list.link}
                    </CustomNavLinkList>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
};