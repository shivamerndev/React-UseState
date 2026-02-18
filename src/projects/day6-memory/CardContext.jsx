import { createContext } from 'react'

export const CardData = createContext()
const CardContext = ({ children }) => {

    const users = [
        // "👩‍💻", "👨‍💻",
        // "👩‍💻", "👨‍💻"
        "👩‍💻", "👨‍💻", "👨‍🎨", "👩‍🔬",
        "👨‍🚀", "👩‍🍳", "👨‍✈️", "👩‍⚕️",
        "👨‍🏫", "👩‍🎤", "👨‍🔧", "👩‍🚒",
        "👩‍💻", "👨‍💻", "👨‍🎨", "👩‍🔬",
        "👨‍🚀", "👩‍🍳", "👨‍✈️", "👩‍⚕️",
        "👨‍🏫", "👩‍🎤", "👨‍🔧", "👩‍🚒",
    ]

    return <CardData.Provider value={{ users }}>
        {children}
    </CardData.Provider>
}

export default CardContext