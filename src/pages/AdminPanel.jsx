import React from 'react';
import AddProduct from '../components/AddProduct';
import AdminProductCard from '../components/AdminProductCard';


const AdminPanel = () => {
    return (
        <div className='container'>
            <AddProduct/>
            <AdminProductCard/>
        </div>
    );
};

export default AdminPanel;