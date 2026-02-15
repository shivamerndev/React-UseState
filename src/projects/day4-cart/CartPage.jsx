import Card from './Card'
import Loader from '../../utils/Loader'
import { useNavigate, Link } from 'react-router-dom'
import { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const CartPage = () => {

  const [carts, setcarts] = useState([])
  const navigate = useNavigate()
  const [lsc, setLsc] = useState(JSON.parse(localStorage.getItem("carts")) || [])
  const [offer, setOffer] = useState(false)
  let estimateTotal = carts.reduce((acc, p, i) => (acc + (p.price * lsc[i]?.quantity)), 0)

  useEffect(() => {
      if (estimateTotal> 1000) {
      setOffer(true)
    }else{
      setOffer(false)
    }
    let lsp = JSON.parse(localStorage.getItem("products")) || []
    let newArr = lsp.filter((p) => {
      return lsc.some((item) => item.id === p.id)
    })
    setcarts(newArr)
  }, [lsc])


  return (carts.length ?
    <div className=" p-4 font-sans relative bg-gray-950 text-white  h-screen w-full rounded-lg shadow-sm">

      <div className='w-2/3 mx-auto bg-gray-800 p-6 h-full rounded-2xl'>
        {/* Header */}
        <div className="flex justify-between bg-gray-700 py-3 px-6 rounded-md items-center mb-4">
          <Link to="/p4"
            className="text-sm font-medium text-amber-700 underline hover:text-orange-400 flex items-center gap-1 transition">
            <FaArrowLeftLong size={12} />
            Go Back
          </Link>
          <h2 className="text-2xl font-semibold tracking-tight ">
            Your Cart
          </h2>
        </div>

        {/* Cart Items */}
        <div id='scrollbar' className="divide-y   h-10/14 overflow-y-auto divide-gray-200">
          {carts?.map((item, i) => {

            const { image, title, price, rating, id, description, category } = item
            let quantity = lsc[i]?.quantity

            return <div key={i} className="flex items-center py-5 w-full ">
              {/* Product Image */}
              <img onClick={() => navigate(`/d4/p/${id}`)}
                src={image}
                alt="image"
                className="w-20 h-20 object-contain rounded-lg border border-gray-200 cursor-pointer hover:scale-105 transition-transform" />

              {/* Product Details */}
              <div className=" w-10/12 ml-4 overflow-hidden  ">
                <h3 className="md:text-lg truncate font-medium capitalize ">
                  {item?.product?.title || item?.title}
                </h3>
                <p className="text-sm">Rs. {item?.product?.price || item.price}</p>


                {/* Quantity Controls */}
                <div className="flex items-center mt-3">
                  {/* Decrement */}
                  <button
                    onClick={() => {
                      if (estimateTotal > 1000) {
                        setOffer(true)
                      }
                      let newLsc = lsc.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
                      setLsc(newLsc)
                      localStorage.setItem("carts", JSON.stringify(newLsc))
                    }}
                    disabled={quantity <= 1}
                    className={`w-8 h-8 border border-gray-300 rounded-l 
                  ${quantity <= 1 ? 'bg-gray-700 cursor-not-allowed' : 'hover:bg-gray-100 cursor-pointer'}`}>
                    -
                  </button>
                  {/* Quantity Display */}
                  <span className="px-4 text-sm">{quantity}</span>
                  {/* Increment */}
                  <button
                    onClick={() => {
                      if (estimateTotal > 1000) {
                        setOffer(true)
                      }
                      let newLsc = lsc.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
                      setLsc(newLsc)
                      localStorage.setItem("carts", JSON.stringify(newLsc))
                    }}
                    className={`w-8 h-8 border border-gray-300 rounded-r-md `}>
                    +
                  </button>

                  {/* Delete Button */}

                  <button onClick={() => {
                    let newArr = lsc.filter(p => p.id !== id)
                    setLsc(newArr)
                    localStorage.setItem("carts", JSON.stringify(newArr))
                  }}
                    // disabled={loadingItems[item.product?._id || item._id]}
                    className={`ml-5 text-xl text-red-500 hover:text-orange-500 cursor-pointer transition`}>
                    <MdDelete />
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="ml-4 whitespace-nowrap text-base font-semibold ">
                Rs. {(price * quantity).toFixed(2)}
              </div>
            </div>
          }
          )}
        </div>

        {/* Summary */}
        <div className="pt-6 text-right border-t border-gray-200 mt-2">
          <p className=" text-base mb-1 ">
            <span className="font-bold text-lg"> Estimated Total : Rs.{estimateTotal.toFixed(2)}</span>
            <br />
            {offer && <span>🎉 You unlocked free shipping!</span>}
          </p>

          <button
            onClick={() => {
              alert("That is it for today 😁😀")
            }}
            className={`${lsc.length > 0 ? "bg-amber-700" : "bg-amber-900/50"
              } hover:bg-amber-700 cursor-pointer text-white px-6 py-2 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105`}>
            Check Out
          </button>
        </div>
      </div>
    </div>
    :
    <div className="h-screen flex flex-col justify-center items-center gap-6 bg-gradient-to-br from-orange-100 to-rose-200 text-gray-800 p-6">
      {/* Icon */}
      <div className="bg-amber-50 p-6 rounded-full shadow-md">
        <BsCartX className="text-6xl text-red-600" />
      </div>

      {/* Text */}
      <h1 className="font-bold text-amber-900 uppercase text-2xl md:text-3xl text-center tracking-wide">
        Your cart is empty
      </h1>
      <p className="text-amber-700 text-center max-w-md">
        Looks like you haven't added anything to your cart yet.
      </p>

      {/* Button */}
      <Link to="/p4" className="mt-4 bg-gradient-to-tr from-rose-500 to-orange-500 hover:shadow-2xs text-amber-100 px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105 flex items-center gap-2">
        Continue Shopping
        <FaArrowRightLong size={18} />
      </Link>
    </div>
  )
}

export default CartPage;