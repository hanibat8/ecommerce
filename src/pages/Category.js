import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {dataService} from '../services/dataService'
import Container from '@mui/material/Container';
import Sidebar from '../components/Layout/Sidebar'
import ComponentGrid from '../components/ComponentGrid';

const Category = () => {
  let {categoryType}=useParams()

  console.log(categoryType)
  categoryType= categoryType==='Furniture' &&'products';
  useEffect(()=>{
    if(categoryType){
      let data=dataService.get(categoryType)
      console.log(data)
    }
  },[categoryType])

  return (
    <Container sx={{display:'flex'}} maxWidth='xl'>
      <Sidebar/>
      <ComponentGrid/>
    </Container>
  )
}

export default Category