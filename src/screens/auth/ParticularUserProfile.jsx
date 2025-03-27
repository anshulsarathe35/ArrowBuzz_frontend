import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Caption, Title } from "../../router";
import { commonClassNameOfInput, PrimaryButton } from "../../components/common/Design";

export const ParticularUserProfile = () => {
  const { id } = useParams(); // Get ID from URL params

  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNo: "",
    role: "",
    photo: "",
  });

  // ✅ Fetch Particular User Details from Backend API
  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/api/users/get-particularuser/${id}`, {
        withCredentials: true,
      });

      // ✅ Set User Details from API Response
      setUser(response.data);
    } catch (error) {
      console.error("Failed to fetch user details:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, [id]);

  // ✅ Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // ✅ Update User Details
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5001/api/users/updateprofile/${user._id}`, user, {
        withCredentials: true,
      });
      alert("Profile updated successfully!");
      setUser(response.data);
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert("Failed to update profile");
    }
  };

  return (
    <>
      <section className="shadow-s1 p-8 rounded-lg">
        {/* ✅ Profile Header */}
        <div className="profile flex items-center gap-8">
        <img
            src={user.photo || "https://img.freepik.com/premium-photo/profile-icon-white-background_941097-162486.jpg"}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
        />

          <div>
            <Title level={5} className="capitalize">
              {user.name || "Loading..."}
            </Title>
            <Caption>{user.email || "Loading..."}</Caption>
          </div>
        </div>

        {/* ✅ Profile Form */}
        <form onSubmit={handleUpdate}>
          <div className="flex items-center gap-5 mt-10">
            <div className="w-full">
              <Caption className="mb-2">Full Name</Caption>
              <input
                type="text"
                name="name"
                className={`capitalize ${commonClassNameOfInput}`}
                value={user.name}
                onChange={handleChange}
                readOnly
              />
            </div>
          </div>

          <div className="flex items-center gap-5 mt-10">
            <div className="w-1/2">
              <Caption className="mb-2">Contact Number</Caption>
              <input
                type="text"
                name="phoneNo"
                className={commonClassNameOfInput}
                value={user.phoneNo}
                onChange={handleChange}
                readOnly
              />
            </div>
            <div className="w-1/2">
              <Caption className="mb-2">Email</Caption>
              <input
                type="text"
                name="email"
                className={commonClassNameOfInput}
                value={user.email}
                // onChange={user.role === "admin" ? handleChange : undefined} // Allow change only for admin
                // readOnly={user.role !== "admin"} // Make read-only if not admin
                readOnly
              />
            </div>
          </div>

          <div className="my-8">
            <Caption className="mb-2">Role</Caption>
            <input
              type="text"
              className={commonClassNameOfInput}
              value={user.role}
              readOnly
            />
          </div>

          <div className="my-8">
            <Caption className="mb-2">Profile Picture URL</Caption>
            <input
              type="text"
              name="photo"
              className={commonClassNameOfInput}
              value={user.photo}
              onChange={handleChange}
              readOnly
            />
          </div>

          {/* ✅ Update Button */}
          {/* <PrimaryButton type="submit">Update Profile</PrimaryButton> */}
        </form>
      </section>
    </>
  );
};
