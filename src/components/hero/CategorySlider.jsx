import { categorylists } from "../../utils/data";
import { CategoryCard, Container, Heading } from "../../router";

export const CategorySlider = () => {
  return (
    <>
      <section className="catgeory-slider pb-16 pt-16">
        <Container>
          <Heading title="Browse the Categories" subtitle="Most viewed and all-time top-selling category" />

          <div className="grid grid-cols-2 md:grid-cols-7 gap-5 my-8">
            {categorylists.map((item) => (
              <CategoryCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};


// import { useEffect, useState } from "react";
// import { CategoryCard, Container, Heading } from "../../router";
// import axios from "axios";

// export const CategorySlider = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const { data } = await axios.get("http://localhost:5001/api/category/");
//         setCategories(data);
//       } catch (err) {
//         setError("Failed to load categories.");
//         console.error("Error fetching categories:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <>
//       <section className="category-slider pb-16 pt-16 bg-gradient-to-b from-white to-blue-50">
//         <Container>
//           <Heading
//             title="Browse the Categories"
//             subtitle="Most viewed and top-selling categories"
//           />

//           {/* ✅ Show Loading/Error State */}
//           {loading ? (
//             <div className="text-center text-blue-500 my-8">Loading categories...</div>
//           ) : error ? (
//             <div className="text-center text-red-500 my-8">{error}</div>
//           ) : categories.length === 0 ? (
//             <div className="text-center text-gray-500 my-8">No categories found.</div>
//           ) : (
//             <div className="grid grid-cols-2 md:grid-cols-7 gap-5 my-8">
//               {categories.map((item) => (
//                 <CategoryCard key={item._id} item={item} />
//               ))}
//             </div>
//           )}
//         </Container>
//       </section>
//     </>
//   );
// };
