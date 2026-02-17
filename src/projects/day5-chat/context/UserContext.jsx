import React, { createContext, useState } from 'react'

export const userData = createContext()

const UserContext = ({ children }) => {

    let users = [
        { icon: "👩‍💻", name: "Alice" },
        { icon: "👨‍💻", name: "Bob" },
        { icon: "👨‍🎨", name: "Charlie" },
        { icon: "👩‍🔬", name: "Diana" },
    ]
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    const [mode, setMode] = useState(localStorage.getItem("mode"))
    const [groups, setGroups] = useState(JSON.parse(localStorage.getItem("user"))?.groups || [])


    return (
        <userData.Provider value={{ users, user, setUser, mode, setMode, groups, setGroups }} >
            {children}
        </userData.Provider>
    )
}

export default UserContext