import React from 'react';
import { Link } from 'react-router-dom';
import AddProduct from '../components/AddProduct';
import AdminProductCard from '../components/AdminProductCard';


const AdminPanel = () => {
    return (
        <div className='container'>
            <Link className="add-product-btn zakaz-btn" to="/zakaz">Заказы</Link>
            <AddProduct/>
            <AdminProductCard/>
        </div>
    );
};

export default AdminPanel;