import React from 'react'
import banner from '/banner.jpg'
import Swal from 'sweetalert2'
import ShowAllTask from './Alltask/ShowAllTask'
import { Link } from 'react-router'
export default function App() {

    const formHandle = (e) => {
        e.preventDefault()
        const title = e.target.title.value.trim()
        const details = e.target.details.value.trim()
        const status = e.target.status.value.trim()
        const time = new Date().toISOString();
        const taskInfo = {title,details,status,time}
        
        if(title.length > 50){
            Swal.fire({
                title: "Error!",
                icon: "error",
                draggable: true
              });
              return;
        }
        if(details.length > 200) {
            Swal.fire({
                title: "Error!",
                icon: "error",
                draggable: true
              });
              return;
        }
        // console.log(taskInfo)
        fetch(`http://localhost:8000/addTask`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(taskInfo),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
        

    }

    return (
      <>
        <div>

     <div className='flex items-center justify-center mb-5'>
     {/* <img src={banner} className='h-96 flex items-center' alt="hpw" /> */}
     </div>
            {/* task */}
            <div className="w-11/12 max-w-md mx-auto py-8 bg-white shadow-lg rounded-lg p-6">
    <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
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
      <p 
      className="text-sm text-gray-500">Timestamp: {new Date().toLocaleString()}</p>
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
      <div className='flex items-center justify-center mt-10'>
      <Link to={'/alltask'} className=' bg-yellow-500 px-5 font-semibold py-3 rounded-lg transition duration-300 cursor-pointer' >See All Task</Link>
      </div>
      </>
  )
}
