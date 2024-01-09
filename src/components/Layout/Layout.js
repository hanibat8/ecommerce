import React, { useState } from "react";
import Navbar from './Navbar';
import HamburgerMenu from './HamburgerMenu';

const Layout=()=>{
    const [openHamburgerMenu,setOpenHamburgerMenu]=useState(false);

    const handleOpenHamburgerMenu=()=>{
        setOpenHamburgerMenu(!openHamburgerMenu);
    }

    return(
        <>           
            <Navbar onHandleOpenHamburgerMenu={handleOpenHamburgerMenu}/> 
            <HamburgerMenu isOpen={openHamburgerMenu}/>
        </>
    )
}

export default Layout;