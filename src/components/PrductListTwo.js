import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';


const ProductListTwo = ({product})=>{
    return(
        <Container>
            <Box sx={{ display:'flex', flexDirection:'column',  
                    height:'300px', width:'300px', boxShadow: '2px 2px  2px grey', paddingBottom:2,
                    borderRadius:2
                      }}>
                <Box mb={4} mt={1} sx={{display:'flex' , flexDirection:'column', alignItems:'center',
                 alignContent:'center'}}>
                    <img src={product.image} alt='product-Image'
                    height='100rem'
                    width='100rem'/>
                </Box>
                <Box sx={{paddingLeft:'1rem'}}>
                    <Typography paragraph={true} mb={1}>
                       <b> {product.title}</b>
                    </Typography>
                    <Typography mb={1}>
                        {`$ ${product.price}`}
                    </Typography>
                    <Typography mb={0} pb={0}>
                        {product.category}
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default ProductListTwo;