// import { Caption, CustomNavLink, Title } from "../common/Design";
// import { CiGrid41 } from "react-icons/ci";
// import { IoSettingsOutline } from "react-icons/io5";
// import { MdOutlineCategory } from "react-icons/md";
// import { RiAuctionLine } from "react-icons/ri";
// import { IoIosHeartEmpty } from "react-icons/io";
// import { User1 } from "../hero/Hero";
// import { IoIosLogOut } from "react-icons/io";
// import { CgProductHunt } from "react-icons/cg";
// import { TbCurrencyDollar } from "react-icons/tb";
// import { FiUser } from "react-icons/fi";
// import { FaPlusCircle } from "react-icons/fa";
// import { useLocation } from "react-router-dom";

// export const SideBar = () => {
//   const location = useLocation();

//   const role = "customer" || "servicemen";
//   const className = "flex items-center gap-3 mb-2 p-4 rounded-full";

//   return (
//     <>
//       <section className="sidebar flex flex-col justify-between h-full">
//         <div className="profile flex items-center text-center justify-center gap-8 flex-col mb-8">
//           <img src={User1} alt="" className="w-32 h-32 rounded-full object-cover" />
//           <div>
//             <Title className="capitalize">Sunil B.K</Title>
//             <Caption>example@gmail.com</Caption>
//           </div>
//         </div>

//         <div>
//           <CustomNavLink href="/dashboard" isActive={location.pathname === "/dashboard"} className={className}>
//             <span>
//               <CiGrid41 size={22} />
//             </span>
//             <span>Dashbaord</span>
//           </CustomNavLink>

//           {(role === "customer" || role === "admin" || role==="servicemen") && (
//             <>
//               <CustomNavLink href="/product" isActive={location.pathname === "/product"} className={className}>
//                 <span>
//                   <MdOutlineCategory size={22} />
//                 </span>
//                 <span>My Products</span>
//               </CustomNavLink>
//               <CustomNavLink href="/add" isActive={location.pathname === "/add"} className={className}>
//                 <span>
//                   <FaPlusCircle size={22} />
//                 </span>
//                 <span>Create Product</span>
//               </CustomNavLink>

//               {/* do it  */}
//             </>
//           )}

//           {role === "admin" && (
//             <>
//               <CustomNavLink href="/userlist" isActive={location.pathname === "/userlist"} className={className}>
//                 <span>
//                   <FiUser size={22} />
//                 </span>
//                 <span>All User</span>
//               </CustomNavLink>

//               <CustomNavLink href="/product/admin" isActive={location.pathname === "/product/admin"} className={className}>
//                 <span>
//                   <CgProductHunt size={22} />
//                 </span>
//                 <span> All product List</span>
//               </CustomNavLink>

//               <CustomNavLink href="/category" isActive={location.pathname === "/category"} className={className}>
//                 <span>
//                   <MdOutlineCategory size={22} />
//                 </span>
//                 <span>Categories</span>
//               </CustomNavLink>
//               <CustomNavLink href="/admin/income" isActive={location.pathname === "/admin/income"} className={className}>
//                 <span>
//                   <TbCurrencyDollar size={22} />
//                 </span>
//                 <span>Income</span>
//               </CustomNavLink>
//             </>
//           )}

//           <CustomNavLink href="/winning-products" isActive={location.pathname === "/winning-products"} className={className}>
//             <span>
//               <RiAuctionLine size={22} />
//             </span>
//             <span>Winning Bids</span>
//           </CustomNavLink>
//           <CustomNavLink href="/favorites" isActive={location.pathname === "/favorites"} className={className}>
//             <span>
//               <IoIosHeartEmpty size={22} />
//             </span>
//             <span>My Favorites</span>
//           </CustomNavLink>
//           <CustomNavLink href="/profile" isActive={location.pathname === "/profile"} className={className}>
//             <span>
//               <IoSettingsOutline size={22} />
//             </span>
//             <span>Personal Profile</span>
//           </CustomNavLink>

//           <button className="flex items-center w-full gap-3 mt-4 bg-red-500 mb-3 hover:text-white p-4 rounded-full text-white">
//             <span>
//               <IoIosLogOut size={22} />
//             </span>
//             <span>Log Out</span>
//           </button>
//         </div>
//       </section>
//     </>
//   );
// };

// import { useEffect, useState } from "react";
// import { Caption, CustomNavLink, Title } from "../common/Design";
// import { CiGrid41 } from "react-icons/ci";
// import { IoSettingsOutline } from "react-icons/io5";
// import { MdOutlineCategory } from "react-icons/md";
// import { RiAuctionLine } from "react-icons/ri";
// import { IoIosHeartEmpty } from "react-icons/io";
// import { IoIosLogOut } from "react-icons/io";
// import { CgProductHunt } from "react-icons/cg";
// import { TbCurrencyDollar } from "react-icons/tb";
// import { FiUser } from "react-icons/fi";
// import { FaPlusCircle } from "react-icons/fa";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// export const SideBar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const className = "flex items-center gap-3 mb-2 p-4 rounded-full";

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     role: "",
//     photo: "",
//   });

//   // ✅ Fetch User Details from Backend
//   const fetchUserDetails = async () => {
//     try {
//       const response = await axios.get("http://localhost:5001/api/users/getuser", {
//         withCredentials: true,
//       });

//       // ✅ Set user details in state
//       setUser({
//         name: response.data.name,
//         email: response.data.email,
//         role: response.data.role,
//         photo: response.data.photo || "../images/common/user-default.png",
//       });
//     } catch (error) {
//       console.error("Failed to fetch user:", error);
//       navigate("/login");
//     }
//   };

//   // ✅ Fetch user data when sidebar loads
//   useEffect(() => {
//     fetchUserDetails();
//   }, []);

//   // ✅ Handle Logout
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("role");
//     navigate("/login");
//   };

//   return (
//     <>
//       <section className="sidebar flex flex-col justify-top h-full">
//         {/* ✅ User Profile Section */}
//         <div className="profile flex items-center text-center justify-center gap-8 flex-col mb-8">
//           <img
//             src={user.photo}
//             alt="User Profile"
//             className="w-32 h-32 rounded-full object-cover"
//           />
//           <div>
//             <Title className="capitalize">{user.name}({user.role})</Title>
//             <Caption>{user.email}</Caption>
//           </div>
//         </div>

//         {/* ✅ Navigation Links */}
//         <div>
//           <CustomNavLink
//             href="/dashboard"
//             isActive={location.pathname === "/dashboard"}
//             className={className}
//           >
//             <span>
//               <CiGrid41 size={22} />
//             </span>
//             <span>Dashboard</span>
//           </CustomNavLink>

//           {/* ✅ For Seller / Admin */}
//           {(user.role === "customer" || user.role === "admin" || user.role==="servicemen") && (
//             <>
//               <CustomNavLink
//                 href="/product"
//                 isActive={location.pathname === "/product"}
//                 className={className}
//               >
//                 <span>
//                   <MdOutlineCategory size={22} />
//                 </span>
//                 <span>My Services</span>
//               </CustomNavLink>

//               <CustomNavLink
//                 href="/add"
//                 isActive={location.pathname === "/add"}
//                 className={className}
//               >
//                 <span>
//                   <FaPlusCircle size={22} />
//                 </span>
//                 <span>Create Service</span>
//               </CustomNavLink>
//             </>
//           )}

//           {/* ✅ For Admin */}
//           {user.role === "admin" && (
//             <>
//               <CustomNavLink
//                 href="/userlist"
//                 isActive={location.pathname === "/userlist"}
//                 className={className}
//               >
//                 <span>
//                   <FiUser size={22} />
//                 </span>
//                 <span>All Users</span>
//               </CustomNavLink>

//               <CustomNavLink
//                 href="/product/admin"
//                 isActive={location.pathname === "/product/admin"}
//                 className={className}
//               >
//                 <span>
//                   <CgProductHunt size={22} />
//                 </span>
//                 <span>All Product List</span>
//               </CustomNavLink>

//               <CustomNavLink
//                 href="/category"
//                 isActive={location.pathname === "/category"}
//                 className={className}
//               >
//                 <span>
//                   <MdOutlineCategory size={22} />
//                 </span>
//                 <span>Categories</span>
//               </CustomNavLink>

//               <CustomNavLink
//                 href="/admin/income"
//                 isActive={location.pathname === "/admin/income"}
//                 className={className}
//               >
//                 <span>
//                   <TbCurrencyDollar size={22} />
//                 </span>
//                 <span>Income</span>
//               </CustomNavLink>

//               {/* raj */}
//               <CustomNavLink
//                 href="/admin/allsoldservices"
//                 isActive={location.pathname === "/admin/allsoldservices"}
//                 className={className}
//               >
//                 <span>
//                   <TbCurrencyDollar size={22} />
//                 </span>
//                 <span>All Sold Services</span>
//               </CustomNavLink>
//             </>
//           )}

//           {/* ✅ Common for All */}
//           <CustomNavLink
//             href="/winning-products"
//             isActive={location.pathname === "/winning-products"}
//             className={className}
//           >
//             <span>
//               <RiAuctionLine size={22} />
//             </span>
//             <span>Winning Bids</span>
//           </CustomNavLink>


//           {/* <CustomNavLink
//             href="/favorites"
//             isActive={location.pathname === "/favorites"}
//             className={className}
//           >
//             <span>
//               <IoIosHeartEmpty size={22} />
//             </span>
//             <span>My Favorites</span>
//           </CustomNavLink> */}

//           <CustomNavLink
//             href="/profile"
//             isActive={location.pathname === "/profile"}
//             className={className}
//           >
//             <span>
//               <IoSettingsOutline size={22} />
//             </span>
//             <span>Personal Profile</span>
//           </CustomNavLink>

//           {/* ✅ Logout Button */}
//           <button
//             onClick={handleLogout}
//             className="flex items-center w-full gap-3 mt-4 bg-red-500 mb-3 hover:text-white p-4 rounded-full text-white"
//           >
//             <span>
//               <IoIosLogOut size={22} />
//             </span>
//             <span>Log Out</span>
//           </button>
//         </div>
//       </section>
//     </>
//   );
// };

// import { useEffect, useState } from "react";
// import { Caption, CustomNavLink, Title } from "../common/Design";
// import { CiGrid41 } from "react-icons/ci";
// import { IoSettingsOutline } from "react-icons/io5";
// import { MdOutlineCategory } from "react-icons/md";
// import { RiAuctionLine } from "react-icons/ri";
// import { IoIosLogOut } from "react-icons/io";
// import { CgProductHunt } from "react-icons/cg";
// import { TbCurrencyDollar } from "react-icons/tb";
// import { FiUser } from "react-icons/fi";
// import { FaPlusCircle } from "react-icons/fa";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// export const SideBar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const className =
//     "flex items-center gap-3 mb-3 p-4 rounded-lg transition-all duration-300 hover:bg-white text-blue-900 hover:text-white-600";

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     role: "",
//     photo: "",
//   });

//   // ✅ Fetch User Details from Backend
//   const fetchUserDetails = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5001/api/users/getuser",
//         {
//           withCredentials: true,
//         }
//       );
//       setUser({
//         name: response.data.name,
//         email: response.data.email,
//         role: response.data.role,
//         photo: response.data.photo || "../images/common/user-default.png",
//       });
//     } catch (error) {
//       console.error("Failed to fetch user:", error);
//       navigate("/login");
//     }
//   };

//   useEffect(() => {
//     fetchUserDetails();
//   }, []);

//   // ✅ Handle Logout
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("role");
//     navigate("/login");
//   };

  

//   return (
//     <>
//       <section className="sidebar bg-gradient-to-b from-white to-cyan-500 text-white p-6 h-full rounded-r-3xl shadow-lg overflow-y-auto">
//         {/* ✅ User Profile Section */}
//         <div className="profile flex items-center text-center justify-center gap-6 flex-col mb-8">
//           <img
//             src={user.photo}
//             alt="User Profile"
//             className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white"
//           />
//           <div>
//             <Title className="capitalize text-xl font-bold text-blue-900">
//               {user.name} ({user.role})
//             </Title>
//             <Caption className="text-black">{user.email}</Caption>
//           </div>
//         </div>

//         {/* ✅ Navigation Links */}
//         <div className="space-y-4">
//           <CustomNavLink
//             href="/dashboard"
//             isActive={location.pathname === "/dashboard"}
//             className={className}
//           >
//             <CiGrid41 size={22} />
//             <span>Dashboard</span>
//           </CustomNavLink>

//           {(user.role === "customer" ||
//             user.role === "admin" ||
//             user.role === "servicemen") && (
//             <>
//               <CustomNavLink
//                 href="/product"
//                 isActive={location.pathname === "/product"}
//                 className={className}
//               >
//                 <MdOutlineCategory size={22} />
//                 <span>My Services</span>
//               </CustomNavLink>

//               <CustomNavLink
//                 href="/add"
//                 isActive={location.pathname === "/add"}
//                 className={className}
//               >
//                 <FaPlusCircle size={22} />
//                 <span>Create Service</span>
//               </CustomNavLink>
//             </>
//           )}

//           {user.role === "admin" && (
//             <>
//               <CustomNavLink
//                 href="/userlist"
//                 isActive={location.pathname === "/userlist"}
//                 className={className}
//               >
//                 <FiUser size={22} />
//                 <span>All Users</span>
//               </CustomNavLink>

//               <CustomNavLink
//                 href="/product/admin"
//                 isActive={location.pathname === "/product/admin"}
//                 className={className}
//               >
//                 <CgProductHunt size={22} />
//                 <span>All Product List</span>
//               </CustomNavLink>

//               <CustomNavLink
//                 href="/category"
//                 isActive={location.pathname === "/category"}
//                 className={className}
//               >
//                 <MdOutlineCategory size={22} />
//                 <span>Categories</span>
//               </CustomNavLink>

//               <CustomNavLink
//                 href="/admin/income"
//                 isActive={location.pathname === "/admin/income"}
//                 className={className}
//               >
//                 <TbCurrencyDollar size={22} />
//                 <span>Income</span>
//               </CustomNavLink>

//               <CustomNavLink
//                 href="/admin/allsoldservices"
//                 isActive={location.pathname === "/admin/allsoldservices"}
//                 className={className}
//               >
//                 <TbCurrencyDollar size={22} />
//                 <span>All Sold Services</span>
//               </CustomNavLink>
//             </>
//           )}

//           <CustomNavLink
//             href="/winning-products"
//             isActive={location.pathname === "/winning-products"}
//             className={className}
//           >
//             <RiAuctionLine size={22} />
//             <span>Winning Bids</span>
//           </CustomNavLink>

//           <CustomNavLink
//             href="/profile"
//             isActive={location.pathname === "/profile"}
//             className={className}
//           >
//             <IoSettingsOutline size={22} />
//             <span>Personal Profile</span>
//           </CustomNavLink>

//           {/* ✅ Logout Button */}
//           <button
//             onClick={handleLogout}
//             className="flex items-center w-full gap-3 mt-4 bg-red-500 hover:bg-red-600 p-4 rounded-lg text-white font-semibold transition-all duration-300"
//           >
//             <IoIosLogOut size={22} />
//             <span>Log Out</span>
//           </button>
//         </div>
//       </section>
//     </>
//   );
// };


//anshul fronetned new

import { useEffect, useState } from "react";
import { Caption, CustomNavLink, Title } from "../common/Design";
import { CiGrid41 } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { RiAuctionLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { CgProductHunt } from "react-icons/cg";
import { TbCurrencyDollar } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const className =
    "flex items-center gap-3 mb-3 p-4 rounded-lg transition-all duration-300 hover:bg-white text-blue-900 hover:text-white-600";

  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
    photo: "",
  });

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/users/getuser",
        {
          withCredentials: true,
        }
      );

      setUser({
        name: response.data.name,
        email: response.data.email,
        role: response.data.role,
        photo: response.data.photo
          ? `http://localhost:5001${response.data.photo}`
          : "https://cdn-icons-png.flaticon.com/512/2202/2202112.png",
      });
    } catch (error) {
      console.error("Failed to fetch user:", error);
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <>
      <section className="sidebar bg-gradient-to-b from-white to-cyan-500 text-white p-6 h-full rounded-r-3xl shadow-lg overflow-y-auto">
     
        <div className="profile flex items-center text-center justify-center gap-6 flex-col mb-8">
          <img
            src={user.photo}
            alt="User Profile"
            className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://cdn-icons-png.flaticon.com/512/2202/2202112.png"; // ✅ Fallback image if load fails
            }}
          />
          <div>
            <Title className="capitalize text-xl font-bold text-blue-900">
              {user.name} ({user.role})
            </Title>
            <Caption className="text-black">{user.email}</Caption>
          </div>
        </div>

  
        <div className="space-y-4">
          <CustomNavLink
            href="/dashboard"
            isActive={location.pathname === "/dashboard"}
            className={className}
          >
            <CiGrid41 size={22} />
            <span>Dashboard</span>
          </CustomNavLink>

          {(user.role === "customer" ||
            user.role === "admin" ||
            user.role === "servicemen") && (
            <>
              <CustomNavLink
                href="/product"
                isActive={location.pathname === "/product"}
                className={className}
              >
                <MdOutlineCategory size={22} />
                <span>My Services</span>
              </CustomNavLink>

              <CustomNavLink
                href="/add"
                isActive={location.pathname === "/add"}
                className={className}
              >
                <FaPlusCircle size={22} />
                <span>Create Service</span>
              </CustomNavLink>
            </>
          )}

          {user.role === "admin" && (
            <>
              <CustomNavLink
                href="/userlist"
                isActive={location.pathname === "/userlist"}
                className={className}
              >
                <FiUser size={22} />
                <span>All Users</span>
              </CustomNavLink>

              <CustomNavLink
                href="/product/admin"
                isActive={location.pathname === "/product/admin"}
                className={className}
              >
                <CgProductHunt size={22} />
                <span>All Product List</span>
              </CustomNavLink>

              <CustomNavLink
                href="/category"
                isActive={location.pathname === "/category"}
                className={className}
              >
                <MdOutlineCategory size={22} />
                <span>Categories</span>
              </CustomNavLink>

              <CustomNavLink
                href="/admin/income"
                isActive={location.pathname === "/admin/income"}
                className={className}
              >
                <TbCurrencyDollar size={22} />
                <span>Income</span>
              </CustomNavLink>

              <CustomNavLink
                href="/admin/allsoldservices"
                isActive={location.pathname === "/admin/allsoldservices"}
                className={className}
              >
                <TbCurrencyDollar size={22} />
                <span>All Sold Services</span>
              </CustomNavLink>
            </>
          )}

          <CustomNavLink
            href="/winning-products"
            isActive={location.pathname === "/winning-products"}
            className={className}
          >
            <RiAuctionLine size={22} />
            <span>Winning Bids</span>
          </CustomNavLink>

          <CustomNavLink
            href="/profile"
            isActive={location.pathname === "/profile"}
            className={className}
          >
            <IoSettingsOutline size={22} />
            <span>Personal Profile</span>
          </CustomNavLink>

        
          <button
            onClick={handleLogout}
            className="flex items-center w-full gap-3 mt-4 bg-red-500 hover:bg-red-600 p-4 rounded-lg text-white font-semibold transition-all duration-300"
          >
            <IoIosLogOut size={22} />
            <span>Log Out</span>
          </button>
        </div>
      </section>
    </>
  );
};

