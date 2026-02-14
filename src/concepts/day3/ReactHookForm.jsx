import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const ReactHookForm = () => {
    const [page, setPage] = useState(false)
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])
    const { register, handleSubmit, reset, formState: { errors } } = useForm()


    const handleRegisterSubmit = (data) => {
        let exist = users.find(u => (u.email === data.email && u.phone === data.phone))
        console.log(exist)
        if (exist) return alert("user already exist.")
        alert("Register Successfully")
        let arr = [...users, data]
        setUsers(arr)
        localStorage.setItem("users", JSON.stringify(arr))
        reset()
    }
    const handleLoginSubmit = (data) => {
        let exist = users.find(u => (u.email === data.email && u.password === data.password))
        console.log(exist)
        if (!exist) return alert("user not found.")
        alert("LoggedIn Successfully")
        reset()
    }

    return (
        <div className='h-screen bg-black text-white flex justify-center items-center gap-8'>
            {page ?
                <form onSubmit={handleSubmit(handleRegisterSubmit)} className='flex text-white flex-col border p-8 rounded-2xl gap-4 '>
                    <h1 className='text-center font-bold mb-4 uppercase'>Register</h1>
                    <input required className='border px-4 rounded-md py-1' {...register("name", { required: "Name Is Required." })} type="text" placeholder='Enter your name' />
                    <input required className='border px-4 rounded-md py-1' {...register("email", { required: "email Is Required." })} type="email" placeholder='Enter your email' />
                    <input required className='border px-4 rounded-md py-1' {...register("phone", { required: "phone Is Required." })} type="tel" placeholder='Enter you phone' />
                    <input required className='border px-4 rounded-md py-1' {...register("password", { required: "password Is Required." })} type="password" placeholder='Enter you password' />
                    <button>Register</button>
                    <p>Already have an Account?<span onClick={() => setPage(!page)} className='text-blue-400 cursor-pointer text-sm pl-2'>Login here</span></p>
                </form> :
                <form onSubmit={handleSubmit(handleLoginSubmit)} className='flex text-white flex-col border p-8 rounded-2xl gap-4 '>
                    <h1 className='text-center font-bold mb-4 uppercase'>Login</h1>
                    {/* <input required className='border px-4 rounded-md py-1' {...register("email", { required: "email Is Required." })} type="email" placeholder='Enter your email' />
                    <input required className='border px-4 rounded-md py-1' {...register("password", { required: "password Is Required." })} type="password" placeholder='Enter you password' /> */}
                    <button>Login</button>
                    <p>Don't have an Account?<span onClick={() => setPage(!page)} className='text-blue-400 cursor-pointer text-sm pl-2'>Register here</span></p>
                </form>
            }
        </div>
    )
}

export default ReactHookForm