import { useContext, useEffect, useState } from 'react'
import { CardData } from './CardContext'

const Game = () => {

    const { users } = useContext(CardData)
    const [flip, setFlip] = useState([])
    const [suffle, setSuffle] = useState([])
    const [score, setScore] = useState(0)
    const [matched, setMatched] = useState([])

    useEffect(() => {
alert("Double Click bug fix karna hai.")
        setSuffle(users.sort(() => (Math.random() - 0.5)))
    }, [])

    useEffect(() => {

        if (matched.length === suffle.length / 2) {
            return;
        }

        if (flip.length > 1) {
            if (flip[0]?.e === flip[1]?.e) {
                setScore(prev => prev + 10)
                setMatched([...matched, flip[0].e])
            }
            setTimeout(() => {
                setFlip([])
            }, 1000);
        }
    }, [flip])

    return (
        <div className='flex select-none justify-center flex-col gap-8 items-center h-screen bg-gray-700'>
            <h1 className='text-3xl font-bold text-white'>Memory Card Game🎮</h1>
            <section className='text-white shadow-2xl bg-gray-800  space-y-2 text-center min-w-1/2 rounded-2xl p-8'>
                <div className='flex justify-between '>
                    <h1 className='font-bold text-3xl'>Score : {score}</h1>
                    <button onClick={() => {
                        setScore(0)
                        setFlip([])
                        setMatched([])
                        setSuffle(users.sort(() => (Math.random() - 0.5)))
                    }} className='bg-rose-500 px-4
                     rounded-md font-semibold cursor-pointer py-1' >Restart</button>
                </div>


                <div className='grid grid-cols-6 gap-4 my-8   text-base font-semibold'>

                    {suffle.map((e, i) => <div key={i} className="card ">
                        <div className={`card-inner ${flip.some(f => f.i === i) || matched.includes(e) ? 'rotate-y-180' : ''}`}
                            onClick={() => {
                                if (flip.length > 1) {
                                    return;
                                } else {
                                    setFlip([...flip, { e, i }])
                                }
                            }}>
                            <div className="card-front"></div>
                            <div className="card-back">{e}</div>
                        </div>
                    </div>)}


                </div>

                {flip.length > 0 && (matched.length === suffle.length / 2) && <h1 className='font-semibold bg-green-600 w-fit px-4 mx-auto rounded-full'>🎉 You Won The Match!</h1>}

            </section>
        </div>
    )
}

export default Game