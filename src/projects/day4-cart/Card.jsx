import { Eye, Heart, ShoppingCart, Star } from 'lucide-react';
import AnimatedCard from './AnimatedCart';
import { useNavigate } from 'react-router-dom';

const Card = ({ product, discount, setLsw,wishlist,setWishlist , setCarts}) => {

    const { image, title, price, rating, id } = product
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

    const toggleWishlist = (id) => {
        let lsw = JSON.parse(localStorage.getItem("wish")) || []
        if (lsw && lsw.includes(id)) {
            let newElem = lsw.filter(e => e !== id)
            localStorage.setItem("wish", JSON.stringify(newElem))
            if (setLsw) {
                setLsw(newElem)
            }else{
                setWishlist(newElem)
            }
            return;
        }
        let arr = [...lsw, id]
        setWishlist(arr)
        localStorage.setItem("wish", JSON.stringify(arr))
    }

    return (
        <div className=" mb-4 group bg-white cursor-pointer h-120 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col justify-between border border-gray-100">
            {/* Image Container */}
            < div className="relative h-2/3  overflow-hidden" >
                <img className="h-full w-full  object-contain object-center group-hover:scale-110 transition-transform duration-300"
                    src={image}
                    alt='product image' />

                {/* Discount Badge */}
                <div className="absolute top-3 left-3 bg-gradient-to-tl from-rose-400 to-orange-400 text-white text-xs font-bold px-2 sm:py-1 sm:px-3 py-0.5 rounded-full shadow-lg">
                    {discount}% <span className="hidden sm:inline">OFF</span>
                </div>

                {/* Wishlist Button */}
                <button onClick={() => toggleWishlist(product.id)}
                    className="absolute cursor-pointer top-3 right-3 h-8 w-8 bg-gray-500 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                    <Heart
                        className={`w-4 h-4 transition-colors duration-300
                             ${wishlist.includes(product.id)
                                ? "fill-rose-400 text-red-400"
                                : "hover:text-gray-100 text-red-400"
                            }
                            `} />
                </button>

                {/* Quick Actions */}
                <div className="absolute hidden sm:block bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                        <div className="bg-white/90 cursor-pointer backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-lg">
                            <Eye onClick={() => navigate(`/d4/p/${id}`)} className="w-4 h-4 text-gray-700" />
                        </div>
                        <button onClick={() => navigate('/d4/cart')} className="bg-orange-500 cursor-pointer hover:bg-orange-600 p-2 rounded-full transition-colors shadow-lg">
                            <ShoppingCart className="w-4 h-4 text-white" />
                        </button>
                    </div>
                </div>
            </div >

            {/* Product Info */}
            < div className="pt-2 " >
                <h3 className="truncate sm:text-base text-sm font-semibold text-gray-800 mb-1 pl-2 leading-none line-clamp-2">
                    {title}
                </h3>

                {/* Rating */}
                <div className="flex items-center sm:gap-2 pl-2 mb-1">
                    <div className="sm:flex hidden items-center gap-1">
                        {renderStars(product?.rating.rate)}
                    </div>
                    <Star className="text-yellow-500 fill-yellow-500  sm:hidden w-3 " />
                    <span className="text-sm px-1 sm:px-0 font-medium text-gray-700">
                        {rating.rate || "0.0"}
                    </span>

                    <span className="text-xs hidden md:block text-gray-500">
                        ({rating.count} reviews)
                    </span>
                </div>
                {/* Price */}
                <div className="sm:flex hidden items-center gap-2 sm:mb-4 mb-2">
                    <span className="sm:text-xl text-base px-2 whitespace-nowrap font-semibold text-gray-800">
                        ₹{price.toFixed(2)}
                    </span>
                    <span className="text-sm hidden md:block text-gray-500 line-through">
                        ₹{Math.max(price + (price / (discount || 1))).toFixed(2)}
                    </span>
                </div>
                <AnimatedCard setCarts={setCarts} product={product} />
            </div >

        </div >
    )
}

export default Card