import React, { useEffect } from "react";
import { MainContext } from "../context/MainProvider";
import CartTable from "../components/CartTable";
import { Container } from "@mui/material";
import EmptyBox from '../img/pngegg.png';

import CartTotalPrice from "../components/CartTotalPrice";

const CartPage = () => {
  const { getCart, cart } = React.useContext(MainContext);

  useEffect(() => {
    getCart();
  }, []);

  // console.log(cart);

  if (!cart) {
    return <h2>Loading...</h2>;
  }

  if (cart.products.length === 0) {
    return  <div className="empty">
    <img width={400} src={EmptyBox} alt="" />
    <h2>Your cart is empty.</h2>
    </div>
  }


  return (
    <div>
      <Container maxWidth="md">
        <CartTable cart={cart} />
        <CartTotalPrice totalPrice={cart.totalPrice} cart={cart.products}/>
      </Container>
      
    </div>
  );
};

export default CartPage;
