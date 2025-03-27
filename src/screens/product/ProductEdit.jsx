//raj

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { PrimaryButton, Caption, Title } from "../../router";
import { commonClassNameOfInput } from "../../components/common/Design";

export const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    auctionDays: "",
    auctionHours: "",
    auctionMinutes: "",
    image: null,
  });

  useEffect(() => {

    const fetchService = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/service/${id}`);
        const data = response.data;
        setFormData({
          title: data.title,
          category: data.category,
          price: data.price,
          description: data.description,
          auctionDays: data.auctionDays || "",
          auctionHours: data.auctionHours || "",
          auctionMinutes: data.auctionMinutes || "",
        });
      } catch (error) {
        console.error("Failed to fetch service:", error);
      }
    };

    fetchService();
  }, [id]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = new FormData();

    
    for (const key in formData) {
      if (formData[key]) updatedData.append(key, formData[key]);
    }

    try {
      await axios.put(`http://localhost:5001/api/service/${id}`, updatedData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      alert("Service updated successfully!");
      navigate("/"); 
    } catch (error) {
      console.error("Failed to update service:", error);
    }
  };

  return (
    <section className="bg-white shadow-s1 p-8 rounded-xl">
      <Title level={5} className="font-normal mb-5">
        Update Product
      </Title>
      <hr className="my-5" />
      <form onSubmit={handleSubmit}>

      
        <div className="w-full">
          <Caption className="mb-2">Title *</Caption>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={commonClassNameOfInput}
            placeholder="Title"
            required
          />
        </div>

  
        <div className="flex items-center gap-5 my-4">
          <div className="w-1/2">
            <Caption className="mb-2">Category *</Caption>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category"
              className={commonClassNameOfInput}
              required
            />
          </div>
        </div>

    
        <div className="w-full my-4">
          <Caption className="mb-2">Price Range *</Caption>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className={commonClassNameOfInput}
            placeholder="Price"
            required
          />
        </div>

   
        <div className="w-full my-4">
          <Caption className="mb-2">Description *</Caption>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={commonClassNameOfInput}
            cols="30"
            rows="5"
          ></textarea>
        </div>

    
        <div className="w-full my-4">
          <Caption className="mb-2">Image</Caption>
          <input type="file" className={commonClassNameOfInput} name="image" onChange={handleImageChange} />
        </div>

       
        <PrimaryButton type="submit" className="rounded-none my-5">
          Update
        </PrimaryButton>
      </form>
    </section>
  );
};







//anshul
// import { PrimaryButton, Caption, Title } from "../../router";
// import { commonClassNameOfInput } from "../../components/common/Design";

// export const ProductEdit = () => {
//   return (
//     <>
//       <section className="bg-white shadow-s1 p-8 rounded-xl">
//         <Title level={5} className=" font-normal mb-5">
//           Update Product
//         </Title>
//         <hr className="my-5" />
//         <form>
//           <div className="w-full">
//             <Caption className="mb-2">Title *</Caption>
//             <input type="text" name="title" className={`${commonClassNameOfInput}`} placeholder="Title" required />
//           </div>

//           <div className="flex items-center gap-5 my-4">
//             <div className="w-1/2">
//               <Caption className="mb-2">Height (cm) </Caption>
//               <input type="number" name="height" placeholder="height" className={`${commonClassNameOfInput}`} />
//             </div>
//             <div className="w-1/2">
//               <Caption className="mb-2">Length (cm) </Caption>
//               <input type="number" name="lengthpic" placeholder="Length" className={`${commonClassNameOfInput}`} />
//             </div>
//           </div>
//           <div className="flex items-center gap-5 my-4">
//             <div className="w-1/2">
//               <Caption className="mb-2">Width (cm) </Caption>
//               <input type="number" name="width" placeholder="width" className={`${commonClassNameOfInput}`} />
//             </div>
//             <div className="w-1/2">
//               <Caption className="mb-2">
//                 Medium used <span className=" text-purple-400 italic">(Typically, pencil, ink, charcoal or other)</span>
//               </Caption>
//               <input type="text" name="mediumused" placeholder="Medium used" className={commonClassNameOfInput} />
//             </div>
//           </div>
//           <div className="flex items-center gap-5 mt-4">
//             <div className="w-1/2">
//               <Caption className="mb-2">
//                 Weight of piece <span className=" text-purple-400 italic">(kg)</span>
//               </Caption>
//               <input type="number" name="weigth" placeholder="weigth" className={`${commonClassNameOfInput}`} />
//             </div>
//             <div className="w-1/2">
//               <Caption className="mb-2">Price Range*</Caption>
//               <input type="number" name="price" className={`${commonClassNameOfInput}`} placeholder="Price" required />
//             </div>
//           </div>

//           <div>
//             <Caption className="mb-2">Description *</Caption>
//             <textarea name="description" className={`${commonClassNameOfInput}`} cols="30" rows="5"></textarea>
//           </div>
//           <div>
//             <Caption className="mb-2">Image </Caption>
//             <input type="file" className={`${commonClassNameOfInput}`} name="image" />
//           </div>
//           <PrimaryButton type="submit" className="rounded-none my-5">
//             Update
//           </PrimaryButton>
//         </form>
//       </section>
//     </>
//   );
// };
