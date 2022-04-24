import { Button, Grid, Box } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductsList from './ProductsList';
import { Link } from 'react-router-dom';
import ProductListTwo from './PrductListTwo';


const Home = (home)=>{
    const [product , setProduct]= useState([]);
    

    // const FetchProduct = ()=>{
    //     axios.get("https://fakestoreapi.com/products")
    //     .then((e)=>{
    //         setProduct(e.data)
            
    //     })
    // }

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products") 
        .then((e)=>{
            setProduct(e.data)
            
        })
    },[])

    

    // const filter = ((category)=>{
    //     const filterProducts = product.filter((curProd)=>{
    //         return curProd.category === category;          
            
    //     })
    //     setProduct (filterProducts)
    // })
   
    return(
        <>
            
            
            <Grid container spacing={2} sx={{ paddingRight:2, marginRight:1}} > 
                {
                    product.map((product)=>{
                        return(
                            
                                <Grid item xs={12} sm={6} md={3}  lg={3} xl={2} 
                                    key={product.id}  sx={{marginBottom:2}}
                                        >

                                    <ProductListTwo product={product}  />
                                </Grid>
                               
                            

                        )
                    })
                }
                
                
            </Grid>
        </>
    )
}

export default Home;