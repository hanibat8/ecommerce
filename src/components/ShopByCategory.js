import React from "react";
import Typography from '@mui/material/Typography';

import {styled} from "@mui/system";
import Carousal from "./Carousal";

const StyledHeading=styled(Typography,{})({
    fontSize:'2.8rem',
    fontWeight:'200',
    borderBottom: '1px solid #000',
    lineHeight:'0.1rem',
    margin: '10px 0 20px',
    width: '100%', 
    textAlign: 'center', 

})

const StyledSubHeading=styled(Typography,{})({
    fontSize:'1.8rem',
     fontWeight:'400', 
    textAlign: 'center', 
    margin: '2.5rem 0'

})

const ShopByCategory=()=>{
    return(
        <section style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <StyledHeading variant="body" component="h3">
                <span style={{backgroundColor:'#fff',padding:'0 10px' }}>Everything You Need in One Place</span> 
            </StyledHeading>
            <StyledSubHeading variant="body" component="h4">Shop By Category</StyledSubHeading>
            <Carousal/>
        </section>
    )
}

export default ShopByCategory;