import React from 'react';
import {Card, CardContent, Typography, Box} from '@mui/material';


const ProductsList = ({product})=>{
    
    return(
        <Box >

            `<Card >
                <CardContent  alignItems='center' justifyContent="center">
                    <Box >
                        <img src={product.image} height={100}
                        width={100}/>
                    </Box>
                    <Typography mt={2}>
                        {product.title}
                    </Typography>
                    <Box mt={2}>
                        <Typography >
                            <b>{`$ ${product.price}`}</b>
                        </Typography>
                        <Typography mt={2}>
                            {product.category}
                        </Typography>
                    </Box>


                </CardContent>
            </Card>
        </Box>

    )
}

export default ProductsList;