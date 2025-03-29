// //raj
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Title } from "../../router";

// export const WinningBidList = () => {
//   const [wonServices, setWonServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchWonServices = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const { data } = await axios.get("http://localhost:5001/api/service/won-services", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setWonServices(data);
//       } catch (err) {
//         setError("Failed to fetch won services.");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWonServices();
//   }, []);

//   return (
//     <section className="shadow-s1 p-8 rounded-lg">
//       <div className="flex justify-between">
//         <Title level={5} className="font-normal">Winning Product Lists</Title>
//       </div>
//       <br />
//       {loading ? (
//         <div className="text-center py-5">Loading...</div>
//       ) : error ? (
//         <div className="text-center py-5 text-red-500">{error}</div>
//       ) : wonServices.length === 0 ? (
//         <div className="text-center py-5">
//           <p className="text-gray-500">No products found. Start by creating a new product!</p>
//         </div>
//       ) : (
//         <ul className="space-y-4">
//           {wonServices.map((service) => (
//             <li key={service._id} className="p-4 border rounded-lg shadow-sm">
//               <h3 className="text-lg font-semibold">{service.title}</h3>
//               <p className="text-gray-600">Price: ${service.biddingPrice}</p>
//               <p className="text-gray-600">Description: {service.description}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </section>
//   );
// };


//anshul froentend new

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Title } from "../../router";

export const WinningBidList = () => {
  const [wonServices, setWonServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [bidDetails, setBidDetails] = useState({});


  useEffect(() => {
    const fetchWonServices = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(
          "http://localhost:5001/api/service/won-services",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log("Won Services Data:", data);
        setWonServices(data);
        fetchBidDetailsForServices(data);
      } catch (err) {
        setError("Failed to fetch won services.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };


    const fetchBidDetailsForServices = async (services) => {
      const bidPromises = services.map(async (service) => {
        try {
         
          const bidResponse = await axios.get(
            `http://localhost:5001/api/bidding/${service._id}`
          );
          const bidData = bidResponse.data;

          if (bidData.length === 0) {
            return {
              serviceId: service._id,
              minPrice: 0,
              bidUser: null,
              serviceOwner: service.user || {},
            };
          }

       
          const bidPrices = bidData.map((bid) => ({
            price: bid.price,
            bidUser: {
              name: bid.user?.name || "Unknown",
              email: bid.user?.email || "N/A",
              photo: bid.user?.photo || "N/A",
            },
          }));

    
          const minBid = bidPrices.reduce((min, current) =>
            current.price < min.price ? current : min
          );

          return {
            serviceId: service._id,
            minPrice: minBid.price,
            bidUser: minBid.bidUser,
            serviceOwner: service.user || {},
          };
        } catch (error) {
          console.error(
            `Error fetching bid details for service ${service._id}:`,
            error
          );
          return {
            serviceId: service._id,
            minPrice: 0,
            bidUser: null,
            serviceOwner: service.user || {},
          };
        }
      });

      const resolvedBids = await Promise.all(bidPromises);
      const bidInfo = resolvedBids.reduce((acc, bid) => {
        acc[bid.serviceId] = bid;
        return acc;
      }, {});
      setBidDetails(bidInfo);
    };

    fetchWonServices();
  }, []);

  return (
    <section className="shadow-s1 p-8 rounded-lg">
      <div className="flex justify-between">
        <Title level={5} className="font-normal">Winning Product Lists</Title>
      </div>
      <br />
      {loading ? (
        <div className="text-center py-5">Loading...</div>
      ) : error ? (
        <div className="text-center py-5 text-red-500">{error}</div>
      ) : wonServices.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-gray-500">
            No products found. Start by creating a new product!
          </p>
        </div>
      ) : (
        <ul className="space-y-4">
          {wonServices.map((service) => {
            const bidInfo = bidDetails[service._id] || {};
            const { serviceOwner, bidUser, minPrice } = bidInfo;

            return (
              <li
                key={service._id}
                className="p-4 border rounded-lg shadow-sm bg-white hover:bg-gray-100 transition"
              >
              
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-gray-600">
                  Base Price: ₹{service.biddingPrice || service.price}
                </p>
                <p className="text-gray-600">Description: {service.description}</p>

            
                <p className="text-green-600 font-medium">
                  Sold At: ₹{minPrice || "N/A"}
                </p>

               
                <div className="mt-3 flex items-center space-x-3">
                  <img
                    src={serviceOwner?.photo || "https://via.placeholder.com/40"}
                    alt="Owner"
                    className="w-10 h-10 rounded-full border"
                  />
                  <div>
                    <p className="text-gray-700 font-medium">
                      Added By: {serviceOwner?.name || "Unknown"}
                    </p>
                    <p className="text-gray-500 text-sm">{serviceOwner?.email || "N/A"}</p>
                    <p className="text-gray-500 text-sm">{serviceOwner?.phoneNo || "N/A"}</p>
                  </div>
                </div>

               
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};




// anshul
// import React from "react";
// import { Title } from "../../router";

// export const WinningBidList = () => {
//   return (
//     <>
//       <section className="shadow-s1 p-8 rounded-lg">
//         <div className="flex justify-between">
//           <Title level={5} className=" font-normal">
//             Winning Product Lists
//           </Title>
//         </div>
//         <br />

//         <div className="text-center py-5">
//           <p className="text-gray-500">No products found. Start by creating a new product!</p>
//         </div>
//       </section>
//     </>
//   );
// };
