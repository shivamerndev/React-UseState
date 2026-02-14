import { useState } from "react"

const FormProject = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("form")) || { pictitle: "", img: "", name: "", email: "", age: "", gender: "", skills: [], bio: "", exp: "", project: "" })

    const handleChange = (e) => {
        const { value, files, type, name, checked } = e.target;
        if (files) {
            setUser({ ...user, pictitle: (files[0].name) })
        }
        if (type === "checkbox") {
            setUser((prev) => {
                const skills = prev.skills ?? []
                if (checked) {
                    if (skills.includes(value)) return prev
                    return { ...prev, skills: [...skills, value] }
                }
                return { ...prev, skills: skills.filter((s) => s !== value) }
            })
            return
        }
        setUser((prev) => ({
            ...prev,
            [name]: type === "file" ? URL.createObjectURL(files[0]) : value,
        }))
    }

    return (

        <div className='bg-zinc-900 py-2 min-h-screen w-full flex md:flex-row flex-col gap-4'>
            <div className='md:flex-1  px-4 content-center'>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    if (!user.img) {
                        return alert("Image is Required")
                    }
                    localStorage.setItem("form", JSON.stringify(user))
                    alert("Form Submitted Successfully")
                }} className='text-white md:w-2/3  mx-auto justify-center max-h-full rounded-2xl border p-8 border-gray-500/50  flex flex-col items-cente gap-4 ' >
                    <input required onChange={handleChange} name="name" className='border rounded-md px-4 py-1' type="text" placeholder='Enter your name' />
                    <input required onChange={handleChange} name="email" className='border rounded-md px-4 py-1' type="email" placeholder='Enter your email' />
                    <div className="flex w-full justify-between gap-4">
                        <input required onChange={handleChange} name="age" min={18} className='border rounded-md px-4 py-1 w-1/2' type="number" placeholder='Enter your age' />
                        <select required onChange={handleChange} name="gender" defaultValue="d" className='bg-zinc-900 border rounded-md py-2 w-1/2 px-4'>
                            <option value='d' disabled >Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <h2 className="leading-none mt-2 text-cyan-300 text-xl font-semibold">Skills :</h2>
                    <div className='flex flex-col md:flex-row gap-2 md:gap-6'>
                        <label htmlFor="react"> <input value="React" checked={user.skills.includes("React")} onChange={handleChange} className='mx-1' type="checkbox" id='react' /> React</label>
                        <label htmlFor="node"> <input value="NodeJs" checked={user.skills.includes("NodeJs")} onChange={handleChange} className='mx-1' type="checkbox" id='node' /> Node</label>
                        <label htmlFor="mongo"> <input value="MongoDB" checked={user.skills.includes("MongoDB")} onChange={handleChange} className='mx-1' type="checkbox" id='mongo' /> MongoDB</label>
                        <label htmlFor="express"> <input value="Express" checked={user.skills.includes("Express")} onChange={handleChange} className='mx-1' type="checkbox" id='express' /> Express</label>
                    </div>
                    <input required onChange={handleChange} name="exp" className='border rounded-md px-4 py-1' type="number" placeholder='Experience(years)' />
                    {user.exp > 2 && <textarea onChange={handleChange} maxLength={150} name="project" className='border h-1/8 rounded-md px-4 py-1' type="text" placeholder='Describe Your Major Project'></textarea>}
                    <input onChange={handleChange} name="img" className='hidden' id='files' type="file" />
                    <label htmlFor="files" className='border-dashed truncate border text-sm bg-blue-400/10 text-blue-200 cursor-pointer border-blue-400 rounded-md py-2.5 px-4'>
                        <span className="bg-zinc-700 text-white rounded px-2 mr-2 py-1">Choose Your File</span> {user.pictitle} </label>

                    <textarea required onChange={handleChange} maxLength={150} name="bio" className='h-1/5 border rounded-md outline-none py-2 px-4' placeholder='Short bio (max 150 chars)'></textarea>
                    <button className="" >Submit</button>
                </form>
            </div>
            <div className=' flex-1 flex items-center px-4'>
                <div className='text-white rounded-2xl items-center gap-8 w-full md:w-10/12 mx-auto justify-center min-h-12/16 p-4 flex flex-col border bg-gray-900/50 border-gray-500/50 ' >
                    <figure className="h-40 w-40  bg-amber-500 rounded-full border-4 border-t-orange-400/95 border-r-red-400/95 border-b-pink-400/95 border-l-purple-400/95 overflow-hidden" >
                        <img className="h-full w-full object-cover" src={user.img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ufpRSme4oMWZqDLwiIUcC48aq9SoeX0-tw&s"} alt="img" />
                    </figure>
                    <div className="w-full space-y-4 " >
                        <h1>Name : <span>{user.name}</span></h1>
                        <h1>Email : <span>{user.email}</span></h1>
                        <h1>Age : <span>{user.age}</span></h1>
                        <h1>Gender : <span>{user.gender}</span></h1>
                        <h1>Skills : {user.skills.map((s, i) => <span key={s}>{i !== 0 ? ", " : ""}{s}</span>
                        )}</h1>
                        <h1>Experience : <span>{user.exp}</span></h1>
                        <h1>Project : <span>{user.project}</span></h1>
                        <h1>Bio : <span>{user.bio}</span></h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FormProject
