import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";
import usePublic from "../hook/usePublic";
export default function UpdateTask() {
  // const taskData  = useLoaderData()
  const { id } = useParams();
  // console.log(loader)
  // const {_id,title,details,status,time} = taskData
  //  const axiosPublic = usePublic()
  const formHandle = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const details = e.target.details.value;
    const status = e.target.status.value;
    // const time = new Date().toISOString();
    const updateTask = { title, details, status };

    // if (title.length > 50) {
    //   Swal.fire({
    //     title: "Error!",
    //     icon: "error",
    //     draggable: true,
    //   });
    //   return;
    // }
    // if (details.length > 200) {
    //   Swal.fire({
    //     title: "Error!",
    //     icon: "error",
    //     draggable: true,
    //   });
    //   return;
    // }
    // console.log(taskInfo)
    // https://task-trek-server-two.vercel.app
    fetch(`https://task-trek-server-two.vercel.app/updateTask/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            text: "Task Update Successfully",
            title: "Success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <>
      <div>
        <div className="flex items-center justify-center mb-5 mt-28">
          {/* <img src={banner} className='h-96 flex items-center' alt="hpw" /> */}
        </div>
        {/* task */}
        <div className="w-11/12 max-w-md mx-auto py-8  shadow-lg rounded-lg p-6 border-2 border-gray-50">
          <h1 className="text-3xl font-bold text-center mb-6 ">
            Update Task
          </h1>
          <form className="space-y-4" onSubmit={formHandle}>
            <input
              type="text"
              placeholder="Type your task"
              name="title"
              required
              // defaultValue={title}
              className="input input-bordered input-info w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="details"
              // defaultValue={details}
              placeholder="Task Description"
              className="textarea textarea-bordered w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>

            <select
              name="status"
              // defaultValue={status}
              className="select select-bordered w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="to-do">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
            <p
              // defaultValue={time}
              className="text-sm text-gray-500"
            >
              Timestamp: {new Date().toLocaleString()}
            </p>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600  font-semibold py-3 rounded-lg transition duration-300 cursor-pointer text-white"
            >
              Update Task
            </button>
          </form>
        </div>
      </div>

      {/* show task */}
      <div className="flex items-center justify-center mt-10">
        <Link
          to={"/alltask"}
          className=" bg-yellow-500 px-5 font-semibold py-3 rounded-lg transition duration-300 cursor-pointer"
        >
          See All Task
        </Link>
      </div>
    </>
  );
}
