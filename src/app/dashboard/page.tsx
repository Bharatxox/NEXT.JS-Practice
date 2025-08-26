import Link from "next/link";
import React from "react";

const dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="text-center bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Dashboard</h1>
        <p className="text-lg text-gray-600">
          This is the main dashboard page. Use the navigation to access
          different sections.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          <Link
            href={"/dashboard/analytics"}
            className="bg-green-100 hover:bg-green-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center justify-center">
              <h2 className="text-xl font-semibold text-blue-800">Analytics</h2>
              <span className="text-2xl font-bold text-blue-500">📊</span>
            </div>
            <p className="mt-2 text-gray-600">
              View detailed analytics and reports
            </p>
          </Link>

          <Link
            href={"/dashboard/settings"}
            className="bg-blue-100 hover:bg-blue-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center justify-center">
              <h2 className="text-xl font-semibold text-blue-800">Settings</h2>
              <span className="text-2xl font-bold text-blue-500">⚙️</span>
            </div>
            <p className="mt-2 text-gray-600">
              Manage your account settings and preferences
            </p>
          </Link>

          <Link
            href={"/dashboard/users"}
            className="bg-purple-100 hover:bg-purple-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center justify-center">
              <h2 className="text-xl font-semibold text-purple-800">Users</h2>
              <span className="text-2xl font-bold text-purple-500">👥</span>
            </div>
            <p className="mt-2 text-gray-600">Manage user accounts and roles</p>
          </Link>

          <Link
            href={"/dashboard/tasks"}
            className="bg-yellow-100 hover:bg-yellow-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center justify-center">
              <h2 className="text-xl font-semibold text-yellow-800">Tasks</h2>
              <span className="text-2xl font-bold text-yellow-500">✅</span>
            </div>
            <p className="mt-2 text-gray-600">View and manage your tasks</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
