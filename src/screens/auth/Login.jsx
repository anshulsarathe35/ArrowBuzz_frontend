// import React,{useState} from "react";
// import { FaFacebook, FaGoogle } from "react-icons/fa";
// import { Caption, Container, CustomNavLink, PrimaryButton, Title } from "../../router";
// import { commonClassNameOfInput } from "../../components/common/Design";
// import axios from "axios";



// export const Login = () => {

//   const [formData,setFormData] = useState({
//     email:"",
//     password:""
//   });

//   const handleChange = (e)=>{
//     const {name,value} = e.target;
//     setFormData({
//       ...formData,
//       [name]:value,
//     });
//   };

//   const handleSubmit = async(e)=>{
//     e.preventDefault();

//     const {email,password} = formData;

//     const trimmedData = {
//       email: email.trim(),
//       password: password.trim(),
//     };

//     console.log(JSON.stringify({email,password}));

//     if(!trimmedData.email || !trimmedData.password){
//       alert("frontend Please fill in all required fields");
//       return ;
//     }
//     try{
//       const response = await axios.post(
//         "http://localhost:5001/api/users/login",
//         { email: trimmedData.email, password: trimmedData.password },
//         {
//           headers: { "Content-Type": "application/json" },
//           withCredentials: true,  // Ensuring cookies are sent with request
//         }
//       );
//       alert("Login Successful!");
//       console.log("User logged in successfully:",response.data);

//       setFormData({
//         email:"",
//         password:""
//       });
//     }catch(error){
//       console.log("Error in login:",error.response?.data || error.message);
//       alert(error.response?.data?.message || "Login failed.");
//     }
//   };


//   return (
//     <>
//       <section className="regsiter pt-16 relative">
//         <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute top-2/3"></div>
//         <div className="bg-[#241C37] pt-8 h-[40vh] relative content">
//           <Container>
//             <div>
//               <Title level={3} className="text-white">Log In</Title>
//               <div className="flex items-center gap-3">
//                 <Title level={5} className="text-green font-normal text-xl">Home</Title>
//                 <Title level={5} className="text-white font-normal text-xl">/</Title>
//                 <Title level={5} className="text-white font-normal text-xl">Log In</Title>
//               </div>
//             </div>
//           </Container>
//         </div>

//         <form onSubmit={handleSubmit} className="bg-white shadow-s3 w-1/3 m-auto my-16 p-8 rounded-xl">
//           <div className="text-center">
//             <Title level={5}>New Member</Title>
//             <p className="mt-2 text-lg">
//               Don't have an account? <CustomNavLink href="/register">Signup Here</CustomNavLink>
//             </p>
//           </div>

//           <div className="py-5 mt-8">
//             <Caption className="mb-2">Enter Your Email *</Caption>
//             <input
//               type="email"
//               name="email"
//               className={commonClassNameOfInput}
//               placeholder="Enter Your Email"
//               required
//               value={formData.email}  // Controlled input
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <Caption className="mb-2">Password *</Caption>
//             <input
//               type="password"
//               name="password"
//               className={commonClassNameOfInput}
//               placeholder="Enter Your Password"
//               required
//               value={formData.password}  // Controlled input
//               onChange={handleChange}
//             />
//           </div>

//           <div className="flex items-center gap-2 py-4">
//             <input type="checkbox" />
//             <Caption>I agree to the Terms & Policy</Caption>
//           </div>

//           <PrimaryButton type="submit" className="w-full rounded-none my-5">LOGIN</PrimaryButton>

//           <div className="text-center border py-4 rounded-lg mt-4">
//             <Title>OR SIGN IN WITH</Title>
//             <div className="flex items-center justify-center gap-5 mt-5">
//               <button className="flex items-center gap-2 bg-red-500 text-white p-3 px-5 rounded-sm">
//                 <FaGoogle />
//                 <p className="text-sm">SIGN IN WITH GOOGLE</p>
//               </button>
//               <button className="flex items-center gap-2 bg-indigo-500 text-white p-3 px-5 rounded-sm">
//                 <FaFacebook />
//                 <p className="text-sm">SIGN IN WITH FACEBOOK</p>
//               </button>
//             </div>
//           </div>

//           <p className="text-center mt-5">
//             By clicking the signup button, you create a Cobiro account, and you agree to Cobiro’s 
//             <span className="text-green underline"> Terms & Conditions </span> & 
//             <span className="text-green underline"> Privacy Policy </span>.
//           </p>
//         </form>
//         <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute bottom-96 right-0"></div>
//       </section>
//     </>
//   );
// };


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaFacebook, FaGoogle } from "react-icons/fa";
// import { Caption, Container, CustomNavLink, PrimaryButton, Title } from "../../router";
// import { commonClassNameOfInput } from "../../components/common/Design";
// import axios from "axios";

// export const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });

//   const navigate = useNavigate();

//   // ✅ Prevent access to login page if already logged in
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       navigate("/"); // Redirect to home if already logged in
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
//       alert("Please fill in all required fields");
//       return;
//     }

//     // ✅ API Call to Login
//     try {
//       const response = await axios.post(
//         "http://localhost:5001/api/users/login",
//         { email: trimmedData.email, password: trimmedData.password },
//         {
//           headers: { "Content-Type": "application/json" },
//           withCredentials: true,
//         }
//       );

//       // ✅ If Login is successful
//       const { token, role } = response.data;

//       // ✅ Store token & role in localStorage
//       localStorage.setItem("token", token);
//       localStorage.setItem("role", role);

//       // ✅ Redirect to Home Page
//       navigate("/");

//       // ✅ Clear form fields
//       setFormData({
//         email: "",
//         password: ""
//       });

//     } catch (error) {
//       console.log("Error in login:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "Login failed.");
//     }
//   };

//   return (
//     <>
//       <section className="regsiter pt-16 relative">
//         <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute top-2/3"></div>
//         <div className="bg-[#241C37] pt-8 h-[40vh] relative content">
//           <Container>
//             <div>
//               <Title level={3} className="text-white">Log In</Title>
//               <div className="flex items-center gap-3">
//                 <Title level={5} className="text-green font-normal text-xl">Home</Title>
//                 <Title level={5} className="text-white font-normal text-xl">/</Title>
//                 <Title level={5} className="text-white font-normal text-xl">Log In</Title>
//               </div>
//             </div>
//           </Container>
//         </div>

//         {/* ✅ Login Form */}
//         <form onSubmit={handleSubmit} className="bg-white shadow-s3 w-1/3 m-auto my-16 p-8 rounded-xl">
//           <div className="text-center">
//             <Title level={5}>New Member</Title>
//             <p className="mt-2 text-lg">
//               Don't have an account? <CustomNavLink href="/register">Signup Here</CustomNavLink>
//             </p>
//           </div>

//           <div className="py-5 mt-8">
//             <Caption className="mb-2">Enter Your Email *</Caption>
//             <input
//               type="email"
//               name="email"
//               className={commonClassNameOfInput}
//               placeholder="Enter Your Email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <Caption className="mb-2">Password *</Caption>
//             <input
//               type="password"
//               name="password"
//               className={commonClassNameOfInput}
//               placeholder="Enter Your Password"
//               required
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="flex items-center gap-2 py-4">
//             <input type="checkbox" />
//             <Caption>I agree to the Terms & Policy</Caption>
//           </div>

//           <PrimaryButton type="submit" className="w-full rounded-none my-5">
//             LOGIN
//           </PrimaryButton>

//           <div className="text-center border py-4 rounded-lg mt-4">
//             <Title>OR SIGN IN WITH</Title>
//             <div className="flex items-center justify-center gap-5 mt-5">
//               <button className="flex items-center gap-2 bg-red-500 text-white p-3 px-5 rounded-sm">
//                 <FaGoogle />
//                 <p className="text-sm">SIGN IN WITH GOOGLE</p>
//               </button>
//               <button className="flex items-center gap-2 bg-indigo-500 text-white p-3 px-5 rounded-sm">
//                 <FaFacebook />
//                 <p className="text-sm">SIGN IN WITH FACEBOOK</p>
//               </button>
//             </div>
//           </div>

//           <p className="text-center mt-5">
//             By clicking the signup button, you create a Cobiro account, and you agree to Cobiro’s 
//             <span className="text-green underline"> Terms & Conditions </span> & 
//             <span className="text-green underline"> Privacy Policy </span>.
//           </p>
//         </form>
//       </section>
//     </>
//   );
// };


//anshul frontend new 
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Caption, Container, CustomNavLink, PrimaryButton, Title } from "../../router";
import { commonClassNameOfInput } from "../../components/common/Design";
import axios from "axios";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
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
    const { email, password } = formData;
    if (!email.trim() || !password.trim()) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5001/api/users/login",
        { email: email.trim(), password: password.trim() },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      
      const { token, role } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      navigate("/");
      setFormData({ email: "", password: "" });
    } catch (error) {
      console.log("Error in login:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Login failed.");
    }
  };

  return (
    <section className="login-page pt-16 relative">
      <div className="bg-gradient-to-r from-blue-900 to-purple-500 pt-8 h-64 flex items-center justify-center">
        <Container>
          <Title level={3} className="text-white text-center">Log In</Title>
          <div className="flex justify-center gap-3 mt-2">
            <Title level={5} className="text-green font-normal">Home</Title>
            <span className="text-white">/</span>
            <Title level={5} className="text-white font-normal">Log In</Title>
          </div>
        </Container>
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-lg w-[90%] md:w-1/3 mx-auto my-16 p-8 rounded-xl">
        <div className="text-center">
          <Title level={5}>Welcome Back!</Title>
          <p className="mt-2 text-lg">
            Don't have an account? <CustomNavLink href="/register">Sign Up</CustomNavLink>
          </p>
        </div>

        <div className="mt-8">
          <Caption className="mb-2">Email Address</Caption>
          <input
            type="email"
            name="email"
            className={commonClassNameOfInput}
            placeholder="Enter Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mt-5">
          <Caption className="mb-2">Password</Caption>
          <input
            type="password"
            name="password"
            className={commonClassNameOfInput}
            placeholder="Enter Your Password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center gap-2 py-4">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms" className="text-gray-600 text-sm">
            I agree to the Terms & Policy
          </label>
        </div>

        <PrimaryButton type="submit" className="w-full rounded-none mt-5">
          LOGIN
        </PrimaryButton>

        
      </form>
    </section>
  );
};
