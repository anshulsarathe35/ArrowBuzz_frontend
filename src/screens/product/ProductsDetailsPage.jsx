// //raj
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { Body, Caption, Container, Title } from "../../router";
// // import { AiOutlinePlus } from "react-icons/ai";
// import { commonClassNameOfInput } from "../../components/common/Design";

// export const ProductsDetailsPage = () => {
//   const [activeTab, setActiveTab] = useState("description");
//   const [service, setService] = useState(null);
//   const [timeLeft, setTimeLeft] = useState(""); // State for auction timer
//   const [price, setPrice] = useState(""); // State to hold the bid price
//   const [loading, setLoading] = useState(false); // State to handle loading
//   const [message, setMessage] = useState(""); // State for success/error messages
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchService = async () => {
//       try {
//         const { data } = await axios.get(`http://localhost:5001/api/service/${id}`);
//         setService(data);
//         startAuctionTimer(data);
//       } catch (error) {
//         console.error("Error fetching service:", error);
//       }
//     };

//     fetchService();
//   }, [id]);

//   // Function to calculate and start auction timer
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

//     return () => clearInterval(timerInterval); // Cleanup timer on unmount
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const handleBidSubmit = async (e) => {
//     e.preventDefault();
//     if(timeLeft === "Auction Ended"){
//       setMessage("Sorry, Auction Ended");
//       return ;
//     }
//     if (!price) {
//       setMessage("Please enter a bid amount.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token"); // Assuming you're using token-based auth
//       const response = await axios.post(
//         "http://localhost:5001/api/bidding/",
//         { serviceId: id, price },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setMessage("Bid placed successfully!");
//       console.log("Bid placed:", response.data);
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Failed to place bid");
//       console.error("Error placing bid:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // console.log(service);

//   if (!service) {
//     return (
//       <section className="pt-24 px-8">
//         <Container>
//           <Title level={2} className="capitalize">Loading...</Title>
//         </Container>
//       </section>
//     );
//   }

//   return (
//     <section className="pt-24 px-8">
//       <Container>
//         <div className="flex justify-between gap-8">
//           {/* Left Side: Image */}
//           <div className="w-1/2">
//             <div className="h-[70vh]">
//               <img src={service.imageUrl || "https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-14.jpg"} alt="" className="w-full h-full object-cover rounded-xl" />
//             </div>
//           </div>

//           {/* Right Side: Details */}
//           <div className="w-1/2">
//             <Title level={2} className="capitalize">{service.title}</Title>
//             <br />
//             <Title level={2} className="capitalize">{service.userName} Product</Title>
//             <br />
//             <Body className="capitalize">{service.description}</Body>
//             <br />
//             <Caption>Item Verified: {service.isverify ? "Yes" : "No"}</Caption>
//             <br />
//             {/* Auction Timer */}
//             <Caption className="text-red-500">Auction Timer: {timeLeft}</Caption>
//             <br />
//             <Title className="flex items-center gap-2">
//               Price:<Caption>₹ {service.price}</Caption>
//             </Title>
//             <div className="p-5 px-10 shadow-s3 py-8">
//             <form className="flex gap-3 justify-between" onSubmit={handleBidSubmit}>
//               <input
//                 className={commonClassNameOfInput}
//                 type="number"
//                 name="price"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//                 min="0"
//                 required
//                 disabled={timeLeft === "Auction Ended"}
//               />
//               <button
//                 type="submit"
//                 className={`py-3 px-8 rounded-lg ${loading ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-green text-white"}`}
//                 disabled={loading}
//               >
//                 {loading ? "Submitting..." : "Submit"}
//               </button>
//             </form>
//               {message && <p className={`mt-4 ${message.includes("success") ? "text-green-500" : "text-red-500"}`}>{message}</p>}
//             </div>
//           </div>
//         </div>

//         {/* Tabs Section */}
//         <div className="details mt-8">
//           <div className="flex items-center gap-5">
//             <button className={`rounded-md px-10 py-4 text-black shadow-s3 ${activeTab === "description" ? "bg-green text-white" : "bg-white"}`} onClick={() => handleTabClick("description")}>
//               Description
//             </button>
//             <button className={`rounded-md px-10 py-4 text-black shadow-s3 ${activeTab === "auctionHistory" ? "bg-green text-white" : "bg-white"}`} onClick={() => handleTabClick("auctionHistory")}>
//               Auction History
//             </button>
//             <button className={`rounded-md px-10 py-4 text-black shadow-s3 ${activeTab === "reviews" ? "bg-green text-white" : "bg-white"}`} onClick={() => handleTabClick("reviews")}>
//               Reviews({service.reviewsCount || 0})
//             </button>
//           </div>

//           {/* Tab Content */}
//           <div className="tab-content mt-8">
//            {activeTab === "description" && (
//               <div className="description-tab shadow-s3 p-8 rounded-md">
//                 <Title level={4}>Description</Title>
//                 <br />
//                 <Caption className="leading-7 capitalize">{service.description || "No description available."}</Caption>
//                 <br />
//                 <Title level={4}>Product Overview</Title>
//                 <div className="flex justify-between gap-5">
//                   <div className="mt-4 capitalize w-1/2">
//                     <div className="flex justify-between border-b py-3">
//                       <Title>Category</Title>
//                       <Caption>{service.category}</Caption>
//                     </div>
//                     <div className="flex justify-between border-b py-3">
//                       <Title>Price</Title>
//                       <Caption>₹ {service.price}</Caption>
//                     </div>
//                     <div className="flex justify-between py-3">
//                       <Title>Create At</Title>
//                       <Caption>{new Date(service.createdAt).toLocaleString()}</Caption>
//                     </div>
//                     <div className="flex justify-between py-3">
//                       <Title>Update At</Title>
//                       <Caption>{new Date(service.updatedAt).toLocaleString()}</Caption>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === "auctionHistory" && <AuctionHistory serviceId={id} />}
//             {activeTab === "reviews" && (
//               <div className="reviews-tab shadow-s3 p-8 rounded-md">
//                 <Title level={5} className=" font-normal">Reviews</Title>
//                 <hr className="my-5" />
//                 <Title level={5} className=" font-normal text-red-500">Coming Soon!</Title>
//               </div>
//             )}
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// // Auction History Component

// export const AuctionHistory = ({ serviceId }) => {
//   const [bids, setBids] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchBiddingHistory = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5001/api/bidding/${serviceId}`);
//         setBids(response.data);
//       } catch (err) {
//         setError("Failed to fetch auction history");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBiddingHistory();
//   }, [serviceId]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div className="shadow-s1 p-8 rounded-lg">
//       <Title level={5} className="font-normal">Auction History</Title>
//       <hr className="my-5" />

//       <div className="relative overflow-x-auto rounded-lg">
//         <table className="w-full text-sm text-left rtl:text-right text-gray-500">
//           <thead className="text-xs text-gray-700 uppercase bg-gray-100">
//             <tr>
//               <th scope="col" className="px-6 py-5">Date</th>
//               <th scope="col" className="px-6 py-3">Bid Amount (Rupess)</th>
//               <th scope="col" className="px-6 py-3">Bidder</th>
//               <th scope="col" className="px-6 py-3">Auto</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bids.length > 0 ? (
//               bids.map((bid) => (
//                 <tr key={bid._id} className="bg-white border-b hover:bg-gray-50">
//                   <td className="px-6 py-4">{new Date(bid.createdAt).toLocaleString()}</td>
//                   <td className="px-6 py-4">₹{bid.price}</td>
//                   <td className="px-6 py-4 capitalize">{bid.user.name}</td>
//                   <td className="px-6 py-4">{bid.autoBid ? "Yes" : "No"}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="px-6 py-4 text-center">No bids found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };


//anshul frontend new

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Body, Caption, Container, Title } from "../../router";
import { commonClassNameOfInput } from "../../components/common/Design";

export const ProductsDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [service, setService] = useState(null);
  const [timeLeft, setTimeLeft] = useState(""); 
  const [price, setPrice] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); 
  const { id } = useParams();

  useEffect(() => {
    const fetchService = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5001/api/service/${id}`);
        setService(data);
        startAuctionTimer(data);
      } catch (error) {
        console.error("Error fetching service:", error);
      }
    };
    fetchService();
  }, [id]);

 
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
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
    return () => clearInterval(timerInterval);
  };

 
  const handleBidSubmit = async (e) => {
    e.preventDefault();
    if (timeLeft === "Auction Ended") {
      setMessage("Sorry, the auction has ended.");
      return;
    }
    if (!price) {
      setMessage("Please enter a valid bid amount.");
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5001/api/bidding/",
        { serviceId: id, price },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessage("Bid placed successfully!");
      console.log("Bid placed:", response.data);
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to place bid");
      console.error("Error placing bid:", error);
    } finally {
      setLoading(false);
    }
  };


  const imageUrl = service?.image?.filePath
    ? `http://localhost:5001/${service.image.filePath}`
    : "../images/home/hero.webp";

  if (!service) {
    return (
      <section className="pt-24 px-8">
        <Container>
          <Title level={2} className="capitalize text-center text-gray-500">Loading...</Title>
        </Container>
      </section>
    );
  }

  return (
    <section className="pt-24 px-8">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-8 p-6">
        
          <div className="w-full lg:w-1/2">
            <div className="h-[70vh] rounded-xl overflow-hidden shadow-lg">
              <img
                src={imageUrl}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

        
          <div className="w-full lg:w-1/2">
            <Title level={2} className="text-2xl font-semibold text-gray-800">{service.title}</Title>
            <p className="text-sm text-gray-500 my-2">By {service.userName}</p>
            <Body className="my-4 text-gray-700">{service.description}</Body>
            <Caption>Item Verified: {service.isverify ? "Yes ✅" : "No ❌"}</Caption>
            <Caption className="text-red-500 mt-3">Auction Ends In: {timeLeft}</Caption>

      
            <div className="p-5 shadow-s3 rounded-lg mt-5">
              <form className="flex gap-3 items-center" onSubmit={handleBidSubmit}>
                <input
                  className={`${commonClassNameOfInput} w-full`}
                  type="number"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  min="1"
                  required
                  disabled={timeLeft === "Auction Ended"}
                />
                <button
                  type="submit"
                  className={`py-3 px-8 rounded-lg ${
                    loading ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-slate-600"
                  }`}
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Place Bid"}
                </button>
              </form>
              {message && (
                <p className={`mt-4 text-sm ${message.includes("success") ? "text-green-500" : "text-red-500"}`}>
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>

   
        <div className="mt-8">
          <div className="flex gap-5">
            {["description", "auctionHistory", "reviews"].map((tab) => (
              <button
                key={tab}
                className={`rounded-md px-10 py-4 text-black shadow-s3 ${
                  activeTab === tab ? "bg-blue-500 text-white" : "bg-white"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "description"
                  ? "Description"
                  : tab === "auctionHistory"
                  ? "Auction History"
                  : `Reviews (${service.reviewsCount || 0})`}
              </button>
            ))}
          </div>

         
          <div className="tab-content mt-8 shadow-s3 p-8 rounded-md bg-gray-200">
            {activeTab === "description" && (
              <div>
                <Title level={4}>Service Overview</Title>
                <div className="mt-4">
                  <div className="flex justify-between border-b py-3">
                    <Title>Category:</Title>
                    <Caption>{service.category}</Caption>
                  </div>
                  <div className="flex justify-between border-b py-3">
                    <Title>Price:</Title>
                    <Caption>₹ {service.price}</Caption>
                  </div>
                  <div className="flex justify-between border-b py-3">
                    <Title>Created At:</Title>
                    <Caption>{new Date(service.createdAt).toLocaleString()}</Caption>
                  </div>
                  <div className="flex justify-between py-3">
                    <Title>Last Updated:</Title>
                    <Caption>{new Date(service.updatedAt).toLocaleString()}</Caption>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "auctionHistory" && <AuctionHistory serviceId={id} />}
            {activeTab === "reviews" && (
              <div className="text-center">
                <Title level={5} className="font-normal text-red-500">Reviews Coming Soon!</Title>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export const AuctionHistory = ({ serviceId }) => {
  const [bids, setBids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBiddingHistory = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/bidding/${serviceId}`);
        setBids(response.data);
      } catch (err) {
        setError("Failed to fetch auction history");
      } finally {
        setLoading(false);
      }
    };

    fetchBiddingHistory();
  }, [serviceId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="shadow-s1 p-8 rounded-lg">
      <Title level={5} className="font-normal">Auction History</Title>
      <hr className="my-5" />
      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">Date</th>
              <th scope="col" className="px-6 py-3">Bid Amount (₹)</th>
              <th scope="col" className="px-6 py-3">Bidder</th>
              <th scope="col" className="px-6 py-3">Auto Bid</th>
            </tr>
          </thead>
          <tbody>
            {bids.length > 0 ? (
              bids.map((bid) => (
                <tr key={bid._id} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{new Date(bid.createdAt).toLocaleString()}</td>
                  <td className="px-6 py-4">₹{bid.price}</td>
                  <td className="px-6 py-4 capitalize">{bid.user.name}</td>
                  <td className="px-6 py-4">{bid.autoBid ? "Yes" : "No"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center">No bids found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};






// anshul
// import { Body, Caption, Container, Title } from "../../router";
// import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
// import { commonClassNameOfInput } from "../../components/common/Design";
// import { AiOutlinePlus } from "react-icons/ai";
// import { useState } from "react";

// export const ProductsDetailsPage = () => {
//   const [activeTab, setActiveTab] = useState("description");

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };
//   return (
//     <>
//       <section className="pt-24 px-8">
//         <Container>
//           <div className="flex justify-between gap-8">
//             <div className="w-1/2">
//               <div className="h-[70vh]">
//                 <img src="https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-14.jpg" alt="" className="w-full h-full object-cover rounded-xl" />
//               </div>
//             </div>
//             <div className="w-1/2">
//               <Title level={2} className="capitalize">
//                 Couple Wedding Ring
//               </Title>
//               <div className="flex gap-5">
//                 <div className="flex text-green ">
//                   <IoIosStar size={20} />
//                   <IoIosStar size={20} />
//                   <IoIosStar size={20} />
//                   <IoIosStarHalf size={20} />
//                   <IoIosStarOutline size={20} />
//                 </div>
//                 <Caption>(2 customer reviews)</Caption>
//               </div>
//               <br />
//               <Body>Korem ipsum dolor amet, consectetur adipiscing elit. Maece nas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla.</Body>
//               <br />
//               <Caption>Item condition: New</Caption>
//               <br />
//               <Caption>Item Verifed: Yes</Caption>
//               <br />
//               <Caption>Time left:</Caption>
//               <br />
//               <div className="flex gap-8 text-center">
//                 <div className="p-5 px-10 shadow-s1">
//                   <Title level={4}>149</Title>
//                   <Caption>Days</Caption>
//                 </div>
//                 <div className="p-5 px-10 shadow-s1">
//                   <Title level={4}>12</Title>
//                   <Caption>Hours</Caption>
//                 </div>
//                 <div className="p-5 px-10 shadow-s1">
//                   <Title level={4}>36</Title>
//                   <Caption>Minutes</Caption>
//                 </div>
//                 <div className="p-5 px-10 shadow-s1">
//                   <Title level={4}>51</Title>
//                   <Caption>Seconds</Caption>
//                 </div>
//               </div>
//               <br />
//               <Title className="flex items-center gap-2">
//                 Auction ends:
//                 <Caption>December 31, 2024 12:00 am</Caption>
//               </Title>
//               <Title className="flex items-center gap-2 my-5">
//                 Timezone: <Caption>UTC 0</Caption>
//               </Title>
//               <Title className="flex items-center gap-2 my-5">
//                 Price:<Caption>$200 </Caption>
//               </Title>
//               <Title className="flex items-center gap-2">
//                 Current bid:<Caption className="text-3xl">$500 </Caption>
//               </Title>
//               <div className="p-5 px-10 shadow-s3 py-8">
//                 <form className="flex gap-3 justify-between">
//                   <input className={commonClassNameOfInput} type="number" name="price" />
//                   <button type="button" className="bg-gray-100 rounded-md px-5 py-3">
//                     <AiOutlinePlus />
//                   </button>
//                   <button type="submit" className={`py-3 px-8 rounded-lg ${"bg-gray-400 text-gray-700 cursor-not-allowed"}`}>
//                     Submit
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//           <div className="details mt-8">
//             <div className="flex items-center gap-5">
//               <button className={`rounded-md px-10 py-4 text-black shadow-s3 ${activeTab === "description" ? "bg-green text-white" : "bg-white"}`} onClick={() => handleTabClick("description")}>
//                 Description
//               </button>
//               <button className={`rounded-md px-10 py-4 text-black shadow-s3 ${activeTab === "auctionHistory" ? "bg-green text-white" : "bg-white"}`} onClick={() => handleTabClick("auctionHistory")}>
//                 Auction History
//               </button>
//               <button className={`rounded-md px-10 py-4 text-black shadow-s3 ${activeTab === "reviews" ? "bg-green text-white" : "bg-white"}`} onClick={() => handleTabClick("reviews")}>
//                 Reviews(2)
//               </button>
//               <button className={`rounded-md px-10 py-4 text-black shadow-s3 ${activeTab === "moreProducts" ? "bg-green text-white" : "bg-white"}`} onClick={() => handleTabClick("moreProducts")}>
//                 More Products
//               </button>
//             </div>

//             <div className="tab-content mt-8">
//               {activeTab === "description" && (
//                 <div className="description-tab shadow-s3 p-8 rounded-md">
//                   <Title level={4}>Description</Title>
//                   <br />
//                   <Caption className="leading-7">
//                     If you’ve been following the crypto space, you’ve likely heard of Non-Fungible Tokens (Biddings), more popularly referred to as ‘Crypto Collectibles.’ The world of Biddings is
//                     growing rapidly. It seems there is no slowing down of these assets as they continue to go up in price. This growth comes with the opportunity for people to start new businesses to
//                     create and capture value. The market is open for players in every kind of field. Are you a collector.
//                   </Caption>
//                   <Caption className="leading-7">
//                     If you’ve been following the crypto space, you’ve likely heard of Non-Fungible Tokens (Biddings), more popularly referred to as ‘Crypto Collectibles.’ The world of Biddings is
//                     growing rapidly. It seems there is no slowing down of these assets as they continue to go up in price. This growth comes with the opportunity for people to start new businesses to
//                     create and capture value. The market is open for players in every kind of field. Are you a collector.
//                   </Caption>
//                   <br />
//                   <Title level={4}>Product Overview</Title>
//                   <div className="flex justify-between gap-5">
//                     <div className="mt-4 capitalize w-1/2">
//                       <div className="flex justify-between border-b py-3">
//                         <Title>category</Title>
//                         <Caption>Category</Caption>
//                       </div>
//                       <div className="flex justify-between border-b py-3">
//                         <Title>height</Title>
//                         <Caption> 200 (cm)</Caption>
//                       </div>
//                       <div className="flex justify-between border-b py-3">
//                         <Title>length</Title>
//                         <Caption> 300 (cm)</Caption>
//                       </div>
//                       <div className="flex justify-between border-b py-3">
//                         <Title>width</Title>
//                         <Caption> 400 (cm)</Caption>
//                       </div>
//                       <div className="flex justify-between border-b py-3">
//                         <Title>weigth</Title>
//                         <Caption> 50 (kg)</Caption>
//                       </div>
//                       <div className="flex justify-between py-3 border-b">
//                         <Title>medium used</Title>
//                         <Caption> Gold </Caption>
//                       </div>
//                       <div className="flex justify-between py-3 border-b">
//                         <Title>Price</Title>
//                         <Caption> $50000 </Caption>
//                       </div>
//                       <div className="flex justify-between py-3 border-b">
//                         <Title>Sold out</Title>
//                         Yes
//                       </div>
//                       <div className="flex justify-between py-3 border-b">
//                         <Title>verify</Title>
//                         No
//                       </div>
//                       <div className="flex justify-between py-3 border-b">
//                         <Title>Create At</Title>
//                         <Caption>December 31, 2024 12:00 am</Caption>
//                       </div>
//                       <div className="flex justify-between py-3">
//                         <Title>Update At</Title>
//                         <Caption>December 31, 2024 12:00 am</Caption>
//                       </div>
//                     </div>
//                     <div className="w-1/2">
//                       <div className="h-[60vh] p-2 bg-green rounded-xl">
//                         <img src="https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-14.jpg" alt="" className="w-full h-full object-cover rounded-xl" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//               {activeTab === "auctionHistory" && <AuctionHistory />}
//               {activeTab === "reviews" && (
//                 <div className="reviews-tab shadow-s3 p-8 rounded-md">
//                   <Title level={5} className=" font-normal">
//                     Reviews
//                   </Title>
//                   <hr className="my-5" />
//                   <Title level={5} className=" font-normal text-red-500">
//                     Cooming Soon!
//                   </Title>
//                 </div>
//               )}
//               {activeTab === "moreProducts" && (
//                 <div className="more-products-tab shadow-s3 p-8 rounded-md">
//                   <h1>More Products</h1>
//                 </div>
//               )}
//             </div>
//           </div>
//         </Container>
//       </section>
//     </>
//   );
// };

// export const AuctionHistory = () => {
//   return (
//     <>
//       <div className="shadow-s1 p-8 rounded-lg">
//         <Title level={5} className=" font-normal">
//           Auction History
//         </Title>
//         <hr className="my-5" />

//         <div className="relative overflow-x-auto rounded-lg">
//           <table className="w-full text-sm text-left rtl:text-right text-gray-500">
//             <thead className="text-xs text-gray-700 uppercase bg-gray-100">
//               <tr>
//                 <th scope="col" className="px-6 py-5">
//                   Date
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Bid Amount(USD)
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   User
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Auto
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="bg-white border-b hover:bg-gray-50">
//                 <td className="px-6 py-4">December 31, 2024 12:00 am</td>
//                 <td className="px-6 py-4">$200</td>
//                 <td className="px-6 py-4">Sunil Pokhrel</td>
//                 <td className="px-6 py-4"> </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };
