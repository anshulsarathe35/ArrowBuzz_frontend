// //raj
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Title } from "../../router";
// import { CiMedal } from "react-icons/ci";
// import { GiBarbedStar } from "react-icons/gi";
// import { BsCashCoin } from "react-icons/bs";
// import { MdDashboard, MdOutlineCategory } from "react-icons/md";
// import { HiOutlineUsers } from "react-icons/hi2";
// import { NavLink } from "react-router-dom";


// export const Dashboard = () => {
//   const role = localStorage.getItem("role");

//   const [balance, setBalance] = useState(0);
//   const [allServices, setAllServices] = useState(0);
//   const [allUsers, setAllUsers] = useState(0);
//   const [itemsWon, setItemsWon] = useState(0);
//   const [userProducts, setUserProducts] = useState(0);

//   // Fetch data
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch user balance
//         const balanceResponse = await axios.get("http://localhost:5001/api/users/sell-amount", {
//           withCredentials: true,
//         });
//         setBalance(balanceResponse.data.balance);

//         // Fetch all services
//         const servicesResponse = await axios.get("http://localhost:5001/api/service/", {
//           withCredentials: true,
//         });
//         setAllServices(servicesResponse.data.length);

//         // Fetch all users (only for admin)
//         if (role === "admin") {
//           const usersResponse = await axios.get("http://localhost:5001/api/users/allusers", {
//             withCredentials: true,
//           });
//           setAllUsers(usersResponse.data.length);
//         }

//         // Fetch items won
//         const wonResponse = await axios.get("http://localhost:5001/api/service/won-services", {
//           withCredentials: true,
//         });
//         setItemsWon(wonResponse.data.length);

//         // Fetch user products
//         const productsResponse = await axios.get("http://localhost:5001/api/service/user", {
//           withCredentials: true,
//         });
//         setUserProducts(productsResponse.data.length);
//       } catch (error) {
//         console.error("Failed to fetch data:", error);
//         alert("Failed to load dashboard data");
//       }
//     };

//     fetchData();
//   }, [role]);

//   return (
//     <>
//       <section>
//         <div className="shadow-s1 p-8 rounded-lg  mb-12">
//           <Title level={5} className=" font-normal">
//             {role === "admin" ? "Admin Panel" : "My Activity"}
//           </Title>
//           <hr className="my-5" />

//           <div className="grid grid-cols-3 gap-8 mt-8">
//             {/* User Balance */}
//             <div className="shadow-s3 border border-green bg-green_100 p-8 flex items-center text-center justify-center gap-5 flex-col rounded-xl">
//               <BsCashCoin size={80} className="text-green" />
//               <div>
//                 <Title level={1}>₹{balance}</Title>
//                 <Title>Balance</Title>
//               </div>
//             </div>

//             {/* Items Won */}
//             <div className="shadow-s3 border border-green bg-green_100 p-8 flex items-center text-center justify-center gap-5 flex-col rounded-xl">
//               <CiMedal size={80} className="text-green" />
//               <div>
//                 <Title level={1}>{itemsWon}</Title>
//                 <Title>Items Won</Title>
//               </div>
//             </div>

//             {/* User Products */}
//             <div className="shadow-s3 border border-green bg-green_100 p-8 flex items-center text-center justify-center gap-5 flex-col rounded-xl">
//               <GiBarbedStar size={80} className="text-green" />
//               <div>
//                 <Title level={1}>{userProducts}</Title>
//                 <Title>Your Products</Title>
//               </div>
//             </div>

//             {/* Admin Only Section */}
//             {role === "admin" && (
//               <>
//                 {/* All Services */}
//                 <div className="shadow-s3 border border-green bg-green_100 p-8 flex items-center text-center justify-center gap-5 flex-col rounded-xl">
//                   <MdOutlineCategory size={80} className="text-green" />
//                   <div>
//                     <Title level={1}>{allServices}</Title>
//                     <Title>All Services</Title>
//                   </div>
//                 </div>

//                 {/* All Users */}
//                 <div className="shadow-s3 border border-green bg-green_100 p-8 flex items-center text-center justify-center gap-5 flex-col rounded-xl">
//                   <HiOutlineUsers size={80} className="text-green" />
//                   <div>
//                     <Title level={1}>{allUsers}</Title>
//                     <Title>All Users</Title>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };




// export const UserProduct = () => {
//   return (
//     <>
//       <div className="shadow-s1 p-8 rounded-lg">
//         <Title level={5} className=" font-normal">
//           Purchasing
//         </Title>
//         <hr className="my-5" />
//         <div className="relative overflow-x-auto rounded-lg">
//           <table className="w-full text-sm text-left rtl:text-right text-gray-500">
//             <thead className="text-xs text-gray-700 uppercase bg-gray-100">
//               <tr>
//                 <th scope="col" className="px-6 py-5">
//                   Title
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Bidding ID
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Bid Amount(Rupess)
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Image
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Status
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="bg-white border-b hover:bg-gray-50">
//                 <td className="px-6 py-4">Auction Title 01</td>
//                 <td className="px-6 py-4">Bidding_HvO253gT</td>
//                 <td className="px-6 py-4">1222.8955</td>
//                 <td className="px-6 py-4">
//                   <img className="w-10 h-10" src="https://bidout-react.vercel.app/images/bg/order1.png" alt="Jeseimage" />
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="flex items-center">
//                     <div className="h-2.5 w-2.5 rounded-full bg-green me-2"></div> Success
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 text-center">
//                   <NavLink to="#" type="button" className="font-medium text-green">
//                     <MdDashboard size={25} />
//                   </NavLink>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

//anshul again frontend
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Title } from "../../router";
import { CiMedal } from "react-icons/ci";
import { GiBarbedStar } from "react-icons/gi";
import { BsCashCoin } from "react-icons/bs";
import { MdDashboard, MdOutlineCategory } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

export const Dashboard = () => {
  const role = localStorage.getItem("role");

  const [balance, setBalance] = useState(0);
  const [allServices, setAllServices] = useState(0);
  const [allUsers, setAllUsers] = useState(0);
  const [itemsWon, setItemsWon] = useState(0);
  const [userProducts, setUserProducts] = useState(0);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const balanceResponse = await axios.get(
          "http://localhost:5001/api/users/sell-amount",
          { withCredentials: true }
        );
        setBalance(balanceResponse.data.balance);

        const servicesResponse = await axios.get(
          "http://localhost:5001/api/service/",
          { withCredentials: true }
        );
        setAllServices(servicesResponse.data.length);

        if (role === "admin") {
          const usersResponse = await axios.get(
            "http://localhost:5001/api/users/allusers",
            { withCredentials: true }
          );
          setAllUsers(usersResponse.data.length);
        }

        const wonResponse = await axios.get(
          "http://localhost:5001/api/service/won-services",
          { withCredentials: true }
        );
        setItemsWon(wonResponse.data.length);

        const productsResponse = await axios.get(
          "http://localhost:5001/api/service/user",
          { withCredentials: true }
        );
        setUserProducts(productsResponse.data.length);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        alert("Failed to load dashboard data");
      }
    };

    fetchData();
  }, [role]);

  return (
    <>
      <section className="p-8 bg-gradient-to-b from-white to-blue-50 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <DashboardCard
            title="Balance"
            value={`₹${balance}`}
            icon={<BsCashCoin size={50} className="text-blue-500" />}
            bgGradient="bg-gradient-to-br from-blue-100 to-blue-300 shadow-lg"
          />
          <DashboardCard
            title="Items Won"
            value={itemsWon}
            icon={<CiMedal size={50} className="text-blue-400" />}
            bgGradient="bg-gradient-to-br from-blue-100 to-blue-300 shadow-lg"
          />
          <DashboardCard
            title="Your Products"
            value={userProducts}
            icon={<GiBarbedStar size={50} className="text-blue-500" />}
            bgGradient="bg-gradient-to-br from-blue-100 to-blue-300 shadow-lg"
          />
          {role === "admin" && (
            <>
              <DashboardCard
                title="All Services"
                value={allServices}
                icon={<MdOutlineCategory size={50} className="text-blue-600" />}
                bgGradient="bg-gradient-to-br from-blue-100 to-blue-300 shadow-lg"
              />
              <DashboardCard
                title="All Users"
                value={allUsers}
                icon={<HiOutlineUsers size={50} className="text-blue-400" />}
                bgGradient="bg-gradient-to-br from-blue-100 to-blue-300 shadow-lg"
              />
            </>
          )}
        </div>
      </section>
    </>
  );
  
};

const DashboardCard = ({ title, value, icon, bgGradient }) => {
  return (
    <div
      className={`flex items-center justify-between p-6 h-32 w-auto rounded-2xl shadow-xl outline-black text-black ${bgGradient}`}
    >
      <div>
        <Title level={3} className="text-xl font-bold">
          {title}
        </Title>
        <p className="text-3xl font-extrabold mt-2">{value}</p>
      </div>
      <div>{icon}</div>
    </div>
  );
};

export const UserProduct = () => {
  return (
    <>
      <div className="shadow-lg p-8 rounded-lg bg-white">
        <Title level={5} className="font-semibold text-gray-700">
          Purchasing
        </Title>
        <hr className="my-5" />
        <div className="relative overflow-x-auto rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Bidding ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Bid Amount (₹)
                </th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">Auction Title 01</td>
                <td className="px-6 py-4">Bidding_HvO253gT</td>
                <td className="px-6 py-4">₹1222.89</td>
                <td className="px-6 py-4">
                  <img
                    className="w-12 h-12 rounded-lg"
                    src="https://bidout-react.vercel.app/images/bg/order1.png"
                    alt="Jeseimage"
                  />
                </td>
                <td className="px-6 py-4">
                  <span className="text-green-500 font-bold">Success</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <NavLink to="#" className="text-blue-500">
                    <MdDashboard size={25} />
                  </NavLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};




//anshul
// import React from "react";
// import { Title } from "../../router";
// import { CiMedal } from "react-icons/ci";
// import { GiBarbedStar } from "react-icons/gi";
// import { BsCashCoin } from "react-icons/bs";
// import { MdDashboard, MdOutlineCategory } from "react-icons/md";
// import { NavLink } from "react-router-dom";
// import { HiOutlineUsers } from "react-icons/hi2";

// export const Dashboard = () => {
//   const role = localStorage.getItem("role");
//   return (
//     <>
//       <section>
//         <div className="shadow-s1 p-8 rounded-lg  mb-12">
//           <Title level={5} className=" font-normal">
//             {role === "admin" ? "Admin Panel" : "My Activity"}
//           </Title>
//           <hr className="my-5" />

//           <div className="grid grid-cols-3 gap-8 mt-8">
//             <div className="shadow-s3 border border-green bg-green_100 p-8 flex items-center text-center justify-center gap-5 flex-col rounded-xl">
//               <BsCashCoin size={80} className="text-green" />
//               <div>
//                 <Title level={1}>500 </Title>
//                 <Title>Balance</Title>
//               </div>
//             </div>
//             <div className="shadow-s3 border border-green bg-green_100 p-8 flex items-center text-center justify-center gap-5 flex-col rounded-xl">
//               <CiMedal size={80} className="text-green" />
//               <div>
//                 <Title level={1}>2</Title>
//                 <Title>Items Won</Title>
//               </div>
//             </div>
//             <div className="shadow-s3 border border-green bg-green_100 p-8 flex items-center text-center justify-center gap-5 flex-col rounded-xl">
//               <GiBarbedStar size={80} className="text-green" />
//               <div>
//                 <Title level={1}>100</Title>
//                 <Title>Your Products </Title>
//               </div>
//             </div>
//             {role === "admin" && (
//               <>
//                 <div className="shadow-s3 border border-green bg-green_100 p-8 flex items-center text-center justify-center gap-5 flex-col rounded-xl">
//                   <MdOutlineCategory size={80} className="text-green" />
//                   <div>
//                     <Title level={1}>50</Title>
//                     <Title>All Products </Title>
//                   </div>
//                 </div>
//                 <div className="shadow-s3 border border-green bg-green_100 p-8 flex items-center text-center justify-center gap-5 flex-col rounded-xl">
//                   <HiOutlineUsers size={80} className="text-green" />
//                   <div>
//                     <Title level={1}>100</Title>
//                     <Title>All Users </Title>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export const UserProduct = () => {
//   return (
//     <>
//       <div className="shadow-s1 p-8 rounded-lg">
//         <Title level={5} className=" font-normal">
//           Purchasing
//         </Title>
//         <hr className="my-5" />
//         <div className="relative overflow-x-auto rounded-lg">
//           <table className="w-full text-sm text-left rtl:text-right text-gray-500">
//             <thead className="text-xs text-gray-700 uppercase bg-gray-100">
//               <tr>
//                 <th scope="col" className="px-6 py-5">
//                   Title
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Bidding ID
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Bid Amount(Rupess)
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Image
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Status
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="bg-white border-b hover:bg-gray-50">
//                 <td className="px-6 py-4">Auction Title 01</td>
//                 <td className="px-6 py-4">Bidding_HvO253gT</td>
//                 <td className="px-6 py-4">1222.8955</td>
//                 <td className="px-6 py-4">
//                   <img className="w-10 h-10" src="https://bidout-react.vercel.app/images/bg/order1.png" alt="Jeseimage" />
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="flex items-center">
//                     <div className="h-2.5 w-2.5 rounded-full bg-green me-2"></div> Success
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 text-center">
//                   <NavLink to="#" type="button" className="font-medium text-green">
//                     <MdDashboard size={25} />
//                   </NavLink>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };
