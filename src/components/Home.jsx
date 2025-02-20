import React from 'react'

export default function Home() {
  return (
    <div className='text-3xl '>
      <h1>Add Task and Track Your Journey</h1>
      <form action="">
        <input type="text"
        placeholder='Type your task'
        name='title'
        className='input input-bordered input-info w-full max-w-md' />
        <textarea name="description" id=""></textarea>
        {/* generate a time */}
        <select name="" id="">
          <option value="to-do">To Do</option>
          <option value="In-progess">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </form>
    </div>
  )
}
