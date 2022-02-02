export const calcSubPrice = (cardProduct) => {
  console.log(cardProduct)
    return cardProduct.count * cardProduct.product.price;
  };
  
  export const calcTotalPrice = (products) => {
    let totalPrice = 0;
    products.forEach((item) => {
      totalPrice += item.subPrice;
    });
    return totalPrice;
  };
  