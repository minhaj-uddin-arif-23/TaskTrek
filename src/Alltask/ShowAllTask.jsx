import React from "react";
import usePublic from "../hook/usePublic";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { Link } from "react-router";
import { Pencil, Trash2 } from 'lucide-react';
export default function ShowAllTask() {
  const axiosPublic = usePublic();
  const { data: task = [] } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/showTask");
      return data;
    },
  });

  return (
    <>
      <div className="w-11/12 max-w-4xl mx-auto py-8 bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          All Tasks
        </h1>
        <div className="space-y-4">
          {task.length > 0 ? (
            task.map((data, index) => (
              <div
                key={index}
                className="p-4 bg-gray-100 rounded-lg shadow-md border border-gray-300"
              >
                <div className="flex justify-between">
                  <h2 className="text-xl font-semibold text-blue-600">
                    {data.title}
                  </h2>
                  <div className="flex items-center space-x-4 mt-3">
                    <Link to={`/updateTask/${data._id}`} className="flex items-center text-blue-600 hover:text-blue-800">
                      <Pencil size={18} className="mr-1" />
                  
                    </Link>
                    <button className="flex items-center text-red-600 hover:text-red-800">
                      <Trash2 size={18} className="mr-1" />
                     
                    </button>
                  </div>
                </div>
                <p className="text-gray-700 mt-2">
                  {data.details || "No description available"}
                </p>
                <span
                  className={`inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full ${
                    data.status === "to-do"
                      ? "bg-yellow-300"
                      : data.status === "in-progress"
                      ? "bg-blue-300"
                      : "bg-green-300"
                  }`}
                >
                  {data.status.replace("-", " ").toUpperCase()}
                </span>
                <p className="text-gray-500 text-sm mt-2">
                  {moment(data.time).format("MMMM Do YYYY, h:mm A")}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No tasks available.</p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-center mt-10">
        <Link
          to={"/"}
          className=" bg-yellow-300 px-5 font-semibold py-3 rounded-lg transition duration-300 cursor-pointer"
        >
          Add Task
        </Link>
      </div>
    </>
  );
}
