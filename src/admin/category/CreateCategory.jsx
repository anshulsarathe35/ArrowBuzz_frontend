// import { Caption, PrimaryButton, Title } from "../../router";
// import { commonClassNameOfInput } from "../../components/common/Design";

// export const CreateCategory = () => {
//   return (
//     <>
//       <section className="bg-white shadow-s1 p-8 rounded-xl">
//         <Title level={5} className=" font-normal mb-5">
//           Create Category
//         </Title>
//         <form>
//           <div className="w-full my-8">
//             <Caption className="mb-2">Title *</Caption>
//             <input type="text" className={`${commonClassNameOfInput}`} placeholder="Title" required />
//           </div>

//           <PrimaryButton type="submit" className="rounded-none my-5">
//             CREATE
//           </PrimaryButton>
//         </form>
//       </section>
//     </>
//   );
// };

//anshul frontend new 
import { useState } from "react";
import axios from "axios";
import { Caption, PrimaryButton, Title } from "../../router";
import { commonClassNameOfInput } from "../../components/common/Design";
import { useNavigate } from "react-router-dom";

export const CreateCategory = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const token = localStorage.getItem("token"); 

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.post(
      "http://localhost:5001/api/category/",
      { title },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    alert("Category created successfully!");
    navigate("/category"); 
  } catch (error) {
    console.error("Error creating category:", error);
    alert("Failed to create category. Please try again.");
  }
};


  return (
    <>
      <section className="bg-white shadow-s1 p-8 rounded-xl">
        <Title level={5} className="font-normal mb-5">
          Create Category
        </Title>
        <form onSubmit={handleSubmit}>
          <div className="w-full my-8">
            <Caption className="mb-2">Title *</Caption>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`${commonClassNameOfInput}`}
              placeholder="Enter category title"
              required
            />
          </div>

          <PrimaryButton type="submit" className="rounded-none my-5">
            CREATE
          </PrimaryButton>
        </form>
      </section>
    </>
  );
};
