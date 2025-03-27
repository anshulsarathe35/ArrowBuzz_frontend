// //anshul
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Title } from "../router";
// import { FaRupeeSign } from "react-icons/fa";

// export const Income = () => {
//   const [commission, setCommission] = useState(0);

//   // Fetch commission income
//   const fetchIncome = async () => {
//     try {
//       const response = await axios.get("http://localhost:5001/api/users/estimate-income", {
//         withCredentials: true,
//       });
//       console.log(response);
//       setCommission(response.data.commissionBalance);
//     } catch (error) {
//       console.error("Failed to fetch commission:", error);
//       alert("Failed to fetch commission income");
//     }
//   };

//   useEffect(() => {
//     fetchIncome();
//   }, []);

//   return (
//     <section>
//       <div className="shadow-s1 p-8 rounded-lg mb-12">
//         <Title level={5} className="font-normal">
//           Commission Income
//         </Title>

//         <div className="shadow-s3 py-16 my-16 border border-green bg-green_100 p-8 flex items-center text-center justify-center gap-5 flex-col rounded-xl">
//           <FaRupeeSign size={80} className="text-green" />
//           <div>
//             <Title level={1}>
//               ₹{commission}
//             </Title>
//             <Title>Total Income</Title>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


//anshul frontend new 
import { useEffect, useState } from "react";
import axios from "axios";
import { Title } from "../router";
import { FaRupeeSign } from "react-icons/fa";

export const Income = () => {
  const [commission, setCommission] = useState(0);

  const fetchIncome = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/users/estimate-income", {
        withCredentials: true,
      });
      console.log(response);
      setCommission(response.data.commissionBalance);
    } catch (error) {
      console.error("Failed to fetch commission:", error);
      alert("Failed to fetch commission income");
    }
  };

  useEffect(() => {
    fetchIncome();
  }, []);

  return (
    <section className="bg-white shadow-lg p-8 rounded-3xl text-black outline-black">
      <div className="mb-12">
        <Title level={5} className="font-bold text-2xl mb-6 text-white">
          Commission Income
        </Title>

        <div className="shadow-lg py-16 my-16 border border-green-500 bg-green-100 p-8 flex items-center text-center justify-center gap-5 flex-col rounded-2xl">
          <FaRupeeSign size={80} className="text-green-600" />
          <div>
            <Title level={1} className="text-4xl font-extrabold text-green-600">
              ₹{commission}
            </Title>
            <Title className="text-lg font-medium text-black">Total Income</Title>
          </div>
        </div>
      </div>
    </section>
  );
};






// import { Title } from "../router";
// import { CgDollar } from "react-icons/cg";

// export const Income = () => {
//   return (
//     <>
//       <section>
//         <div className="shadow-s1 p-8 rounded-lg  mb-12">
//           <Title level={5} className=" font-normal">
//             Commission Income
//           </Title>

//           <div className="shadow-s3 py-16 my-16 border border-green bg-green_100 p-8 flex items-center text-center justify-center gap-5 flex-col rounded-xl">
//             <CgDollar size={80} className="text-green" />
//             <div>
//               <Title level={1}>$500</Title>
//               <Title>Total Income</Title>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
