
import React from "react";
import { useState, useEffect } from "react";
import { API_URL } from "./global-constants";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import LogoutIcon from '@mui/icons-material/Logout';


export default function AdminPage() {
  const history= useHistory();
  const [quantity, setQuantity]=useState("")
  // console.log(quantity);
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    fetch(`${API_URL}/adminPage`, {
      method: "GET",
      headers: {
        "content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token")
      }})
        .then((data) => data.json())
        .then((data) => {
          setProducts(data.message);
        })
          //  console.log(products)
  };
  const updateChanges=(index)=>{
    const data={
      quantity:quantity,
      data:products[index]
      }
      console.log(data)
    fetch(`${API_URL}/adminPage`,{
      method:"PUT",
      headers:{
      "content-Type":"application/json",
      "x-auth-token":localStorage.getItem("token")
      },
      body:JSON.stringify(data)
    })
    .then(data=>data.json())
    .then((data)=>{
       alert(data.message);
      setProducts(data.products)
      getProducts();
    })
  }
  const removeProduct=(index)=>{
   const data=products[index];
   const bodyData={
    data:data
   }
   fetch(`${API_URL}/adminPage`,{
    method:'DELETE',
    headers:{
      "content-Type":"application/json",
      "x-auth-token":localStorage.getItem("token")
    },
    body:JSON.stringify(bodyData)
   })
   .then(data=>data.json())
   .then(data=>{
     alert(data.message);
     setProducts(data.products)
      getProducts();
   })
  }
  const logOut=()=>{
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    history.push("/");
  }
  useEffect(() => getProducts(), []);
  return (
    <div className="container-full">
      <div className="row">
        <div></div>
        <h3>Admin Page</h3>
      </div>
      <Button onClick={()=>logOut()} variant="outlined" startIcon={<LogoutIcon />} style={{
        position:"absolute",
        right:"15px"
      }} >
        </Button>
      <div className="row">
        <div className="offset-sm-5 col-sm-2">
        <Button onClick={()=>history.push("/adminPage/addProducts")} variant="outlined"><AddIcon/>Add Products</Button>
        </div>
        
      </div>
      {
        products.map((data, index)=>{
          return(
      <div className="row" style={{
          margin:"20px 0px 20px 0px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          padding:"20px 0px 20px 0px"
      }}>
      <div className="offset-sm-1 col-sm-2">
      <img
                    width="150"
                    height="150"
                    src={data.imageURL}
                    alt="shirt_image"
                  />
      </div>
      <div className="offset-sm-1 col-sm-2" style={{
        paddingTop:"30px"
      }}>
        <h3>{data.name}</h3>
        <h5>Price - {data.price} INR</h5>
      </div>
      <div className="offset-sm-1 col-sm-2" style={{paddingTop:"8px"}}> 
      <h3>Quantity -</h3>
      <input onChange={(event)=>setQuantity(event.target.value)} type="number" id="quantity" name="quantity" min="0" max="15" placeholder={data.quantity}/>
      <br/>
      <Button onClick={()=>updateChanges(index)} style={{marginTop:"10px"}} variant="outlined"><UpgradeIcon/>Update Changes</Button>
      </div>
      <div className="offset-sm-1 col-sm-2" style={{paddingTop:"35px"}}>
      <Button onClick={()=>removeProduct(index)} variant="outlined" style={{color:"black"}} startIcon={<DeleteIcon />}>
        Remove
      </Button>
      </div>
      </div>
)})}
    </div>
  );
}
