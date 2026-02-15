import TaskCard from './TaskCard'

const TaskManager = ({ setTasks, tasks, time, setTimer, timer, toggle }) => {

    let lst = JSON.parse(localStorage.getItem("tasks"))

    return <div className='mt-8 space-y-4 flex-1 pb-4    md:h-[82vh] '>
        <h1 className='font-semibold text-2xl text-center bg-gray-700 py-2 rounded-md md:hidden'>Task Managment</h1>
        <div className='flex justify-between gap-4 w-full md:hidden'>
            <input onChange={(e) => {

                let newArr = lst.filter(t => (t.title.includes(e.target.value)))
                setTasks(newArr)

            }} id={toggle ? "bg-theme-light" : 'bg-theme'} type="text" placeholder='Search tasks...' className=' px-4 rounded-md border   content-center w-1/2 md:flex-1 md:py-2' />
            <div className=' flex justify-end items-center md:gap-4 gap-2 text-sm'>
                {['All', "Active", "Completed"].map(e => <h1 id={toggle ? "bg-theme-light" : 'bg-theme'} key={e} className='rounded-md border-2 border-gray-500 px-2  md:px-4 cursor-pointer py-1 md:py-2'>{e}</h1>)}
            </div>
        </div>
        <div id='scrollbar' className='overflow-y-auto  h-full flex flex-col gap-4 '>

            {tasks.length ? tasks.map((t, i) => <TaskCard key={i} datas={{ task: t, idx: i, toggle, time, timer, setTimer,setTasks,tasks }} />) : <h1 className='h-full text-center content-center text-xl '>No tasks yet. Add one above!</h1>}

        </div>

    </div>
}

export default TaskManager;