import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { Grid } from '@mui/material';

import AdminCardModal from './AdminCardModal';

const AdminProductCard = () => {
    const {user, getProducts, products, handleDelete} = React.useContext(AuthContext)
    
    useEffect(() => {
        getProducts()
    },[])


    console.log(products)
    console.log(user)

    if(!user){
        return <Navigate to="/login"/>
    }

    if(!products){
        return <h2>Loading...</h2>
    }
    return (
        <div>
        <Grid container spacing={4}>
            {
                products.map((item) => {
                    console.log(item)
                    return item.userId === user.uid? (
                        <Grid key={item.id} item xs={6} sm={6} md={3}>
                        <div className="main-card admin-card">
                        <div className='card-img'>
                               <img  src={item.img} alt={item.name} />
                               
                           </div>
                           <div className="card-context">
                               <div className="card-name">
                                   <p >{item.name}</p>
                               </div>
                               <p className='card-price'> {item.price}  сом</p>
                               <p className="prodon">Продано: 21</p>
                               <div className="admin-card-btns">
                               <AdminCardModal product={item}/>
                                
                                <button onClick={()=>handleDelete(item.docId)} className="chenge">Удалить</button>
                               </div>
                           </div>
                        </div>
                    </Grid>
                    ):(
                        null
                    )
                })
            }
        </Grid>
        </div>
    );
};

export default AdminProductCard;    