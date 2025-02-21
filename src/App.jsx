import React, { useContext } from "react";
import banner from "/banner.jpg";
import Swal from "sweetalert2";
import ShowAllTask from "./Alltask/ShowAllTask";
import { Link } from "react-router";
import { AuthContexts } from "./context/AuthProvider";
export default function App() {
  const { user } = useContext(AuthContexts);
  const formHandle = (e) => {
    e.preventDefault();
    const title = e.target.title.value.trim();
    const details = e.target.details.value.trim();
    const status = e.target.status.value.trim();
    const time = new Date().toISOString();
    const taskInfo = { title, details, status, time, email: user.email };

    if (title.length > 50) {
      Swal.fire({
        title: "Error!",
        icon: "error",
        draggable: true,
      });
      return;
    }
    if (details.length > 200) {
      Swal.fire({
        title: "Error!",
        icon: "error",
        draggable: true,
      });
      return;
    }
    // console.log(taskInfo)
    fetch(`https://task-trek-server-two.vercel.app/addTask`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(taskInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // Show success message
          Swal.fire({
            title: "Success!",
            text: "Your task has been added successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });

          // Optional: Reset form fields after success
          e.target.reset();
        } else {
          // Show error message if insertion failed
          Swal.fire({
            title: "Error!",
            text: "Task could not be added. Try again!",
            icon: "error",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again!",
          icon: "error",
        });
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="mt-28">
        <div className="flex items-center justify-center mb-5">
          {/* <img src={banner} className='h-96 flex items-center' alt="hpw" /> */}
        </div>
        {/* task */}
        <div className="w-11/12 max-w-md mx-auto py-8 shadow-lg rounded-lg p-6 border-2 border-gray-200">
          <h1 className="text-3xl font-bold text-center mb-6 ">
            Add Task and Track Your Journey
          </h1>
          <form className="space-y-4" onSubmit={formHandle}>
            <input
              type="text"
              placeholder="Type your task"
              name="title"
              required
              className="input input-bordered input-info w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="details"
              placeholder="Task Description"
              className="textarea textarea-bordered w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>

            <select
              name="status"
              className="select select-bordered w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="to-do">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
            <p className="text-sm text-gray-500">
              Timestamp: {new Date().toLocaleString()}
            </p>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300 cursor-pointer"
            >
              Add Task
            </button>
          </form>
        </div>
      </div>

      {/* show task */}
      <div className="flex items-center justify-center mt-7 mb-8">
        <Link
          to={"/alltask"}
          className=" bg-yellow-300 px-5 font-semibold py-3 rounded-lg transition duration-300 cursor-pointer text-black"
        >
          See All Task
        </Link>
      </div>
    </>
  );
}
