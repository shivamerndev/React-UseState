import { Heart, Search } from "lucide-react"
import { IoHomeOutline } from "react-icons/io5"
import { LuShoppingCart } from "react-icons/lu"
import { VscAccount } from "react-icons/vsc"
import { useNavigate } from "react-router-dom"

const Nav = ({ setSearch, wishlist, carts }) => {

    const navigate = useNavigate()

    const handleLinks = (link) => {
        if (link === "home") {
            navigate("/p4")
        } else if (link === "") {
            console.log('image upload karo')
        }
        else {
            navigate(`/d4/${link}`)
        }
    }

    return (
        <nav className=" sticky w-full top-0 grid grid-cols-3 px-8 justify-center bg-gray-900/90 z-50 font-semibold py-6">
            <figure onClick={() => {
                window.location.reload()
            }} className="flex items-center gap-2 cursor-pointer uppercase">
                <img className="h-10 w-10 rounded-full overflow-hidden" src='online-store.gif' alt="" />
                <figcaption className="leading-none font-bold">Shivam's <br /> Store</figcaption>
            </figure>
            <div className=" relative">
                <input onChange={(e) => setSearch(e.target.value)} className="border border-gray-500 outline-none rounded-full w-full px-6 py-1 " type="text" placeholder="Search Products..." />
                <span className="px-3 bg-gray-500/50 absolute text-white right-0 top-0 py-1.5   rounded-r-full cursor-pointer content-center">
                    <Search size={20} />
                </span>
            </div>
            <div className="  md:flex justify-end   gap-8 items-center text-base text-white">
                {[{ t: "home", icon: <IoHomeOutline size={20} /> }, { t: "wishlist", icon: <Heart size={20} /> }, { t: "cart", icon: <LuShoppingCart size={20} /> }, { t: "", icon: <VscAccount size={20} /> },
                ].map(e => <div onClick={() => handleLinks(e.t)} key={e.t} className="flex flex-col justify-center relative items-center cursor-pointer ">

                    {e.t === "" ? <figure className="h-10 w-10 rounded-full overflow-hidden">
                        <img className="h-full w-full object-cover object-top" src='/public/profile.jpeg' alt="" />
                    </figure> : e.icon}

                    {e.t}

                    {e.t === "cart" && carts.length > 0 && <h1 className='bg-red-600 text-white font-semibold -top-1.5 -right-1 text-xs px-1 rounded-full absolute '>{carts.length || 0}</h1>}
                    {e.t === "wishlist" && wishlist.length > 0 && <h1 className='bg-red-600 text-white font-semibold -top-1.5 right-1.5 text-xs px-1 rounded-full absolute '>{wishlist.length || 0}</h1>}

                </div>)}
            </div>
        </nav>
    )
}

export default Nav