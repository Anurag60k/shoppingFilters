import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GetProductApi = (productApi)=>{

    const [product, setProduct] = useState([])

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((e)=>{
            setProduct(e.data)
        })
    },[])

    const FetchProduct = product.map(()=>{
        return (product)
    })
    return FetchProduct;
    // console.log(FetchProduct)
}
console.log(GetProductApi)

export default GetProductApi;