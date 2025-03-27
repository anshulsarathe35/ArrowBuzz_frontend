//raj
import { useEffect, useState } from "react";
import { TiEyeOutline } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";

export const Table = () => {
  const [services, setServices] = useState([]);

  // to delete service
  const deleteService = async (serviceId) => {
    try {
      const res = await fetch("http://localhost:5001/api/service/admin/delservices", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ serviceIds: [serviceId] }),
      });
  
      if (!res.ok) {
        throw new Error("Failed to delete service");
      }
  
      const data = await res.json();
      alert(data.message);
      // Refresh services after deletion
      setServices(services.filter((s) => s._id !== serviceId));
    } catch (error) {
      console.error("Error deleting service:", error.message);
    }
  };
  

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/service/admin/services", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch services");
        }

        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error.message);
      }
    };

    fetchServices();
  }, []);

  // return (
  //   <>
  //     <div className="relative overflow-x-auto rounded-lg">
  //       <table className="w-full text-sm text-left rtl:text-right text-gray-500">
  //         {/* Table Head */}
  //         <thead className="text-xs text-gray-700 uppercase bg-gray-100">
  //           <tr>
  //             <th scope="col" className="px-6 py-5">Title</th>
  //             <th scope="col" className="px-6 py-3">Customer Name</th>
  //             <th scope="col" className="px-6 py-3">Bid Amount (IND)</th>
  //             <th scope="col" className="px-6 py-3">Image</th>
  //             <th scope="col" className="px-6 py-3">Is Sold Out</th>
  //             <th scope="col" className="px-6 py-3">Verification</th>
  //             <th scope="col" className="px-6 py-3">Action</th>
  //           </tr>
  //         </thead>

  //         {/* Table Body */}
  //         <tbody>
  //           {services.length > 0 ? (
  //             services.map((service) => (
  //               <tr key={service._id} className="bg-white border-b capitalize hover:bg-gray-50">
  //                 {/* Title */}
  //                 <td className="px-6 py-4">{service.title}</td>

  //                 {/* Customer Name */}
  //                 <td className="px-6 py-4">{service.user.name}</td>

  //                 {/* Bidding Price */}
  //                 <td className="px-6 py-4">{service.biddingPrice.toFixed(2)}</td>

  //                 {/* Image */}
  //                 <td className="px-6 py-4">
  //                   <img className="w-10 h-10" src={"https://bidout-react.vercel.app/images/bg/order1.png"} alt="Service" />
  //                 </td>

  //                 {/* IsSoldout */}
  //                 <td className="px-6 py-4">
  //                   <div className="flex items-center">
  //                     <div className={`h-2.5 w-2.5 rounded-full ${service.isSoldout ? "bg-green" : "bg-red-400"} me-2`}></div>
  //                     {service.isSoldout ? "Yes" : "No"}
  //                   </div>
  //                 </td>

  //                 {/* Verification */}
  //                 <td className="px-6 py-4">
  //                   <div className="flex items-center">
  //                     <button>
  //                       <NavLink to={`/product/admin/update/${service._id}`} type="button" className="m-2 p-2 rounded-lg bg-green text-black text-md">
  //                       Verify and Commission
  //                       </NavLink>
  //                     </button>
  //                     <div className={`h-2.5 w-2.5 rounded-full ${service.isverify ? "bg-green" : "bg-red-400"} me-2`}></div>
  //                     {service.isverify ? "Verified" : "Not Verified"}
  //                   </div>
  //                 </td>


  //                 {/* Actions */}
  //                 <td className="px-6 py-4 text-center flex items-center gap-3 mt-1">
  //                   {/* View */}
  //                   {/* /details/:id */}
  //                   <NavLink to={`/details/${service._id}`} type="button" className="font-medium text-indigo-500">
  //                     <TiEyeOutline size={25} />
  //                   </NavLink>

  //                   {/* Edit */}
  //                   {/* /product/update/:id */}
  //                   <NavLink to={`/product/update/${service._id}`} type="button" className="font-medium text-green">
  //                     <CiEdit size={25} />
  //                   </NavLink>

  //                   {/* Delete */}
  //                   <button
  //                     className="font-medium text-red-500"
  //                     onClick={() => {
  //                       if (window.confirm("Are you sure you want to delete this service?")) {
  //                         deleteService(service._id);
  //                       }
  //                     }}
  //                   >
  //                     <MdOutlineDeleteOutline size={25} />
  //                   </button>
  //                 </td>
  //               </tr>
  //             ))
  //           ) : (
  //             <tr>
  //               <td colSpan="7" className="text-center py-4">No services found</td>
  //             </tr>
  //           )}
  //         </tbody>
  //       </table>
  //     </div>
  //   </>
  // );
  return (
    <>
      <div className="relative overflow-x-auto rounded-lg shadow-lg bg-white">
        <table className="w-full text-sm text-left text-gray-700">

          <thead className="text-xs uppercase bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800">
            <tr>
              <th scope="col" className="px-6 py-4 font-semibold">Title</th>
              <th scope="col" className="px-6 py-4 font-semibold">Customer Name</th>
              <th scope="col" className="px-6 py-4 font-semibold">Bid Amount (₹)</th>
              <th scope="col" className="px-6 py-4 font-semibold">Image</th>
              <th scope="col" className="px-6 py-4 font-semibold">Is Sold Out</th>
              <th scope="col" className="px-6 py-4 font-semibold">Verification</th>
              <th scope="col" className="px-6 py-4 font-semibold text-center">Action</th>
            </tr>
          </thead>
  
   
          <tbody>
            {services.length > 0 ? (
              services.map((service) => (
                <tr
                  key={service._id}
                  className="bg-gray-100 border-b transition duration-300 ease-in-out hover:bg-blue-50"
                >
                 
                  <td className="px-6 py-4 font-medium text-gray-700">{service.title}</td>
  
             
                  <td className="px-6 py-4">{service.user.name}</td>
  
                
                  <td className="px-6 py-4 font-semibold text-blue-600">
                    ₹{service.biddingPrice.toFixed(2)}
                  </td>
  
                 
                  <td className="px-6 py-4">
                    <img
                      className="w-12 h-12 object-cover rounded-lg border border-gray-200"
                      src={"https://bidout-react.vercel.app/images/bg/order1.png"}
                      alt="Service"
                    />
                  </td>
  
             
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-3 w-3 rounded-full ${
                          service.isSoldout ? "bg-green" : "bg-red-400"
                        }`}
                      />
                      <span className={`${service.isSoldout ? "text-green-600" : "text-red-500"}`}>
                        {service.isSoldout ? "Yes" : "No"}
                      </span>
                    </div>
                  </td>
  
              
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <NavLink
                        to={`/product/admin/update/${service._id}`}
                        className="bg-blue-500 text-white px-4 py-1.5 rounded-lg hover:bg-blue-600 transition"
                      >
                        Verify & Commission
                      </NavLink>
                      <div
                        className={`h-3 w-3 rounded-full ${
                          service.isverify ? "bg-green-500" : "bg-red-400"
                        }`}
                      />
                      <span
                        className={`${service.isverify ? "text-green-600" : "text-red-500"}`}
                      >
                        {service.isverify ? "Verified" : "Not Verified"}
                      </span>
                    </div>
                  </td>
  
                  
                  <td className="px-6 py-4 text-center flex items-center justify-center gap-3">
                
                    <NavLink
                      to={`/details/${service._id}`}
                      className="text-blue-500 hover:text-blue-700 transition"
                    >
                      <TiEyeOutline size={25} />
                    </NavLink>
  
               
                    <NavLink
                      to={`/product/update/${service._id}`}
                      className="text-green-500 hover:text-green-700 transition"
                    >
                      <CiEdit size={25} />
                    </NavLink>
  
                  
                    <button
                      className="text-red-500 hover:text-red-700 transition"
                      onClick={() => {
                        if (window.confirm("Are you sure you want to delete this service?")) {
                          deleteService(service._id);
                        }
                      }}
                    >
                      <MdOutlineDeleteOutline size={25} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No services found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
  
};






//anshul
// import { TiEyeOutline } from "react-icons/ti";
// import { CiEdit } from "react-icons/ci";
// import { MdOutlineDeleteOutline } from "react-icons/md";
// import { NavLink } from "react-router-dom";

// export const Table = () => {
//   return (
//     <>
//       <div className="relative overflow-x-auto rounded-lg">
//         <table className="w-full text-sm text-left rtl:text-right text-gray-500">
//           <thead className="text-xs text-gray-700 uppercase bg-gray-100">
//             <tr>
//               <th scope="col" className="px-6 py-5">
//                 Title
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Bidding ID
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Bid Amount(USD)
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Image
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Status
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="bg-white border-b hover:bg-gray-50">
//               <td className="px-6 py-4">Auction Title 01</td>
//               <td className="px-6 py-4">Bidding_HvO253gT</td>
//               <td className="px-6 py-4">1222.8955</td>
//               <td className="px-6 py-4">
//                 <img className="w-10 h-10" src="https://bidout-react.vercel.app/images/bg/order1.png" alt="Jeseimage" />
//               </td>
//               <td className="px-6 py-4">
//                 <div className="flex items-center">
//                   <div className="h-2.5 w-2.5 rounded-full bg-green me-2"></div> Success
//                 </div>
//               </td>
//               <td className="px-6 py-4 text-center flex items-center gap-3 mt-1">
//                 <NavLink to="#" type="button" className="font-medium text-indigo-500">
//                   <TiEyeOutline size={25} />
//                 </NavLink>
//                 <NavLink to="/update-product" type="button" className="font-medium text-green">
//                   <CiEdit size={25} />
//                 </NavLink>
//                 <button className="font-medium text-red-500">
//                   <MdOutlineDeleteOutline size={25} />
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

/* export const Table = ({ products, handleSellProduct, delProduct, isAdmin, isWon }) => {
  return (
    <>
      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-5">
                S.N
              </th>
              <th scope="col" className="px-6 py-5">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Commission
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Bid Amount(USD)
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              {isWon && (
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              )}
              {!isWon && (
                <>
                  <th scope="col" className="px-6 py-3">
                    Verify
                  </th>
                  {!isAdmin && (
                    <th scope="col" className="px-6 py-3">
                      Sold
                    </th>
                  )}
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr className="bg-white border-b hover:bg-gray-50" key={index}>
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{product?.title?.slice(0, 15)}...</td>
                <td className="px-6 py-4">{product?.commission}%</td>
                <td className="px-6 py-4">{product?.price}</td>
                <td className="px-6 py-4">{product?.biddingPrice}</td>
                <td className="px-6 py-4">
                  <img className="w-10 h-10" src={product?.image?.filePath} alt="Jeseimage" />
                </td>
                {!isWon && (
                  <>
                    <td className="px-6 py-4">
                      {product?.isverify ? (
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green me-2"></div> Yes
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> No
                        </div>
                      )}
                    </td>
                    {!isAdmin && (
                      <td className="py-3 px-6">
                        {product?.isSoldout ? (
                          <button className="bg-red-500 text-white py-1 px-3 rounded-lg" disabled>
                            Sold Out
                          </button>
                        ) : (
                          <button
                            className={`py-1 px-3 rounded-lg ${product?.isverify ? "bg-green text-white" : "bg-gray-400 text-gray-700 cursor-not-allowed"}`}
                            onClick={() => handleSellProduct(product._id)}
                            disabled={!product?.isverify}
                          >
                            Sell
                          </button>
                        )}
                      </td>
                    )}
                    <td className="px-6 py-4 text-center flex items-center gap-3 mt-1">
                      <NavLink to="#" type="button" className="font-medium text-indigo-500">
                        <TiEyeOutline size={25} />
                      </NavLink>
                      {isAdmin ? (
                        <NavLink to={`/product/admin/update/${product._id}`} className="font-medium text-green">
                          <CiEdit size={25} />
                        </NavLink>
                      ) : (
                        <NavLink to={`/product/update/${product._id}`} className="font-medium text-green">
                          <CiEdit size={25} />
                        </NavLink>
                      )}
                      {!isAdmin && (
                        <button onClick={() => delProduct(product._id)} className="font-medium text-red-500">
                          <MdOutlineDeleteOutline size={25} />
                        </button>
                      )}
                    </td>
                  </>
                )}
                {isWon && (
                  <td className="py-3 px-6">
                    <button className="bg-green text-white py-1 px-3 rounded-lg" disabled>
                      Victory
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}; */
