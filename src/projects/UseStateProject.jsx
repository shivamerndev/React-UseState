import React, { useState } from 'react'
import '../projects/p1.css'
// import '../projects/p1.module.css'

const UseStateProject = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("Shivam")
    const [role, setRole] = useState("Student")
    const [hide, setHide] = useState(true)


    return (
        <section>
            <div id="card">
                <h1>Counter Card</h1>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setCount(count - 1)}>-</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
            <div id="card">
                <h1>Name Card</h1>
                <h1>{name}</h1>
                <button onClick={() => setName("React Master")}>Change Name</button>
            </div>
            <div id="card">
                <h1>User Card</h1>
                <h1>Name : Shivam</h1>
                <h1>Role : {role}</h1>
                <button onClick={() => setRole("Admin")} >Promote to Admin</button>
            </div>
            <div id="card">
                <h1>Visibility Card</h1>
                <button onClick={() => setHide(!hide)}>Hide Message</button>
                {hide && <p>🚀 This message is controlled by useState boolean value.</p>}
            </div>
        </section >
    )
}

export default UseStateProject