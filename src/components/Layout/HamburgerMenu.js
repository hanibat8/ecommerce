import React from 'react'
import Box from '@mui/material/Box'
import NavbarListItems from './NavbarListItems';
import NavbarTabs from './NavbarTabs';

const HamburgerMenu = ({isOpen}) => {
  return (
    (isOpen && <Box sx={{display:['flex','flex','none'], flexDirection:'column', alignItems:'center'}}>
      <NavbarTabs displayStyle='block' textColor='black'/>
      <NavbarListItems displayStyle='block' textColor='black'/>
      </Box>)
  )
}

export default HamburgerMenu