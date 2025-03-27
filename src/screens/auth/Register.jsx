// import React, { useState } from "react";
// import { FaFacebook, FaGoogle } from "react-icons/fa";
// import { Caption, Container, CustomNavLink, PrimaryButton, Title } from "../../router";
// import { commonClassNameOfInput } from "../../components/common/Design";
// import axios from "axios"; // Ensure axios is imported

// export const Register = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { name, email, password, confirmPassword } = formData;

//     const trimmedData = {
//       name: name.trim(),
//       email: email.trim(),
//       password: password.trim(),
//       confirmPassword: confirmPassword.trim(),
//     };

//     console.log(JSON.stringify({ name, email, password, confirmPassword }));


//     if (!trimmedData.name || !trimmedData.email || !trimmedData.password || !trimmedData.confirmPassword) {
//       alert("frontend Please fill in all required fields.");
//       return;
//     }

//     if (trimmedData.password !== trimmedData.confirmPassword) {
//       alert("Passwords do not match.");
//       return;
//     }

//     try {
//       const response = await axios.post(
//           "http://localhost:5001/api/users/register",
//           trimmedData,
//           {
//             headers: { "Content-Type": "application/json" },
//             withCredentials: true,  // Ensuring cookies are sent with request
//           }
//       );
//       console.log("Response Data:", response); // Log response data
//       alert("Registration successful!");

//       await setFormData({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//     });
    

//   } catch (error) {
//       console.error("Frontend Error in register:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "Frontend Registration failed.");
//   }
  

//     // try {
//     //   const response = await axios.post(
//     //     "http://localhost:5001/api/users/register",
//     //     { name, email, password, confirmPassword }, // Add confirmPassword here
//     //     {
//     //       headers: { "Content-Type": "application/json" },
//     //     }
//     //   );
//     //   alert("Registration successful!");
//     //   console.log("User registered successfully:", response.data);

//     //   setFormData({
//     //     name: "",
//     //     email: "",
//     //     password: "",
//     //     confirmPassword: "",
//     //   });
//     // } catch (error) {
//     //   console.error("Error in register:", error.response?.data || error.message);
//     //   alert(error.response?.data?.message || "Registration failed.");
//     // }
//   };


//   return (
//     <section className="register pt-16 relative">
//       <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute top-2/3"></div>
//       <div className="bg-[#241C37] pt-8 h-[40vh] relative content">
//         <Container>
//           <div>
//             <Title level={3} className="text-white">Sign Up</Title>
//             <div className="flex items-center gap-3">
//               <Title level={5} className="text-green font-normal text-xl">Home</Title>
//               <Title level={5} className="text-white font-normal text-xl">/</Title>
//               <Title level={5} className="text-white font-normal text-xl">Sign Up</Title>
//             </div>
//           </div>
//         </Container>
//       </div>
//       <form onSubmit={handleSubmit} className="bg-white shadow-s3 w-1/3 m-auto my-16 p-8 rounded-xl">
//         <div className="text-center">
//           <Title level={5}>Sign Up</Title>
//           <p className="mt-2 text-lg">
//             Already have an account? <CustomNavLink href="/login">Log In Here</CustomNavLink>
//           </p>
//         </div>
//         <div className="py-5">
//           <Caption className="mb-2">Username *</Caption>
//           <input 
//             type="text" 
//             name="name" 
//             className={commonClassNameOfInput} 
//             placeholder="Enter your name" 
//             required 
//             onChange={handleChange} />
//         </div>
//         <div className="py-5">
//           <Caption className="mb-2">Enter Your Email *</Caption>
//           <input 
//             type="email" 
//             name="email" 
//             className={commonClassNameOfInput} 
//             placeholder="Enter Your Email" 
//             required 
//             onChange={handleChange} />
//         </div>
//         <div>
//           <Caption className="mb-2">Password *</Caption>
//           <input 
//             type="password" 
//             name="password" 
//             className={commonClassNameOfInput} 
//             placeholder="Enter Your Password" 
//             required 
//             onChange={handleChange} />
//         </div>
//         <div>
//           <Caption className="mb-2">Confirm Password *</Caption>
//           <input 
//             type="password" 
//             name="confirmPassword" 
//             className={commonClassNameOfInput} 
//             placeholder="Confirm password" 
//             required 
//             onChange={handleChange} />
//         </div>
//         {/* newly added */}
//         <div className="py-5">
//   <Caption className="mb-2">Upload Profile Picture</Caption>
//   <input 
//     type="file" 
//     name="photo" 
//     className={commonClassNameOfInput} 
//     onChange={(e) => setFormData({...formData, photo: e.target.files[0]})}
//   />
// </div>

//         <div className="flex items-center gap-2 py-4">
//           <input 
//           type="checkbox" required />
//           <Caption>I agree to the Terms & Policy</Caption>
//         </div>
//         <PrimaryButton className="w-full rounded-none my-5" type="submit">CREATE ACCOUNT</PrimaryButton>
//       </form>
//     </section>
//   );
// };


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaFacebook, FaGoogle } from "react-icons/fa";
// import { Caption, Container, CustomNavLink, PrimaryButton, Title } from "../../router";
// import { commonClassNameOfInput } from "../../components/common/Design";
// import axios from "axios";

// export const Register = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "" 
//   });

//   const navigate = useNavigate();

//   // ✅ Prevent Access to Register Page if already logged in
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       navigate("/"); // Redirect to Home Page if already logged in
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

//   // ✅ Handle File Change
//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       photo: e.target.files[0],
//     });
//   };

//   // ✅ Handle Form Submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { name, email, password, confirmPassword } = formData;

//     // ✅ Trim Data
//     const trimmedData = {
//       name: name.trim(),
//       email: email.trim(),
//       password: password.trim(),
//       confirmPassword: confirmPassword.trim(),
//     };

//     console.log(JSON.stringify({ name, email, password, confirmPassword }));

//     // ✅ Form Validations
//     if (!trimmedData.name || !trimmedData.email || !trimmedData.password || !trimmedData.confirmPassword) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     if (trimmedData.password !== trimmedData.confirmPassword) {
//       alert("Passwords do not match.");
//       return;
//     }

//     // ✅ Send Form Data to Backend (with File)
//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append("name", trimmedData.name);
//       formDataToSend.append("email", trimmedData.email);
//       formDataToSend.append("password", trimmedData.password);
//       formDataToSend.append("confirmPassword", trimmedData.confirmPassword);
//       // formDataToSend.append("photo", photo);

//       // ✅ API Call
//       const response = await axios.post(
//         "http://localhost:5001/api/users/register",
//         formDataToSend,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );

//       // ✅ Extract Token & Role from Response
//       const { token, role } = response.data;

//       // ✅ Store Token & Role in LocalStorage
//       localStorage.setItem("token", token);
//       localStorage.setItem("role", role);

//       // ✅ Redirect to Home Page
//       alert("Registration successful!");
//       navigate("/");

//       // ✅ Clear Form Fields
//       setFormData({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: ""
//       });

//     } catch (error) {
//       console.error("Error in register:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "Registration failed.");
//     }
//   };

//   return (
//     <section className="register pt-16 relative">
//       <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute top-2/3"></div>
//       <div className="bg-[#241C37] pt-8 h-[40vh] relative content">
//         <Container>
//           <div>
//             <Title level={3} className="text-white">Sign Up</Title>
//             <div className="flex items-center gap-3">
//               <Title level={5} className="text-green font-normal text-xl">Home</Title>
//               <Title level={5} className="text-white font-normal text-xl">/</Title>
//               <Title level={5} className="text-white font-normal text-xl">Sign Up</Title>
//             </div>
//           </div>
//         </Container>
//       </div>

//       {/* ✅ Registration Form */}
//       <form onSubmit={handleSubmit} className="bg-white shadow-s3 w-1/3 m-auto my-16 p-8 rounded-xl">
//         <div className="text-center">
//           <Title level={5}>Sign Up</Title>
//           <p className="mt-2 text-lg">
//             Already have an account? <CustomNavLink href="/login">Log In Here</CustomNavLink>
//           </p>
//         </div>

//         <div className="py-5">
//           <Caption className="mb-2">Username *</Caption>
//           <input 
//             type="text" 
//             name="name" 
//             className={commonClassNameOfInput} 
//             placeholder="Enter your name" 
//             required 
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="py-5">
//           <Caption className="mb-2">Enter Your Email *</Caption>
//           <input 
//             type="email" 
//             name="email" 
//             className={commonClassNameOfInput} 
//             placeholder="Enter Your Email" 
//             required 
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <Caption className="mb-2">Password *</Caption>
//           <input 
//             type="password" 
//             name="password" 
//             className={commonClassNameOfInput} 
//             placeholder="Enter Your Password" 
//             required 
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <Caption className="mb-2">Confirm Password *</Caption>
//           <input 
//             type="password" 
//             name="confirmPassword" 
//             className={commonClassNameOfInput} 
//             placeholder="Confirm password" 
//             required 
//             value={formData.confirmPassword}
//             onChange={handleChange}
//           />
//         </div>

//         {/* ✅ File Upload */}
//         <div className="py-5">
//           <Caption className="mb-2">Upload Profile Picture</Caption>
//           <input 
//             type="file" 
//             name="photo" 
//             className={commonClassNameOfInput} 
//             onChange={handleFileChange}
//           />
//         </div>

//         <div className="flex items-center gap-2 py-4">
//           <input type="checkbox" required />
//           <Caption>I agree to the Terms & Policy</Caption>
//         </div>

//         <PrimaryButton className="w-full rounded-none my-5" type="submit">
//           CREATE ACCOUNT
//         </PrimaryButton>
//       </form>
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

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    photo: null, // ✅ File state
  });

  const navigate = useNavigate();

  // ✅ Prevent access if logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/"); // Redirect to Home if logged in
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

  // ✅ Handle File Change
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photo: e.target.files[0],
    });
  };

  // ✅ Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword, photo } = formData;

    // ✅ Basic Validation
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // ✅ Create FormData Object to Send File
    const formDataToSend = new FormData();
    formDataToSend.append("name", name.trim());
    formDataToSend.append("email", email.trim());
    formDataToSend.append("password", password.trim());
    formDataToSend.append("confirmPassword", confirmPassword.trim());

    if (photo) {
      formDataToSend.append("photo", photo);
    }

    // ✅ API Call with Multer Configuration
    try {
      const response = await axios.post(
        "http://localhost:5001/api/users/register",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for Multer
          },
          withCredentials: true,
        }
      );

      // ✅ Extract Token & Role
      const { token, role } = response.data;

      // ✅ Save Token & Role in LocalStorage
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      alert("Registration successful!");
      navigate("/");

      // ✅ Clear Form Fields
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        photo: null,
      });
    } catch (error) {
      console.error("Error in register:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <section className="register pt-16 relative bg-gradient-to-r from-blue-900 to-purple-500">
      <div className="bg-[#1B1A55] pt-8 h-[40vh] relative">
        <Container>
          <div>
            <Title level={3} className="text-white">Sign Up</Title>
            <div className="flex items-center gap-3 mt-2">
              <Title level={5} className="text-green-400 font-normal text-lg">
                Home
              </Title>
              <Title level={5} className="text-white font-normal text-lg">/</Title>
              <Title level={5} className="text-white font-normal text-lg">
                Sign Up
              </Title>
            </div>
          </div>
        </Container>
      </div>

      {/* ✅ Registration Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3 m-auto my-16 p-10 rounded-2xl"
        encType="multipart/form-data"
      >
        <div className="text-center">
          <Title level={5} className="text-blue-900">
            Create Your Account
          </Title>
          <p className="mt-2 text-lg text-gray-500">
            Already have an account?{" "}
            <CustomNavLink href="/login" className="text-blue-600 underline">
              Log In Here
            </CustomNavLink>
          </p>
        </div>

        {/* ✅ Username Input */}
        <div className="py-5">
          <Caption className="mb-2 text-gray-600">Username *</Caption>
          <input
            type="text"
            name="name"
            className={commonClassNameOfInput}
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* ✅ Email Input */}
        <div className="py-5">
          <Caption className="mb-2 text-gray-600">Enter Your Email *</Caption>
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

        {/* ✅ Password Input */}
        <div>
          <Caption className="mb-2 text-gray-600">Password *</Caption>
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

        {/* ✅ Confirm Password Input */}
        <div className="mt-5">
          <Caption className="mb-2 text-gray-600">Confirm Password *</Caption>
          <input
            type="password"
            name="confirmPassword"
            className={commonClassNameOfInput}
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        {/* ✅ File Upload */}
        <div className="py-5">
          <Caption className="mb-2 text-gray-600">Upload Profile Picture</Caption>
          <input
            type="file"
            name="photo"
            className={commonClassNameOfInput}
            onChange={handleFileChange}
            accept="image/*"
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

        {/* ✅ Submit Button */}
        <PrimaryButton
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg my-5 uppercase"
        >
          Create Account
        </PrimaryButton>
      </form>
    </section>
  );
};
