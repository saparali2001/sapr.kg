import React from 'react';
import { MainContext } from '../context/MainProvider';
import BeforLike from '../img/befor-like.png'
import AfterLike from '../img/like-after.png'
import CartPlus from '../img/cart-plus.png'
import CartAfter from '../img/cart-after.png'

const Like = ({like}) => {
    // console.log(like)
    const { addAndDeleteProductInCard,addAndDeleteProductInLike, checkProductInCart, checkProductInLike } =
    React.useContext(MainContext);
    console.log(like)
    return (
        <div>
        {like.products.map((item) => {

           return <div className="card">
        
            <img width="100%" src={item.product.image} alt="photo" className="card-img" />
            <div className="card-buttons">
              {checkProductInCart(item.product.id) ? (
                <button className="card-cart"
                  
                  onClick={() => addAndDeleteProductInCard(item.product)}
                >
                  <img width={40} src={CartAfter} alt="CartIcon" />
                </button>
              ) : (
                <button className="card-cart"
                  
                  onClick={() => addAndDeleteProductInCard(item.product)}
                >
                  <img width={40} src={CartPlus} alt="CartIcon" />
                </button>
              )}
              {checkProductInLike(item.product.id) ? (
                <button className="card-like"
                  
                  onClick={() => addAndDeleteProductInLike(item.product)}
                >
                  <img width={40} src={AfterLike} alt="CartIcon" />
                </button>
              ) : (
                <button className="card-like"
                  
                  onClick={() => addAndDeleteProductInLike(item.product)}
                >
                  <img width={40} src={BeforLike} alt="CartIcon" />
                </button>
              )}
             
            </div>
            <p className="product-name">{item.product.name}</p>
            <h3 className="card-price"> <strong>Price:</strong> {item.product.price}som</h3>
            <p className="card-text">{item.product.description}...</p>
           
          </div>
        })}
        </div>
    );
};

export default Like;