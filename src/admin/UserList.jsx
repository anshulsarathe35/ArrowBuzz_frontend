// //raj
// import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { Title, ProfileCard } from "../router";
// import { TiEyeOutline } from "react-icons/ti";
// import { User2 } from "../components/hero/Hero";

// export const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch users from API
//   useEffect(() => {
//     const fetchUsers = async () => {
//       const token = localStorage.getItem("token"); // ✅ Get token from localStorage

//       try {
//         const response = await fetch("http://localhost:5001/api/users/allusers", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`, // ✅ Send token in Authorization header
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Not authorized, please login"); // ✅ Handle auth error properly
//         }

//         const data = await response.json();
//         setUsers(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <section className="shadow-s1 p-8 rounded-lg">
//       <div className="flex justify-between">
//         <Title level={5} className="font-normal">
//           User Lists
//         </Title>
//       </div>
//       <hr className="my-5" />

//       {loading ? (
//         <p className="text-center text-gray-500">Loading users...</p>
//       ) : error ? (
//         <p className="text-center text-red-500">Error: {error}</p>
//       ) : (
//         <div className="relative overflow-x-auto rounded-lg">
//           <table className="w-full text-sm text-left rtl:text-right text-gray-500">
//             <thead className="text-xs text-gray-700 uppercase bg-gray-100">
//               <tr>
//                 <th scope="col" className="px-6 py-5">S.N</th>
//                 <th scope="col" className="px-6 py-5">Username</th>
//                 <th scope="col" className="px-6 py-5">Email</th>
//                 <th scope="col" className="px-6 py-5">Role</th>
//                 <th scope="col" className="px-6 py-5">Photo</th>
//                 <th scope="col" className="px-6 py-5">Date</th>
//                 <th scope="col" className="px-6 py-3 flex justify-end">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user, index) => (
//                 <tr key={user._id} className="bg-white border-b hover:bg-gray-50">
//                   <td className="px-6 py-4">{index + 1}</td>
//                   <td className="px-6 py-4 capitalize">{user.name}</td>
//                   <td className="px-6 py-4">{user.email}</td>
//                   <td className="px-6 py-4 capitalize">{user.role || "User"}</td>
//                   <td className="px-6 py-4">
//                     <ProfileCard>
//                       <img
//                         src={user.photo || User2}
//                         alt={user.name}
//                         className="w-10 h-10 rounded-full"
//                       />
//                     </ProfileCard>
//                   </td>
//                   <td className="px-6 py-4">
//                     {new Date(user.createdAt).toDateString()}
//                   </td>
//                   <td className="py-4 flex justify-end px-8">
//                     <NavLink
//                       to={`/getparticularuser/${user._id}`}
//                       className="font-medium text-indigo-500"
//                     >
//                       <TiEyeOutline size={25} />
//                     </NavLink>
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

//anshul frontend new
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Title, ProfileCard } from "../router";
import { TiEyeOutline } from "react-icons/ti";
import { User2 } from "../components/hero/Hero";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch("http://localhost:5001/api/users/allusers", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Not authorized, please login");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white shadow-2xl p-8 rounded-3xl text-black">
      <div className="flex justify-between mb-6">
        <Title level={5} className="font-bold text-2xl text-black">
          User Lists
        </Title>
      </div>
      <hr className="my-5 border-gray-300" />
      {loading ? (
        <p className="text-center text-gray-300">Loading users...</p>
      ) : error ? (
        <p className="text-center text-red-400">Error: {error}</p>
      ) : (
        <div className="relative overflow-x-auto rounded-xl bg-white shadow-md">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs uppercase bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800">
              <tr>
                <th scope="col" className="px-6 py-5">S.N</th>
                <th scope="col" className="px-6 py-5">Username</th>
                <th scope="col" className="px-6 py-5">Email</th>
                <th scope="col" className="px-6 py-5">Role</th>
                <th scope="col" className="px-6 py-5">Photo</th>
                <th scope="col" className="px-6 py-5">Date</th>
                <th scope="col" className="px-6 py-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user._id}
                  className="bg-gray-100 border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4 capitalize">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4 capitalize">{user.role || "User"}</td>
                  <td className="px-6 py-4">
                    <ProfileCard>
                      <img
                        src={user.photo || User2}
                        alt={user.name}
                        className="w-10 h-10 rounded-full"
                      />
                    </ProfileCard>
                  </td>
                  <td className="px-6 py-4">
                    {new Date(user.createdAt).toDateString()}
                  </td>
                  <td className="py-4 flex justify-end px-8">
                    <NavLink
                      to={`/getparticularuser/${user._id}`}
                      className="font-medium text-indigo-500"
                    >
                      <TiEyeOutline size={25} />
                    </NavLink>
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




//anshul
// import { NavLink } from "react-router-dom";
// import { Title, ProfileCard } from "../router";
// import { TiEyeOutline } from "react-icons/ti";
// import { User2 } from "../components/hero/Hero";

// export const UserList = () => {
//   return (
//     <section className="shadow-s1 p-8 rounded-lg">
//       <div className="flex justify-between">
//         <Title level={5} className=" font-normal">
//           User Lists
//         </Title>
//       </div>
//       <hr className="my-5" />
//       <div className="relative overflow-x-auto rounded-lg">
//         <table className="w-full text-sm text-left rtl:text-right text-gray-500">
//           <thead className="text-xs text-gray-700 uppercase bg-gray-100">
//             <tr>
//               <th scope="col" className="px-6 py-5">
//                 S.N
//               </th>
//               <th scope="col" className="px-6 py-5">
//                 Username
//               </th>
//               <th scope="col" className="px-6 py-5">
//                 Email
//               </th>
//               <th scope="col" className="px-6 py-5">
//                 Role
//               </th>
//               <th scope="col" className="px-6 py-5">
//                 Photo
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Date
//               </th>
//               <th scope="col" className="px-6 py-3 flex justify-end">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="bg-white border-b hover:bg-gray-50">
//               <td className="px-6 py-4">1</td>
//               <td className="px-6 py-4 capitalize">Sunil BK</td>
//               <td className="px-6 py-4">example@gmail.com</td>
//               <td className="px-6 py-4 capitalize">Admin</td>
//               <td className="px-6 py-4">
//                 <ProfileCard>
//                   <img src={User2} alt={User2} />
//                 </ProfileCard>
//               </td>
//               <td className="px-6 py-4">Dec 20 2024</td>
//               <td className="py-4 flex justify-end px-8">
//                 <NavLink to="#" type="button" className="font-medium text-indigo-500">
//                   <TiEyeOutline size={25} />
//                 </NavLink>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };
