// import { title } from "process";
"use client";
import React, { useState } from "react";

type Task = {
  id: number;
  title: string;
  description: string;
  status: "Pending" | "In Progress" | "Completed";
  dueDate: string;
};

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Finish project report",
      description: "Complete the final report for the XYZ project",
      status: "In Progress",
      dueDate: "2023-10-15",
    },
    {
      id: 2,
      title: "Team meeting",
      description: "Weekly sync-up with the development team",
      status: "Pending",
      dueDate: "2023-10-10",
    },
    {
      id: 3,
      title: "Code review",
      description: "Review code for the new feature implementation",
      status: "Completed",
      dueDate: "2023-10-08",
    },
  ]);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");

  const handleMarkAsCompleted = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: "Completed" } : task
      )
    );
  };

  const handleEditTask = (task: Task) => {
    setEditTaskId(task.id);
    setTaskTitle(task.title);
    setTaskDescription(task.description);
    setTaskDueDate(task.dueDate);
  };

  const handleSaveTask = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              title: taskTitle,
              description: taskDescription,
              dueDate: taskDueDate,
            }
          : task
      )
    );
    setEditTaskId(null);
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div>
        <h1 className="text-2xl font-bold mb-4">Tasks</h1>
        <section className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow ${
                task.status === "Completed"
                  ? "border-l-4 border-green-500"
                  : task.status === "In Progress"
                  ? "border-l-4 border-yellow-500"
                  : "border-l-4 border-red-500"
              }`}
            >
              <div className="flex justify-between items-start gap-5">
                <div>
                  {editTaskId === task.id ? (
                    <>
                      <input
                        type="text"
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        className="text-xl font-semibold border p-1 rounded w-full"
                      />
                      <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className="text-gray-600 border p-1 rounded w-full mt-2"
                      />
                      <input
                        type="date"
                        value={taskDueDate}
                        onChange={(e) => setTaskDueDate(e.target.value)}
                        className="text-gray-500 text-sm border p-1 rounded mt-2"
                      />
                    </>
                  ) : (
                    <>
                      <h2 className="text-xl font-semibold">{task.title}</h2>
                      <p className="text-gray-600">{task.description}</p>
                      <span className="text-gray-500 text-sm">
                        Due: {new Date(task.dueDate).toLocaleDateString()}
                      </span>
                    </>
                  )}
                </div>
                <div className="mt-4 flex space-x-2">
                  {task.status !== "Completed" && editTaskId !== task.id && (
                    <div>
                      <button
                        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        onClick={() => handleMarkAsCompleted(task.id)}
                      >
                        Mark as Completed
                      </button>
                      <button
                        className="mt-3 ml-2 bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                        onClick={() => handleEditTask(task)}
                      >
                        Edit Task
                      </button>
                    </div>
                  )}
                  {editTaskId === task.id && (
                    <button
                      className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                      onClick={() => handleSaveTask(task.id)}
                    >
                      Save
                    </button>
                  )}
                  <button
                    className="mt-3 ml-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    Delete Task
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Tasks;
