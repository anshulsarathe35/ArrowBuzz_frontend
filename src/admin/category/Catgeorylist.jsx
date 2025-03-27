// import { AiOutlinePlus } from "react-icons/ai";
// import { NavLink } from "react-router-dom";
// import { Title, PrimaryButton, ProfileCard } from "../../router";
// import { TiEyeOutline } from "react-icons/ti";
// import { CiEdit } from "react-icons/ci";
// import { MdOutlineDeleteOutline } from "react-icons/md";
// import { User2 } from "../../components/hero/Hero";

// export const Catgeorylist = () => {
//   return (
//     <>
//       <section className="shadow-s1 p-8 rounded-lg">
//         <div className="flex justify-between">
//           <Title level={5} className=" font-normal">
//             Category Lists
//           </Title>
//           <NavLink to="/category/create">
//             <PrimaryButton className="flex items-center gap-3 px-5 py-2 text-sm rounded-md transition-transform hover:scale-105">
//               <AiOutlinePlus size={20} />
//               <span>Create Category</span>
//             </PrimaryButton>
//           </NavLink>
//         </div>
//         <hr className="my-5" />
//         <div className="relative overflow-x-auto rounded-lg">
//           <table className="w-full text-sm text-left rtl:text-right text-gray-500">
//             <thead className="text-xs text-gray-700 uppercase bg-gray-100">
//               <tr>
//                 <th scope="col" className="px-6 py-5">
//                   S.N
//                 </th>
//                 <th scope="col" className="px-20 py-5">
//                   User
//                 </th>
//                 <th scope="col" className="px-6 py-5">
//                   Title
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Date
//                 </th>
//                 <th scope="col" className="px-6 py-3 flex justify-end">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="bg-white border-b hover:bg-gray-50">
//                 <td className="px-6 py-4">1</td>
//                 <td className="px-6 py-4">
//                   <div className="flex items-center px-6 text-gray-900 whitespace-nowrap">
//                     <div>
//                       <ProfileCard>
//                         <img src={User2} alt="" />
//                       </ProfileCard>
//                     </div>
//                     <div className="pl-3">
//                       <div className="text-base font-semibold capitalize"> Sunil BK</div>
//                       <div className="font-normal text-gray-500"> example@gmail.com</div>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4">Categeory One</td>
//                 <td className="px-6 py-4">Dec 10 2020</td>

//                 <td className="px-6 py-4 text-center flex items-center justify-end gap-3 mt-1">
//                   <NavLink to="#" type="button" className="font-medium text-indigo-500">
//                     <TiEyeOutline size={25} />
//                   </NavLink>
//                   <NavLink to={`/category/update/1000`} className="font-medium text-green">
//                     <CiEdit size={25} />
//                   </NavLink>
//                   <button className="font-medium text-red-500">
//                     <MdOutlineDeleteOutline size={25} />
//                   </button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </>
//   );
// };

import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { TiEyeOutline } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { Title, PrimaryButton, ProfileCard } from "../../router";
import { User2 } from "../../components/hero/Hero";

export const Catgeorylist = () => {
  const [categories, setCategories] = useState([]);

  // Fetch categories from /category/
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get("http://localhost:5001/api/category/");
      console.log(data)
      setCategories(data); 
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <section className="shadow-s1 p-8 rounded-lg">
        <div className="flex justify-between">
          <Title level={5} className="font-normal">
            Category Lists
          </Title>
          <NavLink to="/category/create">
            <PrimaryButton className="flex items-center gap-3 px-5 py-2 text-sm rounded-md transition-transform hover:scale-105">
              <AiOutlinePlus size={20} />
              <span>Create Category</span>
            </PrimaryButton>
          </NavLink>
        </div>
        <hr className="my-5" />
        <div className="relative overflow-x-auto rounded-lg">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs uppercase bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800">
              <tr>
                <th scope="col" className="px-6 py-5">S.N</th>
                <th scope="col" className="px-6 py-5">Category Title</th>
                <th scope="col" className="px-6 py-5">Created By</th>
                <th scope="col" className="px-6 py-5">Email</th>
                <th scope="col" className="px-6 py-5">Photo</th>
                <th scope="col" className="px-6 py-5">Date</th>
                <th scope="col" className="px-6 py-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.length > 0 ? (
                categories.map((category, index) => (
                  <tr
                    key={category._id}
                    className="bg-gray-100 border-b hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4 capitalize">{category.title}</td>
                    <td className="px-6 py-4 capitalize">
                      {category.userName || "Admin"}
                    </td>
                    <td className="px-6 py-4">
                      {category.userEmail || "admin@example.com"}
                    </td>
                    <td className="px-6 py-4">
                      <ProfileCard>
                        <img
                          src={category.userPhoto || User2}
                          alt={category.userName || "Admin"}
                          className="w-10 h-10 rounded-full"
                        />
                      </ProfileCard>
                    </td>
                    <td className="px-6 py-4">
                      {new Date(category.createdAt).toDateString()}
                    </td>
                    <td className="py-4 flex justify-end px-8 gap-3">
                      <NavLink
                        to={`/category/view/${category._id}`}
                        className="font-medium text-indigo-500"
                      >
                        <TiEyeOutline size={25} />
                      </NavLink>
                      <NavLink
                        to={`/category/update/${category._id}`}
                        className="font-medium text-green-500"
                      >
                        <CiEdit size={25} />
                      </NavLink>
                      <button
                        className="font-medium text-red-500"
                        onClick={() => handleDelete(category._id)}
                      >
                        <MdOutlineDeleteOutline size={25} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No categories found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

const handleDelete = async (id) => {
  if (window.confirm("Are you sure you want to delete this category?")) {
    try {
      await axios.delete(`/category/${id}`);
      alert("Category deleted successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  }
};
