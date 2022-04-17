import React, { useState, useEffect } from 'react'
import ProductsList from './ProductsList';
import axios from 'axios';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

const FilterElectronic =()=>{

    const [product , setProduct]= useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products") 
        .then((e)=>{
            setProduct(e.data)
            
        })
    },[])
    

    const electrnics = product.filter((product)=>{
        if(product.category === `electronics`){
            return {electrnics}            
        }
        else return 0;
    })
    console.log(product)
    console.log(electrnics)

    // console.log()
    return(
        <> 
            <Grid container spacing={2}>
                {
                    electrnics.map((electrnics)=>{
                        return(
                            <Grid item s={12} sm={6} md={3}  lg={3} xl={2} 
                            key={product.id} height={400} width={400}>

                                <ProductsList product={electrnics}/>

                            </Grid>
                        )
                    })
                }
            </Grid>
            
        </>
    )
}

export default FilterElectronic;