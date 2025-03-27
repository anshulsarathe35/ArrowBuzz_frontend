// import { Caption, Title } from "../../router";
// import { commonClassNameOfInput, PrimaryButton } from "../../components/common/Design";

// export const UpdateProductByAdmin = () => {
//   return (
//     <>
//       <section className="bg-white shadow-s1 p-8 rounded-xl">
//         <Title level={5} className=" font-normal mb-5">
//           Update Product
//         </Title>
//         <hr className="my-5" />
//         <div className="create-product">
//           <form>
//             <div className="w-full">
//               <Caption className="mb-2">Commission *</Caption>
//               <input type="number" name="commission" className={`${commonClassNameOfInput}`} />
//             </div>
//             <PrimaryButton type="submit" className="rounded-none my-5">
//               Update
//             </PrimaryButton>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };






//raj
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Caption, Title } from "../../router";
import { commonClassNameOfInput, PrimaryButton } from "../../components/common/Design";

export const UpdateProductByAdmin = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [commission, setCommission] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [service, setService] = useState(null);

  const fetchProductById = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/api/service/${id}`, {
        withCredentials: true,
      });
      const serviceData = response.data;
      setService(serviceData);
      setCommission(serviceData.commission || "");
      setIsVerified(serviceData.isverify);
    } catch (error) {
      console.error("Failed to fetch product:", error);
      alert("Service not found");
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    fetchProductById();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!commission) {
      alert("Please enter a commission amount");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:5001/api/service/admin/service-verified/${id}`,
        { commission, isverify: isVerified },  
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      alert("Service verified and commission added successfully");
      navigate("/product/admin");
    } catch (error) {
      console.error("Failed to update product:", error);
      alert("Failed to update product");
    }
  };

  return (
    <section className="bg-white shadow-s1 p-8 rounded-xl">
      <Title level={5} className="font-normal mb-5">
        Verify and Update Commission
      </Title>
      <hr className="my-5" />

      {service ? (
        <div className="create-product">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <Caption className="mb-2">Service Name</Caption>
              <input
                type="text"
                value={service.title}
                className={commonClassNameOfInput}
                readOnly
              />
            </div>

            <div className="mb-5">
              <Caption className="mb-2">Current Commission *</Caption>
              <input
                type="number"
                name="commission"
                className={commonClassNameOfInput}
                placeholder="Enter Commission %"
                value={commission}
                onChange={(e) => setCommission(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <Caption className="mb-2">Verification Status</Caption>
              <select
                className={commonClassNameOfInput}
                value={isVerified ? "true" : "false"}
                onChange={(e) => setIsVerified(e.target.value === "true")}
              >
                <option value="true">Verified</option>
                <option value="false">Not Verified</option>
              </select>
            </div>

            <PrimaryButton type="submit" className="rounded-none my-5">
              Verify & Update Commission
            </PrimaryButton>
          </form>
        </div>
      ) : (
        <p>Loading service details...</p>
      )}
    </section>
  );
};














//anshul
// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Caption, Title } from "../../router";
// import { commonClassNameOfInput, PrimaryButton } from "../../components/common/Design";

// export const UpdateProductByAdmin = () => {
//   const { id } = useParams(); // ✅ Get the Product ID from URL
//   const navigate = useNavigate();
//   const [commission, setCommission] = useState("");
//   const [service, setService] = useState(null);

//   // ✅ Fetch Product Details by ID
//   const fetchProductById = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5001/api/service/${id}`, {
//         withCredentials: true,
//       });
//       setService(response.data);
//     } catch (error) {
//       console.error("Failed to fetch product:", error);
//       alert("Service not found");
//       navigate("/dashboard");
//     }
//   };

//   useEffect(() => {
//     fetchProductById();
//   }, [id]);

//   // ✅ Handle Form Submission to Update Product
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!commission) {
//       alert("Please enter a commission amount");
//       return;
//     }

//     try {
//       const response = await axios.put(
//         `http://localhost:5001/api/service/admin/service-verified/${id}`,
//         { commission },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );

//       alert("Service verified and commission added successfully");
//       navigate("/admin/product-list");
//     } catch (error) {
//       console.error("Failed to update product:", error);
//       alert("Failed to update product");
//     }
//   };

//   return (
//     <>
//       <section className="bg-white shadow-s1 p-8 rounded-xl">
//         <Title level={5} className=" font-normal mb-5">
//           Verify and Update Commission
//         </Title>
//         <hr className="my-5" />

//         {service ? (
//           <div className="create-product">
//             <form onSubmit={handleSubmit}>
//               <div className="mb-5">
//                 <Caption className="mb-2">Service Name</Caption>
//                 <input
//                   type="text"
//                   value={service.title}
//                   className={commonClassNameOfInput}
//                   readOnly
//                 />
//               </div>

//               <div className="mb-5">
//                 <Caption className="mb-2">Current Commission *</Caption>
//                 <input
//                   type="number"
//                   name="commission"
//                   className={commonClassNameOfInput}
//                   placeholder="Enter Commission %"
//                   value={commission}
//                   onChange={(e) => setCommission(e.target.value)}
//                 />
//               </div>

//               <div className="mb-5">
//                 <Caption className="mb-2">Status</Caption>
//                 <input
//                   type="text"
//                   value={service.isverify ? "Verified" : "Not Verified"}
//                   className={commonClassNameOfInput}
//                   readOnly
//                 />
//               </div>

//               <PrimaryButton type="submit" className="rounded-none my-5">
//                 Verify & Update Commission
//               </PrimaryButton>
//             </form>
//           </div>
//         ) : (
//           <p>Loading service details...</p>
//         )}
//       </section>
//     </>
//   );
// };
