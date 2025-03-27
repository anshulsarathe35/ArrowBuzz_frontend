// import React from "react";
// import { Caption, Title } from "../../router";
// import { User2 } from "../../components/hero/Hero";
// import { commonClassNameOfInput, PrimaryButton } from "../../components/common/Design";

// export const UserProfile = () => {
//   return (
//     <>
//       <section className="shadow-s1 p-8 rounded-lg">
//         <div className="profile flex items-center gap-8">
//           <img src={User2} alt="" className="w-24 h-24 rounded-full object-cover" />
//           <div>
//             <Title level={5} className="capitalize">
//               Sunil Bk
//             </Title>
//             <Caption>example@gmail.com</Caption>
//           </div>
//         </div>
//         <form>
//           <div className="flex items-center gap-5 mt-10">
//             <div className="w-full">
//               <Caption className="mb-2">Full Name </Caption>
//               <input type="search" className={`capitalize ${commonClassNameOfInput}`} placeholder="Sunil" readOnly />
//             </div>
//           </div>
//           <div className="flex items-center gap-5 mt-10">
//             <div className="w-1/2">
//               <Caption className="mb-2">Contact Number</Caption>
//               <input type="search" className={commonClassNameOfInput} placeholder="Contact Number" />
//             </div>
//             <div className="w-1/2">
//               <Caption className="mb-2">Email</Caption>
//               <input type="search" className={commonClassNameOfInput} placeholder="example@gmail.com" disabled />
//             </div>
//           </div>
//           <div className="my-8">
//             <Caption className="mb-2">Role</Caption>
//             <input type="search" className={commonClassNameOfInput} placeholder="admin" required />
//           </div>
//           <div className="my-8">
//             <Caption className="mb-2">Profile Picture</Caption>
//             <input type="search" className={commonClassNameOfInput} placeholder="Working" required />
//           </div>
//           <PrimaryButton>Update Profile</PrimaryButton>
//         </form>
//       </section>
//     </>
//   );
// };





//raj
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Caption, Title } from "../../router";
// import { commonClassNameOfInput, PrimaryButton } from "../../components/common/Design";

// export const UserProfile = () => {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     phoneNo: "",
//     role: "",
//     photo: "",
//   });

//   // ✅ Fetch User Details from Backend API
//   const fetchUserDetails = async () => {
//     try {
//       const response = await axios.get("http://localhost:5001/api/users/getuser", {
//         withCredentials: true,
//       });

//       // ✅ Set User Details from API Response
//       setUser(response.data);
//     } catch (error) {
//       console.error("Failed to fetch user details:", error);
//     }
//   };

//   useEffect(() => {
//     fetchUserDetails();
//   }, []);

//   // ✅ Handle Input Change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   // ✅ Update User Details
//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`http://localhost:5001/api/users/updateprofile/${user._id}`, user, {
//         withCredentials: true,
//       });
//       alert("Profile updated successfully!");
//       setUser(response.data);
//     } catch (error) {
//       console.error("Failed to update profile:", error);
//       alert("Failed to update profile");
//     }
//   };

//   return (
//     <>
//       <section className="shadow-s1 p-8 rounded-lg">
//         {/* ✅ Profile Header */}
//         <div className="profile flex items-center gap-8">
//           <img
//             src={user.photo || "https://via.placeholder.com/150"}
//             alt="Profile"
//             className="w-24 h-24 rounded-full object-cover"
//           />
//           <div>
//             <Title level={5} className="capitalize">
//               {user.name || "Loading..."}
//             </Title>
//             <Caption>{user.email || "Loading..."}</Caption>
//           </div>
//         </div>

//         {/* ✅ Profile Form */}
//         <form onSubmit={handleUpdate}>
//           <div className="flex items-center gap-5 mt-10">
//             <div className="w-full">
//               <Caption className="mb-2">Full Name</Caption>
//               <input
//                 type="text"
//                 name="name"
//                 className={`capitalize ${commonClassNameOfInput}`}
//                 value={user.name}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="flex items-center gap-5 mt-10">
//             <div className="w-1/2">
//               <Caption className="mb-2">Contact Number</Caption>
//               <input
//                 type="text"
//                 name="phoneNo"
//                 className={commonClassNameOfInput}
//                 value={user.phoneNo}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="w-1/2">
//               <Caption className="mb-2">Email</Caption>
//               <input
//                 type="text"
//                 name="email"
//                 className={commonClassNameOfInput}
//                 value={user.email}
//                 onChange={user.role === "admin" ? handleChange : undefined} // Allow change only for admin
//                 readOnly={user.role !== "admin"} // Make read-only if not admin
//               />
//             </div>
//           </div>
//           <div className="my-8">
//             <Caption className="mb-2">Role</Caption>
//             <input
//               type="text"
//               className={commonClassNameOfInput}
//               value={user.role}
//               readOnly
//             />
//           </div>

//           <div className="my-8">
//             <Caption className="mb-2">Profile Picture URL</Caption>
//             <input
//               type="text"
//               name="photo"
//               className={commonClassNameOfInput}
//               value={user.photo}
//               onChange={handleChange}
//             />
//           </div>

//           {/* ✅ Update Button */}
//           <PrimaryButton type="submit">Update Profile</PrimaryButton>
//         </form>
//       </section>
//     </>
//   );
// };

//anshul frontend new 

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Caption, Title } from "../../router";
import {
  commonClassNameOfInput,
  PrimaryButton,
} from "../../components/common/Design";

export const UserProfile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNo: "",
    role: "",
    photo: "",
  });

  const [photoFile, setPhotoFile] = useState(null); 


  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/users/getuser",
        {
          withCredentials: true,
        }
      );

      const userData = response.data;
      setUser({
        ...userData,
        photo: userData.photo
          ? `http://localhost:5001${userData.photo}`
          : "/images/user-default.png",
      });
    } catch (error) {
      console.error("Failed to fetch user details:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };


  const handleFileChange = (e) => {
    setPhotoFile(e.target.files[0]);
  };


  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", user.name);
      formData.append("email", user.email);
      formData.append("phoneNo", user.phoneNo);
      formData.append("role", user.role);

 
      if (photoFile) {
        formData.append("photo", photoFile);
      }

     
      const response = await axios.put(
        `http://localhost:5001/api/users/updateprofile/${user._id}`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Profile updated successfully!");
      fetchUserDetails(); 
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <>
      <section className="shadow-s1 p-8 rounded-xl bg-gray-200 shadow-2xl">
   
        <div className="profile flex items-center gap-8">
          <img
            src={user.photo}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/user-default.png"; 
            }}
          />
          <div>
            <Title level={5} className="capitalize">
              {user.name || "Loading..."}
            </Title>
            <Caption>{user.email || "Loading..."}</Caption>
          </div>
        </div>

      
        <form onSubmit={handleUpdate} encType="multipart/form-data">
          <div className="flex items-center gap-5 mt-10">
            <div className="w-full">
              <Caption className="mb-2">Full Name</Caption>
              <input
                type="text"
                name="name"
                className={`capitalize ${commonClassNameOfInput} rounded-xl shadow-lg`}
                value={user.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center gap-5 mt-10">
            <div className="w-1/2">
              <Caption className="mb-2">Contact Number</Caption>
              <input
                type="text"
                name="phoneNo"
                className= {`${commonClassNameOfInput} rounded-xl shadow-lg`}
                value={user.phoneNo}
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2">
              <Caption className="mb-2">Email</Caption>
              <input
                type="text"
                name="email"
                className={`${commonClassNameOfInput} rounded-xl shadow-lg`}
                value={user.email}
                onChange={user.role === "admin" ? handleChange : undefined} 
                readOnly 
              />
            </div>
          </div>

          <div className="my-8">
            <Caption className="mb-2">Role</Caption>
            <input
              type="text"
              className={`${commonClassNameOfInput} rounded-xl shadow-lg`}
              value={user.role}
              readOnly
            />
          </div>

         
          <div className="my-8">
            <Caption className="mb-2">Profile Picture</Caption>
            <input
              type="file"
              name="photo"
              className={`${commonClassNameOfInput} rounded-xl shadow-lg`}
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

        
          <PrimaryButton type="submit">Update Profile</PrimaryButton>
        </form>
      </section>
    </>
  );
};







//anshul
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Caption, Title } from "../../router";
// import { commonClassNameOfInput, PrimaryButton } from "../../components/common/Design";

// export const UserProfile = () => {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     role: "",
//     photo: "",
//   });

//   // ✅ Fetch User Details from Backend API
//   const fetchUserDetails = async () => {
//     try {
//       const response = await axios.get("http://localhost:5001/api/users/getuser", {
//         withCredentials: true,
//       });

//       // ✅ Set User Details from API Response
//       setUser(response.data);
//     } catch (error) {
//       console.error("Failed to fetch user details:", error);
//     }
//   };

//   useEffect(() => {
//     fetchUserDetails();
//   }, []);

//   return (
//     <>
//       <section className="shadow-s1 p-8 rounded-lg">
//         {/* ✅ Profile Header */}
//         <div className="profile flex items-center gap-8">
//           <img
//             src={user.photo || "https://via.placeholder.com/150"}
//             alt="Profile"
//             className="w-24 h-24 rounded-full object-cover"
//           />
//           <div>
//             <Title level={5} className="capitalize">
//               {user.name || "Loading..."}
//             </Title>
//             <Caption>{user.email || "Loading..."}</Caption>
//           </div>
//         </div>

//         {/* ✅ Profile Form */}
//         <form>
//           <div className="flex items-center gap-5 mt-10">
//             <div className="w-full">
//               <Caption className="mb-2">Full Name </Caption>
//               <input
//                 type="text"
//                 className={`capitalize ${commonClassNameOfInput}`}
//                 value={user.name}
//                 readOnly
//               />
//             </div>
//           </div>

//           <div className="flex items-center gap-5 mt-10">
//             <div className="w-1/2">
//               <Caption className="mb-2">Contact Number</Caption>
//               <input
//                 type="text"
//                 className={commonClassNameOfInput}
//                 value={user.contact}
//                 readOnly
//               />
//             </div>
//             <div className="w-1/2">
//               <Caption className="mb-2">Email</Caption>
//               <input
//                 type="text"
//                 className={commonClassNameOfInput}
//                 value={user.email}
//                 readOnly
//               />
//             </div>
//           </div>

//           <div className="my-8">
//             <Caption className="mb-2">Role</Caption>
//             <input
//               type="text"
//               className={commonClassNameOfInput}
//               value={user.role}
//               readOnly
//             />
//           </div>

//           <div className="my-8">
//             <Caption className="mb-2">Profile Picture URL</Caption>
//             <input
//               type="text"
//               className={commonClassNameOfInput}
//               value={user.photo}
//               readOnly
//             />
//           </div>

//           <PrimaryButton className="opacity-50 cursor-not-allowed">
//             Profile Locked (Read-Only)
//           </PrimaryButton>
//         </form>
//       </section>
//     </>
//   );
// };
