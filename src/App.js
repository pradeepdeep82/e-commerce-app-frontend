import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./Authentication/login.js";
import { ForgotPassword } from "./Authentication/forgot-password.js";
import { ResetPassword } from "./Authentication/reset-password.js";
import { SignUp } from "./Authentication/singup.js";
import DashboardHome from "./Components/dashboardHome";
import DashboardProfile from "./Components/dashboardProfile";
import Products from "./Components/products";
import Wishlist from "./Components/wishlist";
import LoginType from "./Authentication/loginType.js"
import { API_URL } from "./Components/global-constants";
import AdminPage from "./Components/adminPage";
import AddProducts from "./Components/addProducts";

function App() {
  const [myCart, setMyCart] = useState([]);

  const getMyCartNo = () => {
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
        if (data.statusCode === 400) {
          setMyCart(data.message);
          // getMyCartNo();
        } else if (data.statusCode === 200) {
          setMyCart([]);
        }
      });
  };

  useEffect(() => getMyCartNo(), []);
  // const [products, setProducts] = useState([]);
  // const getProducts = () => {
  //   fetch(`${API_URL}/products`, {
  //     method: "GET",
  //     headers: {
  //       "content-Type": "application/json",
  //       "x-auth-token": localStorage.getItem("token"),
  //     },
  //   })
  //     .then((data) => data.json())
  //     .then((data) => {
  //       setProducts(data.message);
  //       // console.log(products)
  //     });
  // };
  // useEffect(() => getProducts, []);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/logintype">
          <LoginType/>
        </Route>
        <Route exact path="/adminPage">
          <AdminPage/>
        </Route>
        <Route exact path="/adminPage/addProducts">
          <AddProducts/>
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/login/forgot-password">
          <ForgotPassword />
        </Route>
        <Route exact path="/reset-password/:username/:token">
          <ResetPassword />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/">
          <DashboardHome />
          <Background />
        </Route>
        <Route exact path="/wishlist">
          <DashboardProfile myCart={myCart} />
          <Wishlist getMyCartNo={getMyCartNo} />
        </Route>
        <Route exact path="/home">
          <DashboardProfile myCart={myCart} />
        </Route>
        <Route exact path="/products">
          <DashboardProfile myCart={myCart} />
          <Products getMyCartNo={getMyCartNo} />
          {/* {
            products.map(data=>{
              return(
              <Products
               name={data.name}
               imageUrl={data.imageURL}
               price={data.price}
              />
            )})

          } */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
function Background() {
  return (
    <div>
      <div className="background">
        
      </div>
      <h3 className="text">Find Trendy Tshirts Here</h3>
    </div>
  );
}
