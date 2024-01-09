import React,{useRef} from 'react';
import CardComponent from './CardComponent';
import LeftArrowIcon from './LeftArrowIcon';
import RightArrowIcon from './RightArrowIcon';
import Box from '@mui/material/Box'

import {styled} from "@mui/system";

const StyledCardContainer=styled('div',{})({
    display:'flex',
    gap:'1rem',
    overflow:'hidden',
    maxWidth:'100%',
    scrollBehavior: 'smooth'
})

const StyledCarousalContentContainer=styled('div',{})({
  display:'flex',
  alignItems:'center',
  scrollBehavior:'smooth'
})

const Carousal = () => {
  let categories=[
    { name:'Furniture',
      imgSrc:'/furniture.jpg'},
    { name:'New Arrivals',
      imgSrc:'/christmas-Decor.jpg'},
    { name:'Home Decor',
      imgSrc:'/home-decor.jpg'},
    { name:'Bookcase',
      imgSrc:'/bookcase.avif'},
    { name:'Test1',
      imgSrc:'/furniture.jpg'},
    { name:'Test2',
      imgSrc:'/furniture.jpg'},
    { name:'Test3',
      imgSrc:'/furniture.jpg'}
    ]
  const sliderContainer=useRef(null);

  const onLeftBtnClickHandler=()=>{
  sliderContainer.current.scrollLeft=sliderContainer.current.scrollLeft- 200;
}
  
  const onRightBtnClickHandler=()=>{
    sliderContainer.current.scrollLeft=sliderContainer.current.scrollLeft+ 200;
  }

  return (
    <Box sx={{width:'100%'}}>
        <StyledCarousalContentContainer>
          <div onClick={onLeftBtnClickHandler}>
           <LeftArrowIcon/>
          </div>
            <StyledCardContainer ref={sliderContainer}>
                {categories.map((category)=>{
                  return <CardComponent key={category.name} srcProp={category.imgSrc} name={category.name}/>
                })}
                
            </StyledCardContainer>
            <div onClick={onRightBtnClickHandler}>
              <RightArrowIcon/>
            </div>
        </StyledCarousalContentContainer>
    </Box>
  )
}

export default Carousal