// // new raj
// import {  Caption, Title } from "../../router";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// export const SingleViewDetails = () => {
//   const [bidders, setBidders] = useState([]);
//   const [service, setService] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const { id: serviceId } = useParams();
//   const [timeLeft, setTimeLeft] = useState(null);
// //   const [soldToName, setsoldToName] = useState("");
  
//   // let soldToName = "";


//   useEffect(() => {
//     const fetchService = async () => {
//       try {
//         const { data } = await axios.get(`http://localhost:5001/api/service/${serviceId}`);
//         setService(data);
//         console.log(data);
//         startAuctionTimer(data);
//       } catch (error) {
//         console.error("Error fetching service:", error);
//       }
//     };
//     fetchService();
//   }, [serviceId]);
  
//   const handleDeleteService = async () => {
  
//     const confirmDelete = window.confirm("Are you sure you want to delete this service?");
//     if (confirmDelete) {
//       const token = localStorage.getItem("token");
//       try {
//         const response = await axios.delete(`http://localhost:5001/api/service/${serviceId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         alert(response.data.message || "Service deleted successfully!");
//         window.location.href = "/"; 
//       } catch (error) {
//         console.error("Error deleting service:", error);
//         alert(error.response?.data?.error || "Failed to delete service.");
//       }
//     }
//   };


//   const startAuctionTimer = (serviceData) => {
//     const { auctionDays, auctionHours, auctionMinutes, createdAt } = serviceData;
  
//     const auctionEndTime = new Date(createdAt);
//     auctionEndTime.setDate(auctionEndTime.getDate() + auctionDays);
//     auctionEndTime.setHours(auctionEndTime.getHours() + auctionHours);
//     auctionEndTime.setMinutes(auctionEndTime.getMinutes() + auctionMinutes);
  
//     const updateTimer = () => {
//       const now = new Date();
//       const diff = auctionEndTime - now;
  
//       if (diff <= 0) {
//         setTimeLeft("Auction Ended");
//         return;
//       }
  
//       const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
//       setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
//     };
  
//     updateTimer();
//     const timerInterval = setInterval(updateTimer, 1000);
  
//     return () => clearInterval(timerInterval); 
//   };
  

//   useEffect(() => {
//     const fetchBidders = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(`http://localhost:5001/api/bidding/${serviceId}`);
//         const sortedBidders = response.data.sort((a, b) => b.price - a.price);
//         setBidders(sortedBidders);
//       } catch (error) {
//         console.error("Error fetching bidders:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBidders();
//   }, [serviceId]);

//   //old raj handler
//   // const handleSellService = async (bidderId) => {
//   //   console.log("Selling service with ID:", serviceId, "to bidder:", bidderId);
//   //   const token = localStorage.getItem("token");
//   //   try {
//   //     const response = await axios.post(
//   //       "http://localhost:5001/api/bidding/sell",
//   //       { serviceId, bidderId },
//   //       {
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //           Authorization: `Bearer ${token}`,
//   //         },
//   //       }
//   //     );

//   //     alert(response.data.message || "Service sold successfully!");
//   //     window.location.reload();
//   //   } catch (error) {
//   //     console.error("Error selling service:", error);
//   //     alert(error.response?.data?.error || "Failed to sell service.");
//   //   }
//   // };
//   const handleSellService = async (bidderId, price) => {
//     console.log("Selling service with ID:", serviceId, "to bidder:", bidderId, "with price:", price);
//     const token = localStorage.getItem("token");
//     try {
//       const response = await axios.post(
//         "http://localhost:5001/api/bidding/sell",
//         { serviceId, bidderId, price }, 
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
  
//       alert(response.data.message || "Service sold successfully!");
//       window.location.reload();
//     } catch (error) {
//       console.error("Error selling service:", error);
//       alert(error.response?.data?.error || "Failed to sell service.");
//     }
//   };
  

//   return (
//     <section className="bg-white shadow-s1 p-8 rounded-xl">
//       {service && (
//         <div className="description-tab shadow-s3 p-8 rounded-md mb-8">
//           <Title level={4}>Service Details</Title>
//           <br />
//           <Caption className="leading-7 capitalize">{service.description || "No description available."}</Caption>
//           <br />
//           <Title level={4}>Product Overview</Title>
//           <div className="flex justify-between gap-5">
//             <div className="mt-4 capitalize w-1/2">
//               <div className="flex justify-between border-b py-3">
//                 <Title>Category</Title>
//                 <Caption>{service.category}</Caption>
//               </div>
//               <div className="flex justify-between border-b py-3">
//                 <Title>Original Price</Title>
//                 <Caption>₹{service.price}</Caption>
//               </div>
//               <div className="flex justify-between py-3">
//                 <Title>Created At</Title>
//                 <Caption>{new Date(service.createdAt).toLocaleString()}</Caption>
//               </div>
//               <div className="flex justify-between py-3">
//                 <Title>Sold: </Title>
//                 <Caption>{service.soldToName ? service.soldToName : "No One"}</Caption>
               
//               </div>
//               {/* anshul added  */}
//               {/* <div className="flex justify-between py-3">
//                 <Title>Contact: </Title>
//                 <Caption>{service.soldToName ? service.soldToName : "No One"}</Caption>
               
//               </div> */}
//               <div className="flex justify-between py-3">
//                 <Title>Is Sold Out:</Title>
//                 <Caption>{service.isSoldout ? "True" : "False"}</Caption>
//               </div>
//               <div className="flex justify-between py-3">
//                 <Title>Updated At</Title>
//                 <Caption>{new Date(service.updatedAt).toLocaleString()}</Caption>
//               </div>
//               <div className="flex justify-between py-3">
//                 <Title>Time Left</Title>
//                 <Caption className="text-red-400">{timeLeft}</Caption>
//               </div>
              
//               <div className="flex justify-between py-3">
         
//               <button
//                 type="button"
//                 className="font-medium text-xl bg-green m-2 p-2 hover:text-2xl rounded-lg"
//                 onClick={() => {
//                   if (timeLeft === "Auction Ended") {
//                     alert("Auction ended! You cannot edit this service.");
//                   } else {
//                     window.location.href = `/product/update/${service._id}`;
//                   }
//                 }}
//               >
//                 Update Service
//                 </button>

             
//               <button
//                 type="button"
//                 className="font-medium text-xl bg-red-500 text-black m-2 p-2 rounded-lg hover:text-2xl"
//                 onClick={handleDeleteService}
//               >
//                 Delete Service
//               </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <Title level={5} className="font-normal mb-5">Bidders List</Title>
//       <hr className="my-5" />

//       {loading ? (
//         <p className="text-center text-gray-500">Loading bidders...</p>
//       ) : bidders.length === 0 ? (
//         <p className="text-center text-gray-500">No bidders yet.</p>
//       ) : (
//         <div className="relative overflow-x-auto rounded-lg">
//           <table className="w-full text-sm text-left text-gray-500">
//             <thead className="text-xs text-gray-700 uppercase bg-gray-100">
//               <tr>
//                 <th className="px-6 py-5">Date</th>
//                 <th className="px-6 py-3">Bid Amount (Rupees)</th>
//                 <th className="px-6 py-3">Bidder(s) Name</th>
           
//                 <th className="px-6 py-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bidders.map((bidder) => (
//                 <tr key={bidder._id} className="bg-white border-b hover:bg-gray-50">
//                   <td className="px-6 py-4">{new Date(bidder.createdAt).toLocaleString()}</td>
//                   <td className="px-6 py-4">₹{bidder.price}</td>
//                   <td className="px-6 py-4 capitalize">{bidder.user?.name || "Unknown"}</td>
          
//                   <td className="px-6 py-4">
//                     {service?.isSoldout ? (
//                       <span className="text-red-500 font-semibold">Sold</span>
//                     ) : (
//                       <button onClick={() => handleSellService(bidder._id)} className="text-blue-600 hover:underline">
//                         Sell
//                       </button>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </section>
//   );
// };


//anshul fronetend with user details
// new raj
import { Caption, Title } from "../../router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const SingleViewDetails = () => {
  const [bidders, setBidders] = useState([]);
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id: serviceId } = useParams();
  const [timeLeft, setTimeLeft] = useState(null);
  const [soldToPhoneNo, setSoldToPhoneNo] = useState(""); // ✅ Added phoneNo state

  useEffect(() => {
    const fetchService = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5001/api/service/${serviceId}`
        );
        setService(data);
        console.log(data);

        // if (data.isSoldout && data.soldToId) {
        //   fetchSoldToPhoneNo(data.soldToId); 
        // }
        fetchSoldToPhoneNo(data.soldTo); 
        startAuctionTimer(data);
      } catch (error) {
        console.error("Error fetching service:", error);
      }
    };
    fetchService();
  }, [serviceId]);

  const fetchSoldToPhoneNo = async (bidderId) => {
    // console.log("bidderid: " + bidderId)
    try {
      const response = await axios.get(
        `http://localhost:5001/api/users/get-particularuser/${bidderId}`
      );
      // console.log(response) 
      setSoldToPhoneNo(response.data.phoneNo || "Not Available");
    } catch (error) {
      console.error("Error fetching phone number:", error);
      setSoldToPhoneNo("Not Available");
    }
  };

  const handleDeleteService = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this service?"
    );
    if (confirmDelete) {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.delete(
          `http://localhost:5001/api/service/${serviceId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        alert(response.data.message || "Service deleted successfully!");
        window.location.href = "/";
      } catch (error) {
        console.error("Error deleting service:", error);
        alert(error.response?.data?.error || "Failed to delete service.");
      }
    }
  };

  const startAuctionTimer = (serviceData) => {
    const { auctionDays, auctionHours, auctionMinutes, createdAt } = serviceData;

    const auctionEndTime = new Date(createdAt);
    auctionEndTime.setDate(auctionEndTime.getDate() + auctionDays);
    auctionEndTime.setHours(auctionEndTime.getHours() + auctionHours);
    auctionEndTime.setMinutes(auctionEndTime.getMinutes() + auctionMinutes);

    const updateTimer = () => {
      const now = new Date();
      const diff = auctionEndTime - now;

      if (diff <= 0) {
        setTimeLeft("Auction Ended");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  };

  useEffect(() => {
    const fetchBidders = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5001/api/bidding/${serviceId}`
        );
        const sortedBidders = response.data.sort((a, b) => b.price - a.price);
        setBidders(sortedBidders);
      } catch (error) {
        console.error("Error fetching bidders:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBidders();
  }, [serviceId]);

  const handleSellService = async (bidderId, price) => {
    console.log(
      "Selling service with ID:",
      serviceId,
      "to bidder:",
      bidderId,
      "with price:",
      price
    );
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:5001/api/bidding/sell",
        { serviceId, bidderId, price },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(response.data.message || "Service sold successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error selling service:", error);
      alert(error.response?.data?.error || "Failed to sell service.");
    }
  };

  return (
    <section className="bg-white shadow-s1 p-8 rounded-xl">
      {service && (
        <div className="description-tab shadow-s3 p-8 rounded-md mb-8">
          <Title level={4}>Service Details</Title>
          <br />
          <Caption className="leading-7 capitalize">
            {service.description || "No description available."}
          </Caption>
          <br />
          <Title level={4}>Product Overview</Title>
          <div className="flex justify-between gap-5">
            <div className="mt-4 capitalize w-1/2">
              <div className="flex justify-between border-b py-3">
                <Title>Category</Title>
                <Caption>{service.category}</Caption>
              </div>
              <div className="flex justify-between border-b py-3">
                <Title>Original Price</Title>
                <Caption>₹{service.price}</Caption>
              </div>
              <div className="flex justify-between py-3">
                <Title>Created At</Title>
                <Caption>{new Date(service.createdAt).toLocaleString()}</Caption>
              </div>
              <div className="flex justify-between py-3">
                <Title>Sold To</Title>
                <Caption>
                  {service.soldToName ? service.soldToName : "No One"}
                </Caption>
              </div>
              {service.isSoldout && (
                <div className="flex justify-between py-3">
                  <Title>Contact Info</Title>
                  <Caption>{soldToPhoneNo}</Caption>
                </div>
              )}

              <div className="flex justify-between py-3">
                <Title>Is Sold Out:</Title>
                <Caption>{service.isSoldout ? "True" : "False"}</Caption>
              </div>
              <div className="flex justify-between py-3">
                <Title>Updated At</Title>
                <Caption>{new Date(service.updatedAt).toLocaleString()}</Caption>
              </div>
              <div className="flex justify-between py-3">
                <Title>Time Left</Title>
                <Caption className="text-red-400">{timeLeft}</Caption>
              </div>

              <div className="flex justify-between py-3">
                <button
                  type="button"
                  className="font-medium text-xl bg-green m-2 p-2 hover:text-2xl rounded-lg"
                  onClick={() => {
                    if (timeLeft === "Auction Ended") {
                      alert("Auction ended! You cannot edit this service.");
                    } else {
                      window.location.href = `/product/update/${service._id}`;
                    }
                  }}
                >
                  Update Service
                </button>

                <button
                  type="button"
                  className="font-medium text-xl bg-red-500 text-black m-2 p-2 rounded-lg hover:text-2xl"
                  onClick={handleDeleteService}
                >
                  Delete Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Title level={5} className="font-normal mb-5">Bidders List</Title>
      <hr className="my-5" />

      {loading ? (
        <p className="text-center text-gray-500">Loading bidders...</p>
      ) : bidders.length === 0 ? (
        <p className="text-center text-gray-500">No bidders yet.</p>
      ) : (
        <div className="relative overflow-x-auto rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="px-6 py-5">Date</th>
                <th className="px-6 py-3">Bid Amount (Rupees)</th>
                <th className="px-6 py-3">Bidder(s) Name</th>
                <th className="px-6 py-3">Contact No.</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bidders.map((bidder) => (
                <tr
                  key={bidder._id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4">
                    {new Date(bidder.createdAt).toLocaleString()}
                  </td>
                  <td className="px-6 py-4">₹{bidder.price}</td>
                  <td className="px-6 py-4 capitalize">
                    {bidder.user?.name || "Unknown"}
                  </td>
                  <td className="px-6 py-4">{bidder.user?.phoneNo || "-"}</td>
                  {/* <td className="px-6 py-4">
                    {service?.isSoldout ? (
                      <span className="text-red-500 font-semibold">Sold</span>
                    ) : (
                      <button
                        onClick={() =>
                          handleSellService(bidder._id, bidder.price)
                        }
                        className="text-blue-600 hover:underline"
                      >
                        Sell
                      </button>
                    )}
                  </td> */}
                  <td className="px-6 py-4">
  {service?.isSoldout ? (
    <span className="text-red-500 font-semibold">Sold</span>
  ) : timeLeft === "Auction Ended" ? (
    <span className="text-gray-500 font-semibold">Auction Ended</span>
  ) : (
    <button
      onClick={() => handleSellService(bidder._id, bidder.price)}
      className="text-blue-600 hover:underline"
    >
      Sell
    </button>
  )}
</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};







// old raj
// import { PrimaryButton, Caption, Title } from "../../router";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// export const SingleViewDetails = () => {
//   const [bidders, setBidders] = useState([]);
//   const [service, setService] = useState(null);
//   const [topBidder, setTopBidder] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const { id: serviceId } = useParams();  // Explicitly renaming id to serviceId
//   const [timeLeft, setTimeLeft] = useState(null);

//   useEffect(() => {
//     const fetchService = async () => {
//       try {
//         const { data } = await axios.get(`http://localhost:5001/api/service/${serviceId}`);
//         setService(data);

//         const serviceEndTime = new Date(data.endTime).getTime();
//         const interval = setInterval(() => {
//           const currentTime = new Date().getTime();
//           const remainingTime = serviceEndTime - currentTime;
//           if (remainingTime <= 0) {
//             clearInterval(interval);
//             setTimeLeft("Time's up!");
//           } else {
//             const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
//             const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
//             const seconds = Math.floor((remainingTime / 1000) % 60);
//             setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
//           }
//         }, 1000);

//         return () => clearInterval(interval);
//       } catch (error) {
//         console.error("Error fetching service:", error);
//       }
//     };
//     fetchService();
//   }, [serviceId]);

//   useEffect(() => {
//     const fetchBidders = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(`http://localhost:5001/api/bidding/${serviceId}`);
//         const sortedBidders = response.data.sort((a, b) => b.price - a.price);
//         setBidders(sortedBidders);
//         if (sortedBidders.length > 0) setTopBidder(sortedBidders[0]);
//       } catch (error) {
//         console.error("Error fetching bidders:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBidders();
//   }, [serviceId]);

//   // Handle service selling by passing the chosen bidderId
//   const handleSellService = async (bidderId) => {
//     console.log("Selling service with ID:", serviceId, "to bidder:", bidderId);
//     const token = localStorage.getItem("token"); // ✅ Get token from localStorage
//     try {
//       const response = await axios.post(
//         "http://localhost:5001/api/bidding/sell",
//         {
//           serviceId,
//           bidderId,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`, // ✅ Send token in Authorization header
//           },
//         }
//       );
  
//       alert(response.data.message || "Service sold successfully!");
//       window.location.reload(); // Refresh to reflect changes
//     } catch (error) {
//       console.error("Error selling service:", error);
//       alert(error.response?.data?.error || "Failed to sell service.");
//     }
//   };
  



// //   const handleSellService = async (bidderId) => {
// //     console.log("Selling service with ID:", serviceId, "to bidder:", bidderId);
// //     const token = localStorage.getItem("token"); // ✅ Get token from localStorage
// //     try {
// //       const response = await axios.post("http://localhost:5001/api/bidding/sell", {
// //         serviceId,
// //         bidderId,
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${token}`, // ✅ Send token in Authorization header
// //         },
// //       });

// //       alert(response.data.message || "Service sold successfully!");
// //       window.location.reload(); // Refresh to reflect changes
// //     } catch (error) {
// //       console.error("Error selling service:", error);
// //       alert(error.response?.data?.error || "Failed to sell service.");
// //     }
// //   };

//   return (
//     <section className="bg-white shadow-s1 p-8 rounded-xl">
//       {service && (
//         <div className="description-tab shadow-s3 p-8 rounded-md mb-8">
//           <Title level={4}>Service Details</Title>
//           <br />
//           <Caption className="leading-7 capitalize">{service.description || "No description available."}</Caption>
//           <br />
//           <Title level={4}>Product Overview</Title>
//           <div className="flex justify-between gap-5">
//             <div className="mt-4 capitalize w-1/2">
//               <div className="flex justify-between border-b py-3">
//                 <Title>Category</Title>
//                 <Caption>{service.category}</Caption>
//               </div>
//               <div className="flex justify-between border-b py-3">
//                 <Title>Original Price</Title>
//                 <Caption>₹{service.price}</Caption>
//               </div>
//               <div className="flex justify-between py-3">
//                 <Title>Created At</Title>
//                 <Caption>{new Date(service.createdAt).toLocaleString()}</Caption>
//               </div>
//               <div className="flex justify-between py-3">
//                 <Title>Sold: </Title>
//                 <Caption>{service.soldTo}</Caption>
//               </div>
//               <div className="flex justify-between py-3">
//                 <Title>Is Sold Out : </Title>
//                 <Caption>{service.isSoldout}</Caption>
//               </div>
//               <div className="flex justify-between py-3">
//                 <Title>Updated At</Title>
//                 <Caption>{new Date(service.updatedAt).toLocaleString()}</Caption>
//               </div>
//               <div className="flex justify-between py-3">
//                 <Title>Time Left</Title>
//                 <Caption>{timeLeft}</Caption>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <Title level={5} className="font-normal mb-5">Bidders List</Title>
//       <hr className="my-5" />

//       {loading ? (
//         <p className="text-center text-gray-500">Loading bidders...</p>
//       ) : bidders.length === 0 ? (
//         <p className="text-center text-gray-500">No bidders yet.</p>
//       ) : (
//         <div className="relative overflow-x-auto rounded-lg">
//           <table className="w-full text-sm text-left text-gray-500">
//             <thead className="text-xs text-gray-700 uppercase bg-gray-100">
//               <tr>
//                 <th className="px-6 py-5">Date</th>
//                 <th className="px-6 py-3">Bid Amount (Rupees)</th>
//                 <th className="px-6 py-3">User</th>
//                 <th className="px-6 py-3">Auto</th>
//                 <th className="px-6 py-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//              {/* In the map function, ensure the correct bidderId is passed */}
//             {bidders.map((bidder) => (
//             <tr key={bidder._id} className="bg-white border-b hover:bg-gray-50">
//                 <td className="px-6 py-4">{new Date(bidder.createdAt).toLocaleString()}</td>
//                 <td className="px-6 py-4">₹{bidder.price}</td>
//                 <td className="px-6 py-4 capitalize">{bidder.user?.name || "Unknown"}</td>
//                 <td className="px-6 py-4">{bidder.autoBid ? "Yes" : "No"}</td>
//                 <td className="px-6 py-4">
//                 <button onClick={() => handleSellService(bidder._id)}>Sell</button>
//                 </td>
//             </tr>
//             ))}

//  {/* Backend: No changes needed as the sell logic is already correct, just ensure `bidderId` is coming correctly from frontend */}

//             </tbody>
//           </table>
//         </div>
//       )}
//     </section>
//   );
// };
