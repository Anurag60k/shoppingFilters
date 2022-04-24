import React from 'react';
import {Card, CardContent, Typography, Box} from '@mui/material';


const ProductsList = ({product})=>{
    
    return(
        <Box>

            <Card>
                <CardContent>
                    <Box>
                        <img src={product.image} height='100rem'
                        width='100rem'/>
                    </Box>
                    <Typography mt='1rem'  fontWeight={600}  mb='3rem'   >
                        {product.title}
                    </Typography>
                    <Box>
                        <Typography >
                            <b>{`$ ${product.price}`}</b>
                        </Typography>
                        <Typography >
                            {product.category}
                        </Typography>
                    </Box>


                </CardContent>
            </Card>
        </Box>

    )
}

export default ProductsList;