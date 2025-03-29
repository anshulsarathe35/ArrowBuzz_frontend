import React, { useState } from "react";

export const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your message has been sent!");
        // Here, you can integrate backend API to send the message via email.
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-400 to-white min-h-screen">
            <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-6">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Contact Us</h1>
                <p className="text-gray-600 text-lg text-center mb-6">
                    Have any questions or suggestions? Reach out to us by filling the form below.
                </p>
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
                        className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;