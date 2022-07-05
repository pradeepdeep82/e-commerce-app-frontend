import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { API_URL } from "./global-constants";


// export const UserContext = createContext()
export default function Wishlist({ getMyCartNo}) {
  const [myCart, setMyCart] = useState([]);
  const [text, setText]= useState("");


  const getMyCart = () => {
    fetch(`${API_URL}/wishlist`, {
      method: "GET",
      headers: {
        "content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
        username: localStorage.getItem("currentUser"),
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if(data.statusCode===400){
          setMyCart(data.message);
          setText(false)
          getMyCartNo();
          }else if(data.statusCode===200){
            setText(data.message);
          }
      });
  };

  
  const deleteProduct = (index) => {
    const data=myCart[index];
    const bodyData={
      username:localStorage.getItem("currentUser"),
      data:data
    }
    fetch(`${API_URL}/wishlist`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
        username: localStorage.getItem("currentUser"),
        index: index,
      },
      body:JSON.stringify(bodyData)
    })
      .then((data) => data.json())
      .then((data) => {
        setMyCart(data.message);
        getMyCartNo();
        getMyCart();
       
      })
      
    
  

  };
  useEffect(() => getMyCart(), []);
  const totalPrice = [];
  let sum;
   if(!text){
    myCart.map((data) => totalPrice.push(data.price))
    sum = totalPrice.reduce((a, b) => a + b, 0)
   }else{
    sum=0
   }

  return (
    // <UserContext.Provider value={myCart}>
    <div>
      <div
        className="row-sm"
        style={{ textAlign: "justify", paddingTop: "30px" }}
      >
        <div className="offset-1 col-2-sm">
          <h4>Shopping Cart</h4>
        </div>
      </div>
     
        { myCart.map((data, index) => {
          return (
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5vw",
                  marginLeft:"10%"
                }}
                className="wishlist"
              >
                <div >
                  <img
                    width="150"
                    height="150"
                    src={data.imageURL}
                    alt="shirt_image"
                  />
                </div>
                <div >
                  <h4>{data.name}</h4>
                  <p style={{ textAlign: "left" }}>Rs- {data.price}</p>
                </div>
                <div>
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      deleteProduct(index);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          );
        })
      }
  
      <div>
     { !text ?<h4 style={{marginTop:"20px",marginLeft:"10%",textAlign:"left"}}>Total Amount - Rs. {sum}</h4>
        :<h4>{text}</h4>
    }
      </div>
    </div>
    // </UserContext.Provider>
  );
}
