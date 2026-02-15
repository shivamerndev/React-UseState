import { Star } from 'lucide-react'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AnimatedCart from './AnimatedCart'

const ProductDetail = () => {

  const { id } = useParams()
  let lsp = JSON.parse(localStorage.getItem("products")).find(p => p.id == id)
  const { image, title, price, rating: { rate, count }, description, category } = lsp
  const navigate = useNavigate()

  const renderStars = (rating) => {

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) stars.push(<Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)

    if (hasHalfStar) stars.push(<Star key="half" className="w-3 h-3 fill-yellow-400/50 text-yellow-400" />)

    const emptyStars = 5 - Math.ceil(rating);

    for (let i = 0; i < emptyStars; i++) stars.push(<Star key={`empty-${i}`} className="w-3 h-3 text-gray-300" />);

    return stars;
  }

  return (
    <div className='bg-gray-800 h-screen flex'>
      <h1 onClick={() => navigate("/p4")} className='text-red-500 absolute top-4 left-4 cursor-pointer text-xl'> Back</h1>
      <figure className='h-full content-center  flex-1 '>
        <img className='w-full h-2/3 hover:scale-130 cursor-pointer transition-all duration-75 object-center object-contain ' src={image} alt="image" />
      </figure>
      <div className=' flex justify-center flex-col items-cente gap-6 text-white font-semibold text-2xl flex-1 h-full'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <span className='text-base bg-amber-700 px-4 rounded-2xl py-0.5 w-fit'>{category}</span>
        <small className='leading-none text-xl w-10/12'>{description}</small>
        <div className='space-x-4'>
          <div className='flex gap-2 items-center'>
            <span className='text-green-500'>₹ {price}</span>
            <span className='flex items-center gap-1 ml-4'> {renderStars(rate)}</span>
            <span className='text-yellow-500 '> {rate}</span>
          </div>
        </div>

        <button onClick={() => {
          alert("That is it for Today.")
        }} className='bg-green-700 outline-none px-4 rounded-full py-1 w-1/2 cursor-pointer mx-auto'>Buy Now</button>

        <div className='w-2/3 mx-auto'>
          <AnimatedCart product={lsp} />
        </div>

      </div>
    </div>
  )
}

export default ProductDetail