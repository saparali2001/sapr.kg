import React from "react";

import { calcSubPrice, calcTotalPrice } from "../helpers/calcPrice";

export const MainContext = React.createContext();

let cart = JSON.parse(localStorage.getItem("cart"));
let like = JSON.parse(localStorage.getItem("like"));

const Init_State = {
  products: null,
  productsCount: cart ? cart.products.length : 0,
  like: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_CLIENT_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_AND_DELETE_PRODUCT_IN_CART":
      return { ...state, productsCount: action.payload }; 
    case "ADD_AND_DELETE_PRODUCT_IN_LIKE":
      return { ...state, };
    case "GET_CART":
      return { ...state, cart: action.payload };
    case "GET_LIKE":
      return { ...state, like: action.payload };
    default:
      return state;
  }
};

const MainProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, Init_State);

  

  const addAndDeleteProductInCard = (product) => {
    console.log("Context product:", product)
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
  
    let cartProduct = {
      product: product,
      count: 1,
      subPrice: 0,
      // id: Date.now()
      
    };
    console.log(product)
    cartProduct.subPrice = calcSubPrice(cartProduct);

    let check = cart.products.find((item) => {
      console.log(item)
      return item.product.docId ===  product.docId;
    });

    // console.log(check);

    if (!check) {
      cart.products.push(cartProduct);
      console.log(cart)
    } else {
      cart.products = cart.products.filter((item) => {
        console.log("Worked!")
        return item.product.docId !== product.docId;
      });
    }

    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));

    let action = {
      type: "ADD_AND_DELETE_PRODUCT_IN_CART",
      payload: cart.products.length,
    };

    dispatch(action);
    console.log(cart.totalPrice)
    getCart()
  };

 

  const checkProductInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
      };
    }

    let check = cart.products.find((item) => {
      return item.product.docId === id;
    });

    if (!check) {
      return false;
    } else {
      return true;
    }
  };

  const getCart = async () => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    let action = {
      type: "GET_CART",
      payload: cart,
    };
    dispatch(action);
  };

  const changeCountCartProduct = (value, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map((item) => {
      if (item.product.id === id) {
        item.count = value;
        item.subPrice = calcSubPrice(item);
      }
      return item;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  };

  const deleteProductInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.filter((item) => {
      return item.products.id !== id;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();

    let action = {
      type: "ADD_AND_DELETE_PRODUCT_IN_CART",
      payload: cart.products.length,
    };

    dispatch(action);
  };

  const addAndDeleteProductInLike = (product) => {
    let like = JSON.parse(localStorage.getItem("like"));

    if (!like) {
      like = {
        products: [],
        
      };
    }

    let cartProduct = {
      product: product,
      
    };

    

    let check = like.products.find((item) => {
      return item.product.docId === product.docId;
    });

    // console.log(check);

    if (!check) {
      like.products.push(cartProduct);
    } else {
      like.products = like.products.filter((item) => {
        return item.product.docId !== product.docId;
      });
    }

    
    localStorage.setItem("like", JSON.stringify(like));

    let action = {
      type: "ADD_AND_DELETE_PRODUCT_IN_LIKE",
      payload: like.products.length,
    };

    dispatch(action);
  };

  const checkProductInLike = (id) => {
    let like = JSON.parse(localStorage.getItem("like"));
    if (!like) {
      like = {
        products: [],
      };
    }

    let check = like.products.find((item) => {
      return item.product.docId === id;
    });

    if (!check) {
      return false;
    } else {
      return true;
    }
  };

  const getLike = async () => {
    let like = JSON.parse(localStorage.getItem("like"));

    if (!like) {
      like = {
        products: [],
       
      };
    }

    let action = {
      type: "GET_LIKE",
      payload: like,
    };
    dispatch(action);
  };

  return (
    <MainContext.Provider
      value={{
        
        addAndDeleteProductInCard,
        checkProductInCart,
        getCart,
        changeCountCartProduct,
        deleteProductInCart,
        addAndDeleteProductInLike,
        checkProductInLike: checkProductInLike,
        getLike: getLike,
        products: state.products,
        productsCount: state.productsCount,
        cart: state.cart,
        like:state.like,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainProvider;
