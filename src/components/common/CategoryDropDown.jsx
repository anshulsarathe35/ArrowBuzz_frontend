// import Select from "react-select";

// export const CategoryDropDown = (props) => {
//   return (
//     <>
//       <Select id="category" />
//     </>
//   );
// };

// import Select from "react-select";

// const categoryOptions = [
//   { value: "Painting", label: "Painting" },
//   { value: "Sculpture", label: "Sculpture" },
//   { value: "Photography", label: "Photography" },
//   { value: "Print", label: "Print" },
//   { value: "Other", label: "Other" },
// ];

// export const CategoryDropDown = ({ selected, onChange }) => {
//   return <Select options={categoryOptions} value={categoryOptions.find((opt) => opt.value === selected)} onChange={(e) => onChange(e.value)} />;
// };


//anshul froentned new
import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";

export const CategoryDropDown = ({ selected, onChange }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/category/", {
        withCredentials: true,
      });
      const options = response.data.map((category) => ({
        value: category.title,
        label: category.title,
      }));

      setCategories(options);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Select
      options={categories}
      value={categories.find((opt) => opt.value === selected)}
      onChange={(e) => onChange(e.value)}
      isLoading={loading}
      placeholder={loading ? "Loading categories..." : "Select a category"}
    />
  );
};
