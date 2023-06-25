import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from "react-router-dom";
import {styled} from "@mui/system";

const StyledNav=styled(Box,{})({
    height:100,
    backgroundColor:'#598391',
    padding:'1rem',
    paddingLeft:'3rem',
    paddingRight:'3rem',
    color:'#fff'
})

const StyledHeader=styled(Box,{})({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
})

const StyledTextField=styled(TextField,{})({
   
    width:'60%',
    '& .MuiInputBase-input':{
        backgroundColor:'#fff',
    }
})

const StyledListItem=styled(Typography,{})({
    textTransform:'uppercase',
    fontWeight:'600'
})

const Navbar=()=>{
    return(
        <StyledNav >
            <StyledHeader>
                <Typography variant="h3" component="h1">
                    Hayneedle
                </Typography>
                <StyledTextField
                    size="small"
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <Typography sx={{fontWeight:'600'}} variant='body1' component='body1'>
                    <Link>Login</Link> /
                    <Link> Sign Up</Link>
                </Typography>
                <FavoriteBorderIcon />
                <ShoppingCartCheckoutIcon />
            </StyledHeader>
            <Box sx={{marginTop:'20px', display:'flex',justifyContent:'space-around'}}>
                
                <StyledListItem variant='body2' component='body2'>
                    Furniture
                </StyledListItem>       
                
                <StyledListItem variant='body2' component='body2'>
                    Outdoor
                </StyledListItem>    
                
                <StyledListItem variant='body2' component='body2'>
                    Home Decor
                </StyledListItem>   
                
                <StyledListItem variant='body2' component='body2'>
                    New arrivals
                </StyledListItem>
            </Box>
        </StyledNav>
      
    )
}

export default Navbar;