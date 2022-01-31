import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import BeforLike from '../img/befor-like.png'
import CartPlus from '../img/cart-plus.png'
import CardModal from './CardModal';



const ProductCard = () => {
    const {user, getProducts, products} = React.useContext(AuthContext)

    useEffect(() => {
        getProducts()
    }, [])

    console.log(products)
    
    if(!user){
        return <Navigate to="login"/>
    }
    

    if(!products){
        return <h2>Loading...</h2>
    }
    return (
        <div className="cards">
        <Grid container spacing={4}>
            
            {products.map(
                (item) =>
                    (
                    <Grid key={item.id} item xs={6} sm={6} md={3}>
                        <div className="main-card">
                           <CardModal product={item}/>
                           <div className="card-context">
                           <div className="cart-like">
                                    <div className='like2'>
                                        <img src={BeforLike }/>
                                    </div>
                                   
                                   <div className='cart2'>
                                     <img src={CartPlus} />
                                   </div>
                               </div>
                               <div className="card-name">
                                    <div className='like'>
                                        <img src={BeforLike }/>
                                    </div>
                                   <p>{item.name}</p>
                                   <div className='add-cart'>
                                     <img src={CartPlus} />
                                   </div>
                               </div>
                               <p className='card-price'> {item.price}  сом</p>
                               
                               <p className='prodona'>Продано: 21</p>
                           </div>
                        </div>
                    </Grid>
                    )
                )}
        </Grid>
        </div>
    );
};

export default ProductCard;