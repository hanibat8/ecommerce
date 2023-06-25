import React from 'react';
import { Card } from '@mui/material';
import {styled} from "@mui/system";
import { Link } from 'react-router-dom';

const CardImage=styled('img',{})({
  width:'100%',
  height:'100%',objectFit:'cover'

})

const CardTitle=styled('p',{})({
  padding:'.4rem',
  border:'none',
  width:'55%',
  borderRadius:'.2rem',
  position:'absolute',
  marginLeft: 'auto',
  marginRight: 'auto',
  left: '0',
  right: '0',
  bottom:'2%',
  background:'rgba(255, 255, 255, 0.8)',
  fontSize:'1.3rem',
  fontWeight:'600',
  textAlign:'center',
  color:'#000'
})

// const CardTitleContainer=styled('div',{})({
//  display:'flex',
//  justifyContent:'center'
// })

const CardComponent = ({srcProp,name}) => {
  return (
    <Card sx={{minWidth:'300px', position:'relative',height:'200px'}} variant="outlined">
        <Link to={`/category/${name}`}>
          <CardImage src={srcProp} />
          <CardTitle>{name}</CardTitle>
        </Link>
    </Card>
  )
}

export default CardComponent