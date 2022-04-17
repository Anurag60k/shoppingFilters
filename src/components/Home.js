import { Button, Grid, Box } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductsList from './ProductsList';
import { Link } from 'react-router-dom';


const Home = ()=>{
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

    

    const filter = ((product)=>{
        const filterProducts = product.filter(()=>{
            if(product.category == 'jewelery'){
                return product
            }
            else
                return 0;
            
        })

    })
   
    return(
        <>
            
            
            <Grid container spacing={2} > 
                {
                    product.map((product)=>{
                        return(
                            
                                <Grid item xs={12} sm={6} md={3}  lg={3} xl={2} 
                                    key={product.id} height={400} width={400} 
                                        >

                                    <ProductsList product={product} />
                                </Grid>
                               
                            

                        )
                    })
                }
                
                
            </Grid>
        </>
    )
}

export default Home;