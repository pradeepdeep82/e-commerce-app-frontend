import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { API_URL } from "../global-constants";
import {useState, useEffect} from "react";

const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];



export default function Review() {
  const addressString= localStorage.getItem("address");
  const address=JSON.parse(addressString)
  // console.log(typeof(address));
  // const {address1}=address;
  // console.log(address1)
const addresses = [address.address1, address.city,address.state,address.zip,address.country];
console.log(addresses)

const cardDetailString=localStorage.getItem("cardDetails");
const cardDetails=JSON.parse(cardDetailString);
let cardNumber= cardDetails.cardNumber.substr(cardDetails.cardNumber.length-4)
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: cardDetails.cardName },
  { name: 'Card number', detail: `xxxx-xxxx-xxxx-${cardNumber}` },
  { name: 'Expiry date', detail: cardDetails.expiryDate },
];

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
        setText(false);
        }else if(data.statusCode===200){
          setText(data.message);
        }
    });
};
useEffect(() => getMyCart(), []);


const totalPrice = [];
let sum;
  myCart.map((data) => totalPrice.push(data.price))
  sum = totalPrice.reduce((a, b) => a + b, 0)


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {myCart.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.type} />
            <Typography variant="body2">Rs. {product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
           Rs. {sum}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{address.firstName} {address.lastName}</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}