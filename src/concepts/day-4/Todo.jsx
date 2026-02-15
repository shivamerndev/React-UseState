import { useState } from "react"
import { useForm } from "react-hook-form"

const Todo = () => {

    const [toggle, setToggle] = useState(false)
    const [task, setTask] = useState(JSON.parse(localStorage.getItem("tsk")) || [])

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const handleRegisterSubmit = (data) => {
        let arr = [...task, data]
        setTask(arr)
        localStorage.setItem("tsk", JSON.stringify(arr))
        reset()
    }

    return (
        <div className='bg-zinc-800 flex text-white h-screen w-full'>

            <aside className='bg-zinc-700 p-4 md:w-1/4 h-full'>
                <figure className='flex items-center h-16 gap-2'>
                    <img className='h-full' src="https://cdn3d.iconscout.com/3d/premium/thumb/notes-3d-icon-png-download-10344957.png" alt="" />
                    <h1 className='text-2xl font-bold  uppercase leading-none'>Sheryians <br /> Notes</h1>
                </figure>
                <div className='flex flex-col justify-between  h-[85vh] mt-4'>
                    <h1 onClick={() => setToggle(false)} className='text-2xl cursor-pointer font-semibold bg-zinc-900/70 py-2 px-4 text-center rounded-md my-4'>All Notes</h1>
                    <h1 onClick={() => setToggle(true)} className='text-2xl cursor-pointer font-semibold bg-green-500 py-2 px-4 text-center rounded-md my-4'>Create Notes</h1>
                </div>
            </aside>

            <div className="flex-1 gap-4 flex items-center justify-center">

                {toggle ? <form onSubmit={handleSubmit(handleRegisterSubmit)} className='flex  text-white flex-col border p-8 rounded-2xl gap-4 '>
                    <input required className='border px-4 rounded-md py-1' {...register("title", { required: "Title Is Required." })} type="text" placeholder='Title' />
                    <textarea required className='border px-4 rounded-md py-1' {...register("description")} placeholder='Description'></textarea>
                    <button className='border-purple-400 border-2 cursor-pointer bg-purple-800/50 px-4 rounded-md py-1'>Add New Task</button>
                </form> :
                    <div className="flex flex-wrap gap-4 justify-center items-center w-full h-full">
                        {task.map((t, i) => <Card key={i} title={t.title} description={t.description} />)}
                    </div>
                }
            </div>

        </div>
    )
}

function Card({ title, description }) {
    return <div className='space-y-2 border-2 bg-gray-700 rounded-2xl w-1/4 h-1/5 text-center content-center text-2xl'>
        <h1 className='font-semibold'>{title}</h1>
        <p className='text-sm'>{description}.</p>
    </div>
}

export default Todo