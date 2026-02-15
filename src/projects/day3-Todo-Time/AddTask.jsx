import { useState } from "react";

const AddTask = ({ setTasks, tasks, toggle }) => {

    const [task, setTask] = useState({ title: "", description: "",time:"00:00", priority: "medium",status:"active" })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value })
    }

    return <form id={toggle ? "bg-theme-light" : 'bg-theme'} onSubmit={(e) => {
        e.preventDefault()
        let arr = [...tasks, task]
        setTasks(arr)
        localStorage.setItem("tasks", JSON.stringify(arr))
    }} className=' flex gap-4 flex-col  py-4 px-8 rounded-2xl  '>
        <h1 className='font-semibold text-center text-2xl'>Add New Task</h1>
        <input onChange={handleChange} className='border  px-4 rounded-md py-1' name='title' type="text" placeholder='Task Title' />
        <textarea onChange={handleChange} className='border h-[3lh] px-4 rounded-md py-1' placeholder='Task Description' name="description"></textarea>
        <select id={toggle ? "bg-theme-light" : 'bg-theme'} onChange={handleChange} className='border px-4 rounded-md py-1  border-white ' name="priority">
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
            <option value="high">High Priority</option>
        </select>
        <button className='w-fit mx-auto text-white bg-green-600 cursor-pointer px-4 rounded-md font-semibold py-1'>Add Task</button>
    </form>
}

export default AddTask