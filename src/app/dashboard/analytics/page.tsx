"use client";
import React from "react";

const analytics = () => {
  const metrics = [
    { title: "Total Users", value: "1,234", change: "+5%", isPositive: true },
    {
      title: "Active Sessions",
      value: "567",
      change: "-2%",
      isPositive: false,
    },
    {
      title: "Conversion Rate",
      value: "3.4%",
      change: "+0.5%",
      isPositive: true,
    },
    { title: "Bounce Rate", value: "45%", change: "-1%", isPositive: false },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-2xl font-bold mb-4">Analytics Dashboard</h1>
        {/* Overview matrics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-blue-100 p-4 rounded-lg shadow-md flex flex-col items-center"
            >
              <h2 className="text-lg font-semibold text-blue-800">
                {metric.title}
              </h2>
              <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
              <p
                className={`mt-2 text-sm ${
                  metric.isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {metric.change} {metric.isPositive ? "↑" : "↓"}
              </p>
            </div>
          ))}
        </div>
        {/* Chart Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">User Growth Over Time</h2>
          <div className="h-64 bg-gray-100 flex items-center justify-center text-gray-400">
            [Chart Placeholder]
          </div>
        </div>
        {/* Additional analytics sections can be added here */}
        <div className="mt-8 text-center text-gray-600">
          More analytics features coming soon!
        </div>
      </div>
    </div>
  );
};

export default analytics;
