// import { CategoryDropDown, Caption, PrimaryButton, Title } from "../../router";
// import { commonClassNameOfInput } from "../../components/common/Design";
// import { useState } from "react";
// import axios from "axios";


// const initialState = {
//   title: "",
//   description: "",
//   price: "",
//   height: "",
//   lengthpic: "",
//   width: "",
//   mediumused: "",
//   weigth: "",
//   category: null,
// };

// export const AddProduct = () => {

//   const [formData,setFormData] = useState({
//   title: "",
//   description: "",
//   price: "",
//   height: "",
//   lengthpic: "",
//   width: "",
//   mediumused: "",
//   weigth: "",
//   category: null,
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

//     const {title,description,price,height,lengthpic,width,mediumused,weigth,category} = formData;

//     const trimmedData = {
//       title:title.trim(),
//       description:description.trim(),
//       price:price.trim(),
//       height:height.trim(),
//       lengthpic:lengthpic,
//       width:width.trim(),
//       mediumused:mediumused.trim(),
//       weigth:weigth.trim(),
//       category:category.trim(),
//     };

//     console.log(JSON.stringify({title,description,price,height,lengthpic,width,mediumused,weigth,category}));

//     if( !trimmedData.title || !trimmedData.category || !trimmedData.description || !trimmedData.price || !trimmedData.height || !trimmedData.lengthpic || !trimmedData.width || !trimmedData.mediumused || !trimmedData.weigth
//     )
//     {
//       alert("Fill all the fields");
//       return ;
//     }

//     try{
//       const response = await axios.post(
//         "http://localhost:5001/api/product/",
//         trimmedData,
//         {
//           headers:{"Content-Type":"application/json"},
//         }
//       );
//       console.log("Response Data:",response);
//       alert("Product Posted Successfully");

//       await setFormData({
//         title: "",
//         description: "",
//         price: "",
//         height: "",
//         lengthpic: "",
//         width: "",
//         mediumused: "",
//         weigth: "",
//         category: null,
//       });
//     }catch(error){
//       console.log("Frontend Error in Product posting:",error.response?.data || error.message)
//       alert(error.response?.data?.message || "Frontend Product posting faild");
//     }
//   };


//   return (
//     <>
//       <section className="bg-white shadow-s1 p-8 rounded-xl">
//         <Title level={5} className=" font-normal mb-5">
//           Create Product
//         </Title>
//         <hr className="my-5" />
//         <form onSubmit={handleSubmit}>
//           <div className="w-full">
//             <Caption className="mb-2">Title *</Caption>
//             <input 
//               type="text" 
//               name="title" 
//               className={`${commonClassNameOfInput}`} 
//               placeholder="Title" 
//               onChange={handleChange}
//               required />
//           </div>
//           <div className="py-5">
//             <Caption className="mb-2">Category *</Caption>
//             <CategoryDropDown className={`${commonClassNameOfInput}`} />
//           </div>
//           <div className="flex items-center gap-5 my-4">
//             <div className="w-1/2">
//               <Caption className="mb-2">Height (cm) </Caption>
//               <input 
//                 type="number" 
//                 name="height" 
//                 placeholder="height" 
//                 onChange={handleChange}
//                 className={`${commonClassNameOfInput}`} />
//             </div>
//             <div className="w-1/2">
//               <Caption className="mb-2">Length (cm) </Caption>
//               <input 
//                 type="number" 
//                 name="lengthpic" 
//                 placeholder="Length"

//                 onChange={handleChange}
//                 className={`${commonClassNameOfInput}`} />
//             </div>
//           </div>
//           <div className="flex items-center gap-5 my-4">
//             <div className="w-1/2">
//               <Caption className="mb-2">Width (cm) </Caption>
//               <input 
//                 type="number" 
//                 name="width" 
//                 placeholder="width" 
//                 onChange={handleChange}
//                 className={`${commonClassNameOfInput}`} />
//             </div>
//             <div className="w-1/2">
//               <Caption className="mb-2">
//                 Medium used <span className=" text-purple-400 italic">(Typically, pencil, ink, charcoal or other)</span>
//               </Caption>
//               <input 
//                 type="text" 
//                 name="mediumused" 
//                 placeholder="Medium used" 
//                 onChange={handleChange}
//                 className={commonClassNameOfInput} />
//             </div>
//           </div>
//           <div className="flex items-center gap-5 mt-4">
//             <div className="w-1/2">
//               <Caption className="mb-2">
//                 Weight of piece <span className=" text-purple-400 italic">(kg)</span>
//               </Caption>
//               <input 
//                 type="number" 
//                 name="weigth" 
//                 placeholder="weigth" 
//                 onChange={handleChange}
//                 className={`${commonClassNameOfInput}`} />
//             </div>
//             <div className="w-1/2">
//               <Caption className="mb-2">Price Range*</Caption>
//               <input 
//                 type="number" 
//                 name="price" 
//                 className={`${commonClassNameOfInput}`} 
//                 placeholder="Price" 
//                 onChange={handleChange}
//                 required />
//             </div>
//           </div>
//           <div>
//             <Caption className="mb-2">Description *</Caption>
//             <textarea name="description" className={`${commonClassNameOfInput}`} cols="30" rows="5"></textarea>
//           </div>
//           <div>
//             <Caption className="mb-2">Image </Caption>
//             <input 
//               type="file" 
//               className={`${commonClassNameOfInput}`}
//               onChange={handleChange}
//               name="image" />
//           </div>
//           <PrimaryButton type="submit" className="rounded-none my-5">
//             CREATE
//           </PrimaryButton>
//         </form>
//       </section>
//     </>
//   );
// };



//anshul
// import { CategoryDropDown, Caption, PrimaryButton, Title } from "../../router";
// import { commonClassNameOfInput } from "../../components/common/Design";
// import { useState } from "react";
// import axios from "axios";

// const initialState = {
//   title: "",
//   description: "",
//   price: "",
//   height: "",
//   lengthpic: "",
//   width: "",
//   mediumused: "",
//   weight: "",
//   category: "",
//   image: null,
// };

// export const AddProduct = () => {
//   const [formData, setFormData] = useState(initialState);
//   const [imagePreview, setImagePreview] = useState(null);

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;

//     if (type === "file") {
//       const file = files[0];
//       setFormData((prev) => ({ ...prev, [name]: file }));
//       setImagePreview(URL.createObjectURL(file));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { title, description, price, height, lengthpic, width, mediumused, weight, category, image } = formData;

//     if (!title.trim() || !category || !description.trim() || !price || !height || !lengthpic || !width || !mediumused.trim() || !weight) {
//       alert("Please fill all the required fields.");
//       return;
//     }

//     const formDataToSend = new FormData();
//     Object.keys(formData).forEach((key) => {
//       if (formData[key]) formDataToSend.append(key, formData[key]);
//     });

//     try {
//       const response = await axios.post("http://localhost:5001/api/service/", formDataToSend, {
//         headers: { "Content-Type": "multipart/form-data" },
//         withCredentials: true 
//       });
//       console.log("Response Data:", response.data);
//       alert("Product Posted Successfully");

//       setFormData(initialState);
//       setImagePreview(null);
//     } catch (error) {
//       console.error("Error in Product posting:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "frontend Product posting failed");
//     }
//   };

//   return (
//     <section className="bg-white shadow-s1 p-8 rounded-xl">
//       <Title level={5} className="font-normal mb-5">
//         Create Product
//       </Title>
//       <hr className="my-5" />
//       <form onSubmit={handleSubmit}>
//         <div className="w-full">
//           <Caption className="mb-2">Title *</Caption>
//           <input type="text" name="title" value={formData.title} className={commonClassNameOfInput} placeholder="Title" onChange={handleChange} required />
//         </div>
//         <div className="py-5">
//           <Caption className="mb-2">Category *</Caption>
//           <CategoryDropDown selected={formData.category} onChange={(category) => setFormData((prev) => ({ ...prev, category }))} />
//         </div>
//         <div className="flex items-center gap-5 my-4">
//           <div className="w-1/2">
//             <Caption className="mb-2">Height (cm) *</Caption>
//             <input type="number" name="height" value={formData.height} placeholder="Height" onChange={handleChange} className={commonClassNameOfInput} required />
//           </div>
//           <div className="w-1/2">
//             <Caption className="mb-2">Length (cm) *</Caption>
//             <input type="number" name="lengthpic" value={formData.lengthpic} placeholder="Length" onChange={handleChange} className={commonClassNameOfInput} required />
//           </div>
//         </div>
//         <div className="flex items-center gap-5 my-4">
//           <div className="w-1/2">
//             <Caption className="mb-2">Width (cm) *</Caption>
//             <input type="number" name="width" value={formData.width} placeholder="Width" onChange={handleChange} className={commonClassNameOfInput} required />
//           </div>
//           <div className="w-1/2">
//             <Caption className="mb-2">Medium Used *</Caption>
//             <input type="text" name="mediumused" value={formData.mediumused} placeholder="Medium used" onChange={handleChange} className={commonClassNameOfInput} required />
//           </div>
//         </div>
//         <div className="flex items-center gap-5 mt-4">
//           <div className="w-1/2">
//             <Caption className="mb-2">Weight (kg) *</Caption>
//             <input type="number" name="weight" value={formData.weight} placeholder="Weight" onChange={handleChange} className={commonClassNameOfInput} required />
//           </div>
//           <div className="w-1/2">
//             <Caption className="mb-2">Price Range *</Caption>
//             <input type="number" name="price" value={formData.price} className={commonClassNameOfInput} placeholder="Price" onChange={handleChange} required />
//           </div>
//         </div>
//         <div>
//           <Caption className="mb-2">Description *</Caption>
//           <textarea name="description" value={formData.description} className={commonClassNameOfInput} cols="30" rows="5" onChange={handleChange} required></textarea>
//         </div>
//         <div>
//           <Caption className="mb-2">Image</Caption>
//           <input type="file" className={commonClassNameOfInput} onChange={handleChange} name="image" />
//           {imagePreview && <img src={imagePreview} alt="Preview" className="mt-3 h-24 w-24 object-cover rounded-md" />}
//         </div>
//         <PrimaryButton type="submit" className="rounded-none my-5">
//           CREATE
//         </PrimaryButton>
//       </form>
//     </section>
//   );
// };


//raj
// import { CategoryDropDown, Caption, PrimaryButton, Title } from "../../router";
// import { commonClassNameOfInput } from "../../components/common/Design";
// import { useState } from "react";
// import axios from "axios";

// // Initial State
// const initialState = {
//   title: "",
//   description: "",
//   price: "",
//   category: "",
//   image: null,
//   auctionDays: "",
//   auctionHours: "",
//   auctionMinutes: "",
//   userName:'',
// };

// export const AddProduct = () => {
//   const [formData, setFormData] = useState(initialState);
//   const [imagePreview, setImagePreview] = useState(null);

//   // Handle Input Change
//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;

//     if (type === "file") {
//       const file = files[0];
//       if (file && file.type.startsWith("image/")) {
//         setFormData((prev) => ({ ...prev, [name]: file }));
//         setImagePreview(URL.createObjectURL(file));
//       } else {
//         alert("Please select an image file.");
//       }
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   // Handle Form Submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate Auction Fields
//     if (!formData.auctionDays || !formData.auctionHours || !formData.auctionMinutes) {
//       alert("Please fill out all auction duration fields.");
//       return;
//     }

//     const formDataToSend = new FormData();
//     Object.keys(formData).forEach((key) => {
//       if (formData[key] !== "") formDataToSend.append(key, formData[key]);
//     });

//     try {
//       const response = await axios.post("http://localhost:5001/api/service/", formDataToSend, {
//         headers: { "Content-Type": "multipart/form-data" },
//         withCredentials: true,
//       });
//       console.log("Response Data:", response.data);
//       alert("Product Posted Successfully");

//       // Reset form after submission
//       setFormData(initialState);
//       setImagePreview(null);
//     } catch (error) {
//       console.error("Error in Product posting:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "Frontend Product posting failed");
//     }
//   };

//   return (
//     <section className="bg-white shadow-s1 p-8 rounded-xl">
//       <Title level={5} className="font-normal mb-5">
//         Create Product
//       </Title>
//       <hr className="my-5" />
//       <form onSubmit={handleSubmit}>
//         {/* Title */}
//         <div className="w-full">
//           <Caption className="mb-2">Title *</Caption>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             className={commonClassNameOfInput}
//             placeholder="Title"
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="w-full">
//           <br />
//           <Caption className="mb-2">Customer Name *</Caption>
//           <input
//             type="text"
//             name="userName"
//             value={formData.userName}
//             className={commonClassNameOfInput}
//             placeholder="User Name"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Category */}
//         <div className="py-5">
//            <Caption className="mb-2">Category *</Caption>
//            <CategoryDropDown selected={formData.category} onChange={(category) => setFormData((prev) => ({ ...prev, category }))} />
//         </div>

//         {/* Price */}
//         <div className="flex items-center gap-5 my-4">
//           <div className="w-1/2">
//             <Caption className="mb-2">Price *</Caption>
//             <input
//               type="number"
//               name="price"
//               value={formData.price}
//               className={commonClassNameOfInput}
//               placeholder="Price"
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>

//         {/* Description */}
//         <div>
//           <Caption className="mb-2">Description *</Caption>
//           <textarea
//             name="description"
//             value={formData.description}
//             className={commonClassNameOfInput}
//             cols="30"
//             rows="5"
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>

//         {/* Image */}
//         <div>
//           <Caption className="mb-2">Image</Caption>
//           <input
//             type="file"
//             className={commonClassNameOfInput}
//             onChange={handleChange}
//             name="image"
//           />
//           {imagePreview && (
//             <img
//               src={imagePreview}
//               alt="Preview"
//               className="mt-3 h-24 w-24 object-cover rounded-md"
//             />
//           )}
//         </div>

//         {/* Auction Duration */}
//         <div className="flex items-center gap-5 mt-4">
//           <div className="w-1/3">
//             <Caption className="mb-2">Auction Days *</Caption>
//             <input
//               type="number"
//               name="auctionDays"
//               value={formData.auctionDays}
//               placeholder="00"
//               onChange={handleChange}
//               className={commonClassNameOfInput}
//               required
//             />
//           </div>
//           <div className="w-1/3">
//             <Caption className="mb-2">Auction Hours *</Caption>
//             <input
//               type="number"
//               name="auctionHours"
//               value={formData.auctionHours}
//               placeholder="00"
//               onChange={handleChange}
//               className={commonClassNameOfInput}
//               required
//             />
//           </div>
//           <div className="w-1/3">
//             <Caption className="mb-2">Auction Minutes *</Caption>
//             <input
//               type="number"
//               name="auctionMinutes"
//               value={formData.auctionMinutes}
//               placeholder="00"
//               onChange={handleChange}
//               className={commonClassNameOfInput}
//               required
//             />
//           </div>
//         </div>

//         {/* Submit Button */}
//         <PrimaryButton type="submit" className="rounded-none my-5">
//           CREATE
//         </PrimaryButton>
//       </form>
//     </section>
//   );
// };


//anshul frontend new
import { CategoryDropDown, Caption, PrimaryButton, Title } from "../../router";
import { commonClassNameOfInput } from "../../components/common/Design";
import { useState } from "react";
import axios from "axios";


const initialState = {
  title: "",
  description: "",
  price: "",
  category: "",
  image: null,
  auctionDays: "",
  auctionHours: "",
  auctionMinutes: "",
  userName: "",
};

export const AddProduct = () => {
  const [formData, setFormData] = useState(initialState);
  const [imagePreview, setImagePreview] = useState(null);


  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      if (file && file.type.startsWith("image/")) {
        setFormData((prev) => ({ ...prev, [name]: file }));
        setImagePreview(URL.createObjectURL(file));
      } else {
        alert("Please select an image file.");
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

  
    if (!formData.auctionDays || !formData.auctionHours || !formData.auctionMinutes) {
      alert("Please fill out all auction duration fields.");
      return;
    }

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== "") formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await axios.post("http://localhost:5001/api/service/", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      console.log("Response Data:", response.data);
      alert("Product Posted Successfully");

   
      setFormData(initialState);
      setImagePreview(null);
    } catch (error) {
      console.error("Error in Product posting:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Frontend Product posting failed");
    }
  };

  return (
    <section className="bg-gray-100 shadow-lg p-10 rounded-2xl">
      <Title level={5} className="font-semibold text-black mb-5">
        Create Product
      </Title>
      <hr className="my-5 border-gray-400" />
      <form onSubmit={handleSubmit} className="space-y-6">
      
        <div className="w-full">
          <Caption className="mb-2 text-black">Title *</Caption>
          <input
            type="text"
            name="title"
            value={formData.title}
            className={`${commonClassNameOfInput} bg-white shadow-md rounded-2xl`}
            placeholder="Title"
            onChange={handleChange}
            required
          />
        </div>


        <div className="w-full">
          <Caption className="mb-2 text-black">Customer Name *</Caption>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            className={`${commonClassNameOfInput} bg-white shadow-md rounded-2xl`}
            placeholder="User Name"
            onChange={handleChange}
            required
          />
        </div>

   
        <div className="py-5">
          <Caption className="mb-2 text-black">Category *</Caption>
          <CategoryDropDown
            selected={formData.category}
            onChange={(category) => setFormData((prev) => ({ ...prev, category }))}
          />
        </div>

      
        <div className="flex items-center gap-5 my-4">
          <div className="w-1/2">
            <Caption className="mb-2 text-black">Price *</Caption>
            <input
              type="number"
              name="price"
              value={formData.price}
              className={`${commonClassNameOfInput} bg-white shadow-md rounded-2xl`}
              placeholder="Price"
              onChange={handleChange}
              required
            />
          </div>
        </div>

     
        <div>
          <Caption className="mb-2 text-black">Description *</Caption>
          <textarea
            name="description"
            value={formData.description}
            className={`${commonClassNameOfInput} bg-white shadow-md rounded-2xl`}
            cols="30"
            rows="5"
            onChange={handleChange}
            required
          ></textarea>
        </div>

       
        <div>
          <Caption className="mb-2 text-black">Image</Caption>
          <input
            type="file"
            className={`${commonClassNameOfInput} bg-white shadow-md rounded-2xl`}
            onChange={handleChange}
            name="image"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-3 h-28 w-28 object-cover rounded-xl border-2 border-gray-300"
            />
          )}
        </div>

        
        <div className="flex items-center gap-5 mt-4">
          <div className="w-1/3">
            <Caption className="mb-2 text-black">Auction Days *</Caption>
            <input
              type="number"
              name="auctionDays"
              value={formData.auctionDays}
              placeholder="00"
              onChange={handleChange}
              className={`${commonClassNameOfInput} bg-white shadow-md rounded-2xl`}
              required
            />
          </div>
          <div className="w-1/3">
            <Caption className="mb-2 text-black">Auction Hours *</Caption>
            <input
              type="number"
              name="auctionHours"
              value={formData.auctionHours}
              placeholder="00"
              onChange={handleChange}
              className={`${commonClassNameOfInput} bg-white shadow-md rounded-2xl`}
              required
            />
          </div>
          <div className="w-1/3">
            <Caption className="mb-2 text-black">Auction Minutes *</Caption>
            <input
              type="number"
              name="auctionMinutes"
              value={formData.auctionMinutes}
              placeholder="00"
              onChange={handleChange}
              className={`${commonClassNameOfInput} bg-white shadow-md rounded-2xl`}
              required
            />
          </div>
        </div>

    
        <PrimaryButton type="submit" className="w-full py-3 mt-5 text-lg rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white">
          CREATE
        </PrimaryButton>
      </form>
    </section>
  );
};
