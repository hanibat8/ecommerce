import React,{ useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box'

const Sidebar = () => {

  const options=[{name:'Silk Plants'},
    {name:'Silk Flowers'},
    {name:'Silk Trees'},
    {name:'Topiaries'}]

  const [type,setType]=useState([])

  const [height,setHeight]=useState([])

  const [style,setStyle]=useState([])

  const handleChange=(arr,itemSelected)=>{
    let newArr=[...arr];

    if(!newArr.includes(itemSelected))
      newArr.push(itemSelected)
    else
      newArr=newArr.filter((item)=>item!=itemSelected)

    return newArr
  }

  const handleChangeType=(e)=>{
    let arr=handleChange(type,e.target.value)
    setType(arr)
  }

  const handleHeightType=(e)=>{
    let arr=handleChange(height,e.target.value)
    setHeight(arr)
  }

  const handleStyleType=(e)=>{
    let arr=handleChange(style,e.target.value)
    setStyle(arr)
  }

  console.log(type)
  
  return (
    <Box sx={{ flexBasis:'22%'}}>
      <div>
        <h4>Type</h4>
        <FormGroup>
          {options.map((option,index)=>{
            return <FormControlLabel key={index} control={<Checkbox
                                     value={option.name}
                                     onChange={handleChangeType}
                                     inputProps={{ 'aria-label': 'controlled' }}/>} 
                                     label={option.name} />
            })}  
        </FormGroup>
      </div>
      <div>
        <h4>Height</h4>
        <FormGroup>
          {options.map((option,index)=>{
            return <FormControlLabel key={index} control={<Checkbox
              value={option.name}
              onChange={handleHeightType}
              inputProps={{ 'aria-label': 'controlled' }}
            />} 
            label={option.name} />
          })}
        </FormGroup>
        
      </div>
      <div>
        <h4>Style</h4>
        <FormGroup>
        {options.map((option,index)=>{
          return <FormControlLabel key={index} control={<Checkbox
            value={option.name}
            onChange={handleStyleType}
            inputProps={{'aria-label': 'controlled' }}
          />} 
          label={option.name} />
        })}
        </FormGroup>
       
      </div>
    </Box>
  )
}

export default Sidebar