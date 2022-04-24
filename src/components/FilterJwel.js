import React, { useState, useEffect } from 'react'
import ProductsList from './ProductsList';
import axios from 'axios';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

const FilterJwel =()=>{

    const [product , setProduct]= useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products") 
        .then((e)=>{
            setProduct(e.data)
            
        })
    },[])
    

    const jewelery = product.filter((product)=>{
        if(product.category === 'jewelery'){
            return {jewelery} 
        }
           
            else return 0;
    })
    // console.log(product)
    // console.log(jewelery)

    // console.log()
    return(
        <> 
            <Grid container spacing={2}>
                {
                    jewelery.map((jewelery)=>{
                        return(
                            <Grid item s={12} sm={6} md={3}  lg={3} xl={2} 
                            key={product.id} height={400} width={400}>

                                <ProductsList product={jewelery}/>

                            </Grid>
                        )
                    })
                }
            </Grid>
            
        </>
    )
}

export default FilterJwel;