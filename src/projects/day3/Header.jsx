const Header = ({ render, setToggle, toggle, setTasks }) => {

    let lst = JSON.parse(localStorage.getItem("tasks"))

    return <nav id={toggle ? "bg-theme-light" : 'bg-theme'} className='flex w-full justify-between select-none items-center py-4 rounded-md md:rounded-2xl px-8'>
        <h1 className='md:text-2xl font-semibold   '>Task Manager </h1>
        <div className='md:flex hidden justify-between gap-4 w-2/3'>
            <input onChange={(e) => {
                let newArr = lst.filter(t => (t.title.includes(e.target.value)))
                setTasks(newArr)
            }}
                id={toggle ? "bg-theme-light" : 'bg-theme'} type="text" placeholder='Search tasks...' className=' px-4 rounded-md border   content-center flex-1 py-2' />
            <div className=' flex justify-end items-center gap-4 text-sm'>

                {['All', "Active", "Completed"].map(e => <h1 onClick={() => {
                    if (e.toLowerCase() === 'all') {
                        setTasks(lst)
                        return
                    }
                    let newArr = lst.filter(t => t.status === e.toLowerCase())
                    setTasks(newArr)
                }}
                    id={toggle ? "bg-theme-light" : 'bg-theme'} key={e} className='rounded-md border-2 border-gray-500  px-4 cursor-pointer py-2'>{e}</h1>)}
            </div>
        </div>
        <h1 onClick={() => setToggle(!toggle)} className='md:text-2xl cursor-pointer  '>{toggle ? "🌙" : "🌤️"} <span className='text-base cursor-none'>Render : {render}</span></h1>
    </nav>

}

export default Header