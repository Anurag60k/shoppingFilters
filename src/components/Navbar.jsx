import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ()=>{

    return(
        <>
            <AppBar position="sticky" elevation={0} sx={{backgroundColor:'white'}}>
                <Toolbar >
                    <Typography color='black'>BrainyDX</Typography>

                    <Box>
                        <Button component={Link} to="/ ">
                            All
                        </Button>
                        <Button component={Link} to="/jwelery ">
                            Jwelary
                        </Button>
                        <Button component={Link} to="/clothing ">
                            Men's Clothings
                        </Button>
                        <Button component={Link} to="/womensClothing ">
                            women's Clothings
                        </Button>
                        <Button component={Link} to="/electronics">
                            electronics
                        </Button>
                        {/* component={Link} to="/ " */}
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;