import React, { useEffect, useState } from 'react'

const TaskManager = ({ setTasks, tasks, time, setTimer, timer, toggle }) => {



    function Card({ task, idx }) {

        const { title, description, priority } = task;

        return <div id={toggle ? "bg-theme-light" : 'bg-theme'} className={` w-full p-4 rounded-2xl  border-l-4 ${priority === "high" ? "border-green-400" : priority === "low" ? "border-red-400" : "border-yellow-400"} flex  gap-4 items-start `}>

            <input type="checkbox" placeholder='Search Tasks...' className='border px-4 bg-gray-800  accent-green-400 w-5 h-5 rounded-md py-2 block' />

            <div className='space-y-2 text-base'>
                <h1 className='font-semibold'>{title}</h1>
                <p className='text-sm'>{description}.</p>
                <span className={`${priority === "high" ? "bg-green-500" : priority === "low" ? "bg-red-500" : "bg-yellow-500/60"} text-yellow-100 w-fit px-3 py-0.5 font-semibold rounded-full content-center uppercase`}>{priority}</span>
                <span className='mx-2 bg-zinc-700 text-white w-fit px-3 py-0.5 font-semibold rounded-full content-center uppercase'>{time(timer)}</span>
                <br />
                <br />
                <button onClick={() => {
                    setInterval(() => {
                        setTimer(prev => prev + 1);
                    }, 1000);
                }} className=' cursor-pointer mx-2 border-2 border-gray-400 bg-gray-500/70 text-white w-fit px-3 py-0.5 font-semibold rounded-md  '>{" ▶ Start"}</button>
                <button onClick={() => {
                    let newArr = tasks.filter((t, i) => i !== idx)
                    setTasks(newArr)
                    localStorage.setItem("tasks", JSON.stringify(newArr))
                }} className=' cursor-pointer mx-2 border-2 border-red-500  bg-red-400/50 text-white w-fit px-3 py-0.5 font-semibold rounded-md'>🗑️</button>
            </div>

        </div >
    }



    return (
        <div className='mt-8 space-y-4 flex-1  h-[83vh] '>

            {/* <div className='flex justify-between gap-4 w-full'>
                <input id={toggle ? "bg-theme-light" : 'bg-theme'} type="text" placeholder='Search tasks...' className=' px-4 rounded-md border   content-center uppercase flex-1 py-2' />
                <div className=' flex justify-end items-center gap-4 text-sm'>
                    {['All', "Active", "Completed"].map(e => <h1 id={toggle ? "bg-theme-light" : 'bg-theme'} key={e} className='rounded-md border-2 border-gray-500  px-4 cursor-pointer py-2'>{e}</h1>)}
                </div>
            </div> */}
                   {/* <h1 className='font-semibold text-2xl text-center'>Task Managment</h1> */}
            <div id='scrollbar' className='overflow-y-auto  h-full flex flex-col gap-4 '>

                {tasks.length ? tasks.map((t, i) => <Card key={i} task={t} idx={i} />) : <h1 className='h-full text-center content-center text-xl '>No tasks yet. Add one above!</h1>}
            </div>

        </div>
    )
}

export default TaskManager