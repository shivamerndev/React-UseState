import React, { useContext, useState } from 'react'
import { userData } from './context/UserContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const { user, users, setUser } = useContext(userData)
  const navigate = useNavigate()


  return (
    <div className='flex justify-center items-center h-screen'>
      <section className=' shadow-2xl  space-y-2 text-center w-1/3 rounded-2xl p-8'>
        <h1 className='font-bold text-4xl text-gray-800'>Group Chat</h1>
        <p>Select a User to login</p>
        <div className='grid grid-cols-2 gap-4 my-8  text-base font-semibold'>
          {users.map(e => <div key={e.name} onClick={() => {
            setUser(e)
          }} className={` ${user?.name === e.name ? "border bg-blue-100 border-blue-500" : "bg-gray-100"} text-center cursor-pointer  rounded-xl px-4 space-y-2 py-8  content-center`}>
            <h1 className='text-4xl'>{e.icon}</h1>
            <h1>{e.name}</h1>
            <p className='bg-green-500/50 w-fit mx-auto text-base text-green-800 px-4 rounded-full '>online</p>
          </div>)}

        </div>
        <button onClick={() => {
          localStorage.setItem("user", JSON.stringify(user))
          navigate("/d5/chat")
        }} className={` ${user?.name !== "user" ? "bg-gradient-to-br from-[#667eea] to-[#764ba2]" : "bg-gray-300 "}  w-full cursor-pointer text-white font-semibold text-xl px-4 py-1.5 rounded-md `}>Login as {user?.name || "user"}</button>
      </section>
    </div>
  )
}

export default Login