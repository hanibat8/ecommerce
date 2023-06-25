import React from 'react'
import Container from '@mui/material/Container';
import Sidebar from '../components/Layout/Sidebar'
import ComponentGrid from '../components/ComponentGrid';

const Category = () => {
  return (
    <Container sx={{display:'flex'}} maxWidth='xl'>
      <Sidebar/>
      <ComponentGrid/>
    </Container>
  )
}

export default Category