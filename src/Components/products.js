
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API_URL } from "./global-constants";

export default function Products({getMyCartNo}) {
  // const history= useHistory();
  const [products, setProducts]=useState([]);
const getProducts=()=>{
  fetch(`${API_URL}/products`,{
    method:"GET",
    headers: {
      "content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token")
    }
  })
  .then(data=>data.json())
  .then(data=>{
    setProducts(data.message);
    // console.log(products)
  })
}

useEffect(()=>getMyCartNo,[])
const addToCart=(index)=>{
  const data=products[index];
  const bodyData={
    username:localStorage.getItem("currentUser"),
    data:data
  }
  // console.log(data, index);
  fetch(`${API_URL}/wishlist`,{
    method:"POST",
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
    getMyCartNo();
  })

}
useEffect(()=>getProducts,[])
  return (
   
    
 products.map((data, index)=>{
   return(
    <div
      style={{
        boxShadow:"rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
          width:"300px",
          marginTop:"20px",
          marginLeft:"20px",
          borderRadius:"20px",
          display:"inline-block",
          textAlign:"center"
      }}
    >
      <div style={{ padding: "15px" }}>
        <div className="row-sm">
          <div className="col-12-sm">
            <h3>{data.name}</h3>
          </div>
        </div>
        <div className="row-sm">
        <div className="col-12-sm">
          <img width="250" height="250" src={data.imageURL} alt="shirt_image" />
          </div>
        </div>
        <div className="row-sm" style={{ display: "flex", marginTop:"15px" }}>
          <div className="col-5-sm">
            <h4>Rs {data.price}</h4>
            <p>Qty- {data.quantity}</p>
          </div>
          <div className="offset-2 col-5-sm" style={{paddingTop:"20px"}}>
            <Button onClick={()=>{addToCart(index)}} variant="outlined" startIcon={<AddShoppingCartIcon />}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
    
 )})
  );
}
