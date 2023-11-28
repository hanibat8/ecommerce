import React,{useState, useEffect, useMemo} from 'react'
import { useSelector } from 'react-redux';
import {selectAllItems} from './categorySlice';
import Grid from '@mui/material/Grid'
import {styled} from "@mui/system";

const itemsPerPage=8;

const Footer=styled('div',{})({
  display:'flex',
  marginTop:'4rem'
})

const ContainerGrid=styled('div',{})({
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  flexBasis:'100%'
})

const ButtonStyled=styled('button',{})({
  marginRight:'1rem',
  width:'2rem',
  backgroundColor:'#598391',
  border:'none',
  cursor:'pointer',
  padding:'.4rem ',
  color:'#fff'
})

const HeadingsContainer=styled('div',{})({
  display:'flex',
  justifyContent:'space-between'
})

const ComponentGrid = () => {
  const items=useSelector(selectAllItems)

  const [currentPage,setCurrentPage]=useState(1)
  const [paginatedArray,setPaginatedArray]=useState(()=>items.categories.slice(
    (currentPage-1)*itemsPerPage,currentPage*itemsPerPage));
  const [noOfPages,setNoOfPages]=useState(()=>Math.ceil(items.categories.length/itemsPerPage))

  const onPageChange=(page)=>setCurrentPage(page);

  const filterArray=(page)=>{
    let arr=items.categories.slice(
      (page-1)*itemsPerPage,page*itemsPerPage);
      setPaginatedArray(arr)
      setNoOfPages(Math.ceil(items.categories.length/itemsPerPage))
  }

  const createButtons=useMemo(()=>{
    let elements = [];
    for(let i=1; i <= noOfPages; i++){
        elements.push(<ButtonStyled onClick={()=>onPageChange(i)} key={i}>{i}</ButtonStyled>);
    }
    return elements;
  },[noOfPages])

  useEffect(()=>{
    filterArray(currentPage)
  },[items,currentPage])

  return (
    <ContainerGrid>
      <Grid container spacing={2}>
          {paginatedArray.map((product,index)=>{
              return <Grid xs={3} sx={{height:'20rem'}} item key={index}>
                  <img style={{width:'100%',height:'80%'}} src={product.img_url}/>
                 <HeadingsContainer>
                  <h5>{product.category_type}</h5>
                  <h5>{product.product_type}</h5>
                  <h5>${product.price}</h5>
                 </HeadingsContainer>                
              </Grid>
          })}  
      </Grid>
      <Footer>
        {createButtons}         
      </Footer>
    </ContainerGrid>
  )
}

export default ComponentGrid