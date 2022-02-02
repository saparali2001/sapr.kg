import React from 'react';
import AllProducts from '../components/AllProducts';
import Categoriya from '../components/Categoriya';
import MySeach from '../components/MySeach';


const MainPage = () => {
    return (
        <div className="container">
            <MySeach/>
            <Categoriya/>
            <AllProducts/>
        </div>
    );
};

export default MainPage;