import Link from "next/link";
import React from "react";

const settings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Settings</h1>
        <p>Manage your account settings and preferences here.</p>
        <div className="flex space-x-12">
          <div className=" bg-white rounded-lg p-6 space-y-6">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-4 flex flex-col items-start">
              <li>
                <Link
                  href="/dashboard/settings/account"
                  className="text-blue-600 hover:bg-blue-100 rounded-l px-3 py-1"
                >
                  <span>Account</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/settings/notification"
                  className="text-blue-600  hover:bg-blue-100 rounded-l px-3 py-1"
                >
                  <span>Notification</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/settings/profile"
                  className="text-blue-600  hover:bg-blue-100 rounded-l px-3 py-1"
                >
                  <span>Profile</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default settings;
