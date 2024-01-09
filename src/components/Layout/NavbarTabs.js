import React from 'react'
import { Link as RouterLink } from "react-router-dom";
import Box from '@mui/material/Box'
import {styled} from "@mui/system";
import { Typography } from '@mui/material';

const NavbarTabsContainer=styled(Box)(({ displayStyle, textColor }) =>({
  display: displayStyle === 'flex' ? 'flex' : 'block',
  color: textColor,
  marginTop: displayStyle === 'flex' ? '20px' :'0px',
  justifyContent:'space-around'
}));

const StyledLink = styled(RouterLink)(({ textColor }) =>({
  textTransform:'uppercase',
  fontWeight:'600',
  cursor:'pointer',
  color: textColor,
}));


const NavbarTabs = ({displayStyle, textColor}) => {
  console.log(displayStyle, textColor)
  return (
    <NavbarTabsContainer displayStyle={displayStyle} textColor={textColor}>
      <Typography >
        <StyledLink variant='body2' component='body2' textColor={textColor}>
            Furniture
        </StyledLink>   
      </Typography>        
      <Typography>
        <StyledLink variant='body2' component='body2' textColor={textColor}>
          Outdoor
      </StyledLink>
      </Typography>    
      <Typography>
        <StyledLink variant='body2' component='body2' textColor={textColor}>
          Home Decor
      </StyledLink>  
      </Typography> 
      <Typography>
        <StyledLink variant='body2' component='body2' textColor={textColor}>
          New arrivals
      </StyledLink>
      </Typography>
  </NavbarTabsContainer>
  )
}

export default NavbarTabs