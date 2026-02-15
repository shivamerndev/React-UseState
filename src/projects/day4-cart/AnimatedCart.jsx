import { Package, ShoppingCart } from 'lucide-react';
import { useState } from 'react'
import "./Animate.css"

const AnimatedCart = ({ product, setCarts }) => {

    const [isClicked, setIsClicked] = useState(false);
    const [showAdded, setShowAdded] = useState(false);

    const addCart = (product) => {
        let lsc = JSON.parse(localStorage.getItem("carts")) || [];
        let newObj = lsc.find(c => c.id === product.id);
        let arr = [];
        if (newObj) {
            // Update quantity for existing product
            arr = lsc.map(c => c.id === product.id ? { ...c, quantity: c.quantity + 1 }: c);
        } else {
            // Add new product to cart
            arr = [...lsc, { id: product.id, quantity: 1 }];
        }
        localStorage.setItem("carts", JSON.stringify(arr));
      if(setCarts)  setCarts(arr);
    }


    return <button className={`w-10/12 mx-auto  text-sm bg-gradient-to-br cursor-pointer from-orange-600  to-amber-600 via-rose-400 via-20%  ${isClicked ? "h-10" : "h-8"} text-white font-semibold mb-2 py-1  md:py-2 px-4 rounded-full transition-all duration-300 transform  hover:scale-105 shadow-lg hover:shadow-xl  relative overflow-hidden flex items-center justify-center gap-2`}
        onClick={() => {
            addCart(product)
            setIsClicked(true)
            setTimeout(() => {
                setShowAdded(true)
            }, 2000);
            setTimeout(() => {
                setIsClicked(false)
                setShowAdded(false)
            }, 3000);
        }}>
        {isClicked && <ShoppingCart id='carticon' className=" w-5  sm:w-6 sm:h-6  z-20 top-1/2 absolute -translate-x-1/2 -translate-y-1/2" />}
        {!isClicked && <ShoppingCart className={`  w-4 h-4 {pd ? "block" : "hidden"} sm:block `} />}
        {showAdded ? 'Added ✔️' : !isClicked ? 'Add to cart' : ""}
        {isClicked && <Package id='boxicon' className=" absolute z-30 -translate-x-1/2 -translate-y-1/2 w-3 h-3 " />}
    </button>
}

export default AnimatedCart