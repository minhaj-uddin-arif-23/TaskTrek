import React, { useContext, useEffect, useState } from "react";
import usePublic from "../hook/usePublic";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import { Link } from "react-router";
import { Pencil, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import { AuthContexts } from "../context/AuthProvider";
export default function ShowAllTask() {
  const [filter, setFilter] = useState("");
  const { user } = useContext(AuthContexts);
  const axiosPublic = usePublic();
  const queryClient = useQueryClient();
  const { data: task = [], refetch } = useQuery({
    queryKey: ["task", filter, user],
    queryFn: async () => {
      const filterParamerter = filter ? `?filter=${filter}` : "";
      const { data } = await axiosPublic.get(
        `/showTask/${user?.email}${filterParamerter}`
      );
      return data;
    },
  });

  useEffect(() => {
    refetch();
  }, [filter, refetch, user]);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosPublic.delete(`/taskdelete/${id}`);
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your task has been deleted.", "success");

            queryClient.invalidateQueries(["task"]);
          }
        } catch (error) {
          Swal.fire("Error!", "Something went wrong!", "error");
        }
      }
    });
  };

  return (
    <>
      <div className="w-11/12 max-w-4xl mx-auto py-8  shadow-sm rounded-lg p-6 mt-32">
        <div className="w-32">
          <select
            name="status"
            onChange={(e) => setFilter(e.target.value)} // Update filter state when the user selects a category
            className="select select-bordered w-full p-3 border rounded-lg "
          >
            <option value="" className="text-blue-800">All</option>
            <option value="to-do " className="text-blue-800">To Do</option>
            <option value="in-progress" className="text-blue-800">In Progress</option>
            <option value="done" className="text-blue-800">Done</option>
          </select>
        </div>
        <h1 className="text-5xl font-semibold text-center mb-14  ">All Tasks</h1>
        <div className="space-y-4">
          {task.length > 0 ? (
            task.map((data, index) => (
              <div
                key={index}
                className="p-4  rounded-lg shadow-md border border-gray-300"
              >
                <div className="flex justify-between">
                  <h2 className="text-xl font-semibold text-blue-600">
                    {data.title}
                  </h2>
                  <div className="flex items-center space-x-4 mt-3">
                    <Link
                      to={`/updateTask/${data._id}`}
                      className="flex items-center  "
                    >
                      <Pencil size={18} className="mr-1" />
                    </Link>
                    <button
                      onClick={() => handleDelete(data._id)}
                      className="flex items-center text-red-600 hover:text-red-800 cursor-pointer"
                    >
                      <Trash2 size={18} className="mr-1" />
                    </button>
                  </div>
                </div>
                <p className="mt-2">{data.details}</p>
                <span
                  className={`inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full ${
                    data.status === "to-do"
                      ? "bg-yellow-300 text-black"
                      : data.status === "in-progress"
                      ? "bg-blue-300 text-black"
                      : "bg-green-300 text-black"
                  }`}
                >
                  {data.status.replace("-", " ").toUpperCase()}
                </span>
                <p className=" text-sm mt-2">
                  {moment(data.time).format("MMMM Do YYYY, h:mm A")}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center ">No tasks available.</p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-center mt-8 mb-8">
        <Link
          to={"/"}
          className=" bg-yellow-300 text-black px-5 font-semibold py-3 rounded-lg transition duration-300 cursor-pointer"
        >
          Add Task
        </Link>
      </div>
    </>
  );
}
