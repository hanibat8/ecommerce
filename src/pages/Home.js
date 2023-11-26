import React from "react";
import Container from '@mui/material/Container';
import ShopByCategory from "../components/ShopByCategory";
import {styled} from "@mui/system";

const HeaderImg=styled('img',{})({
    height:'100%',
    width:'100%'
})

const Home=()=>{
    return(
        <Container maxWidth='xl'>
            <HeaderImg alt='' src='/Hayneedle img.jpg'/>
            <ShopByCategory/>
        </Container>
    )
}

export default Home;