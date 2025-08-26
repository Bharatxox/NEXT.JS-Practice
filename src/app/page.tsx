import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to Dashboard page
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          manage your tasks , track analytics and stay organized with out
          powerful dashboard.
        </p>
        <Link
          href={"/dashboard"}
          className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Home;
