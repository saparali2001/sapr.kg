import React from 'react';
import Categoriya from '../components/Categoriya';
import MySeach from '../components/MySeach';
import ProductCard from '../components/ProductCard';

const MainPage = () => {
    return (
        <div className="container">
            <MySeach/>
            <Categoriya/>
            <ProductCard/>
        </div>
    );
};

export default MainPage;