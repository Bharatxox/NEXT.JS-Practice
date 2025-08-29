"use client";
import React, { useState } from "react";

const Account = () => {
  const [email, setEmail] = useState<string>("johndoe@gmail.com");
  const [name, setName] = useState<string>("John Doe");
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100  p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Account Settings
        </h1>
        <p>Manage your account settings here.</p>
        {/* Account Setting */}
        <div className="space-y-4">
          <div className="mt-5 flex flex-col items-start mb-8">
            <label className="block text-sm font-medium text-gray-600 mt-3">
              Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            />

            <label className="block text-sm font-medium text-gray-600 mt-3">
              Email
            </label>
            <input
              type="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            />

            <label className="block text-sm font-medium text-gray-600 mt-3">
              Change Password
            </label>
            <input
              type="password"
              placeholder="New Password"
              className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="mt-3 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            />
            <label className="block text-sm font-medium text-gray-600 mt-3">
              Two-Factor Authentication
            </label>
            <select className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2">
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
