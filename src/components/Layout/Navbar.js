import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

import {styled} from "@mui/system";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import NavbarListItems from './NavbarListItems';
import NavbarTabs from './NavbarTabs';

const StyledNav=styled(Box,{})({
    height:100,
    backgroundColor:'#598391',

   
    color:'#fff',
    width:'100%',
    overflowX:'hidden'
})

const StyledHeader=styled(Box,{})({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%'
})


const NavbarButton=styled(Button,{})({
    margin:'0',
    padding:'0',
    color:'white',
    display:'block',
    minWidth:'fit-content'
})

const NavbarListItemsWrapper=styled(Box,{})({
    display:'none',
    '@media (min-width: 900px)': {
        display: 'block',
      },
})

const Navbar=({onHandleOpenHamburgerMenu})=>{
    return(
        <StyledNav >
            <Container>
                <StyledHeader>
                    <Link to='/'>
                        <Typography  variant="h3" component="h1">
                            Hayneedle
                        </Typography>
                    </Link>
                    <NavbarListItemsWrapper >
                        <NavbarListItems displayStyle='flex' textColor='white'/>
                    </NavbarListItemsWrapper>
                                                            
                    <NavbarButton sx={{display:['block','block','none']}} onClick={onHandleOpenHamburgerMenu}>
                        <MenuIcon/>
                    </NavbarButton>
                </StyledHeader>
                <NavbarListItemsWrapper>
                    <NavbarTabs displayStyle='flex' textColor='white'/>
                </NavbarListItemsWrapper>
            
            </Container>
        </StyledNav>
      
    )
}

export default Navbar;