import React from "react";
import Container from '@mui/material/Container';
import ShopByCategory from "../components/ShopByCategory";

const Home=()=>{
    return(
        <Container maxWidth='xl'>
            <img style={{height:'100%',width:'100%'}} alt='' src='/Hayneedle img.jpg'/>
            <ShopByCategory/>
        </Container>
    )
}

export default Home;