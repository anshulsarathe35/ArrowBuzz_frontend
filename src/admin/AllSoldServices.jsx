// import { useEffect, useState } from "react";
// import { Title } from "../router";

// export const AllSoldServices = () => {
//   const [soldServices, setSoldServices] = useState([]);

//   useEffect(() => {
//     const fetchSoldServices = async () => {
//       try {
//         const response = await fetch("http://localhost:5001/api/service/sold");
//         const data = await response.json();
//         console.log(data);
//         setSoldServices(data);
//       } catch (error) {
//         console.error("Error fetching sold services:", error);
//       }
//     };

//     fetchSoldServices();
//   }, []);

//   return (
//     <section className="p-8 bg-gradient-to-b from-white to-blue-50 min-h-screen">
//       <Title level={5} className="font-semibold text-blue-700 mb-4">All Sold Services</Title>
//       <div className="overflow-x-auto rounded-lg shadow-lg">
//         <table className="min-w-full border border-gray-200 rounded-lg bg-gray-100">
//           {/* Table Head */}
//           <thead className="bg-gradient-to-r from-blue-100 to-blue-300 text-blue-800">
//             <tr>
//               <th className="px-6 py-3 border text-sm font-semibold">Service Name</th>
//               <th className="px-6 py-3 border text-sm font-semibold">Customer Name</th>
//               <th className="px-6 py-3 border text-sm font-semibold">Base Price (₹)</th>
//               <th className="px-6 py-3 border text-sm font-semibold">Sold To</th>
//               <th className="px-6 py-3 border text-sm font-semibold">Sold at</th>
//               {/* <th className="px-6 py-3 border text-sm font-semibold">Actions</th> */}
//             </tr>
//           </thead>
  
//           {/* Table Body */}
//           <tbody>
//             {soldServices.length > 0 ? (
//               soldServices.map((service) => (
//                 <tr
//                   key={service._id}
//                   className="text-center capitalize bg-white hover:bg-blue-50 transition"
//                 >
//                   <td className="px-6 py-3 border text-gray-700">{service.title}</td>
//                   <td className="px-6 py-3 border text-gray-700">{service.user.name}</td>
//                   <td className="px-6 py-3 border text-blue-600 font-medium">
//                     ₹{service.price.toFixed(2)}
//                   </td>
//                   <td className="px-6 py-3 border text-gray-700">
//                     {service.soldToName || <span className="text-red-500">N/A</span>}
//                   </td>
//                   {/* Uncomment if you want to add actions */}
//                   {/* <td className="px-6 py-3 border">
//                     <button className="bg-blue-500 text-white px-4 py-1 rounded-md mr-2 hover:bg-blue-600 transition">
//                       Edit
//                     </button>
//                     <button className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition">
//                       Delete
//                     </button>
//                   </td> */}
//                   <td className="px-6 py-3 border text-blue-600 font-medium">
//                     ₹{service.price.toFixed(2)}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
//                   No sold services found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
  
// };


//anshul fronetned new 

import { useEffect, useState } from "react";
import { Title } from "../router";

export const AllSoldServices = () => {
  const [soldServices, setSoldServices] = useState([]);
  const [soldPrices, setSoldPrices] = useState({}); 

  useEffect(() => {
    const fetchSoldServices = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/service/sold");
        const data = await response.json();
        setSoldServices(data);

        const pricePromises = data.map(async (service) => {
          try {
            const serviceResponse = await fetch(
              `http://localhost:5001/api/bidding/${service._id}`
            );
            const serviceData = await serviceResponse.json();
      
            const prices = serviceData.map((item) => item.price); 
        
            const minPrice = prices.length > 0 ? Math.min(...prices) : 0;
        
            return { id: service._id, price: minPrice };
          } catch (error) {
            console.error(`Error fetching price for service ${service._id}:`, error);
            return { id: service._id, price: 0 };
          }
        });
        

        const prices = await Promise.all(pricePromises);
        const priceMap = {};
        prices.forEach(({ id, price }) => {
          priceMap[id] = price;
        });
        setSoldPrices(priceMap);
      } catch (error) {
        console.error("Error fetching sold services:", error);
      }
    };

    fetchSoldServices();
  }, []);

  return (
    <section className="p-8 bg-gradient-to-b from-white to-blue-50 min-h-screen">
      <Title level={5} className="font-semibold text-blue-700 mb-4">
        All Sold Services
      </Title>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full border border-gray-200 rounded-lg bg-gray-100">
          {/* Table Head */}
          <thead className="bg-gradient-to-r from-blue-100 to-blue-300 text-blue-800">
            <tr>
              <th className="px-6 py-3 border text-sm font-semibold">Service Name</th>
              <th className="px-6 py-3 border text-sm font-semibold">Customer Name</th>
              <th className="px-6 py-3 border text-sm font-semibold">Base Price (₹)</th>
              <th className="px-6 py-3 border text-sm font-semibold">Sold To</th>
              <th className="px-6 py-3 border text-sm font-semibold">Sold at (Min Price)</th>
            </tr>
          </thead>

          <tbody>
            {soldServices.length > 0 ? (
              soldServices.map((service) => (
                <tr
                  key={service._id}
                  className="text-center capitalize bg-white hover:bg-blue-50 transition"
                >
                  <td className="px-6 py-3 border text-gray-700">{service.title}</td>
                  <td className="px-6 py-3 border text-gray-700">{service.user.name}</td>
                  <td className="px-6 py-3 border text-blue-600 font-medium">
                    ₹{service.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-3 border text-gray-700">
                    {service.soldToName || <span className="text-red-500">N/A</span>}
                  </td>
                  <td className="px-6 py-3 border text-blue-600 font-medium">
                    ₹{soldPrices[service._id]?.toFixed(2) || "N/A"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  No sold services found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
