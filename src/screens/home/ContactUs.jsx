// import React, { useState } from "react";

// export const ContactUs = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         message: ""
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert("Your message has been sent!");
//         // Here, you can integrate backend API to send the message via email.
//     };

//     return (
//         <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-400 to-white min-h-screen">
//             <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-6">
//                 <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Contact Us</h1>
//                 <p className="text-gray-600 text-lg text-center mb-6">
//                     Have any questions or suggestions? Reach out to us by filling the form below.
//                 </p>
//                 <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                     <input 
//                         type="text" 
//                         name="name" 
//                         placeholder="Your Name" 
//                         value={formData.name} 
//                         onChange={handleChange} 
//                         className="border p-3 rounded-lg w-full"
//                         required
//                     />
//                     <input 
//                         type="email" 
//                         name="email" 
//                         placeholder="Your Email" 
//                         value={formData.email} 
//                         onChange={handleChange} 
//                         className="border p-3 rounded-lg w-full"
//                         required
//                     />
//                     <input 
//                         type="tel" 
//                         name="phone" 
//                         placeholder="Your Phone Number" 
//                         value={formData.phone} 
//                         onChange={handleChange} 
//                         className="border p-3 rounded-lg w-full"
//                         required
//                     />
//                     <textarea 
//                         name="message" 
//                         placeholder="What do you have in mind?" 
//                         value={formData.message} 
//                         onChange={handleChange} 
//                         className="border p-3 rounded-lg w-full"
//                         rows="4"
//                         required
//                     ></textarea>
//                     <button 
//                         type="submit" 
//                         className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
//                         Send Message
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ContactUs;



//anshul new code with posting api
import React, { useState } from "react";
import axios from "axios";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const res = await axios.post("http://localhost:5001/api/contact/", formData);

      setResponseMessage(res.data.message);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setResponseMessage(
        error.response?.data?.error || "Something went wrong. Please try again!"
      );
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-400 to-white min-h-screen">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg text-center mb-6">
          Have any questions or suggestions? Reach out to us by filling the form
          below.
        </p>

        {responseMessage && (
          <div
            className={`text-center mb-4 p-3 rounded-lg ${
              responseMessage.includes("success")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {responseMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            required
          />
          <textarea
            name="message"
            placeholder="What do you have in mind?"
            value={formData.message}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            rows="4"
            required
          ></textarea>

          <button
            type="submit"
            className={`bg-blue-500 text-white p-3 rounded-lg ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
