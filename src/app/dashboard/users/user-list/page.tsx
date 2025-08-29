import React from "react";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@gmail.com",
    role: "Administrator",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@gmail.com",
    role: "Editor",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alicejohnson@gmail.com",
    role: "Subscriber",
    status: "Active",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bobbrown@gmail.com",
    role: "Contributor",
    status: "Active",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "chaliedavis@gmail.com",
    role: "User",
    status: "Inactive",
  },
];

const UserList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          User List
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          View and manage all users here.
        </p>
        {/* User List Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md">
            <thead>
              <tr className="border-x border-gray-200">
                <th className="py-3 px-6 bg-gray-200 text-left text-sm font-semibold text-gray-700">
                  Name
                </th>
                <th className="py-3 px-6 bg-gray-200 text-left text-sm font-semibold text-gray-700">
                  Email
                </th>
                <th className="py-3 px-6 bg-gray-200 text-left text-sm font-semibold text-gray-700">
                  Role
                </th>
                <th className="py-3 px-6 bg-gray-200 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-x border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-4 px-6 text-sm text-gray-800">
                    {user.name}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-800">
                    {user.email}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-800">
                    {user.role}
                  </td>
                  <td
                    className={`py-4 px-6 text-sm ${
                      user.status === "Active"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {user.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
