// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaFacebook, FaGoogle } from "react-icons/fa";
// import { Caption, Container, CustomNavLink, PrimaryButton, Title } from "../../router";
// import { commonClassNameOfInput } from "../../components/common/Design";
// import axios from "axios";

// export const LoginAsAdmin = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   // ✅ Prevent access if customer already logged in
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const role = localStorage.getItem("role");

//     if (token && role === "admin") {
//       navigate("/");
//     }
//   }, [navigate]);

//   // ✅ Handle Input Change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // ✅ Handle Form Submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { email, password, adminsecret } = formData;
//     const trimmedData = {
//       email: email.trim(),
//       password: password.trim(),
//       adminsecret : adminsecret.trim()
//     };

//     // ✅ Validation
//     if (!trimmedData.email || !trimmedData.password || !trimmedData.adminsecret) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     // ✅ API Call
//     try {
//         if(trimmedData.adminsecret === "capstone"){
//             const response = await axios.post(
//                 "http://localhost:5001/api/users/admin",
//                 trimmedData,
//                 {
//                   headers: { "Content-Type": "application/json" },
//                   withCredentials: true,
//                 }
//               );
        
//               // ✅ Extract Token & Role
//               const { token, role } = response.data;
        
//               // ✅ Save Token & Role in LocalStorage
//               localStorage.setItem("token", token);
//               localStorage.setItem("role", role);
        
//               // ✅ Redirect customer to Service Dashboard
//               alert("You have successfully become a Admin!");
//               navigate("/");
        
//               // ✅ Clear Form
//               setFormData({
//                 email: "",
//                 password: "",
//               });
//         }else{
//             alert("Invalid admin secret");
//         }
      

//     } catch (error) {
//       console.error("Error:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "Login failed.");
//     }
//   };

//   return (
//     <section className="register pt-16 relative">
//       <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute top-2/3"></div>
//       <div className="bg-[#241C37] pt-8 h-[40vh] relative content">
//         <Container>
//           <div>
//             <Title level={3} className="text-white">Admin Login</Title>
//             <div className="flex items-center gap-3">
//               <Title level={5} className="text-green font-normal text-xl">Home</Title>
//               <Title level={5} className="text-white font-normal text-xl">/</Title>
//               <Title level={5} className="text-white font-normal text-xl">Admin</Title>
//             </div>
//           </div>
//         </Container>
//       </div>

//       {/* ✅ customer Login Form */}
//       <form className="bg-white shadow-s3 w-1/3 m-auto my-16 p-8 rounded-xl" onSubmit={handleSubmit}>
//         <div className="text-center">
//           <Title level={5}>Admin</Title>
//           <p className="mt-2 text-lg">
//             Don't have an account? <CustomNavLink href="/register">Register Here</CustomNavLink>
//           </p>
//         </div>

//         {/* ✅ Email Input */}
//         <div className="py-5 mt-8">
//           <Caption className="mb-2">Enter Your Email *</Caption>
//           <input
//             type="email"
//             name="email"
//             className={commonClassNameOfInput}
//             placeholder="Enter Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* ✅ Password Input */}
//         <div>
//           <Caption className="mb-2">Password *</Caption>
//           <input
//             type="password"
//             name="password"
//             className={commonClassNameOfInput}
//             placeholder="Enter Your Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <Caption className="mb-2">Admin Secret *</Caption>
//           <input
//             type="password"
//             name="adminsecret"
//             className={commonClassNameOfInput}
//             placeholder="Enter Your Secret"
//             value={formData.secret}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* ✅ Checkbox */}
//         <div className="flex items-center gap-2 py-4">
//           <input type="checkbox" required />
//           <Caption>I agree to the Terms & Policy</Caption>
//         </div>

//         {/* ✅ Submit Button */}
//         <PrimaryButton className="w-full rounded-none my-5 uppercase">
//           Login as Admin
//         </PrimaryButton>

//       </form>

//       <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute bottom-96 right-0"></div>
//     </section>
//   );
// };


//anshul frontend new 

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Caption, Container, CustomNavLink, PrimaryButton, Title } from "../../router";
import { commonClassNameOfInput } from "../../components/common/Design";
import axios from "axios";

export const LoginAsAdmin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    adminsecret: "", 
  });

  const navigate = useNavigate();

  
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token && role === "admin") {
      // navigate("/admin-dashboard"); 
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, adminsecret } = formData;
    const trimmedData = {
      email: email.trim(),
      password: password.trim(),
      adminsecret: adminsecret.trim(),
    };

    if (!trimmedData.email || !trimmedData.password || !trimmedData.adminsecret) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      if (trimmedData.adminsecret === "capstone") {
        const response = await axios.post(
          "http://localhost:5001/api/users/admin",
          trimmedData,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );

        
        const { token, role } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);

        
        alert("Welcome Admin! You have successfully logged in.");
        navigate("/");
        // navigate("/admin-dashboard");

        
        setFormData({
          email: "",
          password: "",
          adminsecret: "",
        });
      } else {
        alert("Invalid Admin Secret! Please try again.");
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Login failed.");
    }
  };

  return (
    <section className="register pt-16 relative">
      
      <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute top-2/3"></div>
      <div className="bg-gradient-to-r from-blue-900 to-purple-500 pt-8 h-[40vh] relative content">
        <Container>
          <div>
            <Title level={3} className="text-white">Admin Login</Title>
            <div className="flex items-center gap-3">
              <Title level={5} className="text-green font-normal text-xl">Home</Title>
              <Title level={5} className="text-white font-normal text-xl">/</Title>
              <Title level={5} className="text-white font-normal text-xl">Admin</Title>
            </div>
          </div>
        </Container>
      </div>

      
      <form
        className="bg-white shadow-s3 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 m-auto my-16 p-8 rounded-xl"
        onSubmit={handleSubmit}
      >
        <div className="text-center">
          <Title level={5}>Admin Panel</Title>
          <p className="mt-2 text-lg">
            Not an Admin?{" "}
            <CustomNavLink href="/login">
              Login as User
            </CustomNavLink>
          </p>
        </div>

        
        <div className="py-5 mt-8">
          <Caption className="mb-2">Enter Your Email *</Caption>
          <input
            type="email"
            name="email"
            className={commonClassNameOfInput}
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        
        <div>
          <Caption className="mb-2">Password *</Caption>
          <input
            type="password"
            name="password"
            className={commonClassNameOfInput}
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

       
        <div className="mt-5">
          <Caption className="mb-2">Admin Secret *</Caption>
          <input
            type="password"
            name="adminsecret"
            className={commonClassNameOfInput}
            placeholder="Enter Admin Secret"
            value={formData.adminsecret}
            onChange={handleChange}
            required
          />
        </div>

       
        <div className="flex items-center gap-2 py-4">
          <input type="checkbox" required />
          <Caption>I agree to the Terms & Conditions</Caption>
        </div>

       
        <PrimaryButton type="submit" className="w-full rounded-none my-5 uppercase">
          Login as Admin
        </PrimaryButton>
      </form>

      <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute bottom-96 right-0"></div>
    </section>
  );
};
