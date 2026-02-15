import React, { createContext, useState } from 'react'
import ProductPage from './ProductPage'
import axios from 'axios'

export const ProductContext = createContext()

const Context = () => {

    const getProducts = async () => {
        try {
            let res = await axios.get("https://fakestoreapi.com/products")
            return res.data
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <ProductContext.Provider value={{getProducts}}>
            <ProductPage />
        </ProductContext.Provider>
    )
}

export default Context