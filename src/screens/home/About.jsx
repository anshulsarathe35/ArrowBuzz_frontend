import React from "react";

export const About = () => {
    const teamMembers = [
        { name: "Raj Shekhar Verma", role: "Frontend / Backend", img: "../images/teamMembers/rajshekharverma.jpg" },
        { name: "Anshul Sarathe", role: "Frontend / API Testing", img: "../images/teamMembers/anshul.jpg" },
        { name: "Ambrish Kumar Rai", role: "Frontend / Critical Thinker", img: "../images/teamMembers/ambrish.jpg" },
        { name: "Gyan Paraksh Barik", role: "Frontend / Brainstorming Ideas", img: "../images/teamMembers/gyan.jpeg" },
        { name: "Anoushka Sharma", role: "Designing Life Cycle / Frontend", img: "../images/teamMembers/anoushka.jpg" }
    ];

    return (
        <div className="flex flex-col items-center justify-center pt-36 bg-gradient-to-b from-blue-400 to-white min-h-screen shadow-2xl">
            <div className="max-w-3xl bg-white shadow-2xl rounded-2xl p-6">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">About Our Service Bidding Platform</h1>
                <p className="text-gray-600 text-lg text-center mb-6">
                    Welcome to our <b>Service Bidding Application</b>, where customers can find trusted service professionals 
                    and servicemen can offer their expertise. Our platform connects skilled workers with customers who 
                    need home maintenance and personal services.
                </p>
                <h2 className="text-2xl font-semibold text-gray-700 mt-4">How It Works</h2>
                <ul className="list-disc pl-6 text-gray-600 text-lg mt-2">
                    <li><strong>Customer Posts a Service:</strong> Customers can post services such as plumbing, cooking, cleaning, gardening, babysitting, and caretaking.</li>
                    <li><strong>Servicemen Register & Place Bids:</strong> Skilled professionals register and place bids on available service requests.</li>
                    <li><strong>Lowest Bid Wins:</strong> Customers review bids and hire the service provider with the best offer.</li>
                    <li><strong>Ratings & Reviews:</strong> After job completion, customers can rate and review the servicemen.</li>
                </ul>
                <p className="text-gray-600 text-lg mt-4">
                    Our goal is to create a seamless and secure platform for both customers and workers, ensuring 
                    fair pricing, quality service, and reliability. Get started today and experience hassle-free service bidding!
                </p>
            </div>

            <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-6 mt-8">
                <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg shadow">
                            <img src={member.img} alt={member.name} className="w-16 h-16 rounded-full mr-4" />
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;