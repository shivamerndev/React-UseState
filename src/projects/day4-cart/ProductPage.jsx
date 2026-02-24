import { useContext, useEffect, useState } from "react"
import Card from "./Card"
import Loader from "../../utils/Loader"
import Nav from "./Nav"
import { ProductContext } from "./D4Context"

const ProductPage = () => {

    const { getProducts, setProducts, products, lsp, categories } = useContext(ProductContext)
    const [search, setSearch] = useState("")

    useEffect(() => {
        if (products) {
            console.log("Don't Fetch..")
            return
        } else {
            console.log("Fetching Data...")
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
            <div className="  hidden md:block text-gray-950 bg-gray-100 relative w-full h-screen overflow-hidden">

                <Nav setSearch={setSearch} />   

                <main className="flex w-full relative h-[88vh] justify-between">
                    <aside className="bg-gray-300/40  shadow-2xl flex-1 space-y-4 py-4 px-4 text-center ">
                        <h1 className="bg-rose-500/90 uppercase font-semibold py-2 rounded-md mb-8">Category</h1>
                        {["All", ...categories].map(c => <h1 onClick={(e) => {
                            let newArr = lsp?.filter(p => {
                                if (c === "All") return p;
                                return (p.category === c)
                            })
                            setProducts(newArr)
                        }} key={c} className=" hover:bg-gradient-to-tr hover:text-white to-amber-500/90 via-15% via-orange-500/90 from-rose-500/90 border-2 border-gray-400/50 transition-all duration-100 cursor-pointer font-semibold py-1 rounded-md ">{c}</h1>)}
                    </aside>
                    <div id="scrollbar" className="grid overflow-y-auto flex-5 grid-cols-4 px-6 gap-6 py-8">
                        {products.map(p => <Card key={p.id} discount={Math.floor(Math.random() * 50)} product={p} />)}
                    </div>
                </main>
            </div>

        </> :
        <Loader response={products} />
    )
}

export default ProductPage