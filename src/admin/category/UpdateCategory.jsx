// import { PrimaryButton } from "../../router";
// import { Caption, commonClassNameOfInput, Title } from "../../components/common/Design";

// export const UpdateCategory = () => {
//   return (
//     <>
//       <section className="bg-white shadow-s1 p-8 rounded-xl">
//         <Title level={5} className=" font-normal mb-5">
//           Update Category
//         </Title>

//         <form>
//           <div className="w-full my-8">
//             <Caption className="mb-2">Title *</Caption>
//             <input type="text" name="title" className={`${commonClassNameOfInput}`} />
//           </div>

//           <PrimaryButton type="submit" className="rounded-none my-5">
//             Update
//           </PrimaryButton>
//         </form>
//       </section>
//     </>
//   );
// };


//anshul frontend new 

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Caption, PrimaryButton, Title } from "../../router";
import { commonClassNameOfInput } from "../../components/common/Design";

export const UpdateCategory = () => {
  const [title, setTitle] = useState("");
  const { id } = useParams(); 
  const navigate = useNavigate();

  const fetchCategory = async () => {
    try {
      const { data } = await axios.get(`/category/${id}`);
      setTitle(data.category.title);
    } catch (error) {
      console.error("Error fetching category:", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, [id]);

  const token = localStorage.getItem("token");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:5001/api/category/${id}`,
        { title },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Category updated successfully!");
      navigate("/category");
    } catch (error) {
      console.error("Error updating category:", error);
      alert("Failed to update category. Please try again.");
    }
  };
  

  return (
    <>
      <section className="bg-white shadow-s1 p-8 rounded-xl">
        <Title level={5} className="font-normal mb-5">
          Update Category
        </Title>
        <form onSubmit={handleSubmit}>
          <div className="w-full my-8">
            <Caption className="mb-2">Title *</Caption>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`${commonClassNameOfInput}`}
              placeholder="Enter updated category title"
              required
            />
          </div>

          <PrimaryButton type="submit" className="rounded-none my-5">
            UPDATE
          </PrimaryButton>
        </form>
      </section>
    </>
  );
};
