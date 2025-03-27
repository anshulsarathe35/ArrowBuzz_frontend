// import { Container, Heading } from "../../router";
// import { productlists } from "../../utils/data";
// import { ProductCard } from "../cards/ProductCard";

// export const ProductList = () => {
//   return (
//     <>
//       <section className="product-home">
//         <Container>
//           <Heading
//             title="Live Auction"
//             subtitle="Explore on the world's best & largest Bidding marketplace with our beautiful Bidding products. We want to be a part of your smile, success and future growth."
//           />

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 my-8">
//             {productlists?.slice(0, 12)?.map((item, index) => (
//               <ProductCard item={item} key={index + 1} />
//             ))}
//           </div>
//         </Container>
//       </section>
//     </>
//   );
// };

// import { Container, Heading } from "../../router";
// import { ProductCard } from "../cards/ProductCard";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   // Function to fetch products from MongoDB
//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("http://localhost:5001/api/service/");
//       setProducts(response.data); // Assuming response.data contains an array of products
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   // Fetch products when page reloads
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <>
//       <section className="product-home">
//         <Container>
//           <Heading
//             title="Live Auction"
//             subtitle="Explore on the world's best & largest Bidding marketplace with our beautiful Bidding products. We want to be a part of your smile, success and future growth."
//           />

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 my-8">
//             {products?.slice(0, 12)?.map((item, index) => (
//               <ProductCard item={item} key={index + 1} />
//             ))}
//           </div>
//         </Container>
//       </section>
//     </>
//   );
// };

import { Container, Heading } from "../../router";
import { ProductCard } from "../cards/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/service/");
      setProducts(response.data);
      toast.success("Products loaded successfully!");
    } catch (error) {
      toast.error("Error fetching products!");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <section className="product-home bg-gray-50 py-12">
        <Container>
          <Heading
            title="Live Services"
            subtitle="Discover the world’s leading bidding marketplace with our exceptional range of products."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 my-8">
            {products?.slice(0, 12)?.map((item, index) => (
              <ProductCard item={item} key={index + 1} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
