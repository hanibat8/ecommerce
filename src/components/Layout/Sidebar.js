import React, {useEffect, useState} from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box'
import {category_types,products_types,price} from '../../utils/constants'
import {styled} from "@mui/system";
import { useDispatch } from 'react-redux';
import {selectCategoryAndProducts} from '../categorySlice'

const ProductsContainer=styled('div',{})({
  marginLeft:'1.5rem'
})

const Sidebar = () => {
  const [categoryType,setCategoryType]=useState([])

  const [priceRange,setPriceRange]=useState([])

  const [productsPanelToShow,setProductsPanelToShow]=useState([]);

  const [productType,setProductType]=useState([])

  const dispatch = useDispatch()

  console.log(categoryType,productType)

  const handleChange=(arr,itemSelected)=>{
    let newArr=[...arr];

    if(!newArr.includes(itemSelected))
      newArr.push(itemSelected)
    else
      newArr=newArr.filter((item)=>item!=itemSelected)

    return newArr
  }

  const handleChangeCategoryType=(e)=>{
    let arr=handleChange(categoryType,e.target.value)
    setCategoryType(arr);
    dispatch(selectCategoryAndProducts({categories:arr,products:productType}))
  }

  const handleChangeProductType=(e)=>{
    let arr=handleChange(productType,e.target.value)
    setProductType(arr);
    dispatch(selectCategoryAndProducts({categories:categoryType,products:arr}))
  }

  const handlePriceType=(e)=>{
    let arr=handleChange(priceRange,e.target.value)
    setPriceRange(arr)
  }

  const filterProductTypesOnCategoryChange=()=>{
    let arr=[...productsPanelToShow]; 
    category_types.forEach((category)=>{
      if(categoryType.includes(category)){
        if(!arr.includes(products_types[category][0]))
          arr.push(...products_types[category])
      }
      else{
        if(arr.includes(products_types[category][0])){
          arr=arr.filter((item)=>!products_types[category].includes(item))
        }
      }
    })
  
    setProductsPanelToShow([...arr])
  }

  useEffect(()=>{
    filterProductTypesOnCategoryChange()
  },[categoryType])
  
  return (
    <Box sx={{ flexBasis:'22%'}}>
      <div>
        <h4>Category Type</h4>
        <FormGroup>
          {category_types.map((category,index)=>{
            return <FormControlLabel key={index} 
              control={<Checkbox
              value={category}
              onChange={handleChangeCategoryType}
              inputProps={{ 'aria-label': 'controlled' }}/>} 
              label={category} />
            })}  
        </FormGroup>
      </div>
      {productsPanelToShow.length>0 && <ProductsContainer>
        <h4>Product Type</h4>
        <FormGroup>
          {productsPanelToShow.map((productTypes,index)=>{
            return <FormControlLabel key={index} 
              control={<Checkbox
              value={productTypes}
              onChange={handleChangeProductType}
              inputProps={{ 'aria-label': 'controlled' }}/>} 
              label={productTypes} />
            })}  
        </FormGroup>
      </ProductsContainer>}
      <div>
        <h4>Price</h4>
        <FormGroup>
          {price.map((price,index)=>{
            return <FormControlLabel key={index} 
              control={<Checkbox
              value={price}
              onChange={handlePriceType}
              inputProps={{ 'aria-label': 'controlled' }}
            />} 
            label={price} />
          })}
        </FormGroup>
      </div>
    </Box>
  )
}

export default Sidebar