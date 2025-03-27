// import { Caption, Container, Heading, ProfileCard, Title } from "../../router";
// import { topSellerList } from "../../utils/data";

// export const TopSeller = () => {
//   return (
//     <>
//       <section className="process py-12">
//         <Container>
//           <Heading title="Top Seller" subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam laboriosam iusto pariatur alias error numquam blanditiis," />

//           <div className="content grid grid-cols-1 md:grid-cols-5 gap-5 mt-8">
//             {topSellerList.map((item, index) => (
//               <div className="flex items-center justify-between border p-3 rounded-lg" key={index + 1}>
//                 <div className="flex items-center gap-3">
//                   <ProfileCard className="w-16 h-16">
//                     <img src={item.profile} alt="" className="w-full h-full rounded-full object-cover" />
//                   </ProfileCard>
//                   <div>
//                     <Title level={5} className="font-normal text-xl">
//                       {item.title}
//                     </Title>
//                     <Caption>${item.amount * item.id}</Caption>
//                   </div>
//                 </div>
//                 <Title level={2} className=" opacity-10">
//                   0{item.id}
//                 </Title>
//               </div>
//             ))}
//           </div>
//         </Container>
//       </section>
//     </>
//   );
// };

import { useEffect, useState } from "react";
import { Caption, Container, Heading, ProfileCard, Title } from "../../router";
import axios from "axios";

export const TopSeller = () => {
  const [topSellers, setTopSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTopSellers = async () => {
      try {
        const { data } = await axios.get("http://localhost:5001/api/users/allusers");

        const servicemenList = data.filter((user) => user.role === "servicemen").slice(0, 10);
        setTopSellers(servicemenList);
      } catch (err) {
        setError("Failed to fetch top sellers.");
        console.error("Error fetching top sellers:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopSellers();
  }, []);

  return (
    <>
      <section className="process py-12">
        <Container>
          <Heading
            title="Meet our Helpers"
            subtitle="Check out the top-performing servicemen with the highest work efficiency."
          />

          {loading ? (
            <div className="text-center text-gray-500">Loading top Servicemens...</div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : topSellers.length === 0 ? (
            <div className="text-center text-gray-500">No servicemen found.</div>
          ) : (
            <div className="content grid grid-cols-1 md:grid-cols-5 gap-5 mt-8">
              {topSellers.map((item, index) => (
                <div
                  className="flex items-center justify-between border p-3 rounded-lg"
                  key={item._id}
                >
                  <div className="flex items-center gap-3">
                    <ProfileCard className="w-16 h-16">
                      <img
                        src={item.photo || "https://cdn-icons-png.flaticon.com/512/2202/2202112.png"} // Default icon if no photo
                        alt={item.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </ProfileCard>
                    <div>
                      <Title level={5} className="font-normal text-xl">
                        {item.name}
                      </Title>
                      <Caption>₹{item.balance || 0}</Caption>
                    </div>
                  </div>
                  <Title level={2} className="opacity-10">0{index + 1}</Title>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
};
