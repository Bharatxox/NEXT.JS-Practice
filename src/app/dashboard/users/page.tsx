import Link from "next/link";
import React from "react";

const users = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">User</h1>
        <p className="text-lg text-gray-600">
          Manage user accounts and roles here.
        </p>
        {/* User-Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          <Link
            href={"/dashboard/users/user-detail"}
            className="bg-purple-100 hover:bg-purple-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center justify-center">
              <h2 className="text-xl font-semibold text-purple-800">
                User Detail
              </h2>
              <span className="text-2xl font-bold text-purple-500">📋</span>
            </div>
            <p className="mt-2 text-gray-600">
              View and manage individual user details
            </p>
          </Link>
          {/* User-related section */}
          <Link
            href={"/dashboard/users/user-list"}
            className="bg-purple-100 hover:bg-purple-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center justify-center">
              <h2 className="text-xl font-semibold text-purple-800">
                User List
              </h2>
              <span className="text-2xl font-bold text-purple-500">📋</span>
            </div>
            <p className="mt-2 text-gray-600">View and manage all users</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default users;
