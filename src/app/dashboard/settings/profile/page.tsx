"use client";
import Image from "next/image";
import React, { useState } from "react";

const Profile = () => {
  const [image, setImage] = useState<string>(
    "https://i.pinimg.com/736x/7b/38/80/7b3880177db88aa8b6370c8ba720c43b.jpg"
  );
  const [name, setName] = useState<string>("John Doe");
  const [username, setUsername] = useState<string>("johndoe");
  const [email, setEmail] = useState<string>("johndow@gmail.com");
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Profile Settings
        </h1>
        {/* profile picture setting */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Profile Picture</h2>
          <div className="flex flex-col items-center">
            <Image
              src={image}
              alt="Profile"
              width={100}
              height={100}
              className="w-32 h-32 rounded-full mb-4"
            />
            <input
              type="file"
              accept="image/*"
              className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  const file = e.target.files[0];
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setImage(reader.result as string);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </div>
          <div className="mt-6 flex flex-col items-start">
            <label className="block text-sm font-medium text-gray-600 mt-3">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            />
            <label className="block text-sm font-medium text-gray-600 mt-3">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            />
            <label className="block text-sm font-medium text-gray-600 mt-3">
              E-mail
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            />
          </div>
          <div className="flex justify-end">
            <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Save Changes
            </button>
            <button className="mt-6 ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400">
              Cancel
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
