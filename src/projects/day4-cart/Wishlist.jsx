import React, { useEffect, useState } from 'react'
import Card from './Card'
import Loader from '../../utils/Loader'
import { useNavigate } from 'react-router-dom'

const Wishlist = () => {

  const [wishes, setWishes] = useState([])
  const navigate = useNavigate()
  const [lsw, setLsw] = useState(JSON.parse(localStorage.getItem("wish")) || [])

  useEffect(() => {
    let lsp = JSON.parse(localStorage.getItem("products")) || []
    let newArr = lsp.filter((p) => lsw.includes(p.id))
    setWishes(newArr)
  }, [lsw])


  return (
    <div className='h-screen bg-gray-800 text-white relative'>
      <span onClick={()=>navigate(-1)} className='text-base text-red-400 absolute top-6 left-8 font-semibold  cursor-pointer'>Back</span>
      <h1 className='bg-gray-600/70  text-center text-5xl font-bold  py-4'>Wishlist Page</h1>
      {wishes.length ? <div className='grid grid-cols-5 gap-6 mt-8 px-12 '>
        {wishes.map(p => <Card wishlist={lsw} setLsw={setLsw} key={p.id} discount={Math.floor(Math.random() * 50)} product={p} />)}
      </div> : <h1 className='text-center content-center h-[80vh] text-2xl capitalize font-semibold' > Your Wishlist is blank.</h1>}
    </div>
  )
}

export default Wishlist