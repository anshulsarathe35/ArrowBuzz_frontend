// import { Title } from "../../router";
// import { Table } from "../../components/Table";

// export const AdminProductList = () => {
//   return (
//     <>
//       <section className="shadow-s1 p-8 rounded-lg">
//         <div className="flex justify-between">
//           <Title level={5} className=" font-normal">
//             Product Lists
//           </Title>
//         </div>
//         <hr className="my-5" />
//         <Table />
//       </section>
//     </>
//   );
// };

//anshul frontend new
import { Title } from "../../router";
import { Table } from "../../components/Table";

export const AdminProductList = () => {
  return (
    <>
      <section className="bg-white shadow-lg p-8 rounded-3xl text-black">
        <div className="flex justify-between mb-6">
          <Title level={5} className="font-bold text-2xl text-black">
            Product Lists
          </Title>
        </div>
        <hr className="my-5 border-gray-300" />
        <div className="relative overflow-x-auto rounded-xl bg-white shadow-md">
          <Table />
        </div>
      </section>
    </>
  );
};