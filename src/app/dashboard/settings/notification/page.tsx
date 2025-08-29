import React from "react";

const notification = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Notification Settings
        </h1>
        <p>Manage your notification preferences here.</p>
        {/* Notification Setting */}
        <div className="space-y-4">
          <div className="mt-5 flex flex-col items-start">
            <label className="block text-sm font-medium text-gray-600 mt-3">
              Email Notification
            </label>
            <select className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2">
              <option>All Notifications</option>
              <option>Only Important</option>
              <option>None</option>
            </select>
            <label className="block text-sm font-medium text-gray-600 mt-3">
              SMS Notification
            </label>
            <select className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2">
              <option>All Notifications</option>
              <option>Only Important</option>
              <option>None</option>
            </select>
            <label className="block text-sm font-medium text-gray-600 mt-3">
              Call Notification
            </label>
            <select className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2">
              <option>All Notifications</option>
              <option>Only Important</option>
              <option>None</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default notification;
