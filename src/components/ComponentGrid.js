import React,{useState} from 'react'
import Grid from '@mui/material/Grid'
import {styled} from "@mui/system";

const srcImg=['/plant1.jpg',
              '/plant2.jpg',
              '/plant3.jpg',
              '/plant4.jpg',
              '/plant5.jpg',
              '/plant6.jpg',
              '/plant7.jpg',
              '/plant8.jpg',
              '/plant9.jpg',
              '/plant10.jpg',
              '/plant11.jpg',
              '/plant12.jpg',
              '/plant13.jpg',
              '/plant14.jpg',
              '/plant15.jpg',
              '/plant16.jpg',
              '/plant17.jpg',
              '/plant18.jpg',
              '/plant19.jpg',
              '/plant20.jpg',
              '/plant21.jpg']

const itemsPerPage=8;

const Footer=styled('div',{})({
  display:'flex',
  marginTop:'4rem'
})

const ContainerGrid=styled('div',{})({
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  flexBasis:'80%'
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

const ComponentGrid = () => {
  const [currentPage,setCurrentPage]=useState(1)
  const [paginatedArray,setPaginatedArray]=useState(()=>srcImg.slice(
    (currentPage-1)*itemsPerPage,currentPage*itemsPerPage));
  const [noOfPages,setNoOfPages]=useState(()=>Math.ceil(srcImg.length/itemsPerPage))

  const onPageChange=(page)=>{
    setCurrentPage(page);
    filterArray(page)
  }

  const filterArray=(page)=>{
    let arr=srcImg.slice(
      (page-1)*itemsPerPage,page*itemsPerPage);
      setPaginatedArray(arr)
  }

  const createButtons=()=>{
    let elements = [];
    for(let i=1; i <= noOfPages; i++){
        elements.push(<ButtonStyled onClick={()=>onPageChange(i)} key={i}>{i}</ButtonStyled>);
    }
    return elements;
  }

  return (
    <ContainerGrid>
      <Grid container spacing={2}>
          {paginatedArray.map((src,index)=>{
              return <Grid xs={3} sx={{height:'16rem'}} item key={index}>
                  <img style={{width:'100%',height:'100%'}} src={src}/>
              </Grid>
          })}  
      </Grid>
      <Footer>
        {createButtons()}         
      </Footer>
    </ContainerGrid>
  )
}

export default ComponentGrid