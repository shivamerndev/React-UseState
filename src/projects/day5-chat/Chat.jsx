import { useContext, useEffect, useState } from 'react'
import { IoInformation } from 'react-icons/io5'
import { userData } from './context/UserContext'
import { useNavigate } from 'react-router-dom'

const Chat = () => {

    const navigate = useNavigate()
    const { user, users, setUser, mode, setMode, groups, setGroups } = useContext(userData)
    const [inps, setInps] = useState("")
    const [add, setAdd] = useState(false)
    const [chats, setChats] = useState([...((user?.groups?.find(g => g.group === mode))?.chats)] || [])
    const [notify, setNotify] = useState(chats)
    const [formData, setFormData] = useState({ group: "", description: "", members: [] })
    console.log(chats)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData(prev => {
                if (checked) {
                    if (prev.members.includes(value)) return prev
                    return { ...prev, members: [...prev.members, value] }
                }
                return { ...prev, members: prev.members.filter(s => s !== value) }
            })
            return
        }

        setFormData({ ...formData, [name]: value })
    }

    useEffect(() => {
        if (!user) {
            navigate(-1)
        }
    }, [user])


    return (user &&
        <div className='flex items-center h-screen   text-white  '>

            {add && <div className='w-full h-full bg-black/50 backdrop-blur-xl absolute z-50 left-1/2 content-center -translate-x-1/2 '>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        let group = [...groups, formData]
                        // setGroups(group)
                        let newUser = { ...user, groups: group }
                        setUser(newUser)
                        localStorage.setItem("user", JSON.stringify(newUser))
                        setFormData({ group: "", description: "", members: [] })
                        setAdd(false)
                    }}
                    className='w-1/3   mx-auto bg-black shadow-2xl shadow-white/50 p-8 rounded-2xl space-y-2 ' >
                    <h1 className='text-2xl font-semibold text-center'>Create New Group</h1>
                    <p>Group Name</p>
                    <input onChange={handleChange} name='group' className='border px-4 py-1 w-full mb-4 rounded-md' required type="text" placeholder='Enter your name..' />
                    <p>Description</p>
                    <input onChange={handleChange} name='description' className='border px-4 py-1 w-full mb-4 rounded-md' type="text" placeholder='Enter group Description(Optional)' />
                    <p>Add Memebers</p>
                    <div className=' p-2'>
                        {users.map((e, i) => <div key={i} className='bg-gray-950 flex justify-between py-1 my-4 rounded-md'>
                            <input onChange={handleChange} value={e.name} checked={formData.members.includes(e.name)} type="checkbox" className='h-6 w-6 cursor-pointer accent-blue-500' />
                            <h1>{e.icon} {e.name} </h1>
                        </div>)}
                    </div>
                    <button onClick={() => setAdd(false)} type="button" className='bg-gray-500 cursor-pointer rounded-md px-4 py-1 mr-4 mt-4 ' >Cancle</button>
                    <button type='submit' className='bg-green-600 cursor-pointer rounded-md px-4 py-1 mr-4 mt-4 ' > + Create Group</button>
                </form>
            </div>}

            <div className='h-full flex-1 bg-gray-800 p-4 ' >
                <h1>💬 Chat</h1>
                <p>{user.icon} {user.name}</p>
                <div className='my-4  space-x-4'>

                    <button onClick={() => setAdd(true)} className='bg-green-500 cursor-pointer rounded-md px-4 py-1 ' >+ New Group</button>

                    <button onClick={() => {
                        localStorage.clear()
                        navigate("/p5")
                    }} className='bg-red-500 cursor-pointer rounded-md px-4 py-1 ' >Logout ➡️ </button>

                </div>
                <h1 className='font-bold text-3xl my-4 '>Group</h1>

                {user?.groups?.map(e => <div key={e.group} onClick={() => {
                    setMode(e.group)
                    localStorage.setItem('mode', e.group)
                }} className={`border rounded-md cursor-pointer ${mode === e.group && "bg-purple-500"} my-6  text-center py-1`} >
                    <h1>👥</h1>
                    <h2>{e.group}</h2>
                    <p>{e.members?.length || 0}</p>
                </div>)}

            </div>
            <div className='h-full relative flex-3 bg-gray-200' >

                <nav className='bg-gray-60 flex justify-between items-center bg-gray-900 px-6 py-4'>
                    <h1 className='text-2xl font-semibold leading-none'>General <br /> <span className='text-base'>General Discussion</span> </h1>
                    <div className='bg-red-500 cursor-pointer hover:bg-red-300 rounded-full p-2 h-fit w-fit'>
                        <IoInformation />
                    </div>
                </nav>
                <main id='scrollbar' className=' h-[77vh] overflow-auto space-y-8 p-4'>

                    {(user.groups?.find(g => g.group === mode))?.chats?.map((e, i) => <div key={i} className='flex gap-2'>
                        <h1>👩‍💻</h1>
                        <div>
                            <h1 className='text-gray-900 text-sm mb-1'>{e.u} {e.t}</h1>
                            <p className='bg-blue-400 px-4 ml-1 rounded-full w-fit'>{e.m}</p>
                        </div>
                    </div>)}

                </main>
                <footer className='border-2 border-green-600 absolute w-full left-0 bottom-0 bg-gray-600 py-4 gap-4 px-4 flex items-center'>
                    <textarea value={inps} onChange={(e) => setInps(e.target.value)} name="message" className='border bg-white/70 text-black px-4 py-1 rounded-md outline-none flex-1' ></textarea>
                    <button onClick={() => {
                        if (!mode) {
                            console.log(mode)
                            alert("please select the group")
                            return
                        }
                        if (inps === "") {
                            alert("please type something.")
                            return
                        }
                        let time = new Date().toString().split(" ")[4]
                        // console.log([((user.groups?.find(g=>g.group === mode)).chats)])
                        let arr = [...chats, { u: user.name, m: inps, t: time }]
                        setNotify(prev => [...prev, { u: user.name, m: inps, t: time }])
                        setChats(arr)
                        let groupWithChats = ({ ...(user.groups?.find(c => c.group === mode)), chats: arr })
                        let newArr = (user.groups?.filter(g => g.group !== groupWithChats?.group))
                        let newUser = { ...user, groups: [...newArr, groupWithChats] }
                        localStorage.setItem("user", JSON.stringify(newUser))
                        setUser({ ...user, groups: [...newArr, groupWithChats] })
                        setInps("")
                    }} className='bg-blue-400 rounded-md px-4 py-1 cursor-pointer ' > Send Message</button>
                </footer>
            </div>
            <div id='scrollbar' className='h-full overflow-y-auto  flex-1  bg-gray-800 p-4' >
                <h1 className='text-2xl font-semibold text-center border-2 py-2 rounded my-2'>Notification 🔔</h1>
                <p onClick={() => {
                    if (chats.length) {
                        setNotify([])
                    }
                }} className={`${notify.length && "bg-red-500 mt-4 px-4 cursor-pointer "}  rounded-md w-fit py-1 `}>{notify.length ? "Clear All" : "No Notification"}</p>

                {notify.map((e, i) => <div key={i} className='bg-gray-950 px-4 py-1 my-4 rounded-md'>
                    <h1>{e.m}</h1>
                    <h1>{e.t}</h1>
                </div>)}
            </div>

        </div>
    )
}

export default Chat