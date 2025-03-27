// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaFacebook, FaGoogle } from "react-icons/fa";
// import { Caption, Container, CustomNavLink, PrimaryButton, Title } from "../../router";
// import { commonClassNameOfInput } from "../../components/common/Design";
// import axios from "axios";

// export const LoginAsServicemen = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   // ✅ Prevent access if servicemen already logged in
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const role = localStorage.getItem("role");

//     if (token && role === "servicemen") {
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

//     const { email, password } = formData;
//     const trimmedData = {
//       email: email.trim(),
//       password: password.trim(),
//     };

//     // ✅ Validation
//     if (!trimmedData.email || !trimmedData.password) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     // ✅ API Call
//     try {
//       const response = await axios.post(
//         "http://localhost:5001/api/users/servicemen",
//         trimmedData,
//         {
//           headers: { "Content-Type": "application/json" },
//           withCredentials: true,
//         }
//       );

//       // ✅ Extract Token & Role
//       const { token, role } = response.data;

//       // ✅ Save Token & Role in LocalStorage
//       localStorage.setItem("token", token);
//       localStorage.setItem("role", role);

//       // ✅ Redirect servicemen to Service Dashboard
//       alert("You have successfully become a servicemen!");
//       navigate("/");

//       // ✅ Clear Form
//       setFormData({
//         email: "",
//         password: "",
//       });

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
//             <Title level={3} className="text-white">Login as servicemen</Title>
//             <div className="flex items-center gap-3">
//               <Title level={5} className="text-green font-normal text-xl">Home</Title>
//               <Title level={5} className="text-white font-normal text-xl">/</Title>
//               <Title level={5} className="text-white font-normal text-xl">servicemen</Title>
//             </div>
//           </div>
//         </Container>
//       </div>

//       {/* ✅ servicemen Login Form */}
//       <form className="bg-white shadow-s3 w-1/3 m-auto my-16 p-8 rounded-xl" onSubmit={handleSubmit}>
//         <div className="text-center">
//           <Title level={5}>Become a servicemen</Title>
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

//         {/* ✅ Checkbox */}
//         <div className="flex items-center gap-2 py-4">
//           <input type="checkbox" required />
//           <Caption>I agree to the Terms & Policy</Caption>
//         </div>

//         {/* ✅ Submit Button */}
//         <PrimaryButton className="w-full rounded-none my-5 uppercase">
//           Become servicemen
//         </PrimaryButton>

//         {/* ✅ Social Login */}
//         {/* <div className="text-center border py-4 rounded-lg mt-4">
//           <Title>OR SIGN IN WITH</Title>
//           <div className="flex items-center justify-center gap-5 mt-5">
//             <button className="flex items-center gap-2 bg-red-500 text-white p-3 px-5 rounded-sm">
//               <FaGoogle />
//               <p className="text-sm">SIGN IN WITH GOOGLE</p>
//             </button>
//             <button className="flex items-center gap-2 bg-indigo-500 text-white p-3 px-5 rounded-sm">
//               <FaFacebook />
//               <p className="text-sm">SIGN IN WITH FACEBOOK</p>
//             </button>
//           </div>
//         </div> */}
//       </form>

//       <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute bottom-96 right-0"></div>
//     </section>
//   );
// };


//anshul frontend new

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Caption,
  Container,
  CustomNavLink,
  PrimaryButton,
  Title,
} from "../../router";
import { commonClassNameOfInput } from "../../components/common/Design";
import axios from "axios";

export const LoginAsServicemen = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // ✅ Prevent access if servicemen already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (token && role === "servicemen") {
      navigate("/");
    }
  }, [navigate]);

  // ✅ Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // ✅ Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;
    const trimmedData = {
      email: email.trim(),
      password: password.trim(),
    };

    // ✅ Validation
    if (!trimmedData.email || !trimmedData.password) {
      alert("Please fill in all required fields.");
      return;
    }

    // ✅ API Call
    try {
      const response = await axios.post(
        "http://localhost:5001/api/users/servicemen",
        trimmedData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      // ✅ Extract Token & Role
      const { token, role } = response.data;

      // ✅ Save Token & Role in LocalStorage
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      // ✅ Redirect to Servicemen Dashboard
      alert("You have successfully logged in as a Serviceman!");
      navigate("/servicemen-dashboard");

      // ✅ Clear Form
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Login failed.");
    }
  };

  return (
    <section className="login-section pt-16 relative bg-gradient-to-r from-blue-900 to-blue-700">
      {/* ✅ Background Blur Effects */}
      <div className="bg-green-400 w-80 h-80 rounded-full opacity-20 blur-3xl absolute top-2/3 left-10"></div>
      <div className="bg-[#1B1A55] pt-8 h-[40vh] relative">
        <Container>
          <div>
            <Title level={3} className="text-white">
              Login as Servicemen
            </Title>
            <div className="flex items-center gap-3 mt-2">
              <Title level={5} className="text-green-400 font-normal text-lg">
                Home
              </Title>
              <Title level={5} className="text-white font-normal text-lg">
                /
              </Title>
              <Title level={5} className="text-white font-normal text-lg">
                Servicemen
              </Title>
            </div>
          </div>
        </Container>
      </div>

      {/* ✅ Servicemen Login Form */}
      <form
        className="bg-white shadow-xl w-full sm:w-2/3 md:w-1/2 lg:w-1/3 m-auto my-16 p-10 rounded-2xl"
        onSubmit={handleSubmit}
      >
        <div className="text-center">
          <Title level={5} className="text-blue-900">
            Become a Serviceman
          </Title>
          <p className="mt-2 text-lg text-gray-500">
            Don't have an account?{" "}
            <CustomNavLink
              href="/register"
              className="text-blue-600 underline"
            >
              Register Here
            </CustomNavLink>
          </p>
        </div>

        {/* ✅ Email Input */}
        <div className="py-5 mt-8">
          <Caption className="mb-2 text-gray-600">Enter Your Email *</Caption>
          <input
            type="email"
            name="email"
            className={`${commonClassNameOfInput} focus:border-blue-500`}
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* ✅ Password Input */}
        <div>
          <Caption className="mb-2 text-gray-600">Password *</Caption>
          <input
            type="password"
            name="password"
            className={`${commonClassNameOfInput} focus:border-blue-500`}
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* ✅ Terms & Policy Agreement */}
        <div className="flex items-center gap-2 py-4">
          <input type="checkbox" required />
          <Caption className="text-gray-500">
            I agree to the{" "}
            <span className="text-blue-500 underline cursor-pointer">
              Terms & Policy
            </span>
          </Caption>
        </div>

        {/* ✅ Login Button */}
        <PrimaryButton
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg my-5 uppercase"
        >
          Become Serviceman
        </PrimaryButton>

        
      </form>

      {/* ✅ Bottom Green Blur Effect */}
      <div className="bg-green-400 w-80 h-80 rounded-full opacity-20 blur-3xl absolute bottom-96 right-10"></div>
    </section>
  );
};
