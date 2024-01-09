import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link as RouterLink} from "react-router-dom";
import {styled} from "@mui/system";
import Button from '@mui/material/Button';

const NavbarListItemsContainer=styled(Box)(({ displayStyle, textColor }) =>({
    display: displayStyle === 'flex' ? 'flex' : 'block',
    color: textColor,
}));

const NavbarButton=styled(Button)(({ textColor }) =>({
    margin:'0',
    padding:'0',
    color: textColor,
    display:'flex',
    minWidth:'fit-content'
}));

const StyledLink = styled(RouterLink)(({ textColor }) =>({
    color: textColor,
}));

const StyledItems= styled(Typography)(({ displayStyle }) =>({
    fontWeight:'600', 
    marginLeft:'auto', 
    marginRight:displayStyle==='flex' ? '1rem': '0px',
    textTransform:'capitalize'
}));   

const NavbarListItems = ({displayStyle, textColor}) => {
  return (
    <NavbarListItemsContainer displayStyle={displayStyle} textColor={textColor}>  
        <StyledItems variant='body1' component='body1'>
            <StyledLink textColor={textColor}>Login</StyledLink> /
            <StyledLink textColor={textColor}> Sign Up</StyledLink>
        </StyledItems>
        <NavbarButton textColor={textColor}>
            <FavoriteBorderIcon/>
            {displayStyle==='block' && <StyledItems> Favorites</StyledItems>}
        </NavbarButton>
        <NavbarButton textColor={textColor}>
            <ShoppingCartCheckoutIcon/>
            {displayStyle==='block' && <StyledItems> Cart</StyledItems>}
        </NavbarButton>
    </NavbarListItemsContainer>
  )
}

export default NavbarListItems