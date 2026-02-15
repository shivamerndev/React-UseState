import { useContext, useEffect, useState } from "react"
import Card from "./Card"
import { ProductContext } from "./Context"
import Loader from "../../utils/Loader"
import Nav from "./Nav"

const ProductPage = () => {

    const { getProducts } = useContext(ProductContext)
    let lsp = JSON.parse(localStorage.getItem("products"))
    const [carts, setCarts] = useState(JSON.parse(localStorage.getItem("carts")) || [])
    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem("wish")) || [])
    const [products, setProducts] = useState(lsp || null)
    let categories = [...new Set(lsp?.map(p => p.category))]
    const [search, setSearch] = useState("")

    useEffect(() => {
        if (products) {
            console.log("Don't Fetch..")
            return
        } else {
            alert("Fetching Data...")
            getProducts().then(res => {
                if (res) {
                    localStorage.setItem("products", JSON.stringify(res))
                    setProducts(res)
                }
            }).catch(err => alert(err))
        }
    }, [])

    useEffect(() => {
        if (lsp) {
            let newArr = lsp.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
            setProducts(newArr)
        }
    }, [search])

    document.title = " Shivam's Store"

    return (products ?
        <>
            <h1 className="h-screen block md:hidden bg-black font-semibold text-white text-center content-center">Switch to Desktop For Best Experience. </h1>
            <div className="  hidden md:block text-white bg-gray-800 relative w-full h-screen overflow-hidden">

                <Nav carts={carts} setSearch={setSearch} wishlist={wishlist} />

                <main className="flex w-full relative h-[88vh] justify-between">
                    <aside className="bg-zinc-700 flex-1 space-y-4 py-4 px-4 text-center ">
                        <h1 className="bg-rose-700/90 uppercase font-semibold py-2 rounded-md mb-8">Category</h1>
                        {["All", ...categories].map(c => <h1 onClick={(e) => {
                            let newArr = lsp?.filter(p => {
                                if (c === "All") {
                                    return p
                                }
                                return (p.category === e.target.textContent)
                            })
                            setProducts(newArr)
                        }} key={c} className=" hover:bg-orange-500 hover:border-4 border-orange-300 transition-all duration-100 cursor-pointer font-semibold py-1 rounded-md ">{c}</h1>)}
                    </aside>
                    <div id="scrollbar" className="grid overflow-y-auto flex-5 grid-cols-4 px-6 gap-6 py-8">
                        {products.map(p => <Card setCarts={setCarts} setWishlist={setWishlist} wishlist={wishlist} key={p.id} discount={Math.floor(Math.random() * 50)} product={p} />)}
                    </div>
                </main>
            </div>

        </> :
        <Loader response={products} />
    )
}

export default ProductPage