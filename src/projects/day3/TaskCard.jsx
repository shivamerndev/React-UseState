const TaskCard = ({ datas }) => {
    
    const { task, idx, toggle, time, timer } = datas
    const { title, description, priority } = task;

    return <div id={toggle ? "bg-theme-light" : 'bg-theme'} className={` w-full p-4 rounded-2xl  border-l-4 ${priority === "high" ? "border-green-400" : priority === "low" ? "border-red-400" : "border-yellow-400"} flex  gap-4 items-start `}>

        <input type="checkbox" placeholder='Search Tasks...' className='border px-4 bg-gray-800  accent-green-400 w-5 h-5 rounded-md py-2 block' />

        <div className='space-y-2 text-base'>
            <h1 className='font-semibold'>{title}</h1>
            <p className='text-sm'>{description}.</p>
            <span className={`${priority === "high" ? "bg-green-500" : priority === "low" ? "bg-red-500" : "bg-yellow-500/60"} text-yellow-100 w-fit px-3 py-0.5 font-semibold rounded-full content-center uppercase`}>{priority}</span>
            <span className='mx-2 bg-zinc-700 text-white w-fit px-3 py-0.5 font-semibold rounded-full content-center uppercase'>{time(timer)}</span>
            <br /><br />
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

export default TaskCard