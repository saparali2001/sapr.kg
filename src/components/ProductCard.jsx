import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { MainContext } from '../context/MainProvider';
import BeforLike from '../img/befor-like.png'
import AfterLike from '../img/like-after.png'
import CartPlus from '../img/cart-plus.png'
import CartAfter from '../img/cart-after.png'
import CardModal from './CardModal';



const ProductCard = ({product}) => {
    console.log("Like:", product)
    const { addAndDeleteProductInCard,addAndDeleteProductInLike, checkProductInCart, checkProductInLike } = React.useContext(MainContext);
    
    return (
        <div className="cards">
                   
                        <div className="main-card">
                           <CardModal product={product}/>
                           <div className="card-context">
                           <div className="cart-like">
                                    <div className='like2'>
                                        <img src={BeforLike } onClick={() => addAndDeleteProductInCard(product)}/>
                                    </div>
                                   
                                   <div className='cart2 '>
                                     <img src={CartPlus} onClick={() => addAndDeleteProductInCard(product)} />
                                   </div>
                               </div>
                               <div className="card-name">
                               {checkProductInLike(product.docId) ? (
                                        <div className="like"
                                        
                                        onClick={() => addAndDeleteProductInLike(product)}
                                        >
                                        <img  src={AfterLike} alt="CartIcon" />
                                        </div>
                                    ) : (
                                        <div className="like"
                                        
                                        onClick={() => addAndDeleteProductInLike(product)}
                                        >
                                        <img  src={BeforLike} alt="CartIcon" />
                                        </div>
                                    )}
                                    {/* <div className="like">
                                        <img  src={AfterLike} alt="CartIcon" />
                                    </div> */}
                                   <p>{product.name}</p>
                                   <div className='add-cart'>
                                   
                                   {
                                        !checkProductInCart(product.docId)?(
                                            <div className='add-cart' onClick={() => addAndDeleteProductInCard(product)}>
                                               <img src={CartPlus}/>
                                               {console.log("HHHHHH")}
                                            </div>
                                        ):(
                                            <div className='add-cart' onClick={() => addAndDeleteProductInCard(product)}>
                                              <img src={CartAfter}/>
                                                
                                            </div>
                                        )
                                    }
                                   
                                   </div>
                               </div>
                               <p className='card-price'> {product.price}  сом</p>
                               
                               <p className='prodona'>Продано: 21</p>
                           </div>
                        </div>
                    
        </div>
    );
};

export default ProductCard;