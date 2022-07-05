import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { API_URL } from './global-constants';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



export default function AddProducts() {
  const history=useHistory();
const [ name, setName]= useState("");
const [ imageUrl, setImageUrl]= useState("");
const [ price, setPrice]= useState("");
const [ currency, setCurrency]= useState("");
const [ color, setColor]= useState("");
const [ gender, setGender]= useState("");
const [ quantity, setQuantity]= useState("");


  const handleSubmit=(event)=>{
   const data={
    imageURL: imageUrl,
    name: name,
    price: price,
    currency: currency,
    color: color,
    gender: gender,
    quantity: quantity
   }
   event.preventDefault();
   fetch(`${API_URL}/adminPage`,{
    method:"POST",
    headers:{
      "content-Type":"application/json",
      "x-auth-token":localStorage.getItem("token")
    },
    body:JSON.stringify(data)
   })
   .then(data=>data.json())
   .then(data=>{
     alert(data.message);
     event.target.reset();
   })
  }
  return (
    <div>
      <h3 style={{margin:"30px"}}>Add Products</h3>
      <form onSubmit={handleSubmit}>
      <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        margin:"auto",
      }}
    >
      <TextField required onChange={(event)=>setName(event.target.value)} fullWidth label="Name" id="fullWidth" type="text" style={{marginBottom:"10px"}}/>
      <TextField required onChange={(event)=>setImageUrl(event.target.value)} fullWidth label="Image URL" id="fullWidth" type="text" style={{marginBottom:"10px"}}  />
      <TextField required onChange={(event)=>setPrice(event.target.value)} fullWidth label="Price" id="fullWidth" type="number" style={{marginBottom:"10px"}} />
      <TextField required onChange={(event)=>setCurrency(event.target.value)} fullWidth label="Currency" id="fullWidth" type="text" style={{marginBottom:"10px"}} />
      <TextField required onChange={(event)=>setColor(event.target.value)} fullWidth label="Color" id="fullWidth"  type="text" style={{marginBottom:"10px"}} />
      <TextField required onChange={(event)=>setGender(event.target.value)} fullWidth label="Gender" id="fullWidth" type="text" style={{marginBottom:"10px"}} />
      <TextField required onChange={(event)=>setQuantity(event.target.value)} fullWidth label="Quantity" id="fullWidth" type="number" style={{marginBottom:"10px"}} />
    </Box>
    <Button onClick={()=>history.goBack()} variant="outlined" startIcon={<ArrowBackIosIcon />}>
     Back
     </Button>
    <Button style={{marginLeft:"20px"}} type='submit' variant="outlined">submit</Button>
  
    </form>
    </div>
  )
}
