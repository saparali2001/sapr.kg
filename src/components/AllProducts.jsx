import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import ProductCard from './ProductCard';

const AllProducts = () => {
    const {user, getProducts, products} = React.useContext(AuthContext)

    useEffect(() => {
        getProducts()
    }, [])

    if(!user){
        return <Navigate to="login"/>
    }
    

    if(!products){
        return <h2>Loading...</h2>
    }
    
    return (
        <div>
            <div className="cards">
            <Grid container spacing={4}>
                {products.map(
                (item) =>
                    (<Grid key={item.id} item xs={6} sm={6} md={3}>
                        <div >
                          <ProductCard product={item} />
                        </div>
                    </Grid>)
                )}
            </Grid>
        </div>
        </div>
    );
};

export default AllProducts;