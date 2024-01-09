import React, {useEffect, useState} from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box'
import {category_types,products_types,price} from '../../utils/constants'
import {styled} from "@mui/system";
import { useDispatch } from 'react-redux';
import {filterOnCategoryAndProduct,filterOnPrice} from '../categorySlice'

const ProductsContainer=styled('div',{})({
  marginLeft:'1.5rem'
})

const Sidebar = () => {
  const [categoryType,setCategoryType]=useState([])

  const [priceRange,setPriceRange]=useState([])

  const [productsPanelToShow,setProductsPanelToShow]=useState([]);

  const [productType,setProductType]=useState([])

  const dispatch = useDispatch()

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
    
    //Here if we have deselected a catefory then the length of the new arr will be less than the prev one we will filter the selectedProductTypes
    if(arr.length<categoryType.length){
      let productTypeState=[...productType]
      productTypeState=productTypeState.filter((product)=>!products_types[e.target.value].includes(product))
      setProductType(productTypeState)
    }

    setCategoryType(arr);
    dispatch(filterOnCategoryAndProduct({categories:arr,newCategory:e.target.value,products:productType,prices:priceRange}))
  }

  const handleChangeProductType=(e)=>{
    let arr=handleChange(productType,e.target.value)
    setProductType(arr);
    dispatch(filterOnCategoryAndProduct({categories:categoryType,products:arr,newProduct:e.target.value,prices:priceRange}))
  }

  const handlePriceArr=(priceSelected)=>{
    let priceRangePrev=[...priceRange];

    if(priceRangePrev.includes(priceSelected))
      priceRangePrev=priceRangePrev.filter((price)=>price!=priceSelected)
    else
      priceRangePrev.push(priceSelected)
    // let [minRange,maxRange]=priceSelected.split('-');

    // minRange = minRange.includes('+') ? +minRange.split('+')[0] : +minRange;
    // maxRange = maxRange === undefined ? Infinity : +maxRange;

    // if(priceRangePrev.includes(minRange) && priceRangePrev.includes(maxRange)){
    //   priceRangePrev=priceRangePrev.filter((price)=>price!=minRange)
    //   if(maxRange===Infinity)
    //     priceRangePrev=priceRangePrev.filter((price)=>price!=maxRange)
    //   return priceRangePrev
    // }
   
    // [minRange,maxRange].forEach(range => {
    //   if (range !== undefined && range !== null && !priceRangePrev.includes(range)) {
    //     priceRangePrev.push(range);
    //   }

    // });

    // priceRangePrev=priceRangePrev.sort((a,b)=>a-b)
    return priceRangePrev
  }

  const handlePriceType=(e)=>{
    let arr=handlePriceArr(e.target.value)

    setPriceRange(arr)
    dispatch(filterOnCategoryAndProduct({categories:categoryType,products:productType,prices:arr}))
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
    <Box sx={{ flexBasis:['60%','40%','22%']}}>
      <div>
        <h4>Category Type</h4>
        <FormGroup>
          {category_types.map(category=>{
            return <FormControlLabel key={category} 
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
          {productsPanelToShow.map(productTypes=>{
            return <FormControlLabel key={productTypes} 
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
          {price.map(price=>{
            return <FormControlLabel key={price} 
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