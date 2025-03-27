// import React from "react";
// import { PrimaryButton, Title } from "../../../router";
// import { NavLink } from "react-router-dom";
// import { AiOutlinePlus } from "react-icons/ai";

// export const ProductList = () => {
//   return (
//     <>
//       <section className="shadow-s1 p-8 rounded-lg">
//         <div className="flex justify-between">
//           <Title level={5} className=" font-normal">
//             Product Lists
//           </Title>
//           <NavLink to="/add">
//             <PrimaryButton className="flex items-center gap-3 px-5 py-2 text-sm rounded-md transition-transform hover:scale-105">
//               <AiOutlinePlus size={20} />
//               <span>Create Product</span>
//             </PrimaryButton>
//           </NavLink>
//         </div>
//         <hr className="my-5" />
//       </section>
//     </>
//   );
// };

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { PrimaryButton, Title } from "../../../router";
// import { NavLink } from "react-router-dom";
// import { AiOutlinePlus } from "react-icons/ai";

// export const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   // ✅ Fetch Products from MongoDB
//   const fetchProducts = async () => {
//     const token = localStorage.getItem("token"); // ✅ Get token from localStorage
//     try {
//       const response = await axios.get("http://localhost:5001/api/service/user", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // ✅ Send token in Authorization header
//         },
//       });
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <>
//       <section className="shadow-s1 p-8 rounded-lg">
//         <div className="flex justify-between">
//           <Title level={5} className=" font-normal">
//             Product Lists
//           </Title>
//           <NavLink to="/add">
//             <PrimaryButton className="flex items-center gap-3 px-5 py-2 text-sm rounded-md transition-transform hover:scale-105">
//               <AiOutlinePlus size={20} />
//               <span>Create Product</span>
//             </PrimaryButton>
//           </NavLink>
//         </div>
//         <hr className="my-5" />

//         {/* ✅ Product Grid */}
//         <div className="grid grid-cols-3 gap-6">
//           {products.length === 0 ? (
//             <p className="text-center col-span-3">No products available.</p>
//           ) : (
//             products.map((product) => (
//               <div
//                 key={product._id}
//                 className="border shadow-md rounded-lg p-4 transition-transform hover:scale-105 cursor-pointer"
//               >
//                 {/* ✅ Product Image */}
//                 <img
//                   src={product.photo}
//                   alt={product.name}
//                   className="w-full h-40 object-cover rounded-lg mb-3"
//                 />

//                 {/* ✅ Product Details */}
//                 <h3 className="text-lg font-semibold">{product.name}</h3>
//                 <p className="text-sm text-gray-500 mb-2">
//                   Category: {product.category}
//                 </p>
//                 <p className="text-sm text-gray-500 mb-2">
//                   Price: ₹{product.price}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   {product.description.substring(0, 60)}...
//                 </p>

//                 {/* ✅ Action Button */}
//                 {/* anshul */}
//                 {/* <NavLink to={`/product/${product._id}`}> */}

//                 {/* raj */}
//                 <NavLink to={`/product/viewdetails/${product._id}`}>
//                   <PrimaryButton className="mt-3 w-full py-2 text-sm">
//                     View Details
//                   </PrimaryButton>
//                 </NavLink>
//               </div>
//             ))
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { PrimaryButton, Title } from "../../../router";
// import { NavLink } from "react-router-dom";
// import { AiOutlinePlus } from "react-icons/ai";

// export const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   // ✅ Fetch Products from MongoDB
//   const fetchProducts = async () => {
//     const token = localStorage.getItem("token"); // ✅ Get token from localStorage
//     try {
//       const response = await axios.get("http://localhost:5001/api/service/user", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // ✅ Send token in Authorization header
//         },
//       });
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <>
//       <section className="bg-gradient-to-b bg-gray-100 text-black shadow-2xl p-8 rounded-3xl">
//         <div className="flex justify-between items-center mb-6">
//           <Title level={5} className="font-semibold text-xl">
//             Product Lists
//           </Title>
//           <NavLink to="/add">
//             <PrimaryButton className="flex items-center gap-3 px-5 py-3 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition-transform hover:scale-105">
//               <AiOutlinePlus size={20} />
//               <span>Create Product</span>
//             </PrimaryButton>
//           </NavLink>
//         </div>
//         <hr className="my-5 border-gray-500" />

//         {/* ✅ Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {products.length === 0 ? (
//             <p className="text-center col-span-3 text-gray-200">
//               No products available.
//             </p>
//           ) : (
//             products.map((product) => (
//               <div
//                 key={product._id}
//                 className="bg-white text-gray-800 border border-gray-300 shadow-lg rounded-xl p-5 transition-transform hover:scale-105 cursor-pointer"
//               >
//                 {/* ✅ Product Image */}
//                 <img
//                   src={product.photo}
//                   alt={product.name}
//                   className="w-full h-48 object-cover rounded-lg mb-4"
//                 />

//                 {/* ✅ Product Details */}
//                 <h3 className="text-lg font-bold text-blue-700 mb-1">
//                   {product.name}
//                 </h3>
//                 <p className="text-sm text-gray-500 mb-2">
//                   Category: {product.category}
//                 </p>
//                 <p className="text-sm text-gray-500 mb-2">
//                   Price: ₹{product.price}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   {product.description.substring(0, 60)}...
//                 </p>

//                 {/* ✅ Action Button */}
//                 <NavLink to={`/product/viewdetails/${product._id}`}>
//                   <PrimaryButton className="mt-4 w-full py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md">
//                     View Details
//                   </PrimaryButton>
//                 </NavLink>
//               </div>
//             ))
//           )}
//         </div>
//       </section>
//     </>
//   );
// };


//anshul frontend new 

import React, { useEffect, useState } from "react";
import axios from "axios";
import { PrimaryButton, Title } from "../../../router";
import { NavLink } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  
  let imageUrl = "";
  const fetchProducts = async () => {
    const token = localStorage.getItem("token"); 
    try {
      const response = await axios.get("http://localhost:5001/api/service/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
      });
      setProducts(response.data);
      imageUrl = response?.image?.filePath
    ? `http://localhost:5001/${response.image.filePath}`
    : "../images/home/hero.webp";
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <section className="bg-gradient-to-b from-blue-50 to-white text-black shadow-2xl p-8 rounded-3xl">
        <div className="flex justify-between items-center mb-6">
          <Title level={5} className="font-semibold text-2xl text-blue-700">
            Product Lists
          </Title>
          <NavLink to="/add">
            <PrimaryButton className="flex items-center gap-3 px-5 py-3 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-transform hover:scale-105">
              <AiOutlinePlus size={20} />
              <span>Create Product</span>
            </PrimaryButton>
          </NavLink>
        </div>
        <hr className="my-5 border-gray-300" />

     
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.length === 0 ? (
            <p className="text-center col-span-3 text-gray-500">
              No products available.
            </p>
          ) : (
            products.map((product) => (
              <div
                key={product._id}
                className="bg-white text-gray-800 border border-gray-200 shadow-lg rounded-xl p-5 transition-transform hover:scale-105 cursor-pointer hover:shadow-xl"
              >
               
                <div className="h-48 w-full rounded-lg overflow-hidden mb-4">
                  <img
                    src={
                      imageUrl ||
                      "../images/home/hero.webp"
                    }
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>

               
                <h3 className="text-lg font-bold text-blue-700 mb-1">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  Category: <span className="text-blue-600">{product.category}</span>
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  Price: <span className="text-green-600 font-bold">₹{product.price}</span>
                </p>
                <p className="text-sm text-gray-500">
                  {product.description?.substring(0, 60)}...
                </p>

             
                <NavLink to={`/product/viewdetails/${product._id}`}>
                  <PrimaryButton className="mt-4 w-full py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md">
                    View Details
                  </PrimaryButton>
                </NavLink>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
};
