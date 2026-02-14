import { useState } from 'react'
import { useForm } from "react-hook-form";

const HandleForm = () => {

    const [form, setForm] = useState({ name: "", email: "", password: "" })
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])

    const handleChange = (e) => {
        const { name, value } = e.target;  // name is Compulsory
        setForm(prev => ({ ...prev, [name]: value }))
    }

    return <div className='bg-black h-screen text-white py-4'>

        {users.map((e, i) => <div key={i} class="p-4 border rounded-2xl w-fit inline-block m-4 ">
            <h1 class="font-semibold text-xs">{e.name}</h1>
            <div class="flex flex-col">
                <span class="text-sm font-semibold">{e.email}</span>
                <span class="text-xs text-gray-400">{e.password}</span>
            </div>
        </div>)}

        <form onSubmit={(e) => {
            e.preventDefault()
            console.log(users)
            let arr = [...users, form]
            console.log(arr)
            setUsers(arr)
            localStorage.setItem("users", JSON.stringify(arr))

        }} className='text-white flex w-1/3 mx-auto flex-col py-4 gap-4'>
            <input onChange={handleChange} name='name' className='border mx-4 px-4 rounded-2xl py-1' type="text" placeholder='Enter Your Name' />
            <input onChange={handleChange} name='email' className='border mx-4 px-4 rounded-2xl py-1' type="email" placeholder='Enter YOur Email' />
            <input onChange={handleChange} name='password' className='border mx-4 px-4 rounded-2xl py-1' type="password" placeholder='Enter Your Password' />
            <div className='text-center'>
                <button className='border mx-4 px-4  rounded-2xl text-sm' >Submit</button>
                <button type='button' onClick={() => {
                    localStorage.clear();
                    setUsers([])
                }} className='border mx-4 px-4 rounded-2xl text-sm' >Reset</button>
            </div>
        </form>
        <ReactHookForm  setForm={setUsers}/>
    </div>
}

function ReactHookForm({setForm}) {
    let { register, handleSubmit, reset } = useForm();

    let formData = data => {
        setForm([data])
        // console.log(data);
        reset()
    };
    return (
        <form
            className="flex items-center gap-8 mt-8"
            onSubmit={handleSubmit(formData)}>
            <div className="flex flex-col gap-4">
                <input
                    {...register('name')}
                    className=" text-white px-2 py-1 text-lg capitalize bg-transparent border-2 border-green-500 rounded-lg "
                    type="text"
                    placeholder="name" />
                <input {...register('email')}
                    className=" text-white px-2 py-1 text-lg capitalize bg-transparent border-2 border-green-500  rounded-lg "
                    type="text"
                    placeholder="email" />
                <input {...register('password')}
                    className=" text-white px-2 py-1 text-lg bg-transparent border-2 border-green-500 rounded-lg "
                    type="text"
                    placeholder="Image (url)"
                />
            </div>
            <input
                className="bg-sky-500 px-6 text-lg cursor-pointer h-8 text-white font-semibold rounded-md"
                type="submit"
            />
        </form>
    );
}

export default HandleForm



