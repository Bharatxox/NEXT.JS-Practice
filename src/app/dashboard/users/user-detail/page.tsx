import Image from "next/image";
import React from "react";
const user = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  role: "Administrator",
  status: "Active",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  profilePicture:
    "https://i.pinimg.com/736x/7b/38/80/7b3880177db88aa8b6370c8ba720c43b.jpg",
  activities: [
    { id: 1, description: "Logged in", date: "2024-10-01 10:00 AM" },
    { id: 2, description: "Updated profile", date: "2024-10-01 11:00 AM" },
    { id: 3, description: "Changed password", date: "2024-10-01 12:00 PM" },
    { id: 4, description: "Logged out", date: "2024-10-01 01:00 PM" },
  ],
};

const UserDetail = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div
        className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl
        p-8 text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6">User Detail</h1>
        <p className="text-lg text-gray-600">
          View and manage individual user details here.
        </p>
        {/* User Detail Section */}
        <div className="mt-8 flex gap-10 md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <Image
            src={user.profilePicture}
            alt="Profile"
            width={100}
            height={100}
            className="w-32 h-32 rounded-full object-cover"
          />
          <div className="text-left">
            <h2 className="text-2xl font-semibold text-gray-800">
              {user.name}
            </h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">Role: {user.role}</p>
            <p
              className={`text-gray-600 ${
                user.status == "Active" ? "text-green-500" : "text-red-500"
              }`}
            >
              Status: {user.status}
            </p>
          </div>
        </div>
        {/* Recent Activities */}
        <div className="mt-8 w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Recent Activities
          </h2>
          <ul className="space-y-4 text-left">
            {user.activities.map((activity) => (
              <li
                key={activity.id}
                className="p-4 border border-gray-200 rounded-lg flex justify-between"
              >
                <p className="text-gray-700">{activity.description}</p>
                <p className="text-sm text-gray-500">{activity.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
